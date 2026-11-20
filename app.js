const F17_SUBS = [
  { id: "f17_01", name: "1. Caminos", desc: "FOTOS CAMINOS, CALLES DESDE CUSTODIO HACIA SITE, INCLUYE CAMINATA HACIA CERRO" },
  { id: "f17_02", name: "2. Edificio & Cercos", desc: "FOTOS PANORAMICAS DEL EDIFICIO O SITE POR LOS 4 LADOS" },
  { id: "f17_03", name: "3. Medidor & Tableros & Contadores", desc: "FOTOS PANORAMICAS DE LOS TABLEROS, SUMINISTROS Y CONTADORES" },
  { id: "f17_04", name: "4. Accesos & Puertas", desc: "FOTOS DE ACCESO A EDIFICIO, PUERTAS, ESCALERAS INCLUYE LLAVES O CANDADOS" },
  { id: "f17_05", name: "5. Base de torre & Linea de Vida", desc: "FOTOS DE PEDESTAL DE TORRE Y BASE DE VIENTOS O ARRIOSTRES POR LOS 4 LADOS" },
  { id: "f17_06", name: "6. Equipos en piso & Losas", desc: "FOTOS PANORAMICOS DE GABINETES INCLUYE PLATAFORMA, MODULOS, GPS EN PISO" },
  { id: "f17_07", name: "7. Sistema de puesta a tierra", desc: "FOTOS DE BARRAS EN PISO Y TORRE. CABLE DE BAJADA DE ATERRAMIENTO. PARARAYO Y POZOS TIERRA" },
  { id: "f17_08", name: "8. Portacables & Escalerillas rack", desc: "FOTOS DE ESCALERILLA EN PISO Y TORRE" },
  { id: "f17_09", name: "9. Sistema de balizamiento", desc: "FOTOS DE FANALES, FOTOCELDA, CABLE VULCANIZADO, LIMPIEZA Y PRUEBA DE FUNCIONAMIENTO" },
  { id: "f17_10", name: "10. Equipos en torre", desc: "FOTOS PANORAMICO DE EQUIPOS, ETIQUETA, CABLES, INICIO Y FIN DE SOPORTES, MEDICION DE TUBO, ALTURA" },
  { id: "f17_11", name: "11. Vista encima de torre", desc: "FOTOS DE TORRES HACIA ABAJO POR LOS 4 LADOS" },
  { id: "f17_12", name: "12. Vista panoramica de torre", desc: "FOTOS PANORAMICO DE TORRE INCLUYE ZOOM DE AREA DE ROLDANA POR LOS 4 LADOS" },
  { id: "f17_13", name: "13. Vista de site general", desc: "FOTOS GENERALES, PISOS, PAREDES, EQUIPOS, LETRERO, LUMINARIAS, TOMACORRIENTES, TECHOS, SOPORTES" },
  { id: "f17_14", name: "14. Transformadores & Postes", desc: "FOTOS DE POSTES DE COMETIDA, POSTE DE TRANSFORMADOR INCLUYE ZOOM A TRANSFORMADOR" },
  { id: "f17_15", name: "15. Vistas de 30° encima de torre cada foto 5MB", desc: "FOTOS EN HORIZONTAL 12 FOTOS CADA 30 GRADOS, BARRIDO 0 A 180 Y 180 A 360 (ALTA RESOLUCIÓN)", highRes: true },
  { id: "f17_16", name: "16. Generadores", desc: "FOTOS DE GENERADORES, TANQUE COMBUSTIBLE, FOTOS DE AREA DE GENERADOR" },
  { id: "f17_17", name: "17. Estado de torre", desc: "FOTOS DE ANGULOS, PERNERIA Y PRUEBA DE TORQUE, ESTADO DE PINTURA. VERIFICAR CORROSION" },
  { id: "f17_18", name: "18. Vista panoramica de la estación por dentro y fuera", desc: "FOTOS PANORAMICAS DE PAREDES POR DENTRO Y FUERA POR 4 LADOS" },
  { id: "f17_19", name: "19. Vista de ingreso de Fibra Optica", desc: "FOTOS ETIQUETAR OPERADOR FIBRA OPTICA, FOTOS DE RECORRIDO, CAMARAS" },
  { id: "f17_20", name: "20. Diagrama Unifilar desde Medidor hasta tableros", desc: "DIBUJAR DIAGRAMA DE RECORRIDO DE SUMINISTRO ATP HACIA TABLERO ATP" },
  { id: "f17_21", name: "21. Diagrama Unifilar de Tableros", desc: "DIBUJAR DIAGRAMA DE RECORRIDO DE SUMINISTRO OPERADOR HACIA TABLERO OPERADOR" },
  { id: "f17_22", name: "22. Diagrama de traslado desde Provincia al site", desc: "ESCRIBIR EL RECORRIDO DE LA RUTA DESDE EL CUSTODIO HACIA EL SITE, ZONAS PUNTUALES Y TIEMPO" },
  { id: "f17_23", name: "23. Vista de concertina", desc: "FOTOS VERIFICAR CORROSION Y CORTADO DE CONCERTINA. FOTO ANTES Y DESPUES" },
  { id: "f17_24", name: "24. Vista de buzones abiertos y cerrados", desc: "FOTOS DE BUZONES ABIERTO Y CERRADO, FIBRA OPTICA, LLAVE Y CANDADO, LIMPIEZA DE BUZONES" },
  { id: "f17_25", name: "25. Etiquetado de llaves y video de validacion", desc: "FOTOS DE LLAVES SUELTAS DEL MANOJO Y ETIQUETADO EN PISO. VIDEO FUNCIONAMIENTO DE LA LLAVE" },
  { id: "f17_26", name: "26. Estado de polimero, pvc, persiana, radomo, etc", desc: "FOTOS PANORAMICA DE POLIMERO O PVC, PERNERIA, EMPALMES, PINTURA" },
  { id: "f17_27", name: "27. Vista de luminarias en poste, site, arqueta", desc: "FOTOS DE LUMINARIAS APAGADAS Y PRENDIDAS EN SALA EQUIPOS Y POSTE SI APLICA" },
  { id: "f17_28", name: "28. Fotos de gestion ambiental", desc: "FOTOS DE CHARLA Y PERSONAL CON EPPS, SEÑALIZACION Y GESTION DE RESIDUOS" },
  { id: "f17_29", name: "29. Fotos de cambio de batería", desc: "FOTOS Y VIDEOS DE PROCESO DE CAMBIO DE BATERIA, MEDICION DE BATERIA, CANDADO NUEVO" }
];

const FORMATOS_SUBS = [
  { id: "fmt_01", name: "2. FORMATOS MP", desc: "SUBIR FOTOS Y ARCHIVOS PDF DE FORMATOS DE MANTENIMIENTO PREVENTIVO", allowPdf: true }
];

const MP_SUBS = [
  { id: "mp_01", name: "1. Personal con EPPs & Equipos utilizados", desc: "FOTO DE PERSONAL CON EPPS Y CHARLA DE 5 MINUTOS, EQUIPOS UTILIZADOS, TELUROMETRO, PINZA, BRUJULA" },
  { id: "mp_02", name: "2. Altura de torre", desc: "FOTO DE ARRIBA HACIA ABAJO, DE ABAJO HACIA ARRIBA. INCLUYE ALTURA TORRE BASE, ROLDANA SUPERIOR E INFERIOR" },
  { id: "mp_03", name: "3. Medida de pedestal", desc: "FOTO PANORAMICA DE ALTURA, LARGO Y ANCHO" },
  { id: "mp_04", name: "4. Limpieza de fanales", desc: "FOTOS LIMPIEZA DE FANALES Y FOTOCELDA" },
  { id: "mp_05", name: "5. Limpieza de pozos", desc: "FOTOS LIMPIEZA DE POZOS TIERRA, INCLUYE PINTADO" },
  { id: "mp_06", name: "6. Limpieza del site y Polimero", desc: "FOTOS DE LIMPIEZA DE PISOS, PAREDES, ESCALERILLA, BASTIDORES, POLIMERO O PVC EN TORRE" },
  { id: "mp_07", name: "7. Trabajo en contador", desc: "FOTOS PANORAMICA, LIMPIEZA Y MEDICION DE CONTADORES" },
  { id: "mp_08", name: "8. Aceitado en chapas y bisagras", desc: "FOTOS DE LIMPIEZA Y ACEITADO DE CHAPAS, BISAGRAS DE TODAS LAS PUERTAS EN SITE" },
  { id: "mp_09", name: "9. Validación de diagrama unifilar de tableros", desc: "FOTOS DIBUJAR EN HOJA EL DIAGRAMA ACTUAL DESDE SUMINISTRO HACIA TABLEROS INCLUYE TODAS LAS LLAVES" },
  { id: "mp_10", name: "10. Prueba de espesor", desc: "FOTOS DE ESPESOR DE PINTURA Y GALVANIZADO EN VALOR mils EN VARIAS PARTES DE LA TORRE" },
  { id: "mp_11", name: "11. Prueba de adherencia", desc: "FOTOS DE CORTE, CINTA CERRADA, CINTA ABIERTA EN VARIAS PARTES DE LA TORRE" },
  { id: "mp_12", name: "12. Limpieza y engrase de BT", desc: "FOTOS ANTES, CON ESPATULA Y DESPUES ENGRASADO DE TODAS LAS BARRAS EN PISO Y TORRE" },
  { id: "mp_13", name: "13. Mantenimiento de tableros", desc: "FOTOS DE LIMPIEZA CON BROCHA Y TORQUE DE TODOS LOS TABLEROS EN LA ESTACION" },
  { id: "mp_14", name: "14. Medición de tableros", desc: "FOTOS DE MEDICIONES DE AMPERIOS (R,S,T) Y VOLTAJE (RS, RT, ST) EN I.G Y SALIDA DE EQUIPOS" },
  { id: "mp_15", name: "15. Limpieza de pedestal", desc: "FOTOS DE LIMPIEZA CON ESCOBA EN PEDESTAL Y BASE DE VIENTOS U ARRIOSTRES" },
  { id: "mp_16", name: "16. Mantenimiento y medidas de equipos en piso", desc: "FOTOS DE LIMPIEZA CON ESCOBA Y MEDICION CON WINCHA DE TODOS LOS EQUIPOS EN PISO (ANCHO, LARGO, ALTURA)" },
  { id: "mp_17", name: "17. Brujula", desc: "FOTOS DE BRUJULA Y ESCRITO CON PLUMON EL AZIMUT EN LA PATA DE TORRE" },
  { id: "mp_18", name: "18. GPS", desc: "FOTOS PANORAMICA Y DE CERCA A GPS EN BASE DE TORRE, QUE SE NOTE LAS COORDENADAS" },
  { id: "mp_19", name: "19. Altura de edificio", desc: "ALTURA EDIFICIO, ALTURA PARAPETO, ALTURA ESCALERA AZOTEA" },
  { id: "mp_20", name: "20. Uso de nivel", desc: "FOTO PANORAMICA DE NIVEL EN MONTANTE DE TORRE, TORRE VENTADA, MASTIL, AUTOSOPORTADA, MONOPOLO" },
  { id: "mp_21", name: "21. Aplicación de spray", desc: "FOTO APLICACION EN ACCESORIOS DE LINEA DE VIDA, ACCESORIOS DE VIENTOS, GRAMPAS Y GRILLETES" },
  { id: "mp_22", name: "22. Soportes vacios en torre, mastil, altura y azimut", desc: "FOTOS PANORAMICA DE TUBO, MEDIDA DE TUBO, AZIMUT, ALTURA EJE DE TUBO DE SOPORTES VACIOS" },
  { id: "mp_23", name: "23. Vistas de las cordenadas de cada arista del site", desc: "FOTOS PANORAMICA DE GPS EN CADA ESQUINA DE SALA EQUIPOS, ESCRIBIR CON PLUMON A, B, C, D" },
  { id: "mp_24", name: "24. Vistas de las medidas del perimetro del site", desc: "FOTOS PANORAMICA Y CERCA DE MEDIDA DE WINCHA DE ANCHO, LARGO Y ALTURA DE SALA DE EQUIPO" },
  { id: "mp_25", name: "25. Mantenimiento de ramas y hojas del monopolo", desc: "FOTOS DE LIMPIEZA DE OJOS Y CAMBIO DE CINTILLO DE HOJAS EN MIMETIZADO SI APLICA" },
  { id: "mp_26", name: "26. Mantenimiento de aires forzados y video", desc: "FOTOS PANORAMICA, LIMPIEZA, PLACAS, MEDICION DE INYECTOR Y EXTRACTOR, EXTERIOR Y REJILLA" },
  { id: "mp_27", name: "27. Altura soporte ocupados", desc: "FOTOS PANORAMICA DE ALTURA DE EJE DE SOPORTES OCUPADOS. ESCRIBIR OPERADOR Y EQUIPO" },
  { id: "mp_28", name: "28. Vista de Azotea", desc: "FOTOS PANORAMICA DE AZOTEA DE PROPIETARIO POR LOS 4 LADOS" },
  { id: "mp_29", name: "29. Vista de Limpieza exterior 4 lados", desc: "FOTOS DE LIMPIEZA EXTERIOR, LIMPIAR BASURA Y MALEZA 1.5M APROX. FOTOS DE ANTES Y DESPUES" },
  { id: "mp_30", name: "30. Fotos del mtto de video camara", desc: "FOTOS DE LIMPIEZA DE CAMARA, TORQUE TABLERO, REINICIAR CAMARA SI REQUIERE, VERIFICAR FUNCIONAMIENTO" }
];

const TOTAL_SLOTS = F17_SUBS.length + FORMATOS_SUBS.length + MP_SUBS.length; // 60

let db;
let currentProjectId = null;
let currentTab = 1;
let activeSubId = null;
let activeHighRes = false;
let viewerFiles = [];
let viewerIndex = 0;

// IndexedDB
const req = indexedDB.open("ATP_Reportes_DB_v15", 1);
req.onupgradeneeded = (e) => {
  const d = e.target.result;
  if (!d.objectStoreNames.contains("projects")) d.createObjectStore("projects", { keyPath: "id" });
  if (!d.objectStoreNames.contains("files")) {
    const fs = d.createObjectStore("files", { keyPath: "id", autoIncrement: true });
    fs.createIndex("projectId", "projectId", { unique: false });
  }
};
req.onsuccess = (e) => {
  db = e.target.result;
  renderProjects();
};

function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.style.display = "block";
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => { t.style.display = "none"; }, 3200);
}

function sanitizeFileName(name) {
  return name.replace(/[^a-zA-Z0-9._-]/g, "_").replace(/_+/g, "_");
}

function getAllProjects() {
  return new Promise((res) => {
    const tx = db.transaction("projects", "readonly");
    tx.objectStore("projects").getAll().onsuccess = (e) => res(e.target.result || []);
  });
}

function getProjectFiles(projectId) {
  return new Promise((res) => {
    const tx = db.transaction("files", "readonly");
    tx.objectStore("files").index("projectId").getAll(projectId).onsuccess = (e) => res(e.target.result || []);
  });
}

async function createProject() {
  const inp = document.getElementById("new-project-name");
  const name = inp.value.trim();
  if (!name) return showToast("Escribe un nombre para la carpeta principal.");
  const proj = { id: "proj_" + Date.now(), name, createdAt: Date.now() };
  const tx = db.transaction("projects", "readwrite");
  tx.objectStore("projects").add(proj).onsuccess = () => {
    inp.value = "";
    renderProjects();
    showToast("Carpeta creada.");
  };
}

async function renameProject(id) {
  const projs = await getAllProjects();
  const p = projs.find(x => x.id === id);
  if (!p) return;
  const nuevo = prompt("Nuevo nombre para la carpeta principal:", p.name);
  if (!nuevo || !nuevo.trim()) return;
  p.name = nuevo.trim();
  const tx = db.transaction("projects", "readwrite");
  tx.objectStore("projects").put(p).onsuccess = () => {
    renderProjects();
    showToast("Nombre actualizado.");
  };
}

async function deleteProject(id) {
  if (!confirm("¿Eliminar toda esta carpeta principal y sus fotos?")) return;
  const files = await getProjectFiles(id);
  const tx = db.transaction(["projects", "files"], "readwrite");
  tx.objectStore("projects").delete(id);
  files.forEach(f => tx.objectStore("files").delete(f.id));
  tx.oncomplete = () => {
    renderProjects();
    showToast("Carpeta eliminada.");
  };
}

async function renderProjects() {
  const list = document.getElementById("projects-list");
  const projs = await getAllProjects();
  if (!projs.length) {
    list.innerHTML = `<p style="text-align:center; color:var(--muted); margin-top:24px; font-size:0.9rem;">No hay carpetas creadas todavía.</p>`;
    return;
  }
  let html = "";
  for (const p of projs.sort((a,b) => b.createdAt - a.createdAt)) {
    const files = await getProjectFiles(p.id);
    const filledCount = new Set(files.map(f => f.subId)).size;
    const pct = Math.round((filledCount / TOTAL_SLOTS) * 100);
    const completeClass = pct === 100 ? "complete" : "";
    html += `
      <div class="project-card">
        <div class="project-header">
          <div class="project-title" onclick="openProject('${p.id}')">${p.name}</div>
          <span class="pct-pill ${completeClass}">${pct}% (${filledCount}/${TOTAL_SLOTS})</span>
        </div>
        <div class="progress-track">
          <div class="progress-fill ${completeClass}" style="width:${pct}%"></div>
        </div>
        <div class="project-actions">
          <button class="btn btn-primary btn-sm" onclick="openProject('${p.id}')">Entrar</button>
          <button class="btn btn-secondary btn-sm" onclick="renameProject('${p.id}')">Renombrar</button>
          <button class="btn btn-accent btn-sm" onclick="exportProjectZip('${p.id}', false)">Descargar ZIP</button>
          <button class="btn btn-secondary btn-sm" onclick="exportProjectZip('${p.id}', true)">Compartir ZIP</button>
          <button class="btn btn-danger btn-sm" onclick="deleteProject('${p.id}')">Eliminar</button>
        </div>
      </div>
    `;
  }
  list.innerHTML = html;
}

async function openProject(id) {
  currentProjectId = id;
  currentTab = 1;
  document.getElementById("view-projects").style.display = "none";
  document.getElementById("view-inside").style.display = "block";
  await updateInsideHeader();
  switchTab(1);
}

function closeProject() {
  currentProjectId = null;
  document.getElementById("view-inside").style.display = "none";
  document.getElementById("view-projects").style.display = "block";
  renderProjects();
}

async function updateInsideHeader() {
  const projs = await getAllProjects();
  const p = projs.find(x => x.id === currentProjectId);
  if (!p) return;
  const files = await getProjectFiles(p.id);
  const filledCount = new Set(files.map(f => f.subId)).size;
  const pct = Math.round((filledCount / TOTAL_SLOTS) * 100);
  document.getElementById("inside-title").textContent = p.name;
  const pill = document.getElementById("inside-pct");
  const bar = document.getElementById("inside-bar");
  pill.textContent = `${pct}% (${filledCount}/${TOTAL_SLOTS})`;
  bar.style.width = `${pct}%`;
  pill.classList.toggle("complete", pct === 100);
  bar.classList.toggle("complete", pct === 100);
}

function switchTab(tabNum) {
  currentTab = tabNum;
  [1, 2, 3].forEach(n => {
    document.getElementById(`tab-${n}`).classList.toggle("active", n === tabNum);
  });
  renderSubfolders();
}

async function renderSubfolders() {
  const container = document.getElementById("subfolders-list");
  const subs = currentTab === 1 ? F17_SUBS : currentTab === 2 ? FORMATOS_SUBS : MP_SUBS;
  const files = await getProjectFiles(currentProjectId);

  let html = "";
  for (const s of subs) {
    const subFiles = files.filter(f => f.subId === s.id);
    const badgeClass = subFiles.length > 0 ? "filled" : "";
    const badgeText = subFiles.length > 0 ? `${subFiles.length} archivo(s)` : "Vacía → NO APLICA";
    let thumbsHtml = "";
    if (subFiles.length > 0) {
      thumbsHtml = `<div class="thumb-grid">`;
      subFiles.forEach((f, idx) => {
        const url = URL.createObjectURL(f.blob);
        if (f.type.startsWith("image/")) {
          thumbsHtml += `
            <div class="thumb-item">
              <img src="${url}" onclick="openViewer('${s.id}', ${idx})" />
              <button class="thumb-del" onclick="deleteFile(${f.id})">×</button>
            </div>`;
        } else {
          thumbsHtml += `
            <div class="thumb-item">
              <div class="thumb-doc" onclick="window.open('${url}', '_blank')">${f.name}</div>
              <button class="thumb-del" onclick="deleteFile(${f.id})">×</button>
            </div>`;
        }
      });
      thumbsHtml += `</div>`;
    }

    html += `
      <div class="sub-card">
        <div class="sub-head">
          <div class="sub-title">${s.name}</div>
          <span class="sub-badge ${badgeClass}">${badgeText}</span>
        </div>
        <div class="sub-desc">${s.desc}</div>
        <div class="sub-actions">
          <button class="btn btn-primary btn-sm" onclick="triggerCamera('${s.id}', ${!!s.highRes})">Tomar Foto</button>
          <button class="btn btn-secondary btn-sm" onclick="triggerGallery('${s.id}', ${!!s.highRes}, ${!!s.allowPdf})">Subir Foto</button>
        </div>
        ${thumbsHtml}
      </div>
    `;
  }
  container.innerHTML = html;
}

// Disparo compatible con APK / WebView
function triggerCamera(subId, highRes) {
  activeSubId = subId;
  activeHighRes = highRes;
  const inp = document.getElementById("input-camera");
  inp.value = "";
  inp.click();
}

function triggerGallery(subId, highRes, allowPdf) {
  activeSubId = subId;
  activeHighRes = highRes;
  const inp = document.getElementById("input-gallery");
  inp.accept = allowPdf ? "image/*,video/*,application/pdf" : "image/*,video/*";
  inp.value = "";
  inp.click();
}

document.getElementById("input-camera").addEventListener("change", async (e) => {
  if (!e.target.files || !e.target.files.length) return;
  await handleFiles(e.target.files, true);
  // Modo ráfaga continua opcional
  setTimeout(() => {
    if (confirm("Foto guardada. ¿Tomar otra foto en esta carpeta?")) {
      triggerCamera(activeSubId, activeHighRes);
    }
  }, 300);
});

document.getElementById("input-gallery").addEventListener("change", async (e) => {
  if (!e.target.files || !e.target.files.length) return;
  await handleFiles(e.target.files, false);
});

function getGeoInfo() {
  return new Promise((resolve) => {
    if (!navigator.geolocation) return resolve({ coords: "GPS no disponible", place: "" });
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude.toFixed(6);
        const lon = pos.coords.longitude.toFixed(6);
        let place = "";
        try {
          const r = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
          const d = await r.json();
          if (d && d.address) {
            place = d.address.suburb || d.address.city_district || d.address.town || d.address.city || "";
          }
        } catch (_) {}
        resolve({ coords: `${lat}, ${lon}`, place });
      },
      () => resolve({ coords: "Sin señal GPS", place: "" }),
      { enableHighAccuracy: true, timeout: 4500 }
    );
  });
}

async function processImageWithWatermark(file, projectName, addWatermark, highRes) {
  const geo = addWatermark ? await getGeoInfo() : null;
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      let w = img.width;
      let h = img.height;
      // Redimensionar solo si no es alta resolucion (30 grados)
      if (!highRes && Math.max(w, h) > 1600) {
        const ratio = 1600 / Math.max(w, h);
        w = Math.round(w * ratio);
        h = Math.round(h * ratio);
      }
      const canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, w, h);

      if (addWatermark) {
        const now = new Date();
        const fecha = now.toLocaleDateString("es-PE") + " " + now.toLocaleTimeString("es-PE", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
        const lines = [projectName, fecha, geo.coords];
        if (geo.place) lines.push(geo.place);

        const fontSize = Math.max(18, Math.round(w * 0.024));
        ctx.font = `bold ${fontSize}px sans-serif`;
        ctx.textAlign = "right";
        ctx.textBaseline = "bottom";
        ctx.fillStyle = "#ffffff";
        ctx.shadowColor = "rgba(0,0,0,0.85)";
        ctx.shadowBlur = 4;
        ctx.shadowOffsetX = 1;
        ctx.shadowOffsetY = 1;

        const margin = Math.round(w * 0.02);
        const lineHeight = Math.round(fontSize * 1.25);
        lines.reverse().forEach((line, i) => {
          ctx.fillText(line, w - margin, h - margin - (i * lineHeight));
        });
      }

      const targetMaxBytes = 980 * 1024; // < 1MB
      let quality = highRes ? 0.95 : 0.85;

      function exportBlob(q) {
        canvas.toBlob((blob) => {
          if (!highRes && blob.size > targetMaxBytes && q > 0.45) {
            exportBlob(q - 0.12);
          } else {
            resolve(blob);
          }
        }, "image/jpeg", q);
      }
      exportBlob(quality);
    };
    img.src = URL.createObjectURL(file);
  });
}

async function handleFiles(fileList, isFromCamera) {
  showToast("Procesando archivo(s)...");
  const projs = await getAllProjects();
  const proj = projs.find(x => x.id === currentProjectId);
  const existing = await getProjectFiles(currentProjectId);
  let counter = existing.filter(f => f.subId === activeSubId).length;

  for (const file of Array.from(fileList)) {
    counter++;
    const baseName = sanitizeFileName(proj.name);
    const numStr = String(counter).padStart(2, "0");
    let finalBlob = file;
    let finalName = `${baseName}_${numStr}`;

    if (file.type.startsWith("image/")) {
      finalBlob = await processImageWithWatermark(file, proj.name, isFromCamera, activeHighRes);
      finalName += ".jpg";
    } else {
      const ext = file.name.includes(".") ? "." + file.name.split(".").pop() : "";
      finalName += ext;
    }

    await new Promise((res) => {
      const tx = db.transaction("files", "readwrite");
      tx.objectStore("files").add({
        projectId: currentProjectId,
        subId: activeSubId,
        name: finalName,
        type: finalBlob.type || file.type,
        blob: finalBlob
      }).onsuccess = res;
    });
  }

  await updateInsideHeader();
  await renderSubfolders();
  showToast("Archivo(s) guardado(s).");
}

async function deleteFile(fileId) {
  if (!confirm("¿Seguro que deseas eliminar este archivo?")) return;
  await new Promise((res) => {
    const tx = db.transaction("files", "readwrite");
    tx.objectStore("files").delete(fileId).onsuccess = res;
  });
  await updateInsideHeader();
  await renderSubfolders();
  showToast("Archivo eliminado.");
}

// Visor deslizable
async function openViewer(subId, idx) {
  const files = await getProjectFiles(currentProjectId);
  viewerFiles = files.filter(f => f.subId === subId && f.type.startsWith("image/"));
  if (!viewerFiles.length) return;
  viewerIndex = Math.min(idx, viewerFiles.length - 1);
  updateViewer();
  document.getElementById("viewer-modal").classList.add("open");
}

function updateViewer() {
  const f = viewerFiles[viewerIndex];
  document.getElementById("viewer-info").textContent = `${viewerIndex + 1} / ${viewerFiles.length} · ${f.name}`;
  document.getElementById("viewer-content").innerHTML = `<img src="${URL.createObjectURL(f.blob)}" />`;
}

function navViewer(dir) {
  if (!viewerFiles.length) return;
  viewerIndex = (viewerIndex + dir + viewerFiles.length) % viewerFiles.length;
  updateViewer();
}

function closeViewer() {
  document.getElementById("viewer-modal").classList.remove("open");
}

async function deleteFromViewer() {
  const f = viewerFiles[viewerIndex];
  if (!confirm(`¿Seguro que deseas eliminar "${f.name}"?`)) return;
  await new Promise((res) => {
    const tx = db.transaction("files", "readwrite");
    tx.objectStore("files").delete(f.id).onsuccess = res;
  });
  viewerFiles.splice(viewerIndex, 1);
  await updateInsideHeader();
  await renderSubfolders();
  if (!viewerFiles.length) {
    closeViewer();
  } else {
    viewerIndex = viewerIndex % viewerFiles.length;
    updateViewer();
  }
  showToast("Foto eliminada.");
}

// Gestos táctiles en visor
let touchStartX = 0;
document.getElementById("viewer-touch-area").addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});
document.getElementById("viewer-touch-area").addEventListener("touchend", (e) => {
  const diff = e.changedTouches[0].screenX - touchStartX;
  if (Math.abs(diff) > 45) navViewer(diff < 0 ? 1 : -1);
});

// Generación y descarga/compartir ZIP estricto (.zip)
async function exportProjectZip(projectId, isShare) {
  showToast("Generando archivo .ZIP completo...");
  const projs = await getAllProjects();
  const proj = projs.find(x => x.id === projectId);
  if (!proj) return;

  const files = await getProjectFiles(projectId);
  const zip = new JSZip();
  const rootName = sanitizeFileName(proj.name);
  const rootFolder = zip.folder(rootName);

  // Cargar imagen NO APLICA
  let noAplicaBlob = null;
  try {
    const resp = await fetch("no_aplica.png");
    noAplicaBlob = await resp.blob();
  } catch (_) {}

  const addSectionToZip = (parentFolder, subsList) => {
    for (const s of subsList) {
      const subFolder = parentFolder.folder(sanitizeFileName(s.name));
      const subFiles = files.filter(f => f.subId === s.id);
      if (subFiles.length > 0) {
        subFiles.forEach(f => subFolder.file(f.name, f.blob));
      } else if (noAplicaBlob) {
        subFolder.file("NO_APLICA.png", noAplicaBlob);
      }
    }
  };

  addSectionToZip(rootFolder.folder("1. F17-CARPETA DE FOTOS"), F17_SUBS);
  addSectionToZip(rootFolder.folder("2. FORMATOS MP"), FORMATOS_SUBS);
  addSectionToZip(rootFolder.folder("3. MANTENIMIENTO PREVENTIVO"), MP_SUBS);

  const rawBlob = await zip.generateAsync({ type: "blob", mimeType: "application/zip" });
  const zipBlob = new Blob([rawBlob], { type: "application/zip" });
  const zipFileName = `${rootName}.zip`;

  if (isShare && navigator.canShare) {
    const fileObj = new File([zipBlob], zipFileName, { type: "application/zip" });
    if (navigator.canShare({ files: [fileObj] })) {
      try {
        await navigator.share({ files: [fileObj], title: zipFileName });
        return;
      } catch (_) {}
    }
  }

  // Descarga directa forzada con extensión .zip
  const url = URL.createObjectURL(zipBlob);
  const a = document.createElement("a");
  a.href = url;
  a.download = zipFileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 5000);
  showToast(`Descargado: ${zipFileName}`);
}
