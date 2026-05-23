const coaches = [
  {
    name: "[Antrenör Adı]",
    role: "Baş Antrenör",
    license: "UEFA A Lisansı",
    experience: "20+ Yıl Deneyim",
    bio: "Profesyonel kulüplerde forma giymiş, genç oyuncular yetiştirmiş deneyimli teknik adam.",
    emoji: "👨‍💼",
  },
  {
    name: "[Antrenör Adı]",
    role: "Teknik Direktör",
    license: "UEFA B Lisansı",
    experience: "15+ Yıl Deneyim",
    bio: "Genç millî takımlarda görev yapmış, taktik analiz konusunda uzman.",
    emoji: "🧑‍💼",
  },
  {
    name: "[Antrenör Adı]",
    role: "Minikler Antrenörü",
    license: "TFF C Lisansı",
    experience: "10+ Yıl Deneyim",
    bio: "Çocuk psikolojisi sertifikalı, küçük yaş gruplarında uzmanlaşmış antrenör.",
    emoji: "🧑‍🏫",
  },
  {
    name: "[Antrenör Adı]",
    role: "Fizyoterapist",
    license: "Spor Bilimleri Fakültesi",
    experience: "12+ Yıl Deneyim",
    bio: "Sporcu sağlığı, sakatlardan korunma ve rehabilitasyon alanında uzman.",
    emoji: "🧑‍⚕️",
  },
];

export default function Coaches() {
  return (
    <section id="antrenorler" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-green-600 font-bold text-sm uppercase tracking-widest">
            Kadromuz
          </span>
          <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-extrabold mt-3 mb-5">
            Antrenör Ekibimiz
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Lisanslı ve deneyimli profesyonel antrenör kadromuz ile oyuncularınıza
            en iyi eğitimi sunuyoruz.
          </p>
        </div>

        {/* Coach Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coaches.map((coach) => (
            <div
              key={coach.name}
              className="group text-center bg-white rounded-2xl border border-gray-100 p-6 hover:border-green-200 hover:shadow-xl hover:shadow-green-500/5 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Photo placeholder */}
              <div className="relative w-28 h-28 mx-auto mb-5">
                <div className="w-full h-full rounded-full bg-linear-to-br from-green-100 to-emerald-100 flex items-center justify-center text-5xl group-hover:scale-105 transition-transform">
                  {coach.emoji}
                </div>
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-4 border-white">
                  <svg
                    className="w-3.5 h-3.5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              <h3 className="font-montserrat font-bold text-lg">{coach.name}</h3>
              <p className="text-green-600 font-semibold text-sm mb-3">
                {coach.role}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {coach.bio}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-2.5 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full">
                  {coach.license}
                </span>
                <span className="px-2.5 py-1 bg-gray-50 text-gray-600 text-xs font-semibold rounded-full">
                  {coach.experience}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
