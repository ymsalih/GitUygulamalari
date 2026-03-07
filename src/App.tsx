import './App.css'

function App() {
  return (
    <div className="app-container">
      <header>

        <nav>       {/* merge işlemi için bir değişiklik yaptım bunu da güncelledim. */}
          <div className="logo">✂️ Premium Berber</div>

          <ul>
            <li><a href="#hizmetler">Hizmetlerimiz</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* SEO: Sayfada sadece bir tane h1 olmalıdır */}
        <section className="hero">
          <h1>Tarzınızı Profesyonellere Emanet Edin</h1>
          <p>Modern dokunuşlarla klasik şıklığın buluşma noktası.
            hepinizi bekliyoruz.
            bu da rebase için olan değişiklik
          </p>
          <button className="cta-button">Randevu Al</button>
        </section>

        <section id="hizmetler" className="services">
          <h2>Öne Çıkan Hizmetlerimiz</h2>
          <article className="service-card">
            <h3>Saç Kesimi & Şekillendirme</h3>
            <p>Yüz tipinize en uygun modern ve klasik saç kesim modelleri.</p>
          </article>
          <article className="service-card">
            <h3>Sakal Tasarımı</h3>
            <p>Ustura ile geleneksel sakal tıraşı ve modern şekillendirme.</p>
          </article>
        </section>
      </main>

      <footer id="iletisim">
        <h2>Bize Ulaşın</h2>
        <p>Adres: Merkez, Elazığ</p>
        <p>Telefon: 0555 555 55 55</p>
      </footer>
    </div>
  )
}

export default App