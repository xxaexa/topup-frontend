// IMAGE
import aov from './assets/images/aov.png'
import ff from './assets/images/ff.png'
import gi from './assets/images/gi.png'
import mlbb from './assets/images/mlbb.png'
import pubg from './assets/images/pubg.png'
import valo from './assets/images/valo.png'

// ICON
import { FaTiktok, FaInstagram, FaYoutube } from 'react-icons/fa'
import { MdInsertChart, MdCancel, MdAccountBox, MdHomeFilled } from 'react-icons/md'

// Data
const gameVoucher = [
  { id: 1, title: 'Arena Of Valor', src: aov, link: '/voucher/aov', currency: 'Vouchers', game: 'AOV' },
  { id: 2, title: 'Free Fire', src: ff, link: '/voucher/free-fire', currency: 'Diamonds', game: 'Free Fire' },
  { id: 3, title: 'Genshin Impact', src: gi, link: '/voucher/genshin-impact', currency: 'Genesys Crystal', game: 'Genshin Impact' },
  { id: 4, title: 'Mobile Legends', src: mlbb, link: '/voucher/mobile-legend', currency: 'Diamonds', game: 'Mobile Legends' },
  { id: 5, title: 'PUBG', src: pubg, link: '/voucher/pubg', currency: 'UC', game: 'PUBG' },
  { id: 6, title: 'Valorant', src: valo, link: '/voucher/valorant', currency: 'Valorant Point', game: 'Valorant' },
]

const navs = [
  { id: 1, text: 'Home', href: '/' },
  { id: 2, text: 'Track', href: '/track' },
]

const sosmed = [
  { id: 1, icon: <FaTiktok className="text-3xl mx-1 hover:text-slate-400  ease-in-out duration-500" />, href: 'https://www.tiktok.com/en/' },
  { id: 2, icon: <FaInstagram className="text-3xl mx-1 hover:text-slate-400  ease-in-out duration-500" />, href: 'https://instagram.com' },
  { id: 3, icon: <FaYoutube className="text-3xl mx-1 hover:text-slate-400   ease-in-out duration-500 " />, href: 'https://www.youtube.com' },
]

const dashboard = [
  { id: 1, text: 'Home', icon: <MdHomeFilled /> },
  { id: 2, text: 'Game', icon: <MdInsertChart /> },
  { id: 3, text: 'Pulsa', icon: <MdInsertChart /> },
  { id: 4, text: 'EMoney', icon: <MdInsertChart /> },
  { id: 5, text: 'Account', icon: <MdAccountBox /> },
  { id: 6, text: 'Logout', icon: <MdCancel /> },
]

export { gameVoucher, navs, sosmed, dashboard }
