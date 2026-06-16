import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SiteNav, { BRAND } from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { useContent } from "@/contexts/ContentContext";
import DynamicIcon from "@/components/DynamicIcon";

const About = () => दल
  const { pages } = useContent();
  const pageData = pages.find((p) => p.id === '2');
  const sections = pageData.sections;

  return (
    <div className="bg-background text-foreground">
      <SiteNav />

      {/* Page hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end">
        <div className="absolute inset-0 z-0">
          <img
            src={sections.hero.image}
            alt="The Ridge"
            className="w-full h-full object-cover animate-ken-burns"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-navy-deep/60" />
        </div>
        <div className="container relative z-10 text-cream pb-16">
          <p className="text-gold tracking-[0.3em] text-sm mb-4">— OUR STORY</p>
          <h1 className="font-display text-4xl md:text-6xl">{sections.hero.title}</h1>
          <nav className="mt-6 text-sm text-cream/70">
            <Link to="/" className="hover:text-gold">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-cream">About</span>
          </nav>
        </div>
      </section>

      {/* Story */}
      <section className="py-32 container grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-gold tracking-[0.3em] text-sm mb-4">— WELCOME</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">{sections.welcome.title}</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            {sections.welcome.body.split('\n\n').map((paragraph, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: paragraph.replace('DANA KIGALI HOTEL is more than just a place to stay.', '<strong class="text-foreground font-display text-xl">DANA KIGALI HOTEL is more than just a place to stay.</strong>') }} />
            ))}
          </div>
          <div className="grid grid-cols-3 gap-6 mt-10">
            {sections.stats.map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl mb-1">{s.n}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 bg-gold/10 rounded-lg transform rotate-3 transition-transform duration-500 group-hover:rotate-0" />
          <img src={sections.welcome.image} alt="DANA KIGALI HOTEL hospitality" loading="lazy" className="relative w-full aspect-[4/5] object-cover shadow-[var(--shadow-luxe)]" />
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-cream">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-gold tracking-[0.3em] text-sm mb-4">— OUR VALUES</p>
            <h2 className="font-display text-4xl md:text-5xl">The spirit of Dana, in everything we do.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {sections.values.map(({ id, icon, title, text }) => (
              <div key={id || title} className="bg-background p-10 border border-border group hover:border-gold/50 transition-colors">
                <DynamicIcon name={icon} className="w-8 h-8 text-gold mb-6 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                <h3 className="font-display text-2xl mb-3">{title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage */}
      <section className="py-32 bg-navy-deep text-cream">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-gold tracking-[0.3em] text-sm mb-4">— OUR HERITAGE</p>
            <h2 className="font-display text-4xl md:text-5xl">A legacy from the Nile to the hills.</h2>
          </div>
          <div className="relative max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
            {sections.milestones.map((m, i) => (
              <div key={m.id || i} className="relative">
                <div className="hidden md:block absolute top-6 left-0 w-full h-px bg-gold/20" />
                <div className="relative bg-background w-12 h-12 flex items-center justify-center border border-gold/30 rounded-full mb-6 text-gold font-bold z-10">
                  {i + 1}
                </div>
                <div className="font-display text-2xl text-gold mb-2">{m.year}</div>
                <p className="text-cream/80 text-sm leading-relaxed">{m.text}</p>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-32 container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold tracking-[0.3em] text-sm mb-4">— OUR FAMILY</p>
          <h2 className="font-display text-4xl md:text-5xl">A team that welcomes you home.</h2>
        </div>
          <div className="grid md:grid-cols-3 gap-8">
            {sections.team.map((m) => (
              <div key={m.id || m.name} className="group">
                <div className="overflow-hidden mb-6 aspect-square">
                  <img src={m.img} alt={m.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-[1.5s]" />
                </div>
                <h3 className="font-display text-2xl mb-1">{m.name}</h3>
                <p className="text-gold text-sm tracking-widest uppercase font-semibold">{m.role}</p>
              </div>
            ))}
          </div>
      </section>

      {/* CTA */}
      <section className="grid md:grid-cols-2 min-h-[420px]">
        <img src={dining} alt="Dining at DANA KIGALI HOTEL" loading="lazy" className="w-full h-full object-cover min-h-[300px]" />
        <div className="bg-navy text-cream p-12 md:p-20 flex flex-col justify-center">
          <p className="text-gold tracking-[0.3em] text-sm mb-4">— COME STAY</p>
          <h2 className="font-display text-4xl md:text-5xl mb-6">A warm welcome is waiting.</h2>
          <p className="text-cream/70 mb-8 leading-relaxed max-w-md">Reserve a room and experience the true meaning of home in the heart of Kigali.</p>
          <div className="flex gap-4 flex-wrap">
            <Button className="bg-gold hover:bg-gold-light text-navy-deep rounded-none px-8">Reserve a Stay</Button>
            <Link to="/"><Button variant="outline" className="border-cream text-cream bg-transparent hover:bg-cream hover:text-navy-deep rounded-none px-8">Back to Home</Button></Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );


export default About;
