// --- 1. ELEMEN DOM ---
const wadah = document.querySelector("#daftar");
const pesanKosong = document.querySelector("#pesan-kosong");
const muatEl = document.querySelector("#muat"); // Baru di P10
const barisFilter = document.querySelector("#filter");

const formKontak = document.querySelector("#form-kontak");
const inputFullname = document.querySelector("#fullname");
const inputEmail = document.querySelector("#email");
const inputMassage = document.querySelector("#massage");

// --- 2. FUNGSI BUAT KARTU ---
function buatKartu(proyek) {
  const article = document.createElement("article");
  article.className = "kartu";

  const figure = document.createElement("figure");
  const img = document.createElement("img");
  img.src = proyek.gambar || "gambarSatu.jpg";
  img.alt = proyek.judul || "Gambar Proyek";
  img.loading = "lazy";

  const figcaption = document.createElement("figcaption");
  figcaption.textContent = proyek.judul;

  figure.append(img, figcaption);

  const kartuIsi = document.createElement("div");
  kartuIsi.className = "kartu__isi";
  const h3 = document.createElement("h3");
  h3.textContent = proyek.deskripsi || proyek.judul;
  kartuIsi.append(h3);

  const kartuKaki = document.createElement("div");
  kartuKaki.className = "kartu__kaki";
  const span = document.createElement("span");
  span.textContent = proyek.kategori;
  kartuKaki.append(span);

  article.append(figure, kartuIsi, kartuKaki);
  return article;
}

// --- 3. EKSPOR FUNGSI TAMPILAN (P10) ---

// Render daftar kartu atau pesan kosong
export function render(daftar) {
  if (!wadah) return;
  wadah.textContent = "";

  if (!daftar || daftar.length === 0) {
    if (pesanKosong) {
      pesanKosong.textContent = "Tidak ada proyek yang sesuai dengan filter.";
      pesanKosong.hidden = false;
    }
    return;
  }

  if (pesanKosong) pesanKosong.hidden = true;
  daftar.forEach((proyek) => wadah.append(buatKartu(proyek)));
}

// Mengatur status indikator "Memuat data..."
export function aturMemuat(aktif) {
  if (muatEl) muatEl.hidden = !aktif;
}

// Menampilkan pesan galat pada elemen #pesan-kosong
export function tampilkanGalat(pesan) {
  if (wadah) wadah.textContent = "";
  if (pesanKosong) {
    pesanKosong.textContent = pesan;
    pesanKosong.hidden = false;
  }
}

// --- 4. EVENT DELEGATION FILTER (P10) ---
function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

// Dibungkus fungsi pasangFilter agar menerima array data dari app.js
export function pasangFilter(daftar) {
  if (!barisFilter) return;
  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;

    const kategori = tombol.dataset.kategori;
    const terpilih = daftar.filter(
      (proyek) => kategori === "semua" || proyek.kategori === kategori
    );

    tandaiTombolAktif(tombol);
    render(terpilih);
  });
}

// --- 5. VALIDASI FORM INTERAKTIF (P9) ---
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

[
  { elem: inputFullname, id: "err-fullname", pesan: "Fullname wajib diisi." },
  { elem: inputEmail, id: "err-email", pesan: "Email wajib diisi." },
  { elem: inputMassage, id: "err-massage", pesan: "Message wajib diisi." }
].forEach(({ elem, id, pesan }) => {
  elem?.addEventListener("input", () => validasiKolom(elem, id, pesan));
  elem?.addEventListener("blur", () => validasiKolom(elem, id, pesan));
});

formKontak?.addEventListener("submit", (event) => {
  event.preventDefault();

  const sahNama = validasiKolom(inputFullname, "err-fullname", "Fullname wajib diisi.");
  const sahEmail = validasiKolom(inputEmail, "err-email", "Email wajib diisi.");
  const sahPesan = validasiKolom(inputMassage, "err-massage", "Message wajib diisi.");

  if (!sahNama) { inputFullname?.focus(); return; }
  if (!sahEmail) { inputEmail?.focus(); return; }
  if (!sahPesan) { inputMassage?.focus(); return; }

  alert("Pesan Anda berhasil dikirim!");
  formKontak.reset();
});