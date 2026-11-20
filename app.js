const F17_ITEMS = [
  { id: 'f17_01', title: '1. Caminos', desc: 'FOTOS CAMINOS, CALLES DESDE CUSTODIO HACIA SITE, INCLUYE CAMINATA HACIA CERRO' },
  { id: 'f17_02', title: '2. Edificio & Cercos', desc: 'FOTOS PANORAMICAS DEL EDIFICIO O SITE POR LOS 4 LADOS' },
  { id: 'f17_03', title: '3. Medidor & Tableros & Contadores', desc: 'FOTOS PANORAMICAS DE LOS TABLEROS, SUMINISTROS Y CONTADORES' },
  { id: 'f17_04', title: '4. Accesos & Puertas', desc: 'FOTOS DE ACCESO A EDIFICIO, PUERTAS, ESCALERAS INCLUYE LLAVES O CANDADOS' },
  { id: 'f17_05', title: '5. Base de torre & Linea de Vida', desc: 'FOTOS DE PEDESTAL DE TORRE Y BASE DE VIENTOS O ARRIOSTRES POR LOS 4 LADOS' },
  { id: 'f17_06', title: '6. Equipos en piso & Losas', desc: 'FOTOS PANORAMICOS DE GABINETES INCLUYE PLATAFORMA, MODULOS, GPS EN PISO' },
  { id: 'f17_07', title: '7. Sistema de puesta a tierra', desc: 'FOTOS DE BARRAS EN PISO Y TORRE. CABLE DE BAJADA DE ATERRAMIENTO. PARARRAYO Y CABLE DE BAJADA. POZOS TIERRA LIMPIEZA Y MEDICIONES' },
  { id: 'f17_08', title: '8. Portacables & Escalerillas rack', desc: 'FOTOS DE ESCALERILLA EN PISO Y TORRE' },
  { id: 'f17_09', title: '9. Sistema de balizamiento', desc: 'FOTOS DE FANALES, FOTOCELDA, CABLE VULCANIZADO, LIMPIEZA DE FANALES Y PRUEBA DE FUNCIONAMIENTO' },
  { id: 'f17_10', title: '10. Equipos en torre', desc: 'FOTOS PANORAMICO DE EQUIPOS, ETIQUETA, CABLES, INICIO Y FIN DE SOPORTES, MEDICION DE TUBO, ALTURA DE EQUIPO' },
  { id: 'f17_11', title: '11. Vista encima de torre', desc: 'FOTOS DE TORRES HACIA ABAJO POR LOS 4 LADOS' },
  { id: 'f17_12', title: '12. Vista panoramica de torre', desc: 'FOTOS PANORAMICO DE TORRE INCLUYE ZOOM DE AREA DE ROLDANA POR LOS 4 LADOS' },
  { id: 'f17_13', title: '13. Vista de site general', desc: 'FOTOS GENERALES, PISOS, PAREDES, EQUIPOS, LETRERO, LUMINARIAS, TOMACORRIENTES, TECHOS, SOPORTES' },
  { id: 'f17_14', title: '14. Transformadores & Postes', desc: 'FOTOS DE POSTES DE COMETIDA, FOTOS DE POSTE DE TRANSFORMADOR INCLUYE ZOOM A TRANSFORMADOR' },
  { id: 'f17_15', title: '15. Vistas de 30° encima de torre cada foto 5MB', desc: 'FOTOS EN HORIZONTAL 12 FOTOS CADA 30 GRADOS, FOTOS BARRIDO 0 A 180 Y 180 A 360 (3 RONDAS) - ALTA RESOLUCION', highRes: true },
  { id: 'f17_16', title: '16. Generadores', desc: 'FOTOS DE GENERADORES, TANQUE COMBUSTIBLE, FOTOS DE AREA DE GENERADOR' },
  { id: 'f17_17', title: '17. Estado de torre', desc: 'FOTOS DE ANGULOS, PERNERIA Y PRUEBA DE TORQUE, ESTADO DE PINTURA. VERIFICAR CORROSION Y FALTANTES' },
  { id: 'f17_18', title: '18. Vista panoramica de la estación por dentro y fuera', desc: 'FOTOS PANORAMICAS DE PAREDES POR DENTRO Y FUERA POR 4 LADOS' },
  { id: 'f17_19', title: '19. Vista de ingreso de Fibra Optica, identificar Operador, abrir cajas de pase', desc: 'FOTOS ETIQUETAR OPERADOR FIBRA OPTICA, FOTOS DE RECORRIDO, CAMARAS' },
  { id: 'f17_20', title: '20. Diagrama Unifilar desde Medidor hasta tableros', desc: 'DIBUJAR DIAGRAMA DE RECORRIDO DE SUMINISTRO ATP HACIA TABLERO ATP' },
  { id: 'f17_21', title: '21. Diagrama Unifilar de Tableros', desc: 'DIBUJAR DIAGRAMA DE RECORRIDO DE SUMINISTRO OPERADOR HACIA TABLERO OPERADOR' },
  { id: 'f17_22', title: '22. Diagrama de traslado desde Provincia al site', desc: 'ESCRIBIR EL RECORRIDO DE LA RUTA DESDE EL CUSTODIO HACIA EL SITE, ZONAS PUNTUALES Y TIEMPO' },
  { id: 'f17_23', title: '23. Vista de concertina', desc: 'FOTOS VERIFICAR CORROSION Y CORTADO DE CONCERTINA. INCLUYE REPARAR CONCERTINA. FOTO ANTES Y DESPUES' },
  { id: 'f17_24', title: '24. Vista de buzones abiertos y cerrados', desc: 'FOTOS DE BUZONES ABIERTO Y CERRADO, FIBRA OPTICA, LLAVE Y CANDADO, LIMPIEZA DE BUZONES' },
  { id: 'f17_25', title: '25. Etiquetado de llaves y video de validacion', desc: 'FOTOS DE LLAVES SUELTAS DEL MANOJO Y ETIQUETADO EN PISO. VIDEO FUNCIONAMIENTO DE LA LLAVE EN LA PUERTA PRINCIPAL DEL SITE' },
  { id: 'f17_26', title: '26. Estado de polimero, pvc, persiana, radomo, etc', desc: 'FOTOS PANORAMICA DE POLIMERO O PVC, PERNERIA, EMPALMES, PINTURA' },
  { id: 'f17_27', title: '27. Vista de luminarias en poste, site, arqueta', desc: 'FOTOS DE LUMINARIAS APAGADAS Y PRENDIDAS EN SALA EQUIPOS Y POSTE SI APLICA' },
  { id: 'f17_28', title: '28. Fotos de gestion ambiental', desc: 'FOTOS DE CHARLA Y PERSONAL CON EPPS, SEÑALIZACION, Y GESTION DE RESIDUOS, USO DE EPPS DE TECNICO' },
  { id: 'f17_29', title: '29. Fotos de cambio de bateria', desc: 'FOTOS Y VIDEOS DE PROCESO DE CAMBIO DE BATERIA, MEDICION DE BATERIA. VIDEO FUNCIONAMIENTO DE CANDADO NUEVO' }
];

const FORMATOS_ITEMS = [
  { id: 'formatos_01', title: '2. FORMATOS MP (Fotos y Documentos PDF)', desc: 'SUBIR FOTOS Y ARCHIVOS PDF DE FORMATOS DE MANTENIMIENTO PREVENTIVO', allowPdf: true }
];

const MP_ITEMS = [
  { id: 'mp_01', title: '1. Personal con EPPs & Equipos utilizados', desc: 'FOTO DE PERSONAL CON EPPS Y CHARLA DE 5 MINUTOS, EQUIPOS UTILIZADOS, TELUROMETRO PINZA, DESARMADORES, BRUJULA, ETC' },
  { id: 'mp_02', title: '2. Altura de torre', desc: 'FOTO DE ARRIBA HACIA ABAJO, DE ABAJO HACIA ARRIBA. INCLUYE ALTURA TORRE BASE, ROLDANA SUPERIOR E INFERIOR' },
  { id: 'mp_03', title: '3. Medida de pedestal', desc: 'FOTO PANORAMICA DE ALTURA, LARGO Y ANCHO' },
  { id: 'mp_04', title: '4. Limpieza de fanales', desc: 'FOTOS LIMPIEZA DE FANALES Y FOTOCELDA' },
  { id: 'mp_05', title: '5. Limpieza de pozos', desc: 'FOTOS LIMPIEZA DE POZOS TIERRA, INCLUYE PINTADO' },
  { id: 'mp_06', title: '6. Limpieza del site y Polimero', desc: 'FOTOS DE LIMPIEZA DE PISOS, PAREDES, ESCALERILLA, BASTIDORES, POLIMERO O PVC EN TORRE' },
  { id: 'mp_07', title: '7. Trabajo en contador', desc: 'FOTOS PANORAMICA, LIMPIEZA Y MEDICION DE CONTADORES' },
  { id: 'mp_08', title: '8. Aceitado en chapas y bisagras', desc: 'FOTOS DE LIMPIEZA Y ACEITADO DE CHAPAS, BISAGRAS DE TODAS LAS PUERTAS EN SITE' },
  { id: 'mp_09', title: '9. Validación de diagrama unifilar de tableros', desc: 'FOTOS DIBUJAR EN HOJA EL DIAGRAMA ACTUAL DESDE SUMINISTRO HACIA TABLEROS INCLUYE TODAS LAS LLAVES' },
  { id: 'mp_10', title: '10. Prueba de espesor', desc: 'FOTOS DE ESPESOR DE PINTURA Y GALVANIZADO EN VALOR "mils" EN VARIAS PARTES DE LA TORRE' },
  { id: 'mp_11', title: '11. Prueba de adherencia', desc: 'FOTOS DE CORTE, CINTA CERRADA, CINTA ABIERTA EN VARIAS PARTES DE LA TORRE' },
  { id: 'mp_12', title: '12. Limpieza y engrase de BT', desc: 'FOTOS ANTES, CON ESPATULA Y DESPUES ENGRASADO DE TODAS LAS BARRAS EN PISO Y TORRE' },
  { id: 'mp_13', title: '13. Mantenimiento de tableros', desc: 'FOTOS DE LIMPIEZA CON BROCHA Y TORQUE DE TODOS LOS TABLEROS EN LA ESTACION' },
  { id: 'mp_14', title: '14. Medición de tableros', desc: 'FOTOS DE MEDICIONES DE AMPERIOS (R,S,T) Y VOLTAJE (RS, RT, ST) EN I.G Y SALIDA DE EQUIPOS O TABLERO OPERADOR' },
  { id: 'mp_15', title: '15. Limpieza de pedestal', desc: 'FOTOS DE LIMPIEZA CON ESCOBA EN PEDESTAL Y BASE DE VIENTOS U ARRIOSTRES' },
  { id: 'mp_16', title: '16. Mantenimiento y medidas de equipos en piso', desc: 'FOTOS DE MANTENIMIENTO DE LIMPIEZA CON ESCOBA Y MEDICION CON WINCHA DE TODOS LOS EQUIPOS EN PISO (ANCHO, LARGO Y ALTURA)' },
  { id: 'mp_17', title: '17. Brujula', desc: 'FOTOS DE BRUJULA Y ESCRITO CON PLUMON EL AZIMUT EN LA PATA DE TORRE' },
  { id: 'mp_18', title: '18. GPS', desc: 'FOTOS PANORAMICA Y DE CERCA A GPS EN BASE DE TORRE, QUE SE NOTE LAS COORDENADAS (GRADOS, MINUTOS Y SEGUNDOS)' },
  { id: 'mp_19', title: '19. Altura de edificio', desc: 'ALTURA EDIFICIO, ALTURA PARAPETO, ALTURA ESCALERA AZOTEA' },
  { id: 'mp_20', title: '20. Uso de nivel', desc: 'FOTO PANORAMICA DE NIVEL EN MONTANTE DE TORRE, EN TORRE VENTADA, MASTIL Y AUTOSOPORTADA, MONOPOLO' },
  { id: 'mp_21', title: '21. Aplicación de spray', desc: 'FOTO APLICACION EN ACCESORIOS DE LINEA DE VIDA, ACCESORIOS DE VIENTOS, GRAMPAS Y GRILLETES SI ESTAN OXIDADOS' },
  { id: 'mp_22', title: '22. Soportes vacios en torre, mastil, altura y azimut', desc: 'FOTOS PANORAMICA DE TUBO, FOTO DE MEDIDA DE TUBO, AZIMUT, ALTURA EJE DE TUBO DE TODOS LOS SOPORTES VACIOS' },
  { id: 'mp_23', title: '23. Vistas de las coordenadas de cada arista del site', desc: 'FOTOS PANORAMICA DE GPS EN CADA ESQUINA DE SALA EQUIPOS, ESCRIBIR CON PLUMON A, B, C, D' },
  { id: 'mp_24', title: '24. Vistas de las medidas del perimetro del site', desc: 'FOTOS PANORAMICA Y CERCA DE MEDIDA DE WINCHA DE ANCHO, LARGO Y ALTURA DE SALA DE EQUIPO' },
  { id: 'mp_25', title: '25. Mantenimiento de ramas y hojas del monopolo', desc: 'FOTOS DE LIMPIEZA DE OJOS Y CAMBIO DE CINTILLO DE HOJAS EN MIMETIZADO SI APLICA' },
  { id: 'mp_26', title: '26. Mantenimiento de aires forzados y video de funcionamiento', desc: 'FOTOS DE PANORAMICA, LIMPIEZA, PLACAS, MEDICION DE INYECTOR Y EXTRACTOR, FOTOS EXTERIOR DE EXTRACTOR Y LIMPIEZA REJILLA' },
  { id: 'mp_27', title: '27. Altura soporte ocupados', desc: 'FOTOS PANORAMICA DE ALTURA DE EJE DE SOPORTES OCUPADOS. ESCRIBIR QUE OPERADOR Y EQUIPO ESTA EN ESE SOPORTE' },
  { id: 'mp_28', title: '28. Vista de Azotea', desc: 'FOTOS PANORAMICA DE AZOTEA DE PROPIETARIO POR LOS 4 LADOS' },
  { id: 'mp_29', title: '29. Vista de Limpieza exterior 4 lados', desc: 'FOTOS DE LIMPIEZA EXTERIOR, LIMPIAR BASURA Y MALEZA 1 METRO Y MEDIO APROX. FOTOS DE ANTES Y DESPUES' },
  { id: 'mp_30', title: '30. Fotos del mtto de video camara', desc: 'FOTOS DE LIMPIEZA DE CAMARA, TORQUE TABLERO, REINICIAR CAMARA SI REQUIERE, VERIFICAR FUNCIONAMIENTO CON CRISTIAN SALAZAR' }
];

const ALL_SUBFOLDERS = [...F17_ITEMS, ...FORMATOS_ITEMS, ...MP_ITEMS];
const TOTAL_SUBFOLDERS_COUNT = ALL_SUBFOLDERS.length; // 60

let db;
let projects = [];
let activeProjectId = null;
let activeTab = 'f17';
let currentUploadSubId = null;

// Cámara
let cameraStream = null;
let currentCamSubId = null;
let camSessionFiles = [];
let lastVolumeShot = 0;

// GPS
let currentCoords = 'GPS: Buscando...';
let currentPlace = 'Ubicación: Obteniendo...';

// Visor
let viewerFiles = [];
let viewerIndex = 0;

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.style.display = 'block';
  clearTimeout(t._timer);
  t._timer = setTimeout(() => { t.style.display = 'none'; }, 2600);
}

// Inicializar IndexedDB
function initDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open('ReportesSiteDB_v15', 1);
    req.onupgradeneeded = e => {
      const d = e.target.result;
      if (!d.objectStoreNames.contains('projects')) d.createObjectStore('projects', { keyPath: 'id' });
      if (!d.objectStoreNames.contains('files')) {
        const fs = d.createObjectStore('files', { keyPath: 'id' });
        fs.createIndex('projectId', 'projectId', { unique: false });
      }
    };
    req.onsuccess = e => { db = e.target.result; resolve(); };
    req.onerror = e => reject(e);
  });
}

function dbGetAllProjects() {
  return new Promise(res => {
    const tx = db.transaction('projects', 'readonly');
    const req = tx.objectStore('projects').getAll();
    req.onsuccess = () => res(req.result || []);
  });
}

function dbSaveProject(proj) {
  return new Promise(res => {
    const tx = db.transaction('projects', 'readwrite');
    tx.objectStore('projects').put(proj);
    tx.oncomplete = () => res();
  });
}

function dbDeleteProject(id) {
  return new Promise(async res => {
    const files = await dbGetProjectFiles(id);
    const tx = db.transaction(['projects', 'files'], 'readwrite');
    tx.objectStore('projects').delete(id);
    const fStore = tx.objectStore('files');
    files.forEach(f => fStore.delete(f.id));
    tx.oncomplete = () => res();
  });
}

function dbGetProjectFiles(projectId) {
  return new Promise(res => {
    const tx = db.transaction('files', 'readonly');
    const idx = tx.objectStore('files').index('projectId');
    const req = idx.getAll(projectId);
    req.onsuccess = () => res(req.result || []);
  });
}

function dbSaveFile(fileObj) {
  return new Promise(res => {
    const tx = db.transaction('files', 'readwrite');
    tx.objectStore('files').put(fileObj);
    tx.oncomplete = () => res();
  });
}

function dbDeleteFile(fileId) {
  return new Promise(res => {
    const tx = db.transaction('files', 'readwrite');
    tx.objectStore('files').delete(fileId);
    tx.oncomplete = () => res();
  });
}

// GPS y Geocodificación
function initGPS() {
  if (!navigator.geolocation) return;
  navigator.geolocation.watchPosition(async pos => {
    const lat = pos.coords.latitude.toFixed(6);
    const lon = pos.coords.longitude.toFixed(6);
    currentCoords = `${lat}, ${lon}`;
    try {
      const r = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=16`);
      const data = await r.json();
      if (data && data.address) {
        const dist = data.address.suburb || data.address.city_district || data.address.town || data.address.city || '';
        const prov = data.address.state || data.address.region || '';
        currentPlace = [dist, prov].filter(Boolean).join(', ') || 'Ubicación registrada';
      }
    } catch (_) {
      currentPlace = 'Coordenadas GPS activas';
    }
  }, () => {}, { enableHighAccuracy: true, maximumAge: 15000 });
}

// Renderizar Pantalla Inicial (Solo Carpetas Principales)
async function renderHome() {
  projects = await dbGetAllProjects();
  const list = document.getElementById('projectsList');
  if (projects.length === 0) {
    list.innerHTML = `<div style="text-align:center; color:#64748b; padding:30px 10px; font-size:0.9rem;">No hay carpetas creadas. Escribe un nombre arriba para iniciar.</div>`;
    return;
  }

  let html = '';
  for (const p of projects) {
    const files = await dbGetProjectFiles(p.id);
    const filledSubs = new Set(files.map(f => f.subId)).size;
    const pct = Math.round((filledSubs / TOTAL_SUBFOLDERS_COUNT) * 100);
    const isComplete = pct === 100;

    html += `
      <div class="project-card">
        <div class="project-top" onclick="openProject('${p.id}')">
          <div class="project-title-area">
            <div class="project-title-row">
              <span class="project-name">📁 ${escapeHtml(p.name)}</span>
              <span class="pct-badge ${isComplete ? 'complete' : ''}">${pct}% (${filledSubs}/${TOTAL_SUBFOLDERS_COUNT})</span>
            </div>
            <div class="progress-track">
              <div class="progress-fill ${isComplete ? 'complete' : ''}" style="width:${pct}%"></div>
            </div>
          </div>
          <span style="color:#0f766e; font-weight:700; font-size:0.85rem;">Abrir ›</span>
        </div>
        <div class="project-actions">
          <button class="btn btn-primary btn-sm" onclick="openProject('${p.id}')">Entrar</button>
          <button class="btn btn-outline btn-sm" onclick="renameProject('${p.id}')">Renombrar</button>
          <button class="btn btn-outline btn-sm" onclick="exportZip('${p.id}', false)">Descargar ZIP</button>
          <button class="btn btn-outline btn-sm" onclick="exportZip('${p.id}', true)">Compartir</button>
          <button class="btn btn-danger btn-sm" onclick="deleteProject('${p.id}')">Eliminar</button>
        </div>
      </div>
    `;
  }
  list.innerHTML = html;
}

async function createProject() {
  const input = document.getElementById('newProjectName');
  const name = input.value.trim();
  if (!name) { showToast('Escribe un nombre para la carpeta principal'); return; }
  const proj = { id: 'proj_' + Date.now(), name, createdAt: Date.now() };
  await dbSaveProject(proj);
  input.value = '';
  showToast('Carpeta principal creada');
  await renderHome();
}

async function renameProject(id) {
  const proj = projects.find(p => p.id === id);
  if (!proj) return;
  const nuevo = prompt('Nuevo nombre de la carpeta principal:', proj.name);
  if (nuevo && nuevo.trim()) {
    proj.name = nuevo.trim();
    await dbSaveProject(proj);
    showToast('Nombre actualizado');
    if (activeProjectId === id) {
      await renderInsideFolder();
    } else {
      await renderHome();
    }
  }
}

function renameActiveProject() {
  if (activeProjectId) renameProject(activeProjectId);
}

async function deleteProject(id) {
  const proj = projects.find(p => p.id === id);
  if (!proj) return;
  if (confirm(`¿Seguro que deseas eliminar toda la carpeta "${proj.name}" y sus fotos?`)) {
    await dbDeleteProject(id);
    showToast('Carpeta eliminada');
    await renderHome();
  }
}

// Entrar y Salir de la Carpeta Principal
async function openProject(id) {
  activeProjectId = id;
  activeTab = 'f17';
  document.getElementById('homeView').style.display = 'none';
  document.getElementById('folderView').style.display = 'block';
  updateTabButtons();
  await renderInsideFolder();
}

async function closeProject() {
  activeProjectId = null;
  document.getElementById('folderView').style.display = 'none';
  document.getElementById('homeView').style.display = 'block';
  await renderHome();
}

function switchTab(tab) {
  activeTab = tab;
  updateTabButtons();
  renderInsideFolder();
}

function updateTabButtons() {
  ['f17', 'formatos', 'mp'].forEach(t => {
    document.getElementById('tab-' + t).classList.toggle('active', activeTab === t);
  });
}

async function renderInsideFolder() {
  const proj = projects.find(p => p.id === activeProjectId);
  if (!proj) return;

  const files = await dbGetProjectFiles(proj.id);
  const filledSubs = new Set(files.map(f => f.subId)).size;
  const pct = Math.round((filledSubs / TOTAL_SUBFOLDERS_COUNT) * 100);
  const isComplete = pct === 100;

  document.getElementById('insideProjectName').textContent = proj.name;
  const badge = document.getElementById('insidePctBadge');
  badge.textContent = `${pct}% (${filledSubs}/${TOTAL_SUBFOLDERS_COUNT})`;
  badge.classList.toggle('complete', isComplete);
  const fill = document.getElementById('insideProgressFill');
  fill.style.width = `${pct}%`;
  fill.classList.toggle('complete', isComplete);

  const items = activeTab === 'f17' ? F17_ITEMS : (activeTab === 'formatos' ? FORMATOS_ITEMS : MP_ITEMS);
  const container = document.getElementById('subfoldersContainer');

  let html = '';
  for (const item of items) {
    const subFiles = files.filter(f => f.subId === item.id);
    const count = subFiles.length;

    let thumbsHtml = '';
    if (count > 0) {
      thumbsHtml = '<div class="thumbs-grid">';
      subFiles.forEach((f, idx) => {
        const url = URL.createObjectURL(f.blob);
        let media = '';
        if (f.type === 'application/pdf' || f.name.toLowerCase().endsWith('.pdf')) {
          media = `<div class="thumb-pdf">PDF<br>${escapeHtml(f.name.slice(0, 12))}</div>`;
        } else if (f.type.startsWith('video/')) {
          media = `<video src="${url}" muted></video>`;
        } else {
          media = `<img src="${url}" alt="">`;
        }
        thumbsHtml += `
          <div class="thumb-item" onclick="openViewer('${item.id}', ${idx})">
            ${media}
            <button class="thumb-del" onclick="event.stopPropagation(); confirmDeleteFile('${f.id}', '${escapeHtml(f.name)}')">×</button>
          </div>
        `;
      });
      thumbsHtml += '</div>';
    }

    html += `
      <div class="sub-card">
        <div class="sub-header">
          <div class="sub-title">${escapeHtml(item.title)}</div>
          <span class="sub-badge ${count > 0 ? 'has-files' : ''}">${count > 0 ? count + ' archivo(s)' : 'Vacía'}</span>
        </div>
        <div class="sub-desc">${escapeHtml(item.desc)}</div>
        <div class="sub-btns">
          <button class="btn btn-primary btn-sm" onclick="openCamera('${item.id}')">Tomar Foto</button>
          <button class="btn btn-outline btn-sm" onclick="triggerGallery('${item.id}', ${!!item.allowPdf})">Subir Foto</button>
        </div>
        ${thumbsHtml}
      </div>
    `;
  }
  container.innerHTML = html;
}

// Subida desde Galería
function triggerGallery(subId, allowPdf) {
  currentUploadSubId = subId;
  const input = document.getElementById('galleryInput');
  input.accept = allowPdf ? 'image/*,video/*,application/pdf' : 'image/*,video/*';
  input.value = '';
  input.click();
}

async function handleGalleryFiles(e) {
  const fileList = Array.from(e.target.files || []);
  if (!fileList.length || !activeProjectId || !currentUploadSubId) return;

  const proj = projects.find(p => p.id === activeProjectId);
  const subMeta = ALL_SUBFOLDERS.find(s => s.id === currentUploadSubId);
  const existing = (await dbGetProjectFiles(activeProjectId)).filter(f => f.subId === currentUploadSubId);
  let seq = existing.length + 1;

  for (const file of fileList) {
    let finalBlob = file;
    let ext = file.name.split('.').pop() || 'jpg';

    if (file.type.startsWith('image/')) {
      finalBlob = await processImageBlob(file, false, !!subMeta?.highRes);
      ext = 'jpg';
    }

    const cleanProjName = sanitizeName(proj.name);
    const fileName = `${cleanProjName}_${String(seq).padStart(2, '0')}.${ext}`;
    seq++;

    await dbSaveFile({
      id: 'file_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6),
      projectId: activeProjectId,
      subId: currentUploadSubId,
      name: fileName,
      type: finalBlob.type || file.type,
      blob: finalBlob,
      createdAt: Date.now()
    });
  }

  showToast(`${fileList.length} archivo(s) guardado(s)`);
  await renderInsideFolder();
}

// Cámara en Ráfaga + Botones de Volumen
async function openCamera(subId) {
  currentCamSubId = subId;
  camSessionFiles = [];
  const subMeta = ALL_SUBFOLDERS.find(s => s.id === subId);
  document.getElementById('camSubTitle').textContent = subMeta ? subMeta.title : '';
  document.getElementById('camSessionCount').textContent = '0';
  document.getElementById('camLastThumb').style.display = 'none';

  try {
    cameraStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: { ideal: 'environment' }, width: { ideal: 1920 }, height: { ideal: 1080 } },
      audio: false
    });
    const video = document.getElementById('cameraVideo');
    video.srcObject = cameraStream;
    document.getElementById('cameraModal').style.display = 'flex';
    window.addEventListener('keydown', handleVolumeKey);
  } catch (err) {
    showToast('No se pudo acceder a la cámara directa. Usa Subir Foto.');
  }
}

function handleVolumeKey(e) {
  if (e.key === 'AudioVolumeUp' || e.key === 'AudioVolumeDown' || e.key === 'VolumeUp' || e.key === 'VolumeDown') {
    e.preventDefault();
    const now = Date.now();
    if (now - lastVolumeShot > 600) {
      lastVolumeShot = now;
      capturePhoto();
    }
  }
}

function closeCamera() {
  window.removeEventListener('keydown', handleVolumeKey);
  if (cameraStream) {
    cameraStream.getTracks().forEach(t => t.stop());
    cameraStream = null;
  }
  document.getElementById('cameraModal').style.display = 'none';
  renderInsideFolder();
}

async function capturePhoto() {
  const video = document.getElementById('cameraVideo');
  if (!video || !video.videoWidth) return;

  const canvas = document.createElement('canvas');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  const proj = projects.find(p => p.id === activeProjectId);
  const subMeta = ALL_SUBFOLDERS.find(s => s.id === currentCamSubId);
  drawWatermark(ctx, canvas.width, canvas.height, proj ? proj.name : 'SITE');

  const rawBlob = await new Promise(res => canvas.toBlob(res, 'image/jpeg', 0.92));
  const finalBlob = await compressUnder1MB(rawBlob, !!subMeta?.highRes);

  const existing = (await dbGetProjectFiles(activeProjectId)).filter(f => f.subId === currentCamSubId);
  const seq = existing.length + 1;
  const cleanProjName = sanitizeName(proj.name);
  const fileName = `${cleanProjName}_${String(seq).padStart(2, '0')}.jpg`;

  const fileObj = {
    id: 'file_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6),
    projectId: activeProjectId,
    subId: currentCamSubId,
    name: fileName,
    type: 'image/jpeg',
    blob: finalBlob,
    createdAt: Date.now()
  };

  await dbSaveFile(fileObj);
  camSessionFiles.push(fileObj);

  const thumb = document.getElementById('camLastThumb');
  thumb.src = URL.createObjectURL(finalBlob);
  thumb.style.display = 'block';
  document.getElementById('camSessionCount').textContent = String(camSessionFiles.length);
  showToast(`Foto guardada: ${fileName}`);
}

function openLastCaptured() {
  if (!camSessionFiles.length) return;
  closeCamera();
  openViewer(currentCamSubId, 0);
}

// Marca de agua blanco transparente en esquina inferior derecha
function drawWatermark(ctx, w, h, projectName) {
  const now = new Date();
  const dateStr = now.toLocaleDateString('es-PE', { day: '2-digit', month: '2-digit', year: 'numeric' });
  const timeStr = now.toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  const lines = [
    projectName,
    `${dateStr} ${timeStr}`,
    currentCoords,
    currentPlace
  ];

  const fontSize = Math.max(18, Math.round(w * 0.024));
  ctx.font = `600 ${fontSize}px system-ui, sans-serif`;
  ctx.textAlign = 'right';
  ctx.textBaseline = 'bottom';

  ctx.fillStyle = '#ffffff';
  ctx.shadowColor = 'rgba(0, 0, 0, 0.85)';
  ctx.shadowBlur = 4;
  ctx.shadowOffsetX = 1;
  ctx.shadowOffsetY = 1;

  const padX = Math.round(w * 0.018);
  const padY = Math.round(h * 0.018);
  const lineHeight = Math.round(fontSize * 1.28);

  lines.reverse().forEach((line, i) => {
    ctx.fillText(line, w - padX, h - padY - (i * lineHeight));
  });
}

async function processImageBlob(file, addWatermark, highRes) {
  const img = await createImageBitmap(file);
  const canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  const blob = await new Promise(res => canvas.toBlob(res, 'image/jpeg', 0.92));
  return compressUnder1MB(blob, highRes);
}

async function compressUnder1MB(blob, highRes) {
  if (highRes || blob.size <= 1024 * 1024) return blob;
  const img = await createImageBitmap(blob);
  let scale = 0.85;
  let current = blob;

  while (current.size > 1024 * 1024 && scale > 0.3) {
    const canvas = document.createElement('canvas');
    canvas.width = Math.round(img.width * scale);
    canvas.height = Math.round(img.height * scale);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    current = await new Promise(res => canvas.toBlob(res, 'image/jpeg', 0.82));
    scale -= 0.15;
  }
  return current;
}

// Visor Deslizable y Borrado con Confirmación
async function openViewer(subId, index) {
  const files = (await dbGetProjectFiles(activeProjectId)).filter(f => f.subId === subId);
  if (!files.length) return;
  viewerFiles = files;
  viewerIndex = Math.max(0, Math.min(index, files.length - 1));
  document.getElementById('viewerModal').style.display = 'flex';
  renderViewerSlide();
}

function renderViewerSlide() {
  if (!viewerFiles.length) { closeViewer(); return; }
  if (viewerIndex >= viewerFiles.length) viewerIndex = viewerFiles.length - 1;
  if (viewerIndex < 0) viewerIndex = 0;

  const f = viewerFiles[viewerIndex];
  document.getElementById('viewerCounter').textContent = `${viewerIndex + 1} / ${viewerFiles.length}`;
  document.getElementById('viewerName').textContent = f.name;

  const url = URL.createObjectURL(f.blob);
  const box = document.getElementById('viewerContent');
  if (f.type === 'application/pdf' || f.name.toLowerCase().endsWith('.pdf')) {
    box.innerHTML = `<div style="text-align:center;"><p style="margin-bottom:12px;">Documento PDF: ${escapeHtml(f.name)}</p><a href="${url}" target="_blank" class="btn btn-primary">Abrir PDF</a></div>`;
  } else if (f.type.startsWith('video/')) {
    box.innerHTML = `<video src="${url}" controls autoplay></video>`;
  } else {
    box.innerHTML = `<img src="${url}" alt="">`;
  }
}

function navigateViewer(dir) {
  viewerIndex += dir;
  if (viewerIndex < 0) viewerIndex = viewerFiles.length - 1;
  if (viewerIndex >= viewerFiles.length) viewerIndex = 0;
  renderViewerSlide();
}

async function deleteCurrentViewerFile() {
  const f = viewerFiles[viewerIndex];
  if (!f) return;
  if (confirm(`¿Seguro que deseas eliminar "${f.name}"?`)) {
    await dbDeleteFile(f.id);
    viewerFiles.splice(viewerIndex, 1);
    showToast('Archivo eliminado');
    renderViewerSlide();
    await renderInsideFolder();
  }
}

async function confirmDeleteFile(fileId, fileName) {
  if (confirm(`¿Seguro que deseas eliminar "${fileName}"?`)) {
    await dbDeleteFile(fileId);
    showToast('Archivo eliminado');
    await renderInsideFolder();
  }
}

function closeViewer() {
  document.getElementById('viewerModal').style.display = 'none';
  renderInsideFolder();
}

// Gestos táctiles izquierda/derecha en visor
let touchStartX = 0;
document.getElementById('viewerTouchArea').addEventListener('touchstart', e => {
  touchStartX = e.changedTouches[0].screenX;
});
document.getElementById('viewerTouchArea').addEventListener('touchend', e => {
  const diff = e.changedTouches[0].screenX - touchStartX;
  if (Math.abs(diff) > 45) navigateViewer(diff < 0 ? 1 : -1);
});

// Exportar y Compartir ZIP con NO_APLICA.png en carpetas vacías
async function exportZip(projectId, shareMode) {
  const proj = projects.find(p => p.id === projectId);
  if (!proj) return;

  showToast('Generando archivo ZIP...');
  const zip = new JSZip();
  const rootFolder = zip.folder(sanitizeName(proj.name));
  const files = await dbGetProjectFiles(projectId);

  let noAplicaBlob = null;
  try {
    const resp = await fetch('no_aplica.png');
    if (resp.ok) noAplicaBlob = await resp.blob();
  } catch (_) {}

  const addSectionToZip = (parentZipFolder, itemsList) => {
    for (const item of itemsList) {
      const subFolder = parentZipFolder.folder(sanitizeName(item.title));
      const subFiles = files.filter(f => f.subId === item.id);
      if (subFiles.length === 0) {
        if (noAplicaBlob) subFolder.file('NO_APLICA.png', noAplicaBlob);
      } else {
        subFiles.forEach(f => subFolder.file(f.name, f.blob));
      }
    }
  };

  addSectionToZip(rootFolder.folder('1. F17-CARPETA DE FOTOS'), F17_ITEMS);

  const formatosFolder = rootFolder.folder('2. FORMATOS MP');
  const formatosFiles = files.filter(f => f.subId === 'formatos_01');
  if (formatosFiles.length === 0) {
    if (noAplicaBlob) formatosFolder.file('NO_APLICA.png', noAplicaBlob);
  } else {
    formatosFiles.forEach(f => formatosFolder.file(f.name, f.blob));
  }

  addSectionToZip(rootFolder.folder('3. MANTENIMIENTO PREVENTIVO'), MP_ITEMS);

  const zipBlob = await zip.generateAsync({ type: 'blob' });
  const zipName = `${sanitizeName(proj.name)}.zip`;

  if (shareMode && navigator.share && navigator.canShare) {
    const zipFile = new File([zipBlob], zipName, { type: 'application/zip' });
    if (navigator.canShare({ files: [zipFile] })) {
      try {
        await navigator.share({ files: [zipFile], title: zipName });
        return;
      } catch (_) {}
    }
  }

  const a = document.createElement('a');
  a.href = URL.createObjectURL(zipBlob);
  a.download = zipName;
  a.click();
  showToast(shareMode ? 'ZIP guardado en Descargas para compartir' : 'ZIP descargado');
}

function sanitizeName(str) {
  return str.replace(/[\\/:*?"<>|]/g, '_').trim();
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
}

window.addEventListener('DOMContentLoaded', async () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
  await initDB();
  initGPS();
  await renderHome();
});