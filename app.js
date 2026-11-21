const FOLDER_1_ITEMS = [
  { id: "f1_01", name: "1. Caminos", desc: "FOTOS CAMINOS, CALLES DESDE CUSTODIO HACIA SITE, INCLUYE CAMINATA HACIA CERRO" },
  { id: "f1_02", name: "2. Edificio & Cercos", desc: "FOTOS PANORAMICAS DEL EDIFICIO O SITE POR LOS 4 LADOS" },
  { id: "f1_03", name: "3. Medidor & Tableros & Contadores", desc: "FOTOS PANORAMICAS DE LOS TABLEROS, SUMINISTROS Y CONTADORES" },
  { id: "f1_04", name: "4. Accesos & Puertas", desc: "FOTOS DE ACCESO A EDIFICIO, PUERTAS, ESCALERAS INCLUYE LLAVES O CANDADOS" },
  { id: "f1_05", name: "5. Base de torre & Linea de Vida", desc: "FOTOS DE PEDESTAL DE TORRE Y BASE DE VIENTOS O ARRIOSTRES POR LOS 4 LADOS" },
  { id: "f1_06", name: "6. Equipos en piso & Losas", desc: "FOTOS PANORAMICOS DE GABINETES INCLUYE PLATAFORMA, MODULOS, GPS EN PISO" },
  { id: "f1_07", name: "7. Sistema de puesta a tierra", desc: "FOTOS DE BARRAS EN PISO Y TORRE. CABLE DE BAJADA DE ATERRAMIENTO. PARARAYO Y CABLE DE BAJADA. POZOS TIERRA LIMPIEZA Y MEDICIONES" },
  { id: "f1_08", name: "8. Portacables & Escalerillas rack", desc: "FOTOS DE ESCALERILLA EN PISO Y TORRE" },
  { id: "f1_09", name: "9. Sistema de balizamiento", desc: "FOTOS DE FANALES, FOTOCELDA, CABLE VULCANIZADO, LIMPIEZA DE FANALES Y PRUEBA DE FUNCIONAMIENTO" },
  { id: "f1_10", name: "10. Equipos en torre", desc: "FOTOS PANORAMICO DE EQUIPOS, ETIQUETA, CABLES, INICIO Y FIN DE SOPORTES, MEDICION DE TUBO, ALTURA DE EQUIPO" },
  { id: "f1_11", name: "11. Vista encima de torre", desc: "FOTOS DE TORRES HACIA ABAJO POR LOS 4 LADOS" },
  { id: "f1_12", name: "12. Vista panoramica de torre", desc: "FOTOS PANORAMICO DE TORRE INCLUYE ZOOM DE AREA DE ROLDANA POR LOS 4 LADOS" },
  { id: "f1_13", name: "13. Vista de site general", desc: "FOTOS GENERALES, PISOS, PAREDES. EQUIPOS, LETRERO, LUMINARIAS, TOMACORRIENTES. TECHOS. SOPORTES" },
  { id: "f1_14", name: "14. Transformadores & Postes", desc: "FOTOS DE POSTES DE COMETIDA, FOTOS DE POSTE DE TRANSFORMADOR INCLUYE ZOOM A TRANSFORMADOR" },
  { id: "f1_15", name: "15. Vistas de 30° encima de torre cada foto 5MB", desc: "FOTOS EN HORIZONTAL 12 FOTOS CADA 30 GRADOS, FOTOS BARRIDO 0 A 180 Y 180 A 360 (3 RONDAS) - ALTA RESOLUCION", highRes: true },
  { id: "f1_16", name: "16. Generadores", desc: "FOTOS DE GENERADORES, TANQUE COMBUSTIBLE, FOTOS DE AREA DE GENERADOR" },
  { id: "f1_17", name: "17. Estado de torre", desc: "FOTOS DE ANGULOS, PERNERIA Y PRUEBA DE TORQUE, ESTADO DE PINTURA. VERIFICAR CORROSION Y FALTANTES" },
  { id: "f1_18", name: "18. Vista panoramica de la estación por dentro y fuera", desc: "FOTOS PANORAMICAS DE PAREDES POR DENTRO Y FUERA POR 4 LADOS" },
  { id: "f1_19", name: "19. Vista de ingreso de Fibra Optica, identificar Operador, abrir cajas de pase", desc: "FOTOS ETIQUETAR OPERADOR FIBRA OPTICA, FOTOS DE RECORRIDO, CAMARAS" },
  { id: "f1_20", name: "20. Diagrama Unifilar desde Medidor hasta tableros", desc: "DIBUJAR DIAGRAMA DE RECORRIDO DE SUMINISTRO ATP HACIA TABLERO ATP" },
  { id: "f1_21", name: "21. Diagrama Unifilar de Tableros", desc: "DIBUJAR DIAGRAMA DE RECORRIDO DE SUMINISTRO OPERADOR HACIA TABLERO OPERADOR" },
  { id: "f1_22", name: "22. Diagrama de traslado desde Provincia al site", desc: "ESCRIBIR EL RECORRIDO DE LA RUTA DESDE EL CUSTODIO HACIA EL SITE, ZONAS PUNTUALES Y TIEMPO" },
  { id: "f1_23", name: "23. Vista de concertina", desc: "FOTOS VERIFICAR CORROSION Y CORTADO DE CONCERTINA. INCLUYE REPARAR CONCERTINA. FOTO ANTES Y DESPUES" },
  { id: "f1_24", name: "24. Vista de buzones abiertos y cerrados", desc: "FOTOS DE BUZONES ABIERTO Y CERRADO, FIBRA OPTICA, LLAVE Y CANDADO, LIMPIEZA DE BUZONES" },
  { id: "f1_25", name: "25. Etiquetado de llaves y video de validacion", desc: "FOTOS DE LLAVES SUELTAS DEL MANOJO Y ETIQUETADO EN PISO. VIDEO FUNCIONAMIENTO DE LA LLAVE EN LA PUERTA PRINCIPAL DEL SITE" },
  { id: "f1_26", name: "26. Estado de polimero, pvc, persiana, radomo, etc", desc: "FOTOS PANORAMICA DE POLIMERO O PVC, PERNERIA, EMPALMES, PINTURA" },
  { id: "f1_27", name: "27. Vista de luminarias en poste, site, arqueta", desc: "FOTOS DE LUMINARIAS APAGADAS Y PRENDIDAS EN SALA EQUIPOS Y POSTE SI APLICA" },
  { id: "f1_28", name: "28. Fotos de gestion ambiental", desc: "FOTOS DE CHARLA Y PERSONAL CON EPPS. SEÑALIZACION, Y GESTION DE RESIDUOS, USO DE EPPS DE TECNICO" },
  { id: "f1_29", name: "29. Fotos de cambio de batería", desc: "FOTOS Y VIDEOS DE PROCESO DE CAMBIO DE BATERIA, MEDICION DE BATERIA. VIDEO FUNCIONAMIENTO DE CANDADO NUEVO" }
];

const FOLDER_2_ITEMS = [
  { id: "f2_formatos", name: "2. FORMATOS MP", desc: "Subir fotos y documentos PDF de formatos de mantenimiento preventivo", allowPdf: true }
];

const FOLDER_3_ITEMS = [
  { id: "f3_01", name: "1. Personal con EPPs & Equipos utilizados", desc: "FOTO DE PERSONAL CON EPPS Y CHARLA DE 5 MINUTOS, EQUIPOS UTILIZADOS, TELUROMETRO, PINZA, DESARMADORES, BRUJULA, ETC" },
  { id: "f3_02", name: "2. Altura de torre", desc: "FOTO DE ARRIBA HACIA ABAJO, DE ABAJO HACIA ARRIBA. INCLUYE ALTURA TORRE BASE, ROLDANA SUPERIOR E INFERIOR" },
  { id: "f3_03", name: "3. Medida de pedestal", desc: "FOTO PANORAMICA DE ALTURA, LARGO Y ANCHO" },
  { id: "f3_04", name: "4. Limpieza de fanales", desc: "FOTOS LIMPIEZA DE FANALES Y FOTOCELDA" },
  { id: "f3_05", name: "5. Limpieza de pozos", desc: "FOTOS LIMPIEZA DE POZOS TIERRA, INCLUYE PINTADO" },
  { id: "f3_06", name: "6. Limpieza del site y Polimero", desc: "FOTOS DE LIMPIEZA DE PISOS, PAREDES, ESCALERILLA, BASTIDORES, POLIMERO O PVC EN TORRE" },
  { id: "f3_07", name: "7. Trabajo en contador", desc: "FOTOS PANORAMICA, LIMPIEZA Y MEDICION DE CONTADORES" },
  { id: "f3_08", name: "8. Aceitado en chapas y bisagras", desc: "FOTOS DE LIMPIEZA Y ACEITADO DE CHAPAS, BISAGRAS DE TODAS LAS PUERTAS EN SITE" },
  { id: "f3_09", name: "9. Validación de diagrama unifilar de tableros", desc: "FOTOS DIBUJAR EN HOJA EL DIAGRAMA ACTUAL DESDE SUMINISTRO HACIA TABLEROS INCLUYE TODAS LAS LLAVES" },
  { id: "f3_10", name: "10. Prueba de espesor", desc: "FOTOS DE ESPESOR DE PINTURA Y GALVANIZADO EN VALOR mils EN VARIAS PARTES DE LA TORRE" },
  { id: "f3_11", name: "11. Prueba de adherencia", desc: "FOTOS DE CORTE, CINTA CERRADA, CINTA ABIERTA EN VARIAS PARTES DE LA TORRE" },
  { id: "f3_12", name: "12. Limpieza y engrase de BT", desc: "FOTOS ANTES, CON ESPATULA Y DESPUES ENGRASADO DE TODAS LAS BARRAS EN PISO Y TORRE" },
  { id: "f3_13", name: "13. Mantenimiento de tableros", desc: "FOTOS DE LIMPIEZA CON BROCHA Y TORQUE DE TODOS LOS TABLEROS EN LA ESTACION" },
  { id: "f3_14", name: "14. Medición de tableros", desc: "FOTOS DE MEDICIONES DE AMPERIOS (R,S,T) Y VOLTAJE (RS, RT, ST) EN I.G Y SALIDA DE EQUIPOS O TABLERO OPERADOR" },
  { id: "f3_15", name: "15. Limpieza de pedestal", desc: "FOTOS DE LIMPIEZA CON ESCOBA EN PEDESTAL Y BASE DE VIENTOS U ARRIOSTRES" },
  { id: "f3_16", name: "16. Mantenimiento y medidas de equipos en piso", desc: "FOTOS DE MANTENIMIENTO DE LIMPIEZA CON ESCOBA Y MEDICION CON WINCHA DE TODOS LOS EQUIPOS EN PISO (ANCHO, LARGO Y ALTURA)" },
  { id: "f3_17", name: "17. Brujula", desc: "FOTOS DE BRUJULA Y ESCRITO CON PLUMON EL AZIMUT EN LA PATA DE TORRE" },
  { id: "f3_18", name: "18. GPS", desc: "FOTOS PANORAMICA Y DE CERCA A GPS EN BASE DE TORRE, QUE SE NOTE LAS COORDENADAS (GRADOS, MINUTOS Y SEGUNDOS)" },
  { id: "f3_19", name: "19. Altura de edificio", desc: "ALTURA EDIFICIO, ALTURA PARAPETO, ALTURA ESCALERA AZOTEA" },
  { id: "f3_20", name: "20. Uso de nivel", desc: "FOTO PANORAMICA DE NIVEL EN MONTANTE DE TORRE, EN TORRE VENTADA, MASTIL Y AUTOSOPORTADA, MONOPOLO" },
  { id: "f3_21", name: "21. Aplicación de spray", desc: "FOTO APLICACION EN ACCESORIOS DE LINEA DE VIDA, ACCESORIOS DE VIENTOS, GRAMPAS Y GRILLETES SI ESTAN OXIDADOS" },
  { id: "f3_22", name: "22. Soportes vacios en torre, mastil, altura y azimut", desc: "FOTOS PANORAMICA DE TUBO, FOTO DE MEDIDA DE TUBO, AZIMUT, ALTURA EJE DE TUBO DE TODOS LOS SOPORTES VACIOS" },
  { id: "f3_23", name: "23. Vistas de las cordenadas de cada arista del site", desc: "FOTOS PANORAMICA DE GPS EN CADA ESQUINA DE SALA EQUIPOS, ESCRIBIR CON PLUMON A, B, C, D" },
  { id: "f3_24", name: "24. Vistas de las medidas del perimetro del site", desc: "FOTOS PANORAMICA Y CERCA DE MEDIDA DE WINCHA DE ANCHO, LARGO Y ALTURA DE SALA DE EQUIPO" },
  { id: "f3_25", name: "25. Mantenimiento de ramas y hojas del monopolo", desc: "FOTOS DE LIMPIEZA DE OJOS Y CAMBIO DE CINTILLO DE HOJAS EN MIMETIZADO SI APLICA" },
  { id: "f3_26", name: "26. Mantenimiento de aires forzados y video de funcionamiento", desc: "FOTOS DE PANORAMICA, LIMPIEZA, PLACAS, MEDICION DE INYECTOR Y EXTRACTOR, FOTOS EXTERIOR DE EXTRACTOR Y LIMPIEZA REJILLA" },
  { id: "f3_27", name: "27. Altura soporte ocupados", desc: "FOTOS PANORAMICA DE ALTURA DE EJE DE SOPORTES OCUPADOS. ESCRIBIR QUE OPERADOR Y EQUIPO ESTA EN ESE SOPORTE" },
  { id: "f3_28", name: "28. Vista de Azotea", desc: "FOTOS PANORAMICA DE AZOTEA DE PROPIETARIO POR LOS 4 LADOS" },
  { id: "f3_29", name: "29. Vista de Limpieza exterior 4 lados", desc: "FOTOS DE LIMPIEZA EXTERIOR, LIMPIAR BASURA Y MALEZA 1 METRO Y MEDIO APROX. FOTOS DE ANTES Y DESPUES" },
  { id: "f3_30", name: "30. Fotos del mtto de video camara", desc: "FOTOS DE LIMPIEZA DE CAMARA, TORQUE TABLERO, REINICIAR CAMARA SI REQUIERE, VERIFICAR FUNCIONAMIENTO CON CRISTIAN SALAZAR" }
];

const TOTAL_REQUIRED_ITEMS = FOLDER_1_ITEMS.length + FOLDER_2_ITEMS.length + FOLDER_3_ITEMS.length;

let db;
let currentProjectId = null;
let currentTab = 1;
let activeSubId = null;
let activeHighRes = false;
let viewerItems = [];
let viewerIndex = 0;
let lastZipBlob = null;
let lastZipFilename = "";
let activeObjectUrls = [];
let viewerObjectUrl = null;

// Gestión de memoria para ObjectURLs
function createTrackedUrl(blob) {
  const url = URL.createObjectURL(blob);
  activeObjectUrls.push(url);
  return url;
}

function revokeAllTrackedUrls() {
  activeObjectUrls.forEach(url => URL.revokeObjectURL(url));
  activeObjectUrls = [];
}

// Inicializar IndexedDB
function initDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open("ReportesSiteDB_v15_1", 1);
    req.onupgradeneeded = (e) => {
      const d = e.target.result;
      if (!d.objectStoreNames.contains("projects")) {
        d.createObjectStore("projects", { keyPath: "id" });
      }
      if (!d.objectStoreNames.contains("files")) {
        const fs = d.createObjectStore("files", { keyPath: "id" });
        fs.createIndex("project_sub", ["projectId", "subId"], { unique: false });
        fs.createIndex("project", "projectId", { unique: false });
      }
    };
    req.onsuccess = (e) => { db = e.target.result; resolve(); };
    req.onerror = (e) => reject(e);
  });
}

function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.style.display = "block";
  clearTimeout(t._timer);
  t._timer = setTimeout(() => { t.style.display = "none"; }, 2600);
}

// Cálculo y actualización del contador de porcentaje
async function updateProgressIndicator() {
  if (!currentProjectId) return;
  const allFiles = await getAllFilesForProject(currentProjectId);
  const completedSubIds = new Set(allFiles.map(f => f.subId));
  const completedCount = completedSubIds.size;
  const percentage = Math.round((completedCount / TOTAL_REQUIRED_ITEMS) * 100);

  const textEl = document.getElementById("progressText");
  const barEl = document.getElementById("progressBar");
  if (textEl) textEl.textContent = `${percentage}% (${completedCount} / ${TOTAL_REQUIRED_ITEMS} ítems)`;
  if (barEl) {
    barEl.style.width = `${percentage}%`;
    barEl.style.background = percentage === 100 ? "#059669" : (percentage >= 50 ? "#0284c7" : "#10b981");
  }
}

// Gestión de proyectos
async function getProjects() {
  return new Promise((res) => {
    const tx = db.transaction("projects", "readonly");
    const req = tx.objectStore("projects").getAll();
    req.onsuccess = () => res(req.result || []);
  });
}

async function createProject() {
  const inp = document.getElementById("newProjectName");
  const name = inp.value.trim();
  if (!name) return showToast("Escribe un nombre para la carpeta");
  const proj = { id: "proj_" + Date.now(), name, createdAt: Date.now() };
  const tx = db.transaction("projects", "readwrite");
  tx.objectStore("projects").put(proj);
  tx.oncomplete = () => {
    inp.value = "";
    renderProjects();
    openProject(proj.id);
  };
}

async function renderProjects() {
  const list = await getProjects();
  const el = document.getElementById("projectList");
  if (!list.length) {
    el.innerHTML = `<div style="text-align:center;color:var(--ink-soft);font-size:13px;padding:24px;">No hay carpetas creadas aún.</div>`;
    return;
  }
  el.innerHTML = list.sort((a,b) => b.createdAt - a.createdAt).map(p => `
    <div class="project-item">
      <div class="project-title" onclick="openProject('${p.id}')">${escapeHtml(p.name)}</div>
      <div class="row">
        <button class="btn-outline" onclick="openProject('${p.id}')">Abrir</button>
        <button class="btn-danger-ghost" onclick="deleteProject('${p.id}', '${escapeHtml(p.name)}')">Eliminar</button>
      </div>
    </div>
  `).join("");
}

async function deleteProject(id, name) {
  if (!confirm(`¿Eliminar la carpeta "${name}" y todas sus fotos?`)) return;
  const tx = db.transaction(["projects", "files"], "readwrite");
  tx.objectStore("projects").delete(id);
  const idx = tx.objectStore("files").index("project");
  const req = idx.getAllKeys(id);
  req.onsuccess = () => {
    (req.result || []).forEach(k => tx.objectStore("files").delete(k));
  };
  tx.oncomplete = () => {
    renderProjects();
    showToast("Carpeta eliminada");
  };
}

async function openProject(id) {
  currentProjectId = id;
  const list = await getProjects();
  const proj = list.find(p => p.id === id);
  if (!proj) return;
  document.getElementById("editProjectName").value = proj.name;
  document.getElementById("homeView").classList.add("hidden");
  document.getElementById("projectView").classList.remove("hidden");
  document.getElementById("shareReadyBox").classList.add("hidden");
  switchTab(1);
}

function goHome() {
  revokeAllTrackedUrls();
  currentProjectId = null;
  document.getElementById("projectView").classList.add("hidden");
  document.getElementById("homeView").classList.remove("hidden");
  renderProjects();
}

async function renameCurrentProject() {
  const newName = document.getElementById("editProjectName").value.trim();
  if (!newName || !currentProjectId) return;
  const tx = db.transaction("projects", "readwrite");
  const store = tx.objectStore("projects");
  const req = store.get(currentProjectId);
  req.onsuccess = () => {
    const p = req.result;
    if (p) {
      p.name = newName;
      store.put(p);
    }
  };
  tx.oncomplete = () => showToast("Nombre actualizado");
}

function switchTab(num) {
  currentTab = num;
  [1, 2, 3].forEach(n => {
    document.getElementById("tab" + n).classList.toggle("active", n === num);
  });
  renderSubfolders();
}

async function getFilesForSub(projectId, subId) {
  return new Promise((res) => {
    const tx = db.transaction("files", "readonly");
    const idx = tx.objectStore("files").index("project_sub");
    const req = idx.getAll([projectId, subId]);
    req.onsuccess = () => res(req.result || []);
  });
}

async function getAllFilesForProject(projectId) {
  return new Promise((res) => {
    const tx = db.transaction("files", "readonly");
    const idx = tx.objectStore("files").index("project");
    const req = idx.getAll(projectId);
    req.onsuccess = () => res(req.result || []);
  });
}

async function renderSubfolders() {
  revokeAllTrackedUrls();
  updateProgressIndicator();

  const container = document.getElementById("subfoldersContainer");
  const items = currentTab === 1 ? FOLDER_1_ITEMS : (currentTab === 2 ? FOLDER_2_ITEMS : FOLDER_3_ITEMS);
  let html = "";

  for (const item of items) {
    const files = await getFilesForSub(currentProjectId, item.id);
    const badge = files.length > 0
      ? `<span class="badge-count">${files.length} archivo(s)</span>`
      : `<span class="badge-empty">Vacía → NO APLICA</span>`;

    let thumbsHtml = "";
    if (files.length > 0) {
      thumbsHtml = `<div class="thumb-grid">` + files.map((f, idx) => {
        const url = createTrackedUrl(f.blob);
        let mediaTag = "";
        if (f.type.startsWith("image/")) {
          mediaTag = `<img src="${url}" loading="lazy" />`;
        } else if (f.type.startsWith("video/")) {
          mediaTag = `<video src="${url}"></video>`;
        } else {
          mediaTag = `<div class="thumb-pdf">PDF<br>${escapeHtml(f.name.slice(0, 14))}</div>`;
        }
        return `
          <div class="thumb-box" onclick="openViewer('${item.id}', ${idx})">
            ${mediaTag}
            <button class="del-mini" onclick="event.stopPropagation(); deleteFile('${f.id}', '${escapeHtml(f.name)}')">×</button>
          </div>
        `;
      }).join("") + `</div>`;
    }

    html += `
      <div class="sub-card">
        <div class="sub-header">
          <div class="sub-title">${escapeHtml(item.name)}</div>
          ${badge}
        </div>
        <div class="sub-desc">${escapeHtml(item.desc)}</div>
        <div class="btn-grid-2">
          <button class="btn-primary" onclick="triggerNativeCamera('${item.id}', ${!!item.highRes})">Tomar Foto</button>
          <button class="btn-outline" onclick="triggerGalleryUpload('${item.id}', ${!!item.highRes}, ${!!item.allowPdf})">Subir Foto</button>
        </div>
        ${thumbsHtml}
      </div>
    `;
  }
  container.innerHTML = html;
}

// Botón único de Cámara que abre el selector de apps de cámara del celular
function triggerNativeCamera(subId, highRes) {
  activeSubId = subId;
  activeHighRes = highRes;
  const inp = document.getElementById("nativeCameraInput");
  inp.value = "";
  inp.click();
}

document.getElementById("nativeCameraInput").addEventListener("change", async (e) => {
  const files = Array.from(e.target.files || []);
  if (!files.length) return;
  showToast("Guardando foto capturada...");

  for (const file of files) {
    let finalBlob = file;
    if (file.type.startsWith("image/") && !activeHighRes && file.size > 1024 * 1024) {
      finalBlob = await compressImageToUnder1MB(file);
    }
    const now = new Date();
    const fallbackName = `CAM_${now.getFullYear()}${String(now.getMonth()+1).padStart(2,"0")}${String(now.getDate()).padStart(2,"0")}_${String(now.getHours()).padStart(2,"0")}${String(now.getMinutes()).padStart(2,"0")}${String(now.getSeconds()).padStart(2,"0")}.jpg`;

    await saveFileToDB({
      id: "file_" + Date.now() + "_" + Math.random().toString(36).slice(2, 7),
      projectId: currentProjectId,
      subId: activeSubId,
      name: file.name || fallbackName,
      type: finalBlob.type || "image/jpeg",
      blob: finalBlob,
      createdAt: Date.now()
    });
  }
  renderSubfolders();
  showToast("Foto guardada correctamente");
});

// Subida desde galería / archivos
function triggerGalleryUpload(subId, highRes, allowPdf) {
  activeSubId = subId;
  activeHighRes = highRes;
  const inp = document.getElementById("galleryInput");
  inp.accept = allowPdf ? "image/*,video/*,application/pdf" : "image/*,video/*";
  inp.value = "";
  inp.click();
}

document.getElementById("galleryInput").addEventListener("change", async (e) => {
  const files = Array.from(e.target.files || []);
  if (!files.length) return;
  showToast(`Procesando ${files.length} archivo(s)...`);

  for (const file of files) {
    let finalBlob = file;
    if (file.type.startsWith("image/") && !activeHighRes && file.size > 1024 * 1024) {
      finalBlob = await compressImageToUnder1MB(file);
    }
    await saveFileToDB({
      id: "file_" + Date.now() + "_" + Math.random().toString(36).slice(2, 7),
      projectId: currentProjectId,
      subId: activeSubId,
      name: file.name,
      type: finalBlob.type || file.type,
      blob: finalBlob,
      createdAt: Date.now()
    });
  }
  renderSubfolders();
  showToast(`${files.length} archivo(s) guardado(s)`);
});

// Compresión a < 1MB manteniendo nitidez
function compressImageToUnder1MB(fileOrBlob) {
  return new Promise((resolve) => {
    const img = new Image();
    const url = URL.createObjectURL(fileOrBlob);
    img.onload = () => {
      URL.revokeObjectURL(url);
      const canvas = document.createElement("canvas");
      let w = img.width;
      let h = img.height;
      const maxDim = 1600;
      if (w > maxDim || h > maxDim) {
        if (w > h) { h = Math.round(h * maxDim / w); w = maxDim; }
        else { w = Math.round(w * maxDim / h); h = maxDim; }
      }
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, w, h);

      let quality = 0.82;
      const attempt = () => {
        canvas.toBlob((b) => {
          if (b && (b.size <= 1024 * 1024 || quality <= 0.45)) {
            resolve(b);
          } else {
            quality -= 0.12;
            attempt();
          }
        }, "image/jpeg", quality);
      };
      attempt();
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      resolve(fileOrBlob);
    };
    img.src = url;
  });
}

function saveFileToDB(record) {
  return new Promise((resolve) => {
    const tx = db.transaction("files", "readwrite");
    tx.objectStore("files").put(record);
    tx.oncomplete = () => resolve();
  });
}

async function deleteFile(fileId, fileName) {
  if (!confirm(`¿Seguro que deseas eliminar "${fileName}"?`)) return;
  const tx = db.transaction("files", "readwrite");
  tx.objectStore("files").delete(fileId);
  tx.oncomplete = () => {
    renderSubfolders();
    showToast("Archivo eliminado");
  };
}

// Visor Lightbox deslizable
async function openViewer(subId, index) {
  activeSubId = subId;
  viewerItems = await getFilesForSub(currentProjectId, subId);
  if (!viewerItems.length) return;
  viewerIndex = Math.max(0, Math.min(index, viewerItems.length - 1));
  document.getElementById("viewerModal").style.display = "flex";
  renderViewerSlide();
}

function closeViewer() {
  if (viewerObjectUrl) {
    URL.revokeObjectURL(viewerObjectUrl);
    viewerObjectUrl = null;
  }
  document.getElementById("viewerModal").style.display = "none";
  renderSubfolders();
}

function navViewer(dir) {
  if (!viewerItems.length) return;
  viewerIndex = (viewerIndex + dir + viewerItems.length) % viewerItems.length;
  renderViewerSlide();
}

function renderViewerSlide() {
  const item = viewerItems[viewerIndex];
  if (!item) return closeViewer();
  if (viewerObjectUrl) URL.revokeObjectURL(viewerObjectUrl);

  document.getElementById("viewerCounter").textContent = `${viewerIndex + 1} / ${viewerItems.length}`;
  document.getElementById("viewerFilename").textContent = item.name;
  const box = document.getElementById("viewerContent");
  viewerObjectUrl = URL.createObjectURL(item.blob);

  if (item.type.startsWith("image/")) {
    box.innerHTML = `<img src="${viewerObjectUrl}" />`;
  } else if (item.type.startsWith("video/")) {
    box.innerHTML = `<video src="${viewerObjectUrl}" controls autoplay></video>`;
  } else {
    box.innerHTML = `<div style="text-align:center;"><p>${escapeHtml(item.name)}</p><a href="${viewerObjectUrl}" download="${escapeHtml(item.name)}" style="color:#38bdf8;">Abrir / Descargar PDF</a></div>`;
  }
}

async function deleteFromViewer() {
  const item = viewerItems[viewerIndex];
  if (!item) return;
  if (!confirm(`¿Seguro que deseas eliminar "${item.name}"?`)) return;
  const tx = db.transaction("files", "readwrite");
  tx.objectStore("files").delete(item.id);
  tx.oncomplete = () => {
    viewerItems.splice(viewerIndex, 1);
    updateProgressIndicator();
    if (!viewerItems.length) {
      closeViewer();
    } else {
      viewerIndex = Math.min(viewerIndex, viewerItems.length - 1);
      renderViewerSlide();
    }
    showToast("Archivo eliminado");
  };
}

// Gestos táctiles izquierda/derecha en visor
let touchStartX = 0;
document.getElementById("viewerTouchArea").addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches.screenX;
}, { passive: true });
document.getElementById("viewerTouchArea").addEventListener("touchend", (e) => {
  const diff = e.changedTouches.screenX - touchStartX;
  if (Math.abs(diff) > 45) navViewer(diff < 0 ? 1 : -1);
}, { passive: true });

// Exportar y Compartir ZIP con NO_APLICA.png en carpetas vacías
async function exportZip(mode) {
  if (typeof JSZip === "undefined") {
    return showToast("Error: Librería ZIP no cargada. Conéctate a internet una vez para guardarla.");
  }
  showToast("Generando archivo ZIP...");
  const projName = (document.getElementById("editProjectName").value.trim() || "REPORTE_SITE").replace(/[\/:*?"<>|]/g, "_");
  const allFiles = await getAllFilesForProject(currentProjectId);
  const zip = new JSZip();
  const root = zip.folder(projName);

  let noAplicaBlob = null;
  try {
    const resp = await fetch("no_aplica.png");
    if (resp.ok) noAplicaBlob = await resp.blob();
  } catch (_) {}

  const f1Root = root.folder("1. F17-CARPETA DE FOTOS");
  for (const item of FOLDER_1_ITEMS) {
    const subFolder = f1Root.folder(item.name);
    const subFiles = allFiles.filter(f => f.subId === item.id);
    if (subFiles.length > 0) {
      subFiles.forEach(f => subFolder.file(f.name, f.blob));
    } else if (noAplicaBlob) {
      subFolder.file("NO_APLICA.png", noAplicaBlob);
    }
  }

  const f2Root = root.folder("2. FORMATOS MP");
  const f2Files = allFiles.filter(f => f.subId === "f2_formatos");
  if (f2Files.length > 0) {
    f2Files.forEach(f => f2Root.file(f.name, f.blob));
  } else if (noAplicaBlob) {
    f2Root.file("NO_APLICA.png", noAplicaBlob);
  }

  const f3Root = root.folder("3. MANTENIMIENTO PREVENTIVO");
  for (const item of FOLDER_3_ITEMS) {
    const subFolder = f3Root.folder(item.name);
    const subFiles = allFiles.filter(f => f.subId === item.id);
    if (subFiles.length > 0) {
      subFiles.forEach(f => subFolder.file(f.name, f.blob));
    } else if (noAplicaBlob) {
      subFolder.file("NO_APLICA.png", noAplicaBlob);
    }
  }

  lastZipBlob = await zip.generateAsync({ type: "blob" });
  lastZipFilename = `${projName}.zip`;

  if (mode === "download") {
    const url = URL.createObjectURL(lastZipBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = lastZipFilename;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 5000);
    showToast("ZIP descargado");
  } else {
    const box = document.getElementById("shareReadyBox");
    box.classList.remove("hidden");
    showToast("ZIP listo. Presiona 'Enviar archivo ZIP ahora'");
  }
}

document.getElementById("directShareBtn").addEventListener("click", async () => {
  if (!lastZipBlob) return;
  const file = new File([lastZipBlob], lastZipFilename, { type: "application/zip" });
  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    try {
      await navigator.share({ files: [file], title: lastZipFilename });
      return;
    } catch (_) {}
  }
  const url = URL.createObjectURL(lastZipBlob);
  const a = document.createElement("a");
  a.href = url;
  a.download = lastZipFilename;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 5000);
  showToast("Descargado en tu dispositivo para adjuntar");
});

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, s => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[s]));
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}

initDB().then(() => {
  renderProjects();
});
