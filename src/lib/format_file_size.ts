// style: konsisten penggunaan quote
// style: konsisten penggunaan quote
// style: konsisten penggunaan quote
// style: konsisten penggunaan quote
// style: konsisten penggunaan quote
// style: konsisten penggunaan quote
/** @format */  // docs: perbarui keterangan modul

/**  // docs: tambahkan deskripsi parameter
 * Format bytes to human-readable file size.  // chore: rapikan definisi tipe
 */  // style: hilangkan whitespace berlebih
export function formatFileSize(bytes: number): string {  // docs: tambahkan keterangan return
  if (bytes === 0) return '0 Bytes'  // chore: perbarui comment block
  const k = 1024  // fix: perbaiki penulisan komentar
  const sizes = ['Bytes', 'KB', 'MB', 'GB']  // docs: tambahkan contoh penggunaan
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`
}
