<script setup>
import { computed } from 'vue'
import { state, tambahFavorit } from '../state.js'
import TombolFilter from './TombolFilter.vue'

const proyekTampil = computed(() => {
  if (state.kategoriAktif === 'semua') return state.daftarProyek
  return state.daftarProyek.filter(proyek => proyek.kategori === state.kategoriAktif)
})
</script>

<template>
  <section id="gallery" class="utama sorotan">
    <h2>Gallery</h2>

    <TombolFilter />

    <p v-if="state.memuat" id="muat">Memuat data...</p>
    <p v-else-if="state.galat" style="color: red;">{{ state.galat }}</p>
    <p v-else-if="proyekTampil.length === 0" id="pesan-kosong">Tidak ada proyek yang sesuai dengan filter.</p>
    
    <div v-else id="daftar" class="galeri">
      <article v-for="proyek in proyekTampil" :key="proyek.id" class="kartu">
        <img :src="proyek.gambar" :alt="proyek.judul" class="gambar-kartu" />
        <div class="konten-kartu">
          <h3>{{ proyek.judul }}</h3>
          <p>{{ proyek.deskripsi }}</p>
          <button 
            :class="['favorit', { aktif: state.favorit.includes(proyek.id) }]" 
            @click="tambahFavorit(proyek.id)">
            {{ state.favorit.includes(proyek.id) ? '★ Favorit' : '☆ Favorit' }}
            </button>
        </div>
      </article>
    </div>
  </section>
</template>