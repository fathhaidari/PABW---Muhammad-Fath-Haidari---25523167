// js/state.js
import { render } from './dom.js';

const KUNCI = "P11 - PABW";
const VERSI = 2;

export const state = {
  daftarProyek: [],
  kategoriAktif: "semua",
  favorit: []
};

// 1. Menyimpan state ke localStorage
export function simpan(state) {
  const isi = {
    versi: VERSI,
    kategoriAktif: state.kategoriAktif,
    favorit: state.favorit
  };
  localStorage.setItem(KUNCI, JSON.stringify(isi));
}

// 2. Membaca simpanan dari localStorage (ditambah try/catch)
export function muat() {
  try {
    const isi = JSON.parse(localStorage.getItem(KUNCI));
    if (isi?.versi !== VERSI) {
      localStorage.removeItem(KUNCI);
      return null;
    }
    return isi;
  } catch {
    localStorage.removeItem(KUNCI);
    return null;
  }
}

// 3. Memulihkan keadaan dari simpanan saat pertama dibuka
export function pulihkan(isi) {
  if (!isi) return;
  state.kategoriAktif = isi.kategoriAktif || "semua";
  state.favorit = isi.favorit || [];
}

export function isiProyek(daftar) {
  state.daftarProyek = daftar;
  render(state);
}

// FUNGSI PENGUBAH: Tambahkan simpan(state) sebelum render(state)
export function pilihKategori(kategori) {
  state.kategoriAktif = kategori;
  simpan(state);
  render(state);
}

export function tambahFavorit(id) {
  if (state.favorit.includes(id)) {
    state.favorit = state.favorit.filter((favId) => favId !== id);
  } else {
    state.favorit = [...state.favorit, id];
  }
  simpan(state);
  render(state);
}

// 4. Menghapus simpanan & mengembalikan ke nilai bawaan
export function aturUlang() {
  localStorage.removeItem(KUNCI);
  state.kategoriAktif = "semua";
  state.favorit = [];
  render(state);
}