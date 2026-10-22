import { reactive } from 'vue'

export const state = reactive({
  kategoriAktif: 'semua',
  daftarProyek: [],
  favorit: [],
  memuat: true,
  galat: ''
})

export function pilihKategori(nilai) {
  state.kategoriAktif = nilai
}

export function tambahFavorit(id) {
  const index = state.favorit.indexOf(id)
  if (index === -1) {
    state.favorit.push(id)
  } else {
    state.favorit.splice(index, 1)
  }
}

export function isiProyek(data) {
  state.daftarProyek = data
}

export function simpan(nilai) {
  localStorage.setItem('pabw-p11', JSON.stringify({
    kategoriAktif: nilai.kategoriAktif,
    favorit: nilai.favorit
  }))
}

export function muat() {
  const simpanan = localStorage.getItem('pabw-p11')
  try {
    return simpanan ? JSON.parse(simpanan) : null
  } catch {
    return null
  }
}

export function pulihkan(tersimpan) {
  if (!tersimpan) return
  if (tersimpan.kategoriAktif) state.kategoriAktif = tersimpan.kategoriAktif
  if (Array.isArray(tersimpan.favorit)) state.favorit = tersimpan.favorit
}