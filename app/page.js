"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Instagram, Facebook, Phone, Mail } from "lucide-react";

// Dummy data produk
const products = [
  { id: 1, title: "Produk 1", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600" },
  { id: 2, title: "Produk 2", img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=600" },
  { id: 3, title: "Produk 3", img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=600" },
  { id: 4, title: "Produk 4", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600" },
];

// Dummy data testimoni
const testimonials = [
  { text: "Produk bagus banget!", name: "Andi" },
  { text: "Kualitas mantap, recommended!", name: "Budi" },
  { text: "Pengiriman cepat, puas belanja di sini.", name: "Citra" },
];

// --- Komponen kecil ---
function Logo() {
  return <h1 className="text-xl font-bold text-purple-600">Payung57</h1>;
}

function ProductCard({ p }) {
  return (
    <div className="overflow-hidden rounded-2xl shadow-sm border hover:shadow-lg transition-shadow">
      <div className="aspect-[4/3] w-full relative">
        <Image src={p.img} alt={p.title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h4 className="font-semibold">{p.title}</h4>
      </div>
    </div>
  );
}

// --- Halaman utama ---
export default function Page() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#products" className="hover:text-purple-600">Produk</a>
            <a href="#about" className="hover:text-purple-600">Tentang</a>
            <a href="#testi" className="hover:text-purple-600">Testimoni</a>
            <a href="#contact" className="hover:text-purple-600">Kontak</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#shop" className="px-4 py-2 rounded-2xl bg-purple-600 text-white hover:bg-purple-700">Shop Now</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(90%_60%_at_50%_0%,rgba(139,92,246,0.18),rgba(255,255,255,0))]" />
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="uppercase tracking-widest text-xs text-purple-600 font-semibold mb-3">Brand Creative</p>
            <h1 className="text-4xl md:text-6xl font-black leading-[1.1] mb-6">
              Bukan Sekadar Brand, <span className="text-purple-600">Tapi Gaya Hidup</span>
            </h1>
            <p className="text-neutral-600 max-w-xl mb-8">
              Payung57 menghadirkan produk yang clean, tajam, dan relevan untuk keseharian. Dari figure collectible hingga streetwear—semua dengan kualitas yang niat.
            </p>
            <div className="flex flex-wrap gap-3" id="shop">
              <button className="px-4 py-2 rounded-2xl bg-purple-600 text-white hover:bg-purple-700">Belanja Sekarang</button>
              <a href="#about" className="px-4 py-2 rounded-2xl border hover:bg-neutral-100">Pelajari Brand</a>
            </div>
            <div className="mt-8 flex items-center gap-5 text-neutral-600">
              <div className="flex items-center gap-1"><Star className="h-4 w-4" />1000+ pelanggan puas</div>
              <div className="flex items-center gap-1"><Star className="h-4 w-4" />Garansi kualitas</div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <div className="rounded-3xl border shadow-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1600"
                alt="Hero visual"
                width={1600}
                height={900}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rotate-2 rounded-3xl bg-white shadow-xl p-4 border w-64">
              <p className="text-xs uppercase tracking-wider text-neutral-500">Highlight</p>
              <p className="font-semibold">Rilis Koleksi Baru – Limited!</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-4xl font-black">Produk Unggulan</h2>
            <p className="text-neutral-600">Kualitas niat, detail rapi, siap dipakai atau dipajang.</p>
          </div>
          <a href="#" className="px-4 py-2 rounded-2xl border hover:bg-neutral-100">Lihat Semua</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative bg-neutral-50 border-y">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl md:text-4xl font-black mb-4">Cerita di Balik Payung57</h3>
            <p className="text-neutral-700 mb-4">
              Dimulai dari meja studio kecil, kami meracik karya dengan obsesif: pemilihan material, sentuhan warna,
              hingga finishing yang mulus. Tujuannya jelas—produk yang layak dipakai, dibanggakan, dan dikoleksi.
            </p>
            <p className="text-neutral-700">
              Kami percaya desain yang baik itu jujur dan relevan. Setiap rilisan dibuat terbatas agar terasa spesial.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-3xl overflow-hidden border shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200"
                alt="Studio"
                width={600}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="rounded-3xl overflow-hidden border shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200"
                alt="Team"
                width={600}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testi" className="mx-auto max-w-6xl px-4 py-16">
        <h3 className="text-2xl md:text-4xl font-black mb-8">Apa Kata Mereka</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-3xl border shadow-sm p-6">
              <p className="text-neutral-700 mb-4">“{t.text}”</p>
              <p className="font-semibold">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gradient-to-br from-neutral-950 to-neutral-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl md:text-4xl font-black mb-3">Tetap Terhubung</h3>
            <p className="text-neutral-300 mb-6 max-w-md">
              Dapatkan info rilis terbaru, diskon eksklusif, dan drop terbatas dari Payung57. Masukkan email kamu.
            </p>
            <div className="flex gap-3 max-w-md">
              <input placeholder="Alamat email" className="px-4 py-2 bg-white text-neutral-900 rounded-2xl border flex-1" />
              <button className="px-4 py-2 rounded-2xl bg-purple-600 text-white hover:bg-purple-700">Subscribe</button>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <p className="text-sm text-neutral-300">Instagram</p>
              <a href="#" className="mt-1 inline-flex items-center gap-2 font-semibold">@payung57 <Instagram className="h-4 w-4" /></a>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <p className="text-sm text-neutral-300">Facebook</p>
              <a href="#" className="mt-1 inline-flex items-center gap-2 font-semibold">Payung57 <Facebook className="h-4 w-4" /></a>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <p className="text-sm text-neutral-300">WhatsApp</p>
              <a href="#" className="mt-1 inline-flex items-center gap-2 font-semibold">Hubungi Kami <Phone className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <Logo />
          <p className="text-sm text-neutral-500">© {new Date().getFullYear()} Payung57. All rights reserved.</p>
          <div className="flex items-center gap-3 text-neutral-600">
            <a href="mailto:hello@payung57.com" className="inline-flex items-center gap-1"><Mail className="h-4 w-4" /> hello@payung57.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
