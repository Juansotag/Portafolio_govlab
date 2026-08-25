import json, csv, unicodedata

def normalize(s):
    if not s: return ''
    s = s.strip().lower()
    return ''.join(c for c in unicodedata.normalize('NFD', s) if unicodedata.category(c) != 'Mn')

# 1. Read real Tableau links from Productos_tableros_GovLab.csv
tableau_map = {}
with open('Productos_tableros_GovLab.csv', 'r', encoding='latin-1') as f:
    reader = csv.reader(f, delimiter=';')
    headers = next(reader)
    for row in reader:
        if not row or len(row) < 8: continue
        raw_name = row[2].strip()
        # Decode correctly from latin-1 / cp1252 / utf8
        try:
            name = raw_name.encode('latin-1').decode('utf-8')
        except:
            name = raw_name
        
        web_link = row[7].strip()
        video = row[11].strip() if len(row) > 11 else ''
        if video == 'NA': video = ''
        
        entry = {
            'name': name,
            'appUrl': web_link,
            'videoUrl': video
        }
        tableau_map[normalize(name)] = entry
        tableau_map[normalize(raw_name)] = entry
        # Special matching for spelling variations like Sinestralidad -> Siniestralidad
        if 'sinestralidad' in normalize(name):
            tableau_map[normalize(name).replace('sinestralidad', 'siniestralidad')] = entry

print(f"Loaded {len(tableau_map)} Tableau mappings.")

# 2. Update products_data.json with real Tableau links
with open('products_data.json', 'r', encoding='utf-8') as f:
    products = json.load(f)

updated_count = 0
for p in products:
    norm_p = normalize(p['name'])
    match = None
    if norm_p in tableau_map:
        match = tableau_map[norm_p]
    else:
        # Partial match
        for k, v in tableau_map.items():
            if k and (k in norm_p or norm_p in k):
                match = v
                break
    
    if match:
        old_url = p.get('appUrl', '')
        p['appUrl'] = match['appUrl']
        if match['videoUrl']:
            p['videoUrl'] = match['videoUrl']
        print(f"Updated '{p['name']}':")
        print(f"  Old: {old_url}")
        print(f"  New: {p['appUrl']}")
        if match['videoUrl']:
            print(f"  Video: {p['videoUrl']}")
        updated_count += 1

with open('products_data.json', 'w', encoding='utf-8') as f:
    json.dump(products, f, ensure_ascii=False, indent=2)

print(f"\nSuccessfully updated {updated_count} products in products_data.json!")

# 3. Update Productos_Software_GovLab_Sectores.csv
with open('Productos_Software_GovLab_Sectores.csv', 'r', encoding='utf-8') as f:
    csv_lines = list(csv.reader(f, delimiter=';'))

headers = csv_lines[0]
link_col_idx = 13 # Link de Despliegue
video_col_idx = 15 # Enlace Video Demo

csv_updated_count = 0
for row in csv_lines[1:]:
    if len(row) > 13:
        p_name = row[1].strip()
        norm_p = normalize(p_name)
        match = None
        if norm_p in tableau_map:
            match = tableau_map[norm_p]
        else:
            for k, v in tableau_map.items():
                if k and (k in norm_p or norm_p in k):
                    match = v
                    break
        if match:
            row[link_col_idx] = match['appUrl']
            if match['videoUrl']:
                row[video_col_idx] = match['videoUrl']
            csv_updated_count += 1

with open('Productos_Software_GovLab_Sectores.csv', 'w', encoding='utf-8', newline='') as f:
    writer = csv.writer(f, delimiter=';')
    writer.writerows(csv_lines)

print(f"Successfully updated {csv_updated_count} rows in Productos_Software_GovLab_Sectores.csv!")
