

// --- 1. ELEMEN DOM (Lembar A) ---
const wadah = document.querySelector("#daftar");
const pesanKosong = document.querySelector("#pesan-kosong");
const barisFilter = document.querySelector("#filter");

const formKontak = document.querySelector("#form-kontak");
const inputFullname = document.querySelector("#fullname");
const inputEmail = document.querySelector("#email");
const inputMassage = document.querySelector("#massage");
const tombolKirim = formKontak?.querySelector("button[type='submit']");


// --- 2. FUNGSI BUAT KARTU (Lembar B) ---
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


// --- 3. POLA RENDER TUNGGAL (Lembar D.1) ---
export function render(daftar) {
  // 1. Kosongkan wadah lebih dulu
  wadah.textContent = ""; 

  // 2. Periksa keadaan kosong (jika filter tidak menghasilkan apa pun)
  if (daftar.length === 0) {
    if (pesanKosong) pesanKosong.hidden = false;
    return;
  }

  // 3. Jika ada data, sembunyikan pesan kosong & isi ulang wadah
  if (pesanKosong) pesanKosong.hidden = true;
  daftar.forEach((proyek) => wadah.append(buatKartu(proyek)));
}


// --- 4. EVENT DELEGATION FILTER (Lembar C) ---
function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

barisFilter?.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");
  if (!tombol) return;

  const kategori = tombol.dataset.kategori;
  const terpilih = daftarProyek.filter(
    (proyek) => kategori === "semua" || proyek.kategori === kategori
  );

  tandaiTombolAktif(tombol);
  render(terpilih);
});


// --- 5. VALIDASI FORM INTERAKTIF (Lembar D.2) ---

// Fungsi untuk memeriksa satu kolom dan menampilkan/menyembunyikan pesan galat
function validasiKolom(input, idPesan, pesanGalat) {
  const pesanElem = document.querySelector(`#${idPesan}`);
  const nilai = input ? input.value.trim() : "";

  if (nilai === "") {
    input?.setAttribute("aria-invalid", "true");
    if (pesanElem) pesanElem.textContent = pesanGalat;
    return false;
  } else {
    input?.removeAttribute("aria-invalid");
    if (pesanElem) pesanElem.textContent = "";
    return true;
  }
}

// Validasi langsung saat pengguna mengetik/meninggalkan kolom
[
  { elem: inputFullname, id: "err-fullname", pesan: "Fullname wajib diisi." },
  { elem: inputEmail, id: "err-email", pesan: "Email wajib diisi." },
  { elem: inputMassage, id: "err-massage", pesan: "Message wajib diisi." }
].forEach(({ elem, id, pesan }) => {
  elem?.addEventListener("input", () => {
    validasiKolom(elem, id, pesan);
  });
  elem?.addEventListener("blur", () => {
    validasiKolom(elem, id, pesan);
  });
});

// Penanganan submit form (Saat tombol "simpan" diklik)
formKontak?.addEventListener("submit", (event) => {
  event.preventDefault(); // PERTAMA: Halaman tidak dimuat ulang (Prevent Default)

  // Periksa ketiga kolom sekaligus
  const sahNama = validasiKolom(inputFullname, "err-fullname", "Fullname wajib diisi.");
  const sahEmail = validasiKolom(inputEmail, "err-email", "Email wajib diisi.");
  const sahPesan = validasiKolom(inputMassage, "err-massage", "Message wajib diisi.");

  // Pindahkan fokus ke kolom pertama yang belum diisi dengan benar
  if (!sahNama) { inputFullname?.focus(); return; }
  if (!sahEmail) { inputEmail?.focus(); return; }
  if (!sahPesan) { inputMassage?.focus(); return; }

  // Jika semua kolom sudah valid
  alert("Pesan Anda berhasil dikirim!");
  formKontak.reset();
});

// --- 6. RENDER AWAL & INISIALISASI ---
render(daftarProyek);
periksaSemuaKolom(); // Kunci tombol kirim secara awal jika input masih kosong