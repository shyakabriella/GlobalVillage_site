import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import SiteNav, { BRAND } from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import { useContent } from "@/contexts/ContentContext";
import DynamicIcon from "@/components/DynamicIcon";

const Contact = () => {
  const { pages } = useContent();
  const pageData = pages.find((p) => p.id === '3');
  const sections = pageData.sections;

  return (
    <div className="bg-background text-foreground">
      <SiteNav />

      {/* Page hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end">
        <div className="absolute inset-0 z-0">
          <img
            src={sections.hero.image}
            alt="Contact DANA KIGALI HOTEL"
            className="w-full h-full object-cover animate-ken-burns"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-navy-deep/70" />
        </div>
        <div className="container relative z-10 text-cream pb-16">
          <p className="text-gold tracking-[0.3em] text-sm mb-4">— GET IN TOUCH</p>
          <h1 className="font-display text-4xl md:text-6xl">{sections.hero.title}</h1>
          <nav className="mt-6 text-sm text-cream/70">
            <Link to="/" className="hover:text-gold">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-cream">Contact</span>
          </nav>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-24 container">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-gold tracking-[0.3em] text-sm mb-4">— REACH OUT</p>
            <h2 className="font-display text-4xl md:text-5xl">{sections.reachOut.title}</h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              {sections.reachOut.body}
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {sections.contactInfo.map((info, idx) => (
            <Reveal key={info.id || info.title} delay={idx * 100}>
              <div className="bg-background border border-border p-8 h-full flex flex-col items-center text-center group hover:border-gold/50 transition-colors">
                <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
                  <DynamicIcon name={info.icon} className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-display text-xl mb-4">{info.title}</h3>
                <div className="space-y-1 text-muted-foreground text-sm">
                  {info.lines.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-24 bg-cream">
        <div className="container grid lg:grid-cols-2 gap-16 items-start">
          {/* Form */}
          <Reveal>
            <div>
              <p className="text-gold tracking-[0.3em] text-sm mb-4">— SEND A MESSAGE</p>
              <h2 className="font-display text-4xl md:text-5xl mb-6">Write to us.</h2>
              <p className="text-muted-foreground leading-relaxed mb-10 max-w-md">
                Fill in the form below and we will get back to you within 24 hours. For urgent matters, please call us directly.
              </p>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm font-medium">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="Your first name"
                      className="rounded-none bg-background border-border h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm font-medium">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Your last name"
                      className="rounded-none bg-background border-border h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="rounded-none bg-background border-border h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium">Phone (optional)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+250 ..."
                    className="rounded-none bg-background border-border h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm font-medium">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="How can we help?"
                    className="rounded-none bg-background border-border h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    className="rounded-none bg-background border-border min-h-[160px] resize-y"
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-gold hover:bg-gold-light text-navy-deep font-semibold rounded-none px-10 h-12"
                >
                  <DynamicIcon name="Send" className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </Reveal>

          {/* Map image + Hours */}
          <div className="space-y-10">
            <Reveal animation="slide-in-right" className="h-full relative min-h-[400px]">
              <div className="absolute inset-0 bg-navy">
                <img src={sections.mapImage} alt="DANA KIGALI HOTEL view" className="w-full h-full object-cover opacity-60 mix-blend-overlay" />
              </div>
              <div className="absolute inset-0 p-12 flex flex-col justify-center text-cream">
                <h3 className="font-display text-3xl mb-8">Hours of Operation</h3>
                <div className="space-y-6">
                  {sections.hours.map((item) => (
                    <div key={item.id || item.label} className="flex justify-between items-center border-b border-cream/20 pb-4">
                      <span className="font-semibold tracking-wider uppercase text-xs text-gold">{item.label}</span>
                      <span className="text-sm">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-24 bg-navy-deep text-cream">
        <div className="container">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center">
              <MessageCircle className="w-12 h-12 text-gold mx-auto mb-6" strokeWidth={1.5} />
              <p className="text-gold tracking-[0.3em] text-sm mb-4">— INSTANT MESSAGING</p>
              <h2 className="font-display text-4xl md:text-5xl mb-6">Prefer to chat on WhatsApp?</h2>
              <p className="text-cream/70 mb-10 leading-relaxed">
                Send us a message anytime on WhatsApp and our team will respond as soon as possible. Perfect for quick questions and last-minute requests.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <a
                  href="https://wa.me/250788000000"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-gold hover:bg-gold-light text-navy-deep rounded-none px-8 h-12">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat on WhatsApp
                  </Button>
                </a>
                <Link to="/rooms">
                  <Button
                    variant="outline"
                    className="border-cream text-cream bg-transparent hover:bg-cream hover:text-navy-deep rounded-none px-8 h-12"
                  >
                    View Rooms
                  </Button>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Contact;
