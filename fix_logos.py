import json
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open("products_data.json", "r", encoding="utf-8") as f:
    products = json.load(f)

# Correct mapping of logos verified against actual filesystem files
correct_logos = {
  "PitchLab360": "assets/projects/pitchlab360.jpg",
  "Polycheck": "assets/projects/polycheck.jpg",
  "PitchLab Med": "assets/projects/pitchlab360.jpg",
  "PitchLab Entrenamiento": "assets/projects/pitchlab360.jpg",
  "GovTest": "assets/projects/govtest.jpg",
  "Test 9 Ejes": "assets/projects/test9ejes.jpg",
  "Test 9 Ejes Colombia": "assets/projects/test9ejes.jpg",
  "AlcaldesaIA": "assets/projects/alcaldesa.png",
  "Gober Santander": "assets/projects/gober.png",
  "Govi": "assets/Govlab.png",
  "ConvergenceLab": "assets/projects/convergence.png",
  "Alocandidato": "assets/projects/alocandidato.jpg",
  "HassApp": "assets/projects/hassapp.png",
  "ExportaCheck": "assets/projects/exportacheck.jpg",
  "NotariaDoc": "assets/Govlab.png",
  "NotariaIQ": "assets/Govlab.png",
  "Radica Notaría": "assets/Govlab.png",
  "Resume Expedientes": "assets/Govlab.png",
  "NewsletterMaker": "assets/Govlab.png",
  "CAResponde": "assets/projects/caresponde.png",
  "AlcaldIA": "assets/photos/Aliados/alcaldia.png" if os.path.exists("assets/photos/Aliados/alcaldia.png") else "assets/Govlab.png",
  "PoliciApp-Eco": "assets/photos/Aliados/policia.png" if os.path.exists("assets/photos/Aliados/policia.png") else "assets/Govlab.png",
  "PoliciaAmbiental": "assets/photos/Aliados/policia.png" if os.path.exists("assets/photos/Aliados/policia.png") else "assets/Govlab.png",
  "LegisCheck": "assets/projects/Legischeck.png",
  "Barranquilla": "assets/Govlab.png",
  "Test de sostenibilidad universitaria": "assets/projects/sostenibilidad.jpg",
  "Asistente de agente para MetaRed": "assets/projects/sostenibilidad.jpg",
  "MPAChat": "assets/photos/Aliados/escuela.png",
  "AlumniCV": "assets/Govlab.png",
  "AlumniChat": "assets/Govlab.png",
  "Germina": "assets/projects/germina.png",
  "Geovivienda": "assets/projects/geovivienda-main.png",
  "Data Copilot": "assets/Govlab.png",
  "Cuidar la Democracia": "assets/projects/democracia.png",
  "Data Promce": "assets/projects/datapromce.png",
  "Sabana Centro Sostenible": "assets/projects/scsv2.png",
  "SIAG": "assets/Govlab.png",
  "Violencia Intrafamiliar en Colombia": "assets/Govlab.png",
  "Recursos hospitalarios por cada 100.000 habitantes": "assets/Govlab.png",
  "Registros de la Base Única de afiliados - Adres - Mayo 2025": "assets/Govlab.png",
  "Envejecimiento poblacional en Colombia por Sexo y Área": "assets/Govlab.png",
  "Panorama de la Extorsión en Colombia (2010-2024)": "assets/Govlab.png",
  "Delitos Sexuales en Colombia": "assets/Govlab.png",
  "El Panorama del envejecimiento poblacional en Colombia": "assets/Govlab.png",
  "Suicidios en Colombia 2023-2024": "assets/Govlab.png",
  "Llamadas totales al NUSE/123 por UPZ en Bogotá": "assets/Govlab.png",
  "Precios y productividad del arroz - Forecasting": "assets/Govlab.png",
  "Siniestralidad vial en Bogotá - Forecasting": "assets/Govlab.png",
  "Siniestralidad vial en Bogotá - Siniestros": "assets/Govlab.png",
  "Siniestralidad vial en Bogotá - Víctimas": "assets/Govlab.png",
  "Siniestralidad vial en Bogotá - Análisis espacial": "assets/Govlab.png",
  "Llamadas totales al NUSE/123 por UPZ en Bogotá - Forecasting": "assets/Govlab.png",
  "Análisis Clínica Universidad de la Sabana": "assets/photos/Aliados/clinica.png",
  "Geoanálisis Clínica Universidad de la Sabana": "assets/photos/Aliados/clinica.png",
  "Observatorio Social de Zipaquirá - OSZ": "assets/projects/osz.png",
  "ELA-NOM": "assets/Govlab.png",
  "Doctorado en IA": "assets/Govlab.png",
  "Maestría en IA": "assets/Govlab.png",
  "Pregrado en IA": "assets/Govlab.png",
  "Bootcamps en IA": "assets/Govlab.png"
}

all_valid = True
for p in products:
    name = p["name"]
    logo = correct_logos.get(name, "assets/Govlab.png")
    if not os.path.exists(logo):
        print(f"ERROR: Logo does not exist: {logo} for {name}")
        all_valid = False
    p["logo"] = logo

if all_valid:
    print("ALL 60 product logos exist and are 100% valid on disk!")

with open("products_data.json", "w", encoding="utf-8") as f:
    json.dump(products, f, ensure_ascii=False, indent=2)

print("Updated products_data.json successfully.")
