import json, csv, unicodedata

def normalize(s):
    if not s: return ''
    s = s.strip().lower()
    return ''.join(c for c in unicodedata.normalize('NFD', s) if unicodedata.category(c) != 'Mn')

# 25 real video mappings
# Map normalized target product name -> video link
video_assignments = {
    normalize("PitchLab360"): "https://drive.google.com/file/d/1bYLxn5TCm_Hwq6DG7-u7UYui5N5szYUm/view",
    normalize("Polycheck"): "https://drive.google.com/file/d/111GwtqEWziIQFwi8BxMgQhiR6ZT-o2YW/view",
    normalize("GovTest"): "https://drive.google.com/file/d/1B1RWm_HmN4HlHjiIzlDzh58FqfGpITkX/view",
    normalize("Test 9 Ejes"): "https://drive.google.com/file/d/1IpEH495QROwq8k3VdkaD52tjbJKX68Iv/view",
    normalize("Test 9 Ejes Colombia"): "https://drive.google.com/file/d/1gXzEi2ZNE4daXYBnidmccgcgkWj2Db84/view",
    normalize("Gober Santander"): "https://drive.google.com/file/d/1JZj-tysFp6FlbX3NeH5Y4pINnr_1dNzg/view",
    normalize("ConvergenceLab"): "https://drive.google.com/file/d/1r-HPmA_JXTUB45rQpJKJ7RzEZwTaReno/view",
    normalize("Alocandidato"): "https://drive.google.com/file/d/1bOY7U-cqev5172oxBTSLvazsdPdM2hTT/view",
    normalize("HassApp"): "https://drive.google.com/file/d/1WMHMOz0j_DHamcykskRayQAUyCyPpryw/view",
    normalize("ExportaCheck"): "https://drive.google.com/file/d/1X7QuSOTr0gCKC7rLTdSzvLsoyWHbyw_i/view", # Termoexportador
    normalize("NotariaDoc"): "https://drive.google.com/file/d/1BNngISeVJ6rFuEdgpbrmGFCxAjOLwgFE/view",
    normalize("NotariaIQ"): "https://drive.google.com/file/d/19wx_KXzy9Byorjwu40xK5E3ymxglD_aO/view",
    normalize("Radica Notaria"): "https://drive.google.com/file/d/1cmOw8OCh4UhW1YzWrMBpbsMvaZZjnrSV/view",
    normalize("CAResponde"): "https://drive.google.com/file/d/1Z9kNrQxgHan2YKVw9oRovIzGJfLPp86j/view",
    normalize("AlcaldIA"): "https://drive.google.com/file/d/1rfDiEcx6BD2r3HDHG5GSUVze8Bd8O9ww/view",
    normalize("Barranquilla"): "https://drive.google.com/file/d/1X7_dn5FwxNv9XvoflFxJrNYQPzxmr8DJ/view",
    normalize("Test de sostenibilidad universitaria"): "https://drive.google.com/file/d/1GDyYWyFkWJktyAc-a9Alec8xrri4dNEU/view", # Universia
    normalize("Germina"): "https://drive.google.com/file/d/18Cy40OJJ7A1pF3jrQiRRECXgc3eyu7kK/view",
    normalize("Geovivienda"): "https://drive.google.com/file/d/1awsOrJvFAQg4JV4zUP4_4vhpDaucnehM/view",
    normalize("Cuidar la Democracia"): "https://drive.google.com/file/d/1cGZzC2g1HsFeL4M3TziwMUL9o692WI-x/view",
    normalize("Data Promce"): "https://drive.google.com/file/d/1TJcmWLiAGKcxoCspHzYNniXq0ip3uiFw/view",
    normalize("Sabana Centro Sostenible"): "https://drive.google.com/file/d/1WARAZMkb6xri4bO8MIxiPEIVHqOUqbfo/view",
    normalize("SIAG"): "https://drive.google.com/file/d/1iZEkSOuXZ5h4kMB0xZBnUOpvovll0vQx/view",
    normalize("Geoanalisis Clinica Universidad de la Sabana"): "https://drive.google.com/file/d/1KdjNdT396zr8c9nPjeeX_xjB-99c_8Ka/view"
}

# 1. Update products_data.json
with open('products_data.json', 'r', encoding='utf-8') as f:
    products = json.load(f)

matched_count = 0
for p in products:
    norm_name = normalize(p['name'])
    
    # Check exact match first
    assigned_video = None
    if norm_name in video_assignments:
        assigned_video = video_assignments[norm_name]
    else:
        for k, v in video_assignments.items():
            if (len(k) > 5 and k == norm_name) or (k in norm_name and len(k) > 12):
                assigned_video = v
                break
            
    if assigned_video:
        p['videoUrl'] = assigned_video
        matched_count += 1
        print(f"[MATCH {matched_count}] '{p['name']}' -> {assigned_video}")
    else:
        # Clear any dummy/placeholder video
        p['videoUrl'] = ""

with open('products_data.json', 'w', encoding='utf-8') as f:
    json.dump(products, f, ensure_ascii=False, indent=2)

print(f"\nSuccessfully set exact real videos for {matched_count} products (all other products have videoUrl = '').")

# 2. Update Productos_Software_GovLab_Sectores.csv
with open('Productos_Software_GovLab_Sectores.csv', 'r', encoding='utf-8') as f:
    csv_lines = list(csv.reader(f, delimiter=';'))

headers = csv_lines[0]
video_col_idx = 15 # Enlace Video Demo

csv_matched = 0
for row in csv_lines[1:]:
    if len(row) > video_col_idx:
        p_name = row[1].strip()
        norm_name = normalize(p_name)
        
        assigned_video = None
        for k, v in video_assignments.items():
            if k == norm_name or (len(k) > 5 and k in norm_name) or (len(norm_name) > 5 and norm_name in k):
                assigned_video = v
                break
                
        if assigned_video:
            row[video_col_idx] = assigned_video
            csv_matched += 1
        else:
            row[video_col_idx] = "NA"

with open('Productos_Software_GovLab_Sectores.csv', 'w', encoding='utf-8', newline='') as f:
    writer = csv.writer(f, delimiter=';')
    writer.writerows(csv_lines)

print(f"Updated CSV with {csv_matched} real video links and NA for the rest.")
