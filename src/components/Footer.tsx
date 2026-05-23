export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="bg-linear-to-r from-green-600 to-emerald-600 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='20' cy='20' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
              }}
            />
          </div>
          <div className="relative z-10">
            <h3 className="font-montserrat text-2xl md:text-3xl font-bold text-white mb-3">
              Çocuğunuzu Profesyonel Futbola Hazırlayın
            </h3>
            <p className="text-green-100 max-w-xl mx-auto mb-6">
              İlk ders ücretsiz! Hemen kayıt olun ve çocuğunuzun potansiyelini
              keşfedin.
            </p>
            <a
              href="#iletisim"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-700 font-bold rounded-xl hover:bg-green-50 transition-colors shadow-lg text-lg"
            >
              Ücretsiz Deneme Dersi
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 text-xl font-extrabold font-montserrat text-white mb-4">
                <span className="text-2xl">⚽</span>
                <span>AKADEMI</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Genç yetenekleri keşfeden, geliştiren ve profesyonel futbola
                hazırlayan Türkiye&apos;nin öncü futbol akademisi.
              </p>
              <div className="flex gap-3">
                {["Instagram", "Facebook", "YouTube", "Twitter"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-9 h-9 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors text-xs font-bold text-gray-400 hover:text-white"
                    aria-label={social}
                  >
                    {social.charAt(0)}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Hızlı Erişim</h4>
              <ul className="space-y-2.5">
                {["Ana Sayfa", "Hakkımızda", "Programlar", "Antrenörler", "Fiyatlandırma"].map(
                  (link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-green-400 text-sm transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="font-semibold text-white mb-4">Programlar</h4>
              <ul className="space-y-2.5">
                {["Okul Öncesi (4-6)", "Minikler (7-9)", "Yetenek Geliştirme (10-12)", "Profesyonel Hazırlık (13-16)", "Yaz Kampı"].map(
                  (link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-green-400 text-sm transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-white mb-4">İletişim</h4>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li>[Akademi Adı]</li>
                <li>[Mahallesi, Sokak No.]</li>
                <li>[İlçe, Şehir]</li>
                <li className="pt-2">
                  <a href="tel:+90XXXXXXXXXX" className="hover:text-green-400 transition-colors">
                    [+90 XXX XXX XX XX]
                  </a>
                </li>
                <li>
                  <a href="mailto:info@akademi.com" className="hover:text-green-400 transition-colors">
                    info@akademi.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} [Akademi Adı] Futbol Akademisi. Tüm hakları saklıdır.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-gray-400 text-xs transition-colors">
                Gizlilik Politikası
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-xs transition-colors">
                Kullanım Şartları
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
