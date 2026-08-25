# generate_full_app_js.py
import json

with open("products_data.json", "r", encoding="utf-8") as f:
    products = json.load(f)

with open("medios_data.json", "r", encoding="utf-8") as f:
    medios = json.load(f)

js_content = """// app.js - GovLab Portafolio
const PRODUCTS_FALLBACK = """ + json.dumps(products, ensure_ascii=False, indent=2) + """;
let PRODUCTS = [...PRODUCTS_FALLBACK];

// Datos de Medios (Fallback offline / carga dinámica desde medios/medios.csv)
const MEDIOS_FALLBACK = """ + json.dumps(medios, ensure_ascii=False, indent=2) + """;

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
  const lines = text.split(/\\r?\\n/).filter(l => l.trim() !== '');
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

// --- Carga dinámica de Productos (Directamente desde products_data.json) ---
async function loadProducts() {
  try {
    const response = await fetch('products_data.json?v=' + Date.now(), { cache: 'no-store' });
    if (response.ok) {
      const data = await response.json();
      if (Array.isArray(data) && data.length > 0) {
        PRODUCTS = data;
      }
    }
  } catch (e) {
    console.info('Carga de products_data.json vía fetch no disponible (modo offline), usando base integrada.');
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  await loadProducts();
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
        const waMsg = encodeURIComponent(`Hola, me contacto desde el portafolio del GovLab. Estoy interesado en conocer más y solicitar información o demostración sobre ${product.name}.`);
        const waUrl = `https://wa.me/573158905940?text=${waMsg}`;
        buttonsHtml += `<button class="btn btn-primary" onclick="window.open('${waUrl}', '_blank')"><i data-lucide="message-square"></i> Contáctanos</button>`;
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

      // Botón secundario de Video si ya tiene botón principal de App o Contacto
      if ((product.appUrl || product.name.includes('Clínica') || product.name.includes('Notaria') || product.name.includes('Notaría')) && product.videoUrl) {
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
      return `<span class="${tagClass}" onclick="filterByTag('${t.replace(/'/g, "\\\\'")}')">${t}</span>`;
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
        ${lineaBadgeText ? `<span class="linea-badge" onclick="filterByLinea('${lineaBadgeText.replace(/'/g, "\\\\'")}')">${lineaBadgeText}</span>` : ''}
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
          <button class="chiclet-linea-pill" onclick="quickFilter('linea', '${linea.replace(/'/g, "\\\\'")}')">
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
"""

with open("app.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print("Generated app.js with dynamic, reactive dashboard linked to filters!")
