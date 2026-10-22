<script setup>
import { state, pilihKategori } from '../state.js'

const daftarKategori = [
  { id: 'semua', label: 'Semua' },
  { id: 'NVIDIA', label: 'NVIDIA' },
  { id: 'Apple', label: 'Apple' },
  { id: 'Microsoft', label: 'Microsoft' }
]

function aturUlang() {
  pilihKategori('semua')
}
</script>

<template>
  <div id="filter" class="baris-filter">
    <button 
      v-for="kat in daftarKategori" 
      :key="kat.id"
      :class="{ aktif: state.kategoriAktif === kat.id }"
      @click="pilihKategori(kat.id)">
      {{ kat.label }}
    </button>
    <button id="atur-ulang" type="button" title="Atur Ulang" aria-label="Atur Ulang" @click="aturUlang">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="23 4 23 10 17 10"></polyline>
        <polyline points="1 20 1 14 7 14"></polyline>
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
      </svg>
    </button>
  </div>
</template>