// js/dom.js
import { saring } from './data.js';

const wadah = document.querySelector("#daftar");
const pesanKosong = document.querySelector("#pesan-kosong");
const muatEl = document.querySelector("#muat");

export function buatKartu(proyek, favorit = []) {
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

  // --- TAMBAHAN LEMBAR C: Tombol Favorit ☆ / ★ ---
 // js/dom.js (di dalam fungsi buatKartu)

  const idUnik = proyek.id ?? proyek.judul;

  const tombolFav = document.createElement("button");
  tombolFav.className = "favorit";
  tombolFav.type = "button";
  tombolFav.dataset.id = idUnik;

  // Cek apakah proyek ini ada di favorit
  const isFav = favorit.includes(idUnik) || favorit.includes(Number(idUnik));

  // SVG Hati Bulat Sempurna (Merah Penuh saat Favorit, Garis Merah saat Belum)
  tombolFav.innerHTML = isFav 
    ? `<svg width="20" height="20 " viewBox="0 0 24 24" fill="#ff3b30"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`
    : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff3b30" stroke-width="1.9"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;

  kartuKaki.append(span, tombolFav);

  article.append(figure, kartuIsi, kartuKaki);
  return article;
}

export function tandaiTombolAktif(kategoriAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    const kat = tombol.dataset.kategori;
    if (kat && kategoriAktif) {
      tombol.classList.toggle("aktif", kat.toLowerCase() === kategoriAktif.toLowerCase());
    }
  });
}

export function render(state) {
  if (!wadah) return;
  wadah.textContent = ""; // 1. Kosongkan wadah

  const tampil = saring(state.daftarProyek, state.kategoriAktif); // 2. Saring dari data.js

  if (!tampil || tampil.length === 0) {
    if (pesanKosong) {
      pesanKosong.textContent = "Tidak ada proyek yang sesuai dengan filter.";
      pesanKosong.hidden = false;
    }
    tandaiTombolAktif(state.kategoriAktif);
    return;
  }

  if (pesanKosong) pesanKosong.hidden = true;
  
  // 3. Isi ulang dari state (meneruskan state.favorit)
  tampil.forEach((proyek) => wadah.append(buatKartu(proyek, state.favorit)));
  tandaiTombolAktif(state.kategoriAktif);
}

export function aturMemuat(aktif) {
  if (muatEl) muatEl.hidden = !aktif;
}

export function tampilkanGalat(pesan) {
  if (wadah) wadah.textContent = "";
  if (pesanKosong) {
    pesanKosong.textContent = pesan;
    pesanKosong.hidden = false;
  }
}