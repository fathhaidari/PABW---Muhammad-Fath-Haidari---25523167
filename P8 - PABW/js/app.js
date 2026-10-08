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
