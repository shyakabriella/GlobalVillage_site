import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SiteNav, { BRAND } from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { useContent } from "@/contexts/ContentContext";
import DynamicIcon from "@/components/DynamicIcon";

const Experiences = () => {
  const { pages } = useContent();
  const pageData = pages.find((p) => p.id === '4');
  const sections = pageData.sections;

  return (
    <div className="bg-background text-foreground">
      <SiteNav />

      {/* Page hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end">
        <div className="absolute inset-0 z-0">
          <img
            src={sections.hero.image}
            alt="Experiences at DANA KIGALI HOTEL"
            className="w-full h-full object-cover animate-ken-burns"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-navy-deep/60" />
        </div>
        <div className="container relative z-10 text-cream pb-16">
          <p className="text-gold tracking-[0.3em] text-sm mb-4">— SIGNATURE EXPERIENCES</p>
          <h1 className="font-display text-4xl md:text-6xl">{sections.hero.title}</h1>
          <nav className="mt-6 text-sm text-cream/70">
            <Link to="/" className="hover:text-gold">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-cream">Experiences</span>
          </nav>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 container text-center max-w-3xl mx-auto">
        <p className="text-gold tracking-[0.3em] text-sm mb-4">— SIX WAYS TO REMEMBER</p>
        <h2 className="font-display text-4xl md:text-5xl mb-6">{sections.intro.title}</h2>
        <p className="text-muted-foreground leading-relaxed">
          {sections.intro.body}
        </p>
      </section>

      {/* Experience list */}
      <section className="pb-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-px bg-border">
            {sections.experiencesList.map((exp, i) => (
              <div key={exp.id || exp.title} className={`bg-background grid sm:grid-cols-2 group hover:bg-cream transition-colors duration-500`}>
                <div className={`overflow-hidden ${i % 4 === 1 || i % 4 === 2 ? 'sm:order-2' : ''}`}>
                  <img src={exp.img} alt={exp.title} loading="lazy" className="w-full h-full object-cover min-h-[300px] group-hover:scale-105 transition duration-[1.5s]" />
                </div>
                <div className={`p-10 md:p-14 flex flex-col justify-center ${i % 4 === 1 || i % 4 === 2 ? 'sm:order-1' : ''}`}>
                  <div className="flex items-center gap-3 mb-6 text-gold">
                    <DynamicIcon name={exp.icon} className="w-6 h-6" strokeWidth={1.5} />
                    <span className="text-xs tracking-[0.2em] uppercase font-semibold">{exp.tag}</span>
                  </div>
                  <h3 className="font-display text-3xl mb-4">{exp.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{exp.text}</p>
                  <div className="mt-auto pt-6 border-t border-border">
                    <p className="text-sm font-medium">{exp.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-deep text-cream text-center">
        <div className="container max-w-3xl mx-auto">
          <p className="text-gold tracking-[0.3em] text-sm mb-4">— BEGIN YOUR STORY</p>
          <h2 className="font-display text-4xl md:text-5xl mb-6">Reserve your first experience.</h2>
          <p className="text-cream/70 mb-10 leading-relaxed">
            Many of our rooms and suites are exclusive to guests. Book a room and unlock true comfort.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button className="bg-gold hover:bg-gold-light text-navy-deep rounded-none px-8">Reserve a Stay</Button>
            <Link to="/rooms">
              <Button variant="outline" className="border-cream text-cream bg-transparent hover:bg-cream hover:text-navy-deep rounded-none px-8">
                View Rooms
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Experiences;
