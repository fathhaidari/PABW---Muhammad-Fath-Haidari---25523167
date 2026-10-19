// js/state.js
import { render } from './dom.js';

export const state = {
  daftarProyek: [],
  kategoriAktif: "semua",
  favorit: [] // Tambahan di Lembar C: array menampung ID proyek favorit
};

export function isiProyek(daftar) {
  state.daftarProyek = daftar;
  render(state);
}

export function pilihKategori(kategori) {
  state.kategoriAktif = kategori;
  render(state);
}

// Tambahan di Lembar C: fungsi pengubah untuk menambah/menghapus favorit
export function tambahFavorit(id) {
  if (state.favorit.includes(id)) {
    // Jika sudah ada, hapus dari daftar favorit
    state.favorit = state.favorit.filter((favId) => favId !== id);
  } else {
    // Jika belum ada, tambahkan salinan baru ke array
    state.favorit = [...state.favorit, id];
  }
  render(state); // Tampilan digambar ulang dari state
}