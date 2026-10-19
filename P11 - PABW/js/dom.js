// js/dom.js
import { saring } from './data.js';

const wadah = document.querySelector("#daftar");
const pesanKosong = document.querySelector("#pesan-kosong");
const muatEl = document.querySelector("#muat");

export function buatKartu(proyek) {
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
  wadah.textContent = "";

  const tampil = saring(state.daftarProyek, state.kategoriAktif);

  if (!tampil || tampil.length === 0) {
    if (pesanKosong) {
      pesanKosong.textContent = "Tidak ada proyek yang sesuai dengan filter.";
      pesanKosong.hidden = false;
    }
    tandaiTombolAktif(state.kategoriAktif);
    return;
  }

  if (pesanKosong) pesanKosong.hidden = true;
  tampil.forEach((proyek) => wadah.append(buatKartu(proyek)));
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