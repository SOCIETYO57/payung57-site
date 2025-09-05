"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Sparkles } from "lucide-react";

// --- Mock data ---
const products = [
  {
    id: 1,
    title: "Figure 1/7 – Classic",
    price: "Rp 1.299.000",
    img: "https://images.unsplash.com/photo-1605165480434-0c8d2a97bc93?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Streetwear Tee – Core",
    price: "Rp 179.000",
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Hoodie – Night Shade",
    price: "Rp 389.000",
    img: "https://images.unsplash.com/photo-1516826957135-700deeda698c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "ACC – Necklace Payung57",
    price: "Rp 149.000",
    img: "https://images.unsplash.com/photo-1520975682031-88c0d4b3c2a6?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 grid place-items-center shadow-lg">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="font-black tracking-wide text-xl">
              PAYUNG<span className="text-purple-600">57</span>
            </span>
          </div>
          <Input placeholder="Cari produk..." className="max-w-xs rounded-2xl" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-24 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold"
        >
          Koleksi Premium Payung57
        </motion.h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Dari streetwear, hoodie, sampai figure—semua dengan kualitas terbaik
          dan harga bersahabat.
        </p>
        <div className="mt-6">
          <Button size="lg" className="rounded-2xl shadow-lg">
            Belanja Sekarang
          </Button>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Produk Unggulan</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p) => (
            <Card key={p.id} className="overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] w-full bg-gradient-to-br from-neutral-200 to-neutral-100">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover" />
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-base font-semibold">{p.title}</CardTitle>
              </CardHeader>
              <CardContent className="pb-6 flex items-center justify-between">
                <span className="font-bold">{p.price}</span>
                <Button size="sm" className="rounded-2xl">
                  <ShoppingCart className="mr-2 h-4 w-4" /> Beli
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
