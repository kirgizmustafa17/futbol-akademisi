const features = [
  {
    icon: "🏟️",
    title: "Modern Altyapı",
    description:
      "Profesyonel standartlarda sahalarda, kapalı antrenman salonu ve video analiz odası.",
  },
  {
    icon: "👨‍🏫",
    title: "Uzman Antrenörler",
    description:
      "A, B ve C lisanslı profesyonel antrenörler ile UEFA lisanslı koçlar.",
  },
  {
    icon: "📊",
    title: "Bireysel Gelişim Takibi",
    description:
      "Her oyuncu için kişisel gelişim planı, düzenli performans değerlendirmesi.",
  },
  {
    icon: "🏆",
    title: "Turnuva Deneyimi",
    description:
      "Yıllık 50+ turnuva katılımı ile yarışma deneyimi ve başarı birikimi.",
  },
];

const stats = [
  { value: "500+", label: "Aktif Öğrenci" },
  { value: "25", label: "Profesyonel Antrenör" },
  { value: "50+", label: "Turnuva Başarısı" },
  { value: "15+", label: "Yıllık Tecrübe" },
];

export default function About() {
  return (
    <section id="hakkimizda" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-green-600 font-bold text-sm uppercase tracking-widest">
            Hakkımızda
          </span>
          <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-extrabold mt-3 mb-5">
            Biz Kimiz?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Genç yetenekleri keşfeden, geliştiren ve profesyonel futbola hazırlayan
            Türkiye'nin öncü futbol akademisi.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image placeholder */}
          <div className="relative group">
            <div className="aspect-[4/3] rounded-2xl bg-linear-to-br from-green-100 to-emerald-100 flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                <span className="text-8xl block mb-4">⚽</span>
                <p className="text-green-600 font-semibold text-lg">
                  Akademi Sahası
                </p>
                <p className="text-green-500 text-sm mt-1">
                  Buraya akdeminizin fotoğrafını ekleyin
                </p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg">
              <div className="text-white text-center">
                <div className="font-montserrat text-2xl font-black">15+</div>
                <div className="text-xs text-green-100">Yıllık</div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <h3 className="font-montserrat text-2xl md:text-3xl font-bold mb-6">
              Yetenekleri Keşfeden,<br />
              <span className="text-green-600">Geleceği İnşa Eden</span>
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              [Buraya akademinin kuruluş hikayesini yazın.] 2010 yılından bu yana
              yüzlerce genç yeteneğe profesyonel futbol eğitimi sunuyoruz. Modern
              altyapımız, deneyimli antrenör kadromuz ve kapsamlı eğitim
              programlarımızla çocuklarınızın hem futbol hem de karakter gelişimini
              destekliyoruz.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              [Misyonunuzu ekleyin.] Futbolun ötesinde; disiplin, takım ruhu ve
              sağlıklı yaşam alışkanlıkları kazandırarak gençlerin yaşam boyu
              faydalanacakları değerler aşılamayı hedefliyoruz.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                "Profesyonel Lisanslı Antrenörler",
                "Küçük Saha Formatı (5v5, 7v7, 9v9)",
                "Video Analiz ve Performans Takibi",
                "Profesyonel Kulüplere Transfer Desteği",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-green-500 mt-0.5 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-xl hover:shadow-green-500/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h4 className="font-montserrat font-bold text-lg mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-linear-to-br from-green-50 to-emerald-50 border border-green-100"
            >
              <div className="font-montserrat text-3xl md:text-4xl font-black text-green-700">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
