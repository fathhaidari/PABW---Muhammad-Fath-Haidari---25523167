const namaLengkap = "Muhammad Fath Haidari";
const peran = "Mahasiswa Informatika";
const jumlahProyek = 3;

const profil = {
  nama: namaLengkap,
  peran: peran,
  keahlian: ["HTML", "CSS", "JavaScript", "Git"],
  alamat: {
    kota: "Bekasi"
  }
};

const kalimatProfil = `Nama saya ${profil.nama}, ${profil.peran}, dan saya sudah membuat ${jumlahProyek} proyek.`;

console.log(kalimatProfil);

console.log(`Kota: ${profil.alamat?.kota ?? "Tidak diketahui"}`);
console.log(`Telepon: ${profil.kontak?.telepon ?? "Belum diisi"}`);