import React, { Component } from 'react'
import Slider from 'react-slick'

const SlickCarousel = () => {
  const settings = {
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
  }
  return (
    <div className="mx-auto block items-center text-center p-6 tracking-widest bg-slate-400 bg-opacity-50">
      <Slider {...settings}>
        <div className=" flex flex-wrap justify-center items-center h-96 max-w-lg">
          <h3 className="my-16 md:my-28 text-2xl ">
            TOPUP DISINI DAPATKAN <span className="font-bold">DISKON SAMPAI 30%</span> JANGAN LUPA AJAK TEMAN KALIAN UNTUK MENDAPATKAN DISKON YANG LEBIH BESAR
            <br />
            <a href="" className="font-bold">
              BAGIKAN
            </a>
          </h3>
        </div>
        <div className=" flex flex-wrap justify-center items-center h-96 max-w-lg">
          <h3 className="my-16 md:my-28 text-2xl ">
            TOPUP DISINI AUTO GACOR LURR BENERAN GAK BOHONG DAH
            <a href="" className="font-bold"></a>
          </h3>
        </div>
        <div className=" flex flex-wrap justify-center items-center h-96 max-w-lg">
          <h3 className="my-16 md:my-28 text-2xl ">
            JANGAN LUPA CEK PROMO YA LUR
            <a href="" className="font-bold"></a>
          </h3>
        </div>
      </Slider>
    </div>
  )
}

export default SlickCarousel
