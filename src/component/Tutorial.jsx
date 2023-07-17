const Tutorial = () => {
  return (
    <div className="mt-8 max-w-sm md:text-xl lg:w-1/2 ">
      <h1 className="mb-8 text-main text-center block font-bold text-4xl md:text-6xl">CARA BELI</h1>
      <div className="mx-auto w-full text-center bg-slate-300 bg-opacity-50 p-5 rounded-2xl">
        <div className="max-w-sm">
          <p>1.Masukan UID</p>
          <p>2.Pilih Voucher</p>
          <p>3.Sebelum Beli Pastikan Semua Data Benar</p>
          <p>4.Pilih Beli</p>
          <br />
          <p className="text-center">
            Simpan <span className="font-extrabold">KODE UNIK</span> Jika Ada Masalah Maka Kode Unik Sangat Dibutuhkan
          </p>
          <p className="text-center">
            Hubungi
            <span className="font-extrabold">
              <a href="">ADMIN</a>
            </span>
            Jika Ada Masalah
          </p>
        </div>
      </div>
    </div>
  )
}

export default Tutorial
