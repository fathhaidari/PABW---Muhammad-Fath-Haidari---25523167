import { daftarProyek } from "./app.js";

// 1. Pemilihan elemen wadah daftar proyek
const wadah = document.querySelector("#daftar");

// 2. Fungsi membuat 1 elemen kartu proyek secara aman (createElement & textContent)
function buatKartu(proyek) {
  const article = document.createElement("article");
  article.className = "kartu";

  const figure = document.createElement("figure");
  const img = document.createElement("img");
  img.src = proyek.gambar || "gambarSatu.jpg";
  img.alt = proyek.judul;
  img.loading = "lazy";

  const figcaption = document.createElement("figcaption");
  figcaption.textContent = proyek.judul;

  figure.append(img, figcaption);

  const kartuIsi = document.createElement("div");
  kartuIsi.className = "kartu__isi";
  const h3 = document.createElement("h3");
  h3.textContent = proyek.deskripsi;
  kartuIsi.append(h3);

  const kartuKaki = document.createElement("div");
  kartuKaki.className = "kartu__kaki";
  const span = document.createElement("span");
  span.textContent = proyek.kategori;
  kartuKaki.append(span);

  article.append(figure, kartuIsi, kartuKaki);
  return article;
}

// 3. Fungsi render: Mengosongkan wadah di baris pertama lalu mengisi dari data
export function render(daftar) {
  wadah.textContent = ""; // Baris wajib Lembar B.2
  daftar.forEach((proyek) => wadah.append(buatKartu(proyek)));
}

// 4. Jalankan render awal
render(daftarProyek);

// 1. Elemen induk baris filter (pemilih dari Lembar A.2)
const barisFilter = document.querySelector("#filter");

// 2. Fungsi untuk menandai tombol yang sedang aktif
function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

// 3. Event Delegation: Satu pendengar dipasang di induk (#filter)
barisFilter?.addEventListener("click", (event) => {
  // Cari tombol terdekat dari elemen yang diklik
  const tombol = event.target.closest("button");
  if (!tombol) return; // Klik di luar tombol, abaikan

  const kategori = tombol.dataset.kategori;

  // Filter array daftarProyek berdasarkan data-kategori pada tombol
  const terpilih = daftarProyek.filter(
    (proyek) => kategori === "semua" || proyek.kategori === kategori
  );

  // Perbarui tampilan tombol aktif dan gambar ulang daftar kartu
  tandaiTombolAktif(tombol);
  render(terpilih);
});