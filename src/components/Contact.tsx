import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Hubungi Kami
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Siap membantu mewujudkan visi digital Anda
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-4">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">Email</h3>
            <p className="text-zinc-600 dark:text-zinc-400">contact@xnxnv.com</p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-4">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">Telepon</h3>
            <p className="text-zinc-600 dark:text-zinc-400">+62 812 3456 7890</p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-4">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">Lokasi</h3>
            <p className="text-zinc-600 dark:text-zinc-400">Jakarta, Indonesia</p>
          </div>
        </div>
      </div>
    </section>
  );
}
