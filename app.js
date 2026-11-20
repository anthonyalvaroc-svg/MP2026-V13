const F17_ITEMS = [
  ["1. Caminos", "FOTOS CAMINOS, CALLES DESDE CUSTODIO HACIA SITE, INCLUYE CAMINATA HACIA CERRO"],
  ["2. Edificio & Cercos", "FOTOS PANORAMICAS DEL EDIFICIO O SITE POR LOS 4 LADOS"],
  ["3. Medidor & Tableros & Contadores", "FOTOS PANORAMICAS DE LOS TABLEROS, SUMINISTROS Y CONTADORES"],
  ["4. Accesos & Puertas", "FOTOS DE ACCESO A EDIFICIO, PUERTAS, ESCALERAS INCLUYE LLAVES O CANDADOS"],
  ["5. Base de torre & Linea de Vida", "FOTOS DE PEDESTAL DE TORRE Y BASE DE VIENTOS O ARRIOSTRES POR LOS 4 LADOS"],
  ["6. Equipos en piso & Losas", "FOTOS PANORAMICOS DE GABINETES INCLUYE PLATAFORMA, MODULOS, GPS EN PISO"],
  ["7. Sistema de puesta a tierra", "FOTOS DE BARRAS EN PISO Y TORRE, CABLE DE BAJADA DE ATERRAMIENTO, PARARRAYO, POZOS TIERRA LIMPIEZA Y MEDICIONES"],
  ["8. Portacables & Escalerillas rack", "FOTOS DE ESCALERILLA EN PISO Y TORRE"],
  ["9. Sistema de balizamiento", "FOTOS DE FANALES, FOTOCELDA, CABLE VULCANIZADO, LIMPIEZA DE FANALES Y PRUEBA DE FUNCIONAMIENTO"],
  ["10. Equipos en torre", "FOTOS PANORAMICO DE EQUIPOS, ETIQUETA, CABLES, INICIO Y FIN DE SOPORTES, MEDICION DE TUBO, ALTURA DE EQUIPO"],
  ["11. Vista encima de torre", "FOTOS DE TORRES HACIA ABAJO POR LOS 4 LADOS"],
  ["12. Vista panoramica de torre", "FOTOS PANORAMICO DE TORRE INCLUYE ZOOM DE AREA DE ROLDANA POR LOS 4 LADOS"],
  ["13. Vista de site general", "FOTOS GENERALES, PISOS, PAREDES, EQUIPOS, LETRERO, LUMINARIAS, TOMACORRIENTES, TECHOS, SOPORTES"],
  ["14. Transformadores & Postes", "FOTOS DE POSTES DE COMETIDA, FOTOS DE POSTE DE TRANSFORMADOR INCLUYE ZOOM A TRANSFORMADOR"],
  ["15. Vistas de 30° encima de torre cada foto 5MB", "FOTOS EN HORIZONTAL 12 FOTOS CADA 30 GRADOS, FOTOS BARRIDO 0 A 180 Y 180 A 360 (3 RONDAS) - ALTA RESOLUCION"],
  ["16. Generadores", "FOTOS DE GENERADORES, TANQUE COMBUSTIBLE, FOTOS DE AREA DE GENERADOR"],
  ["17. Estado de torre", "FOTOS DE ANGULOS, PERNERIA Y PRUEBA DE TORQUE, ESTADO DE PINTURA, VERIFICAR CORROSION Y FALTANTES"],
  ["18. Vista panoramica de la estación por dentro y fuera", "FOTOS PANORAMICAS DE PAREDES POR DENTRO Y FUERA POR 4 LADOS"],
  ["19. Vista de ingreso de Fibra Optica, identificar Operador, abrir cajas de pase", "FOTOS ETIQUETAR OPERADOR FIBRA OPTICA, FOTOS DE RECORRIDO, CAMARAS"],
  ["20. Diagrama Unifilar desde Medidor hasta tableros", "DIBUJAR DIAGRAMA DE RECORRIDO DE SUMINISTRO ATP HACIA TABLERO ATP"],
  ["21. Diagrama Unifilar de Tableros", "DIBUJAR DIAGRAMA DE RECORRIDO DE SUMINISTRO OPERADOR HACIA TABLERO OPERADOR"],
  ["22. Diagrama de traslado desde Provincia al site", "ESCRIBIR EL RECORRIDO DE LA RUTA DESDE EL CUSTODIO HACIA EL SITE, ZONAS PUNTUALES Y TIEMPO"],
  ["23. Vista de concertina", "FOTOS VERIFICAR CORROSION Y CORTADO DE CONCERTINA, INCLUYE REPARAR CONCERTINA, FOTO ANTES Y DESPUES"],
  ["24. Vista de buzones abiertos y cerrados", "FOTOS DE BUZONES ABIERTO Y CERRADO, FIBRA OPTICA, LLAVE Y CANDADO, LIMPIEZA DE BUZONES"],
  ["25. Etiquetado de llaves y video de validacion", "FOTOS DE LLAVES SUELTAS DEL MANOJO Y ETIQUETADO EN PISO, VIDEO FUNCIONAMIENTO DE LA LLAVE EN PUERTA PRINCIPAL"],
  ["26. Estado de polimero, pvc, persiana, radomo, etc", "FOTOS PANORAMICA DE POLIMERO O PVC, PERNERIA, EMPALMES, PINTURA"],
  ["27. Vista de luminarias en poste, site, arqueta", "FOTOS DE LUMINARIAS APAGADAS Y PRENDIDAS EN SALA EQUIPOS Y POSTE SI APLICA"],
  ["28. Fotos de gestion ambiental", "FOTOS DE CHARLA Y PERSONAL CON EPPS, SEÑALIZACION Y GESTION DE RESIDUOS, USO DE EPPS DE TECNICO"],
  ["29. Fotos de cambio de batería", "FOTOS Y VIDEOS DE PROCESO DE CAMBIO DE BATERIA, MEDICION DE BATERIA, VIDEO FUNCIONAMIENTO DE CANDADO NUEVO"]
];

const MP_ITEMS = [
  ["1. Personal con EPPs & Equipos utilizados", "FOTO DE PERSONAL CON EPPS Y CHARLA DE 5 MINUTOS, EQUIPOS UTILIZADOS, TELUROMETRO PINZA, DESARMADORES, BRUJULA, ETC"],
  ["2. Altura de torre", "FOTO DE ARRIBA HACIA ABAJO, DE ABAJO HACIA ARRIBA, INCLUYE ALTURA TORRE BASE, ROLDANA SUPERIOR E INFERIOR"],
  ["3. Medida de pedestal", "FOTO PANORAMICA DE ALTURA, LARGO Y ANCHO"],
  ["4. Limpieza de fanales", "FOTOS LIMPIEZA DE FANALES Y FOTOCELDA"],
  ["5. Limpieza de pozos", "FOTOS LIMPIEZA DE POZOS TIERRA, INCLUYE PINTADO"],
  ["6. Limpieza del site y Polimero", "FOTOS DE LIMPIEZA DE PISOS, PAREDES, ESCALERILLA, BASTIDORES, POLIMERO O PVC EN TORRE"],
  ["7. Trabajo en contador", "FOTOS PANORAMICA, LIMPIEZA Y MEDICION DE CONTADORES"],
  ["8. Aceitado en chapas y bisagras", "FOTOS DE LIMPIEZA Y ACEITADO DE CHAPAS, BISAGRAS DE TODAS LAS PUERTAS EN SITE"],
  ["9. Validación de diagrama unifilar de tableros", "FOTOS DIBUJAR EN HOJA EL DIAGRAMA ACTUAL DESDE SUMINISTRO HACIA TABLEROS INCLUYE TODAS LAS LLAVES"],
  ["10. Prueba de espesor", "FOTOS DE ESPESOR DE PINTURA Y GALVANIZADO EN VALOR mils EN VARIAS PARTES DE LA TORRE"],
  ["11. Prueba de adherencia", "FOTOS DE CORTE, CINTA CERRADA, CINTA ABIERTA EN VARIAS PARTES DE LA TORRE"],
  ["12. Limpieza y engrase de BT", "FOTOS ANTES, CON ESPATULA Y DESPUES ENGRASADO DE TODAS LAS BARRAS EN PISO Y TORRE"],
  ["13. Mantenimiento de tableros", "FOTOS DE LIMPIEZA CON BROCHA Y TORQUE DE TODOS LOS TABLEROS EN LA ESTACION"],
  ["14. Medición de tableros", "FOTOS DE MEDICIONES DE AMPERIOS (R,S,T) Y VOLTAJE (RS, RT, ST) EN I.G Y SALIDA DE EQUIPOS O TABLERO OPERADOR"],
  ["15. Limpieza de pedestal", "FOTOS DE LIMPIEZA CON ESCOBA EN PEDESTAL Y BASE DE VIENTOS U ARRIOSTRES"],
  ["16. Mantenimiento y medidas de equipos en piso", "FOTOS DE MANTENIMIENTO DE LIMPIEZA CON ESCOBA Y MEDICION CON WINCHA DE TODOS LOS EQUIPOS EN PISO (ANCHO, LARGO Y ALTURA)"],
  ["17. Brujula", "FOTOS DE BRUJULA Y ESCRITO CON PLUMON EL AZIMUT EN LA PATA DE TORRE"],
  ["18. GPS", "FOTOS PANORAMICA Y DE CERCA A GPS EN BASE DE TORRE, QUE SE NOTE LAS COORDENADAS (GRADOS, MINUTOS Y SEGUNDOS)"],
  ["19. Altura de edificio", "ALTURA EDIFICIO, ALTURA PARAPETO, ALTURA ESCALERA AZOTEA"],
  ["20. Uso de nivel", "FOTO PANORAMICA DE NIVEL EN MONTANTE DE TORRE, EN TORRE VENTADA, MASTIL Y AUTOSOPORTADA, MONOPOLO"],
  ["21. Aplicación de spray", "FOTO APLICACION EN ACCESORIOS DE LINEA DE VIDA, ACCESORIOS DE VIENTOS, GRAMPAS Y GRILLETES SI ESTAN OXIDADOS"],
  ["22. Soportes vacios en torre, mastil, altura y azimut", "FOTOS PANORAMICA DE TUBO, FOTO DE MEDIDA DE TUBO, AZIMUT, ALTURA EJE DE TUBO DE TODOS LOS SOPORTES VACIOS"],
  ["23. Vistas de las cordenadas de cada arista del site", "FOTOS PANORAMICA DE GPS EN CADA ESQUINA DE SALA EQUIPOS, ESCRIBIR CON PLUMON A, B, C, D"],
  ["24. Vistas de las medidas del perimetro del site", "FOTOS PANORAMICA Y CERCA DE MEDIDA DE WINCHA DE ANCHO, LARGO Y ALTURA DE SALA DE EQUIPO"],
  ["25. Mantenimiento de ramas y hojas del monopolo", "FOTOS DE LIMPIEZA DE OJOS Y CAMBIO DE CINTILLO DE HOJAS EN MIMETIZADO SI APLICA"],
  ["26. Mantenimiento de aires forzados y video de funcionamiento", "FOTOS DE PANORAMICA, LIMPIEZA, PLACAS, MEDICION DE INYECTOR Y EXTRACTOR, FOTOS EXTERIOR DE EXTRACTOR Y LIMPIEZA REJILLA"],
  ["27. Altura soporte ocupados", "FOTOS PANORAMICA DE ALTURA DE EJE DE SOPORTES OCUPADOS, ESCRIBIR QUE OPERADOR Y EQUIPO ESTA EN ESE SOPORTE"],
  ["28. Vista de Azotea", "FOTOS PANORAMICA DE AZOTEA DE PROPIETARIO POR LOS 4 LADOS"],
  ["29. Vista de Limpieza exterior 4 lados", "FOTOS DE LIMPIEZA EXTERIOR, LIMPIAR BASURA Y MALEZA 1 METRO Y MEDIO APROX, FOTOS DE ANTES Y DESPUES"],
  ["30. Fotos del mtto de video camara", "FOTOS DE LIMPIEZA DE CAMARA, TORQUE TABLERO, REINICIAR CAMARA SI REQUIERE, VERIFICAR FUNCIONAMIENTO"]
];

const TOTAL_SLOTS = 60; // 29 + 1 + 30
let db = null;
let useFallbackStorage = false;
let memProjects = [];
let memFiles = [];
let activeProjectId = null;
let activeTab = 'f17';
let pendingSubId = null;
let burstActive = false;
let currentGps = { lat: null, lon: null, place: 'Ubicación GPS' };
let viewerList = [];
let viewerIdx = 0;

function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.style.display = 'block';
  clearTimeout(el._t);
  el._t = setTimeout(() => { el.style.display = 'none'; }, 3000);
}

// Dual storage initialization (IndexedDB with automatic fallback to localStorage/memory)
function initDB() {
  return new Promise(resolve => {
    try {
      if (!window.indexedDB) throw new Error('No IDB');
      const req = indexedDB.open('ReporteATP_DB_v15_9', 1);
      req.onupgradeneeded = e => {
        const d = e.target.result;
        if (!d.objectStoreNames.contains('projects')) d.createObjectStore('projects', { keyPath: 'id' });
        if (!d.objectStoreNames.contains('files')) {
          const fs = d.createObjectStore('files', { keyPath: 'id' });
          fs.createIndex('projectId', 'projectId', { unique: false });
        }
      };
      req.onsuccess = e => { db = e.target.result; resolve(); };
      req.onerror = () => { loadFallback(); resolve(); };
    } catch (err) {
      loadFallback();
      resolve();
    }
  });
}

function loadFallback() {
  useFallbackStorage = true;
  try {
    memProjects = JSON.parse(localStorage.getItem('atp_projects') || '[]');
  } catch (e) { memProjects = []; }
}

function saveFallbackProjects() {
  try { localStorage.setItem('atp_projects', JSON.stringify(memProjects)); } catch (e) {}
}

function dbGetProjects() {
  if (useFallbackStorage || !db) return Promise.resolve([...memProjects]);
  return new Promise(resolve => {
    try {
      const tx = db.transaction('projects', 'readonly');
      const req = tx.objectStore('projects').getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => resolve([...memProjects]);
    } catch (e) { resolve([...memProjects]); }
  });
}

function dbPutProject(proj) {
  if (useFallbackStorage || !db) {
    const idx = memProjects.findIndex(p => p.id === proj.id);
    if (idx >= 0) memProjects[idx] = proj; else memProjects.push(proj);
    saveFallbackProjects();
    return Promise.resolve();
  }
  return new Promise(resolve => {
    try {
      const tx = db.transaction('projects', 'readwrite');
      tx.objectStore('projects').put(proj);
      tx.oncomplete = () => resolve();
      tx.onerror = () => {
        loadFallback();
        dbPutProject(proj).then(resolve);
      };
    } catch (e) {
      loadFallback();
      dbPutProject(proj).then(resolve);
    }
  });
}

function dbDeleteProject(id) {
  if (useFallbackStorage || !db) {
    memProjects = memProjects.filter(p => p.id !== id);
    memFiles = memFiles.filter(f => f.projectId !== id);
    saveFallbackProjects();
    return Promise.resolve();
  }
  return new Promise(resolve => {
    const tx = db.transaction(['projects', 'files'], 'readwrite');
    tx.objectStore('projects').delete(id);
    const idx = tx.objectStore('files').index('projectId');
    idx.openCursor(IDBKeyRange.only(id)).onsuccess = e => {
      const cursor = e.target.result;
      if (cursor) { cursor.delete(); cursor.continue(); }
    };
    tx.oncomplete = () => resolve();
  });
}

function dbGetFilesByProject(projectId) {
  if (useFallbackStorage || !db) {
    return Promise.resolve(memFiles.filter(f => f.projectId === projectId));
  }
  return new Promise(resolve => {
    try {
      const tx = db.transaction('files', 'readonly');
      const idx = tx.objectStore('files').index('projectId');
      const req = idx.getAll(IDBKeyRange.only(projectId));
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => resolve(memFiles.filter(f => f.projectId === projectId));
    } catch (e) { resolve(memFiles.filter(f => f.projectId === projectId)); }
  });
}

function dbAddFile(fileObj) {
  if (useFallbackStorage || !db) {
    memFiles.push(fileObj);
    return Promise.resolve();
  }
  return new Promise(resolve => {
    try {
      const tx = db.transaction('files', 'readwrite');
      tx.objectStore('files').put(fileObj);
      tx.oncomplete = () => resolve();
      tx.onerror = () => { memFiles.push(fileObj); resolve(); };
    } catch (e) { memFiles.push(fileObj); resolve(); }
  });
}

function dbDeleteFile(fileId) {
  if (useFallbackStorage || !db) {
    memFiles = memFiles.filter(f => f.id !== fileId);
    return Promise.resolve();
  }
  return new Promise(resolve => {
    const tx = db.transaction('files', 'readwrite');
    tx.objectStore('files').delete(fileId);
    tx.oncomplete = () => resolve();
  });
}

// GPS Tracking
function initGPS() {
  if (!navigator.geolocation) return;
  navigator.geolocation.getCurrentPosition(pos => {
    currentGps.lat = pos.coords.latitude.toFixed(6);
    currentGps.lon = pos.coords.longitude.toFixed(6);
    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${currentGps.lat}&lon=${currentGps.lon}`)
      .then(r => r.json())
      .then(d => {
        if (d && d.address) {
          const a = d.address;
          currentGps.place = [a.suburb || a.neighbourhood || a.village || a.town || a.city, a.state || a.country].filter(Boolean).join(', ');
        }
      }).catch(() => {});
  }, () => {}, { enableHighAccuracy: true, timeout: 8000 });
}

// Stamp Watermark & Optimize (<1MB except F17-15)
function processImage(file, projectName, applyWatermark, keepHighRes) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = ev => {
      const img = new Image();
      img.onload = () => {
        let w = img.width;
        let h = img.height;
        if (!keepHighRes) {
          const maxDim = 1600;
          if (w > maxDim || h > maxDim) {
            if (w > h) { h = Math.round(h * maxDim / w); w = maxDim; }
            else { w = Math.round(w * maxDim / h); h = maxDim; }
          }
        }
        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, w, h);

        if (applyWatermark) {
          const now = new Date();
          const fecha = now.toLocaleDateString('es-PE');
          const hora = now.toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
          const coords = currentGps.lat ? `${currentGps.lat}, ${currentGps.lon}` : 'GPS no disponible';
          const lines = [
            projectName,
            `${fecha} ${hora}`,
            coords,
            currentGps.place
          ];
          const fontSize = Math.max(16, Math.round(w * 0.024));
          ctx.font = `bold ${fontSize}px sans-serif`;
          ctx.textAlign = 'right';
          ctx.textBaseline = 'bottom';
          ctx.fillStyle = '#ffffff';
          ctx.shadowColor = 'rgba(0,0,0,0.85)';
          ctx.shadowBlur = 4;
          ctx.shadowOffsetX = 1;
          ctx.shadowOffsetY = 1;

          const padX = Math.round(w * 0.015);
          const padY = Math.round(h * 0.015);
          const lineHeight = Math.round(fontSize * 1.25);

          for (let i = 0; i < lines.length; i++) {
            const line = lines[lines.length - 1 - i];
            ctx.fillText(line, w - padX, h - padY - (i * lineHeight));
          }
        }

        let quality = keepHighRes ? 0.95 : 0.82;
        const exportBlob = () => {
          canvas.toBlob(blob => {
            if (!blob) return reject(new Error('Error al generar imagen'));
            if (!keepHighRes && blob.size > 980 * 1024 && quality > 0.45) {
              quality -= 0.12;
              exportBlob();
            } else {
              resolve(blob);
            }
          }, 'image/jpeg', quality);
        };
        exportBlob();
      };
      img.onerror = reject;
      img.src = ev.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function sanitizeName(str) {
  return str.replace(/[^a-zA-Z0-9_\-\.]/g, '_').replace(/_+/g, '_');
}

// Render Home (Only Main Folders)
async function renderHome() {
  document.getElementById('homeView').classList.remove('hidden');
  document.getElementById('projectView').classList.add('hidden');
  const projects = await dbGetProjects();
  const list = document.getElementById('projectsList');
  list.innerHTML = '';

  if (projects.length === 0) {
    list.innerHTML = '<div style="text-align:center; color:var(--muted); padding:30px 10px; font-size:0.9rem;">No hay carpetas creadas. Escribe un nombre arriba y presiona <b>+ Crear Carpeta</b>.</div>';
    return;
  }

  for (const proj of projects.sort((a, b) => b.createdAt - a.createdAt)) {
    const files = await dbGetFilesByProject(proj.id);
    const filledSlots = new Set(files.map(f => f.subId)).size;
    const pct = Math.min(100, Math.round((filledSlots / TOTAL_SLOTS) * 100));
    const isDone = pct === 100;

    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <div class="project-top" style="cursor:pointer;" data-open="${proj.id}">
        <div class="project-title">${proj.name}</div>
        <span class="progress-badge ${isDone ? 'done' : ''}">${pct}% (${filledSlots}/${TOTAL_SLOTS})</span>
      </div>
      <div class="progress-bar-bg">
        <div class="progress-bar-fill ${isDone ? 'done' : ''}" style="width:${pct}%"></div>
      </div>
      <div class="project-actions">
        <button class="btn-primary" data-open="${proj.id}">Entrar</button>
        <button class="btn-outline" data-rename="${proj.id}">Renombrar</button>
        <button class="btn-secondary" data-zip="${proj.id}">Descargar ZIP</button>
        <button class="btn-outline" data-share="${proj.id}">Compartir</button>
        <button class="btn-danger" data-del="${proj.id}">Borrar</button>
      </div>
    `;
    list.appendChild(card);
  }
}

// Open Project Interior
async function openProject(id) {
  activeProjectId = id;
  document.getElementById('homeView').classList.add('hidden');
  document.getElementById('projectView').classList.remove('hidden');
  await renderProjectDetail();
}

async function renderProjectDetail() {
  const projects = await dbGetProjects();
  const proj = projects.find(p => p.id === activeProjectId);
  if (!proj) return renderHome();

  const files = await dbGetFilesByProject(proj.id);
  const filledSlots = new Set(files.map(f => f.subId)).size;
  const pct = Math.min(100, Math.round((filledSlots / TOTAL_SLOTS) * 100));

  document.getElementById('activeProjectTitle').textContent = proj.name;
  document.getElementById('activeProjectStats').textContent = `Avance: ${pct}% (${filledSlots}/${TOTAL_SLOTS} carpetas)`;

  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.tab === activeTab);
  });

  const container = document.getElementById('subfoldersList');
  container.innerHTML = '';

  let items = [];
  if (activeTab === 'f17') {
    items = F17_ITEMS.map((it, i) => ({ subId: `f17_${i+1}`, title: it[0], desc: it[1], allowPdf: false }));
  } else if (activeTab === 'formatos') {
    items = [{ subId: 'formatos_1', title: '2. FORMATOS MP', desc: 'Subir fotografías y archivos PDF de formatos de mantenimiento preventivo.', allowPdf: true }];
  } else {
    items = MP_ITEMS.map((it, i) => ({ subId: `mp_${i+1}`, title: it[0], desc: it[1], allowPdf: false }));
  }

  for (const item of items) {
    const subFiles = files.filter(f => f.subId === item.subId);
    const card = document.createElement('div');
    card.className = 'sub-card';
    card.innerHTML = `
      <div class="sub-header">
        <div class="sub-title">${item.title}</div>
        <span class="sub-count ${subFiles.length ? 'has-files' : ''}">${subFiles.length ? subFiles.length + ' arch.' : 'Vacía'}</span>
      </div>
      <div class="sub-desc">${item.desc}</div>
      <div class="sub-btns">
        <button class="btn-primary" data-cam="${item.subId}">Tomar Foto</button>
        <button class="btn-outline" data-gal="${item.subId}" data-pdf="${item.allowPdf ? '1' : '0'}">Subir Foto${item.allowPdf ? ' / PDF' : ''}</button>
      </div>
      <div class="thumbs" id="thumbs_${item.subId}"></div>
    `;
    container.appendChild(card);

    const thumbGrid = card.querySelector(`#thumbs_${item.subId}`);
    subFiles.forEach((f, idx) => {
      const t = document.createElement('div');
      t.className = 'thumb-item';
      const url = URL.createObjectURL(f.blob);
      if (f.type.startsWith('image/')) {
        t.innerHTML = `<img src="${url}" alt="${f.name}" /><button class="thumb-del" data-delfile="${f.id}">×</button>`;
      } else if (f.type.startsWith('video/')) {
        t.innerHTML = `<video src="${url}"></video><button class="thumb-del" data-delfile="${f.id}">×</button>`;
      } else {
        t.innerHTML = `<div class="thumb-pdf">PDF<br>${f.name.slice(0, 12)}</div><button class="thumb-del" data-delfile="${f.id}">×</button>`;
      }
      t.addEventListener('click', ev => {
        if (ev.target.dataset.delfile) return;
        openViewer(subFiles, idx);
      });
      thumbGrid.appendChild(t);
    });
  }
}

// Handle Captured or Uploaded Files
async function handleIncomingFiles(fileList, subId, fromCamera) {
  if (!fileList || fileList.length === 0) return;
  const projects = await dbGetProjects();
  const proj = projects.find(p => p.id === activeProjectId);
  if (!proj) return;

  const existing = (await dbGetFilesByProject(proj.id)).filter(f => f.subId === subId);
  let counter = existing.length + 1;
  const keepHighRes = (subId === 'f17_15');
  const cleanProjName = sanitizeName(proj.name);

  toast('Procesando archivo(s)...');
  for (const rawFile of Array.from(fileList)) {
    const ext = rawFile.name.includes('.') ? rawFile.name.split('.').pop().toLowerCase() : 'jpg';
    const seq = String(counter).padStart(2, '0');
    const finalName = `${cleanProjName}_${seq}.${rawFile.type.startsWith('image/') ? 'jpg' : ext}`;
    counter++;

    let finalBlob = rawFile;
    let finalType = rawFile.type || 'application/octet-stream';

    if (rawFile.type.startsWith('image/')) {
      try {
        finalBlob = await processImage(rawFile, proj.name, fromCamera, keepHighRes);
        finalType = 'image/jpeg';
      } catch (e) {
        finalBlob = rawFile;
      }
    }

    await dbAddFile({
      id: `${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
      projectId: proj.id,
      subId,
      name: finalName,
      type: finalType,
      blob: finalBlob
    });
  }

  await renderProjectDetail();
  toast('Guardado correctamente');

  if (fromCamera && burstActive) {
    setTimeout(() => {
      if (confirm('¿Tomar otra foto seguida en esta carpeta?')) {
        const cam = document.getElementById('nativeCamInput');
        cam.value = '';
        cam.click();
      } else {
        burstActive = false;
      }
    }, 300);
  }
}

// Native Pure-JS ZIP Generator (Zero external network dependencies, works offline & in APK)
const crcTable = (() => {
  const t = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    t[i] = c;
  }
  return t;
})();

function crc32(uint8) {
  let crc = 0xffffffff;
  for (let i = 0; i < uint8.length; i++) crc = crcTable[(crc ^ uint8[i]) & 0xff] ^ (crc >>> 8);
  return (crc ^ 0xffffffff) >>> 0;
}

async function buildProjectZipBlob(projectId) {
  const projects = await dbGetProjects();
  const proj = projects.find(p => p.id === projectId);
  const files = await dbGetFilesByProject(projectId);
  const rootFolder = sanitizeName(proj.name);

  let noAplicaBytes = new Uint8Array(0);
  try {
    const resp = await fetch('no_aplica.png');
    noAplicaBytes = new Uint8Array(await resp.arrayBuffer());
  } catch (e) {}

  const entries = [];
  const addEntry = (path, uint8) => {
    entries.push({ path, data: uint8, crc: crc32(uint8) });
  };

  // 1. F17-CARPETA DE FOTOS
  for (let i = 0; i < F17_ITEMS.length; i++) {
    const subId = `f17_${i+1}`;
    const folderPath = `${rootFolder}/1. F17-CARPETA DE FOTOS/${F17_ITEMS[i][0]}`;
    const subFiles = files.filter(f => f.subId === subId);
    if (subFiles.length === 0) {
      addEntry(`${folderPath}/NO_APLICA.png`, noAplicaBytes);
    } else {
      for (const f of subFiles) {
        addEntry(`${folderPath}/${f.name}`, new Uint8Array(await f.blob.arrayBuffer()));
      }
    }
  }

  // 2. FORMATOS MP
  const fMpPath = `${rootFolder}/2. FORMATOS MP`;
  const fMpFiles = files.filter(f => f.subId === 'formatos_1');
  if (fMpFiles.length === 0) {
    addEntry(`${fMpPath}/NO_APLICA.png`, noAplicaBytes);
  } else {
    for (const f of fMpFiles) {
      addEntry(`${fMpPath}/${f.name}`, new Uint8Array(await f.blob.arrayBuffer()));
    }
  }

  // 3. MANTENIMIENTO PREVENTIVO
  for (let i = 0; i < MP_ITEMS.length; i++) {
    const subId = `mp_${i+1}`;
    const folderPath = `${rootFolder}/3. MANTENIMIENTO PREVENTIVO/${MP_ITEMS[i][0]}`;
    const subFiles = files.filter(f => f.subId === subId);
    if (subFiles.length === 0) {
      addEntry(`${folderPath}/NO_APLICA.png`, noAplicaBytes);
    } else {
      for (const f of subFiles) {
        addEntry(`${folderPath}/${f.name}`, new Uint8Array(await f.blob.arrayBuffer()));
      }
    }
  }

  // Assemble uncompressed STORE ZIP structure
  const enc = new TextEncoder();
  const localParts = [];
  const centralParts = [];
  let offset = 0;

  for (const ent of entries) {
    const nameBytes = enc.encode(ent.path);
    const size = ent.data.length;

    const lfh = new Uint8Array(30 + nameBytes.length);
    const lv = new DataView(lfh.buffer);
    lv.setUint32(0, 0x04034b50, true);
    lv.setUint16(4, 20, true);
    lv.setUint16(6, 0x0800, true); // UTF-8
    lv.setUint16(8, 0, true); // STORE
    lv.setUint32(14, ent.crc, true);
    lv.setUint32(18, size, true);
    lv.setUint32(22, size, true);
    lv.setUint16(26, nameBytes.length, true);
    lfh.set(nameBytes, 30);

    localParts.push(lfh, ent.data);

    const cdh = new Uint8Array(46 + nameBytes.length);
    const cv = new DataView(cdh.buffer);
    cv.setUint32(0, 0x02014b50, true);
    cv.setUint16(4, 20, true);
    cv.setUint16(6, 20, true);
    cv.setUint16(8, 0x0800, true);
    cv.setUint16(10, 0, true);
    cv.setUint32(16, ent.crc, true);
    cv.setUint32(20, size, true);
    cv.setUint32(24, size, true);
    cv.setUint16(28, nameBytes.length, true);
    cv.setUint32(42, offset, true);
    cdh.set(nameBytes, 46);

    centralParts.push(cdh);
    offset += lfh.length + size;
  }

  const cdSize = centralParts.reduce((a, b) => a + b.length, 0);
  const eocd = new Uint8Array(22);
  const ev = new DataView(eocd.buffer);
  ev.setUint32(0, 0x06054b50, true);
  ev.setUint16(8, entries.length, true);
  ev.setUint16(10, entries.length, true);
  ev.setUint32(12, cdSize, true);
  ev.setUint32(16, offset, true);

  return {
    filename: `${rootFolder}.zip`,
    blob: new Blob([...localParts, ...centralParts, eocd], { type: 'application/zip' })
  };
}

async function triggerZipExport(projectId, shareMode) {
  toast('Generando archivo ZIP...');
  try {
    const { filename, blob } = await buildProjectZipBlob(projectId);
    if (shareMode && navigator.canShare) {
      const file = new File([blob], filename, { type: 'application/zip' });
      if (navigator.canShare({ files: [file] })) {
        await navigator.share({ files: [file], title: filename });
        return;
      }
    }
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 5000);
    toast(`Descargado: ${filename}`);
  } catch (err) {
    toast('Error al generar ZIP: ' + err.message);
  }
}

// Fullscreen Carousel Viewer
function openViewer(files, index) {
  viewerList = files;
  viewerIdx = index;
  document.getElementById('viewerModal').style.display = 'flex';
  renderViewerSlide();
}

function renderViewerSlide() {
  if (viewerList.length === 0) {
    document.getElementById('viewerModal').style.display = 'none';
    return;
  }
  if (viewerIdx < 0) viewerIdx = viewerList.length - 1;
  if (viewerIdx >= viewerList.length) viewerIdx = 0;

  const f = viewerList[viewerIdx];
  document.getElementById('viewerCounter').textContent = `${viewerIdx + 1} / ${viewerList.length}`;
  document.getElementById('viewerName').textContent = f.name;
  const content = document.getElementById('viewerContent');
  const url = URL.createObjectURL(f.blob);

  if (f.type.startsWith('image/')) {
    content.innerHTML = `<img src="${url}" />`;
  } else if (f.type.startsWith('video/')) {
    content.innerHTML = `<video src="${url}" controls autoplay></video>`;
  } else {
    content.innerHTML = `<div style="color:#fff; text-align:center; padding:20px;"><p style="margin-bottom:12px;">Documento PDF: ${f.name}</p><a href="${url}" target="_blank" style="background:#0f766e; color:#fff; padding:10px 16px; border-radius:8px; text-decoration:none;">Abrir PDF</a></div>`;
  }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', async () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
  await initDB();
  initGPS();
  await renderHome();

  document.getElementById('btnCreateProject').addEventListener('click', async () => {
    const input = document.getElementById('newProjectName');
    const name = input.value.trim();
    if (!name) {
      toast('Escribe un nombre para la carpeta principal');
      input.focus();
      return;
    }
    const proj = { id: 'proj_' + Date.now(), name, createdAt: Date.now() };
    await dbPutProject(proj);
    input.value = '';
    await renderHome();
    toast('Carpeta creada');
  });

  document.getElementById('projectsList').addEventListener('click', async e => {
    const openId = e.target.closest('[data-open]')?.dataset.open;
    if (openId) return openProject(openId);

    const renId = e.target.dataset.rename;
    if (renId) {
      const projects = await dbGetProjects();
      const proj = projects.find(p => p.id === renId);
      const nuevo = prompt('Nuevo nombre de la carpeta principal:', proj.name);
      if (nuevo && nuevo.trim()) {
        proj.name = nuevo.trim();
        await dbPutProject(proj);
        await renderHome();
        toast('Nombre actualizado');
      }
      return;
    }

    const zipId = e.target.dataset.zip;
    if (zipId) return triggerZipExport(zipId, false);

    const shareId = e.target.dataset.share;
    if (shareId) return triggerZipExport(shareId, true);

    const delId = e.target.dataset.del;
    if (delId) {
      if (confirm('¿Seguro que deseas eliminar esta carpeta y todas sus fotos?')) {
        await dbDeleteProject(delId);
        await renderHome();
        toast('Carpeta eliminada');
      }
    }
  });

  document.getElementById('btnBackHome').addEventListener('click', renderHome);
  document.getElementById('btnQuickZip').addEventListener('click', () => triggerZipExport(activeProjectId, false));

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeTab = btn.dataset.tab;
      renderProjectDetail();
    });
  });

  document.getElementById('subfoldersList').addEventListener('click', async e => {
    const camSub = e.target.dataset.cam;
    if (camSub) {
      pendingSubId = camSub;
      burstActive = true;
      const cam = document.getElementById('nativeCamInput');
      cam.value = '';
      cam.click();
      return;
    }

    const galSub = e.target.dataset.gal;
    if (galSub) {
      pendingSubId = galSub;
      burstActive = false;
      const gal = document.getElementById('galleryInput');
      gal.accept = e.target.dataset.pdf === '1' ? 'image/*,application/pdf' : 'image/*,video/*';
      gal.value = '';
      gal.click();
      return;
    }

    const delFileId = e.target.dataset.delfile;
    if (delFileId) {
      if (confirm('¿Seguro que deseas eliminar este archivo?')) {
        await dbDeleteFile(delFileId);
        await renderProjectDetail();
        toast('Archivo eliminado');
      }
    }
  });

  document.getElementById('nativeCamInput').addEventListener('change', e => {
    handleIncomingFiles(e.target.files, pendingSubId, true);
  });

  document.getElementById('galleryInput').addEventListener('change', e => {
    handleIncomingFiles(e.target.files, pendingSubId, false);
  });

  document.getElementById('viewerCloseBtn').addEventListener('click', () => {
    document.getElementById('viewerModal').style.display = 'none';
  });
  document.getElementById('viewerPrevBtn').addEventListener('click', () => { viewerIdx--; renderViewerSlide(); });
  document.getElementById('viewerNextBtn').addEventListener('click', () => { viewerIdx++; renderViewerSlide(); });
  document.getElementById('viewerDeleteBtn').addEventListener('click', async () => {
    const f = viewerList[viewerIdx];
    if (f && confirm(`¿Seguro que deseas eliminar "${f.name}"?`)) {
      await dbDeleteFile(f.id);
      viewerList.splice(viewerIdx, 1);
      renderViewerSlide();
      await renderProjectDetail();
      toast('Archivo eliminado');
    }
  });

  let touchStartX = 0;
  const touchArea = document.getElementById('viewerTouchArea');
  touchArea.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; });
  touchArea.addEventListener('touchend', e => {
    const diff = e.changedTouches[0].screenX - touchStartX;
    if (diff > 45) { viewerIdx--; renderViewerSlide(); }
    else if (diff < -45) { viewerIdx++; renderViewerSlide(); }
  });
});
