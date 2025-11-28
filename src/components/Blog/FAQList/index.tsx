"use client";
import { useState } from "react";

export default function FAQList() {
  const [open, setOpen] = useState<number | null>(null);

  // ➜ Buat pertanyaan dan jawaban dalam 1 object
  const faq = [
    {
      question: "Apakah saya bisa konsultasi terlebih dahulu?",
      answer:
        "Tentu! Anda bisa menghubungi tim kami untuk konsultasi gratis sebelum membeli.",
    },
    {
      question: "Apakah produk yang dijual memiliki garansi?",
      answer:
        "Ya, seluruh produk memiliki garansi resmi sesuai ketentuan pabrik atau distributor.",
    },
    {
      question: "Apakah Toko Utomo melayani pengiriman?",
      answer:
        "Kami melayani pengiriman ke seluruh Indonesia menggunakan ekspedisi terpercaya.",
    },
    {
      question: "Produk apa saja yang tersedia di toko?",
      answer:
        "Kami menyediakan berbagai kebutuhan otomotif, alat servis, dan perlengkapan kendaraan.",
    },
  ];

  return (
    <div className="mt-12">
      <h2 className="text-xl font-bold text-center mb-4">
        Pertanyaan Yang Sering Diajukan
      </h2>

      <div className="space-y-3 max-w-2xl mx-auto">
        {faq.map((item, i) => (
          <div
            key={i}
            className="border rounded-xl p-4 cursor-pointer"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <div className="flex justify-between">
              <p className="font-inter">{item.question}</p>
              <span>{open === i ? "−" : "+"}</span>
            </div>

            {open === i && (
              <p className="text-sm text-gray-600 mt-2">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
