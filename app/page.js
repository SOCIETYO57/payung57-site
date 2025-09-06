"use client";
import React from "react";
import { motion } from "framer-motion";
import { button } from "@/components/ui/button";
import { card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { input } from "@/components/ui/input";
import { ShoppingCart, Instagram, Facebook, Phone, Mail, Sparkles, Star } from "lucide-react";

// --- Mock data ---
const products = [
  { id: 1, title: "Figure 1/7 – Classic", price: "Rp 1.299.000", img: "https://images.unsplash.com/photo-1605165480434-0c8d2a97bc93?q=80&w=1200&auto=format&fit=crop" },
  { id: 2, title: "Streetwear Tee – Core", price: "Rp 179.000", img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop" },
  { id: 3, title: "Hoodie – Night Shade", price: "Rp 389.000", img: "https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1200&auto=format&fit=crop" },
  { id: 4, title: "Acc – Necklace Payung57", price: "Rp 149.000", img: "https://images.unsplash.com/photo-1520975682031-88c0d4b3c2a6?q=80&w=1200&auto=format&fit=crop" },
];

const testimonials = [
  { name: "Naya", text: "Detail produk Payung57 gokil sih—kualitasnya premium, harga masih masuk akal!" },
  { name: "Bima", text: "Packaging rapi, dateng cepet. Brand lokal rasa internasional." },
  { name: "Saka", text: "Desainnya clean tapi standout. Fix jadi langganan." },
];

// --- Logo ---
const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 grid place-items-center shadow-lg">
      <Sparkles className="h-5 w-5 text-white" />
    </div>
    <span className="font-black tracking-wide text-xl">PAYUNG<span className="text-purple-600">57</span></span>
  </div>
);

// --- Product Card ---
const ProductCard = ({ p }) => (
  <Card className="overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
    <div className="aspect-[4/3] w-full bg-gradient-to-br from-neutral-200 to-neutral-100">
      <img src={p.img} alt={p.title} className="h-full w-full object-cover" />
    </div>
    <CardHeader className="pb-2">
      <CardTitle className="text-base font-semibold">{p.title}</CardTitle>
    </CardHeader>
    <CardContent className="pb-6 flex items-center justify-between">
      <span className="font-bold">{p.price}</span>
      <Button className="rounded-2xl" size="sm">
        <ShoppingCart className="mr-2 h-4 w-4" /> Beli
      </Button>
    </CardContent>
  </Card>
);

// --- Halaman utama ---
export default function Page() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#products" className="hover:text-purple-600">Produk</a>
            <a href="#about" className="hover:text-purple-600">Tentang</a>
            <a href="#testi" className="hover:text-purple-600">Testimoni</a>
            <a href="#contact" className="hover:text-purple-600">Kontak</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button className="rounded-2xl" asChild>
              <a href="#shop">Shop Now</a>
            </Button>
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
              <Button className="rounded-2xl">Belanja Sekarang</Button>
              <Button variant="outline" className="rounded-2xl" asChild>
                <a href="#about">Pelajari Brand</a>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-5 text-neutral-600">
              <div className="flex items-center gap-1"><Star className="h-4 w-4" />1000+ pelanggan puas</div>
              <div className="flex items-center gap-1"><Star className="h-4 w-4" />Garansi kualitas</div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <div className="rounded-3xl border shadow-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1600&auto=format&fit=crop"
                alt="Hero visual"
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
          <Button variant="outline" className="rounded-2xl">Lihat Semua</Button>
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
              <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop" alt="Studio" className="h-full w-full object-cover" />
            </div>
            <div className="rounded-3xl overflow-hidden border shadow-sm">
              <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop" alt="Team" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testi" className="mx-auto max-w-6xl px-4 py-16">
        <h3 className="text-2xl md:text-4xl font-black mb-8">Apa Kata Mereka</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Card key={i} className="rounded-3xl">
              <CardContent className="p-6">
                <p className="text-neutral-700 mb-4">“{t.text}”</p>
                <p className="font-semibold">{t.name}</p>
              </CardContent>
            </Card>
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
              <Input placeholder="Alamat email" className="bg-white text-neutral-900 rounded-2xl" />
              <Button className="rounded-2xl">Subscribe</Button>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            <Card className="bg-white/5 border-white/10 rounded-3xl">
              <CardContent className="p-6">
                <p className="text-sm text-neutral-300">Instagram</p>
                <a href="#" className="mt-1 inline-flex items-center gap-2 font-semibold">@payung57 <Instagram className="h-4 w-4" /></a>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10 rounded-3xl">
              <CardContent className="p-6">
                <p className="text-sm text-neutral-300">Facebook</p>
                <a href="#" className="mt-1 inline-flex items-center gap-2 font-semibold">Payung57 <Facebook className="h-4 w-4" /></a>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10 rounded-3xl">
              <CardContent className="p-6">
                <p className="text-sm text-neutral-300">WhatsApp</p>
                <a href="#" className="mt-1 inline-flex items-center gap-2 font-semibold">Hubungi Kami <Phone className="h-4 w-4" /></a>
              </CardContent>
            </Card>
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
