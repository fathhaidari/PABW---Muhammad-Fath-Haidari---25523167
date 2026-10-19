// js/events.js
import { pilihKategori } from './state.js';

export function pasangPendengar() {
  // 1. Delegasi Event Filter Kategori
  const barisFilter = document.querySelector("#filter");
  if (barisFilter) {
    barisFilter.addEventListener("click", (event) => {
      const tombol = event.target.closest("button");
      if (!tombol || !tombol.dataset.kategori) return;
      pilihKategori(tombol.dataset.kategori);
    });
  }

  // 2. Validasi Form Kontak
  pasangValidasiForm();
}

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

function pasangValidasiForm() {
  const formKontak = document.querySelector("#form-kontak");
  const inputFullname = document.querySelector("#fullname");
  const inputEmail = document.querySelector("#email");
  const inputMassage = document.querySelector("#massage");

  if (!formKontak) return;

  [
    { elem: inputFullname, id: "err-fullname", pesan: "Fullname wajib diisi." },
    { elem: inputEmail, id: "err-email", pesan: "Email wajib diisi." },
    { elem: inputMassage, id: "err-massage", pesan: "Message wajib diisi." }
  ].forEach(({ elem, id, pesan }) => {
    elem?.addEventListener("input", () => validasiKolom(elem, id, pesan));
    elem?.addEventListener("blur", () => validasiKolom(elem, id, pesan));
  });

  formKontak.addEventListener("submit", (event) => {
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
}