'use client';



export default function ClixscapePortfolio() {
  const gallery = [
    {
      title: 'Golden Hour Portraits',
      category: 'Portraits',
      image: '/images/Icon1.png',
    },
    {
      title: 'Kathak Frames',
      category: 'Dance Photography',
      image: '/images/Icon2.png',
    },
    {
      title: 'Visual Diary',
      category: 'Visual Diary',
      image: '/images/Icon3.png',
    },
  ];

  return (
    <div className="min-h-screen scroll-smooth bg-gradient-to-b from-[#2b1d18] via-[#4a2f27] to-[#1f1613] text-stone-100 font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b border-[#6b4b3e]/30 bg-[#1f1613]/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a
            href="#"
            className="text-lg font-semibold tracking-[0.2em] text-[#f2dfd3]"
          >
            CLIXSCAPE
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById('portfolio')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-sm tracking-[0.2em] text-[#d8b7a3] transition hover:text-white"
            >
              PORTFOLIO
            </a>

            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById('services')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-sm tracking-[0.2em] text-[#d8b7a3] transition hover:text-white"
            >
              SERVICES
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-sm tracking-[0.2em] text-[#d8b7a3] transition hover:text-white"
            >
              CONTACT
            </a>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden pt-20">
        <img
          src="/images/hero.jpg"
          alt="Photography Hero"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 bg-[radial-gradient\(circle_at_top,rgba\(255,255,255,0\.12\),transparent_55%\)]" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#f2dfd3]">
            Clixscape Photography
          </p>

          <h1 className="max-w-4xl text-4xl md:text-5xl font-bold leading-tight md:text-7xl">
            Everything I Couldn't Say,
            <br />
            I Photographed.
          </h1>

          <p className="mt-6 max-w-2xl text-base text-[#f2dfd3] md:text-lg">
            A visual diary of emotions, movement, light, and stories captured
            through artistic photography.
          </p>

          <div className="mt-10 flex gap-4">
            
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById('portfolio')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="rounded-2xl bg-[#f0c98d] px-6 py-3 text-stone-950 transition hover:scale-105"
            >
              View Portfolio
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="rounded-2xl border border-white/40 px-6 py-3 transition hover:bg-[#5a392e]"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="relative flex h-[420px] sm:h-[520px] md:h-[720px] items-center justify-center overflow-hidden rounded-[32px] border border-[#6b4b3e]/50 bg-[#2a1b16] shadow-[0_20px_60px_rgba(0,0,0,0.35)] md:mt-8">
          <img
            src="/images/aboutme1.png"
            alt="About Clixscape"
            className="h-full w-full object-cover object-[center_top] opacity-95 transition duration-700 hover:scale-[1.03]"
          />
        </div>

          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#d8b7a3]">
              About Me
            </p>

            <h2 className="text-4xl font-semibold md:text-5xl">
              Capturing moments that feel cinematic and real.
            </h2>

            <p className="mt-6 leading-8 text-[#f2dfd3]">
              Hi, I'm Neha — the person behind Clixscape. I love capturing
              movement, emotions, soft aesthetics, classical performances, and
              storytelling through photography. My work blends dreamy visuals
              with authentic emotions to create frames that feel timeless.
            </p>

            <div className="mt-8 rounded-3xl border border-[#6b4b3e]/50 bg-[#3a241d] p-8">
              <p className="text-xl leading-9 text-gray-200 italic">
                “For me, photography is less about perfect frames and more about
                preserving a feeling before it disappears.”
              </p>

              <div className="mt-6 h-px w-full bg-white/10" />

              <p className="mt-6 leading-8 text-[#d8b7a3]">
                Clixscape started as a quiet way of expressing emotions,
                nostalgia, movement, and moments that words could never fully
                explain. Every frame is meant to feel personal — like a memory
                you can revisit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="portfolio" className="bg-[#3a241d] px-6 py-24">
        <div className="mx-auto mb-12 flex max-w-7xl items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#d8b7a3]">
              Curated Frames
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[#d8b7a3]">
              Portfolio
            </p>

            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
              Selected Work
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-3xl border border-[#6b4b3e]/50 bg-[#2a1b16] transition duration-700 hover:-translate-y-3 hover:shadow-[0_25px_70px_rgba(0,0,0,0.45)] hover:border-[#f0c98d]/40"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[240px] sm:h-[280px] md:h-[340px] w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <a
                    href={
                      item.category === 'Portraits'
                        ? '/portraits'
                        : item.category === 'Dance Photography'
                        ? '/dance'
                        : '/creative'
                    }
                    className="mb-4 inline-block rounded-full border border-[#6b4b3e]/50 px-4 py-2 text-xs tracking-[0.2em] text-[#f0c98d] transition hover:bg-[#5a392e]"
                  >
                    VIEW COLLECTION
                  </a>
                  <p className="text-sm text-[#d8b7a3]">{item.category}</p>
                  <h3 className="mt-2 text-xl font-medium">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#d8b7a3]">
            Services
          </p>

          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            What I Shoot
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Portrait Photography',
              icon: '/images/Icon1.png',
            },
            {
              title: 'Dance & Performance',
              icon: '/images/Icon2.png',
            },
            {
              title: 'Visual Diary',
              icon: '/images/Icon3.png',
            },
          ].map((service, index) => (
            <div
              key={index}
              className="rounded-3xl border border-[#6b4b3e]/50 bg-[#3a241d] p-8"
            >
              <img
  src={service.icon}
  alt={service.title}
  className="mb-6 h-14 w-14 object-contain"
/>
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p className="mt-4 leading-7 text-[#d8b7a3]">
                {service.title === 'Portrait Photography'
                  ? 'Capturing personality, softness, emotions, and authentic moments through cinematic portrait storytelling.'
                  : service.title === 'Dance & Performance'
                  ? 'Preserving rhythm, movement, expressions, and the beauty of classical performance through timeless frames.'
                  : 'Collecting cinematic moments, quiet emotions, silhouettes, details, and creative frames that feel personal and timeless.'}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-[#6b4b3e]/50 px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#d8b7a3]">
            Let's Work Together
          </p>

          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            Create Something Beautiful.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#f2dfd3]">
            Available for portrait sessions, dance performances, creative
            concepts, and collaborations.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://instagram.com/clixscape"
              target="_blank"
              className="rounded-2xl bg-[#f0c98d] px-7 py-3 text-stone-950 transition hover:scale-105"
            >
              Instagram
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=clixscape.nehaz@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/20 px-7 py-3 transition hover:bg-[#5a392e]"
            >
              Email Me
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#6b4b3e]/40 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center md:flex-row">
          <p className="text-sm text-[#d8b7a3]">
            © 2026 Clixscape Studio
          </p>

          <p className="text-sm italic text-[#f2dfd3]">
            Everything I couldn't say, I photographed.
          </p>
        </div>
      </footer>
    </div>
  );
}
