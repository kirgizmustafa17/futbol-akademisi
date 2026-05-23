"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="iletisim"
      className="section-padding bg-linear-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-green-600 font-bold text-sm uppercase tracking-widest">
            İletişim
          </span>
          <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-extrabold mt-3 mb-5">
            Bize Ulaşın
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Ücretsiz deneme dersi kaydı veya bilgi almak için formu doldurun,
            sizinle iletişime geçelim.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 shadow-sm"
            >
              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm font-medium flex items-center gap-2">
                  <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Mesajınız başarıyla gönderildi! En kısa sürede dönüş yapacağız.
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Veli Adı Soyadı *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all text-sm"
                    placeholder="Adınız Soyadınız"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all text-sm"
                    placeholder="05XX XXX XX XX"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  E-posta
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all text-sm"
                  placeholder="ornek@email.com"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Çocuğunuzun Adı
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all text-sm"
                    placeholder="Çocuğunuzun adı"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Çocuğunuzun Yaşı
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all text-sm text-gray-500">
                    <option value="">Seçiniz</option>
                    <option value="4-6">4-6 Yaş</option>
                    <option value="7-9">7-9 Yaş</option>
                    <option value="10-12">10-12 Yaş</option>
                    <option value="13-16">13-16 Yaş</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Mesajınız
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all text-sm resize-none"
                  placeholder="Mesajınızı yazın..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-colors shadow-md text-sm"
              >
                Gönder
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {[
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                ),
                icon2: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />,
                title: "Adres",
                lines: ["[Akademi Adı] Futbol Akademisi", "Mahallesi, Sokak No.", "İlçe, Şehir"],
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                ),
                title: "Telefon",
                lines: ["[+90 XXX XXX XX XX]", "[+90 XXX XXX XX XX]"],
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                ),
                title: "E-posta",
                lines: ["info@akademi.com", "kayit@akademi.com"],
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                ),
                title: "Çalışma Saatleri",
                lines: [
                  "Pazartesi - Cuma: 09:00 - 19:00",
                  "Cumartesi: 09:00 - 17:00",
                  "Pazar: 10:00 - 15:00",
                ],
              },
            ].map((info) => (
              <div
                key={info.title}
                className="flex gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-green-200 transition-colors"
              >
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-green-600 shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {info.icon}
                    {"icon2" in info && info.icon2}
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-sm text-gray-800">{info.title}</div>
                  {info.lines.map((line) => (
                    <div key={line} className="text-gray-500 text-sm mt-0.5">
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="aspect-square sm:aspect-video bg-linear-to-br from-green-50 to-emerald-50 rounded-xl border border-gray-100 flex items-center justify-center">
              <div className="text-center p-6">
                <span className="text-4xl block mb-3">📍</span>
                <p className="text-green-600 font-semibold text-sm">Harita</p>
                <p className="text-green-400 text-xs mt-1">
                  Google Maps embed ekleyin
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
