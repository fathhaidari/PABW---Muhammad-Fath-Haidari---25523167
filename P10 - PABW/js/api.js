const ALAMAT = 'data/proyek.json';

export async function ambilProyek() {
  const respons = await fetch(ALAMAT);
  console.log('status', respons.status, 'ok', respons.ok);
  if (!respons.ok) {
    throw new Error('status ' + respons.status);
  }
  return respons.json();
}