<script setup>
const props = defineProps({
  profil: { type: Object, required: true }
})
</script>

<template>
  <header>
    <h1>
      <span class="bold-header">hydari's</span>   <span class="thin-header">profile</span>
    </h1>
    
    <nav class="navbar">
      <ul>
        <li><a href="#about">about</a></li>
        <li><a href="#exp">experience</a></li>
        <li><a href="#gallery">gallery</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>
      <div class="tema">
        <input type="checkbox" id="tema" class="pengalih tema">
        <label for="tema" class="tombol-tema">tema</label>
      </div>
    </nav>
  </header>

  <section id="about">
    <div class="about">
      <h2>{{ props.profil.nama }}</h2>
      <p>{{ props.profil.bio }}</p>
    </div>
  </section>

  <section id="exp">
    <div class="exp">
      <h2>experience</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">no</th>
            <th scope="col">company</th>
            <th scope="col">description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>NVIDIA Corporation</td>
            <td>Sebagai Senior Engineering Manager di NVIDIA, saya mengarahkan tim insinyur dan peneliti terbaik dunia dalam merancang infrastruktur AI berskala besar. Tanggung jawab saya mencakup eksekusi strategi teknis, arsitektur software/hardware, serta pengembangan talenta utama yang membangun fondasi komputasi masa depan.</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Apple Inc.</td>
            <td>Sebagai Senior Director di Apple, saya memimpin tim lintas disiplin yang merancang dan mengeksekusi teknologi masa depan—mulai dari pengembangan Apple Silicon, sistem operasi, hingga arsitektur produk utama. Saya bertanggung jawab menjaga standar kualitas khas Apple, mendorong terobosan teknis, dan membawa visi produk dari konsep awal hingga ke tangan konsumen.</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Microsoft Corporation</td>
            <td>Sebagai Senior Director di Microsoft, saya memimpin tim rekayasa (engineering) dalam merancang dan mengeksekusi arsitektur software serta platform cerdas berskala masif. Tanggung jawab utama saya mencakup pengembangan ekosistem cloud (Azure) dan integrasi AI, memastikan standar keandalan tinggi, serta membentuk budaya inovasi di tingkat kepemimpinan teknis.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>