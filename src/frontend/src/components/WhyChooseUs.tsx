import { Award, Clock, Leaf, MapPin, Shield, ThumbsUp } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "100% Bond Back Guarantee",
    desc: "We guarantee your full bond return or we come back and re-clean for free. No questions asked.",
  },
  {
    icon: Clock,
    title: "Same Day Bookings Available",
    desc: "Moving fast? We offer same-day and next-day cleaning slots across New Farm and Brisbane.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    desc: "We use safe, eco-friendly cleaning products that are tough on grime but gentle on your family and pets.",
  },
  {
    icon: Award,
    title: "REIA Checklist Compliant",
    desc: "Our cleaning follows the Real Estate Institute of Australia checklist, so agents sign off first time.",
  },
  {
    icon: ThumbsUp,
    title: "Fully Insured & Police Checked",
    desc: "Every cleaner is fully insured and police checked. Your home is safe with our trusted team.",
  },
  {
    icon: MapPin,
    title: "Local New Farm Experts",
    desc: "We know New Farm properties inside out. From Queenslanders to modern apartments, we clean them all.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white" id="why-us">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
            Why New Farm Renters Choose Us
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We make moving out easy. Our team takes care of every cleaning
            detail so you can focus on your new home.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="bg-white border border-border rounded-xl p-6 shadow-card hover:shadow-hero transition-shadow duration-300"
              data-ocid={`why.feature.item.${i + 1}`}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <f.icon className="h-6 w-6 text-sky" />
              </div>
              <h3 className="font-display font-semibold text-lg text-navy mb-2">
                {f.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
