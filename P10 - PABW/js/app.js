// --- 1. IMPOR MODUL (Lembar D.2) ---
import { ambilProyek } from './api.js';
import { render, pasangFilter, aturMemuat, tampilkanGalat } from './dom.js';

// --- 2. DATA PROFIL (Tetap dipertahankan dari Pertemuan 8/9) ---
const namaLengkap = "Muhammad Fath Haidari";
const peran = "Mahasiswa Informatika";

const profil = {
  nama: namaLengkap,
  peran: peran,
  keahlian: ["HTML", "CSS", "JavaScript", "Git"],
  alamat: { kota: "Bekasi" }
};

function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

const formatKeahlian = (daftar) => daftar.join(" · ");

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));
console.table(profil.keahlian);

// --- 3. FUNGSI PERAKIT UTAMA (Lembar D.2) ---
async function muat() {
  aturMemuat(true); // 1. Tampilkan status "Memuat data..."
  try {
    const daftar = await ambilProyek(); // 2. Ambil data async dari api.js
    pasangFilter(daftar);               // 3. Pasang event listener filter menggunakan data jaringan
    render(daftar);                     // 4. Render kartu ke halaman
  } catch (galat) {
    tampilkanGalat('Data gagal dimuat. Periksa koneksi, lalu muat ulang halaman.');
    console.error(galat.message);
  } finally {
    aturMemuat(false); // 5. Sembunyikan status "Memuat data..."
  }
}

// --- 4. JALANKAN SAAT HALAMAN DIBUKA ---
muat();