export default function Hero() {
  return (
    <section
      id="anasayfa"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-green-900 via-green-800 to-emerald-900" />
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-green-200 text-sm font-medium mb-8 border border-white/10">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          2025 Kayıtları Başladı
        </div>

        <h1 className="font-montserrat text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
          Geleceğin Yıldızlarını
          <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-green-300 to-emerald-400">
            Şimdiden Keşfet
          </span>
        </h1>

        <p className="text-lg md:text-xl text-green-100/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Profesyonel futbol eğitimi, deneyimli antrenörler ve modern altyapı ile
          çocuklarınızın potansiyelini ortaya çıkarıyoruz.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#iletisim"
            className="w-full sm:w-auto px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl transition-all shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 hover:-translate-y-0.5 text-lg"
          >
            Ücretsiz Deneme Dersi →
          </a>
          <a
            href="#programlar"
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold rounded-xl transition-all border border-white/20 text-lg"
          >
            Programları İncele
          </a>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-3 gap-4 md:gap-8 max-w-lg mx-auto">
          {[
            { value: "500+", label: "Öğrenci" },
            { value: "15+", label: "Yıllık Tecrübe" },
            { value: "50+", label: "Turnuva Başarısı" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-montserrat text-2xl sm:text-3xl md:text-4xl font-black text-white">
                {stat.value}
              </div>
              <div className="text-green-200/70 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/50"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
