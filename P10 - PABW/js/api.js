
const ALAMAT = 'https://raw.githubusercontent.com/fathhaidari/PABW---Muhammad-Fath-Haidari---25523167/refs/heads/main/P10%20-%20PABW/data/proyek.json';

export async function ambilProyek() {
  try {
    const respons = await fetch(ALAMAT);
    if (!respons.ok) throw new Error('status ' + respons.status);
    const data = await respons.json();
    return data;
  } catch (galat) {
    console.error('gagal memuat', galat.message);
    throw galat;
  }
}