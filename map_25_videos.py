import json, csv, unicodedata

# 25 videos provided by user
videos_raw = [
    ("Polycheck.mp4", "https://drive.google.com/file/d/111GwtqEWziIQFwi8BxMgQhiR6ZT-o2YW/view"),
    ("Alocandidato.mp4", "https://drive.google.com/file/d/1bOY7U-cqev5172oxBTSLvazsdPdM2hTT/view"),
    ("Germina", "https://drive.google.com/file/d/10EAUg1tcYK2iH2DpextdZ_MiZFRjeEu4/view"),
    ("geoanalisis.mp4", "https://drive.google.com/file/d/1KdjNdT396zr8c9nPjeeX_xjB-99c_8Ka/view"),
    ("Pitchlab.mp4", "https://drive.google.com/file/d/1bYLxn5TCm_Hwq6DG7-u7UYui5N5szYUm/view"),
    ("Germina_video.mp4", "https://drive.google.com/file/d/18Cy40OJJ7A1pF3jrQiRRECXgc3eyu7kK/view"),
    ("Geovivienda.mp4", "https://drive.google.com/file/d/1awsOrJvFAQg4JV4zUP4_4vhpDaucnehM/view"),
    ("SabanaCentroSostenible.mp4", "https://drive.google.com/file/d/1WARAZMkb6xri4bO8MIxiPEIVHqOUqbfo/view"),
    ("ConvergenceLab.mp4", "https://drive.google.com/file/d/1r-HPmA_JXTUB45rQpJKJ7RzEZwTaReno/view"),
    ("Gober_Santander.mp4", "https://drive.google.com/file/d/1JZj-tysFp6FlbX3NeH5Y4pINnr_1dNzg/view"),
    ("SIAG.mp4", "https://drive.google.com/file/d/1iZEkSOuXZ5h4kMB0xZBnUOpvovll0vQx/view"),
    ("Cuidar la democracia.mp4", "https://drive.google.com/file/d/1cGZzC2g1HsFeL4M3TziwMUL9o692WI-x/view"),
    ("NotaríaDoc.mp4", "https://drive.google.com/file/d/1BNngISeVJ6rFuEdgpbrmGFCxAjOLwgFE/view"),
    ("AlcaldIA.mp4", "https://drive.google.com/file/d/1rfDiEcx6BD2r3HDHG5GSUVze8Bd8O9ww/view"),
    ("Barranquilla.mp4", "https://drive.google.com/file/d/1X7_dn5FwxNv9XvoflFxJrNYQPzxmr8DJ/view"),
    ("HassApp.mp4", "https://drive.google.com/file/d/1WMHMOz0j_DHamcykskRayQAUyCyPpryw/view"),
    ("caresponde.mp4", "https://drive.google.com/file/d/1Z9kNrQxgHan2YKVw9oRovIzGJfLPp86j/view"),
    ("NotaríaIQ.mp4", "https://drive.google.com/file/d/19wx_KXzy9Byorjwu40xK5E3ymxglD_aO/view"),
    ("RadicaNotaria.mp4", "https://drive.google.com/file/d/1cmOw8OCh4UhW1YzWrMBpbsMvaZZjnrSV/view"),
    ("Universia.mp4", "https://drive.google.com/file/d/1GDyYWyFkWJktyAc-a9Alec8xrri4dNEU/view"),
    ("Termoexportador.mp4", "https://drive.google.com/file/d/1X7QuSOTr0gCKC7rLTdSzvLsoyWHbyw_i/view"),
    ("Test9ejes_Colombia.mp4", "https://drive.google.com/file/d/1gXzEi2ZNE4daXYBnidmccgcgkWj2Db84/view"),
    ("Test9ejes.mp4", "https://drive.google.com/file/d/1IpEH495QROwq8k3VdkaD52tjbJKX68Iv/view"),
    ("GovTest.mp4", "https://drive.google.com/file/d/1B1RWm_HmN4HlHjiIzlDzh58FqfGpITkX/view"),
    ("Datapromce.mp4", "https://drive.google.com/file/d/1TJcmWLiAGKcxoCspHzYNniXq0ip3uiFw/view")
]

with open('products_data.json', 'r', encoding='utf-8') as f:
    products = json.load(f)

print(f"Total products in products_data.json: {len(products)}")
print(f"Total videos provided: {len(videos_raw)}")

for idx, p in enumerate(products):
    print(f"[{idx}] {p['name']}")
