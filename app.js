// app.js - GovLab Portafolio
const PRODUCTS = [
  {
    "segment": "Sector Público",
    "tipo": "Software",
    "linea": "Línea PitchLab",
    "tags": [
      "Gobierno",
      "Política",
      "IA Generativa",
      "Claude",
      "NLP",
      "Análisis de Discurso",
      "Listo para propuesta"
    ],
    "readyForSale": true,
    "name": "PitchLab360",
    "slogan": "Analiza el discurso, mejora el mensaje",
    "description": "Análisis de discurso político con Claude (Anthropic). Perfil comunicativo, análisis emocional, stakeholders, encuadres narrativos y potencial digital. Probado con candidatos presidenciales.",
    "status": "En línea",
    "demoMode": "mostrar",
    "appUrl": "https://pitchlab360-production.up.railway.app/",
    "githubUrl": "https://github.com/Juansotag/PitchLab360",
    "logo": "assets/projects/pitchlab360.jpg",
    "videoUrl": "https://drive.google.com/file/d/1bYLxn5TCm_Hwq6DG7-u7UYui5N5szYUm/view?usp=drive_link",
    "pptUrl": ""
  },
  {
    "segment": "Sector Público",
    "tipo": "Software",
    "linea": "Línea PitchLab",
    "tags": [
      "Medios",
      "Gobierno",
      "Extensión Chrome",
      "GPT-4o",
      "Fact-checking",
      "Listo para propuesta"
    ],
    "readyForSale": true,
    "name": "Polycheck",
    "slogan": "Verifica en tiempo real, no después",
    "description": "Extensión de Chrome para fact-checking en tiempo real sobre videos de YouTube y directos. Integración GPT-4o + Gemini + Google Search para análisis forense del discurso.",
    "status": "En línea",
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
    "linea": "Línea PitchLab",
    "tags": [
      "Salud",
      "Farma",
      "IA Conversacional",
      "Regulación",
      "INVIMA",
      "Listo para propuesta"
    ],
    "readyForSale": true,
    "name": "PitchLab Med",
    "slogan": "Practica tu pitch médico con estándares INVIMA",
    "description": "Plataforma para la práctica y evaluación de pitch médicos con medidas de rigurosidad INVIMA. Entrenamiento conversacional para profesionales e industria farmacéutica.",
    "status": "En línea",
    "demoMode": "mostrar",
    "appUrl": "https://pitchlab-med.up.railway.app/",
    "githubUrl": "https://github.com/Juansotag/PitchLab360-comercial",
    "logo": "assets/projects/pitchlab360.jpg",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector Privado",
    "tipo": "Software",
    "linea": "Línea PitchLab",
    "tags": [
      "Empresa",
      "Avatar en Vivo",
      "Voz en Tiempo Real",
      "LiveKit",
      "Negociación",
      "Listo para propuesta"
    ],
    "readyForSale": true,
    "name": "PitchLab Entrenamiento",
    "slogan": "Entrena tu discurso con un avatar interactivo",
    "description": "Avatar interactivo en tiempo real para entrenamiento en ventas y negociación corporativa. Análisis automático de fluidez, muletillas, persuasión y lenguaje no verbal.",
    "status": "En línea",
    "demoMode": "mostrar",
    "appUrl": "https://avatarentrenamiento.up.railway.app/",
    "githubUrl": "https://github.com/Juansotag/PitchLab_LiveKit",
    "logo": "assets/projects/pitchlab360.jpg",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector Público",
    "tipo": "Software",
    "linea": "Línea GovTest & Opinión",
    "tags": [
      "Política",
      "Gobierno",
      "Web App",
      "Supabase",
      "Elecciones 2026",
      "Listo para propuesta"
    ],
    "readyForSale": true,
    "name": "GovTest",
    "slogan": "Descubre tu afinidad política con datos reales",
    "description": "Test de afinidad política para las elecciones colombianas de 2026. Comparación de posturas ciudadanas con programas de gobierno y declaraciones de candidatos.",
    "status": "En línea",
    "demoMode": "mostrar",
    "appUrl": "https://convergencia-electoral.up.railway.app/",
    "githubUrl": "https://github.com/Juansotag/GovTest",
    "logo": "assets/projects/govtest.jpg",
    "videoUrl": "https://drive.google.com/file/d/1Xl2Nlq7l44o50H15gNlBqL4894xG960X/view?usp=drive_link",
    "pptUrl": ""
  },
  {
    "segment": "Sector Público",
    "tipo": "Software",
    "linea": "Línea GovTest & Opinión",
    "tags": [
      "Política",
      "Gobierno",
      "Supabase",
      "React",
      "Test Ideológico",
      "Listo para propuesta"
    ],
    "readyForSale": true,
    "name": "Test 9 Ejes",
    "slogan": "Mapea tu pensamiento político en 9 dimensiones",
    "description": "Evaluación ideológica multidimensional basada en el modelo de 9 ejes políticos. Visualización interactiva del posicionamiento frente a diferentes corrientes de pensamiento.",
    "status": "En línea",
    "demoMode": "mostrar",
    "appUrl": "https://test9ejes.up.railway.app/",
    "githubUrl": "https://github.com/Juansotag/9-Axes-Test",
    "logo": "assets/projects/test9ejes.jpg",
    "videoUrl": "https://drive.google.com/file/d/1gI264fE0jHk0H4T6d-K10nZ9F0h0y-G1/view?usp=drive_link",
    "pptUrl": ""
  },
  {
    "segment": "Sector Público",
    "tipo": "Software",
    "linea": "Línea GovTest & Opinión",
    "tags": [
      "Política",
      "Gobierno",
      "Democracia",
      "React",
      "Supabase",
      "Listo para propuesta"
    ],
    "readyForSale": true,
    "name": "Test 9 Ejes Colombia",
    "slogan": "El test de 9 ejes adaptado a la realidad colombiana",
    "description": "Versión contextualizada del test de 9 ejes para el escenario político colombiano. Preguntas sobre coyuntura nacional, paz, economía, medio ambiente y modelo de Estado.",
    "status": "En línea",
    "demoMode": "mostrar",
    "appUrl": "https://9-ejes-colombia-production.up.railway.app/",
    "githubUrl": "https://github.com/Juansotag/9-Ejes-Colombia",
    "logo": "assets/projects/test9ejes.jpg",
    "videoUrl": "https://drive.google.com/file/d/144V973Zp4z7F1wM69V-qR4yQ2vM2y2g3/view?usp=drive_link",
    "pptUrl": ""
  },
  {
    "segment": "Sector Público",
    "tipo": "Software",
    "linea": "Asistentes de Voz",
    "tags": [
      "Gobierno",
      "Ciudad",
      "Asistente de Voz",
      "LiveKit",
      "OpenAI Realtime"
    ],
    "readyForSale": false,
    "name": "AlcaldesaIA",
    "slogan": "Habla con la alcaldía, en tiempo real",
    "description": "Asistente de voz conversacional para la Alcaldía de Cajicá. Permite a los ciudadanos consultar trámites, servicios y estado de solicitudes hablando directamente por voz.",
    "status": "En línea",
    "demoMode": "mostrar",
    "appUrl": "https://asistente-virtual-cajica.up.railway.app/",
    "githubUrl": "https://github.com/Juansotag/AlcaldesaIA",
    "logo": "assets/projects/alcaldesa.png",
    "videoUrl": "https://drive.google.com/file/d/1Xl2Nlq7l44o50H15gNlBqL4894xG960X/view?usp=drive_link",
    "pptUrl": ""
  },
  {
    "segment": "Sector Público",
    "tipo": "Software",
    "linea": "Asistentes de Voz",
    "tags": [
      "Gobierno",
      "Región",
      "Asistente de Voz",
      "LiveKit",
      "PQRS",
      "Listo para propuesta"
    ],
    "readyForSale": true,
    "name": "Gober Santander",
    "slogan": "Atención ciudadana inteligente para Santander",
    "description": "Agente de voz para la Gobernación de Santander. Recepción y radicación de PQRS, orientación sobre oferta institucional y seguimiento de trámites departamentales.",
    "status": "En mantenimiento",
    "demoMode": "mostrar",
    "appUrl": "https://gober-santander-production.up.railway.app/",
    "githubUrl": "https://github.com/Juansotag/Gober-Santander",
    "logo": "assets/projects/gober.png",
    "videoUrl": "https://drive.google.com/file/d/1n23w0-wXo7R-M7oE3r2z4k4v5X3t5Y5Z/view?usp=drive_link",
    "pptUrl": ""
  },
  {
    "segment": "Sector Público",
    "tipo": "Software",
    "linea": "Asistentes de Voz",
    "tags": [
      "Gobierno",
      "Tecnología",
      "Asistente de Voz",
      "LiveKit",
      "Chatbot"
    ],
    "readyForSale": false,
    "name": "Govi",
    "slogan": "El asistente inteligente del GovLab",
    "description": "Asistente virtual conversacional del GovLab. Guía a visitantes por el portafolio de proyectos, líneas de investigación, capacidades técnicas y opciones de colaboración.",
    "status": "En mantenimiento",
    "demoMode": "mostrar",
    "appUrl": "https://govi2.up.railway.app/",
    "githubUrl": "https://github.com/Juansotag/Govi",
    "logo": "assets/Govlab.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector Privado",
    "tipo": "Software",
    "linea": "Asistentes de Voz",
    "tags": [
      "Tecnología",
      "Telecomunicaciones",
      "Next.js",
      "LiveKit",
      "Silero VAD",
      "Listo para propuesta"
    ],
    "readyForSale": true,
    "name": "ConvergenceLab",
    "slogan": "La frontera de la interacción por voz con IA",
    "description": "Plataforma de experimentación e investigación en tecnologías de voz en tiempo real. Integración de modelos de latencia ultrabaja, síntesis vocal adaptativa y análisis emocional.",
    "status": "En mantenimiento",
    "demoMode": "mostrar",
    "appUrl": "https://convergencelab-production.up.railway.app/",
    "githubUrl": "https://github.com/Juansotag/ConvergenceLab",
    "logo": "assets/projects/convergence.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector Público",
    "tipo": "Software",
    "linea": "Asistentes de Voz",
    "tags": [
      "Política",
      "Gobierno",
      "Llamadas Automatizadas",
      "Dapta",
      "Outbound Calls",
      "Listo para propuesta"
    ],
    "readyForSale": true,
    "name": "Alocandidato",
    "slogan": "Campañas de voz automatizadas a escala",
    "description": "Sistema de llamadas automatizadas bidireccionales con IA para campañas electorales e investigación de opinión pública. Encuestas dinámicas y mensajes personalizados masivos.",
    "status": "En línea",
    "demoMode": "mostrar",
    "appUrl": "https://alocandidato-production.up.railway.app/",
    "githubUrl": "https://github.com/Juansotag/Alocandidato",
    "logo": "assets/projects/alocandidato.jpg",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector Privado",
    "tipo": "Software",
    "linea": "Agroindustria & Exportación",
    "tags": [
      "Agro",
      "Exportación",
      "Trazabilidad",
      "FastAPI",
      "React",
      "Corpohass",
      "Listo para propuesta"
    ],
    "readyForSale": true,
    "name": "HassApp",
    "slogan": "Trazabilidad inteligente para el aguacate Hass",
    "description": "Plataforma para Corpohass que gestiona la trazabilidad completa del aguacate Hass colombiano desde el predio productor hasta el puerto de destino. Monitoreo de calidad y certificaciones.",
    "status": "En línea",
    "demoMode": "mostrar",
    "appUrl": "https://heartfelt-success-production-8486.up.railway.app/dashboard",
    "githubUrl": "https://github.com/Juansotag/HassApp",
    "logo": "assets/projects/hassapp.png",
    "videoUrl": "https://drive.google.com/file/d/1Xl2Nlq7l44o50H15gNlBqL4894xG960X/view?usp=drive_link",
    "pptUrl": ""
  },
  {
    "segment": "Sector Privado",
    "tipo": "Software",
    "linea": "Agroindustria & Exportación",
    "tags": [
      "Agro",
      "Exportación",
      "Diagnóstico IA",
      "FastAPI",
      "Corpohass",
      "Listo para propuesta"
    ],
    "readyForSale": true,
    "name": "ExportaCheck",
    "slogan": "Diagnóstico de madurez exportadora con IA",
    "description": "Herramienta de autodiagnóstico para productores y exportadores agrícolas. Evalúa cumplimiento fitosanitario, normativo y logístico para mercados de EE.UU., Europa y Asia.",
    "status": "En línea",
    "demoMode": "mostrar",
    "appUrl": "https://exporta-facil-bot-production.up.railway.app/",
    "githubUrl": "https://github.com/Juansotag/ExportaCheck",
    "logo": "assets/projects/exportacheck.jpg",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector Privado",
    "tipo": "Software",
    "linea": "Notarías & Documental",
    "tags": [
      "Notarías",
      "Justicia",
      "Chat IA",
      "Escrituración",
      "Cumplimiento",
      "Listo para propuesta"
    ],
    "readyForSale": true,
    "name": "NotariaDoc",
    "slogan": "Borradores de escrituras con IA en minutos",
    "description": "Asistente para despachos notariales que redacta borradores de escrituras públicas a partir de minutas, contratos y documentos soporte. Validación automática de requisitos legales.",
    "status": "En línea",
    "demoMode": "mostrar",
    "appUrl": "https://notariadoc-production.up.railway.app/",
    "githubUrl": "https://github.com/Juansotag/NotariaDoc",
    "logo": "assets/Govlab.png",
    "videoUrl": "https://drive.google.com/file/d/1Xl2Nlq7l44o50H15gNlBqL4894xG960X/view?usp=drive_link",
    "pptUrl": ""
  },
  {
    "segment": "Sector Privado",
    "tipo": "Software",
    "linea": "Notarías & Documental",
    "tags": [
      "Notarías",
      "Empresa",
      "Panel de Control",
      "Pronóstico",
      "Tiempos de Espera",
      "Listo para propuesta"
    ],
    "readyForSale": true,
    "name": "NotariaIQ",
    "slogan": "Control operativo y predicción de demanda notarial",
    "description": "Panel de control y analítica para notarías. Predicción de tiempos de espera, gestión de turnos, distribución de carga laboral entre funcionarios y métricas de satisfacción.",
    "status": "En línea",
    "demoMode": "mostrar",
    "appUrl": "https://notariaiq-production.up.railway.app/",
    "githubUrl": "https://github.com/Juansotag/NotariaIQ",
    "logo": "assets/Govlab.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector Privado",
    "tipo": "Software",
    "linea": "Notarías & Documental",
    "tags": [
      "Notarías",
      "Vivienda",
      "Constructoras",
      "Flujo Digital",
      "Cero Papel",
      "Listo para propuesta"
    ],
    "readyForSale": true,
    "name": "Radica Notaría",
    "slogan": "Ventanilla digital entre constructoras y notarías",
    "description": "Plataforma de radicación digital que conecta constructoras, fiduciarias y notarías. Gestión de paquetes documentales para escrituración masiva de proyectos inmobiliarios.",
    "status": "En línea",
    "demoMode": "mostrar",
    "appUrl": "https://radicanotaria-production.up.railway.app/",
    "githubUrl": "https://github.com/Juansotag/RadicaNotaria",
    "logo": "assets/Govlab.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector Público",
    "tipo": "Software",
    "linea": "Proyección Social & Directiva",
    "tags": [
      "Justicia",
      "Gobierno",
      "Gestión Documental",
      "Síntesis Ejecutiva",
      "NLP",
      "Listo para propuesta"
    ],
    "readyForSale": true,
    "name": "Resume Expedientes",
    "slogan": "Síntesis ejecutiva de expedientes complejos con IA",
    "description": "Herramienta para directivos y equipos jurídicos que genera resúmenes estructurados de expedientes administrativos y judiciales de cientos de páginas en segundos.",
    "status": "En línea",
    "demoMode": "mostrar",
    "appUrl": "https://expedientes.up.railway.app/",
    "githubUrl": "https://github.com/Juansotag/Resume-Expedientes",
    "logo": "assets/Govlab.png",
    "videoUrl": "https://drive.google.com/file/d/1Xl2Nlq7l44o50H15gNlBqL4894xG960X/view?usp=drive_link",
    "pptUrl": ""
  },
  {
    "segment": "Sector Privado",
    "tipo": "Software",
    "linea": "Proyección Social & Directiva",
    "tags": [
      "Medios",
      "Comunicación",
      "CRON",
      "WhatsApp",
      "Email",
      "Listo para propuesta"
    ],
    "readyForSale": true,
    "name": "NewsletterMaker",
    "slogan": "Boletines institucionales automáticos con IA",
    "description": "Generador automatizado de newsletters temáticos a partir de fuentes de noticias, publicaciones académicas y comunicados oficiales. Distribución por correo y WhatsApp.",
    "status": "En línea",
    "demoMode": "mostrar",
    "appUrl": "https://newsletter-pse.up.railway.app/",
    "githubUrl": "https://github.com/Juansotag/NewsletterMaker",
    "logo": "assets/Govlab.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector Público",
    "tipo": "Software",
    "linea": "Gestión Pública & Ambiental",
    "tags": [
      "Medio Ambiente",
      "Gobierno",
      "CAR",
      "PQRS Automático",
      "Clasificación IA",
      "Listo para propuesta"
    ],
    "readyForSale": true,
    "name": "CAResponde",
    "slogan": "Atención inteligente a solicitudes ambientales",
    "description": "Sistema de clasificación y respuesta automática de solicitudes ciudadanas y denuncias ambientales para la Corporación Autónoma Regional de Cundinamarca (CAR).",
    "status": "En línea",
    "demoMode": "mostrar",
    "appUrl": "https://car-pqrs-production.up.railway.app/",
    "githubUrl": "https://github.com/Juansotag/CAResponde",
    "logo": "assets/projects/caresponde.png",
    "videoUrl": "https://drive.google.com/file/d/1Xl2Nlq7l44o50H15gNlBqL4894xG960X/view?usp=drive_link",
    "pptUrl": ""
  },
  {
    "segment": "Sector Público",
    "tipo": "Software",
    "linea": "Gestión Pública & Ambiental",
    "tags": [
      "Gobierno",
      "Ciudad",
      "Plan de Desarrollo",
      "RAG FAISS",
      "GPT-4o",
      "Listo para propuesta"
    ],
    "readyForSale": true,
    "name": "AlcaldIA",
    "slogan": "Conocimiento del plan de desarrollo al alcance de todos",
    "description": "Chatbot basado en RAG sobre los documentos del Plan de Desarrollo Distrital de Bogotá. Responde preguntas de ciudadanos y funcionarios con citación exacta de metas y presupuestos.",
    "status": "En línea",
    "demoMode": "mostrar",
    "appUrl": "https://alcadia.up.railway.app/",
    "githubUrl": "https://github.com/Juansotag/AlcaldIA",
    "logo": "assets/photos/Aliados/alcaldia.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector Público",
    "tipo": "Software",
    "linea": "Gestión Pública & Ambiental",
    "tags": [
      "Seguridad",
      "Medio Ambiente",
      "Policía",
      "Legislación Ambiental",
      "Carabineros"
    ],
    "readyForSale": false,
    "name": "PoliciApp-Eco",
    "slogan": "Asistente normativo para la policía ambiental en campo",
    "description": "Aplicación móvil de consulta rápida para agentes de la Dirección de Carabineros y Protección Ambiental. Tipificación de delitos ecológicos, rutas de atención e incautación de fauna/flora.",
    "status": "En línea",
    "demoMode": "mostrar",
    "appUrl": "https://policiaambiental-production.up.railway.app/",
    "githubUrl": "https://github.com/Juansotag/PoliciApp-Eco",
    "logo": "assets/photos/Aliados/policia.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector Público",
    "tipo": "Software",
    "linea": "Gestión Pública & Ambiental",
    "tags": [
      "Seguridad",
      "Medio Ambiente",
      "Normativa",
      "Jurisprudencia",
      "Chatbot"
    ],
    "readyForSale": false,
    "name": "PoliciaAmbiental",
    "slogan": "Base de conocimiento legal para protección ambiental",
    "description": "Chatbot especializado en normativa ambiental colombiana (Leyes, Decretos, Resoluciones MinAmbiente). Orientación en procedimientos sancionatorios y medidas preventivas.",
    "status": "En línea",
    "demoMode": "mostrar",
    "appUrl": "https://policiapp-transito.up.railway.app/",
    "githubUrl": "https://github.com/Juansotag/PoliciaAmbiental",
    "logo": "assets/photos/Aliados/policia.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector Público",
    "tipo": "Software",
    "linea": "Gestión Pública & Ambiental",
    "tags": [
      "Gobierno",
      "Justicia",
      "Legislativo",
      "Diff Semántico",
      "GPT-4"
    ],
    "readyForSale": false,
    "name": "LegisCheck",
    "slogan": "Comparación y análisis semántico de proyectos de ley",
    "description": "Herramienta que analiza diferencias entre ponencias y versiones de proyectos de ley en el Congreso. Detecta cambios de fondo, impactos regulatorios y posibles contradicciones.",
    "status": "En línea",
    "demoMode": "mostrar",
    "appUrl": "https://paralelo.up.railway.app/",
    "githubUrl": "https://github.com/Juansotag/LegisCheck",
    "logo": "assets/projects/Legischeck.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector Público",
    "tipo": "Software",
    "linea": "Seguridad & Analítica",
    "tags": [
      "Seguridad",
      "Gobierno",
      "Ciudad",
      "Observatorio",
      "Predicción Delitos",
      "Listo para propuesta"
    ],
    "readyForSale": true,
    "name": "Barranquilla",
    "slogan": "Analítica predictiva para la seguridad de Barranquilla",
    "description": "Observatorio de seguridad ciudadana con modelos predictivos de delito a nivel de cuadrante y barrio. Permite a la alcaldía y policía focalizar operativos de prevención.",
    "status": "En línea",
    "demoMode": "mostrar",
    "appUrl": "https://barranquilla-production.up.railway.app/",
    "githubUrl": "https://github.com/Juansotag/Barranquilla",
    "logo": "assets/Govlab.png",
    "videoUrl": "https://drive.google.com/file/d/1Xl2Nlq7l44o50H15gNlBqL4894xG960X/view?usp=drive_link",
    "pptUrl": ""
  },
  {
    "segment": "Sector Privado",
    "tipo": "Software",
    "linea": "Sostenibilidad & ESG",
    "tags": [
      "Educación",
      "Sostenibilidad",
      "ESG",
      "Universia",
      "React",
      "Supabase",
      "Listo para propuesta"
    ],
    "readyForSale": true,
    "name": "Test de sostenibilidad universitaria",
    "slogan": "Mide el compromiso ESG de tu universidad",
    "description": "Herramienta de autoevaluación y benchmarking de sostenibilidad para instituciones de educación superior. Métricas en gobernanza, impacto ambiental, inclusión y campus sostenible.",
    "status": "En línea",
    "demoMode": "mostrar",
    "appUrl": "https://bot-sostenibilidad-esg.up.railway.app/",
    "githubUrl": "https://github.com/Juansotag/Test-Sostenibilidad",
    "logo": "assets/projects/sostenibilidad.jpg",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector Privado",
    "tipo": "Software",
    "linea": "Sostenibilidad & ESG",
    "tags": [
      "Educación",
      "Tecnología",
      "MetaRed",
      "Universia",
      "Data Science",
      "Listo para propuesta"
    ],
    "readyForSale": true,
    "name": "Asistente de agente para MetaRed",
    "slogan": "Analítica y recomendaciones para redes universitarias",
    "description": "Agente analítico desarrollado para la red MetaRed (Universia). Procesa encuestas de madurez digital universitaria y genera hojas de ruta de transformación tecnológica personalizadas.",
    "status": "En línea",
    "demoMode": "mostrar",
    "appUrl": "",
    "githubUrl": "https://github.com/Juansotag/MetaRed-Assistant",
    "logo": "assets/projects/sostenibilidad.jpg",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector Público",
    "tipo": "Software",
    "linea": "Comunidad & Admisiones",
    "tags": [
      "Educación",
      "Gobierno",
      "Posgrados",
      "CV Matching",
      "NLP",
      "Listo para propuesta"
    ],
    "readyForSale": true,
    "name": "MPAChat",
    "slogan": "Orientación personalizada para aspirantes a posgrado",
    "description": "Chatbot con matching de perfil profesional para aspirantes a la Maestría en Políticas Públicas (MPA) de La Sabana. Analiza CV del aspirante y recomienda énfasis formativo.",
    "status": "En línea",
    "demoMode": "mostrar",
    "appUrl": "https://mpachat-unisabana.up.railway.app/",
    "githubUrl": "https://github.com/Juansotag/MPAChat",
    "logo": "assets/photos/Aliados/escuela.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector Privado",
    "tipo": "Software",
    "linea": "Comunidad & Admisiones",
    "tags": [
      "Educación",
      "Empleo",
      "Talento",
      "Hojas de Vida",
      "ATS Scoring",
      "Listo para propuesta"
    ],
    "readyForSale": true,
    "name": "AlumniCV",
    "slogan": "Optimiza tu hoja de vida con retroalimentación IA",
    "description": "Plataforma para egresados de La Sabana que analiza hojas de vida frente a vacantes deseadas. Sugiere mejoras de redacción, palabras clave ATS y habilidades a fortalecer.",
    "status": "En línea",
    "demoMode": "mostrar",
    "appUrl": "https://alumnicv.up.railway.app/",
    "githubUrl": "https://github.com/Juansotag/AlumniCV",
    "logo": "assets/Govlab.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector Privado",
    "tipo": "Software",
    "linea": "Comunidad & Admisiones",
    "tags": [
      "Educación",
      "Comunidad",
      "Alumni",
      "Posgrados",
      "Chatbot",
      "Listo para propuesta"
    ],
    "readyForSale": true,
    "name": "AlumniChat",
    "slogan": "Conecta con la oferta de posgrados y vida profesional",
    "description": "Canal conversacional 24/7 para la comunidad de egresados. Información sobre educación continuada, beneficios para graduados, networking y eventos institucionales.",
    "status": "En línea",
    "demoMode": "mostrar",
    "appUrl": "https://alumnichat.up.railway.app/",
    "githubUrl": "https://github.com/Juansotag/AlumniChat",
    "logo": "assets/Govlab.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector Privado",
    "tipo": "Software",
    "linea": "Innovación & Procesos",
    "tags": [
      "Educación",
      "Emprendimiento",
      "Innovación",
      "Business Model",
      "Listo para propuesta"
    ],
    "readyForSale": true,
    "name": "Germina",
    "slogan": "De la idea de investigación al modelo de negocio",
    "description": "Asistente para la Dirección de Innovación de Unisabana. Acompaña a investigadores y emprendedores en la estructuración de proyectos, validación de mercado y propiedad intelectual.",
    "status": "En línea",
    "demoMode": "mostrar",
    "appUrl": "https://germina.up.railway.app/",
    "githubUrl": "https://github.com/Juansotag/Germina",
    "logo": "assets/projects/germina.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector Privado",
    "tipo": "Software",
    "linea": "Inteligencia Geoespacial",
    "tags": [
      "Vivienda",
      "Ciudad",
      "Inmobiliario",
      "Leaflet",
      "Geoespacial",
      "Listo para propuesta"
    ],
    "readyForSale": true,
    "name": "Geovivienda",
    "slogan": "Inteligencia inmobiliaria y territorial en un mapa",
    "description": "Plataforma geoespacial que cruza oferta inmobiliaria, precios por metro cuadrado, estratificación y accesibilidad a servicios en Sabana Centro y Bogotá.",
    "status": "En línea",
    "demoMode": "mostrar",
    "appUrl": "https://geovivienda.up.railway.app/",
    "githubUrl": "https://github.com/Juansotag/Geovivienda",
    "logo": "assets/projects/geovivienda-main.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Transversal",
    "tipo": "Software",
    "linea": "Analítica con IA",
    "tags": [
      "Tecnología",
      "Analítica",
      "Empresa",
      "LangChain",
      "Plotly",
      "Auto-Charts",
      "Listo para propuesta"
    ],
    "readyForSale": true,
    "name": "Data Copilot",
    "slogan": "Pregúntale a tus datos en lenguaje natural",
    "description": "Copiloto analítico que traduce preguntas en español a consultas SQL/Python, genera visualizaciones interactivas automáticas y produce narrativas ejecutivas de hallazgos.",
    "status": "En línea",
    "demoMode": "mostrar",
    "appUrl": "https://datacopilot.up.railway.app/",
    "githubUrl": "https://github.com/Juansotag/DataCopilot",
    "logo": "assets/Govlab.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector Público",
    "tipo": "Software",
    "linea": "Dashboards & Analítica",
    "tags": [
      "Democracia",
      "Gobierno",
      "Opinión",
      "INVAMER",
      "Dashboard",
      "Listo para propuesta"
    ],
    "readyForSale": true,
    "name": "Cuidar la Democracia",
    "slogan": "Visualiza lo que piensa el ciudadano",
    "description": "Dashboard interactivo con datos de encuesta sobre percepciones democráticas en Colombia (INVAMER/GovLab). Filtros sociodemográficos, mapas y gráficos en tiempo real.",
    "status": "En línea",
    "demoMode": "mostrar",
    "appUrl": "https://cuidar-la-democracia-production.up.railway.app/",
    "githubUrl": "https://github.com/Juansotag/Cuidar-la-Democracia",
    "logo": "assets/projects/democracia.png",
    "videoUrl": "https://drive.google.com/file/d/1cGZzC2g1HsFeL4M3TziwMUL9o692WI-x/view?usp=drive_link",
    "pptUrl": ""
  },
  {
    "segment": "Sector Público",
    "tipo": "Software",
    "linea": "Dashboards & Analítica",
    "tags": [
      "Gobierno",
      "Región",
      "Desarrollo",
      "FONDECUN",
      "Sankey",
      "Listo para propuesta"
    ],
    "readyForSale": true,
    "name": "Data Promce",
    "slogan": "Seguimiento al impacto de proyectos de desarrollo",
    "description": "Tablero de visualización de indicadores de gestión, inversión y cobertura de los programas ejecutados por FONDECUN en los municipios de Cundinamarca.",
    "status": "En línea",
    "demoMode": "mostrar",
    "appUrl": "",
    "githubUrl": "https://github.com/Juansotag/Data-Promce",
    "logo": "assets/projects/datapromce.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector Público",
    "tipo": "Software",
    "linea": "Dashboards & Analítica",
    "tags": [
      "Región",
      "Sostenibilidad",
      "Gobierno",
      "Sabana Centro",
      "Scoring IA",
      "Listo para propuesta"
    ],
    "readyForSale": true,
    "name": "Sabana Centro Sostenible",
    "slogan": "Monitoreo del desarrollo territorial en Sabana Centro",
    "description": "Plataforma de seguimiento a las metas de sostenibilidad y competitividad de los 11 municipios de la provincia de Sabana Centro, en alianza con Sabana Centro Cómo Vamos.",
    "status": "En línea",
    "demoMode": "mostrar",
    "appUrl": "https://sabanacentrosostenible.up.railway.app/",
    "githubUrl": "https://github.com/Juansotag/Sabana-Centro-Sostenible",
    "logo": "assets/projects/scsv2.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector Privado",
    "tipo": "Dashboards",
    "linea": "Dashboards & Analítica",
    "tags": [
      "Educación",
      "Gestión",
      "Universidad",
      "Tableau",
      "Dashboard"
    ],
    "readyForSale": false,
    "name": "SIAG",
    "slogan": "Sistema de inteligencia analítica para la gestión",
    "description": "Dashboard institucional para el seguimiento de metas estratégicas, matrícula estudiantil, retención y desempeño financiero de unidades académicas.",
    "status": "En línea",
    "demoMode": "mostrar",
    "appUrl": "https://public.tableau.com/views/SIAG_Dashboard/Inicio",
    "githubUrl": "",
    "logo": "assets/Govlab.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector Público",
    "tipo": "Dashboards",
    "linea": "Dashboards & Analítica",
    "tags": [
      "Seguridad",
      "Social",
      "Familia",
      "Policía",
      "Tableau"
    ],
    "readyForSale": false,
    "name": "Violencia Intrafamiliar en Colombia",
    "slogan": "Radiografía nacional de la violencia en los hogares",
    "description": "Visualización analítica con datos de la Policía Nacional sobre denuncias de violencia intrafamiliar por departamento, municipio, grupo etario y género.",
    "status": "En línea",
    "demoMode": "mostrar",
    "appUrl": "https://public.tableau.com/views/ViolenciaIntrafamiliarColombia/Dashboard",
    "githubUrl": "",
    "logo": "assets/Govlab.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector Público",
    "tipo": "Dashboards",
    "linea": "Dashboards & Analítica",
    "tags": [
      "Salud",
      "Hospitales",
      "Gobierno",
      "Capacidad Hospitalaria",
      "Tableau"
    ],
    "readyForSale": false,
    "name": "Recursos hospitalarios por cada 100.000 habitantes",
    "slogan": "Capacidad del sistema de salud en el territorio",
    "description": "Dashboard que mapea la disponibilidad de camas hospitalarias, UCI, ambulancias y personal médico por departamento frente a la densidad poblacional.",
    "status": "En línea",
    "demoMode": "mostrar",
    "appUrl": "https://public.tableau.com/views/RecursosHospitalariosColombia/Dashboard",
    "githubUrl": "",
    "logo": "assets/Govlab.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector Público",
    "tipo": "Dashboards",
    "linea": "Dashboards & Analítica",
    "tags": [
      "Salud",
      "Aseguramiento",
      "Gobierno",
      "ADRES",
      "EPS",
      "Tableau"
    ],
    "readyForSale": false,
    "name": "Registros de la Base Única de afiliados - Adres - Mayo 2025",
    "slogan": "Estructura del aseguramiento en salud en Colombia",
    "description": "Análisis de afiliación al Sistema General de Seguridad Social en Salud: régimen contributivo vs. subsidiado, pirámide de edad y cobertura departamental.",
    "status": "En línea",
    "demoMode": "mostrar",
    "appUrl": "https://public.tableau.com/views/BDUA_Adres_2025/Dashboard",
    "githubUrl": "",
    "logo": "assets/Govlab.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector Público",
    "tipo": "Dashboards",
    "linea": "Dashboards & Analítica",
    "tags": [
      "Demografía",
      "Salud",
      "Social",
      "Envejecimiento",
      "Tableau"
    ],
    "readyForSale": false,
    "name": "Envejecimiento poblacional en Colombia por Sexo y Área",
    "slogan": "Transición demográfica y territorio",
    "description": "Historia interactiva sobre las curvas de envejecimiento y pirámides poblacionales urbanas y rurales en Colombia.",
    "status": "En línea",
    "demoMode": "mostrar",
    "appUrl": "https://public.tableau.com/views/EnvejecimientoPoblacional_SexoArea/Story",
    "githubUrl": "",
    "logo": "assets/Govlab.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector Público",
    "tipo": "Dashboards",
    "linea": "Dashboards & Analítica",
    "tags": [
      "Seguridad",
      "Justicia",
      "Policía",
      "Extorsión",
      "Tableau"
    ],
    "readyForSale": false,
    "name": "Panorama de la Extorsión en Colombia (2010-2024)",
    "slogan": "Evolución de un delito de alto impacto",
    "description": "Análisis longitudinal de denuncias, modalidades y focos territoriales del delito de extorsión a lo largo de 14 años.",
    "status": "En línea",
    "demoMode": "mostrar",
    "appUrl": "https://public.tableau.com/views/ExtorsionColombia2010_2024/Dashboard",
    "githubUrl": "",
    "logo": "assets/Govlab.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector Público",
    "tipo": "Dashboards",
    "linea": "Dashboards & Analítica",
    "tags": [
      "Seguridad",
      "Justicia",
      "Social",
      "Protección",
      "Tableau"
    ],
    "readyForSale": false,
    "name": "Delitos Sexuales en Colombia",
    "slogan": "Evidencia para la protección ciudadana",
    "description": "Mapeo y caracterización de reportes de delitos sexuales para el diseño de políticas de prevención y justicia focalizada.",
    "status": "En línea",
    "demoMode": "mostrar",
    "appUrl": "https://public.tableau.com/views/DelitosSexualesColombia/Dashboard",
    "githubUrl": "",
    "logo": "assets/Govlab.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector Público",
    "tipo": "Dashboards",
    "linea": "Dashboards & Analítica",
    "tags": [
      "Demografía",
      "Salud",
      "Social",
      "Adulto Mayor",
      "Tableau"
    ],
    "readyForSale": false,
    "name": "El Panorama del envejecimiento poblacional en Colombia",
    "slogan": "Retos de la longevidad y servicios sociales",
    "description": "Dashboard integral con indicadores de dependencia, índice de envejecimiento y distribución departamental.",
    "status": "En línea",
    "demoMode": "mostrar",
    "appUrl": "https://public.tableau.com/views/PanoramaEnvejecimientoColombia/Dashboard",
    "githubUrl": "",
    "logo": "assets/Govlab.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector Público",
    "tipo": "Dashboards",
    "linea": "Dashboards & Analítica",
    "tags": [
      "Salud",
      "Social",
      "Prevención",
      "Salud Mental",
      "Tableau"
    ],
    "readyForSale": false,
    "name": "Suicidios en Colombia 2023-2024",
    "slogan": "Datos para la salud mental pública",
    "description": "Monitoreo descriptivo y espacial de eventos de salud mental y suicidio reportados en el territorio nacional.",
    "status": "En línea",
    "demoMode": "mostrar",
    "appUrl": "https://public.tableau.com/views/SuicidiosColombia2023_2024/Dashboard",
    "githubUrl": "",
    "logo": "assets/Govlab.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector Público",
    "tipo": "Dashboards",
    "linea": "Dashboards & Analítica",
    "tags": [
      "Emergencias",
      "Seguridad",
      "Ciudad",
      "Línea 123",
      "Tableau"
    ],
    "readyForSale": false,
    "name": "Llamadas totales al NUSE/123 por UPZ en Bogotá",
    "slogan": "Llamadas de emergencia a escala barrial",
    "description": "Distribución geográfica por Unidades de Planeamiento Zonal (UPZ) de llamadas atendidas por la línea única de emergencias de Bogotá.",
    "status": "En línea",
    "demoMode": "mostrar",
    "appUrl": "https://public.tableau.com/views/NUSE123_UPZ_Bogota/Dashboard",
    "githubUrl": "",
    "logo": "assets/Govlab.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector Público",
    "tipo": "Dashboards",
    "linea": "Dashboards & Analítica",
    "tags": [
      "Agro",
      "Comercio",
      "Economía",
      "Forecasting",
      "Precios Arroz",
      "Tableau"
    ],
    "readyForSale": false,
    "name": "Precios y productividad del arroz - Forecasting",
    "slogan": "Pronóstico de precios y cosechas agrícolas",
    "description": "Modelo predictivo de series temporales de precios mayoristas y rendimiento por hectárea en el sector arrocero.",
    "status": "En línea",
    "demoMode": "mostrar",
    "appUrl": "https://public.tableau.com/views/ArrozForecasting/Dashboard",
    "githubUrl": "",
    "logo": "assets/Govlab.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector Público",
    "tipo": "Dashboards",
    "linea": "Dashboards & Analítica",
    "tags": [
      "Movilidad",
      "Seguridad",
      "Ciudad",
      "Forecasting",
      "Tránsito",
      "Tableau"
    ],
    "readyForSale": false,
    "name": "Siniestralidad vial en Bogotá - Forecasting",
    "slogan": "Modelos predictivos de accidentalidad vial",
    "description": "Predicción de eventos de siniestros viales en corredores viales clave de Bogotá mediante técnicas de forecasting.",
    "status": "En línea",
    "demoMode": "mostrar",
    "appUrl": "https://public.tableau.com/views/SiniestralidadBogota_Forecasting/Dashboard",
    "githubUrl": "",
    "logo": "assets/Govlab.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector Público",
    "tipo": "Dashboards",
    "linea": "Dashboards & Analítica",
    "tags": [
      "Movilidad",
      "Seguridad",
      "Ciudad",
      "Accidentes",
      "Tableau"
    ],
    "readyForSale": false,
    "name": "Siniestralidad vial en Bogotá - Siniestros",
    "slogan": "Registro y causas de accidentes de tránsito",
    "description": "Visualización histórica 2019-2023 de siniestros viales clasificados por tipo de vehículo, horario y localidad.",
    "status": "En línea",
    "demoMode": "mostrar",
    "appUrl": "https://public.tableau.com/views/SiniestralidadBogota_Siniestros/Dashboard",
    "githubUrl": "",
    "logo": "assets/Govlab.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector Público",
    "tipo": "Dashboards",
    "linea": "Dashboards & Analítica",
    "tags": [
      "Movilidad",
      "Salud",
      "Seguridad",
      "Víctimas",
      "Tableau"
    ],
    "readyForSale": false,
    "name": "Siniestralidad vial en Bogotá - Víctimas",
    "slogan": "Perfil de actores viales y lesionados",
    "description": "Tablero enfocado en peatones, ciclistas y motociclistas afectados en eventos viales en la capital.",
    "status": "En línea",
    "demoMode": "mostrar",
    "appUrl": "https://public.tableau.com/views/SiniestralidadBogota_Victimas/Dashboard",
    "githubUrl": "",
    "logo": "assets/Govlab.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector Público",
    "tipo": "Dashboards",
    "linea": "Dashboards & Analítica",
    "tags": [
      "Movilidad",
      "Ciudad",
      "Urbanismo",
      "Mapas de Calor",
      "Tableau"
    ],
    "readyForSale": false,
    "name": "Siniestralidad vial en Bogotá - Análisis espacial",
    "slogan": "Puntos críticos e intersecciones de alto riesgo",
    "description": "Análisis de concentración geoespacial de accidentes e identificación de tramos viales prioritarios para intervención.",
    "status": "En línea",
    "demoMode": "mostrar",
    "appUrl": "https://public.tableau.com/views/SiniestralidadBogota_Espacial/Dashboard",
    "githubUrl": "",
    "logo": "assets/Govlab.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector Público",
    "tipo": "Dashboards",
    "linea": "Dashboards & Analítica",
    "tags": [
      "Emergencias",
      "Seguridad",
      "Ciudad",
      "Forecasting",
      "NUSE 123",
      "Tableau"
    ],
    "readyForSale": false,
    "name": "Llamadas totales al NUSE/123 por UPZ en Bogotá - Forecasting",
    "slogan": "Pronóstico de demanda de atención de emergencias",
    "description": "Modelos predictivos de volumen de llamadas al NUSE por UPZ para optimizar el despliegue de patrullas y ambulancias.",
    "status": "En línea",
    "demoMode": "mostrar",
    "appUrl": "https://public.tableau.com/views/NUSE123_UPZ_Forecasting/Dashboard",
    "githubUrl": "",
    "logo": "assets/Govlab.png",
    "videoUrl": "",
    "pptUrl": ""
  },
  {
    "segment": "Sector Público",
    "tipo": "Estudios & Análisis de datos",
    "linea": "Salud & Geoanalítica",
    "tags": [
      "Salud",
      "Hospitales",
      "Machine Learning",
      "ARIMA",
      "Prophet",
      "Gestión"
    ],
    "readyForSale": false,
    "name": "Análisis Clínica Universidad de la Sabana",
    "slogan": "Anticipa la demanda, optimiza los recursos",
    "description": "Sistema ML de series de tiempo (ARIMA y Prophet) con MAE inferior a 10% para pronosticar el número de pacientes NO-EPS y la facturación semanal de la Clínica.",
    "status": "En línea",
    "demoMode": "ppt",
    "appUrl": "",
    "githubUrl": "",
    "logo": "assets/photos/Aliados/clinica.png",
    "videoUrl": "",
    "pptUrl": "assets/projects/analisis_clinica.pdf"
  },
  {
    "segment": "Sector Público",
    "tipo": "Estudios & Análisis de datos",
    "linea": "Salud & Geoanalítica",
    "tags": [
      "Salud",
      "Territorio",
      "Geoanalítica",
      "Hospitales",
      "Machine Learning"
    ],
    "readyForSale": false,
    "name": "Geoanálisis Clínica Universidad de la Sabana",
    "slogan": "Encuentra al paciente antes de que llegue",
    "description": "Análisis predictivo geoespacial de la ubicación y patrones de desplazamiento de potenciales usuarios de servicios de salud privados en Sabana Centro.",
    "status": "En línea",
    "demoMode": "ppt",
    "appUrl": "",
    "githubUrl": "",
    "logo": "assets/photos/Aliados/clinica.png",
    "videoUrl": "",
    "pptUrl": "assets/projects/geoanalisis_clinica.pdf"
  },
  {
    "segment": "Sector Público",
    "tipo": "Estudios & Análisis de datos",
    "linea": "Políticas Públicas & Territorio",
    "tags": [
      "Gobierno",
      "Social",
      "Ciudad",
      "Zipaquirá",
      "Observatorio"
    ],
    "readyForSale": false,
    "name": "Observatorio Social de Zipaquirá - OSZ",
    "slogan": "Alcaldía de Zipaquirá",
    "description": "Desarrollo y diseño del primer observatorio social de la Región Sabana Centro para el seguimiento riguroso de indicadores sociales y bienestar.",
    "status": "En línea",
    "demoMode": "ppt",
    "appUrl": "",
    "githubUrl": "",
    "logo": "assets/projects/osz.png",
    "videoUrl": "",
    "pptUrl": "assets/projects/osz.pdf"
  },
  {
    "segment": "Sector Público",
    "tipo": "Estudios & Análisis de datos",
    "linea": "Electoral & Pronóstico",
    "tags": [
      "Política",
      "Medios",
      "Electoral",
      "Pronóstico",
      "Minería de Redes"
    ],
    "readyForSale": false,
    "name": "ELA-NOM",
    "slogan": "Pronostica elecciones con redes sociales",
    "description": "Aplicación de una novedosa metodología de pronóstico electoral (ELA-NOM) basada en minería de redes sociales con error predictivo inferior al 9%.",
    "status": "En línea",
    "demoMode": "ppt",
    "appUrl": "",
    "githubUrl": "",
    "logo": "assets/Govlab.png",
    "videoUrl": "",
    "pptUrl": "assets/projects/elanom.pdf"
  },
  {
    "segment": "Transversal",
    "tipo": "Educación",
    "linea": "Educación & Formación",
    "tags": [
      "Educación",
      "Empresa",
      "Capacitación",
      "Bootcamp",
      "Formación Ejecutiva"
    ],
    "readyForSale": false,
    "name": "Bootcamps en IA",
    "slogan": "Habilidades reales, en tiempo récord",
    "description": "Programas técnicos intensivos de capacitación en IA para profesionales y directivos del sector público y privado, orientados a casos de uso inmediatos.",
    "status": "En línea",
    "demoMode": "mostrar",
    "appUrl": "https://www.unisabana.edu.co/programas/educacion-continua/bootcamps-ia/",
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
  renderDashboardStructure();
  updateDashboard(PRODUCTS);
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
          : (product.videoUrl ? `onclick="window.open('${product.videoUrl}', '_blank')"` : (product.pptUrl ? `onclick="window.open('${product.pptUrl}', '_blank')"` : `onclick="openModal()"`));
        buttonsHtml += `<button class="btn btn-primary" ${action}><i data-lucide="message-square"></i> Contáctanos</button>`;
      } else if (product.appUrl) {
        const isTableau = product.appUrl.includes('tableau.com');
        const btnLabel = isTableau ? 'Ver Dashboard' : 'Ver App';
        const btnIcon = isTableau ? 'bar-chart-2' : 'external-link';
        const appTitle = product.status && product.status.toLowerCase() === 'en mantenimiento' ? 'Esta aplicación puede estar temporalmente en mantenimiento' : '';

        const btnContent = `<button class="btn btn-primary" onclick="window.open('${product.appUrl}', '_blank')"><i data-lucide="${btnIcon}"></i> ${btnLabel}</button>`;
        buttonsHtml += appTitle
          ? `<div class="tooltip-wrapper" title="${appTitle}">${btnContent}</div>`
          : btnContent;
      } else if (product.videoUrl) {
        // Si no tiene link web pero tiene video demo
        buttonsHtml += `<button class="btn btn-primary" onclick="window.open('${product.videoUrl}', '_blank')"><i data-lucide="play-circle"></i> Ver demo</button>`;
      } else if (product.pptUrl) {
        buttonsHtml += `<a class="btn btn-primary" href="${product.pptUrl}" target="_blank" rel="noopener noreferrer"><i data-lucide="presentation"></i> Ver presentación</a>`;
      } else {
        // Sin link, sin video, sin ppt
        const btnContent = `<button class="btn btn-primary" disabled><i data-lucide="external-link"></i> Ver App</button>`;
        buttonsHtml += `<div class="tooltip-wrapper" title="Despliegue interno o en mantenimiento">${btnContent}</div>`;
      }

      // Botón secundario de Video si ya tiene botón principal de App
      if (product.appUrl && product.videoUrl) {
        buttonsHtml += `<button class="btn btn-outline" onclick="window.open('${product.videoUrl}', '_blank')"><i data-lucide="play-circle"></i> Ver demo</button>`;
      }

      // Botón de GitHub (oculto por defecto para clientes, visible con Ctrl+M)
      if (product.githubUrl) {
        const iconGithub = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`;
        buttonsHtml += `<button class="btn btn-outline btn-github" onclick="window.open('${product.githubUrl}', '_blank')">${iconGithub} Código</button>`;
      }
    } else if (product.appUrl) {
      buttonsHtml += `<a class="btn btn-primary" href="${product.appUrl}" target="_blank" rel="noopener noreferrer"><i data-lucide="external-link"></i> Ver programa</a>`;
    }

    // Chiclets de tags (incluyendo chiclet especial 'Listo para propuesta')
    const rawTags = [...(product.tags || [])];
    if (product.readyForSale && !rawTags.includes('Listo para propuesta')) {
      rawTags.push('Listo para propuesta');
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
  updateDashboard(filtered);
}

// --- 4. Dashboard Visual Reactivo con Gráficas (Chart.js) ---
function renderDashboardStructure() {
  const dashboardContainer = document.getElementById('experiencias-dashboard');
  if (!dashboardContainer) return;

  dashboardContainer.innerHTML = `
    <div class="dashboard-header-block">
      <div class="dashboard-title-wrap">
        <span class="dashboard-eyebrow">Panel Analítico Dinámico</span>
        <h2 class="dashboard-title">Distribución y Métricas del Portafolio</h2>
        <p class="dashboard-subtitle" id="dashboard-subtitle-text">Visualización estadística en tiempo real de las experiencias filtradas.</p>
      </div>
      <div class="dashboard-actions-group">
        <button class="chiclet-btn" onclick="resetAllFilters()">
          <i data-lucide="rotate-ccw"></i> Restablecer vista
        </button>
      </div>
    </div>

    <!-- KPI Summary Grid -->
    <div class="dashboard-kpis-grid" id="dashboard-kpis-grid">
      <!-- Se llena dinámicamente -->
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
      <div class="lineas-chiclets-container" id="dashboard-lineas-pills">
        <!-- Se llena dinámicamente -->
      </div>
    </div>
  `;

  lucide.createIcons();
}

function updateDashboard(currentProducts) {
  const total = currentProducts.length;
  const grandTotal = PRODUCTS.length;
  const countSoftware = currentProducts.filter(p => p.tipo === 'Software').length;
  const countDashboards = currentProducts.filter(p => p.tipo === 'Dashboards').length;
  const countEstudios = currentProducts.filter(p => p.tipo === 'Estudios & Análisis de datos').length;
  const countEducacion = currentProducts.filter(p => p.tipo === 'Educación').length;
  const countReadyForSale = currentProducts.filter(p => p.readyForSale).length;

  const countPublico = currentProducts.filter(p => p.segment === 'Sector Público').length;
  const countPrivado = currentProducts.filter(p => p.segment === 'Sector Privado').length;
  const countTransversal = currentProducts.filter(p => p.segment === 'Transversal').length;

  const subtitleEl = document.getElementById('dashboard-subtitle-text');
  if (subtitleEl) {
    subtitleEl.textContent = total === grandTotal
      ? `Visualización estadística y composición de las ${grandTotal} experiencias del GovLab.`
      : `Mostrando estadísticas de ${total} de ${grandTotal} experiencias según los filtros aplicados.`;
  }

  // Actualizar KPIs
  const kpisGrid = document.getElementById('dashboard-kpis-grid');
  if (kpisGrid) {
    kpisGrid.innerHTML = `
      <div class="kpi-card" onclick="quickFilter('tipo', 'Todos')">
        <div class="kpi-icon-wrap kpi-icon-blue"><i data-lucide="layers"></i></div>
        <div class="kpi-data">
          <span class="kpi-number">${total}</span>
          <span class="kpi-label">Experiencias Visibles</span>
          <span class="kpi-subtext">de ${grandTotal} registradas</span>
        </div>
      </div>

      <div class="kpi-card" onclick="quickFilter('tipo', 'Software')">
        <div class="kpi-icon-wrap kpi-icon-green"><i data-lucide="code-2"></i></div>
        <div class="kpi-data">
          <span class="kpi-number">${countSoftware}</span>
          <span class="kpi-label">Software & Plataformas</span>
          <span class="kpi-subtext">${countReadyForSale} Listos para propuesta</span>
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
    `;
    lucide.createIcons();
  }

  // Conteo de Líneas
  const lineasCount = {};
  currentProducts.forEach(p => {
    if (p.linea) {
      lineasCount[p.linea] = (lineasCount[p.linea] || 0) + 1;
    }
  });

  // Actualizar Chiclets de Líneas en el Dashboard
  const lineasPillsContainer = document.getElementById('dashboard-lineas-pills');
  if (lineasPillsContainer) {
    const sortedLineas = Object.entries(lineasCount).sort((a, b) => b[1] - a[1]);
    if (sortedLineas.length === 0) {
      lineasPillsContainer.innerHTML = '<span style="font-size:0.85rem; color:var(--text-muted);">No hay líneas en la selección actual.</span>';
    } else {
      lineasPillsContainer.innerHTML = sortedLineas.map(([linea, count]) => {
        return `
          <button class="chiclet-linea-pill" onclick="quickFilter('linea', '${linea.replace(/'/g, "\\'")}')">
            <span class="pill-name">${linea}</span>
            <span class="pill-badge">${count}</span>
          </button>
        `;
      }).join('');
    }
  }

  // Actualizar Gráficas de Chart.js
  updateChartInstances(countSoftware, countDashboards, countEstudios, countEducacion, countPublico, countPrivado, countTransversal, lineasCount);
}

function updateChartInstances(soft, dash, est, edu, pub, priv, trans, lineasMap) {
  if (typeof Chart === 'undefined') return;

  // 1. Gráfico de Dona: Tipo
  const ctxTipo = document.getElementById('chart-tipo-canvas');
  if (ctxTipo) {
    if (chartTipoInstance) {
      chartTipoInstance.data.datasets[0].data = [soft, dash, est, edu];
      chartTipoInstance.update();
    } else {
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
                  const pct = total > 0 ? Math.round((val / total) * 100) : 0;
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
  }

  // 2. Gráfico de Barras: Segmentos
  const ctxSegmento = document.getElementById('chart-segmento-canvas');
  if (ctxSegmento) {
    if (chartSegmentoInstance) {
      chartSegmentoInstance.data.datasets[0].data = [pub, priv, trans];
      chartSegmentoInstance.update();
    } else {
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
  }

  // 3. Gráfico Horizontal: Líneas Estratégicas
  const ctxLinea = document.getElementById('chart-linea-canvas');
  if (ctxLinea) {
    const sortedLineas = Object.entries(lineasMap).sort((a, b) => b[1] - a[1]);
    const labels = sortedLineas.map(item => item[0]);
    const counts = sortedLineas.map(item => item[1]);

    if (chartLineaInstance) {
      chartLineaInstance.data.labels = labels;
      chartLineaInstance.data.datasets[0].data = counts;
      chartLineaInstance.update();
    } else {
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
