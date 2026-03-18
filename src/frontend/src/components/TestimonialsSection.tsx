import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    suburb: "New Farm",
    stars: 5,
    text: "Absolutely brilliant! The team came in and transformed our apartment. The oven looked brand new and the agent was so impressed she signed us off on the spot. Got our full $2,800 bond back. Couldn't be happier — will definitely book again.",
  },
  {
    name: "James T.",
    suburb: "Teneriffe",
    stars: 5,
    text: "We booked Tru Cleaning for our townhouse in Teneriffe and they did a sensational job. The carpet steam cleaning removed stains I thought would never come out. Professional, on time, and really thorough. Bond returned in full — thank you!",
  },
  {
    name: "Priya S.",
    suburb: "Fortitude Valley",
    stars: 5,
    text: "Booked online the day before moving out — they fit us in with no hassle at all. The bathroom grout came up spotless and the kitchen was gleaming. Agent said it was one of the best bond cleans she had seen. Highly recommend!",
  },
  {
    name: "Luke & Emma B.",
    suburb: "Newstead",
    stars: 5,
    text: "We used Tru Cleaning for our 2-bedroom apartment in Newstead. Reasonably priced, super friendly team, and the results were amazing. They cleaned things we didn't even know needed cleaning! Bond came back in full.",
  },
  {
    name: "Michelle R.",
    suburb: "Bowen Hills",
    stars: 5,
    text: "After a stressful move, Tru Cleaning was a lifesaver. They turned up on time with all their own equipment and got straight to work. The whole apartment was sparkling clean within 4 hours. Got my entire bond back with no issues. 10/10!",
  },
  {
    name: "Daniel K.",
    suburb: "New Farm",
    stars: 5,
    text: "Third time using Tru Cleaning and they are consistently excellent. The attention to detail is second to none — they even cleaned behind the fridge and the rubber seals on the dishwasher. Agent gave us a pass within 24 hours. Outstanding service.",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      className="py-20 bg-white"
      id="testimonials"
      aria-label="Customer reviews for Tru End of Lease Cleaning New Farm"
    >
      <div className="container mx-auto px-4">
        {/* Banner image */}
        <div className="relative rounded-2xl overflow-hidden mb-14 shadow-hero">
          <img
            src="/assets/generated/testimonials-banner.dim_1200x400.jpg"
            alt="Happy customers who got their bond back with Tru End of Lease Cleaning New Farm Brisbane"
            className="w-full h-48 md:h-64 object-cover"
            loading="lazy"
            width="1200"
            height="400"
          />
          <div className="absolute inset-0 bg-navy/65 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">
              What Our Customers Say
            </h2>
            <p className="text-white/85 text-lg max-w-2xl">
              Hundreds of happy renters across New Farm and Brisbane have got
              their bond back with us.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <article
              key={t.name}
              data-ocid={`testimonials.item.${i + 1}`}
              className="bg-white border border-border rounded-xl p-6 shadow-card hover:shadow-hero transition-shadow"
              itemScope
              itemType="https://schema.org/Review"
            >
              <div
                className="flex gap-1 mb-3"
                aria-label={`${t.stars} out of 5 stars`}
              >
                {[1, 2, 3, 4, 5].slice(0, t.stars).map((n) => (
                  <Star
                    key={n}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p
                className="text-sm text-muted-foreground leading-relaxed mb-4 italic"
                itemProp="reviewBody"
              >
                &ldquo;{t.text}&rdquo;
              </p>
              <div
                itemProp="author"
                itemScope
                itemType="https://schema.org/Person"
              >
                <p className="font-semibold text-navy text-sm" itemProp="name">
                  {t.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {t.suburb}, Brisbane
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
