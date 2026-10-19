// js/app.js
import { ambilProyek } from './api.js';
import { isiProyek } from './state.js';
import { tampilkanGalat, aturMemuat } from './dom.js';
import { pasangPendengar } from './events.js';

async function mulai() {
  pasangPendengar();
  aturMemuat(true);

  try {
    const data = await ambilProyek();
    isiProyek(data); // Mengisi state dan merender kartu
  } catch (galat) {
    tampilkanGalat('Data gagal dimuat. Periksa koneksi, lalu muat ulang.');
    console.error(galat.message);
  } finally {
    aturMemuat(false);
  }
}

mulai();