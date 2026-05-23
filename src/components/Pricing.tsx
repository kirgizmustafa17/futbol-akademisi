const plans = [
  {
    name: "Başlangıç",
    price: "1.500",
    description: "Temel futbol eğitimi ve geliştirme programı.",
    features: [
      "Hafta içi 2 gün antrenman",
      "Hafta sonu 1 maç günü",
      "Forma ve ekipman dahil",
      "Aylık gelişim raporu",
      "Veli bilgilendirme toplantıları",
    ],
    highlighted: false,
    color: "border-gray-200",
  },
  {
    name: "Profesyonel",
    price: "2.500",
    description: "İleri seviye eğitim ve turnuva katılımı.",
    features: [
      "Hafta içi 3-4 gün antrenman",
      "Hafta sonu turnuva katılımı",
      "Premium forma ve ekipman",
      "Haftalık performans raporu",
      "Video analiz seansları",
      "Bireysel gelişim planı",
      "Keşifçi rehberliği",
    ],
    highlighted: true,
    color: "border-green-400",
  },
  {
    name: "Elite",
    price: "3.500",
    description: "Profesyonel futbola hazırlık ve özel eğitim.",
    features: [
      "Hafta içi 5 gün antrenman",
      "Sınırsız turnuva katılımı",
      "Özel forma ve tüm ekipman",
      "Günlük performans takibi",
      "Birebir özel ders",
      "Psikolojik destek",
      "Profesyonel kulüp yönlendirme",
      "Yaz/kamp programları",
    ],
    highlighted: false,
    color: "border-gray-200",
  },
];

export default function Pricing() {
  return (
    <section
      id="fiyatlandirma"
      className="section-padding bg-linear-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-green-600 font-bold text-sm uppercase tracking-widest">
            Fiyatlandırma
          </span>
          <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-extrabold mt-3 mb-5">
            Üyelik Paketleri
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Çocuklarınızın seviyesine ve hedeflerine uygun paketi seçin. Tüm
            paketler aylık abonelik temellidir.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl border-2 ${plan.color} p-8 ${
                plan.highlighted
                  ? "shadow-xl shadow-green-500/10 scale-[1.02] md:scale-105 z-10"
                  : "shadow-sm hover:shadow-lg"
              } transition-all duration-300`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 bg-green-500 text-white text-xs font-bold rounded-full shadow-md">
                    En Popüler
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="font-montserrat text-xl font-bold mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-500 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-sm text-gray-400">₺</span>
                  <span className="font-montserrat text-4xl font-black text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 font-medium">/ay</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className={`w-5 h-5 shrink-0 mt-0.5 ${
                        plan.highlighted ? "text-green-500" : "text-gray-400"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#iletisim"
                className={`block w-full text-center py-3.5 rounded-xl font-bold text-sm transition-colors ${
                  plan.highlighted
                    ? "bg-green-600 hover:bg-green-700 text-white shadow-md"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
              >
                Paketi Seç
              </a>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="text-center mt-10">
          <p className="text-gray-400 text-sm">
            * Fiyatlar 2025 sezonu için geçerlidir. Öğretici indirimleri ve
            taksit seçenekleri için bizi arayın.
          </p>
        </div>
      </div>
    </section>
  );
}
