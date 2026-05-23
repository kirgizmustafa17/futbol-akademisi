const programs = [
  {
    age: "4-6 Yaş",
    title: "Okul Öncesi",
    description:
      "Top kontrolü, koordinasyon ve temel motor becerileri gelişimine odaklanan eğlenceli aktiviteler.",
    icon: "🌱",
    color: "from-yellow-400 to-orange-400",
    bgLight: "bg-yellow-50",
    schedule: "Hafta içi: 2 gün / Hafta sonu: 1 gün",
    duration: "45 dakika",
  },
  {
    age: "7-9 Yaş",
    title: "Minikler",
    description:
      "Temel teknikler, pas oyunu, şut tekniği ve 5v5 küçük saha maçları ile futbol sevgisi aşılanıyor.",
    icon: "⭐",
    color: "from-green-400 to-emerald-400",
    bgLight: "bg-green-50",
    schedule: "Hafta içi: 3 gün / Hafta sonu: 1 maç günü",
    duration: "60 dakika",
  },
  {
    age: "10-12 Yaş",
    title: "Yetenek Geliştirme",
    description:
      "İleri teknikler, taktik bilinci, pozisyon bilgisi ve 7v7 / 9v9 maç formatları.",
    icon: "🔥",
    color: "from-blue-400 to-indigo-400",
    bgLight: "bg-blue-50",
    schedule: "Hafta içi: 3-4 gün / Hafta sonu: 1 maç günü",
    duration: "75 dakika",
  },
  {
    age: "13-16 Yaş",
    title: "Profesyonel Hazırlık",
    description:
      "Profesyonel standartlarda teknik, taktik ve fiziksel eğitim. Kulüp keşiflerine hazırlık.",
    icon: "🏆",
    color: "from-purple-400 to-pink-400",
    bgLight: "bg-purple-50",
    schedule: "Hafta içi: 4-5 gün / Hafta sonu: Turnuva",
    duration: "90 dakika",
  },
];

export default function Programs() {
  return (
    <section
      id="programlar"
      className="section-padding bg-linear-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-green-600 font-bold text-sm uppercase tracking-widest">
            Programlar
          </span>
          <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-extrabold mt-3 mb-5">
            Eğitim Programlarımız
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Her yaş grubuna özel tasarlanmış kapsamlı futbol eğitim programları.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {programs.map((program) => (
            <div
              key={program.title}
              className="group relative bg-white rounded-2xl border border-gray-100 hover:border-green-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Accent bar */}
              <div
                className={`h-1.5 bg-linear-to-r ${program.color} w-full`}
              />

              <div className="p-6 lg:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-14 h-14 rounded-xl ${program.bgLight} flex items-center justify-center text-2xl shrink-0`}
                  >
                    {program.icon}
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-green-600 uppercase tracking-wider">
                      {program.age}
                    </span>
                    <h3 className="font-montserrat text-xl font-bold mt-0.5">
                      {program.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-5">
                  {program.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 rounded-lg text-xs font-medium text-gray-600">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {program.duration}
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 rounded-lg text-xs font-medium text-gray-600">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {program.schedule}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-500 mb-4">
            Tüm programlarımızda <strong className="text-gray-700">ücretsiz deneme dersi</strong>{" "}
            imkânı sunuyoruz.
          </p>
          <a
            href="#iletisim"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-colors shadow-md"
          >
            Bize Ulaşın
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
