// app.js - GovLab Portafolio
const PRODUCTS = [
  {
    "segment": "Sector PÃºblico",
    "tipo": "Software",
    "linea": "LÃ­nea PitchLab",
    "tags": [
      "PitchLab",
      "Discurso PolÃ­tico",
      "IA Generativa",
      "Claude",
      "Listo para la venta"
    ],
    "readyForSale": true,
    "name": "PitchLab360",
    "slogan": "Analiza el discurso, mejora el mensaje",
    "description": "AnÃ¡lisis de discurso polÃ­tico con Claude (Anthropic). Perfil comunicativo, anÃ¡lisis emocional, stakeholders, encuadres narrativos y potencial digital. Probado con candidatos presidenciales.",
    "status": "En lÃ­nea",
    "demoMode": "mostrar",
    "appUrl": "https://pitchlab360-production.up.railway.app/",
    "githubUrl": "https://github.com/Juansotag/PitchLab360",
    "logo": "assets/projects/pitchlab360.jpg",
    "videoUrl": "https://drive.google.com/file/d/1bYLxn5TCm_Hwq6DG7-u7UYui5N5szYUm/view?usp=drive_link",
    "pptUrl": ""
  },
  {
    "segment": "Sector PÃºblico",
    "tipo": "Software",
    "linea": "LÃ­nea PitchLab",
    "tags": [
      "PitchLab",
      "Fact-checking",
      "Chrome Extension",
      "GPT-4o",
      "Listo para la venta"
    ],
    "readyForSale": true,
    "name": "Polycheck",
    "slogan": "Verifica en tiempo real, no despuÃ©s",
    "description": "ExtensiÃ³n de Chrome para fact-checking en tiempo real sobre videos de YouTube y directos. IntegraciÃ³n GPT-4o + Gemini + Google Search para anÃ¡lisis forense del discurso.",
    "status": "En lÃ­nea",
    "demoMode": "mostrar",
    "appUrl": "",
    "githubUrl": "https://github.com/Juansotag/Polycheck",
    "logo": "assets/projects/polycheck.jpg",
    "videoUrl": "https://drive.google.com/file/d/111GwtqEWziIQFwi8BxMgQhiR6ZT-o2YW/view?usp=drive_link",
    "pptUrl": ""
  },
  {
    "segment": "Sector Privado",
    "tipo": "Software",
    "linea": "LÃ­nea PitchLab",
    "tags": [
      "PitchLab",
      "Pitch MÃ©dico",
      "INVIMA",
      "Entrenamiento",
      "Listo para la venta"
    ],
    "readyForSale": true,
    "name": "PitchLab Med",
    "slogan": "Practica tu pitch mÃ©dico con estÃ¡ndares INVIMA",
    "description": "Plataforma para la prÃ¡ctica y evaluaciÃ³n de pitch mÃ©dicos con medidas de rigurosidad INVIMA. Entrenamiento conversacional para profesionales e industria farmacÃ©utica.",
    "status": "En lÃ­nea",
    "demoMode": "mostrar",
    "appUrl": "https://pitchlab-med.up.railway.app/",
    "githubUrl": "https://github.com/Juansotag/PitchLab360-comercial",
    "logo": "assets/projects/pitchlab360.jpg",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector PÃºblico",
    "tipo": "Software",
    "linea": "LÃ­nea PitchLab",
    "tags": [
      "PitchLab",
      "Avatar en Vivo",
      "Voz en Tiempo Real",
      "NegociaciÃ³n",
      "Listo para la venta"
    ],
    "readyForSale": true,
    "name": "PitchLab Entrenamiento",
    "slogan": "Avatar conversacional para entrenamiento",
    "description": "Herramienta de la LÃ­nea PitchLab para el entrenamiento de conversaciones en voz en vivo, adaptado para negociaciones polÃ­ticas, comerciales o acadÃ©micas.",
    "status": "En lÃ­nea",
    "demoMode": "mostrar",
    "appUrl": "https://avatarentrenamiento.up.railway.app/",
    "githubUrl": "https://github.com/Juansotag/Avatar_entrenamiento",
    "logo": "assets/projects/pitchlab360.jpg",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector PÃºblico",
    "tipo": "Software",
    "linea": "LÃ­nea GovTest & OpiniÃ³n",
    "tags": [
      "GovTest",
      "Afinidad PolÃ­tica",
      "Elecciones 2026",
      "Viral",
      "Listo para la venta"
    ],
    "readyForSale": true,
    "name": "GovTest",
    "slogan": "Descubre tu candidato con datos",
    "description": "Test de afinidad polÃ­tica por dilemas de polÃ­tica pÃºblica. 16 preguntas, 14 candidatos presidenciales 2026, 7 arquetipos de votante y tarjeta viral descargable.",
    "status": "En lÃ­nea",
    "demoMode": "mostrar",
    "appUrl": "https://convergencia-electoral.up.railway.app/",
    "githubUrl": "https://github.com/GovLabSabana/test-dilema",
    "logo": "assets/projects/govtest.jpg",
    "videoUrl": "https://drive.google.com/file/d/1B1RWm_HmN4HlHjiIzlDzh58FqfGpITkX/view?usp=drive_link",
    "pptUrl": ""
  },
  {
    "segment": "Sector PÃºblico",
    "tipo": "Software",
    "linea": "LÃ­nea GovTest & OpiniÃ³n",
    "tags": [
      "GovTest",
      "9 Ejes IdeolÃ³gicos",
      "Supabase",
      "Ranking",
      "Listo para la venta"
    ],
    "readyForSale": true,
    "name": "Test 9 Ejes",
    "slogan": "Tu posiciÃ³n en 9 ejes, tu candidato en un clic",
    "description": "Test de afinidad polÃ­tica por 9 ejes ideolÃ³gicos. Algoritmo euclidiano, ranking de candidatos, perfil personalizado y persistencia de datos en Supabase.",
    "status": "En lÃ­nea",
    "demoMode": "mostrar",
    "appUrl": "https://test9ejes.up.railway.app/",
    "githubUrl": "https://github.com/GovLabSabana/Test_9ejes",
    "logo": "assets/projects/test9ejes.jpg",
    "videoUrl": "https://drive.google.com/file/d/1IpEH495QROwq8k3VdkaD52tjbJKX68Iv/view?usp=drive_link",
    "pptUrl": ""
  },
  {
    "segment": "Sector PÃºblico",
    "tipo": "Software",
    "linea": "LÃ­nea GovTest & OpiniÃ³n",
    "tags": [
      "GovTest",
      "50 Preguntas",
      "Coyuntura Colombia",
      "Glassmorphism",
      "Listo para la venta"
    ],
    "readyForSale": true,
    "name": "Test 9 Ejes Colombia",
    "slogan": "50 preguntas, un perfil ideolÃ³gico",
    "description": "VersiÃ³n extendida del test con 50 preguntas coyunturales sobre Colombia. Modo oscuro glassmorphism, compartir en alta resoluciÃ³n y datos anÃ³nimos en Supabase.",
    "status": "En lÃ­nea",
    "demoMode": "mostrar",
    "appUrl": "https://test9col.up.railway.app/",
    "githubUrl": "https://github.com/GovLabSabana/Test_9ejesColombia",
    "logo": "assets/projects/test9ejes.jpg",
    "videoUrl": "https://drive.google.com/file/d/1gXzEi2ZNE4daXYBnidmccgcgkWj2Db84/view?usp=drive_link",
    "pptUrl": ""
  },
  {
    "segment": "Sector PÃºblico",
    "tipo": "Software",
    "linea": "Asistentes de Voz",
    "tags": [
      "Asistentes de Voz",
      "LiveKit",
      "OpenAI Realtime",
      "CajicÃ¡",
      "WebRTC"
    ],
    "readyForSale": false,
    "name": "AlcaldesaIA",
    "slogan": "PregÃºntale al municipio, Ã©l te responde",
    "description": "Asistente de voz en tiempo real sobre el Plan de Desarrollo de CajicÃ¡ 2024-2027. OpenAI Realtime API + LiveKit + WebRTC.",
    "status": "En mantenimiento",
    "demoMode": "mostrar",
    "appUrl": "https://asistente-virtual-cajica.up.railway.app/",
    "githubUrl": "https://github.com/GovLabSabana/cajica",
    "logo": "assets/projects/alcaldesa.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector Privado",
    "tipo": "Software",
    "linea": "Asistentes de Voz",
    "tags": [
      "Asistentes de Voz",
      "PQRS",
      "LiveKit",
      "OpenAI Realtime",
      "Santander",
      "Listo para la venta"
    ],
    "readyForSale": true,
    "name": "Gober Santander",
    "slogan": "Un asistente pÃºblico para cada ciudadano",
    "description": "Asistente de voz conversacional para el sector pÃºblico. Procesamiento de PQRS, visualizaciÃ³n de datos e interfaz para funcionarios con OpenAI Realtime + LiveKit.",
    "status": "En lÃ­nea",
    "demoMode": "mostrar",
    "appUrl": "https://santander-production.up.railway.app/",
    "githubUrl": "https://github.com/GovLabSabana/Santander",
    "logo": "assets/projects/gober.png",
    "videoUrl": "https://drive.google.com/file/d/1JZj-tysFp6FlbX3NeH5Y4pINnr_1dNzg/view?usp=drive_link",
    "pptUrl": ""
  },
  {
    "segment": "Sector PÃºblico",
    "tipo": "Software",
    "linea": "Asistentes de Voz",
    "tags": [
      "Asistentes de Voz",
      "GovLab",
      "AtenciÃ³n al Ciudadano"
    ],
    "readyForSale": false,
    "name": "Govi",
    "slogan": "El GovLab te habla, tÃº lo escuchas",
    "description": "Asistente basado en voz para la consulta y acercamiento al cliente del Laboratorio de Gobierno de la Universidad de La Sabana.",
    "status": "En mantenimiento",
    "demoMode": "mostrar",
    "appUrl": "",
    "githubUrl": "https://github.com/GovLabSabana/Govi2",
    "logo": "assets/Govlab.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector Privado",
    "tipo": "Software",
    "linea": "Asistentes de Voz",
    "tags": [
      "Asistentes de Voz",
      "Next.js",
      "LiveKit",
      "Silero VAD",
      "ConvergenceLab",
      "Listo para la venta"
    ],
    "readyForSale": true,
    "name": "ConvergenceLab",
    "slogan": "Habla con la universidad, ella te escucha",
    "description": "Asistente de voz en tiempo real para el Convergence Lab de la Unisabana (Sabius). Permite consultar aliados e investigaciones relevantes. LiveKit Agents + OpenAI Realtime API + Silero VAD.",
    "status": "En lÃ­nea",
    "demoMode": "mostrar",
    "appUrl": "https://convergencelab.up.railway.app/",
    "githubUrl": "https://github.com/GovLabSabana/ConvergenceLAb",
    "logo": "assets/projects/convergence.png",
    "videoUrl": "https://drive.google.com/file/d/1r-HPmA_JXTUB45rQpJKJ7RzEZwTaReno/view?usp=drive_link",
    "pptUrl": ""
  },
  {
    "segment": "Sector Privado",
    "tipo": "Software",
    "linea": "Asistentes de Voz",
    "tags": [
      "Asistentes de Voz",
      "Llamadas Automatizadas",
      "Dapta",
      "Outbound Calls",
      "Listo para la venta"
    ],
    "readyForSale": true,
    "name": "Alocandidato",
    "slogan": "La campaÃ±a que llama, nunca la que cansa",
    "description": "Sistema de llamadas de voz automatizadas a ciudadanos con preguntas interactivas sobre candidatos y propuestas con tecnologÃ­a Dapta.",
    "status": "En lÃ­nea",
    "demoMode": "mostrar",
    "appUrl": "",
    "githubUrl": "",
    "logo": "assets/projects/alocandidato.jpg",
    "videoUrl": "https://drive.google.com/file/d/1bOY7U-cqev5172oxBTSLvazsdPdM2hTT/view?usp=drive_link",
    "pptUrl": ""
  },
  {
    "segment": "Sector Privado",
    "tipo": "Software",
    "linea": "Agroindustria & ExportaciÃ³n",
    "tags": [
      "Corpohass",
      "Aguacate Hass",
      "Trazabilidad",
      "FastAPI",
      "React",
      "Listo para la venta"
    ],
    "readyForSale": true,
    "name": "HassApp",
    "slogan": "Del campo al mundo, con datos",
    "description": "Plataforma integral para gestiÃ³n de producciÃ³n, cosecha, insumos, exportaciÃ³n y sondeo de opiniÃ³n del sector aguacate Hass. FastAPI + React + MySQL + AWS S3.",
    "status": "En lÃ­nea",
    "demoMode": "mostrar",
    "appUrl": "https://heartfelt-success-production-8486.up.railway.app/",
    "githubUrl": "https://github.com/GovLabSabana/HassApp",
    "logo": "assets/projects/hassapp.png",
    "videoUrl": "https://drive.google.com/file/d/1WMHMOz0j_DHamcykskRayQAUyCyPpryw/view?usp=drive_link",
    "pptUrl": ""
  },
  {
    "segment": "Sector Privado",
    "tipo": "Software",
    "linea": "Agroindustria & ExportaciÃ³n",
    "tags": [
      "Corpohass",
      "DiagnÃ³stico Exportador",
      "TermÃ³metro IA",
      "FastAPI",
      "Listo para la venta"
    ],
    "readyForSale": true,
    "name": "ExportaCheck",
    "slogan": "Â¿Listo para exportar? DescÃºbrelo hoy",
    "description": "Plataforma con termÃ³metro interactivo que evalÃºa el nivel de preparaciÃ³n exportadora de empresas agrÃ­colas y productoras. DiagnÃ³stico por dimensiones con IA. Next.js + FastAPI + Supabase.",
    "status": "En lÃ­nea",
    "demoMode": "mostrar",
    "appUrl": "https://exporta-facil-bot-production-e49c.up.railway.app/",
    "githubUrl": "https://github.com/GovLabSabana/TermoExportador",
    "logo": "assets/projects/exportacheck.jpg",
    "videoUrl": "https://drive.google.com/file/d/1X7QuSOTr0gCKC7rLTdSzvLsoyWHbyw_i/view?usp=drive_link",
    "pptUrl": ""
  },
  {
    "segment": "Sector Privado",
    "tipo": "Software",
    "linea": "NotarÃ­as & Documental",
    "tags": [
      "NotarÃ­as",
      "Borradores de Escrituras",
      "Chat IA",
      "Cumplimiento",
      "Listo para la venta"
    ],
    "readyForSale": true,
    "name": "NotariaDoc",
    "slogan": "El borrador perfecto, sin esperas",
    "description": "MVP para construir borradores de escrituras notariales, verificaciÃ³n de requisitos de cumplimiento y asistente conversacional con RAG legal.",
    "status": "En lÃ­nea",
    "demoMode": "mostrar",
    "appUrl": "https://notariadoc-production.up.railway.app/",
    "githubUrl": "https://github.com/GovLabSabana/NotariaDoc",
    "logo": "assets/Govlab.png",
    "videoUrl": "https://drive.google.com/file/d/1BNngISeVJ6rFuEdgpbrmGFCxAjOLwgFE/view?usp=drive_link",
    "pptUrl": ""
  },
  {
    "segment": "Sector Privado",
    "tipo": "Software",
    "linea": "NotarÃ­as & Documental",
    "tags": [
      "NotarÃ­as",
      "Panel de Control",
      "PronÃ³stico",
      "Tiempos de Espera",
      "Listo para la venta"
    ],
    "readyForSale": true,
    "name": "NotariaIQ",
    "slogan": "Control total de la notarÃ­a en un panel",
    "description": "Panel de control para notarÃ­as: seguimiento de usuarios, tiempos de espera, ingresos, egresos, anÃ¡lisis descriptivo y pronÃ³stico de afluencia con IA.",
    "status": "En lÃ­nea",
    "demoMode": "mostrar",
    "appUrl": "https://notariaiq-production.up.railway.app/",
    "githubUrl": "https://github.com/GovLabSabana/NotariaIQ",
    "logo": "assets/Govlab.png",
    "videoUrl": "https://drive.google.com/file/d/19wx_KXzy9Byorjwu40xK5E3ymxglD_aO/view?usp=drive_link",
    "pptUrl": ""
  },
  {
    "segment": "Sector Privado",
    "tipo": "Software",
    "linea": "NotarÃ­as & Documental",
    "tags": [
      "NotarÃ­as",
      "Constructoras",
      "Flujo de AprobaciÃ³n",
      "Cero Papel",
      "Listo para la venta"
    ],
    "readyForSale": true,
    "name": "Radica NotarÃ­a",
    "slogan": "Radica, revisa y aprueba sin papel",
    "description": "Suite de automatizaciÃ³n documental para la NotarÃ­a Segunda de ZipaquirÃ¡. Formulario para constructoras + panel de digitadora con flujo de aprobaciÃ³n de escrituras.",
    "status": "En lÃ­nea",
    "demoMode": "mostrar",
    "appUrl": "https://radicanotaria-production.up.railway.app/",
    "githubUrl": "https://github.com/GovLabSabana/Radica_notaria",
    "logo": "assets/Govlab.png",
    "videoUrl": "https://drive.google.com/file/d/1cmOw8OCh4UhW1YzWrMBpbsMvaZZjnrSV/view?usp=drive_link",
    "pptUrl": ""
  },
  {
    "segment": "Sector PÃºblico",
    "tipo": "Software",
    "linea": "ProyecciÃ³n Social & Directiva",
    "tags": [
      "GestiÃ³n Documental",
      "Alto Gobierno",
      "SÃ­ntesis Ejecutiva",
      "Decisiones",
      "Listo para la venta"
    ],
    "readyForSale": true,
    "name": "Resume Expedientes",
    "slogan": "Decisiones de alto gobierno en segundos",
    "description": "Herramienta con IA para resumir expedientes directivos complejos y apoyar la toma de decisiones estratÃ©gicas de alto gobierno.",
    "status": "En lÃ­nea",
    "demoMode": "mostrar",
    "appUrl": "https://expedientes.up.railway.app/",
    "githubUrl": "https://github.com/Juansotag/resumidor-expedientes",
    "logo": "assets/Govlab.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector PÃºblico",
    "tipo": "Software",
    "linea": "ProyecciÃ³n Social & Directiva",
    "tags": [
      "ProyecciÃ³n Social",
      "CRON",
      "WhatsApp",
      "Email",
      "Newsletter",
      "Listo para la venta"
    ],
    "readyForSale": true,
    "name": "NewsletterMaker",
    "slogan": "Generador y envÃ­o de newsletter",
    "description": "Plataforma para la construcciÃ³n de Newsletters y la asignaciÃ³n de procesos asÃ­ncronos CRON por correo y WhatsApp para la DirecciÃ³n de ProyecciÃ³n Social.",
    "status": "En lÃ­nea",
    "demoMode": "mostrar",
    "appUrl": "https://newsletter-pse.up.railway.app/",
    "githubUrl": "https://github.com/Juansotag/Newsletter---Proyecci-n-social",
    "logo": "assets/Govlab.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector PÃºblico",
    "tipo": "Software",
    "linea": "GestiÃ³n PÃºblica & Ambiental",
    "tags": [
      "CAR Cundinamarca",
      "PQRS AutomÃ¡tico",
      "IA",
      "ClasificaciÃ³n",
      "Listo para la venta"
    ],
    "readyForSale": true,
    "name": "CAResponde",
    "slogan": "De la PQRS al ciudadano en segundos",
    "description": "Asistente en texto para la CAR Cundinamarca: recibe, categoriza, visualiza y genera respuestas automÃ¡ticas a PQRS con inteligencia artificial.",
    "status": "En lÃ­nea",
    "demoMode": "mostrar",
    "appUrl": "https://car-pqrs-production.up.railway.app/",
    "githubUrl": "https://github.com/GovLabSabana/CAR-pqrs",
    "logo": "assets/projects/caresponde.png",
    "videoUrl": "https://drive.google.com/file/d/1Z9kNrQxgHan2YKVw9oRovIzGJfLPp86j/view?usp=drive_link",
    "pptUrl": ""
  },
  {
    "segment": "Sector PÃºblico",
    "tipo": "Software",
    "linea": "GestiÃ³n PÃºblica & Ambiental",
    "tags": [
      "BogotÃ¡",
      "Plan de Desarrollo",
      "RAG FAISS",
      "GPT-4o",
      "Listo para la venta"
    ],
    "readyForSale": true,
    "name": "AlcaldIA",
    "slogan": "El Plan de Desarrollo en tus manos",
    "description": "Asistente RAG sobre el Plan de Desarrollo Distrital de BogotÃ¡. BÃºsqueda semÃ¡ntica con FAISS + GPT-4o para consultas por meta, programa y presupuesto.",
    "status": "En lÃ­nea",
    "demoMode": "mostrar",
    "appUrl": "https://alcadia.up.railway.app/",
    "githubUrl": "https://github.com/GovLabSabana/AlcaldIA",
    "logo": "assets/Govlab.png",
    "videoUrl": "https://drive.google.com/file/d/1rfDiEcx6BD2r3HDHG5GSUVze8Bd8O9ww/view?usp=drive_link",
    "pptUrl": ""
  },
  {
    "segment": "Sector PÃºblico",
    "tipo": "Software",
    "linea": "GestiÃ³n PÃºblica & Ambiental",
    "tags": [
      "PolicÃ­a Ambiental",
      "LegislaciÃ³n Ambiental",
      "Jurisprudencia",
      "Carabineros"
    ],
    "readyForSale": false,
    "name": "PoliciApp-Eco",
    "slogan": "La ley ambiental en campo",
    "description": "Asistente IA de legislaciÃ³n ambiental colombiana para la PolicÃ­a Ambiental y Carabineros. Cubre pesca, flora, fauna, minerÃ­a y recursos hÃ­dricos.",
    "status": "En mantenimiento",
    "demoMode": "mostrar",
    "appUrl": "",
    "githubUrl": "https://github.com/GovLabSabana/PoliciApp-Eco2",
    "logo": "assets/Govlab.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector PÃºblico",
    "tipo": "Software",
    "linea": "GestiÃ³n PÃºblica & Ambiental",
    "tags": [
      "PolicÃ­a Ambiental",
      "Normativa Ambiental",
      "Jurisprudencia",
      "Chatbot"
    ],
    "readyForSale": false,
    "name": "PoliciaAmbiental",
    "slogan": "Jurisprudencia ambiental en campo",
    "description": "Chatbot para facilitar conocimientos de jurisprudencia y competencias operativas para la policÃ­a ambiental de Colombia.",
    "status": "En mantenimiento",
    "demoMode": "mostrar",
    "appUrl": "",
    "githubUrl": "https://github.com/GovLabSabana/Policia_ambiental",
    "logo": "assets/Govlab.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector PÃºblico",
    "tipo": "Software",
    "linea": "GestiÃ³n PÃºblica & Ambiental",
    "tags": [
      "ComparaciÃ³n Normativa",
      "Diff SemÃ¡ntico",
      "GPT-4",
      "Leyes"
    ],
    "readyForSale": false,
    "name": "LegisCheck",
    "slogan": "Dos versiones, un solo vistazo",
    "description": "ComparaciÃ³n inteligente de documentos legislativos. Diff semÃ¡ntico con GPT-4, lÃ­nea de tiempo de cambios normativos y reportes PDF.",
    "status": "En mantenimiento",
    "demoMode": "mostrar",
    "appUrl": "",
    "githubUrl": "https://github.com/GovLabSabana/Paralelo",
    "logo": "assets/projects/Legischeck.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector PÃºblico",
    "tipo": "Software",
    "linea": "Seguridad & AnalÃ­tica",
    "tags": [
      "Observatorio de Seguridad",
      "PredicciÃ³n Delitos",
      "Barranquilla",
      "Listo para la venta"
    ],
    "readyForSale": true,
    "name": "Barranquilla",
    "slogan": "Predice la criminalidad, protege la ciudad",
    "description": "App web para subir, analizar y predecir eventos de criminalidad y convivencia ciudadana para el Observatorio de Seguridad de Barranquilla.",
    "status": "En lÃ­nea",
    "demoMode": "mostrar",
    "appUrl": "https://barranquilla-production.up.railway.app/",
    "githubUrl": "https://github.com/GovLabSabana/Barranquilla",
    "logo": "assets/Govlab.png",
    "videoUrl": "https://drive.google.com/file/d/1X7_dn5FwxNv9XvoflFxJrNYQPzxmr8DJ/view?usp=drive_link",
    "pptUrl": ""
  },
  {
    "segment": "Sector Privado",
    "tipo": "Software",
    "linea": "Sostenibilidad & ESG",
    "tags": [
      "Universia",
      "ESG",
      "Benchmarking",
      "Supabase",
      "React",
      "Listo para la venta"
    ],
    "readyForSale": true,
    "name": "Test de sostenibilidad universitaria",
    "slogan": "Mide tu sostenibilidad, mejora tu ranking",
    "description": "Sistema de evaluaciÃ³n universitaria en dimensiones Gobernanza, Social y Ambiental (ESG). Dashboard comparativo entre instituciones. React + Node + Supabase.",
    "status": "En lÃ­nea",
    "demoMode": "mostrar",
    "appUrl": "https://bot-sostenibilidad-esg.up.railway.app/",
    "githubUrl": "https://github.com/GovLabSabana/Universia",
    "logo": "assets/projects/sostenibilidad.jpg",
    "videoUrl": "https://drive.google.com/file/d/1GDyYWyFkWJktyAc-a9Alec8xrri4dNEU/view?usp=drive_link",
    "pptUrl": ""
  },
  {
    "segment": "Sector Privado",
    "tipo": "Software",
    "linea": "Sostenibilidad & ESG",
    "tags": [
      "MetaRed",
      "Universia",
      "Agente IA",
      "RegresiÃ³n",
      "Data Science",
      "Listo para la venta"
    ],
    "readyForSale": true,
    "name": "Asistente de agente para MetaRed",
    "slogan": "Resultados de encuestas sobre sostenibilidad y agente de anÃ¡lisis",
    "description": "Herramienta para visualizar resultados de la encuesta de sostenibilidad de MetaRed / Universia, con un agente IA capaz de correr modelos de regresiÃ³n y analÃ­tica descriptiva.",
    "status": "En lÃ­nea",
    "demoMode": "mostrar",
    "appUrl": "https://metaredesg.up.railway.app/",
    "githubUrl": "https://github.com/Juansotag/Metared-by-Universia",
    "logo": "assets/projects/sostenibilidad.jpg",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector PÃºblico",
    "tipo": "Software",
    "linea": "Comunidad & Admisiones",
    "tags": [
      "Escuela de Gobierno",
      "MPA",
      "CV Matching",
      "RecomendaciÃ³n",
      "Listo para la venta"
    ],
    "readyForSale": true,
    "name": "MPAChat",
    "slogan": "Tu perfil profesional para el MPA, en minutos",
    "description": "Asistente IA que analiza la hoja de vida de candidatos a la MaestrÃ­a en AdministraciÃ³n PÃºblica (MPA) de la Escuela de Gobierno, recomendando lÃ­neas y perfilando aspirantes.",
    "status": "En lÃ­nea",
    "demoMode": "mostrar",
    "appUrl": "https://mpachat-unisabana.up.railway.app/",
    "githubUrl": "https://github.com/Juansotag/MPAchat",
    "logo": "assets/photos/Aliados/escuela.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector PÃºblico",
    "tipo": "Software",
    "linea": "Comunidad & Admisiones",
    "tags": [
      "Suite Alumni",
      "Hojas de Vida",
      "Egresados",
      "Unisabana",
      "Listo para la venta"
    ],
    "readyForSale": true,
    "name": "AlumniCV",
    "slogan": "Suite Alumni - Hojas de vida",
    "description": "Herramienta para egresados de la Universidad de La Sabana enfocada en optimizaciÃ³n, formato y gestiÃ³n de hojas de vida profesionales.",
    "status": "En lÃ­nea",
    "demoMode": "mostrar",
    "appUrl": "https://alumnicv.up.railway.app/",
    "githubUrl": "https://github.com/Juansotag/AlumniCV",
    "logo": "assets/Govlab.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector PÃºblico",
    "tipo": "Software",
    "linea": "Comunidad & Admisiones",
    "tags": [
      "Suite Alumni",
      "AcompaÃ±amiento",
      "Posgrados",
      "Chatbot",
      "Listo para la venta"
    ],
    "readyForSale": true,
    "name": "AlumniChat",
    "slogan": "Chatbot de acompaÃ±amiento para egresados",
    "description": "Chatbot de acompaÃ±amiento y orientaciÃ³n acadÃ©mica/profesional para la comunidad de egresados de la Universidad de La Sabana.",
    "status": "En lÃ­nea",
    "demoMode": "mostrar",
    "appUrl": "https://alumnichat.up.railway.app/",
    "githubUrl": "https://github.com/Juansotag/AlumniChat",
    "logo": "assets/Govlab.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector PÃºblico",
    "tipo": "Software",
    "linea": "InnovaciÃ³n & Procesos",
    "tags": [
      "InnovaciÃ³n Unisabana",
      "Business Model Canvas",
      "Propiedad Intelectual",
      "Listo para la venta"
    ],
    "readyForSale": true,
    "name": "Germina",
    "slogan": "Asistente de innovaciÃ³n con IA",
    "description": "Plataforma para el seguimiento de procesos de innovaciÃ³n, emprendimiento y autorÃ­a intelectual de la Universidad de La Sabana. Genera documentos y apoya en Business Model Canvas.",
    "status": "En lÃ­nea",
    "demoMode": "mostrar",
    "appUrl": "https://germina.up.railway.app/",
    "githubUrl": "https://github.com/Juansotag/germina",
    "logo": "assets/projects/germina.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector Privado",
    "tipo": "Software",
    "linea": "Inteligencia Geoespacial",
    "tags": [
      "Geoespacial",
      "Vivienda",
      "Leaflet",
      "FincaRaÃ­z",
      "Estratos",
      "Listo para la venta"
    ],
    "readyForSale": true,
    "name": "Geovivienda",
    "slogan": "Ubica, analiza y decide dÃ³nde vivir",
    "description": "Plataforma inmobiliaria con analÃ­tica geoespacial: scraping de mercado, distancias a Transmilenio/SITP/ciclorutas, estrato promedio a 200m y mapas interactivos con Leaflet.",
    "status": "En lÃ­nea",
    "demoMode": "mostrar",
    "appUrl": "https://geovivienda.up.railway.app/",
    "githubUrl": "https://github.com/Juansotag/Geovivienda-main",
    "logo": "assets/projects/geovivienda-main.png",
    "videoUrl": "https://drive.google.com/file/d/1awsOrJvFAQg4JV4zUP4_4vhpDaucnehM/view?usp=drive_link",
    "pptUrl": ""
  },
  {
    "segment": "Sector Privado",
    "tipo": "Software",
    "linea": "AnalÃ­tica con IA",
    "tags": [
      "LangChain",
      "Plotly",
      "Whisper",
      "TTS",
      "Auto-GrÃ¡ficos",
      "Listo para la venta"
    ],
    "readyForSale": true,
    "name": "Data Copilot",
    "slogan": "PregÃºntale a tus datos con tu propia voz",
    "description": "Asistente de anÃ¡lisis de datos con LangChain + GPT-4 + Whisper. Carga CSV/Excel, genera grÃ¡ficos interactivos con Plotly y responde por voz y texto.",
    "status": "En lÃ­nea",
    "demoMode": "mostrar",
    "appUrl": "https://datacopilot.up.railway.app/",
    "githubUrl": "https://github.com/GovLabSabana/Data_copilot",
    "logo": "assets/Govlab.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector PÃºblico",
    "tipo": "Software",
    "linea": "Dashboards & AnalÃ­tica",
    "tags": [
      "INVAMER",
      "PercepciÃ³n DemocrÃ¡tica",
      "Tiempo Real",
      "Filtros DemogrÃ¡ficos",
      "Listo para la venta"
    ],
    "readyForSale": true,
    "name": "Cuidar la Democracia",
    "slogan": "Visualiza lo que piensa el ciudadano",
    "description": "Dashboard interactivo con datos de encuesta sobre percepciones democrÃ¡ticas en Colombia (INVAMER/GovLab). Filtros sociodemogrÃ¡ficos, mapas y grÃ¡ficos en tiempo real.",
    "status": "En lÃ­nea",
    "demoMode": "mostrar",
    "appUrl": "https://cuidar-la-democracia-production.up.railway.app/",
    "githubUrl": "https://github.com/Juansotag/Cuidar-la-Democracia",
    "logo": "assets/projects/democracia.png",
    "videoUrl": "https://drive.google.com/file/d/1cGZzC2g1HsFeL4M3TziwMUL9o692WI-x/view?usp=drive_link",
    "pptUrl": ""
  },
  {
    "segment": "Sector PÃºblico",
    "tipo": "Software",
    "linea": "Dashboards & AnalÃ­tica",
    "tags": [
      "FONDECUN",
      "Cundinamarca",
      "Sankey",
      "Mapa de Calor",
      "Reportes PDF",
      "Listo para la venta"
    ],
    "readyForSale": true,
    "name": "Data Promce",
    "slogan": "Sigue cada instituciÃ³n, mide cada etapa",
    "description": "Plataforma de seguimiento del programa FONDECUN en IEDs de Cundinamarca. Mapa de calor, Sankey, anÃ¡lisis cualitativo con IA y exportaciÃ³n a PDF/Excel.",
    "status": "En lÃ­nea",
    "demoMode": "mostrar",
    "appUrl": "https://fondecun-production.up.railway.app/",
    "githubUrl": "https://github.com/GovLabSabana/FONDECUN",
    "logo": "assets/projects/datapromce.png",
    "videoUrl": "https://drive.google.com/file/d/1TJcmWLiAGKcxoCspHzYNniXq0ip3uiFw/view?usp=drive_link",
    "pptUrl": ""
  },
  {
    "segment": "Sector PÃºblico",
    "tipo": "Software",
    "linea": "Dashboards & AnalÃ­tica",
    "tags": [
      "Sabana Centro CÃ³mo Vamos",
      "Matching Planes",
      "Scoring IA",
      "Desarrollo Regional",
      "Listo para la venta"
    ],
    "readyForSale": true,
    "name": "Sabana Centro Sostenible",
    "slogan": "Conecta proyectos con planes de desarrollo",
    "description": "Matching entre proyectos estratÃ©gicos de Sabana Centro y planes de desarrollo municipales. Scoring semÃ¡ntico con IA de visiÃ³n regional e impacto.",
    "status": "En lÃ­nea",
    "demoMode": "mostrar",
    "appUrl": "https://sabanacentrosostenible.up.railway.app/",
    "githubUrl": "https://github.com/GovLabSabana/SCS_V2",
    "logo": "assets/projects/scsv2.png",
    "videoUrl": "https://drive.google.com/file/d/1WARAZMkb6xri4bO8MIxiPEIVHqOUqbfo/view?usp=drive_link",
    "pptUrl": ""
  },
  {
    "segment": "Sector PÃºblico",
    "tipo": "Dashboards",
    "linea": "Dashboards & AnalÃ­tica",
    "tags": [
      "Tableau",
      "Metas Institucionales",
      "App MÃ³vil",
      "Dashboard"
    ],
    "readyForSale": true,
    "name": "SIAG",
    "slogan": "Sigue en tiempo real a tu organizaciÃ³n",
    "description": "Suite de seguimiento de metas institucionales en tiempo real con integraciÃ³n en aplicaciÃ³n web, Android e iOS.",
    "status": "En lÃ­nea",
    "demoMode": "mostrar",
    "appUrl": "https://public.tableau.com/app/profile/juan.sotelo.aguilar/viz/Cardesk-Gestin/Dashboard1",
    "githubUrl": "",
    "logo": "assets/Govlab.png",
    "videoUrl": "https://drive.google.com/file/d/1iZEkSOuXZ5h4kMB0xZBnUOpvovll0vQx/view?usp=drive_link",
    "pptUrl": ""
  },
  {
    "segment": "Sector PÃºblico",
    "tipo": "Dashboards",
    "linea": "Dashboards & AnalÃ­tica",
    "tags": [
      "Tableau",
      "Seguridad Ciudadana",
      "PolicÃ­a Nacional",
      "Datos Abiertos"
    ],
    "readyForSale": true,
    "name": "Violencia Intrafamiliar en Colombia",
    "slogan": "Monitoreo y tendencias a nivel nacional",
    "description": "Dashboard interactivo con anÃ¡lisis territorial y temporal de denuncias de violencia intrafamiliar en Colombia.",
    "status": "En lÃ­nea",
    "demoMode": "mostrar",
    "appUrl": "https://public.tableau.com/app/profile/juan.sotelo.aguilar/viz/Datos-Polica/Violenciaintrafamiliar",
    "githubUrl": "",
    "logo": "assets/Govlab.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector PÃºblico",
    "tipo": "Dashboards",
    "linea": "Dashboards & AnalÃ­tica",
    "tags": [
      "Tableau",
      "Salud PÃºblica",
      "Capacidad Hospitalaria",
      "Indicadores"
    ],
    "readyForSale": true,
    "name": "Recursos hospitalarios por cada 100.000 habitantes",
    "slogan": "Capacidad del sistema de salud en Colombia",
    "description": "VisualizaciÃ³n comparativa de camas, mÃ©dicos y recursos de atenciÃ³n hospitalaria en los municipios y departamentos del paÃ­s.",
    "status": "En lÃ­nea",
    "demoMode": "mostrar",
    "appUrl": "https://public.tableau.com/app/profile/juan.sotelo.aguilar/viz/Recursoshospitalariosporcada100_00habitantes-2022/Dashboard1",
    "githubUrl": "",
    "logo": "assets/Govlab.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector PÃºblico",
    "tipo": "Dashboards",
    "linea": "Dashboards & AnalÃ­tica",
    "tags": [
      "Tableau",
      "ADRES",
      "Afiliaciones Salud",
      "DemografÃ­a"
    ],
    "readyForSale": true,
    "name": "Registros de la Base Ãšnica de afiliados - Adres - Mayo 2025",
    "slogan": "RadiografÃ­a del aseguramiento en salud",
    "description": "Tablero analÃ­tico de la Base de Datos Ãšnica de Afiliados (BDUA) con perfiles sociodemogrÃ¡ficos y rÃ©gimen de aseguramiento.",
    "status": "En lÃ­nea",
    "demoMode": "mostrar",
    "appUrl": "https://public.tableau.com/app/profile/juan.sotelo.aguilar/viz/RegistrosdelaBasedeDatosnicadeAfiliados-ADRES-Mayo2025/Perfilesdelosafiliados",
    "githubUrl": "",
    "logo": "assets/Govlab.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector PÃºblico",
    "tipo": "Dashboards",
    "linea": "Dashboards & AnalÃ­tica",
    "tags": [
      "Tableau",
      "DemografÃ­a",
      "Envejecimiento",
      "PolÃ­ticas Poblacionales"
    ],
    "readyForSale": true,
    "name": "Envejecimiento poblacional en Colombia por Sexo y Ãrea",
    "slogan": "TransiciÃ³n demogrÃ¡fica y territorio",
    "description": "Historia interactiva sobre las curvas de envejecimiento y pirÃ¡mides poblacionales urbanas y rurales en Colombia.",
    "status": "En lÃ­nea",
    "demoMode": "mostrar",
    "appUrl": "https://public.tableau.com/app/profile/juan.sotelo.aguilar/viz/EnvejecimientopoblacionalenColombiaporSexoyArea/Historia1",
    "githubUrl": "",
    "logo": "assets/Govlab.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector PÃºblico",
    "tipo": "Dashboards",
    "linea": "Dashboards & AnalÃ­tica",
    "tags": [
      "Tableau",
      "Seguridad",
      "ExtorsiÃ³n",
      "Series Temporales"
    ],
    "readyForSale": true,
    "name": "Panorama de la ExtorsiÃ³n en Colombia (2010-2024)",
    "slogan": "EvoluciÃ³n de un delito de alto impacto",
    "description": "AnÃ¡lisis longitudinal de denuncias, modalidades y focos territoriales del delito de extorsiÃ³n a lo largo de 14 aÃ±os.",
    "status": "En lÃ­nea",
    "demoMode": "mostrar",
    "appUrl": "https://public.tableau.com/app/profile/juan.sotelo.aguilar/viz/PanoramadelaextorsinenColombia2010-2024/Dashboard1",
    "githubUrl": "",
    "logo": "assets/Govlab.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector PÃºblico",
    "tipo": "Dashboards",
    "linea": "Dashboards & AnalÃ­tica",
    "tags": [
      "Tableau",
      "Justicia",
      "ProtecciÃ³n",
      "Datos Policiales"
    ],
    "readyForSale": true,
    "name": "Delitos Sexuales en Colombia",
    "slogan": "Evidencia para la protecciÃ³n ciudadana",
    "description": "Mapeo y caracterizaciÃ³n de reportes de delitos sexuales para el diseÃ±o de polÃ­ticas de prevenciÃ³n y justicia focalizada.",
    "status": "En lÃ­nea",
    "demoMode": "mostrar",
    "appUrl": "https://public.tableau.com/app/profile/juan.sotelo.aguilar/viz/DelitossexualesenColombia_17300861605130/Dashboard1",
    "githubUrl": "",
    "logo": "assets/Govlab.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector PÃºblico",
    "tipo": "Dashboards",
    "linea": "Dashboards & AnalÃ­tica",
    "tags": [
      "Tableau",
      "DemografÃ­a",
      "Cuidado",
      "Adulto Mayor"
    ],
    "readyForSale": true,
    "name": "El Panorama del envejecimiento poblacional en Colombia",
    "slogan": "Retos de la longevidad y servicios sociales",
    "description": "Dashboard integral con indicadores de dependencia, Ã­ndice de envejecimiento y distribuciÃ³n departamental.",
    "status": "En lÃ­nea",
    "demoMode": "mostrar",
    "appUrl": "https://public.tableau.com/app/profile/juan.sotelo.aguilar/viz/ElpanoramadelenvejecimientopoblacionalenColombia/Dashboard1",
    "githubUrl": "",
    "logo": "assets/Govlab.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector PÃºblico",
    "tipo": "Dashboards",
    "linea": "Dashboards & AnalÃ­tica",
    "tags": [
      "Tableau",
      "Salud Mental",
      "EpidemiologÃ­a",
      "PrevenciÃ³n"
    ],
    "readyForSale": true,
    "name": "Suicidios en Colombia 2023-2024",
    "slogan": "Datos para la salud mental pÃºblica",
    "description": "Monitoreo descriptivo y espacial de eventos de salud mental y suicidio reportados en el territorio nacional.",
    "status": "En lÃ­nea",
    "demoMode": "mostrar",
    "appUrl": "https://public.tableau.com/app/profile/juan.sotelo.aguilar/viz/Suicidios-2023-2024/Dashboard12",
    "githubUrl": "",
    "logo": "assets/Govlab.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector PÃºblico",
    "tipo": "Dashboards",
    "linea": "Dashboards & AnalÃ­tica",
    "tags": [
      "Tableau",
      "NUSE 123",
      "BogotÃ¡",
      "UPZ",
      "Emergencias"
    ],
    "readyForSale": true,
    "name": "Llamadas totales al NUSE/123 por UPZ en BogotÃ¡",
    "slogan": "Llamadas de emergencia a escala barrial",
    "description": "DistribuciÃ³n geogrÃ¡fica por Unidades de Planeamiento Zonal (UPZ) de llamadas atendidas por la lÃ­nea Ãºnica de emergencias de BogotÃ¡.",
    "status": "En lÃ­nea",
    "demoMode": "mostrar",
    "appUrl": "https://public.tableau.com/app/profile/juan.sotelo.aguilar/viz/LlamadastotalesalNUSEporUPZ/Vistadistrital",
    "githubUrl": "",
    "logo": "assets/Govlab.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector PÃºblico",
    "tipo": "Dashboards",
    "linea": "Dashboards & AnalÃ­tica",
    "tags": [
      "Tableau",
      "Agro",
      "Precios Arroz",
      "Forecasting",
      "Modelos Predictivos"
    ],
    "readyForSale": true,
    "name": "Precios y productividad del arroz - Forecasting",
    "slogan": "PronÃ³stico de precios y cosechas agrÃ­colas",
    "description": "Modelo predictivo de series temporales de precios mayoristas y rendimiento por hectÃ¡rea en el sector arrocero.",
    "status": "En lÃ­nea",
    "demoMode": "mostrar",
    "appUrl": "https://public.tableau.com/app/profile/juan.sotelo.aguilar/viz/Dashboardarroz/Dashboard1",
    "githubUrl": "",
    "logo": "assets/Govlab.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector PÃºblico",
    "tipo": "Dashboards",
    "linea": "Dashboards & AnalÃ­tica",
    "tags": [
      "Tableau",
      "Movilidad",
      "Siniestralidad Vial",
      "Forecasting",
      "BogotÃ¡"
    ],
    "readyForSale": true,
    "name": "Siniestralidad vial en BogotÃ¡ - Forecasting",
    "slogan": "Modelos predictivos de accidentalidad vial",
    "description": "PredicciÃ³n de eventos de siniestros viales en corredores viales clave de BogotÃ¡ mediante tÃ©cnicas de forecasting.",
    "status": "En lÃ­nea",
    "demoMode": "mostrar",
    "appUrl": "https://public.tableau.com/app/profile/juan.sotelo.aguilar/viz/Siniestralidadvial-2019-2023V2-forecasting/SiniestralidadvialenBogotD_C_-Modelopredictivo-2019-2023",
    "githubUrl": "",
    "logo": "assets/Govlab.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector PÃºblico",
    "tipo": "Dashboards",
    "linea": "Dashboards & AnalÃ­tica",
    "tags": [
      "Tableau",
      "Movilidad",
      "Accidentes",
      "BogotÃ¡"
    ],
    "readyForSale": true,
    "name": "Siniestralidad vial en BogotÃ¡ - Siniestros",
    "slogan": "Registro y causas de accidentes de trÃ¡nsito",
    "description": "VisualizaciÃ³n histÃ³rica 2019-2023 de siniestros viales clasificados por tipo de vehÃ­culo, horario y localidad.",
    "status": "En lÃ­nea",
    "demoMode": "mostrar",
    "appUrl": "https://public.tableau.com/app/profile/juan.sotelo.aguilar/viz/Siniestralidadvial-2019-2023V2-Siniestros/SiniestralidadvialenBogotD_C_-2019-2023",
    "githubUrl": "",
    "logo": "assets/Govlab.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector PÃºblico",
    "tipo": "Dashboards",
    "linea": "Dashboards & AnalÃ­tica",
    "tags": [
      "Tableau",
      "Movilidad",
      "VÃ­ctimas",
      "Seguridad Vial"
    ],
    "readyForSale": true,
    "name": "Siniestralidad vial en BogotÃ¡ - VÃ­ctimas",
    "slogan": "Perfil de actores viales y lesionados",
    "description": "Tablero enfocado en peatones, ciclistas y motociclistas afectados en eventos viales en la capital.",
    "status": "En lÃ­nea",
    "demoMode": "mostrar",
    "appUrl": "https://public.tableau.com/app/profile/juan.sotelo.aguilar/viz/Siniestralidadvial-2019-2023V2-Vctimas/VctimasdelasiniestralidadvialenBogotD_C_-2019-2023",
    "githubUrl": "",
    "logo": "assets/Govlab.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector PÃºblico",
    "tipo": "Dashboards",
    "linea": "Dashboards & AnalÃ­tica",
    "tags": [
      "Tableau",
      "GeoanalÃ­tica",
      "Mapas de Calor",
      "Puntos CrÃ­ticos"
    ],
    "readyForSale": true,
    "name": "Siniestralidad vial en BogotÃ¡ - AnÃ¡lisis espacial",
    "slogan": "Puntos crÃ­ticos e intersecciones de alto riesgo",
    "description": "AnÃ¡lisis de concentraciÃ³n geoespacial de accidentes e identificaciÃ³n de tramos viales prioritarios para intervenciÃ³n.",
    "status": "En lÃ­nea",
    "demoMode": "mostrar",
    "appUrl": "https://public.tableau.com/app/profile/juan.sotelo.aguilar/viz/Siniestralidadvial-2019-2023V2-Anlisisespacial/SiniestralidadvialenBogotD_C_-2019-2023-Anlisisespacial",
    "githubUrl": "",
    "logo": "assets/Govlab.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector PÃºblico",
    "tipo": "Dashboards",
    "linea": "Dashboards & AnalÃ­tica",
    "tags": [
      "Tableau",
      "Forecasting",
      "LÃ­nea 123",
      "UPZ",
      "Capacidad Operativa"
    ],
    "readyForSale": true,
    "name": "Llamadas totales al NUSE/123 por UPZ en BogotÃ¡ - Forecasting",
    "slogan": "PronÃ³stico de demanda de atenciÃ³n de emergencias",
    "description": "Modelos predictivos de volumen de llamadas al NUSE por UPZ para optimizar el despliegue de patrullas y ambulancias.",
    "status": "En lÃ­nea",
    "demoMode": "mostrar",
    "appUrl": "https://public.tableau.com/app/profile/juan.sotelo.aguilar/viz/LlamadasalNUSEporUPZ/VistaporUPZ",
    "githubUrl": "",
    "logo": "assets/Govlab.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector PÃºblico",
    "tipo": "Estudios & AnÃ¡lisis de datos",
    "linea": "Salud & GeoanalÃ­tica",
    "tags": [
      "Machine Learning",
      "ClÃ­nica Unisabana",
      "ARIMA",
      "Prophet",
      "Pacientes NO-EPS"
    ],
    "readyForSale": false,
    "name": "AnÃ¡lisis ClÃ­nica Universidad de la Sabana",
    "slogan": "Anticipa la demanda, optimiza los recursos",
    "description": "Sistema ML de series de tiempo (ARIMA y Prophet) con MAE inferior a 10% para pronosticar el nÃºmero de pacientes NO-EPS y la facturaciÃ³n semanal de la ClÃ­nica.",
    "status": "Activo",
    "demoMode": "ppt",
    "appUrl": "",
    "githubUrl": "https://github.com/GovLabSabana/ModeloClinica",
    "logo": "assets/photos/Aliados/clinica.png",
    "videoUrl": "",
    "pptUrl": "assets/decks/modelo_clÃ­nica.pdf"
  },
  {
    "segment": "Sector PÃºblico",
    "tipo": "Estudios & AnÃ¡lisis de datos",
    "linea": "Salud & GeoanalÃ­tica",
    "tags": [
      "GeoanalÃ­tica",
      "ClÃ­nica Unisabana",
      "Pacientes Potenciales",
      "Inteligencia Territorial"
    ],
    "readyForSale": false,
    "name": "GeoanÃ¡lisis ClÃ­nica Universidad de la Sabana",
    "slogan": "Encuentra al paciente antes de que llegue",
    "description": "AnÃ¡lisis predictivo geoespacial de la ubicaciÃ³n y patrones de desplazamiento de potenciales usuarios de servicios de salud privados en Sabana Centro.",
    "status": "Activo",
    "demoMode": "ppt",
    "appUrl": "",
    "githubUrl": "",
    "logo": "assets/photos/Aliados/clinica.png",
    "videoUrl": "https://drive.google.com/file/d/1KdjNdT396zr8c9nPjeeX_xjB-99c_8Ka/view?usp=drive_link",
    "pptUrl": "assets/decks/modelo_geo_clÃ­nica.pdf"
  },
  {
    "segment": "Sector PÃºblico",
    "tipo": "Estudios & AnÃ¡lisis de datos",
    "linea": "PolÃ­ticas PÃºblicas & Territorio",
    "tags": [
      "OSZ",
      "ZipaquirÃ¡",
      "Indicadores Sociales",
      "Observatorio Social"
    ],
    "readyForSale": false,
    "name": "Observatorio Social de ZipaquirÃ¡ - OSZ",
    "slogan": "AlcaldÃ­a de ZipaquirÃ¡",
    "description": "Desarrollo y diseÃ±o del primer observatorio social de la RegiÃ³n Sabana Centro para el seguimiento riguroso de indicadores sociales y bienestar.",
    "status": "Activo",
    "demoMode": "ppt",
    "appUrl": "",
    "githubUrl": "",
    "logo": "assets/projects/osz.png",
    "videoUrl": "",
    "pptUrl": "assets/decks/Observatorio Social de ZipaquirÃ¡.pdf"
  },
  {
    "segment": "Sector PÃºblico",
    "tipo": "Estudios & AnÃ¡lisis de datos",
    "linea": "Electoral & PronÃ³stico",
    "tags": [
      "PronÃ³stico Electoral",
      "Redes Sociales",
      "MetodologÃ­a ELA-NOM",
      "Error < 9%"
    ],
    "readyForSale": false,
    "name": "ELA-NOM",
    "slogan": "Pronostica elecciones con redes sociales",
    "description": "AplicaciÃ³n de una novedosa metodologÃ­a de pronÃ³stico electoral (ELA-NOM) basada en minerÃ­a de redes sociales con error predictivo inferior al 9%.",
    "status": "Activo",
    "demoMode": "mostrar",
    "appUrl": "",
    "githubUrl": "https://github.com/Juansotag/ELA_NOM",
    "logo": "assets/Govlab.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Transversal",
    "tipo": "EducaciÃ³n",
    "linea": "EducaciÃ³n & FormaciÃ³n",
    "tags": [
      "Doctorado",
      "Posgrado",
      "InvestigaciÃ³n IA",
      "Sector PÃºblico"
    ],
    "readyForSale": true,
    "name": "Doctorado en IA",
    "slogan": "Investiga el futuro, lidera el cambio",
    "description": "Programa doctoral de investigaciÃ³n de vanguardia en inteligencia artificial, enfocado en soluciones para el sector pÃºblico y formulaciÃ³n de polÃ­ticas basadas en evidencia.",
    "status": "Activo",
    "demoMode": "mostrar",
    "appUrl": "https://www.unisabana.edu.co/programas/posgrados/doctorado-en-inteligencia-artificial",
    "githubUrl": "",
    "logo": "assets/Govlab.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Transversal",
    "tipo": "EducaciÃ³n",
    "linea": "EducaciÃ³n & FormaciÃ³n",
    "tags": [
      "MaestrÃ­a",
      "Posgrado",
      "AnalÃ­tica Aplicada",
      "Toma de Decisiones"
    ],
    "readyForSale": true,
    "name": "MaestrÃ­a en IA",
    "slogan": "Domina la IA, transforma tu sector",
    "description": "Programa de posgrado en inteligencia artificial y analÃ­tica aplicada con Ã©nfasis en gobierno digital, polÃ­tica pÃºblica y gestiÃ³n estratÃ©gica organizacional.",
    "status": "Activo",
    "demoMode": "mostrar",
    "appUrl": "https://www.unisabana.edu.co/programas/posgrados/maestria-en-analitica-aplicada",
    "githubUrl": "",
    "logo": "assets/Govlab.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Transversal",
    "tipo": "EducaciÃ³n",
    "linea": "EducaciÃ³n & FormaciÃ³n",
    "tags": [
      "Pregrado",
      "Ciencia de Datos",
      "Modelado MatemÃ¡tico",
      "Unisabana"
    ],
    "readyForSale": true,
    "name": "Pregrado en IA",
    "slogan": "Aprende IA desde la raÃ­z",
    "description": "Programa de pregrado en Ciencia de Datos e Inteligencia Artificial de la Universidad de La Sabana. FormaciÃ³n integral en modelos, algoritmos y aplicaciones reales.",
    "status": "Activo",
    "demoMode": "mostrar",
    "appUrl": "https://www.unisabana.edu.co/programas/pregrados/ciencia-de-datos",
    "githubUrl": "",
    "logo": "assets/Govlab.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Transversal",
    "tipo": "EducaciÃ³n",
    "linea": "EducaciÃ³n & FormaciÃ³n",
    "tags": [
      "Bootcamps",
      "EducaciÃ³n Continua",
      "FormaciÃ³n Ejecutiva",
      "PrÃ¡ctica"
    ],
    "readyForSale": true,
    "name": "Bootcamps en IA",
    "slogan": "Habilidades reales, en tiempo rÃ©cord",
    "description": "Programas tÃ©cnicos intensivos de capacitaciÃ³n en IA para profesionales y directivos del sector pÃºblico y privado, orientados a casos de uso inmediatos.",
    "status": "Activo",
    "demoMode": "mostrar",
    "appUrl": "https://www.unisabana.edu.co/programas/educacion-continua/curso/curso-experto-en-inteligencia-artificial-para-profesionales-innovadores",
    "githubUrl": "",
    "logo": "assets/Govlab.png",
    "videoUrl": "",
    "pptUrl": ""
  }
];

// Datos de Medios (Fallback offline / carga dinámica desde medios/medios.csv)
const MEDIOS_FALLBACK = [
  {
    "Fecha": "24/08/2025",
    "Medio": "El Tiempo",
    "Titular": "Patinetas eléctricas: entre el riesgo por la inseguridad y el aumento de usuarios",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1528372473",
    "Tipo": "Prensa"
  },
  {
    "Fecha": "16/11/2025",
    "Medio": "El Tiempo",
    "Titular": "Ganadores y perdedores con el pico y placa para los carros de fuera de la ciudad",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1588553128",
    "Tipo": "Prensa"
  },
  {
    "Fecha": "20/04/2025",
    "Medio": "El Tiempo",
    "Titular": "El riesgoso aumento de ciclomotores, vehículos pequeños y hechizos",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1436579631",
    "Tipo": "Prensa"
  },
  {
    "Fecha": "25/05/2025",
    "Medio": "El Tiempo",
    "Titular": "Al día hay cerca de 1.000 reportes por ruido al 123",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1462981964",
    "Tipo": "Prensa"
  },
  {
    "Fecha": "16/02/2025",
    "Medio": "El Tiempo",
    "Titular": "Alzas de los costos del gas natural, el nuevo golpe al bolsillo de los bogotanos",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1391088577",
    "Tipo": "Prensa"
  },
  {
    "Fecha": "6/05/2025",
    "Medio": "El Tiempo",
    "Titular": "Aunque se registra baja de delitos, homicidios siguen siendo muy preocupantes",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1448241931",
    "Tipo": "Prensa"
  },
  {
    "Fecha": "24/04/2025",
    "Medio": "El Tiempo",
    "Titular": "Hay 148.000 personas más en la capital en pobreza multidimensional",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1440180675",
    "Tipo": "Prensa"
  },
  {
    "Fecha": "7/08/2025",
    "Medio": "El Tiempo",
    "Titular": "Tres años del gobierno Petro: mucha tensión y poco acuerdo",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1517805927",
    "Tipo": "Prensa"
  },
  {
    "Fecha": "21/09/2025",
    "Medio": "El Tiempo",
    "Titular": "Asíí funciona el gremio de moteros que protestóó y bloqueóó varias vías",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1548556938",
    "Tipo": "Prensa"
  },
  {
    "Fecha": "4/05/2025",
    "Medio": "El Tiempo",
    "Titular": "Bogotáá 24 horas: una apuesta que no cuaja",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1447040645",
    "Tipo": "Prensa"
  },
  {
    "Fecha": "30/01/2025",
    "Medio": "El Tiempo",
    "Titular": "La capital sigue sin acoger los pagos por descongestión",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1378511938",
    "Tipo": "Prensa"
  },
  {
    "Fecha": "18/09/2025",
    "Medio": "El Tiempo",
    "Titular": "Los duros cuestionamientos a las alcaldías locales y sus problemas de ejecución",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1546429316",
    "Tipo": "Prensa"
  },
  {
    "Fecha": "26/05/2025",
    "Medio": "La FM Radio",
    "Titular": "Polémica  Hoy comenzarán a multar a conductores que invadan el carril de buses en la carrera Séptima en Bogotáá / Diario el Tiempo -Alcaldía Mayor De Bogotáá- Carlos Fernando Galán - Policía Nacional -",
    "URL": "https://a.eprensa.com/view_pdf.php?sid=23130&cid=1463535216",
    "Tipo": "Prensa"
  },
  {
    "Fecha": "19/05/2025",
    "Medio": "El Tiempo",
    "Titular": "El metro como galería: una oportunidad para el grafiti bogotano",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1457843809",
    "Tipo": "Prensa"
  },
  {
    "Fecha": "24/02/2025",
    "Medio": "eltiempo.com",
    "Titular": "Opinión Omar Oróstegui | Galán versus Petro: una pelea con muchas batallas por delante",
    "URL": "https://www.eltiempo.com/bogota/columna-de-ppinion-omar-orostegui-galan-versus-petro-una-pelea-con-muchas-batallas-por-delante-3429649",
    "Tipo": "Internet"
  },
  {
    "Fecha": "16/02/2025",
    "Medio": "eltiempo.com",
    "Titular": "Aumento de la tarifa de gas: un golpe duro a la economía bogotana",
    "URL": "https://www.eltiempo.com/bogota/aumento-de-la-tarifa-de-gas-un-golpe-duro-a-la-economia-bogotana-3427489",
    "Tipo": "Internet"
  },
  {
    "Fecha": "15/02/2025",
    "Medio": "eltiempo.com",
    "Titular": "Gas natural: el nuevo golpe al bolsillo de los bogotanos",
    "URL": "https://www.eltiempo.com/bogota/alzas-de-los-costos-del-gas-natural-el-nuevo-golpe-al-bolsillo-de-los-bogotanos-3427275",
    "Tipo": "Internet"
  },
  {
    "Fecha": "9/03/2025",
    "Medio": "eltiempo.com",
    "Titular": "La estrategia de Galán por recuperar el espacio público y regular las ventas ambulantes / Opinión",
    "URL": "https://www.eltiempo.com/bogota/la-estrategia-de-galan-por-recuperar-el-espacio-publico-y-regular-las-ventas-ambulantes-3433788",
    "Tipo": "Internet"
  },
  {
    "Fecha": "10/03/2025",
    "Medio": "eltiempo.com",
    "Titular": "Presidente Petro decidió que Ecopetrol intervendrá la importación de gas y comprará a Catar: ¿por qué?",
    "URL": "https://www.eltiempo.com/politica/gobierno/presidente-petro-ordena-a-ecopetrol-comprar-gas-a-catar-el-monopolio-de-la-importacion-se-acaba-3434027",
    "Tipo": "Internet"
  },
  {
    "Fecha": "16/03/2025",
    "Medio": "eltiempo.com",
    "Titular": "Opinión Omar Oróstegui | San Bernardo, una de las varias zonas donde el poder criminal desafía al Estado",
    "URL": "https://www.eltiempo.com/bogota/opinion-omar-orostegui-san-bernardo-una-de-las-varias-zonas-donde-el-poder-criminal-desafia-al-estado-3435912",
    "Tipo": "Internet"
  },
  {
    "Fecha": "30/03/2025",
    "Medio": "eltiempo.com",
    "Titular": "Columna de opinión Omar Oróstegui:Bogotáá, inundada por la acumulación de basuras.",
    "URL": "https://www.eltiempo.com/bogota/bogota-inundada-por-la-acumulacion-de-basuras-en-las-calles-3439867",
    "Tipo": "Internet"
  },
  {
    "Fecha": "6/04/2025",
    "Medio": "eltiempo.com",
    "Titular": "Parques públicos: entre juegos y excrementos / Opinión",
    "URL": "https://www.eltiempo.com/bogota/parques-publicos-entre-juegos-y-excrementos-3442206",
    "Tipo": "Internet"
  },
  {
    "Fecha": "7/04/2025",
    "Medio": "eltiempo.com",
    "Titular": "El reproche del presidente Petro a Ricardo Roa por importación de gas de Ecopetrol: 'Hermano, no entiendo'",
    "URL": "https://www.eltiempo.com/politica/gobierno/el-reproche-del-presidente-petro-a-ricardo-roa-por-importacion-de-gas-de-ecopetrol-hermano-no-entiendo-3442637",
    "Tipo": "Internet"
  },
  {
    "Fecha": "19/04/2025",
    "Medio": "eltiempo.com",
    "Titular": "El riesgoso aumento de ciclomotores, vehículos pequeños y hechizos para la seguridad vial en la ciudad",
    "URL": "https://www.eltiempo.com/bogota/el-riesgoso-aumento-de-ciclomotores-vehiculos-pequenos-y-hechizos-para-la-seguridad-vial-en-la-ciudad-3446043",
    "Tipo": "Internet"
  },
  {
    "Fecha": "23/04/2025",
    "Medio": "eltiempo.com",
    "Titular": "Pobreza multidimensional en Bogotáá: hay 148.000 personas más en esa condición, ¿cuáles son las causas del aumento?",
    "URL": "https://www.eltiempo.com/bogota/pobreza-multidimensional-en-bogota-hay-184-000-personas-mas-en-esa-condicion-cuales-son-las-causas-3447431",
    "Tipo": "Internet"
  },
  {
    "Fecha": "27/04/2025",
    "Medio": "eltiempo.com",
    "Titular": "Columna de opinión: ¿rumba hasta las 5 a. m.? Una decisión que merece algo más que entusiasmo",
    "URL": "https://www.eltiempo.com/bogota/columna-de-opinion-rumba-hasta-las-5-a-m-una-decision-que-merece-algo-mas-que-entusiasmo-3448509",
    "Tipo": "Internet"
  },
  {
    "Fecha": "3/05/2025",
    "Medio": "eltiempo.com",
    "Titular": "Bogotáá 24 horas: una apuesta que no cuaja",
    "URL": "https://www.eltiempo.com/bogota/bogota-24-horas-una-apuesta-que-no-cuaja-3450299",
    "Tipo": "Internet"
  },
  {
    "Fecha": "3/05/2025",
    "Medio": "eltiempo.com",
    "Titular": "¿Qué está pasando en Bogotáá? Galán, metro, cortes de energía y rumba",
    "URL": "https://www.eltiempo.com/videos-eltiempo/que-esta-pasando-en-bogota-galan-metro-cortes-de-energia-y-rumba-3450285",
    "Tipo": "Internet"
  },
  {
    "Fecha": "4/05/2025",
    "Medio": "eltiempo.com",
    "Titular": "Columna de opinión: conciertos impulsan a Bogotáá, pero falta estrategia para aprovechar su potencial",
    "URL": "https://www.eltiempo.com/bogota/columna-de-opinion-conciertos-impulsan-a-bogota-pero-falta-estrategia-para-aprovechar-su-potencial-3450441",
    "Tipo": "Internet"
  },
  {
    "Fecha": "5/05/2025",
    "Medio": "eltiempo.com",
    "Titular": "Una masacre y un asalto a ciclistas se suman a crisis de seguridad de Bogotáá, ¿qué está pasando?",
    "URL": "https://www.eltiempo.com/bogota/una-masacre-y-un-asalto-a-ciclistas-se-suman-a-crisis-de-seguridad-de-bogota-que-esta-pasando-3450830",
    "Tipo": "Internet"
  },
  {
    "Fecha": "11/05/2025",
    "Medio": "eltiempo.com",
    "Titular": "Opinión | Ellas solas: la otra cara de los hogares bogotanos",
    "URL": "https://www.eltiempo.com/bogota/ellas-solas-la-otra-cara-de-los-hogares-bogotanos-3452713",
    "Tipo": "Internet"
  },
  {
    "Fecha": "18/05/2025",
    "Medio": "eltiempo.com",
    "Titular": "Opinión| El metro como galería: una oportunidad para el grafiti bogotano",
    "URL": "https://www.eltiempo.com/bogota/opinion-el-metro-como-galeria-una-oportunidad-para-el-grafiti-bogotano-3454985",
    "Tipo": "Internet"
  },
  {
    "Fecha": "24/05/2025",
    "Medio": "eltiempo.com",
    "Titular": "Bogotáá es una ciudad ruidosa: cerca de 1.000 reportes al día al 123 lo confirman",
    "URL": "",
    "Tipo": "Internet"
  },
  {
    "Fecha": "8/06/2025",
    "Medio": "eltiempo.com",
    "Titular": "Columna de opinión Omar Oróstegui |La violencia irrumpe en la campaña política",
    "URL": "https://www.eltiempo.com/bogota/la-violencia-irrumpe-en-la-campana-politica-3461460",
    "Tipo": "Internet"
  },
  {
    "Fecha": "6/07/2025",
    "Medio": "eltiempo.com",
    "Titular": "Micromovilidad sin reglas claras: una ley que llega tarde y complica más de lo que resu",
    "URL": "https://www.eltiempo.com/bogota/micromovilidad-sin-reglas-claras-una-ley-que-llega-tarde-y-complica-mas-de-lo-que-resuelve-3469438",
    "Tipo": "Internet"
  },
  {
    "Fecha": "13/07/2025",
    "Medio": "eltiempo.com",
    "Titular": "Columna de opinión | El lío con los Emberás y el silencio del Gobierno nacional",
    "URL": "https://www.eltiempo.com/bogota/el-lio-con-los-emberas-y-el-silencio-del-gobierno-nacional-3471596",
    "Tipo": "Internet"
  },
  {
    "Fecha": "3/08/2025",
    "Medio": "eltiempo.com",
    "Titular": "Opinión: Los regalos que Bogotáá se merece",
    "URL": "https://www.eltiempo.com/bogota/opinion-los-regalos-que-bogota-se-merece-3477977",
    "Tipo": "Internet"
  },
  {
    "Fecha": "6/08/2025",
    "Medio": "eltiempo.com",
    "Titular": "Tres años del gobierno Petro: una relación de tensiones frecuentes y poco apoyo a Bogotáá",
    "URL": "",
    "Tipo": "Internet"
  },
  {
    "Fecha": "10/08/2025",
    "Medio": "eltiempo.com",
    "Titular": "Columna de opinión | Alumbrado público: el debate que nunca se apaga",
    "URL": "https://www.eltiempo.com/bogota/alumbrado-publico-el-debate-que-nunca-se-apaga-3480004",
    "Tipo": "Internet"
  },
  {
    "Fecha": "18/08/2025",
    "Medio": "eltiempo.com",
    "Titular": "Opinión: El costo de no tener baños públicos",
    "URL": "https://www.eltiempo.com/bogota/opinion-el-costo-de-no-tener-banos-publicos-3482423",
    "Tipo": "Internet"
  },
  {
    "Fecha": "22/08/2025",
    "Medio": "eltiempo.com",
    "Titular": "Patinetas eléctricas en Bogotáá: entre el riesgo por la inseguridad y el aumento de usuarios",
    "URL": "https://www.eltiempo.com/bogota/patinetas-electricas-en-bogota-entre-el-riesgo-por-la-inseguridad-y-el-aumento-de-usuarios-3483984",
    "Tipo": "Internet"
  },
  {
    "Fecha": "7/09/2025",
    "Medio": "eltiempo.com",
    "Titular": "Columna de opinión Ómar Oróstegui | Bogotáá, atrapada en el tráfico",
    "URL": "https://www.eltiempo.com/bogota/columna-de-opinion-omar-orostegui-bogota-atrapada-en-el-trafico-3488528",
    "Tipo": "Internet"
  },
  {
    "Fecha": "21/09/2025",
    "Medio": "eltiempo.com",
    "Titular": "Opinión | Manifestaciones de moteros, presión política disfrazada de protestóa ciudadana",
    "URL": "https://www.eltiempo.com/bogota/opinion-manifestaciones-de-moteros-presion-politica-disfrazada-de-protestóa-ciudadana-3492698",
    "Tipo": "Internet"
  },
  {
    "Fecha": "20/09/2025",
    "Medio": "eltiempo.com",
    "Titular": "Asíí se mueve el gremio de moteros que protestóó y bloqueóó varias vías en Bogotáá: coordinan hostigamientos y agresiones",
    "URL": "https://www.eltiempo.com/bogota/asi-se-mueve-el-gremio-de-moteros-que-protestóo-y-bloqueóo-varias-vias-en-bogota-coordinan-hostigamientos-y-agresiones-3492467",
    "Tipo": "Internet"
  },
  {
    "Fecha": "17/09/2025",
    "Medio": "eltiempo.com",
    "Titular": "Duros cuestionamientos a las alcaldías locales: ¿Qué hay detrás del debate?, ¿llegó el momento de repensar esas figuras?",
    "URL": "https://www.eltiempo.com/bogota/duros-cuestionamientos-a-las-alcaldias-locales-que-hay-detras-del-debate-llego-el-momento-de-repensar-esas-figuras-3491698",
    "Tipo": "Internet"
  },
  {
    "Fecha": "14/09/2025",
    "Medio": "eltiempo.com",
    "Titular": "Opinión | El retorno de los Emberás: un regreso con fecha de vencimiento",
    "URL": "https://www.eltiempo.com/bogota/opinion-el-retorno-de-los-emberas-un-regreso-con-fecha-de-vencimiento-3490627",
    "Tipo": "Internet"
  },
  {
    "Fecha": "5/10/2025",
    "Medio": "eltiempo.com",
    "Titular": "¿Guardianes o gestores? El dilema detrás de la nueva apuesta por la convivencia",
    "URL": "https://www.eltiempo.com/bogota/opinion-guardianes-o-gestores-el-dilema-detras-de-la-nueva-apuesta-por-la-convivencia-3497002",
    "Tipo": "Internet"
  },
  {
    "Fecha": "6/10/2025",
    "Medio": "eltiempo.com",
    "Titular": "Homicidios en Bosa, San Cristóbal y Santa Fe, la radiografía de la violencia por intolerancia en Bogotáá: alcaldía lanzó campaña para prevenir crímenes",
    "URL": "https://www.eltiempo.com/bogota/homicidios-en-bosa-san-cristobal-y-santa-fe-la-radiografia-de-la-violencia-por-intolerancia-en-bogota-alcaldia-lanzo-campana-para-prevenir-crimenes-3497329",
    "Tipo": "Internet"
  },
  {
    "Fecha": "19/10/2025",
    "Medio": "eltiempo.com",
    "Titular": "Opinión | La deuda histórica con los jóvenes bogotanos",
    "URL": "https://www.eltiempo.com/bogota/opinion-la-deuda-historica-con-los-jovenes-bogotanos-3501144",
    "Tipo": "Internet"
  },
  {
    "Fecha": "3/11/2025",
    "Medio": "eltiempo.com",
    "Titular": "Opinión| Las lecciones de las prohibiciones a los motociclistas el fin de semana",
    "URL": "https://www.eltiempo.com/bogota/opinion-las-lecciones-de-las-prohibiciones-a-los-motociclistas-el-fin-de-semana-3505655",
    "Tipo": "Internet"
  },
  {
    "Fecha": "1/12/2025",
    "Medio": "eltiempo.com",
    "Titular": "Presupuesto 2026: más recaudo y más deuda",
    "URL": "https://www.eltiempo.com/bogota/presupuesto-2026-mas-recaudo-y-mas-deuda-3513170",
    "Tipo": "Internet"
  },
  {
    "Fecha": "23/11/2025",
    "Medio": "eltiempo.com",
    "Titular": "Opinión | Metrópolis: el laboratorio de la nueva renovación urbana",
    "URL": "https://www.eltiempo.com/bogota/metropolis-el-laboratorio-de-la-nueva-renovacion-urbana-3511151",
    "Tipo": "Internet"
  },
  {
    "Fecha": "17/11/2025",
    "Medio": "eltiempo.com",
    "Titular": "Opinión | ¿Movilidad o recaudo? Lo que esconde el nuevo pico y placa",
    "URL": "https://www.eltiempo.com/bogota/opinion-movilidad-o-recaudo-lo-que-esconde-el-nuevo-pico-y-placa-3509573",
    "Tipo": "Internet"
  },
  {
    "Fecha": "9/11/2025",
    "Medio": "eltiempo.com",
    "Titular": "Opinión | Entre el bienestar y la realidad: el debate sobre horarios escolares",
    "URL": "https://www.eltiempo.com/bogota/opinion-entre-el-bienestar-y-la-realidad-el-debate-sobre-horarios-escolares-3507418",
    "Tipo": "Internet"
  },
  {
    "Fecha": "15/11/2025",
    "Medio": "eltiempo.com",
    "Titular": "Nueva medida del pico y placa en Bogotáá: ¿quiénes ganan y quiénes pierden con la reciente decisión de la Alcaldía?",
    "URL": "https://www.eltiempo.com/bogota/nueva-medida-del-pico-y-placa-en-bogota-quienes-ganan-y-quienes-pierden-con-la-reciente-decision-de-la-alcaldia-3509175",
    "Tipo": "Internet"
  },
  {
    "Fecha": "30/09/2025",
    "Medio": "El Tiempo",
    "Titular": "Rechazo a actos vandálicos y mensajes de odio",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1555158820",
    "Tipo": "Internet"
  },
  {
    "Fecha": "25/03/2025",
    "Medio": "El Tiempo",
    "Titular": "Guardianes del orden, una buena idea con mucha improvisación",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1418305144",
    "Tipo": "Internet"
  },
  {
    "Fecha": "6/01/2025",
    "Medio": "eltiempo.com",
    "Titular": "Opinión | Operación retorno y congestión vehicular",
    "URL": "https://www.eltiempo.com/bogota/opinion-operacion-retorno-y-congestion-vehicular-3415127",
    "Tipo": "Internet"
  },
  {
    "Fecha": "30/01/2025",
    "Medio": "eltiempo.com",
    "Titular": "¿Por qué Bogotáá le sigue diciendo no a los cobros por descongestión mientras grandes ciudades implementan el modelo?",
    "URL": "https://www.eltiempo.com/bogota/por-que-bogota-le-sigue-diciendo-no-a-los-cobros-por-descongestion-mientras-grandes-ciudades-implementan-el-modelo-3422331",
    "Tipo": "Internet"
  },
  {
    "Fecha": "12/01/2025",
    "Medio": "eltiempo.com",
    "Titular": "Columna de opinión Omar Oróstegui | Migración venezolana en Bogotáá",
    "URL": "https://www.eltiempo.com/bogota/columna-de-opinion-omar-orostegui-migracion-venezolana-en-bogota-3416791",
    "Tipo": "Internet"
  },
  {
    "Fecha": "26/01/2025",
    "Medio": "eltiempo.com",
    "Titular": "Columna de opinión de Ómar Oróstegui | El caños de las ciclorrutas",
    "URL": "https://www.eltiempo.com/bogota/columna-de-opinion-omar-orostegui-el-caños-de-las-ciclorrutas-3421031",
    "Tipo": "Internet"
  },
  {
    "Fecha": "19/01/2025",
    "Medio": "eltiempo.com",
    "Titular": "Opinión| Reducir homicidio, extorsión y violencia intrafamiliar, los retos de Galán en el 2025",
    "URL": "https://www.eltiempo.com/bogota/opinion-reducir-homicidio-extorsion-y-violencia-intrafamiliar-los-retos-de-galan-en-el-2025-3418864",
    "Tipo": "Internet"
  },
  {
    "Fecha": "20/01/2025",
    "Medio": "eltiempo.com",
    "Titular": "Reducir homicidio, extorsión y violencia intrafamiliar, los retos de Galán en el 2025 | Columna de opinión de Omar…",
    "URL": "https://www.eltiempo.com/bogota/reducir-homicidio-extorsion-y-violencia-intrafamiliar-los-retos-de-galan-en-el-2025-columna-de-opinion-de-omar-orostegui-3418864",
    "Tipo": "Internet"
  },
  {
    "Fecha": "15/09/2025",
    "Medio": "El Tiempo",
    "Titular": "El retorno de los emberás: un regreso con fecha de vencimiento",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1543990612",
    "Tipo": "Internet"
  },
  {
    "Fecha": "4/11/2025",
    "Medio": "El Tiempo",
    "Titular": "Las lecciones de las prohibiciones a los motociclistas el fin de semana",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1580167263",
    "Tipo": "Internet"
  },
  {
    "Fecha": "1/09/2025",
    "Medio": "El Tiempo",
    "Titular": "COLUMNA DE OPINION-Alcaldías locales: poder sin control en Bogotáá",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1533552459",
    "Tipo": "Internet"
  },
  {
    "Fecha": "1/12/2025",
    "Medio": "El Tiempo",
    "Titular": "Presupuesto 2026: más recaudo y más deuda",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1597903887",
    "Tipo": "Internet"
  },
  {
    "Fecha": "7/04/2025",
    "Medio": "El Tiempo",
    "Titular": "Parques públicos: entre juegos y excrementos",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1428266318",
    "Tipo": "Internet"
  },
  {
    "Fecha": "18/11/2025",
    "Medio": "El Tiempo",
    "Titular": "¿Movilidad o recaudo? Lo que esconde el nuevo pico y placa",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1589374448",
    "Tipo": "Internet"
  },
  {
    "Fecha": "5/05/2025",
    "Medio": "El Tiempo",
    "Titular": "Conciertos impulsan a Bogotáá, pero falta estrategia para aprovechar su potencial",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1447525569",
    "Tipo": "Internet"
  },
  {
    "Fecha": "24/11/2025",
    "Medio": "El Tiempo",
    "Titular": "Metrópolis: el laboratorio de la nueva renovación urbana",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1593322756",
    "Tipo": "Internet"
  },
  {
    "Fecha": "7/07/2025",
    "Medio": "El Tiempo",
    "Titular": "OPINIÓN Micromovilidad sin reglas claras: una ley que llega tarde y complica más de lo que resuelve",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1494482710",
    "Tipo": "Internet"
  },
  {
    "Fecha": "22/09/2025",
    "Medio": "El Tiempo",
    "Titular": "Manifestaciones de moteros, presión política disfrazada de protestóa ciudadana",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1548969276",
    "Tipo": "Internet"
  },
  {
    "Fecha": "8/04/2025",
    "Medio": "Infobae.com",
    "Titular": "Petro cuestiona a Roa porque Ecopetrol no está importando gas: \"Hermano, no entiendo por qué no lo están haciendo\"",
    "URL": "https://www.infobae.com/colombia/2025/04/08/petro-cuestiona-a-roa-porque-ecopetrol-no-esta-importando-gas-hermano-no-entiendo-por-que-no-lo-estan-haciendo",
    "Tipo": "Internet"
  },
  {
    "Fecha": "4/05/2025",
    "Medio": "Infobae.com",
    "Titular": "Lejos de multarlo, Policía grabó a motociclista que practicaba Stunt en vía principal de Bogotáá",
    "URL": "https://www.infobae.com/colombia/2025/05/04/lejos-de-multarlo-policia-grabo-a-motociclista-que-practicaba-stunt-en-via-principal-de-bogota/",
    "Tipo": "Internet"
  },
  {
    "Fecha": "26/05/2025",
    "Medio": "Infobae.com",
    "Titular": "?En video quedó el ataque de peatón a motociclista en Bogotáá: lo hizo caer tras golpearlo en la cara",
    "URL": "https://www.infobae.com/colombia/2025/05/26/en-video-quedo-el-ataque-de-peaton-a-motociclista-en-bogota-lo-hizo-caer-tras-golpearlo-en-la-cara/",
    "Tipo": "Internet"
  },
  {
    "Fecha": "28/04/2025",
    "Medio": "El Tiempo",
    "Titular": "¿Rumba hasta las 5 a. m.? Una decisión que merece algo más que entusiasmo",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1442695637",
    "Tipo": "Internet"
  },
  {
    "Fecha": "16/06/2025",
    "Medio": "El Tiempo",
    "Titular": "OPINIÓN La violencia como mecanismo de resolución de conflictos",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1479447675",
    "Tipo": "Internet"
  },
  {
    "Fecha": "6/10/2025",
    "Medio": "El Tiempo",
    "Titular": "OPINIÓN: ¿Guardianes o gestores?, el dilema detrás de la nueva apuesta por la convivencia",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1559929763",
    "Tipo": "Internet"
  },
  {
    "Fecha": "13/01/2025",
    "Medio": "El Tiempo",
    "Titular": "Migración venezolana en Bogotáá",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1365564713",
    "Tipo": "Internet"
  },
  {
    "Fecha": "10/03/2025",
    "Medio": "El Tiempo",
    "Titular": "OPINIÓN  -  La estrategia de Galán por recuperar el espacio público y regular las ventas ambulantes",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1407010258",
    "Tipo": "Internet"
  },
  {
    "Fecha": "20/09/2025",
    "Medio": "Infobae.com",
    "Titular": "Bloqueos, sabotajes y la batalla por el control vial: revelan cómo el gremio motero intenta imponerse en Bogotáá",
    "URL": "https://www.infobae.com/colombia/2025/09/20/bloqueóos-sabotajes-y-la-batalla-por-el-control-vial-revelan-como-el-gremio-motero-intenta-imponerse-en-bogota",
    "Tipo": "Internet"
  },
  {
    "Fecha": "19/08/2025",
    "Medio": "El Tiempo",
    "Titular": "OPINIÓN El costo de no tener baños públicos",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1524870287",
    "Tipo": "Internet"
  },
  {
    "Fecha": "11/08/2025",
    "Medio": "El Tiempo",
    "Titular": "OPINIÓN Alumbrado público: el debate que nunca se apaga",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1519920396",
    "Tipo": "Internet"
  },
  {
    "Fecha": "25/02/2025",
    "Medio": "El Tiempo",
    "Titular": "Galán versus Petro: una pelea con muchas batallas por delante",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1397492906",
    "Tipo": "Internet"
  },
  {
    "Fecha": "29/09/2025",
    "Medio": "El Tiempo",
    "Titular": "Bogotáá late distinto cuando el arte la habita",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1554298926",
    "Tipo": "Internet"
  },
  {
    "Fecha": "3/06/2025",
    "Medio": "El Tiempo",
    "Titular": "Zonas libres de drogas: Bogotáá avanza en la señalización del espacio público",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1469389345",
    "Tipo": "Internet"
  },
  {
    "Fecha": "11/04/2025",
    "Medio": "redmas.com.co",
    "Titular": "Racionamiento de agua en Bogotáá está de cumpleaños: cumple un añito y expertos explican las lecciones que deja la medida",
    "URL": "https://redmas.com.co/colombia/Racionamiento-de-agua-en-Bogotáa-esta-de-cumpleanos-cumple-un-anito-y-expertos-explican-las-lecciones-que-deja-la-medida-20250410-0026.html",
    "Tipo": "Internet"
  },
  {
    "Fecha": "26/05/2025",
    "Medio": "El Tiempo",
    "Titular": "El reversazo de Galán con la carrera 7.a",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1463460664",
    "Tipo": "Internet"
  },
  {
    "Fecha": "10/02/2025",
    "Medio": "El Tiempo",
    "Titular": "OPINIÓN - Ruido, un problema invisible en Bogotáá",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1386242374",
    "Tipo": "Internet"
  },
  {
    "Fecha": "5/08/2025",
    "Medio": "El Tiempo",
    "Titular": "OPINIÓN Los regalos que Bogotáá se merece",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1516032776",
    "Tipo": "Internet"
  },
  {
    "Fecha": "30/01/2025",
    "Medio": "pulzo.com",
    "Titular": "Proponen cobro a conductores de Bogotáá, aunque idea no termina de cuajar con Galán\"",
    "URL": "https://www.pulzo.com/nacion/bogota/proponen-cobros-por-descongestion-bogota-para-aliviar-pico-placa-trancon-PP4276821",
    "Tipo": "Internet"
  },
  {
    "Fecha": "21/06/2025",
    "Medio": "La República",
    "Titular": "SERVICIOS DE VIGILANCIA SON DE CARACTERÍSTICAS TÉCNICAS UNIFORMES - Asíuntos Legales",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1484037593",
    "Tipo": "Internet"
  },
  {
    "Fecha": "7/03/2025",
    "Medio": "Vanguardia",
    "Titular": "Asíí cambiará la población de Santander en el 2 0 3 5",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1405393275",
    "Tipo": "Internet"
  },
  {
    "Fecha": "30/01/2025",
    "Medio": "portafolio.co",
    "Titular": "Cobros por descongestión: ¿por qué este modelo aún no se ha implementado en Bogotáá?",
    "URL": "https://www.portafolio.co/economia/regiones/por-que-el-cobro-por-descongestion-aun-no-se-ha-implementado-en-bogota-622847",
    "Tipo": "Internet"
  },
  {
    "Fecha": "28/03/2025",
    "Medio": "Canal Red Mas",
    "Titular": "Comerciantes de Bogotáá se quejan por millonarias pérdidas ante obras viales   ( Mención Metro de Bogotáá  - Transmilenio  - Fenalco ) ( Concejo de Bogotáá  Julian Uscategui )  ( Dario Hidalgo Universidad Javeriana )   ( Omar Orostegui Universidad de La Sabana )",
    "URL": "https://a.eprensa.com/view_pdf.php?sid=23130&cid=1421492199",
    "Tipo": "Internet"
  },
  {
    "Fecha": "4/06/2025",
    "Medio": "Portafolio",
    "Titular": "Líder que grita, organización que se marchita",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1470315068",
    "Tipo": "Internet"
  },
  {
    "Fecha": "6/03/2025",
    "Medio": "caracol.com.co",
    "Titular": "¿Piensa tener hijos? Un estudio de la Uni.Sabana afirma que en 2035 la natalidad estará en 12 %",
    "URL": "https://caracol.com.co/2025/03/06/piensa-tener-hijos-un-estudio-de-la-unisabana-afirma-que-en-2035-la-natalidad-estara-en-12/",
    "Tipo": "Internet"
  },
  {
    "Fecha": "7/03/2025",
    "Medio": "Qhubo Bucaramanga",
    "Titular": "¿Cómo se vivirá en 10 años?",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1405632618",
    "Tipo": "Internet"
  },
  {
    "Fecha": "20/01/2025",
    "Medio": "Extra Bogotáá",
    "Titular": "CONCEJAL ENCONTRADO MUERTO",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1370643741",
    "Tipo": "Internet"
  },
  {
    "Fecha": "8/11/2025",
    "Medio": "La República",
    "Titular": "La Sabana y Blend serán aliados en tecnología",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1583272009",
    "Tipo": "Internet"
  },
  {
    "Fecha": "5/03/2025",
    "Medio": "Canal Capital",
    "Titular": "Alcaldia de Bogotáá  anunció que tomará acciones legales contra Gobierno Nacional  si no replantea  resolución en la que cambia la delimitación de las zonas de la Sabana de Bogotáá ( Alcaldia de Bogotáá  Carlos Fernando Galán ) ( Secretaria Distrital de Planeación de Bogotáá Úrsula Ablanque ) ( Secretaria de Habitat de Bogotáá  Vanessa Velasco )  ( Secretaria Distrital de Desarrollo Económico de Bogotáá Maria del Pilar Uribe ) ( Secretaria de Ambiente de Bogotáá Adriana Soto ) (  Universidad EAN  Brigitte Baptiste ) ( Camacol Guillermo Herrera ) ( Ex Ministerio de Ambiente Manuel Rodriguez ) ( Universidad de La Sabana Omar Orostegui ) ( Gobernación de Cundinamarca Jorge Rey )",
    "URL": "https://a.eprensa.com/view_pdf.php?sid=23130&cid=1404157236",
    "Tipo": "Internet"
  },
  {
    "Fecha": "6/03/2025",
    "Medio": "vanguardia.com",
    "Titular": "En estos municipios de Santander vivirá la gente más joven y más vieja en 2035",
    "URL": "https://www.vanguardia.com/area-metropolitana/bucaramanga/2025/03/06/en-estos-municipios-de-santander-vivira-la-gente-mas-joven-y-mas-vieja-en-2035/",
    "Tipo": "Internet"
  },
  {
    "Fecha": "3/06/2025",
    "Medio": "portafolio.co",
    "Titular": "Líder que grita, organización que se marchita",
    "URL": "https://www.portafolio.co/opinion/analisis/lider-que-grita-organizacion-que-se-marchita-631903",
    "Tipo": "Internet"
  },
  {
    "Fecha": "12/06/2025",
    "Medio": "forbes.co",
    "Titular": "Mecanismo bursátil para corregir las distorsiones del mercado de combustibles en Colombia",
    "URL": "https://forbes.co/2025/06/12/red-forbes/mecanismo-bursatil-para-corregir-las-distorsiones-del-mercado-de-combustibles-en-colombia",
    "Tipo": "Internet"
  },
  {
    "Fecha": "24/06/2025",
    "Medio": "forbes.co",
    "Titular": "La reconstrucción fiscal que le espera al próximo Presidente",
    "URL": "https://forbes.co/2025/06/24/red-forbes/la-reconstruccion-fiscal-que-le-espera-al-proximo-presidente",
    "Tipo": "Internet"
  },
  {
    "Fecha": "11/11/2025",
    "Medio": "portafolio.co",
    "Titular": "Blend y la Universidad de La Sabana impulsan alianza para fortalecer la formación e innovación y en IA",
    "URL": "https://www.portafolio.co/tecnologia/blend-y-la-universidad-de-la-sabana-impulsan-alianza-para-fortalecer-la-formacion-e-innovacion-y-en-ia-482962",
    "Tipo": "Internet"
  },
  {
    "Fecha": "25/03/2025",
    "Medio": "eluniversal.com.co",
    "Titular": "¿Habrá más hombres que mujeres en Cartagena en 2035? Estudio lo dice",
    "URL": "https://www.eluniversal.com.co/cartagena/2025/03/25/cartagena-tendra-mas-mujeres-que-hombres-para-2035-segun-proyeccion/",
    "Tipo": "Internet"
  },
  {
    "Fecha": "18/11/2025",
    "Medio": "Teleantioquia",
    "Titular": "La cifra informativa de hoy 91.6% son los casos de siniestros viales que quedan sin respuesta judicial.",
    "URL": "https://a.eprensa.com/view_pdf.php?sid=23130&cid=1589471497",
    "Tipo": "Internet"
  },
  {
    "Fecha": "5/01/2025",
    "Medio": "Extra Bogotáá",
    "Titular": "FUE ENCONTRADO SIN VIDA",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1361480828",
    "Tipo": "Internet"
  },
  {
    "Fecha": "6/03/2025",
    "Medio": "Caracol Radio Bogotáá",
    "Titular": "La natalidad en Colombia se redujo un 12%, según un estudio de la Universidad de La Sabana",
    "URL": "https://a.eprensa.com/view_pdf.php?sid=23130&cid=1405388375",
    "Tipo": "Internet"
  },
  {
    "Fecha": "13/01/2025",
    "Medio": "Canal Capital",
    "Titular": "La mayor frustración del gobierno distrital fue el aumento de homicidios, el número de asesinatos creció casi 12% y por eso el año 2024 fue el más violento de los últimos 8 años ( Omar orostegui Universidad de la Sabana - Felipe Mariño Bogotáá Cómo Vamos - Cesar Restrepo Secretaria de Seguridad de Bogotáá )",
    "URL": "https://a.eprensa.com/view_pdf.php?sid=23130&cid=1366139467",
    "Tipo": "Internet"
  },
  {
    "Fecha": "13/11/2025",
    "Medio": "lanotaeconomica.com.co",
    "Titular": "La Inteligencia Artificial al servicio del país: Blend y Universidad de La Sabana unen fuerzas para resolver retos públicos",
    "URL": "https://lanotaeconomica.com.co/movidas-empresarial/la-inteligencia-artificial-al-servicio-del-pais-blend-y-universidad-de-la-sabana-unen-fuerzas-para-resolver-retos-publicos",
    "Tipo": "Internet"
  },
  {
    "Fecha": "10/03/2025",
    "Medio": "Canal Capital",
    "Titular": "En Bogotáá se ha visto un positivo avance en materia de inclusión de mujeres al mercado laboral  ( Secretaría  Distrital de Desarrollo Económico de Bogotáá  Maria del Pilar Lopez  )  ( Universidad La Sabana  Juan Sotelo )  ( Fondo Mujer Maria Fernanda Reyes )",
    "URL": "https://a.eprensa.com/view_pdf.php?sid=23130&cid=1407588655",
    "Tipo": "Internet"
  },
  {
    "Fecha": "11/06/2025",
    "Medio": "asuntoslegales.com.co",
    "Titular": "Un estado, en estado de naturaleza |",
    "URL": "https://asuntoslegales.com.co/analisis/sergio-andres-morales-barreto-3905762/un-estado-en-estado-de-naturaleza-4155310",
    "Tipo": "Internet"
  },
  {
    "Fecha": "25/06/2025",
    "Medio": "asuntoslegales.com.co",
    "Titular": "Iván Felipe Unigarro Dorado, Análisis legal, judicial y el impacto de las leyes de Colombia | Asíuntoslegales.com.co",
    "URL": "https://www.asuntoslegales.com.co/analisis/ivan-felipe-unigarro-dorado-4164753",
    "Tipo": "Internet"
  },
  {
    "Fecha": "21/06/2025",
    "Medio": "asuntoslegales.com.co",
    "Titular": "Los servicios de vigilancia y seguridad privada son de características técnicas uniformes |",
    "URL": "https://www.asuntoslegales.com.co/consultorio/los-servicios-de-vigilancia-y-seguridad-privada-son-de-caracteristicas-tecnicas-uniformes-4162992",
    "Tipo": "Internet"
  },
  {
    "Fecha": "8/04/2025",
    "Medio": "chicanoticias.com",
    "Titular": "Petro propone importar gas de Panamá por los cables de energía y le llueven críticas y memes",
    "URL": "https://www.chicanoticias.com/2025/04/08/cables-gas-panama/",
    "Tipo": "Internet"
  },
  {
    "Fecha": "3/06/2025",
    "Medio": "El Observatorio de la Universidad Colombiana",
    "Titular": "¿Por qué es importante la doctrina social de la iglesia para los universitarios?: Felipe Cárdenas",
    "URL": "https://www.universidad.edu.co/por-que-es-importante-la-doctrina-social-de-la-iglesia-para-los-universitarios-felipe-cardenas",
    "Tipo": "Internet"
  },
  {
    "Fecha": "13/11/2025",
    "Medio": "portalgeek.co",
    "Titular": "Blend y Universidad de La Sabana impulsan la Inteligencia Artificial para resolver retos públicos en Colombia",
    "URL": "https://portalgeek.co/educacion/blend-universidad-de-la-sabana",
    "Tipo": "Internet"
  },
  {
    "Fecha": "7/11/2025",
    "Medio": "unisabana.edu.co",
    "Titular": "Universidad de La Sabana y Blend sellan alianza para potenciar el desarrollo de proyectos en inteligencia artificial y analítica de datos con soporte de AWS",
    "URL": "https://www.unisabana.edu.co/noticias/paso-en-la-sabana/universidad-de-la-sabana-y-blend-sellan-alianza-para-potenciar-el-desarrollo-de-proyectos-en",
    "Tipo": "Internet"
  },
  {
    "Fecha": "13/11/2025",
    "Medio": "setechnota.com",
    "Titular": "La Inteligencia Artificial al servicio del país: Blend y Universidad de La Sabana unen fuerzas para resolver retos públicos",
    "URL": "https://setechnota.com/2025/11/13/la-inteligencia-artificial-al-servicio-del-pais-blend-y-universidad-de-la-sabana-unen-fuerzas-para-resolver-retos-publicos",
    "Tipo": "Internet"
  },
  {
    "Fecha": "14/10/2025",
    "Medio": "Radio 1040",
    "Titular": "Para el mes Internacional de Prevención del Suicidio es laboratorio de Gobierno de la Universidad de La Sabana. Reportó las tasas de suicidio en el país",
    "URL": "https://a.eprensa.com/view_pdf.php?sid=23130&cid=1565518090",
    "Tipo": "Internet"
  },
  {
    "Fecha": "2/02/2026",
    "Medio": "El Tiempo",
    "Titular": "OPINIÓN El ocaso de un símbolo: ¿para qué sirve hoy el día sin carro?",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1634484143",
    "Tipo": "Prensa"
  },
  {
    "Fecha": "1/02/2026",
    "Medio": "eltiempo.com",
    "Titular": "Opinión | El ocaso de un símbolo ¿Para qué sirve hoy el Día sin Carro?",
    "URL": "https://www.eltiempo.com/bogota/opinion-el-ocaso-de-un-simbolo-para-que-sirve-hoy-el-dia-sin-carro-3528899",
    "Tipo": "Internet"
  },
  {
    "Fecha": "27/01/2026",
    "Medio": "lafm.com.co",
    "Titular": "La carta de Lafaurie y la línea que se rompió en el uribismo",
    "URL": "https://www.lafm.com.co/politica/la-carta-de-lafaurie-y-la-linea-que-se-rompio-en-el-uribismo-388823",
    "Tipo": "Internet"
  },
  {
    "Fecha": "26/01/2026",
    "Medio": "desopinion.com",
    "Titular": "la crisis habitacional que desnudó un concierto en Medellín",
    "URL": "https://desopinion.com/la-crisis-habitacional-que-desnudo-un-concierto-en-medellin",
    "Tipo": "Internet"
  },
  {
    "Fecha": "26/01/2026",
    "Medio": "El Tiempo",
    "Titular": "OPINIÓN: El ‘Efecto Bad Bunny’: La crisis habitacional que desnudó un concierto.",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1628862854",
    "Tipo": "Prensa"
  },
  {
    "Fecha": "25/01/2026",
    "Medio": "eltiempo.com",
    "Titular": "El ‘Efecto Bad Bunny’: la crisis habitacional que desnudó un concierto en Medellín",
    "URL": "https://www.eltiempo.com/bogota/el-efecto-bad-bunny-la-crisis-habitacional-que-desnudo-un-concierto-en-medellin-3527043",
    "Tipo": "Internet"
  },
  {
    "Fecha": "3/01/2026",
    "Medio": "El Espectador",
    "Titular": "Carlos Femando Galán: dos años para dejar su legado",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1616287131",
    "Tipo": "Prensa"
  },
  {
    "Fecha": "19/01/2026",
    "Medio": "El Tiempo",
    "Titular": "El salario mínimo no es gratis (y alguien siempre paga la cuenta)",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1624403172",
    "Tipo": "Prensa"
  },
  {
    "Fecha": "18/01/2026",
    "Medio": "eltiempo.com",
    "Titular": "Opinión | El salario mínimo no es gratis (y alguien siempre paga la cuenta)",
    "URL": "https://www.eltiempo.com/bogota/opinion-el-salario-minimo-no-es-gratis-y-alguien-siempre-paga-la-cuenta-3525168",
    "Tipo": "Internet"
  },
  {
    "Fecha": "15/01/2026",
    "Medio": "eltiempo.com",
    "Titular": "En Bogotáá, ciudadanos se sienten más inseguros, pero delitos y victimización bajaron: ¿Casos virales en redes sociales impactan en la percepción?",
    "URL": "https://www.eltiempo.com/bogota/en-bogota-ciudadanos-se-sienten-mas-inseguros-pero-delitos-y-victimizacion-bajaron-casos-virales-en-redes-sociales-impactan-en-la-percepcion-3524572",
    "Tipo": "Internet"
  },
  {
    "Fecha": "15/01/2026",
    "Medio": "Infobae",
    "Titular": "Rumba hasta las 5:00 a. m. en Bogotáá: experto advierte desafíos en seguridad y movilidad por la medida - Infobae",
    "URL": "https://www.infobae.com/colombia/2026/01/16/rumba-hasta-las-500-a-m-en-bogota-experto-advierte-desafios-en-seguridad-y-movilidad-por-la-medida/",
    "Tipo": "Internet"
  },
  {
    "Fecha": "16/01/2026",
    "Medio": "El Tiempo",
    "Titular": "El Distrito redujo nueve delitos, pero percepción de inseguridad se disparó",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1622977169",
    "Tipo": "Prensa"
  },
  {
    "Fecha": "17/01/2026",
    "Medio": "Canal RCN",
    "Titular": "Algunos dueños Locales comerciales nocturnos de Bogotáá denuncian que quedaron por fuera de la ampliación de zonas de rumba en la ciudad (Omar Oróstegui Dir. GOVLAB Universidad de la Sabana Andrés Nieto director del Observatorio de Seguridad de la Universidad Central)",
    "URL": "https://a.eprensa.com/view_pdf.php?sid=23130&cid=1623918097",
    "Tipo": "TV"
  },
  {
    "Fecha": "27/01/2026",
    "Medio": "La FM Radio",
    "Titular": "Punto de Quiebre // Lafaurie dice que se filtró carta en la que piden con Cabal no continuar en el Centro Democrático // política - partidos politicos - elecciones - candidatos presidenciales - funcionarios públicos -",
    "URL": "https://a.eprensa.com/view_pdf.php?sid=23130&cid=1629717995",
    "Tipo": "Radio"
  },
  {
    "Fecha": "18/01/2026",
    "Medio": "desopinion.com",
    "Titular": "El salario mínimo no es gratis (y alguien siempre paga la cuenta)",
    "URL": "https://desopinion.com/el-salario-minimo-no-es-gratis-y-alguien-siempre-paga-la-cuenta",
    "Tipo": "Internet"
  },
  {
    "Fecha": "2/02/2026",
    "Medio": "desopinion.com",
    "Titular": "El ocaso de un símbolo ¿Para qué sirve hoy el Día sin Carro?",
    "URL": "https://desopinion.com/el-ocaso-de-un-simbolo-para-que-sirve-hoy-el-dia-sin-carro",
    "Tipo": "Internet"
  },
  {
    "Fecha": "1/02/2026",
    "Medio": "eltiempo.com",
    "Titular": "Opinión | El ocaso de un símbolo ¿Para qué sirve hoy el Día sin Carro?",
    "URL": "https://www.eltiempo.com/bogota/opinion-el-ocaso-de-un-simbolo-para-que-sirve-hoy-el-dia-sin-carro-3528899",
    "Tipo": "Internet"
  },
  {
    "Fecha": "2/02/2026",
    "Medio": "El Tiempo",
    "Titular": "OPINIÓN El ocaso de un símbolo: ¿para qué sirve hoy el día sin carro?",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1634484143",
    "Tipo": "Prensa"
  },
  {
    "Fecha": "2/02/2026",
    "Medio": "desopinion.com",
    "Titular": "El ocaso de un símbolo ¿Para qué sirve hoy el Día sin Carro?",
    "URL": "https://desopinion.com/el-ocaso-de-un-simbolo-para-que-sirve-hoy-el-dia-sin-carro",
    "Tipo": "Internet"
  },
  {
    "Fecha": "5/02/2026",
    "Medio": "minuto60.com",
    "Titular": "¿Tiene sentido actualmente el Día sin Carro en Bogotáá? Análisis de un experto y cifras oficiales",
    "URL": "https://minuto60.com/bogota/tiene-sentido-actualmente-dia-carro-bogota/5749",
    "Tipo": "Internet"
  },
  {
    "Fecha": "9/02/2026",
    "Medio": "El Tiempo",
    "Titular": "OPINIÓN - El Campín, entre charcos y conciertos",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1639133925",
    "Tipo": "Prensa"
  },
  {
    "Fecha": "8/02/2026",
    "Medio": "desopinion.com",
    "Titular": "El Campín, entre charcos y conciertos",
    "URL": "https://desopinion.com/el-campin-entre-charcos-y-conciertos",
    "Tipo": "Internet"
  },
  {
    "Fecha": "15/02/2026",
    "Medio": "eltiempo.com",
    "Titular": "Opinión | El sicariato como posible brazo armado de la extorsión",
    "URL": "https://www.eltiempo.com/bogota/opinion-el-sicariato-como-posible-brazo-armado-de-la-extorsion-3532645",
    "Tipo": "Internet"
  },
  {
    "Fecha": "16/02/2026",
    "Medio": "El Tiempo",
    "Titular": "El sicariato como posible brazo armado de la extorsión",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1643698222",
    "Tipo": "Prensa"
  },
  {
    "Fecha": "22/02/2026",
    "Medio": "El Tiempo",
    "Titular": "Hogar de cuatro personas en Bogotáá necesitaría unos $ 7,6 millones mensuales",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1647980470",
    "Tipo": "Prensa"
  },
  {
    "Fecha": "21/02/2026",
    "Medio": "eltiempo.com",
    "Titular": "¿Cuánto se necesita para vivir en Bogotáá en 2026? Estos serían los cálculos para un hogar de cuatro personas y para una sola persona",
    "URL": "https://www.eltiempo.com/bogota/cuanto-se-necesita-para-vivir-en-bogota-en-2026-estos-serian-los-calculos-para-un-hogar-de-cuatro-personas-y-para-una-sola-persona-3534263",
    "Tipo": "Internet"
  },
  {
    "Fecha": "22/02/2026",
    "Medio": "desopinion.com",
    "Titular": "¿Cuánto se necesita para vivir en Bogotáá en 2026? Estos serán los cálculos para un hogar de cuatro personas y para una sola persona",
    "URL": "https://desopinion.com/cuanto-se-necesita-para-vivir-en-bogota-en-2026-estos-seran-los-calculos-para-un-hogar-de-cuatro-personas-y-para-una-sola-persona",
    "Tipo": "Internet"
  },
  {
    "Fecha": "23/02/2026",
    "Medio": "pulzo.com",
    "Titular": "Cuánto dinero necesita una persona para vivir en Bogotáá en 2026: un salario mínimo no le alcanza",
    "URL": "https://www.pulzo.com/economia/cuanto-necesita-para-vivir-bogota-2026-salario-minimo-ahora-no-alcanza-PP5061894",
    "Tipo": "Internet"
  },
  {
    "Fecha": "15/02/2026",
    "Medio": "desopinion.com",
    "Titular": "El sicariato como posible brazo armado de la extorsión",
    "URL": "https://desopinion.com/el-sicariato-como-posible-brazo-armado-de-la-extorsion",
    "Tipo": "Internet"
  },
  {
    "Fecha": "1/03/2026",
    "Medio": "eltiempo.com",
    "Titular": "Opinión | La democracia frente a la amenaza de la desinformación",
    "URL": "https://www.eltiempo.com/bogota/opinion-la-democracia-frente-a-la-amenaza-de-la-desinformacion-3536431",
    "Tipo": "Internet"
  },
  {
    "Fecha": "2/03/2026",
    "Medio": "eltiempo.com",
    "Titular": "Paseos millonarios: ¿qué tanto ayudan las medidas de la Alcaldía de Bogotáá?",
    "URL": "https://www.eltiempo.com/bogota/paseos-millonarios-que-tanto-ayudan-las-medidas-de-la-alcaldia-de-bogota-3536746",
    "Tipo": "Internet"
  },
  {
    "Fecha": "7/03/2026",
    "Medio": "semana.com",
    "Titular": "Pico y placa solidario en Bogotáá: el mecanismo de recaudo que no descongestiona a la ciudad",
    "URL": "https://www.semana.com/nacion/bogota/articulo/pico-y-placa-solidario-en-bogota-el-mecanismo-de-recaudo-que-no-descongestiona-a-la-ciudad/202606/",
    "Tipo": "Internet"
  },
  {
    "Fecha": "7/03/2026",
    "Medio": "Revista Semana",
    "Titular": "Pico y placa no tan solidario",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1657202065",
    "Tipo": "Prensa"
  },
  {
    "Fecha": "3/03/2026",
    "Medio": "El Tiempo",
    "Titular": "Paseos millonarios: ¿qué tanto ayudan las medidas de la Alcaldía?",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1653932992",
    "Tipo": "Prensa"
  },
  {
    "Fecha": "9/03/2026",
    "Medio": "eltiempo.com",
    "Titular": "La disyuntiva de Juan Daniel Oviedo tras erigirse como fenómeno de las consultas: ¿fórmula de Paloma Valencia o candidato a la Alcaldía de Bogotáá?",
    "URL": "https://www.eltiempo.com/politica/elecciones-colombia-2026/la-disyuntiva-de-juan-daniel-oviedo-tras-erigirse-como-fenomeno-de-las-consultas-formula-de-paloma-valencia-o-candidato-a-la-alcaldia-de-bogota-3538654",
    "Tipo": "Internet"
  },
  {
    "Fecha": "3/03/2026",
    "Medio": "Infobae",
    "Titular": "Aliste el bolsillo porque este año le saldrá más caro vivir en Bogotáá: este es el cálculo",
    "URL": "https://www.infobae.com/colombia/2026/03/03/aliste-el-bolsillo-porque-este-ano-le-saldra-mas-caro-vivir-en-bogota-este-es-el-calculo/",
    "Tipo": "Internet"
  },
  {
    "Fecha": "29/03/2026",
    "Medio": "eltiempo.com",
    "Titular": "Opinión | ¿Por qué los delincuentes perdieron el miedo a la autoridad?",
    "URL": "https://www.eltiempo.com/bogota/opinion-por-que-los-delincuentes-perdieron-el-miedo-a-la-autoridad-3543907",
    "Tipo": "Internet"
  },
  {
    "Fecha": "9/03/2026",
    "Medio": "Otros TV",
    "Titular": "(Canal El Tiempo) Análisis tras resultados de las elecciones legislativías",
    "URL": "https://a.eprensa.com/view_pdf.php?sid=23130&cid=1658325437",
    "Tipo": "TV"
  },
  {
    "Fecha": "9/03/2026",
    "Medio": "eltiempo.com",
    "Titular": "Los grandes ganadores y perdedores que dejan las elecciones a Cámara de Representantes por Bogotáá",
    "URL": "https://www.eltiempo.com/bogota/los-grandes-ganadores-y-perdedores-que-dejan-las-elecciones-a-camara-de-representantes-por-bogota-3538822",
    "Tipo": "Internet"
  },
  {
    "Fecha": "9/03/2026",
    "Medio": "eltiempo.com",
    "Titular": "Diez lecciones de los resultados electorales en Bogotáá",
    "URL": "https://www.eltiempo.com/bogota/diez-lecciones-de-los-resultados-electorales-en-bogota-3538865",
    "Tipo": "Internet"
  },
  {
    "Fecha": "9/03/2026",
    "Medio": "eltiempo.com",
    "Titular": "La disyuntiva de Juan Daniel Oviedo tras erigirse como fenómeno de las consultas: ¿fórmula de Paloma Valencia o candidato a la Alcaldía de Bogotáá?",
    "URL": "https://www.eltiempo.com/politica/elecciones-colombia-2026/la-disyuntiva-de-juan-daniel-oviedo-tras-erigirse-como-fenomeno-de-las-consultas-formula-de-paloma-valencia-o-candidato-a-la-alcaldia-de-bogota-3538654",
    "Tipo": "Internet"
  },
  {
    "Fecha": "12/03/2026",
    "Medio": "eltiempo.com",
    "Titular": "Asíí votó localidad por localidad en Bogotáá por los partidos y candidatos a la Cámara en las elecciones del domingo",
    "URL": "https://www.eltiempo.com/bogota/asi-voto-localidad-por-localidad-en-bogota-por-los-partidos-y-candidatos-a-la-camara-en-las-elecciones-del-domingo-3539698",
    "Tipo": "Internet"
  },
  {
    "Fecha": "13/03/2026",
    "Medio": "eltiempo.com",
    "Titular": "Alcalde Carlos Fernando Galán se queja de que la Policía realiza capturas, pero delincuentes quedan en libertad por…",
    "URL": "https://www.eltiempo.com/bogota/alcalde-carlos-fernando-galan-se-queja-de-que-la-policia-realiza-capturas-pero-delincuentes-quedan-en-libertad-por-decisiones-de-jueces-y-fiscales-3540077",
    "Tipo": "Internet"
  },
  {
    "Fecha": "14/03/2026",
    "Medio": "El Tiempo",
    "Titular": "Galán invitó a congresistas a tener una agenda común en la lucha contra el delito",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1662106913",
    "Tipo": "Prensa"
  },
  {
    "Fecha": "15/03/2026",
    "Medio": "eltiempo.com",
    "Titular": "Seguridad en Bogotáá: ¿faltan leyes o falta gestión?",
    "URL": "https://www.eltiempo.com/bogota/seguridad-en-bogota-faltan-leyes-o-falta-gestion-3540354",
    "Tipo": "Internet"
  },
  {
    "Fecha": "17/03/2026",
    "Medio": "Canal Caracol",
    "Titular": "Experto y académicos explican los retos y los posibles caminos para minimizar la inseguridad en Bogotáá ( Omar Oróstegui Laboratorio de Gobierno Universidad de la Sabana - Jorge Mantilla Investigador Crimen Organizado  - Eliecer Camacho Excomandante Policía de Bogotáá - Andrés Macías Investigador universidad Externado de Colombia )",
    "URL": "https://a.eprensa.com/view_pdf.php?sid=23130&cid=1664206354",
    "Tipo": "TV"
  },
  {
    "Fecha": "6/04/2026",
    "Medio": "El Tiempo",
    "Titular": "OPINION Domicilios sin control: la otra cara del ‘éxito’ de las plataformas",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1675359917",
    "Tipo": "Prensa"
  },
  {
    "Fecha": "5/04/2026",
    "Medio": "eltiempo.com",
    "Titular": "Opinión | Domicilios sin control: la otra cara del `éxito' de las plataformas",
    "URL": "https://www.eltiempo.com/bogota/opinion-domicilios-sin-control-la-otra-cara-del-exito-de-las-plataformas-3545441",
    "Tipo": "Internet"
  },
  {
    "Fecha": "12/04/2026",
    "Medio": "elnuevosiglo.com.co",
    "Titular": "Proceso de paz urbana es un peligro para la democracia : Medellín",
    "URL": "https://www.elnuevosiglo.com.co/nacion/el-proceso-de-paz-urbana-es-un-peligro-para-la-democracia-y-para-el-proceso-electoral",
    "Tipo": "Internet"
  },
  {
    "Fecha": "26/04/2026",
    "Medio": "eltiempo.com",
    "Titular": "Opinión| El nuevo pulso por el espacio público en Bogotáá",
    "URL": "https://www.eltiempo.com/bogota/opinion-el-nuevo-pulso-por-el-espacio-publico-en-bogota-3551027",
    "Tipo": "Internet"
  },
  {
    "Fecha": "11/04/2026",
    "Medio": "El Nuevo Siglo",
    "Titular": "El proceso de “paz urbana” es un “peligro para la democracia y para el proceso electoral”: Medellín",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1678881365",
    "Tipo": "Prensa"
  },
  {
    "Fecha": "20/04/2026",
    "Medio": "El Tiempo",
    "Titular": "COLUMNA DE OPINION Balaceras, atracos y sicariato",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1684026805",
    "Tipo": "Prensa"
  },
  {
    "Fecha": "17/04/2026",
    "Medio": "larepublica.co",
    "Titular": "Ciudades dentro del Valle de Aburrá tuvieron el aire más contaminado durante 2025",
    "URL": "https://www.larepublica.co/responsabilidad-social/ciudades-dentro-del-valle-de-aburra-tuvieron-el-aire-mas-contaminado-durante-2025-4373240",
    "Tipo": "Internet"
  },
  {
    "Fecha": "17/04/2026",
    "Medio": "La República",
    "Titular": "Ciudades del Valle de Aburrá tuvieron el aire más contaminado durante 2025",
    "URL": "https://p.eprensa.com/view_pdf.php?sid=23129&cid=1682506404",
    "Tipo": "Prensa"
  },
  {
    "Fecha": "15/04/2026",
    "Medio": "Canal Caracol",
    "Titular": "Ent. Carlos Fernando Galán Alcaldía de Bogotáá habla del informe del DANE en donde se dice que la pobreza multidimensional en Bogotáá cayó en un 60% en el 2025 y explica como se hizo ( Felipe Mariño Bogotáá Cómo Vamos - Ómar Oróstegui Laboratorio de Gobierno Universidad de la Sabana  )  ( Mención Capital Salud - Secretaría de Educación de Bogotáá - Secretaría de Desarrollo Económico de Bogotáá )",
    "URL": "https://a.eprensa.com/view_pdf.php?sid=23130&cid=1681386996",
    "Tipo": "TV"
  }
];

// Estado de los filtros del portafolio
let activeFilters = {
  segment: 'Todos',
  tipo: 'Todos',
  linea: 'Todas',
  status: 'Todos',
  texto: ''
};

// Opciones de filtros
const filterOptions = {
  segment: [
    'Todos',
    'Sector Público',
    'Sector Privado',
    'Transversal'
  ],
  tipo: [
    'Todos',
    'Software',
    'Dashboards',
    'Estudios & Análisis de datos',
    'Educación'
  ],
  linea: [
    'Todas',
    'Línea PitchLab',
    'Línea GovTest & Opinión',
    'Asistentes de Voz',
    'Agroindustria & Exportación',
    'Notarías & Documental',
    'Gestión Pública & Ambiental',
    'Sostenibilidad & ESG',
    'Comunidad & Admisiones',
    'Dashboards & Analítica',
    'Educación & Formación',
    'Salud & Geoanalítica'
  ],
  status: ['Todos', 'En línea', 'Activo', 'En mantenimiento']
};

// Instancias globales de Chart.js
let chartTipoInstance = null;
let chartLineaInstance = null;
let chartSegmentoInstance = null;

// --- Parsear CSV con separador ';' ---
function parseCSV(text) {
  const lines = text.split(/\r?\n/).filter(l => l.trim() !== '');
  if (!lines.length) return [];
  const headers = lines[0].split(';').map(h => h.trim());
  return lines.slice(1).map(line => {
    const cols = line.split(';');
    const obj = {};
    headers.forEach((h, i) => {
      obj[h] = (cols[i] || '').trim();
    });
    return obj;
  });
}

// --- Parsear fecha DD/MM/YYYY a objeto Date ---
function parseDate(str) {
  if (!str) return new Date(0);
  const parts = str.trim().split('/');
  if (parts.length !== 3) return new Date(0);
  const [d, m, y] = parts;
  return new Date(Number(y), Number(m) - 1, Number(d));
}

// --- Extraer dominio raíz de una URL ---
function getDomain(url) {
  try {
    const hostname = new URL(url).hostname;
    const parts = hostname.split('.');
    const ccTLDs = ['com', 'org', 'net', 'edu', 'gob', 'gov'];
    if (parts.length >= 3 && ccTLDs.includes(parts[parts.length - 2]) && parts[parts.length - 1].length === 2) {
      return parts.slice(-3).join('.');
    }
    return parts.slice(-2).join('.');
  } catch {
    return null;
  }
}

// --- Icono visual segun tipo de medio ---
function getMediaVisual(tipo, url) {
  const t = (tipo || '').trim().toLowerCase();

  if (t === 'internet') {
    const domain = getDomain(url);
    if (domain) {
      const faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
      return `<img src="${faviconUrl}" alt="${domain}" class="media-favicon"
                onload="if(this.naturalWidth<=16){this.style.display='none';this.nextElementSibling.style.display='flex';}"
                onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
              <span class="media-type-icon media-icon-prensa" style="display:none;"><i data-lucide="newspaper"></i></span>`;
    }
    return `<span class="media-type-icon media-icon-prensa"><i data-lucide="newspaper"></i></span>`;
  }

  if (t === 'prensa') return `<span class="media-type-icon media-icon-prensa"><i data-lucide="newspaper"></i></span>`;
  if (t === 'tv') return `<span class="media-type-icon media-icon-tv"><i data-lucide="tv-2"></i></span>`;
  if (t === 'radio') return `<span class="media-type-icon media-icon-radio"><i data-lucide="radio"></i></span>`;

  return `<span class="media-type-icon media-icon-prensa"><i data-lucide="newspaper"></i></span>`;
}

// --- Estado global de medios ---
let allMedios = [];
let mediosFilters = { tipo: 'Todos', anio: 'Todos', medio: '', texto: '' };

document.addEventListener('DOMContentLoaded', async () => {
  initNavigation();
  initFilters();
  renderProducts(PRODUCTS);
  renderDashboard();
  initModal();
  initSearchInput();
  lucide.createIcons();

  await loadMedios();
});

// --- Carga dinámica de Medios con fallback garantizado ---
async function loadMedios() {
  let loadedMedios = [];

  try {
    const response = await fetch('medios/medios.csv');
    if (response.ok) {
      const text = await response.text();
      loadedMedios = parseCSV(text);
    }
  } catch (e) {
    console.info('Carga de medios.csv vía fetch no disponible (modo offline o file://), usando base integrada.');
  }

  if (!loadedMedios || loadedMedios.length === 0) {
    loadedMedios = [...MEDIOS_FALLBACK];
  }

  loadedMedios.sort((a, b) => parseDate(b.Fecha) - parseDate(a.Fecha));
  allMedios = loadedMedios;
  initMediosFilters(allMedios);
  applyMediosFilters();
}

// --- Buscador de productos en vivo ---
function initSearchInput() {
  const searchInput = document.getElementById('products-search-input');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    activeFilters.texto = e.target.value.trim().toLowerCase();
    applyFilters();
  });
}

// --- Inicializar filtros de medios ---
function initMediosFilters(medios) {
  const medioSelect = document.getElementById('medios-select-medio');
  if (!medioSelect) return;
  medioSelect.innerHTML = '<option value="">Todos los medios</option>';

  const mediosUnicos = [...new Set(medios.map(m => (m.Medio || '').trim()))]
    .filter(Boolean).sort((a, b) => a.localeCompare(b, 'es'));
  mediosUnicos.forEach(m => {
    const opt = document.createElement('option');
    opt.value = m;
    opt.textContent = m;
    medioSelect.appendChild(opt);
  });
  medioSelect.addEventListener('change', () => {
    mediosFilters.medio = medioSelect.value;
    applyMediosFilters();
  });

  const tipos = ['Todos', ...new Set(medios.map(m => (m.Tipo || '').trim()).filter(Boolean))];
  const tipoContainer = document.getElementById('medios-filter-tipo');
  if (tipoContainer) {
    tipoContainer.innerHTML = '<span class="medios-filter-label">Tipo:</span>';
    tipos.forEach(tipo => {
      const pill = document.createElement('span');
      pill.className = 'filter-pill' + (tipo === 'Todos' ? ' active' : '');
      pill.textContent = tipo;
      pill.addEventListener('click', () => {
        tipoContainer.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        mediosFilters.tipo = tipo;
        applyMediosFilters();
      });
      tipoContainer.appendChild(pill);
    });
  }

  const anios = ['Todos', ...[...new Set(
    medios.map(m => (m.Fecha || '').trim().split('/')[2]).filter(Boolean)
  )].sort((a, b) => b - a)];
  const anioContainer = document.getElementById('medios-filter-anio');
  if (anioContainer) {
    anioContainer.innerHTML = '<span class="medios-filter-label">Año:</span>';
    anios.forEach(anio => {
      const pill = document.createElement('span');
      pill.className = 'filter-pill' + (anio === 'Todos' ? ' active' : '');
      pill.textContent = anio;
      pill.addEventListener('click', () => {
        anioContainer.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        mediosFilters.anio = anio;
        applyMediosFilters();
      });
      anioContainer.appendChild(pill);
    });
  }

  const searchInput = document.getElementById('medios-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      mediosFilters.texto = searchInput.value.trim().toLowerCase();
      applyMediosFilters();
    });
  }
}

function applyMediosFilters() {
  const filtered = allMedios.filter(m => {
    const tipo = (m.Tipo || '').trim();
    const medio = (m.Medio || '').trim();
    const titular = (m.Titular || '').toLowerCase();
    const anio = (m.Fecha || '').trim().split('/')[2] || '';

    const matchTipo = mediosFilters.tipo === 'Todos' || tipo.toLowerCase() === mediosFilters.tipo.toLowerCase();
    const matchAnio = mediosFilters.anio === 'Todos' || anio === mediosFilters.anio;
    const matchMedio = !mediosFilters.medio || medio.toLowerCase() === mediosFilters.medio.toLowerCase();
    const matchTexto = !mediosFilters.texto || titular.includes(mediosFilters.texto);

    return matchTipo && matchAnio && matchMedio && matchTexto;
  });

  renderMedios(filtered);

  const counter = document.getElementById('medios-counter');
  if (counter) {
    const total = allMedios.length;
    const shown = filtered.length;
    counter.textContent = shown === total
      ? 'Mostrando ' + total + ' apariciones'
      : 'Mostrando ' + shown + ' de ' + total + ' apariciones';
  }
}

// --- 1. Navegación ---
function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.page-section');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navLinksContainer = document.querySelector('.nav-links');
  const ctaHero = document.getElementById('cta-hero');

  function navigateTo(targetId) {
    navLinks.forEach(l => l.classList.remove('active'));
    const activeLink = document.querySelector(`.nav-link[data-target="${targetId}"]`);
    if (activeLink) activeLink.classList.add('active');

    sections.forEach(s => s.classList.remove('active'));
    const targetSection = document.getElementById(targetId);
    if (targetSection) targetSection.classList.add('active');

    if (navLinksContainer) navLinksContainer.classList.remove('open');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const target = e.currentTarget.dataset.target;
      if (target) navigateTo(target);
    });
  });

  if (ctaHero) {
    ctaHero.addEventListener('click', () => {
      navigateTo('seccion-que-hacemos');
    });
  }

  if (hamburgerBtn && navLinksContainer) {
    hamburgerBtn.addEventListener('click', () => {
      navLinksContainer.classList.toggle('open');
    });
  }
}

// --- 2. Renderizado de Productos / Experiencias ---
function renderProducts(productsToRender) {
  const grid = document.getElementById('products-grid');
  if (!grid) return;
  grid.innerHTML = '';

  if (productsToRender.length === 0) {
    grid.innerHTML = `
      <div class="empty-results-state">
        <i data-lucide="search-x" class="empty-icon"></i>
        <h3 class="empty-title">No se encontraron experiencias</h3>
        <p class="empty-desc">No hay experiencias que coincidan con los criterios seleccionados. Prueba modificando o restableciendo los filtros.</p>
        <button class="btn btn-primary" onclick="resetAllFilters()"><i data-lucide="rotate-ccw"></i> Restablecer filtros</button>
      </div>
    `;
    lucide.createIcons();
    const counterEl = document.getElementById('results-counter');
    if (counterEl) counterEl.innerText = `Mostrando 0 de ${PRODUCTS.length} experiencias`;
    return;
  }

  productsToRender.forEach(product => {
    const isEducacion = product.tipo === 'Educación';

    let statusClass = 'status-gray';
    const st = product.status ? product.status.toLowerCase().trim() : '';
    if (st === 'en línea') statusClass = 'status-online';
    if (st === 'en mantenimiento') statusClass = 'status-down';
    if (st === 'activo') statusClass = 'status-active';

    const typeBadgeText = product.tipo || 'Software';
    const lineaBadgeText = product.linea || '';

    const tipoClass = {
      'Software': 'type-badge-software',
      'Dashboards': 'type-badge-dashboards',
      'Estudios & Análisis de datos': 'type-badge-estudios',
      'Educación': 'type-badge-educacion'
    }[product.tipo] || 'type-badge-software';

    let buttonsHtml = '';

    if (!isEducacion) {
      if (product.name.includes('Clínica') || product.name.includes('Notaria') || product.name.includes('Notaría')) {
        const action = product.appUrl
          ? `onclick="window.open('${product.appUrl}', '_blank')"`
          : (product.pptUrl ? `onclick="window.open('${product.pptUrl}', '_blank')"` : `onclick="openModal()"`);
        buttonsHtml += `<button class="btn btn-primary" ${action}><i data-lucide="message-square"></i> Contáctanos</button>`;
      } else if (product.demoMode === 'ppt' && product.pptUrl) {
        buttonsHtml += `<a class="btn btn-primary" href="${product.pptUrl}" target="_blank" rel="noopener noreferrer"><i data-lucide="presentation"></i> Ver presentación</a>`;
      } else {
        const isTableau = product.appUrl && product.appUrl.includes('tableau.com');
        const btnLabel = isTableau ? 'Ver Dashboard' : 'Ver App';
        const btnIcon = isTableau ? 'bar-chart-2' : 'external-link';
        const appDisabled = !product.appUrl ? 'disabled' : '';
        const appTitle = !product.appUrl
          ? 'Despliegue interno o en mantenimiento'
          : (product.status.toLowerCase() === 'en mantenimiento' ? 'Esta aplicación puede estar temporalmente en mantenimiento' : '');

        const btnContent = `<button class="btn btn-primary" ${appDisabled} ${product.appUrl ? `onclick="window.open('${product.appUrl}', '_blank')"` : ''}><i data-lucide="${btnIcon}"></i> ${btnLabel}</button>`;
        buttonsHtml += appTitle
          ? `<div class="tooltip-wrapper" title="${appTitle}">${btnContent}</div>`
          : btnContent;
      }

      if (product.githubUrl) {
        const iconGithub = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`;
        buttonsHtml += `<button class="btn btn-outline btn-github" onclick="window.open('${product.githubUrl}', '_blank')">${iconGithub} Código</button>`;
      }

      if (product.videoUrl) {
        buttonsHtml += `<button class="btn btn-outline" onclick="window.open('${product.videoUrl}', '_blank')"><i data-lucide="play-circle"></i> Ver demo</button>`;
      }
    } else if (product.appUrl) {
      buttonsHtml += `<a class="btn btn-primary" href="${product.appUrl}" target="_blank" rel="noopener noreferrer"><i data-lucide="external-link"></i> Ver programa</a>`;
    }

    // Chiclets de tags (incluyendo chiclet especial 'Listo para la venta')
    const rawTags = [...(product.tags || [])];
    if (product.readyForSale && !rawTags.includes('Listo para la venta')) {
      rawTags.push('Listo para la venta');
    }

    const tagsHtml = rawTags.map(t => {
      const isReadyTag = t.toLowerCase().includes('listo para');
      const tagClass = isReadyTag ? 'chiclet-tag chiclet-ready-tag' : 'chiclet-tag';
      return `<span class="${tagClass}" onclick="filterByTag('${t.replace(/'/g, "\\'")}')">${t}</span>`;
    }).join('');

    const card = document.createElement('div');
    card.className = 'product-card module-card';
    const logoSrc = product.logo || 'assets/Govlab.png';

    const hasDesc = product.description && product.description.trim().length > 0;
    const descToggle = hasDesc ? `
      <button class="desc-toggle" onclick="(function(btn){
          var desc = btn.previousElementSibling;
          var isOpen = desc.classList.toggle('expanded');
          btn.classList.toggle('open', isOpen);
          btn.querySelector('span').textContent = isOpen ? 'Ver menos' : 'Ver más';
      })(this)" aria-label="Expandir descripción">
          <span>Ver más</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
      </button>` : '';

    card.innerHTML = `
      <div class="card-header">
        <img src="${logoSrc}" alt="Logo ${product.name}" class="card-logo"
             onerror="this.onerror=null;this.src='assets/Govlab.png'">
        <span class="status-badge ${statusClass}">${product.status}</span>
      </div>
      <div class="card-meta-line">
        <span class="type-badge ${tipoClass}">${typeBadgeText}</span>
        ${lineaBadgeText ? `<span class="linea-badge" onclick="filterByLinea('${lineaBadgeText.replace(/'/g, "\\'")}')">${lineaBadgeText}</span>` : ''}
      </div>
      <h3 class="product-name">${product.name}</h3>
      ${product.slogan ? `<p class="product-slogan">${product.slogan}</p>` : ''}
      <p class="product-desc">${product.description || 'Experiencia de desarrollo tecnológico del GovLab Universidad de La Sabana.'}</p>
      ${descToggle}
      ${tagsHtml ? `<div class="product-tags">${tagsHtml}</div>` : ''}
      <div class="card-actions">
        ${buttonsHtml}
      </div>
    `;
    grid.appendChild(card);
  });

  const counterEl = document.getElementById('results-counter');
  if (counterEl) {
    counterEl.innerText = `Mostrando ${productsToRender.length} de ${PRODUCTS.length} experiencias`;
  }

  lucide.createIcons();
  setGithubVisibility(githubVisible);
}

function filterByTag(tag) {
  const searchInput = document.getElementById('products-search-input');
  if (searchInput) {
    searchInput.value = tag;
    activeFilters.texto = tag.toLowerCase();
    applyFilters();
    document.getElementById('seccion-que-hacemos').scrollIntoView({ behavior: 'smooth' });
  }
}

function filterByLinea(linea) {
  activeFilters.linea = linea;
  const container = document.getElementById('filter-linea');
  if (container) {
    container.querySelectorAll('.filter-pill').forEach(p => {
      if (p.innerText.toLowerCase() === linea.toLowerCase()) {
        p.classList.add('active');
      } else {
        p.classList.remove('active');
      }
    });
  }
  applyFilters();
  document.getElementById('seccion-que-hacemos').scrollIntoView({ behavior: 'smooth' });
}

function resetAllFilters() {
  activeFilters = {
    segment: 'Todos',
    tipo: 'Todos',
    linea: 'Todas',
    status: 'Todos',
    texto: ''
  };

  const searchInput = document.getElementById('products-search-input');
  if (searchInput) searchInput.value = '';

  ['filter-segment', 'filter-tipo', 'filter-linea', 'filter-status'].forEach(id => {
    const container = document.getElementById(id);
    if (container) {
      container.querySelectorAll('.filter-pill').forEach((p, idx) => {
        if (idx === 0) p.classList.add('active');
        else p.classList.remove('active');
      });
    }
  });

  applyFilters();
}

// --- 2.5 Renderizado de Medios ---
function renderMedios(mediosToRender) {
  const grid = document.getElementById('medios-grid');
  if (!grid) return;
  grid.innerHTML = '';

  mediosToRender.forEach(media => {
    const fecha = (media.Fecha || media.fecha || '').trim();
    const medio = (media.Medio || media.medio || '').trim();
    const titular = (media.Titular || media.titular || '').trim();
    const url = (media.URL || media.url || '').trim();
    const tipo = (media.Tipo || media.tipo || '').trim();

    const card = document.createElement('div');
    card.className = 'media-card';
    const visualContent = getMediaVisual(tipo, url);

    const btnHtml = url
      ? `<button class="btn btn-outline" onclick="window.open('${url}', '_blank')"><i data-lucide="external-link"></i> Leer artículo</button>`
      : `<button class="btn btn-outline" disabled>Sin enlace</button>`;

    const tipoBadgeClass = {
      'internet': 'tipo-internet',
      'prensa': 'tipo-prensa',
      'tv': 'tipo-tv',
      'radio': 'tipo-radio'
    }[tipo.toLowerCase()] || 'tipo-prensa';

    card.innerHTML = `
      <div class="media-visual">
        ${visualContent}
      </div>
      <div class="media-content">
        <div class="media-meta">
          <span class="media-tipo-badge ${tipoBadgeClass}">${tipo}</span>
          <span class="media-date"><i data-lucide="calendar" style="width:12px;height:12px;display:inline-block;margin-right:4px;"></i>${fecha}</span>
        </div>
        <div class="media-source">${medio}</div>
        <h3 class="media-title">${titular}</h3>
        <div class="card-actions">
          ${btnHtml}
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  lucide.createIcons();
}

// --- 3. Filtros del Portafolio ---
function initFilters() {
  renderFilterGroup('filter-segment', filterOptions.segment, 'segment');
  renderFilterGroup('filter-tipo', filterOptions.tipo, 'tipo');
  renderFilterGroup('filter-linea', filterOptions.linea, 'linea');
  renderFilterGroup('filter-status', filterOptions.status, 'status');
}

function renderFilterGroup(containerId, options, filterKey) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';

  const labelSpan = document.createElement('span');
  labelSpan.className = 'filter-label';
  const labelsMap = {
    'segment': 'Segmento:',
    'tipo': 'Tipo:',
    'linea': 'Línea / Categoría:',
    'status': 'Estado:'
  };
  labelSpan.innerText = labelsMap[filterKey] || 'Filtro:';
  container.appendChild(labelSpan);

  options.forEach(option => {
    const pill = document.createElement('span');
    const isActive = (activeFilters[filterKey] || '').toLowerCase() === option.toLowerCase();
    pill.className = `filter-pill ${isActive ? 'active' : ''}`;
    pill.innerText = option;

    pill.addEventListener('click', () => {
      container.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeFilters[filterKey] = option;
      applyFilters();
    });

    container.appendChild(pill);
  });
}

function applyFilters() {
  const filtered = PRODUCTS.filter(product => {
    const matchSegment = activeFilters.segment === 'Todos' || product.segment.toLowerCase() === activeFilters.segment.toLowerCase();
    const matchTipo = activeFilters.tipo === 'Todos' || (product.tipo || '').toLowerCase() === activeFilters.tipo.toLowerCase();
    const matchLinea = activeFilters.linea === 'Todas' || (product.linea || '').toLowerCase() === activeFilters.linea.toLowerCase();
    const matchStatus = activeFilters.status === 'Todos' || product.status.toLowerCase() === activeFilters.status.toLowerCase();

    let matchTexto = true;
    if (activeFilters.texto) {
      const q = activeFilters.texto;
      const inName = (product.name || '').toLowerCase().includes(q);
      const inSlogan = (product.slogan || '').toLowerCase().includes(q);
      const inDesc = (product.description || '').toLowerCase().includes(q);
      const inLinea = (product.linea || '').toLowerCase().includes(q);
      const inTags = (product.tags || []).some(t => t.toLowerCase().includes(q));
      matchTexto = inName || inSlogan || inDesc || inLinea || inTags;
    }

    return matchSegment && matchTipo && matchLinea && matchStatus && matchTexto;
  });

  renderProducts(filtered);
}

// --- 4. Dashboard Visual con Gráficas Reales (Chart.js) ---
function renderDashboard() {
  const dashboardContainer = document.getElementById('experiencias-dashboard');
  if (!dashboardContainer) return;

  const total = PRODUCTS.length;
  const countSoftware = PRODUCTS.filter(p => p.tipo === 'Software').length;
  const countDashboards = PRODUCTS.filter(p => p.tipo === 'Dashboards').length;
  const countEstudios = PRODUCTS.filter(p => p.tipo === 'Estudios & Análisis de datos').length;
  const countEducacion = PRODUCTS.filter(p => p.tipo === 'Educación').length;
  const countReadyForSale = PRODUCTS.filter(p => p.readyForSale).length;

  const countPublico = PRODUCTS.filter(p => p.segment === 'Sector Público').length;
  const countPrivado = PRODUCTS.filter(p => p.segment === 'Sector Privado').length;
  const countTransversal = PRODUCTS.filter(p => p.segment === 'Transversal').length;

  const countEnLinea = PRODUCTS.filter(p => p.status.toLowerCase() === 'en línea').length;
  const countActivo = PRODUCTS.filter(p => p.status.toLowerCase() === 'activo').length;
  const countMantenimiento = PRODUCTS.filter(p => p.status.toLowerCase() === 'en mantenimiento').length;

  const lineasCount = {};
  PRODUCTS.forEach(p => {
    if (p.linea) {
      lineasCount[p.linea] = (lineasCount[p.linea] || 0) + 1;
    }
  });

  dashboardContainer.innerHTML = `
    <div class="dashboard-header-block">
      <div class="dashboard-title-wrap">
        <span class="dashboard-eyebrow">Panel Analítico</span>
        <h2 class="dashboard-title">Distribución y Métricas del Portafolio</h2>
        <p class="dashboard-subtitle">Visualización estadística y composición interactiva de las ${total} experiencias del GovLab.</p>
      </div>
      <div class="dashboard-actions-group">
        <button class="chiclet-btn" onclick="resetAllFilters()">
          <i data-lucide="rotate-ccw"></i> Restablecer vista
        </button>
      </div>
    </div>

    <!-- KPI Summary Grid -->
    <div class="dashboard-kpis-grid">
      <div class="kpi-card" onclick="quickFilter('tipo', 'Todos')">
        <div class="kpi-icon-wrap kpi-icon-blue"><i data-lucide="layers"></i></div>
        <div class="kpi-data">
          <span class="kpi-number">${total}</span>
          <span class="kpi-label">Experiencias Totales</span>
        </div>
      </div>

      <div class="kpi-card" onclick="quickFilter('tipo', 'Software')">
        <div class="kpi-icon-wrap kpi-icon-green"><i data-lucide="code-2"></i></div>
        <div class="kpi-data">
          <span class="kpi-number">${countSoftware}</span>
          <span class="kpi-label">Software & Plataformas</span>
          <span class="kpi-subtext">${countReadyForSale} Listos para la venta</span>
        </div>
      </div>

      <div class="kpi-card" onclick="quickFilter('tipo', 'Dashboards')">
        <div class="kpi-icon-wrap kpi-icon-purple"><i data-lucide="bar-chart-3"></i></div>
        <div class="kpi-data">
          <span class="kpi-number">${countDashboards}</span>
          <span class="kpi-label">Dashboards & Analítica</span>
          <span class="kpi-subtext">Tableau & Web Apps</span>
        </div>
      </div>

      <div class="kpi-card" onclick="quickFilter('tipo', 'Estudios & Análisis de datos')">
        <div class="kpi-icon-wrap kpi-icon-orange"><i data-lucide="brain"></i></div>
        <div class="kpi-data">
          <span class="kpi-number">${countEstudios}</span>
          <span class="kpi-label">Estudios & Modelos</span>
          <span class="kpi-subtext">ML, ELA-NOM & OSZ</span>
        </div>
      </div>

      <div class="kpi-card" onclick="quickFilter('tipo', 'Educación')">
        <div class="kpi-icon-wrap kpi-icon-teal"><i data-lucide="graduation-cap"></i></div>
        <div class="kpi-data">
          <span class="kpi-number">${countEducacion}</span>
          <span class="kpi-label">Educación & Formación</span>
          <span class="kpi-subtext">Doctorado, Maestría, Bootcamps</span>
        </div>
      </div>
    </div>

    <!-- Gráficas de Análisis -->
    <div class="dashboard-charts-row">
      <!-- Gráfico 1: Tipo de Experiencia -->
      <div class="chart-panel-card">
        <div class="chart-panel-header">
          <div class="chart-title-box">
            <h3><i data-lucide="pie-chart"></i> Composición por Tipo</h3>
            <span class="chart-subtitle">Distribución porcentual de las experiencias</span>
          </div>
        </div>
        <div class="chart-canvas-wrapper doughnut-wrapper">
          <canvas id="chart-tipo-canvas"></canvas>
        </div>
      </div>

      <!-- Gráfico 2: Segmento y Estado -->
      <div class="chart-panel-card">
        <div class="chart-panel-header">
          <div class="chart-title-box">
            <h3><i data-lucide="bar-chart-2"></i> Segmento de Impacto</h3>
            <span class="chart-subtitle">Sector Público, Sector Privado y Transversal</span>
          </div>
        </div>
        <div class="chart-canvas-wrapper">
          <canvas id="chart-segmento-canvas"></canvas>
        </div>
      </div>
    </div>

    <!-- Gráfico 3: Líneas Estratégicas y Familias -->
    <div class="chart-panel-card full-width-chart">
      <div class="chart-panel-header">
        <div class="chart-title-box">
          <h3><i data-lucide="git-branch"></i> Experiencias por Línea Estratégica / Categoría</h3>
          <span class="chart-subtitle">Haz clic en cualquier barra o chiclet para explorar las experiencias</span>
        </div>
      </div>
      <div class="chart-canvas-wrapper horizontal-bar-wrapper">
        <canvas id="chart-linea-canvas"></canvas>
      </div>

      <!-- Chiclets de acceso rápido a Líneas -->
      <div class="lineas-chiclets-container">
        ${Object.entries(lineasCount).sort((a, b) => b[1] - a[1]).map(([linea, count]) => {
          return `
            <button class="chiclet-linea-pill" onclick="quickFilter('linea', '${linea.replace(/'/g, "\\'")}')">
              <span class="pill-name">${linea}</span>
              <span class="pill-badge">${count}</span>
            </button>
          `;
        }).join('')}
      </div>
    </div>
  `;

  lucide.createIcons();

  setTimeout(() => {
    initDashboardCharts(countSoftware, countDashboards, countEstudios, countEducacion, countPublico, countPrivado, countTransversal, countEnLinea, countActivo, countMantenimiento, lineasCount);
  }, 100);
}

function initDashboardCharts(soft, dash, est, edu, pub, priv, trans, online, active, maint, lineasMap) {
  if (typeof Chart === 'undefined') {
    console.warn('Chart.js no está cargado.');
    return;
  }

  // 1. Gráfico de Dona: Tipo
  const ctxTipo = document.getElementById('chart-tipo-canvas');
  if (ctxTipo) {
    if (chartTipoInstance) chartTipoInstance.destroy();
    chartTipoInstance = new Chart(ctxTipo, {
      type: 'doughnut',
      data: {
        labels: ['Software & Apps', 'Dashboards', 'Estudios & Modelos', 'Educación'],
        datasets: [{
          data: [soft, dash, est, edu],
          backgroundColor: ['#00135B', '#00387D', '#FB6F1A', '#0D9488'],
          borderColor: '#ffffff',
          borderWidth: 3,
          hoverOffset: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              font: { family: 'Libre Franklin', size: 12, weight: 600 },
              color: '#374151',
              padding: 16,
              usePointStyle: true,
              pointStyle: 'circle'
            }
          },
          tooltip: {
            backgroundColor: '#00135B',
            padding: 12,
            cornerRadius: 8,
            titleFont: { family: 'Libre Franklin', size: 13, weight: 700 },
            bodyFont: { family: 'Libre Franklin', size: 12 },
            callbacks: {
              label: function(ctx) {
                const total = soft + dash + est + edu;
                const val = ctx.raw;
                const pct = Math.round((val / total) * 100);
                return ` ${ctx.label}: ${val} experiencias (${pct}%)`;
              }
            }
          }
        },
        onClick: (event, elements) => {
          if (elements.length > 0) {
            const index = elements[0].index;
            const tipos = ['Software', 'Dashboards', 'Estudios & Análisis de datos', 'Educación'];
            quickFilter('tipo', tipos[index]);
          }
        }
      }
    });
  }

  // 2. Gráfico de Barras: Segmentos
  const ctxSegmento = document.getElementById('chart-segmento-canvas');
  if (ctxSegmento) {
    if (chartSegmentoInstance) chartSegmentoInstance.destroy();
    chartSegmentoInstance = new Chart(ctxSegmento, {
      type: 'bar',
      data: {
        labels: ['Sector Público', 'Sector Privado', 'Transversal'],
        datasets: [{
          label: 'Experiencias',
          data: [pub, priv, trans],
          backgroundColor: ['#00135B', '#2B8D04', '#93AAC9'],
          borderRadius: 8,
          barThickness: 36
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            grid: { color: '#E2E8F0', drawBorder: false },
            ticks: { font: { family: 'Libre Franklin', size: 11 }, color: '#64748B', precision: 0 }
          },
          x: {
            grid: { display: false },
            ticks: { font: { family: 'Libre Franklin', size: 12, weight: 600 }, color: '#374151' }
          }
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#00135B',
            padding: 12,
            cornerRadius: 8,
            titleFont: { family: 'Libre Franklin', size: 13, weight: 700 },
            bodyFont: { family: 'Libre Franklin', size: 12 }
          }
        },
        onClick: (event, elements) => {
          if (elements.length > 0) {
            const index = elements[0].index;
            const segs = ['Sector Público', 'Sector Privado', 'Transversal'];
            quickFilter('segment', segs[index]);
          }
        }
      }
    });
  }

  // 3. Gráfico Horizontal: Líneas Estratégicas
  const ctxLinea = document.getElementById('chart-linea-canvas');
  if (ctxLinea) {
    if (chartLineaInstance) chartLineaInstance.destroy();
    const sortedLineas = Object.entries(lineasMap).sort((a, b) => b[1] - a[1]);
    const labels = sortedLineas.map(item => item[0]);
    const counts = sortedLineas.map(item => item[1]);

    chartLineaInstance = new Chart(ctxLinea, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Cantidad de Experiencias',
          data: counts,
          backgroundColor: '#00387D',
          hoverBackgroundColor: '#00135B',
          borderRadius: 6,
          barThickness: 20
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            beginAtZero: true,
            grid: { color: '#E2E8F0', drawBorder: false },
            ticks: { font: { family: 'Libre Franklin', size: 11 }, color: '#64748B', precision: 0 }
          },
          y: {
            grid: { display: false },
            ticks: { font: { family: 'Libre Franklin', size: 11, weight: 600 }, color: '#374151' }
          }
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#00135B',
            padding: 12,
            cornerRadius: 8,
            titleFont: { family: 'Libre Franklin', size: 13, weight: 700 },
            bodyFont: { family: 'Libre Franklin', size: 12 }
          }
        },
        onClick: (event, elements) => {
          if (elements.length > 0) {
            const index = elements[0].index;
            quickFilter('linea', labels[index]);
          }
        }
      }
    });
  }
}

function quickFilter(filterKey, value) {
  activeFilters[filterKey] = value;

  const idMap = {
    'segment': 'filter-segment',
    'tipo': 'filter-tipo',
    'linea': 'filter-linea',
    'status': 'filter-status'
  };

  const containerId = idMap[filterKey];
  if (containerId) {
    const container = document.getElementById(containerId);
    if (container) {
      container.querySelectorAll('.filter-pill').forEach(p => {
        if (p.innerText.toLowerCase() === value.toLowerCase()) {
          p.classList.add('active');
        } else {
          p.classList.remove('active');
        }
      });
    }
  }

  applyFilters();

  const section = document.getElementById('seccion-que-hacemos');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

function initModal() {
  const modal = document.getElementById('modal-video');
  if (!modal) return;
  const closeBtn = modal.querySelector('.modal-close');
  const overlay = modal.querySelector('.modal-overlay');

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (overlay) overlay.addEventListener('click', closeModal);
}

function openModal() {
  const modal = document.getElementById('modal-video');
  if (!modal) return;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('modal-video');
  if (!modal) return;
  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

let githubVisible = false;

function setGithubVisibility(visible) {
  githubVisible = visible;
  document.querySelectorAll('.btn-github').forEach(btn => {
    btn.style.display = visible ? '' : 'none';
  });
}

document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.key === 'm') {
    e.preventDefault();
    setGithubVisibility(!githubVisible);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => setGithubVisibility(false), 300);
});
