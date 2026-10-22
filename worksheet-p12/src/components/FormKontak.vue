<script setup>
import { ref } from 'vue'

const fullname = ref('')
const email = ref('')
const massage = ref('')
const errFullname = ref('')
const errEmail = ref('')
const errMassage = ref('')

function simpanPesan() {
  errFullname.value = ''
  errEmail.value = ''
  errMassage.value = ''

  let valid = true
  if (!fullname.value) {
    errFullname.value = 'Nama lengkap wajib diisi.'
    valid = false
  }
  if (!email.value) {
    errEmail.value = 'Email wajib diisi.'
    valid = false
  }
  if (!massage.value) {
    errMassage.value = 'Pesan wajib diisi.'
    valid = false
  }

  if (valid) {
    alert('Pesan berhasil dikirim!')
    fullname.value = ''
    email.value = ''
    massage.value = ''
  }
}
</script>

<template>
  <section id="contact" class="sisi contact">
    <h2>Contact</h2>
    <p class="contact-sub">Click any option below to reach out to me directly.</p>

    <div class="contact-list">
      <div class="contact-item">
        <span class="contact-label">Instagram</span>
        <a href="https://instagram.com/Hydarii_" target="_blank" class="contact-value">@Hydarii_</a>
      </div>

      <div class="contact-item">
        <span class="contact-label">Email</span>
        <a href="mailto:fathhaidari@gmail.com" class="contact-value">fathhaidari@gmail.com</a>
      </div>

      <div class="contact-item">
        <span class="contact-label">Telepon / WhatsApp</span>
        <a href="https://wa.me/6289682352087" target="_blank" class="contact-value">0896 8235 2087</a>
      </div>
    </div>
  </section>

  <section id="message" class="utama message">
    <h2>Message</h2>
    <form id="form-kontak" @submit.prevent="simpanPesan" novalidate>
      <p>
        <label for="fullname">fullname</label>
        <input type="text" id="fullname" name="fullname" v-model="fullname">
        <span class="pesan-galat" id="err-fullname" style="color: red; font-size: 0.85rem; display: block; margin-top: 4px;">{{ errFullname }}</span>
      </p>
      <p>
        <label for="email">email</label>
        <input type="email" id="email" name="email" v-model="email">
        <span class="pesan-galat" id="err-email" style="color: red; font-size: 0.85rem; display: block; margin-top: 4px;">{{ errEmail }}</span>
      </p>
      <p>
        <label for="massage">message</label>
        <textarea id="massage" name="massage" v-model="massage"></textarea>
        <span class="pesan-galat" id="err-massage" style="color: red; font-size: 0.85rem; display: block; margin-top: 4px;">{{ errMassage }}</span>
      </p>
      <button type="submit">simpan</button>
    </form>
  </section>
</template>