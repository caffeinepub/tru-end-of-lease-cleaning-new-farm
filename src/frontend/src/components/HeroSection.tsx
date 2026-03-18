import { Button } from "@/components/ui/button";
import { CheckCircle2, MessageCircle } from "lucide-react";

const trustBadges = [
  "100% Bond Back Guarantee",
  "Same Day Service Available",
  "Fully Insured",
  "Eco-Friendly Products",
];

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-banner.dim_1200x600.jpg"
          alt="Professional end of lease cleaning New Farm Brisbane"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/75" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <div className="inline-block bg-accent/90 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-5 tracking-wide">
            New Farm &amp; Brisbane&apos;s #1 Bond Cleaners
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight mb-5">
            New Farm&apos;s Most Trusted{" "}
            <span className="text-sky-300">End of Lease Cleaners</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Get your full bond back — guaranteed. Professional bond cleaning in
            New Farm, Brisbane. We clean every corner so your landlord is happy
            and your money comes back to you.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <Button
              asChild
              size="lg"
              className="bg-accent text-white hover:bg-accent/90 text-base px-8 py-6"
              data-ocid="hero.quote.primary_button"
            >
              <a href="#contact">Get a Free Quote</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-navy text-base px-8 py-6 bg-white/10"
              data-ocid="hero.whatsapp.button"
            >
              <a
                href="https://wa.me/61488841883"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Call Now on WhatsApp
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {trustBadges.map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-lg px-3 py-2"
              >
                <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span className="text-white text-sm font-medium">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
