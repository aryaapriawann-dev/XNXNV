import { Metadata } from "next";
import ServicesSection from "@/components/ServicesSection";

export const metadata: Metadata = {
  title: "Layanan - XNXNV",
  description: "Kami menyediakan berbagai layanan digital untuk membantu bisnis Anda tumbuh.",
};

export default function ServicesPage() {
  return (
    <div>
      <div className="bg-white dark:bg-zinc-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Layanan Kami
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
            Solusi lengkap untuk memajukan bisnis Anda di era digital.
          </p>
        </div>
      </div>
      <div className="bg-zinc-50 dark:bg-zinc-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServicesSection />
        </div>
      </div>
    </div>
  );
}
