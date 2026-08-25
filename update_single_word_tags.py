# update_single_word_tags.py
import json

with open("products_data.json", "r", encoding="utf-8") as f:
    products = json.load(f)

# Define single-word industry/topic tags for each product
single_word_tag_map = {
  "PitchLab360": ["Gobierno", "Política", "Medios"],
  "Polycheck": ["Medios", "Gobierno", "Política"],
  "PitchLab Med": ["Salud", "Farma", "Regulación"],
  "PitchLab Entrenamiento": ["Empresa", "Ventas", "Corporativo"],
  "GovTest": ["Política", "Gobierno", "Medios"],
  "Test 9 Ejes": ["Política", "Gobierno", "Democracia"],
  "Test 9 Ejes Colombia": ["Política", "Gobierno", "Democracia"],
  "AlcaldesaIA": ["Gobierno", "Ciudad", "Ciudadanía"],
  "Gober Santander": ["Gobierno", "Región", "Ciudadanía"],
  "Govi": ["Gobierno", "Ciudadanía", "Tecnología"],
  "ConvergenceLab": ["Tecnología", "Telecomunicaciones", "Empresa"],
  "Alocandidato": ["Política", "Campañas", "Gobierno"],
  "HassApp": ["Agro", "Exportación", "Comercio"],
  "ExportaCheck": ["Agro", "Exportación", "Empresa"],
  "NotariaDoc": ["Notarías", "Justicia", "Legal"],
  "NotariaIQ": ["Notarías", "Operaciones", "Empresa"],
  "Radica Notaría": ["Notarías", "Vivienda", "Construcción"],
  "Resume Expedientes": ["Justicia", "Gobierno", "Legal"],
  "NewsletterMaker": ["Medios", "Comunicación", "Empresa"],
  "CAResponde": ["Medio Ambiente", "Gobierno", "Ciudadanía"],
  "AlcaldIA": ["Gobierno", "Ciudad", "Ciudadanía"],
  "PoliciApp-Eco": ["Seguridad", "Medio Ambiente", "Gobierno"],
  "PoliciaAmbiental": ["Seguridad", "Medio Ambiente", "Gobierno"],
  "LegisCheck": ["Gobierno", "Justicia", "Legislativo"],
  "Barranquilla": ["Seguridad", "Gobierno", "Ciudad"],
  "Test de sostenibilidad universitaria": ["Educación", "Sostenibilidad", "Medio Ambiente"],
  "Asistente de agente para MetaRed": ["Educación", "Tecnología", "Universidad"],
  "MPAChat": ["Educación", "Gobierno", "Posgrados"],
  "AlumniCV": ["Educación", "Empleo", "Talento"],
  "AlumniChat": ["Educación", "Comunidad", "Alumni"],
  "Germina": ["Educación", "Emprendimiento", "Innovación"],
  "Geovivienda": ["Vivienda", "Ciudad", "Inmobiliario"],
  "Data Copilot": ["Tecnología", "Analítica", "Empresa"],
  "Cuidar la Democracia": ["Democracia", "Gobierno", "Opinión"],
  "Data Promce": ["Gobierno", "Región", "Desarrollo"],
  "Sabana Centro Sostenible": ["Región", "Sostenibilidad", "Gobierno"],
  "SIAG": ["Educación", "Gestión", "Universidad"],
  "Violencia Intrafamiliar en Colombia": ["Seguridad", "Social", "Familia"],
  "Recursos hospitalarios por cada 100.000 habitantes": ["Salud", "Hospitales", "Gobierno"],
  "Registros de la Base Única de afiliados - Adres - Mayo 2025": ["Salud", "Aseguramiento", "Gobierno"],
  "Envejecimiento poblacional en Colombia por Sexo y Área": ["Demografía", "Salud", "Social"],
  "Panorama de la Extorsión en Colombia (2010-2024)": ["Seguridad", "Justicia", "Policía"],
  "Delitos Sexuales en Colombia": ["Seguridad", "Justicia", "Social"],
  "El Panorama del envejecimiento poblacional en Colombia": ["Demografía", "Salud", "Social"],
  "Suicidios en Colombia 2023-2024": ["Salud", "Social", "Prevención"],
  "Llamadas totales al NUSE/123 por UPZ en Bogotá": ["Emergencias", "Seguridad", "Ciudad"],
  "Precios y productividad del arroz - Forecasting": ["Agro", "Comercio", "Economía"],
  "Siniestralidad vial en Bogotá - Forecasting": ["Movilidad", "Seguridad", "Ciudad"],
  "Siniestralidad vial en Bogotá - Siniestros": ["Movilidad", "Seguridad", "Ciudad"],
  "Siniestralidad vial en Bogotá - Víctimas": ["Movilidad", "Salud", "Seguridad"],
  "Siniestralidad vial en Bogotá - Análisis espacial": ["Movilidad", "Ciudad", "Urbanismo"],
  "Llamadas totales al NUSE/123 por UPZ en Bogotá - Forecasting": ["Emergencias", "Seguridad", "Ciudad"],
  "Análisis Clínica Universidad de la Sabana": ["Salud", "Hospitales", "Gestión"],
  "Geoanálisis Clínica Universidad de la Sabana": ["Salud", "Territorio", "Hospitales"],
  "Observatorio Social de Zipaquirá - OSZ": ["Gobierno", "Social", "Ciudad"],
  "ELA-NOM": ["Política", "Medios", "Electoral"],
  "Doctorado en IA": ["Educación", "Investigación", "Gobierno"],
  "Maestría en IA": ["Educación", "Gobierno", "Empresa"],
  "Pregrado en IA": ["Educación", "Tecnología", "Ciencia"],
  "Bootcamps en IA": ["Educación", "Empresa", "Capacitación"]
}

for p in products:
    name = p["name"]
    base_tags = single_word_tag_map.get(name, ["Gobierno"])
    tags = list(base_tags)
    if p.get("readyForSale") and "Listo para propuesta" not in tags:
        tags.append("Listo para propuesta")
    p["tags"] = tags

with open("products_data.json", "w", encoding="utf-8") as f:
    json.dump(products, f, ensure_ascii=False, indent=2)

print(f"Updated {len(products)} products with concise single-word industry tags.")
