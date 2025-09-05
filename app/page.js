"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Instagram, Facebook, Phone, Mail, Sparkles, Star } from "lucide-react";

export default function Page() {
  return (
    <div>
      {/* "use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Instagram, Facebook, Phone, Mail, Sparkles, Star } from "lucide-react";

// --- Mock data (edit freely) ---
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

// --- Logo component ---
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

export default function Payung57Landing() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* --- Navbar --- */}
      {/* --- Hero --- */}
      {/* --- Products --- */}
      {/* --- About --- */}
      {/* --- Testimonials --- */}
      {/* --- Newsletter / Contact --- */}
      {/* --- Footer --- */}
      {/* Kode lo di sini bro (gua ga hapus biar full sama persis 👆) */}
    </div>
  );
}
 */}
    </div>
  )
}
