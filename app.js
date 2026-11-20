const F17_SUBS = [
  ["1. Caminos", "FOTOS CAMINOS, CALLES DESDE CUSTODIO HACIA SITE, INCLUYE CAMINATA HACIA CERRO"],
  ["2. Edificio & Cercos", "FOTOS PANORAMICAS DEL EDIFICIO O SITE POR LOS 4 LADOS"],
  ["3. Medidor & Tableros & Contadores", "FOTOS PANORAMICAS DE LOS TABLEROS, SUMINISTROS Y CONTADORES"],
  ["4. Accesos & Puertas", "FOTOS DE ACCESO A EDIFICIO, PUERTAS, ESCALERAS INCLUYE LLAVES O CANDADOS"],
  ["5. Base de torre & Linea de Vida", "FOTOS DE PEDESTAL DE TORRE Y BASE DE VIENTOS O ARRIOSTRES POR LOS 4 LADOS"],
  ["6. Equipos en piso & Losas", "FOTOS PANORAMICOS DE GABINETES INCLUYE PLATAFORMA, MODULOS, GPS EN PISO"],
  ["7. Sistema de puesta a tierra", "FOTOS DE BARRAS EN PISO Y TORRE, CABLE DE BAJADA DE ATERRAMIENTO, PARARRAYO, POZOS TIERRA"],
  ["8. Portacables & Escalerillas rack", "FOTOS DE ESCALERILLA EN PISO Y TORRE"],
  ["9. Sistema de balizamiento", "FOTOS DE FANALES, FOTOCELDA, CABLE VULCANIZADO, LIMPIEZA DE FANALES"],
  ["10. Equipos en torre", "FOTOS PANORAMICO DE EQUIPOS, ETIQUETA, CABLES, INICIO Y FIN DE SOPORTES, MEDICION DE TUBO"],
  ["11. Vista encima de torre", "FOTOS DE TORRES HACIA ABAJO POR LOS 4 LADOS"],
  ["12. Vista panoramica de torre", "FOTOS PANORAMICO DE TORRE INCLUYE ZOOM DE AREA DE ROLDANA POR LOS 4 LADOS"],
  ["13. Vista de site general", "FOTOS GENERALES, PISOS, PAREDES, EQUIPOS, LETRERO, LUMINARIAS, TOMACORRIENTES"],
  ["14. Transformadores & Postes", "FOTOS DE POSTES DE COMETIDA, FOTOS DE POSTE DE TRANSFORMADOR INCLUYE ZOOM"],
  ["15. Vistas de 30° encima de torre cada foto 5MB", "FOTOS EN HORIZONTAL 12 FOTOS CADA 30 GRADOS, BARRIDO 0 A 180 Y 180 A 360 (ALTA RESOLUCIÓN)"],
  ["16. Generadores", "FOTOS DE GENERADORES, TANQUE COMBUSTIBLE, FOTOS DE AREA DE GENERADOR"],
  ["17. Estado de torre", "FOTOS DE ANGULOS, PERNERIA Y PRUEBA DE TORQUE, ESTADO DE PINTURA, CORROSION"],
  ["18. Vista panoramica de la estación por dentro y fuera", "FOTOS PANORAMICAS DE PAREDES POR DENTRO Y FUERA POR 4 LADOS"],
  ["19. Vista de ingreso de Fibra Optica", "FOTOS ETIQUETAR OPERADOR FIBRA OPTICA, RECORRIDO, CAJAS DE PASE"],
  ["20. Diagrama Unifilar desde Medidor hasta tableros", "DIBUJAR DIAGRAMA DE RECORRIDO DE SUMINISTRO ATP HACIA TABLERO ATP"],
  ["21. Diagrama Unifilar de Tableros", "DIBUJAR DIAGRAMA DE RECORRIDO DE SUMINISTRO OPERADOR HACIA TABLERO OPERADOR"],
  ["22. Diagrama de traslado desde Provincia al site", "ESCRIBIR EL RECORRIDO DE LA RUTA DESDE EL CUSTODIO HACIA EL SITE"],
  ["23. Vista de concertina", "FOTOS VERIFICAR CORROSION Y CORTADO DE CONCERTINA, ANTES Y DESPUES"],
  ["24. Vista de buzones abiertos y cerrados", "FOTOS DE BUZONES ABIERTO Y CERRADO, FIBRA OPTICA, LLAVE Y CANDADO"],
  ["25. Etiquetado de llaves y video de validacion", "FOTOS DE LLAVES SUELTAS DEL MANOJO Y ETIQUETADO EN PISO, VIDEO EN PUERTA"],
  ["26. Estado de polimero, pvc, persiana, radomo, etc", "FOTOS PANORAMICA DE POLIMERO O PVC, PERNERIA, EMPALMES, PINTURA"],
  ["27. Vista de luminarias en poste, site, arqueta", "FOTOS DE LUMINARIAS APAGADAS Y PRENDIDAS EN SALA EQUIPOS Y POSTE"],
  ["28. Fotos de gestion ambiental", "FOTOS DE CHARLA Y PERSONAL CON EPPS, SEÑALIZACION Y GESTION DE RESIDUOS"],
  ["29. Fotos de cambio de batería", "FOTOS Y VIDEOS DE PROCESO DE CAMBIO DE BATERIA, MEDICION Y CANDADO"]
];

const MP_SUBS = [
  ["1. Personal con EPPs & Equipos utilizados", "FOTO DE PERSONAL CON EPPS Y CHARLA DE 5 MINUTOS, EQUIPOS UTILIZADOS"],
  ["2. Altura de torre", "FOTO DE ARRIBA HACIA ABAJO, DE ABAJO HACIA ARRIBA, ROLDANA SUPERIOR E INFERIOR"],
  ["3. Medida de pedestal", "FOTO PANORAMICA DE ALTURA, LARGO Y ANCHO"],
  ["4. Limpieza de fanales", "FOTOS LIMPIEZA DE FANALES Y FOTOCELDA"],
  ["5. Limpieza de pozos", "FOTOS LIMPIEZA DE POZOS TIERRA, INCLUYE PINTADO"],
  ["6. Limpieza del site y Polimero", "FOTOS DE LIMPIEZA DE PISOS, PAREDES, ESCALERILLA, BASTIDORES, POLIMERO"],
  ["7. Trabajo en contador", "FOTOS PANORAMICA, LIMPIEZA Y MEDICION DE CONTADORES"],
  ["8. Aceitado en chapas y bisagras", "FOTOS DE LIMPIEZA Y ACEITADO DE CHAPAS, BISAGRAS DE TODAS LAS PUERTAS"],
  ["9. Validación de diagrama unifilar de tableros", "FOTOS DIBUJAR EN HOJA EL DIAGRAMA ACTUAL DESDE SUMINISTRO HACIA TABLEROS"],
  ["10. Prueba de espesor", "FOTOS DE ESPESOR DE PINTURA Y GALVANIZADO EN VALOR MILS"],
  ["11. Prueba de adherencia", "FOTOS DE CORTE, CINTA CERRADA, CINTA ABIERTA EN VARIAS PARTES DE LA TORRE"],
  ["12. Limpieza y engrase de BT", "FOTOS ANTES, CON ESPATULA Y DESPUES ENGRASADO DE TODAS LAS BARRAS"],
  ["13. Mantenimiento de tableros", "FOTOS DE LIMPIEZA CON BROCHA Y TORQUE DE TODOS LOS TABLEROS"],
  ["14. Medición de tableros", "FOTOS DE MEDICIONES DE AMPERIOS (R,S,T) Y VOLTAJE (RS,RT,ST)"],
  ["15. Limpieza de pedestal", "FOTOS DE LIMPIEZA CON ESCOBA EN PEDESTAL Y BASE DE VIENTOS"],
  ["16. Mantenimiento y medidas de equipos en piso", "FOTOS DE LIMPIEZA Y MEDICION CON WINCHA (ANCHO, LARGO Y ALTURA)"],
  ["17. Brujula", "FOTOS DE BRUJULA Y ESCRITO CON PLUMON EL AZIMUT EN LA PATA DE TORRE"],
  ["18. GPS", "FOTOS PANORAMICA Y DE CERCA A GPS EN BASE DE TORRE (GRADOS, MINUTOS, SEGUNDOS)"],
  ["19. Altura de edificio", "ALTURA EDIFICIO, ALTURA PARAPETO, ALTURA ESCALERA AZOTEA"],
  ["20. Uso de nivel", "FOTO PANORAMICA DE NIVEL EN MONTANTE DE TORRE, MASTIL, MONOPOLO"],
  ["21. Aplicación de spray", "FOTO APLICACION EN ACCESORIOS DE LINEA DE VIDA, VIENTOS, GRAMPAS"],
  ["22. Soportes vacios en torre, mastil, altura y azimut", "FOTOS PANORAMICA DE TUBO, MEDIDA, AZIMUT, ALTURA EJE DE TUBO"],
  ["23. Vistas de las cordenadas de cada arista del site", "FOTOS PANORAMICA DE GPS EN CADA ESQUINA A, B, C, D"],
  ["24. Vistas de las medidas del perimetro del site", "FOTOS PANORAMICA Y CERCA DE MEDIDA CON WINCHA DE SALA DE EQUIPO"],
  ["25. Mantenimiento de ramas y hojas del monopolo", "FOTOS DE LIMPIEZA DE OJOS Y CAMBIO DE CINTILLO DE HOJAS"],
  ["26. Mantenimiento de aires forzados y video", "FOTOS PANORAMICA, LIMPIEZA, PLACAS, MEDICION INYECTOR Y EXTRACTOR"],
  ["27. Altura soporte ocupados", "FOTOS PANORAMICA DE ALTURA DE EJE DE SOPORTES OCUPADOS Y OPERADOR"],
  ["28. Vista de Azotea", "FOTOS PANORAMICA DE AZOTEA DE PROPIETARIO POR LOS 4 LADOS"],
  ["29. Vista de Limpieza exterior 4 lados", "FOTOS DE LIMPIEZA EXTERIOR 1.5M ANTES Y DESPUES"],
  ["30. Fotos del mtto de video camara", "FOTOS DE LIMPIEZA DE CAMARA, TORQUE TABLERO, VERIFICAR FUNCIONAMIENTO"]
];

const SECTIONS = [
  { id: "f17", name: "1. F17-CARPETA DE FOTOS", items: F17_SUBS.map((s, i) => ({ subId: `f17_${i+1}`, title: s[0], desc: s[1], highRes: i === 14 })) },
  { id: "fmt", name: "2. FORMATOS MP", items: [{ subId: "fmt_1", title: "Documentos y Formatos MP", desc: "Subir fotos o archivos PDF de formatos de mantenimiento", highRes: false }] },
  { id: "mp", name: "3. MANTENIMIENTO PREVENTIVO", items: MP_SUBS.map((s, i) => ({ subId: `mp_${i+1}`, title: s[0], desc: s[1], highRes: false })) }
];

const TOTAL_SUBS = 60;
let db = null;
let currentProjectId = null;
let currentTab = "f17";
let activeSubId = null;
let activeHighRes = false;
let mediaStream = null;
let sessionCount = 0;
let lastBurstBlobUrl = null;
let gpsText = "GPS pendiente";
let placeText = "Ubicación en campo";
let viewerItems = [];
let viewerIdx = 0;
let lastShotTime = 0;

function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.style.display = "block";
  clearTimeout(t._timer);
  t._timer = setTimeout(() => { t.style.display = "none"; }, 2800);
}

function initDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open("ATP_MP_DB_V15", 1);
    req.onupgradeneeded = e => {
      const d = e.target.result;
      if (!d.objectStoreNames.contains("projects")) d.createObjectStore("projects", { keyPath: "id" });
      if (!d.objectStoreNames.contains("files")) {
        const fs = d.createObjectStore("files", { keyPath: "id" });
        fs.createIndex("projectId", "projectId", { unique: false });
      }
    };
    req.onsuccess = e => { db = e.target.result; resolve(); };
    req.onerror = e => reject(e);
  });
}

function getAllProjects() {
  return new Promise(res => {
    const tx = db.transaction("projects", "readonly");
    tx.objectStore("projects").getAll().onsuccess = e => res(e.target.result || []);
  });
}

function getProjectFiles(projectId) {
  return new Promise(res => {
    const tx = db.transaction("files", "readonly");
    tx.objectStore("files").index("projectId").getAll(projectId).onsuccess = e => res(e.target.result || []);
  });
}

function updateGeo() {
  if (!navigator.geolocation) return;
  navigator.geolocation.getCurrentPosition(pos => {
    const lat = pos.coords.latitude.toFixed(6);
    const lon = pos.coords.longitude.toFixed(6);
    gpsText = `${lat}, ${lon}`;
    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`)
      .then(r => r.json())
      .then(d => {
        if (d && d.address) {
          placeText = d.address.city || d.address.town || d.address.suburb || d.address.state || "Perú";
        }
      }).catch(() => {});
  }, () => {}, { enableHighAccuracy: true, timeout: 5000 });
}

async function createProject() {
  const input = document.getElementById("newProjectName");
  const name = input.value.trim();
  if (!name) return showToast("Escribe el nombre del Site primero");
  const id = "proj_" + Date.now();
  const tx = db.transaction("projects", "readwrite");
  tx.objectStore("projects").put({ id, name, createdAt: Date.now() });
  tx.oncomplete = () => {
    input.value = "";
    renderProjects();
    showToast("Carpeta creada");
  };
}

async function renameProject(id) {
  const projects = await getAllProjects();
  const p = projects.find(x => x.id === id);
  if (!p) return;
  const nuevo = prompt("Nuevo nombre de carpeta principal:", p.name);
  if (!nuevo || !nuevo.trim()) return;
  p.name = nuevo.trim();
  const tx = db.transaction("projects", "readwrite");
  tx.objectStore("projects").put(p);
  tx.oncomplete = () => renderProjects();
}

async function deleteProject(id) {
  if (!confirm("¿Eliminar toda esta carpeta y sus fotos?")) return;
  const files = await getProjectFiles(id);
  const tx = db.transaction(["projects", "files"], "readwrite");
  tx.objectStore("projects").delete(id);
  files.forEach(f => tx.objectStore("files").delete(f.id));
  tx.oncomplete = () => renderProjects();
}

async function renderProjects() {
  const list = document.getElementById("projectsList");
  const projects = await getAllProjects();
  if (!projects.length) {
    list.innerHTML = `<div class="card" style="text-align:center; color:#64748b; font-size:0.88rem;">Crea una carpeta principal arriba para iniciar el reporte.</div>`;
    return;
  }
  let html = "";
  for (const p of projects.sort((a, b) => b.createdAt - a.createdAt)) {
    const files = await getProjectFiles(p.id);
    const filled = new Set(files.map(f => f.subId)).size;
    const pct = Math.round((filled / TOTAL_SUBS) * 100);
    html += `
      <div class="card">
        <div class="project-header">
          <div class="project-title" onclick="openProject('${p.id}')">${p.name}</div>
          <div class="progress-wrap">
            <div class="progress-text">${pct}% (${filled}/${TOTAL_SUBS})</div>
            <div class="progress-bar"><div class="progress-fill ${pct === 100 ? 'complete' : ''}" style="width:${pct}%"></div></div>
          </div>
        </div>
        <div class="actions-row">
          <button class="btn-primary" onclick="openProject('${p.id}')">Entrar</button>
          <button class="btn-secondary" onclick="renameProject('${p.id}')">Renombrar</button>
          <button class="btn-dark" onclick="exportZip('${p.id}', false)">Descargar ZIP</button>
          <button class="btn-secondary" onclick="exportZip('${p.id}', true)">Compartir</button>
          <button class="btn-danger" onclick="deleteProject('${p.id}')">Eliminar</button>
        </div>
        <div id="shareBox_${p.id}" style="margin-top:8px;"></div>
      </div>`;
  }
  list.innerHTML = html;
}

async function openProject(id) {
  currentProjectId = id;
  document.getElementById("mainView").style.display = "none";
  document.getElementById("detailView").style.display = "block";
  updateGeo();
  await renderDetail();
}

function closeProject() {
  currentProjectId = null;
  document.getElementById("detailView").style.display = "none";
  document.getElementById("mainView").style.display = "block";
  renderProjects();
}

async function renderDetail() {
  const projects = await getAllProjects();
  const p = projects.find(x => x.id === currentProjectId);
  if (!p) return closeProject();
  document.getElementById("detailTitle").textContent = p.name;

  const files = await getProjectFiles(currentProjectId);
  const filled = new Set(files.map(f => f.subId)).size;
  const pct = Math.round((filled / TOTAL_SUBS) * 100);
  document.getElementById("detailProgressText").textContent = `${pct}% (${filled}/${TOTAL_SUBS} carpetas con evidencia)`;
  const fillEl = document.getElementById("detailProgressFill");
  fillEl.style.width = `${pct}%`;
  fillEl.className = `progress-fill ${pct === 100 ? 'complete' : ''}`;

  const tabsBar = document.getElementById("tabsBar");
  tabsBar.innerHTML = SECTIONS.map(s => `
    <button class="tab-btn ${currentTab === s.id ? 'active' : ''}" onclick="switchTab('${s.id}')">${s.name}</button>
  `).join("");

  const sec = SECTIONS.find(s => s.id === currentTab);
  const container = document.getElementById("subfoldersList");
  container.innerHTML = sec.items.map(item => {
    const subFiles = files.filter(f => f.subId === item.subId);
    const badge = subFiles.length
      ? `<span class="badge-count">${subFiles.length} archivo(s)</span>`
      : `<span class="badge-empty">Vacía → NO APLICA</span>`;
    const thumbs = subFiles.map((f, idx) => {
      const url = URL.createObjectURL(f.blob);
      const isImg = f.type.startsWith("image/");
      return `
        <div class="thumb-box" onclick="openViewer('${item.subId}', ${idx})">
          ${isImg ? `<img src="${url}" />` : `<span style="font-size:0.7rem; font-weight:700; text-align:center; padding:4px;">${f.name}</span>`}
          <button class="thumb-del" onclick="event.stopPropagation(); deleteFile('${f.id}')">×</button>
        </div>`;
    }).join("");

    return `
      <div class="sub-card">
        <div class="sub-title"><span>${item.title}</span>${badge}</div>
        <div class="sub-desc">${item.desc}</div>
        <div style="display:flex; gap:8px;">
          <button class="btn-primary" style="flex:1;" onclick="startBurstCamera('${item.subId}', ${item.highRes})">Tomar Foto</button>
          <button class="btn-secondary" style="flex:1;" onclick="triggerUpload('${item.subId}', ${item.highRes})">Subir Foto</button>
        </div>
        ${subFiles.length ? `<div class="thumbs">${thumbs}</div>` : ""}
      </div>`;
  }).join("");
}

function switchTab(tabId) {
  currentTab = tabId;
  renderDetail();
}

// --- BURST CAMERA + VOLUME BUTTONS + NATIVE FALLBACK ---
async function startBurstCamera(subId, highRes) {
  activeSubId = subId;
  activeHighRes = highRes;
  sessionCount = 0;
  document.getElementById("camCountBadge").textContent = "0";
  document.getElementById("camPreviewImg").style.display = "none";
  updateGeo();

  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    return fallbackNativeCamera();
  }

  try {
    mediaStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: { ideal: "environment" }, width: { ideal: 1920 }, height: { ideal: 1080 } },
      audio: false
    });
    const video = document.getElementById("cameraVideo");
    video.srcObject = mediaStream;
    await video.play();
    document.getElementById("cameraModal").style.display = "flex";
  } catch (err) {
    showToast("Abriendo cámara del sistema...");
    fallbackNativeCamera();
  }
}

function fallbackNativeCamera() {
  closeCamera();
  const inp = document.getElementById("hiddenNativeCamInput");
  inp.value = "";
  inp.click();
}

function closeCamera() {
  if (mediaStream) {
    mediaStream.getTracks().forEach(t => t.stop());
    mediaStream = null;
  }
  document.getElementById("cameraModal").style.display = "none";
  renderDetail();
}

// Volume buttons trigger burst shutter
window.addEventListener("keydown", e => {
  const modal = document.getElementById("cameraModal");
  if (modal.style.display === "flex") {
    if (e.key === "AudioVolumeUp" || e.key === "AudioVolumeDown" || e.key === "VolumeUp" || e.key === "VolumeDown" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      captureBurstFrame();
    }
  }
});

async function captureBurstFrame() {
  const now = Date.now();
  if (now - lastShotTime < 350) return;
  lastShotTime = now;

  const video = document.getElementById("cameraVideo");
  if (!video.videoWidth) return;

  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  const stampedBlob = await applyWatermarkAndCompress(canvas, activeHighRes);
  await saveFileRecord(activeSubId, stampedBlob, "image/jpeg");

  sessionCount++;
  document.getElementById("camCountBadge").textContent = sessionCount;
  if (lastBurstBlobUrl) URL.revokeObjectURL(lastBurstBlobUrl);
  lastBurstBlobUrl = URL.createObjectURL(stampedBlob);
  const prevImg = document.getElementById("camPreviewImg");
  prevImg.src = lastBurstBlobUrl;
  prevImg.style.display = "block";
  showToast(`Foto #${sessionCount} guardada`);
}

async function handleNativeCamCapture(e) {
  const file = e.target.files[0];
  if (!file) return;
  const blob = await processImageFile(file, activeHighRes, true);
  await saveFileRecord(activeSubId, blob, "image/jpeg");
  await renderDetail();
  showToast("Foto guardada");
}

function triggerUpload(subId, highRes) {
  activeSubId = subId;
  activeHighRes = highRes;
  const inp = document.getElementById("hiddenUploadInput");
  inp.accept = subId === "fmt_1" ? "image/*,application/pdf" : "image/*,video/*";
  inp.value = "";
  inp.click();
}

async function handleFileUpload(e) {
  const files = Array.from(e.target.files || []);
  if (!files.length) return;
  showToast(`Procesando ${files.length} archivo(s)...`);
  for (const f of files) {
    if (f.type.startsWith("image/")) {
      const processed = await processImageFile(f, activeHighRes, false);
      await saveFileRecord(activeSubId, processed, "image/jpeg", f.name);
    } else {
      await saveFileRecord(activeSubId, f, f.type || "application/octet-stream", f.name);
    }
  }
  await renderDetail();
  showToast(`${files.length} archivo(s) guardado(s)`);
}

function processImageFile(file, highRes, addWatermark) {
  return new Promise(resolve => {
    const img = new Image();
    img.onload = async () => {
      const canvas = document.createElement("canvas");
      let w = img.width;
      let h = img.height;
      const maxDim = highRes ? 4096 : 1600;
      if (w > maxDim || h > maxDim) {
        if (w > h) { h = Math.round(h * (maxDim / w)); w = maxDim; }
        else { w = Math.round(w * (maxDim / h)); h = maxDim; }
      }
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, w, h);
      if (addWatermark) {
        resolve(await applyWatermarkAndCompress(canvas, highRes));
      } else {
        resolve(await compressCanvas(canvas, highRes));
      }
    };
    img.src = URL.createObjectURL(file);
  });
}

async function applyWatermarkAndCompress(canvas, highRes) {
  const projects = await getAllProjects();
  const p = projects.find(x => x.id === currentProjectId);
  const siteName = p ? p.name : "SITE";
  const now = new Date();
  const dateStr = now.toLocaleDateString("es-PE") + " " + now.toLocaleTimeString("es-PE");

  const ctx = canvas.getContext("2d");
  const fontSize = Math.max(18, Math.round(canvas.width * 0.024));
  ctx.font = `bold ${fontSize}px sans-serif`;
  ctx.textAlign = "right";
  ctx.fillStyle = "#ffffff";
  ctx.shadowColor = "rgba(0,0,0,0.85)";
  ctx.shadowBlur = 4;
  ctx.shadowOffsetX = 1;
  ctx.shadowOffsetY = 1;

  const pad = Math.round(fontSize * 0.8);
  const lineH = Math.round(fontSize * 1.25);
  const lines = [siteName, dateStr, gpsText, placeText];
  lines.forEach((line, idx) => {
    const y = canvas.height - pad - (lines.length - 1 - idx) * lineH;
    ctx.fillText(line, canvas.width - pad, y);
  });

  return compressCanvas(canvas, highRes);
}

function compressCanvas(canvas, highRes) {
  return new Promise(resolve => {
    if (highRes) {
      canvas.toBlob(b => resolve(b), "image/jpeg", 0.95);
      return;
    }
    let q = 0.85;
    const attempt = () => {
      canvas.toBlob(b => {
        if (b.size <= 980 * 1024 || q <= 0.45) resolve(b);
        else { q -= 0.12; attempt(); }
      }, "image/jpeg", q);
    };
    attempt();
  });
}

async function saveFileRecord(subId, blob, type, originalName) {
  const projects = await getAllProjects();
  const p = projects.find(x => x.id === currentProjectId);
  const existing = (await getProjectFiles(currentProjectId)).filter(f => f.subId === subId);
  const num = String(existing.length + 1).padStart(2, "0");
  const cleanSite = (p ? p.name : "REPORTE").replace(/[^a-zA-Z0-9_-]/g, "_");
  const ext = originalName && originalName.includes(".") ? originalName.split(".").pop() : "jpg";
  const fileName = `${cleanSite}_${num}.${ext}`;

  const tx = db.transaction("files", "readwrite");
  tx.objectStore("files").put({
    id: "file_" + Date.now() + "_" + Math.random().toString(36).slice(2, 6),
    projectId: currentProjectId,
    subId,
    name: fileName,
    type,
    blob
  });
  return new Promise(res => { tx.oncomplete = res; });
}

async function deleteFile(fileId) {
  if (!confirm("¿Seguro que deseas eliminar este archivo?")) return;
  const tx = db.transaction("files", "readwrite");
  tx.objectStore("files").delete(fileId);
  tx.oncomplete = () => renderDetail();
}

// --- VIEWER ---
async function openViewer(subId, index) {
  const files = (await getProjectFiles(currentProjectId)).filter(f => f.subId === subId);
  if (!files.length) return;
  viewerItems = files;
  viewerIdx = index;
  renderViewer();
  document.getElementById("viewerModal").style.display = "flex";
}

function openLastCaptured() {
  if (activeSubId && sessionCount > 0) openViewer(activeSubId, sessionCount - 1);
}

function renderViewer() {
  const item = viewerItems[viewerIdx];
  if (!item) return closeViewer();
  document.getElementById("viewerCounter").textContent = `${viewerIdx + 1} / ${viewerItems.length}`;
  document.getElementById("viewerName").textContent = item.name;
  document.getElementById("viewerImg").src = URL.createObjectURL(item.blob);
}

function navViewer(dir) {
  viewerIdx = (viewerIdx + dir + viewerItems.length) % viewerItems.length;
  renderViewer();
}

async function deleteCurrentViewed() {
  const item = viewerItems[viewerIdx];
  if (!item || !confirm(`¿Eliminar ${item.name}?`)) return;
  const tx = db.transaction("files", "readwrite");
  tx.objectStore("files").delete(item.id);
  tx.oncomplete = async () => {
    viewerItems.splice(viewerIdx, 1);
    if (!viewerItems.length) closeViewer();
    else { viewerIdx = Math.min(viewerIdx, viewerItems.length - 1); renderViewer(); }
    renderDetail();
  };
}

function closeViewer() {
  document.getElementById("viewerModal").style.display = "none";
}

// --- BUILT-IN ZERO-DEPENDENCY ZIP FALLBACK (IF OFFLINE WITHOUT CDN) ---
function makeCrcTable() {
  const table = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    table[i] = c;
  }
  return table;
}
const CRC_TABLE = makeCrcTable();
function crc32(buf) {
  let crc = -1;
  for (let i = 0; i < buf.length; i++) crc = (crc >>> 8) ^ CRC_TABLE[(crc ^ buf[i]) & 0xFF];
  return (crc ^ -1) >>> 0;
}

async function buildRawZipBlob(entries) {
  const encoder = new TextEncoder();
  const fileParts = [];
  const centralDir = [];
  let offset = 0;

  for (const entry of entries) {
    const nameBytes = encoder.encode(entry.path);
    const dataBytes = new Uint8Array(await entry.blob.arrayBuffer());
    const crc = crc32(dataBytes);

    const localHeader = new ArrayBuffer(30 + nameBytes.length);
    const lv = new DataView(localHeader);
    lv.setUint32(0, 0x04034b50, true);
    lv.setUint16(4, 20, true);
    lv.setUint16(6, 0x0800, true);
    lv.setUint16(8, 0, true);
    lv.setUint16(10, 0, true);
    lv.setUint16(12, 0, true);
    lv.setUint32(14, crc, true);
    lv.setUint32(18, dataBytes.length, true);
    lv.setUint32(22, dataBytes.length, true);
    lv.setUint16(26, nameBytes.length, true);
    lv.setUint16(28, 0, true);
    new Uint8Array(localHeader, 30).set(nameBytes);

    fileParts.push(localHeader, dataBytes);

    const cdHeader = new ArrayBuffer(46 + nameBytes.length);
    const cv = new DataView(cdHeader);
    cv.setUint32(0, 0x02014b50, true);
    cv.setUint16(4, 20, true);
    cv.setUint16(6, 20, true);
    cv.setUint16(8, 0x0800, true);
    cv.setUint16(10, 0, true);
    cv.setUint16(12, 0, true);
    cv.setUint16(14, 0, true);
    cv.setUint32(16, crc, true);
    cv.setUint32(20, dataBytes.length, true);
    cv.setUint32(24, dataBytes.length, true);
    cv.setUint16(28, nameBytes.length, true);
    cv.setUint16(30, 0, true);
    cv.setUint16(32, 0, true);
    cv.setUint16(34, 0, true);
    cv.setUint16(36, 0, true);
    cv.setUint32(38, 0, true);
    cv.setUint32(42, offset, true);
    new Uint8Array(cdHeader, 46).set(nameBytes);
    centralDir.push(cdHeader);

    offset += localHeader.byteLength + dataBytes.length;
  }

  const cdSize = centralDir.reduce((s, b) => s + b.byteLength, 0);
  const eocd = new ArrayBuffer(22);
  const ev = new DataView(eocd);
  ev.setUint32(0, 0x06054b50, true);
  ev.setUint16(4, 0, true);
  ev.setUint16(6, 0, true);
  ev.setUint16(8, entries.length, true);
  ev.setUint16(10, entries.length, true);
  ev.setUint32(12, cdSize, true);
  ev.setUint32(16, offset, true);
  ev.setUint16(20, 0, true);

  return new Blob([...fileParts, ...centralDir, eocd], { type: "application/zip" });
}

async function getNoAplicaBlob() {
  try {
    const r = await fetch("no_aplica.png");
    if (r.ok) return await r.blob();
  } catch (e) {}
  const c = document.createElement("canvas");
  c.width = 600; c.height = 400;
  const ctx = c.getContext("2d");
  ctx.fillStyle = "#f1f5f9"; ctx.fillRect(0, 0, 600, 400);
  ctx.fillStyle = "#334155"; ctx.font = "bold 36px sans-serif"; ctx.textAlign = "center";
  ctx.fillText("NO APLICA", 300, 210);
  return new Promise(res => c.toBlob(res, "image/png"));
}

async function exportZip(projectId, isShare) {
  showToast("Comprimiendo carpetas en ZIP...");
  try {
    const projects = await getAllProjects();
    const p = projects.find(x => x.id === projectId);
    const files = await getProjectFiles(projectId);
    const noAplicaBlob = await getNoAplicaBlob();
    const cleanRoot = (p ? p.name : "REPORTE_ATP").replace(/[^a-zA-Z0-9_-]/g, "_");
    const zipFilename = `${cleanRoot}.zip`;

    const entries = [];
    for (const sec of SECTIONS) {
      for (const item of sec.items) {
        const folderPath = sec.id === "fmt"
          ? `${cleanRoot}/${sec.name}`
          : `${cleanRoot}/${sec.name}/${item.title}`;
        const subFiles = files.filter(f => f.subId === item.subId);
        if (subFiles.length === 0) {
          entries.push({ path: `${folderPath}/NO_APLICA.png`, blob: noAplicaBlob });
        } else {
          for (const sf of subFiles) {
            entries.push({ path: `${folderPath}/${sf.name}`, blob: sf.blob });
          }
        }
      }
    }

    let zipBlob;
    if (window.JSZip) {
      const zip = new JSZip();
      for (const ent of entries) zip.file(ent.path, ent.blob);
      zipBlob = await zip.generateAsync({ type: "blob", mimeType: "application/zip" });
    } else {
      zipBlob = await buildRawZipBlob(entries);
    }

    const blobUrl = URL.createObjectURL(zipBlob);
    const targetBox = document.getElementById(`shareBox_${projectId}`) || document.getElementById("readyShareBox");

    if (isShare) {
      const zipFile = new File([zipBlob], zipFilename, { type: "application/zip" });
      if (targetBox) {
        targetBox.style.display = "block";
        targetBox.innerHTML = `
          <div style="background:#f1f5f9; padding:10px; border-radius:8px; display:flex; gap:8px; flex-wrap:wrap; align-items:center;">
            <span style="font-size:0.8rem; font-weight:700; flex:1;">Listo: ${zipFilename}</span>
            <button class="btn-primary" id="btnTriggerShareNow">Enviar ahora</button>
            <a href="${blobUrl}" download="${zipFilename}" style="background:#0f172a; color:#fff; padding:8px 12px; border-radius:8px; text-decoration:none; font-size:0.8rem; font-weight:600;">Guardar .ZIP</a>
          </div>`;
        document.getElementById("btnTriggerShareNow").onclick = async () => {
          if (navigator.canShare && navigator.canShare({ files: [zipFile] })) {
            await navigator.share({ files: [zipFile], title: zipFilename });
          } else {
            const a = document.createElement("a");
            a.href = blobUrl; a.download = zipFilename; a.click();
            showToast("Descargado como .ZIP para enviar");
          }
        };
      }
    } else {
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = zipFilename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      showToast(`Descargado: ${zipFilename}`);
    }
  } catch (err) {
    showToast("Error al comprimir: " + err.message);
  }
}

initDB().then(() => renderProjects());
