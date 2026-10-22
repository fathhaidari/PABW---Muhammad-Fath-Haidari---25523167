<script setup>
import { onMounted, watch } from 'vue'
import KepalaProfil from './components/KepalaProfil.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'

import { profil } from './data.js'
import { state, simpan, muat, pulihkan, isiProyek } from './state.js'
import { ambilProyek } from './api.js'

onMounted(async () => {
  pulihkan(muat())
  try {
    const data = await ambilProyek()
    isiProyek(data)
  } catch (galat) {
    state.galat = 'Data gagal dimuat. Periksa koneksi, lalu muat ulang.'
  } finally {
    state.memuat = false
  }
})

watch(state, (nilai) => simpan(nilai), { deep: true })
</script>

<template>
  <div class="page">
    <KepalaProfil :profil="profil" />
    <main class="isi">
      <DaftarProyek />
      <FormKontak />
    </main>
    <footer>
      <p>Muhammad Fath Haidari - 25523167 - 2026</p>
    </footer>
  </div>
</template>