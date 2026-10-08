const namaLengkap = "Muhammad Fath Haidari";
const peran = "Mahasiswa Informatika";
const jumlahProyek = 3;

const profil = {
  nama: namaLengkap,
  peran: peran,
  keahlian: ["HTML", "CSS", "JavaScript", "Git"],
  alamat: { kota: "Bekasi" }
};

// 1. Menyusun kalimat perkenalan dari satu object
function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

// 2. Merapikan daftar keahlian menjadi satu baris teks
const formatKeahlian = (daftar) => daftar.join(" · ");

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

const daftarProyek = [
  { judul: "Halaman Profil", tahun: 2026, selesai: true },
  { judul: "Katalog Produk", tahun: 2026, selesai: false },
  { judul: "Aplikasi Todo List", tahun: 2025, selesai: true }
];

// Menampilkan data sebagai tabel di Console
console.table(profil.keahlian);
console.table(daftarProyek);

// 1. Filter: mengambil proyek yang selesai
const selesai = daftarProyek.filter((proyek) => proyek.selesai);
console.table(selesai);

// 2. Find: mencari satu proyek berdasarkan judul
const katalog = daftarProyek.find((proyek) => proyek.judul === "Katalog Produk");
console.log(katalog);

// 3. Map: mengubah array objek menjadi array judul saja
const daftarJudul = daftarProyek.map((proyek) => proyek.judul);
console.log(daftarJudul);

// 4. Sort memakai salinan array (agar data asli tidak berubah)
const proyekUrut = [...daftarProyek].sort((a, b) => a.tahun - b.tahun);
console.log(proyekUrut);