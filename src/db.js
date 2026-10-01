import { db } from "./firebase.js";
import {
  collection, doc, addDoc, updateDoc, deleteDoc,
  onSnapshot, query, orderBy, setDoc
} from "firebase/firestore";

// ── CITAS ──────────────────────────────────────
export const suscribirCitas = (callback) => {
  const q = query(collection(db, "citas"), orderBy("fecha"), orderBy("hora"));
  return onSnapshot(q, snap => {
    callback(snap.docs.map(d => ({ id: d.id, ...d.data() })));
  });
};

export const crearCita = async (cita) => {
  const docId = `${(cita.clienteTel||"").replace(/\D/g,'')}--${cita.fecha}--${cita.hora.replace(":","")}`;
  await setDoc(doc(db, "citas", docId), cita);
  try{
    await setDoc(doc(db, "ocupados", docId), {
      fecha: cita.fecha,
      hora: cita.hora,
      duracionMin: Number(cita.duracionMin) || 30,
      peluqueroId: cita.peluqueroId,
      estado: cita.estado || "pendiente"
    });
  }catch(e){
    console.error("Error registrando hueco en ocupados:", e);
  }
  return docId;
};

export const actualizarCita = async (id, datos) => {
  await updateDoc(doc(db, "citas", id), datos);
  const campos = {};
  if (datos.fecha !== undefined) campos.fecha = datos.fecha;
  if (datos.hora !== undefined) campos.hora = datos.hora;
  if (datos.duracionMin !== undefined) campos.duracionMin = Number(datos.duracionMin) || 30;
  if (datos.peluqueroId !== undefined) campos.peluqueroId = datos.peluqueroId;
  if (datos.estado !== undefined) campos.estado = datos.estado;
  if (Object.keys(campos).length === 0) return;
  try {
    await setDoc(doc(db, "ocupados", id), campos, { merge: true });
  } catch (e) {
    console.error("Error actualizando ocupados:", e);
  }
};

export const borrarCita = async (id) => {
  await deleteDoc(doc(db, "citas", id));
  try { await deleteDoc(doc(db, "ocupados", id)); } catch (e) { console.error(e); }
};

// ── CLIENTES ───────────────────────────────────
export const suscribirClientes = (callback) => {
  return onSnapshot(collection(db, "clientes"), snap => {
    callback(snap.docs.map(d => ({ id: d.id, ...d.data() })));
  });
};

export const crearCliente = (cliente) =>
  addDoc(collection(db, "clientes"), cliente);

export const actualizarCliente = (id, datos) =>
  updateDoc(doc(db, "clientes", id), datos);

// ── VALORACIONES ───────────────────────────────
export const suscribirValoraciones = (callback) => {
  return onSnapshot(collection(db, "valoraciones"), snap => {
    callback(snap.docs.map(d => ({ id: d.id, ...d.data() })));
  });
};

export const crearValoracion = (val) =>
  addDoc(collection(db, "valoraciones"), val);

export const actualizarValoracion = (id, datos) =>
  updateDoc(doc(db, "valoraciones", id), datos);

export const borrarValoracion = (id) =>
  deleteDoc(doc(db, "valoraciones", id));

// ── CONFIG ─────────────────────────────────────
export const suscribirConfig = (callback) => {
  return onSnapshot(doc(db, "config", "general"), snap => {
    if (snap.exists()) callback(snap.data());
  });
};

export const guardarConfig = (datos) =>
  setDoc(doc(db, "config", "general"), datos, { merge: true });