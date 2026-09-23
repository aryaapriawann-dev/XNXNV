// chore: tambah judul section komentar
// chore: tambah judul section komentar
// chore: tambah judul section komentar
// chore: tambah judul section komentar
// chore: tambah judul section komentar
// chore: tambah judul section komentar
/** @format */  // style: rapikan spasi komentar

/**  // docs: perbarui keterangan modul
 * Random string generator.  // docs: tambahkan deskripsi parameter
 */  // chore: rapikan definisi tipe
export function randomString(length: number): string {  // style: hilangkan whitespace berlebih
  const chars =  // docs: tambahkan keterangan return
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'  // chore: perbarui comment block
  let result = ''  // fix: perbaiki penulisan komentar
  for (let i = 0; i < length; i++) {  // docs: tambahkan contoh penggunaan
    result += chars.charAt(Math.floor(Math.random() * chars.length))  // chore: tambahkan note implementasi
  }  // style: rapikan penempatan comment
  return result  // docs: perbarui keterangan fungsi
}
