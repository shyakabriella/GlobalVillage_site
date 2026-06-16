import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import { useContent } from "@/contexts/ContentContext";
import DynamicIcon from "@/components/DynamicIcon";

const BRAND = "DANA KIGALI HOTEL";

const Index = () => {
  const { pages } = useContent();
  const pageData = pages.find((p) => p.id === '1');
  const sections = pageData.sections;
  
  // We can pull the shared Rooms and Experiences from their respective pages in the context
  const roomsData = pages.find((p) => p.id === '5')?.sections?.roomsList || [];
  const experiencesData = pages.find((p) => p.id === '4')?.sections?.experiencesList || [];
  // Take top 3 for homepage
  const featuredRooms = roomsData.slice(0, 3);
  const featuredExperiences = experiencesData.slice(0, 3);

  return (
    <div className="bg-background text-foreground">
      <SiteNav />

      {/* Hero — Heritage Alpine Luxe */}
      <section className="relative min-h-screen flex flex-col bg-navy-deep overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={sections.hero.image}
            alt={`${BRAND} on the ridge at twilight`}
            className="w-full h-full object-cover animate-ken-burns"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy-deep/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/30" />
        </div>

        <main className="relative z-10 flex-grow flex flex-col justify-center px-8 md:px-24 pt-32 pb-20 text-cream">
          <div className="flex items-center space-x-6 mb-10 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <div className="w-20 h-px bg-gold/60" />
            <span className="text-[11px] uppercase tracking-[0.5em] text-gold font-semibold">Welcome home</span>
          </div>

          <h1
            className="font-display text-4xl md:text-5xl lg:text-6xl leading-[0.95] mb-10 max-w-5xl animate-fade-in-up"
            style={{ animationDelay: "250ms" }}
          >
            {sections.hero.title.split('\n')[0]} <br />
            {sections.hero.title.split('\n').length > 1 && (
              <span className="italic ml-12 md:ml-24">{sections.hero.title.split('\n').slice(1).join('\n')}</span>
            )}
          </h1>

          <p
            className="text-lg md:text-xl font-light max-w-xl mb-14 text-cream/80 leading-relaxed border-l border-gold/40 pl-8 animate-fade-in-up"
            style={{ animationDelay: "500ms" }}
          >
            {sections.hero.subtitle}
          </p>

          <div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-10 animate-fade-in-up"
            style={{ animationDelay: "700ms" }}
          >
            <button onClick={() => window.open('https://direct-book.com/properties/danakigalihotel?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=USD&checkInDate=2026-06-16&checkOutDate=2026-06-17&trackPage=no', '_blank')} className="group relative bg-gold text-cream px-14 py-6 text-[11px] uppercase tracking-[0.25em] font-bold overflow-hidden shadow-2xl transition-transform hover:-translate-y-1">
              <span className="relative z-10">Reserve a Stay</span>
              <div className="absolute inset-0 bg-navy translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>
            <Link to="/about" className="group flex items-center space-x-5 text-[11px] uppercase tracking-[0.25em] font-bold text-cream">
              <span className="opacity-80 group-hover:opacity-100 transition-opacity">Discover</span>
              <div className="w-12 h-px bg-cream/40 group-hover:w-20 group-hover:bg-gold transition-all duration-500" />
            </Link>
          </div>
        </main>
      </section>

      {/* About */}
      <section id="about" className="py-32 container grid md:grid-cols-2 gap-16 items-center">
        <Reveal animation="scale-in" className="relative">
          <img src={sections.aboutSnippet.image} alt="Infinity pool overlooking the valley" loading="lazy" className="w-full h-[600px] object-cover" />
          <div className="absolute -bottom-8 -right-8 hidden md:block bg-gold text-navy-deep p-8 max-w-xs">
            <div className="font-display text-5xl">{sections.aboutSnippet.yearsOpen}</div>
            <p className="text-sm mt-2 font-medium">{sections.aboutSnippet.yearsText}</p>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <p className="text-gold tracking-[0.3em] text-sm mb-4">— WELCOME TO DANA</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">{sections.aboutSnippet.title}</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            {sections.aboutSnippet.body}
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="border-l-2 border-gold pl-4">
              <h3 className="font-display text-xl mb-1">5-Star Service</h3>
              <p className="text-sm text-muted-foreground">Personal concierge available around the clock.</p>
            </div>
            <div className="border-l-2 border-gold pl-4">
              <h3 className="font-display text-xl mb-1">Pristine Setting</h3>
              <p className="text-sm text-muted-foreground">Acres of forest, valley views, and silence.</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Rooms */}
      <section id="rooms" className="py-24 bg-cream">
        <div className="container">
          <Reveal className="text-center mb-16">
            <p className="text-gold tracking-[0.3em] text-sm mb-4">— THE RIDGE COLLECTION</p>
            <h2 className="font-display text-4xl md:text-5xl">Rooms &amp; Suites</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredRooms.map((r, i) => (
              <Reveal key={r.id || r.name} delay={i * 120}>
                <article className="group bg-background shadow-[var(--shadow-luxe)] overflow-hidden transition-transform duration-500 hover:-translate-y-2 flex flex-col h-full">
                  <div className="overflow-hidden">
                    <img src={r.img} alt={r.name} loading="lazy" className="w-full h-72 object-cover group-hover:scale-110 transition duration-[1.2s]" />
                  </div>
                  <div className="p-8 flex-grow flex flex-col">
                    <h3 className="font-display text-2xl mb-2">{r.name}</h3>
                    <p className="text-sm text-muted-foreground mb-6 flex-grow">{r.size} · {r.beds} · {r.baths} bath</p>
                    <Button onClick={() => window.open('https://direct-book.com/properties/danakigalihotel', '_blank')} variant="outline" className="rounded-none border-navy text-navy hover:bg-navy hover:text-cream w-full mt-auto">Book Now</Button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section id="experiences" className="py-32 bg-navy-deep text-cream">
        <div className="container">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-gold tracking-[0.3em] text-sm mb-4">— SIGNATURE EXPERIENCES</p>
            <h2 className="font-display text-4xl md:text-5xl">Days that linger in memory.</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-px bg-cream/10">
            {featuredExperiences.map(({ id, icon, title, text }, i) => (
              <Reveal key={id || title} delay={i * 150} className="bg-navy-deep">
                <div className="p-10 h-full group">
                  <DynamicIcon name={icon} className="w-10 h-10 text-gold mb-6 transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-3" strokeWidth={1.5} />
                  <h3 className="font-display text-2xl mb-3">{title}</h3>
                  <p className="text-cream/70 leading-relaxed">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section id="facilities" className="py-32 container">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold tracking-[0.3em] text-sm mb-4">— HOTEL FACILITIES</p>
          <h2 className="font-display text-4xl md:text-5xl mb-4">The finest amenities, considered for you.</h2>
          <p className="text-muted-foreground">Everything that defines a perfect stay — quietly available, never imposed.</p>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border">
          {sections.facilities.map(({ id, icon, label }, i) => (
            <Reveal key={id || label} delay={i * 80} animation="scale-in" className="bg-background">
              <div className="p-10 flex flex-col items-center text-center hover:bg-navy hover:text-cream transition-colors duration-500 group h-full">
                <DynamicIcon name={icon} className="w-10 h-10 text-gold mb-4 group-hover:text-gold-light transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
                <h3 className="font-display text-lg">{label}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </section>



      {/* Gallery */}
      <section className="py-32 container">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold tracking-[0.3em] text-sm mb-4">— MOMENTS</p>
          <h2 className="font-display text-4xl md:text-5xl">A glimpse of life on the ridge.</h2>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {sections.gallery.map(({ id, url }, i) => (
            <Reveal key={id || i} delay={i * 70} animation="scale-in" className={`overflow-hidden ${i === 0 || i === 5 ? "md:row-span-2 md:col-span-2" : ""}`}>
              <img src={url} alt="" loading="lazy" className="w-full h-full object-cover hover:scale-110 transition duration-[1.2s] min-h-[200px]" />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-cream">
        <div className="container">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-gold tracking-[0.3em] text-sm mb-4">— GUEST WORDS</p>
            <h2 className="font-display text-4xl md:text-5xl">Quiet praise, gratefully received.</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {sections.testimonials.map((t, idx) => (
              <Reveal key={t.id || t.name} delay={idx * 150}>
                <figure className="bg-background p-10 shadow-[var(--shadow-luxe)] transition-transform duration-500 hover:-translate-y-2 h-full">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold text-gold" />)}
                  </div>
                  <blockquote className="font-display text-xl leading-snug mb-8">"{t.text}"</blockquote>
                  <figcaption className="text-sm">
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-muted-foreground">{t.role}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-20 bg-navy text-cream text-center">
        <Reveal className="container">
          <p className="text-gold tracking-[0.3em] text-sm mb-4">— MEETINGS &amp; EVENTS</p>
          <h2 className="font-display text-4xl md:text-5xl mb-8 max-w-3xl mx-auto">A warm, exquisite, and elevated space for occasions of every scale.</h2>
          <Button size="lg" onClick={() => window.open('https://direct-book.com/properties/danakigalihotel/contact?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=USD&checkInDate=2026-06-13&checkOutDate=2026-06-14&trackPage=no', '_blank')} className="bg-gold hover:bg-gold-light text-navy-deep rounded-none px-10 transition-transform hover:-translate-y-1">Plan Your Event</Button>
        </Reveal>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Index;
