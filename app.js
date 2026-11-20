const SECTIONS = [
  {
    id: "f17",
    title: "1. F17-CARPETA DE FOTOS",
    items: [
      { id: "f17_01", name: "1. Caminos", desc: "FOTOS CAMINOS, CALLES DESDE CUSTODIO HACIA SITE, INCLUYE CAMINATA HACIA CERRO" },
      { id: "f17_02", name: "2. Edificio & Cercos", desc: "FOTOS PANORAMICAS DEL EDIFICIO O SITE POR LOS 4 LADOS" },
      { id: "f17_03", name: "3. Medidor & Tableros & Contadores", desc: "FOTOS PANORAMICAS DE LOS TABLEROS, SUMINISTROS Y CONTADORES" },
      { id: "f17_04", name: "4. Accesos & Puertas", desc: "FOTOS DE ACCESO A EDIFICIO, PUERTAS, ESCALERAS INCLUYE LLAVES O CANDADOS" },
      { id: "f17_05", name: "5. Base de torre & Linea de Vida", desc: "FOTOS DE PEDESTAL DE TORRE Y BASE DE VIENTOS O ARRIOSTRES POR LOS 4 LADOS" },
      { id: "f17_06", name: "6. Equipos en piso & Losas", desc: "FOTOS PANORAMICOS DE GABINETES INCLUYE PLATAFORMA, MODULOS, GPS EN PISO" },
      { id: "f17_07", name: "7. Sistema de puesta a tierra", desc: "FOTOS DE BARRAS EN PISO Y TORRE. CABLE DE BAJADA DE ATERRAMIENTO. PARARAYO Y POZOS TIERRA LIMPIEZA Y MEDICIONES" },
      { id: "f17_08", name: "8. Portacables & Escalerillas rack", desc: "FOTOS DE ESCALERILLA EN PISO Y TORRE" },
      { id: "f17_09", name: "9. Sistema de balizamiento", desc: "FOTOS DE FANALES, FOTOCELDA, CABLE VULCANIZADO, LIMPIEZA DE FANALES Y PRUEBA DE FUNCIONAMIENTO" },
      { id: "f17_10", name: "10. Equipos en torre", desc: "FOTOS PANORAMICO DE EQUIPOS, ETIQUETA, CABLES, INICIO Y FIN DE SOPORTES, MEDICION DE TUBO, ALTURA DE EQUIPO" },
      { id: "f17_11", name: "11. Vista encima de torre", desc: "FOTOS DE TORRES HACIA ABAJO POR LOS 4 LADOS" },
      { id: "f17_12", name: "12. Vista panoramica de torre", desc: "FOTOS PANORAMICO DE TORRE INCLUYE ZOOM DE AREA DE ROLDANA POR LOS 4 LADOS" },
      { id: "f17_13", name: "13. Vista de site general", desc: "FOTOS GENERALES, PISOS, PAREDES, EQUIPOS, LETRERO, LUMINARIAS, TOMACORRIENTES, TECHOS, SOPORTES" },
      { id: "f17_14", name: "14. Transformadores & Postes", desc: "FOTOS DE POSTES DE COMETIDA, FOTOS DE POSTE DE TRANSFORMADOR INCLUYE ZOOM A TRANSFORMADOR" },
      { id: "f17_15", name: "15. Vistas de 30° encima de torre cada foto 5MB", desc: "FOTOS EN HORIZONTAL 12 FOTOS CADA 30 GRADOS, FOTOS BARRIDO 0 A 180 Y 180 A 360 (3 RONDAS) - ALTA RESOLUCION", highRes: true },
      { id: "f17_16", name: "16. Generadores", desc: "FOTOS DE GENERADORES, TANQUE COMBUSTIBLE, FOTOS DE AREA DE GENERADOR" },
      { id: "f17_17", name: "17. Estado de torre", desc: "FOTOS DE ANGULOS, PERNERIA Y PRUEBA DE TORQUE, ESTADO DE PINTURA. VERIFICAR CORROSION Y FALTANTES" },
      { id: "f17_18", name: "18. Vista panoramica de la estacion por dentro y fuera", desc: "FOTOS PANORAMICAS DE PAREDES POR DENTRO Y FUERA POR 4 LADOS" },
      { id: "f17_19", name: "19. Vista de ingreso de Fibra Optica, identificar Operador, abrir cajas de pase", desc: "FOTOS ETIQUETAR OPERADOR FIBRA OPTICA, FOTOS DE RECORRIDO, CAMARAS" },
      { id: "f17_20", name: "20. Diagrama Unifilar desde Medidor hasta tableros", desc: "DIBUJAR DIAGRAMA DE RECORRIDO DE SUMINISTRO ATP HACIA TABLERO ATP" },
      { id: "f17_21", name: "21. Diagrama Unifilar de Tableros", desc: "DIBUJAR DIAGRAMA DE RECORRIDO DE SUMINISTRO OPERADOR HACIA TABLERO OPERADOR" },
      { id: "f17_22", name: "22. Diagrama de traslado desde Provincia al site", desc: "ESCRIBIR EL RECORRIDO DE LA RUTA DESDE EL CUSTODIO HACIA EL SITE, ZONAS PUNTUALES Y TIEMPO" },
      { id: "f17_23", name: "23. Vista de concertina", desc: "FOTOS VERIFICAR CORROSION Y CORTADO DE CONCERTINA. INCLUYE REPARAR CONCERTINA. FOTO ANTES Y DESPUES" },
      { id: "f17_24", name: "24. Vista de buzones abiertos y cerrados", desc: "FOTOS DE BUZONES ABIERTO Y CERRADO, FIBRA OPTICA, LLAVE Y CANDADO, LIMPIEZA DE BUZONES" },
      { id: "f17_25", name: "25. Etiquetado de llaves y video de validacion", desc: "FOTOS DE LLAVES SUELTAS DEL MANOJO Y ETIQUETADO EN PISO. VIDEO FUNCIONAMIENTO DE LA LLAVE EN LA PUERTA PRINCIPAL DEL SITE" },
      { id: "f17_26", name: "26. Estado de polimero, pvc, persiana, radomo, etc", desc: "FOTOS PANORAMICA DE POLIMERO O PVC, PERNERIA, EMPALMES, PINTURA" },
      { id: "f17_27", name: "27. Vista de luminarias en poste, site, arqueta", desc: "FOTOS DE LUMINARIAS APAGADAS Y PRENDIDAS EN SALA EQUIPOS Y POSTE SI APLICA" },
      { id: "f17_28", name: "28. Fotos de gestion ambiental", desc: "FOTOS DE CHARLA Y PERSONAL CON EPPS. SEÑALIZACION, Y GESTION DE RESIDUOS, USO DE EPPS DE TECNICO" },
      { id: "f17_29", name: "29. Fotos de cambio de bateria", desc: "FOTOS Y VIDEOS DE PROCESO DE CAMBIO DE BATERIA, MEDICION DE BATERIA. VIDEO FUNCIONAMIENTO DE CANDADO NUEVO" }
    ]
  },
  {
    id: "formatos",
    title: "2. FORMATOS MP",
    items: [
      { id: "fmt_01", name: "2. FORMATOS MP", desc: "SUBIR FOTOS Y ARCHIVOS PDF DE FORMATOS DE MANTENIMIENTO PREVENTIVO", allowPdf: true }
    ]
  },
  {
    id: "mp",
    title: "3. MANTENIMIENTO PREVENTIVO",
    items: [
      { id: "mp_01", name: "1. Personal con EPPs & Equipos utilizados", desc: "FOTO DE PERSONAL CON EPPS Y CHARLA DE 5 MINUTOS, EQUIPOS UTILIZADOS, TELUROMETRO PINZA, DESARMADORES, BRUJULA, ETC" },
      { id: "mp_02", name: "2. Altura de torre", desc: "FOTO DE ARRIBA HACIA ABAJO, DE ABAJO HACIA ARRIBA. INCLUYE ALTURA TORRE BASE, ROLDANA SUPERIOR E INFERIOR" },
      { id: "mp_03", name: "3. Medida de pedestal", desc: "FOTO PANORAMICA DE ALTURA, LARGO Y ANCHO" },
      { id: "mp_04", name: "4. Limpieza de fanales", desc: "FOTOS LIMPIEZA DE FANALES Y FOTOCELDA" },
      { id: "mp_05", name: "5. Limpieza de pozos", desc: "FOTOS LIMPIEZA DE POZOS TIERRA, INCLUYE PINTADO" },
      { id: "mp_06", name: "6. Limpieza del site y Polimero", desc: "FOTOS DE LIMPIEZA DE PISOS, PAREDES, ESCALERILLA, BASTIDORES, POLIMERO O PVC EN TORRE" },
      { id: "mp_07", name: "7. Trabajo en contador", desc: "FOTOS PANORAMICA, LIMPIEZA Y MEDICION DE CONTADORES" },
      { id: "mp_08", name: "8. Aceitado en chapas y bisagras", desc: "FOTOS DE LIMPIEZA Y ACEITADO DE CHAPAS, BISAGRAS DE TODAS LAS PUERTAS EN SITE" },
      { id: "mp_09", name: "9. Validacion de diagrama unifilar de tableros", desc: "FOTOS DIBUJAR EN HOJA EL DIAGRAMA ACTUAL DESDE SUMINISTRO HACIA TABLEROS INCLUYE TODAS LAS LLAVES" },
      { id: "mp_10", name: "10. Prueba de espesor", desc: "FOTOS DE ESPESOR DE PINTURA Y GALVANIZADO EN VALOR mils EN VARIAS PARTES DE LA TORRE" },
      { id: "mp_11", name: "11. Prueba de adherencia", desc: "FOTOS DE CORTE, CINTA CERRADA, CINTA ABIERTA EN VARIAS PARTES DE LA TORRE" },
      { id: "mp_12", name: "12. Limpieza y engrase de BT", desc: "FOTOS ANTES, CON ESPATULA Y DESPUES ENGRASADO DE TODAS LAS BARRAS EN PISO Y TORRE" },
      { id: "mp_13", name: "13. Mantenimiento de tableros", desc: "FOTOS DE LIMPIEZA CON BROCHA Y TORQUE DE TODOS LOS TABLEROS EN LA ESTACION" },
      { id: "mp_14", name: "14. Medicion de tableros", desc: "FOTOS DE MEDICIONES DE AMPERIOS (R,S,T) Y VOLTAJE (RS, RT, ST) EN I.G Y SALIDA DE EQUIPOS O TABLERO OPERADOR" },
      { id: "mp_15", name: "15. Limpieza de pedestal", desc: "FOTOS DE LIMPIEZA CON ESCOBA EN PEDESTAL Y BASE DE VIENTOS U ARRIOSTRES" },
      { id: "mp_16", name: "16. Mantenimiento y medidas de equipos en piso", desc: "FOTOS DE MANTENIMIENTO DE LIMPIEZA CON ESCOBA Y MEDICION CON WINCHA DE TODOS LOS EQUIPOS EN PISO (ANCHO, LARGO Y ALTURA)" },
      { id: "mp_17", name: "17. Brujula", desc: "FOTOS DE BRUJULA Y ESCRITO CON PLUMON EL AZIMUT EN LA PATA DE TORRE" },
      { id: "mp_18", name: "18. GPS", desc: "FOTOS PANORAMICA Y DE CERCA A GPS EN BASE DE TORRE, QUE SE NOTE LAS COORDENADAS (GRADOS, MINUTOS Y SEGUNDOS)" },
      { id: "mp_19", name: "19. Altura de edificio", desc: "ALTURA EDIFICIO, ALTURA PARAPETO, ALTURA ESCALERA AZOTEA" },
      { id: "mp_20", name: "20. Uso de nivel", desc: "FOTO PANORAMICA DE NIVEL EN MONTANTE DE TORRE, EN TORRE VENTADA, MASTIL Y AUTOSOPORTADA, MONOPOLO" },
      { id: "mp_21", name: "21. Aplicacion de spray", desc: "FOTO APLICACION EN ACCESORIOS DE LINEA DE VIDA, ACCESORIOS DE VIENTOS, GRAMPAS Y GRILLETES SI ESTAN OXIDADOS" },
      { id: "mp_22", name: "22. Soportes vacios en torre, mastil, altura y azimut", desc: "FOTOS PANORAMICA DE TUBO, FOTO DE MEDIDA DE TUBO, AZIMUT, ALTURA EJE DE TUBO DE TODOS LOS SOPORTES VACIOS" },
      { id: "mp_23", name: "23. Vistas de las coordenadas de cada arista del site", desc: "FOTOS PANORAMICA DE GPS EN CADA ESQUINA DE SALA EQUIPOS, ESCRIBIR CON PLUMON A, B, C, D" },
      { id: "mp_24", name: "24. Vistas de las medidas del perimetro del site", desc: "FOTOS PANORAMICA Y CERCA DE MEDIDA DE WINCHA DE ANCHO, LARGO Y ALTURA DE SALA DE EQUIPO" },
      { id: "mp_25", name: "25. Mantenimiento de ramas y hojas del monopolo", desc: "FOTOS DE LIMPIEZA DE OJOS Y CAMBIO DE CINTILLO DE HOJAS EN MIMETIZADO SI APLICA" },
      { id: "mp_26", name: "26. Mantenimiento de aires forzados y video de funcionamiento", desc: "FOTOS DE PANORAMICA, LIMPIEZA, PLACAS, MEDICION DE INYECTOR Y EXTRACTOR, FOTOS EXTERIOR DE EXTRACTOR Y LIMPIEZA REJILLA" },
      { id: "mp_27", name: "27. Altura soporte ocupados", desc: "FOTOS PANORAMICA DE ALTURA DE EJE DE SOPORTES OCUPADOS. ESCRIBIR QUE OPERADOR Y EQUIPO ESTA EN ESE SOPORTE" },
      { id: "mp_28", name: "28. Vista de Azotea", desc: "FOTOS PANORAMICA DE AZOTEA DE PROPIETARIO POR LOS 4 LADOS" },
      { id: "mp_29", name: "29. Vista de Limpieza exterior 4 lados", desc: "FOTOS DE LIMPIEZA EXTERIOR, LIMPIAR BASURA Y MALEZA 1 METRO Y MEDIO APROX. FOTOS DE ANTES Y DESPUES" },
      { id: "mp_30", name: "30. Fotos del mtto de video camara", desc: "FOTOS DE LIMPIEZA DE CAMARA, TORQUE TABLERO. REINICIAR CAMARA SI REQUIERE, VERIFICAR FUNCIONAMIENTO" }
    ]
  }
];

const TOTAL_SUBFOLDERS = SECTIONS.reduce((acc, s) => acc + s.items.length, 0);

// IndexedDB
let db;
function initDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open("ReporteATP_DB", 1);
    req.onupgradeneeded = (e) => {
      const d = e.target.result;
      if (!d.objectStoreNames.contains("projects")) d.createObjectStore("projects", { keyPath: "id" });
      if (!d.objectStoreNames.contains("files")) {
        const fs = d.createObjectStore("files", { keyPath: "id" });
        fs.createIndex("projectId", "projectId", { unique: false });
      }
    };
    req.onsuccess = (e) => { db = e.target.result; resolve(db); };
    req.onerror = (e) => reject(e.target.error);
  });
}

function dbGetAll(store) {
  return new Promise((res, rej) => {
    const tx = db.transaction(store, "readonly");
    const req = tx.objectStore(store).getAll();
    req.onsuccess = () => res(req.result);
    req.onerror = () => rej(req.error);
  });
}

function dbGetFilesByProject(projectId) {
  return new Promise((res, rej) => {
    const tx = db.transaction("files", "readonly");
    const idx = tx.objectStore("files").index("projectId");
    const req = idx.getAll(projectId);
    req.onsuccess = () => res(req.result);
    req.onerror = () => rej(req.error);
  });
}

function dbPut(store, item) {
  return new Promise((res, rej) => {
    const tx = db.transaction(store, "readwrite");
    const req = tx.objectStore(store).put(item);
    req.onsuccess = () => res();
    req.onerror = () => rej(req.error);
  });
}

function dbDelete(store, id) {
  return new Promise((res, rej) => {
    const tx = db.transaction(store, "readwrite");
    const req = tx.objectStore(store).delete(id);
    req.onsuccess = () => res();
    req.onerror = () => rej(req.error);
  });
}

// Estado global
let currentProjectId = null;
let currentSectionId = "f17";
let activeSubItem = null;
let burstMode = false;
let gpsText = "";
let placeText = "";
let viewerFiles = [];
let viewerIndex = 0;

function showToast(msg, ms = 3000) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.style.display = "block";
  clearTimeout(t._timer);
  t._timer = setTimeout(() => { t.style.display = "none"; }, ms);
}

// GPS y lugar
function updateLocation() {
  if (!navigator.geolocation) return;
  navigator.geolocation.getCurrentPosition(async (pos) => {
    const lat = pos.coords.latitude.toFixed(6);
    const lon = pos.coords.longitude.toFixed(6);
    gpsText = `${lat}, ${lon}`;
    try {
      const r = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=16`);
      if (r.ok) {
        const data = await r.json();
        const addr = data.address || {};
        placeText = [addr.suburb || addr.neighbourhood || addr.road, addr.city || addr.town || addr.village || addr.state]
          .filter(Boolean).join(", ");
      }
    } catch (_) {}
  }, () => {}, { enableHighAccuracy: true, timeout: 8000 });
}

// Procesar imagen: marca de agua blanca transparente abajo a la derecha + compresión < 1MB (excepto highRes)
function processImage(file, projectName, applyWatermark, highRes) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (ev) => {
      const img = new Image();
      img.onload = () => {
        let w = img.width;
        let h = img.height;
        const maxDim = highRes ? 4096 : 1600;
        if (!highRes && (w > maxDim || h > maxDim)) {
          if (w > h) { h = Math.round(h * maxDim / w); w = maxDim; }
          else { w = Math.round(w * maxDim / h); h = maxDim; }
        }
        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, w, h);

        if (applyWatermark) {
          const now = new Date();
          const fecha = now.toLocaleDateString("es-PE", { day: "2-digit", month: "2-digit", year: "numeric" });
          const hora = now.toLocaleTimeString("es-PE", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
          const lines = [
            projectName,
            `${fecha} ${hora}`,
            gpsText ? `GPS: ${gpsText}` : "",
            placeText ? placeText : ""
          ].filter(Boolean);

          const fontSize = Math.max(18, Math.round(Math.min(w, h) * 0.026));
          ctx.font = `600 ${fontSize}px sans-serif`;
          ctx.textAlign = "right";
          ctx.textBaseline = "bottom";
          ctx.fillStyle = "#ffffff";
          ctx.shadowColor = "rgba(0, 0, 0, 0.85)";
          ctx.shadowBlur = 4;
          ctx.shadowOffsetX = 1;
          ctx.shadowOffsetY = 1;

          const padX = Math.round(w * 0.02);
          const padY = Math.round(h * 0.02);
          const lineHeight = Math.round(fontSize * 1.25);

          lines.reverse().forEach((line, idx) => {
            ctx.fillText(line, w - padX, h - padY - (idx * lineHeight));
          });
        }

        let quality = highRes ? 0.95 : 0.82;
        const exportBlob = (q) => {
          canvas.toBlob((blob) => {
            if (!blob) return reject(new Error("Error al procesar imagen"));
            if (!highRes && blob.size > 980 * 1024 && q > 0.35) {
              exportBlob(q - 0.15);
            } else {
              resolve(blob);
            }
          }, "image/jpeg", q);
        };
        exportBlob(quality);
      };
      img.onerror = () => reject(new Error("Imagen inválida"));
      img.src = ev.target.result;
    };
    reader.onerror = () => reject(new Error("No se pudo leer el archivo"));
    reader.readAsDataURL(file);
  });
}

function sanitizeName(str) {
  return str.trim().replace(/[\\/:*?"<>|]/g, "_").replace(/\s+/g, "_") || "REPORTE_ATP";
}

// Guardar archivos
async function handleFilesInput(fileList, fromCamera) {
  if (!fileList || !fileList.length || !activeSubItem || !currentProjectId) return;
  const projects = await dbGetAll("projects");
  const proj = projects.find(p => p.id === currentProjectId);
  if (!proj) return;

  const existingFiles = await dbGetFilesByProject(currentProjectId);
  const subFiles = existingFiles.filter(f => f.subId === activeSubItem.id);
  let counter = subFiles.length;
  const baseName = sanitizeName(proj.name);

  showToast("Guardando archivo...");
  for (let i = 0; i < fileList.length; i++) {
    const raw = fileList[i];
    counter++;
    const numStr = String(counter).padStart(2, "0");

    if (raw.type.startsWith("image/")) {
      try {
        const blob = await processImage(raw, proj.name, fromCamera, !!activeSubItem.highRes);
        await dbPut("files", {
          id: `${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
          projectId: currentProjectId,
          subId: activeSubItem.id,
          name: `${baseName}_${numStr}.jpg`,
          type: "image/jpeg",
          blob: blob,
          createdAt: Date.now()
        });
      } catch (err) {
        showToast("Error: " + err.message);
      }
    } else {
      const ext = raw.name.includes(".") ? raw.name.split(".").pop() : "bin";
      await dbPut("files", {
        id: `${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
        projectId: currentProjectId,
        subId: activeSubItem.id,
        name: `${baseName}_${numStr}.${ext}`,
        type: raw.type || "application/octet-stream",
        blob: raw,
        createdAt: Date.now()
      });
    }
  }

  await renderDetail();
  showToast("Guardado correctamente");

  // Ráfaga continua si vino de Tomar Foto
  if (fromCamera && burstMode) {
    setTimeout(() => {
      if (confirm("Foto guardada. ¿Tomar otra foto en esta misma carpeta?")) {
        const cam = document.getElementById("input-camera");
        cam.value = "";
        cam.click();
      } else {
        burstMode = false;
      }
    }, 300);
  }
}

// Renderizar lista de carpetas principales
async function renderProjects() {
  const projects = await dbGetAll("projects");
  const list = document.getElementById("projects-list");
  list.innerHTML = "";

  if (!projects.length) {
    list.innerHTML = `<div class="card" style="text-align:center; color:var(--muted); font-size:0.88rem;">No hay carpetas creadas. Escribe el nombre arriba y presiona Crear.</div>`;
    return;
  }

  for (const p of projects.sort((a, b) => b.createdAt - a.createdAt)) {
    const files = await dbGetFilesByProject(p.id);
    const filledCount = new Set(files.map(f => f.subId)).size;
    const pct = Math.round((filledCount / TOTAL_SUBFOLDERS) * 100);

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="project-header">
        <div class="project-title">${p.name}</div>
      </div>
      <div class="progress-wrap">
        <div class="progress-bar"><div class="progress-fill ${pct === 100 ? "complete" : ""}" style="width:${pct}%"></div></div>
        <div class="progress-text">${pct}% (${filledCount}/${TOTAL_SUBFOLDERS})</div>
      </div>
      <div class="project-actions">
        <button class="btn-primary btn-sm btn-open">Entrar</button>
        <button class="btn-outline btn-sm btn-ren">Renombrar</button>
        <button class="btn-outline btn-sm btn-zip">Descargar ZIP</button>
        <button class="btn-secondary btn-sm btn-shr">Compartir</button>
        <button class="btn-danger btn-sm btn-del">Eliminar</button>
      </div>
    `;

    card.querySelector(".project-title").onclick = () => openProject(p.id);
    card.querySelector(".btn-open").onclick = () => openProject(p.id);
    card.querySelector(".btn-ren").onclick = () => renameProject(p.id, p.name);
    card.querySelector(".btn-zip").onclick = () => exportProjectZip(p.id, false);
    card.querySelector(".btn-shr").onclick = () => exportProjectZip(p.id, true);
    card.querySelector(".btn-del").onclick = async () => {
      if (confirm(`¿Eliminar la carpeta "${p.name}" y todas sus fotos?`)) {
        const pFiles = await dbGetFilesByProject(p.id);
        for (const f of pFiles) await dbDelete("files", f.id);
        await dbDelete("projects", p.id);
        renderProjects();
      }
    };
    list.appendChild(card);
  }
}

async function renameProject(id, oldName) {
  const newName = prompt("Nuevo nombre de la carpeta principal:", oldName);
  if (!newName || !newName.trim() || newName.trim() === oldName) return;
  const projects = await dbGetAll("projects");
  const proj = projects.find(p => p.id === id);
  if (proj) {
    proj.name = newName.trim();
    await dbPut("projects", proj);
    if (currentProjectId === id) renderDetail();
    else renderProjects();
  }
}

async function openProject(id) {
  currentProjectId = id;
  currentSectionId = "f17";
  document.getElementById("view-projects").style.display = "none";
  document.getElementById("view-detail").style.display = "block";
  updateLocation();
  await renderDetail();
}

async function renderDetail() {
  const projects = await dbGetAll("projects");
  const proj = projects.find(p => p.id === currentProjectId);
  if (!proj) return;

  const files = await dbGetFilesByProject(currentProjectId);
  const filledCount = new Set(files.map(f => f.subId)).size;
  const pct = Math.round((filledCount / TOTAL_SUBFOLDERS) * 100);

  document.getElementById("detail-title").textContent = proj.name;
  document.getElementById("detail-progress-text").textContent = `${pct}% (${filledCount}/${TOTAL_SUBFOLDERS})`;
  const fillEl = document.getElementById("detail-progress-fill");
  fillEl.style.width = `${pct}%`;
  fillEl.className = `progress-fill ${pct === 100 ? "complete" : ""}`;

  // Pestañas
  const tabsEl = document.getElementById("tabs-container");
  tabsEl.innerHTML = "";
  SECTIONS.forEach(sec => {
    const btn = document.createElement("button");
    btn.className = `tab-btn ${sec.id === currentSectionId ? "active" : ""}`;
    btn.textContent = sec.title;
    btn.onclick = () => { currentSectionId = sec.id; renderDetail(); };
    tabsEl.appendChild(btn);
  });

  // Subcarpetas
  const section = SECTIONS.find(s => s.id === currentSectionId);
  const subList = document.getElementById("subfolders-list");
  subList.innerHTML = "";

  section.items.forEach(item => {
    const itemFiles = files.filter(f => f.subId === item.id);
    const card = document.createElement("div");
    card.className = "sub-card";
    card.innerHTML = `
      <div class="sub-top">
        <div class="sub-title">${item.name}</div>
        <span class="badge-count ${itemFiles.length ? "has-files" : ""}">
          ${itemFiles.length ? `${itemFiles.length} archivo(s)` : "Vacía → NO APLICA"}
        </span>
      </div>
      <div class="sub-desc">${item.desc}</div>
      <div class="sub-actions">
        <button class="btn-primary btn-sm btn-cam">Tomar Foto</button>
        <button class="btn-outline btn-sm btn-gal">Subir Foto</button>
      </div>
      <div class="thumbs"></div>
    `;

    card.querySelector(".btn-cam").onclick = () => {
      activeSubItem = item;
      burstMode = true;
      updateLocation();
      const cam = document.getElementById("input-camera");
      cam.value = "";
      cam.click();
    };

    card.querySelector(".btn-gal").onclick = () => {
      activeSubItem = item;
      burstMode = false;
      const gal = document.getElementById("input-gallery");
      gal.accept = item.allowPdf ? "image/*,video/*,application/pdf" : "image/*,video/*";
      gal.value = "";
      gal.click();
    };

    const thumbsEl = card.querySelector(".thumbs");
    itemFiles.forEach((f, idx) => {
      const tDiv = document.createElement("div");
      tDiv.className = "thumb-item";
      const url = URL.createObjectURL(f.blob);

      if (f.type.startsWith("image/")) {
        tDiv.innerHTML = `<img src="${url}" alt="${f.name}" />`;
      } else if (f.type.startsWith("video/")) {
        tDiv.innerHTML = `<video src="${url}"></video>`;
      } else {
        tDiv.innerHTML = `<div class="thumb-pdf">PDF<br>${f.name.slice(0, 12)}</div>`;
      }

      const delBtn = document.createElement("button");
      delBtn.className = "thumb-del";
      delBtn.textContent = "×";
      delBtn.onclick = async (e) => {
        e.stopPropagation();
        if (confirm(`¿Eliminar "${f.name}"?`)) {
          await dbDelete("files", f.id);
          renderDetail();
        }
      };

      tDiv.onclick = () => openViewer(itemFiles, idx);
      tDiv.appendChild(delBtn);
      thumbsEl.appendChild(tDiv);
    });

    subList.appendChild(card);
  });
}

// Visor deslizable
function openViewer(files, index) {
  viewerFiles = files;
  viewerIndex = index;
  document.getElementById("viewer-modal").classList.add("open");
  renderViewer();
}

function renderViewer() {
  if (!viewerFiles.length) {
    document.getElementById("viewer-modal").classList.remove("open");
    return;
  }
  if (viewerIndex < 0) viewerIndex = viewerFiles.length - 1;
  if (viewerIndex >= viewerFiles.length) viewerIndex = 0;

  const f = viewerFiles[viewerIndex];
  document.getElementById("viewer-info").textContent = `${viewerIndex + 1}/${viewerFiles.length} · ${f.name}`;
  const content = document.getElementById("viewer-content");
  const url = URL.createObjectURL(f.blob);

  if (f.type.startsWith("image/")) {
    content.innerHTML = `<img src="${url}" />`;
  } else if (f.type.startsWith("video/")) {
    content.innerHTML = `<video src="${url}" controls autoplay></video>`;
  } else {
    content.innerHTML = `<div style="text-align:center;"><p style="margin-bottom:12px;">${f.name}</p><a href="${url}" download="${f.name}" style="color:#5eead4; font-weight:bold;">Abrir / Descargar PDF</a></div>`;
  }
}

// MOTOR ZIP NATIVO EN JAVASCRIPT PURO (SIN DEPENDENCIAS EXTERNAS)
const CRC_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    table[i] = c;
  }
  return table;
})();

function crc32(uint8) {
  let crc = 0xffffffff;
  for (let i = 0; i < uint8.length; i++) {
    crc = (crc >>> 8) ^ CRC_TABLE[(crc ^ uint8[i]) & 0xff];
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function buildZipBlob(entries) {
  const encoder = new TextEncoder();
  const fileParts = [];
  const centralDir = [];
  let offset = 0;

  for (const entry of entries) {
    const nameBytes = encoder.encode(entry.path);
    const data = entry.data;
    const crc = crc32(data);
    const size = data.length;

    // Local file header (30 bytes + name)
    const lfh = new Uint8Array(30 + nameBytes.length);
    const dv = new DataView(lfh.buffer);
    dv.setUint32(0, 0x04034b50, true);
    dv.setUint16(4, 20, true);
    dv.setUint16(6, 0x0800, true); // UTF-8
    dv.setUint16(8, 0, true); // Store (sin recompresión para imágenes ya comprimidas)
    dv.setUint16(10, 0, true);
    dv.setUint16(12, 0, true);
    dv.setUint32(14, crc, true);
    dv.setUint32(18, size, true);
    dv.setUint32(22, size, true);
    dv.setUint16(26, nameBytes.length, true);
    dv.setUint16(28, 0, true);
    lfh.set(nameBytes, 30);

    fileParts.push(lfh, data);

    // Central directory header (46 bytes + name)
    const cdh = new Uint8Array(46 + nameBytes.length);
    const cdv = new DataView(cdh.buffer);
    cdv.setUint32(0, 0x02014b50, true);
    cdv.setUint16(4, 20, true);
    cdv.setUint16(6, 20, true);
    cdv.setUint16(8, 0x0800, true);
    cdv.setUint16(10, 0, true);
    cdv.setUint16(12, 0, true);
    cdv.setUint16(14, 0, true);
    cdv.setUint32(16, crc, true);
    cdv.setUint32(20, size, true);
    cdv.setUint32(24, size, true);
    cdv.setUint16(28, nameBytes.length, true);
    cdv.setUint16(30, 0, true);
    cdv.setUint16(32, 0, true);
    cdv.setUint16(34, 0, true);
    cdv.setUint16(36, 0, true);
    cdv.setUint32(38, 0, true);
    cdv.setUint32(42, offset, true);
    cdh.set(nameBytes, 46);

    centralDir.push(cdh);
    offset += lfh.length + size;
  }

  let cdSize = 0;
  for (const c of centralDir) {
    fileParts.push(c);
    cdSize += c.length;
  }

  // End of central directory (22 bytes)
  const eocd = new Uint8Array(22);
  const edv = new DataView(eocd.buffer);
  edv.setUint32(0, 0x06054b50, true);
  edv.setUint16(4, 0, true);
  edv.setUint16(6, 0, true);
  edv.setUint16(8, entries.length, true);
  edv.setUint16(10, entries.length, true);
  edv.setUint32(12, cdSize, true);
  edv.setUint32(16, offset, true);
  edv.setUint16(20, 0, true);
  fileParts.push(eocd);

  return new Blob(fileParts, { type: "application/zip" });
}

async function getNoAplicaBytes() {
  try {
    const resp = await fetch("no_aplica.png");
    if (resp.ok) {
      const buf = await resp.arrayBuffer();
      return new Uint8Array(buf);
    }
  } catch (_) {}
  // Fallback PNG mínimo generado en canvas si no carga
  const c = document.createElement("canvas");
  c.width = 400; c.height = 200;
  const ctx = c.getContext("2d");
  ctx.fillStyle = "#ffffff"; ctx.fillRect(0, 0, 400, 200);
  ctx.fillStyle = "#0f172a"; ctx.font = "bold 32px sans-serif";
  ctx.textAlign = "center"; ctx.fillText("NO APLICA", 200, 110);
  const blob = await new Promise(r => c.toBlob(r, "image/png"));
  return new Uint8Array(await blob.arrayBuffer());
}

async function exportProjectZip(projectId, shareMode) {
  try {
    showToast("Generando archivo ZIP...");
    const projects = await dbGetAll("projects");
    const proj = projects.find(p => p.id === projectId);
    if (!proj) return;

    const files = await dbGetFilesByProject(projectId);
    const noAplicaBytes = await getNoAplicaBytes();
    const rootFolder = sanitizeName(proj.name);
    const zipEntries = [];

    for (const sec of SECTIONS) {
      for (const item of sec.items) {
        const subFiles = files.filter(f => f.subId === item.id);
        const folderPath = sec.id === "formatos"
          ? `${rootFolder}/${sec.title}`
          : `${rootFolder}/${sec.title}/${item.name}`;

        if (subFiles.length === 0) {
          zipEntries.push({ path: `${folderPath}/NO_APLICA.png`, data: noAplicaBytes });
        } else {
          for (const f of subFiles) {
            const buf = await f.blob.arrayBuffer();
            zipEntries.push({ path: `${folderPath}/${f.name}`, data: new Uint8Array(buf) });
          }
        }
      }
    }

    const zipBlob = buildZipBlob(zipEntries);
    const zipFileName = `${rootFolder}.zip`;

    if (shareMode && navigator.share && navigator.canShare) {
      const zipFile = new File([zipBlob], zipFileName, { type: "application/zip" });
      if (navigator.canShare({ files: [zipFile] })) {
        await navigator.share({ files: [zipFile], title: zipFileName });
        showToast("ZIP compartido");
        return;
      }
    }

    // Descarga directa estándar
    const url = URL.createObjectURL(zipBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = zipFileName;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 1500);
    showToast(`ZIP descargado: ${zipFileName}`);
  } catch (err) {
    alert("Error al generar ZIP: " + err.message);
  }
}

// Inicialización
document.addEventListener("DOMContentLoaded", async () => {
  await initDB();
  renderProjects();

  document.getElementById("btn-create-project").onclick = async () => {
    const inp = document.getElementById("new-project-name");
    const name = inp.value.trim();
    if (!name) return showToast("Escribe un nombre para la carpeta");
    await dbPut("projects", { id: `proj_${Date.now()}`, name, createdAt: Date.now() });
    inp.value = "";
    renderProjects();
  };

  document.getElementById("btn-back").onclick = () => {
    currentProjectId = null;
    document.getElementById("view-detail").style.display = "none";
    document.getElementById("view-projects").style.display = "block";
    renderProjects();
  };

  document.getElementById("btn-detail-rename").onclick = async () => {
    const projects = await dbGetAll("projects");
    const proj = projects.find(p => p.id === currentProjectId);
    if (proj) renameProject(proj.id, proj.name);
  };

  document.getElementById("btn-detail-zip").onclick = () => exportProjectZip(currentProjectId, false);
  document.getElementById("btn-detail-share").onclick = () => exportProjectZip(currentProjectId, true);

  document.getElementById("input-camera").onchange = (e) => handleFilesInput(e.target.files, true);
  document.getElementById("input-gallery").onchange = (e) => handleFilesInput(e.target.files, false);

  // Controles del visor
  document.getElementById("viewer-close").onclick = () => document.getElementById("viewer-modal").classList.remove("open");
  document.getElementById("viewer-prev").onclick = () => { viewerIndex--; renderViewer(); };
  document.getElementById("viewer-next").onclick = () => { viewerIndex++; renderViewer(); };
  document.getElementById("viewer-delete").onclick = async () => {
    const f = viewerFiles[viewerIndex];
    if (!f) return;
    if (confirm(`¿Eliminar "${f.name}"?`)) {
      await dbDelete("files", f.id);
      viewerFiles.splice(viewerIndex, 1);
      renderViewer();
      renderDetail();
    }
  };

  // Deslizar izquierda/derecha en visor
  let touchStartX = 0;
  const vBody = document.getElementById("viewer-body");
  vBody.addEventListener("touchstart", (e) => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
  vBody.addEventListener("touchend", (e) => {
    const diff = e.changedTouches[0].screenX - touchStartX;
    if (Math.abs(diff) > 45) {
      if (diff > 0) viewerIndex--; else viewerIndex++;
      renderViewer();
    }
  }, { passive: true });

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
});
