;<form onSubmit={handleSubmit}>
  <p className="text-xl text-black mb-2">UID</p>
  <label htmlFor="uid">
    <input
      type="text"
      className="hidden"
      name="namaGame"
      data-voucher="Voucher Valorant"
      value={values.jenis}
      onChange={(e) => {
        handleChange(e.target.dataset.voucher)
      }}
    />
    <input
      type="text"
      name="uid"
      className="text-black p-1 bg-slate-400 mb-4 bg-opacity-20 rounded-sm ring-1 ring-black"
      value={uid || ''}
      onChange={(e) => {
        handleChange(e.target.dataset.voucher)
      }}
    />
  </label>
  <br />
  <label className="text-xl text-black mb-2" htmlFor="wrapButton">
    VALORANT POINT
  </label>
  <div className="wrapButton flex flex-wrap">
    <input id="variasi1" type="radio" name="variasi" className="hidden" data-jenis="1000VP" />
    <label
      htmlFor="variasi1"
      className="variasi w-full rounded-xl bg-slate-400 p-1 m-2 text-black hover:opacity-70 hover:text-slate-200 transition duration-500 ease-in-out cursor-pointer"
      data-harga="100.000"
      onClick={(e) => handleClickHarga(e)}
      onChange={() => {
        handleChange(e.target.dataset.jenis)
      }}
    >
      1000 VP
    </label>
    <input id="variasi2" type="radio" name="variasi" className="hidden" data-jenis="2000VP" />
    <label
      htmlFor="variasi2"
      className="variasi w-full rounded-xl bg-slate-400 p-1 m-2 text-black hover:opacity-70 hover:text-slate-200 transition duration-500 ease-in-out cursor-pointer"
      data-harga="200.000"
      onClick={(e) => handleClickHarga(e)}
      onChange={() => {
        handleChange(e.target.dataset.jenis)
      }}
    >
      2000 VP
    </label>
    <input id="variasi3" type="radio" name="variasi" className="hidden" data-jenis="3000VP" />
    <label
      htmlFor="variasi3"
      className="variasi w-full rounded-xl bg-slate-400 p-1 m-2 text-black hover:opacity-70 hover:text-slate-200 transition duration-500 ease-in-out cursor-pointer"
      data-harga="300.000"
      onClick={(e) => handleClickHarga(e)}
      onChange={() => {
        handleChange(e.target.dataset.jenis)
      }}
    >
      3000 VP
    </label>
    <input id="variasi4" type="radio" name="variasi" className="hidden" data-jenis="4000VP" />
    <label
      htmlFor="variasi4"
      className="variasi w-full rounded-xl bg-slate-400 p-1 m-2 text-black hover:opacity-70 hover:text-slate-200 transition duration-500 ease-in-out cursor-pointer"
      data-harga="400.000"
      onClick={(e) => handleClickHarga(e)}
      onChange={() => {
        handleChange(e.target.dataset.jenis)
      }}
    >
      4000 VP
    </label>
    <input id="variasi5" type="radio" name="variasi" className="hidden" data-jenis="5000VP" />
    <label
      htmlFor="variasi5"
      className="variasi w-full rounded-xl bg-slate-400 p-1 m-2 text-black hover:opacity-70 hover:text-slate-200 transition duration-500 ease-in-out cursor-pointer"
      data-harga="500.000"
      onClick={(e) => handleClickHarga(e)}
      onChange={() => {
        handleChange(e.target.dataset.jenis)
      }}
    >
      5000 VP
    </label>
  </div>

  <div id="wrapharga">
    <p className="text-xl text-black mb-2">Harga</p>
    <input
      id="harga"
      disabled
      type="text"
      className="text-center mx-auto rounded-xl bg-slate-400 p-1 m-2 text-black"
      name="harga"
      value={harga || values.harga || 0}
      onChange={() => {
        handleChange(e)
      }}
    />
  </div>

  <br />

  <button id="submitButton" type="submit" className="w-24 rounded-xl bg-slate-400 p-1 m-2 text-black hover:opacity-70 hover:text-slate-200 transition duration-500 ease-in">
    Beli
  </button>
</form>
