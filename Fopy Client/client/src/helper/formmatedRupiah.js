export const formattedRupiah = (rupiah) => {
  return new Intl.NumberFormat("en-ID", {
    style: "currency",
    currency: "IDR",
  }
  ).format(rupiah)
}



//export kita bisa pilih function apa yang dikirim beda sama export default itu secara keselruhan makanya langsung dikirim


