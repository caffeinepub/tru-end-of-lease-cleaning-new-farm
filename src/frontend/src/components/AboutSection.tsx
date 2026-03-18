import { Award, BadgeCheck, Clock, Users } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Happy Renters" },
  { icon: Award, value: "8+ Years", label: "Experience in Brisbane" },
  { icon: BadgeCheck, value: "100%", label: "Bond Back Rate" },
  { icon: Clock, value: "Same Day", label: "Bookings Available" },
];

export default function AboutSection() {
  return (
    <section
      className="py-20 bg-white"
      id="about"
      aria-label="About Tru End of Lease Cleaning New Farm"
    >
      <div className="container mx-auto px-4">
        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-primary/5 rounded-xl p-6 text-center border border-primary/10"
            >
              <stat.icon className="h-7 w-7 text-sky mx-auto mb-2" />
              <p className="text-3xl font-display font-bold text-navy">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Main E-E-A-T content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <figure>
              <img
                src="/assets/generated/about-team.dim_800x500.jpg"
                alt="Tru End of Lease Cleaning New Farm team — experienced, insured, and trusted Brisbane bond cleaners"
                className="rounded-2xl shadow-hero w-full object-cover"
                loading="lazy"
                width="800"
                height="500"
              />
              <figcaption className="text-xs text-muted-foreground mt-2 text-center">
                The Tru End of Lease Cleaning team — fully insured and police
                checked.
              </figcaption>
            </figure>
          </div>

          <div>
            <div className="inline-block bg-accent/10 text-sky text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Who We Are
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-5 leading-tight">
              New Farm&apos;s Most Experienced Bond Cleaners
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed text-sm">
              <p>
                <strong className="text-navy">
                  We have been cleaning rental properties in New Farm and
                  Brisbane since 2016.
                </strong>{" "}
                That is over eight years of hands-on experience helping tenants
                get their full bond back. We have cleaned hundreds of properties
                — from compact studio apartments on Brunswick Street to large
                Queenslander homes near New Farm Park.
              </p>
              <p>
                Our founder started as a professional cleaner working for real
                estate agencies in Brisbane. He knows exactly what property
                managers look for during a bond inspection because he used to be
                on the other side of the process. That insider knowledge is what
                makes our cleaning different. We know the spots agents check
                that most cleaners miss.
              </p>
              <p>
                <strong className="text-navy">
                  Every member of our team is trained, police checked, and fully
                  insured.
                </strong>{" "}
                We carry $10 million public liability insurance on every job.
                Your property — and your bond money — are safe with us.
              </p>
              <p>
                We are not a franchise or a call centre. We are a local New Farm
                team who answer the phone, respond to WhatsApp messages quickly,
                and show up on time. When you book with us, you deal directly
                with people who care about your result.
              </p>
              <p>
                Our process is simple: you tell us your move-out date, we give
                you a fixed price, and we clean to the REIA standard your agent
                expects. If anything is flagged during inspection, we come back
                and fix it for free. That is our guarantee — no fine print.
              </p>
            </div>
          </div>
        </div>

        {/* Extended E-E-A-T expertise content */}
        <div className="mt-16 bg-navy/5 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-navy mb-6 text-center">
            Why Our Experience Gets You Results
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-sm text-muted-foreground leading-relaxed">
            <div>
              <h4 className="font-display font-semibold text-navy text-base mb-3">
                We Know What Agents Look For
              </h4>
              <p>
                After eight years working in and around New Farm properties, we
                have seen every type of rental inspection — and we know exactly
                what passes and what fails. Real estate agents in this area
                inspect the oven glass, the shower silicon, the window tracks,
                the exhaust fan covers, and the backs of cupboard doors. Our
                team checks all of these as a matter of routine because we have
                seen tenants lose bond money over them. You only get one chance
                at a bond inspection. We make sure you pass it.
              </p>
            </div>
            <div>
              <h4 className="font-display font-semibold text-navy text-base mb-3">
                Professional Equipment Makes the Difference
              </h4>
              <p>
                We use commercial-grade cleaning equipment that simply cannot be
                hired or bought at the supermarket. Our industrial truck-mounted
                carpet steam cleaning machines operate at temperatures above
                90°C — hot enough to kill bacteria, dust mites, and sanitise
                fibres that a domestic machine cannot touch. Our pressure-fed
                window cleaning systems and commercial-grade oven degreasers
                deliver results that take hours to achieve by hand in a fraction
                of the time. Better equipment means a more thorough clean and a
                property that passes inspection.
              </p>
            </div>
            <div>
              <h4 className="font-display font-semibold text-navy text-base mb-3">
                Transparency You Can Trust
              </h4>
              <p>
                We give you a fixed, written price before we start. We tell you
                exactly what is included and what is not. We do not charge
                hidden fees for difficult properties, extra bathrooms, or
                running over time. When the job is done, we give you a detailed
                invoice that includes every area cleaned — the same document you
                can show your agent or the RTA if there is ever a dispute. We
                have never had a bond claim upheld against one of our clients.
                That record is something we protect on every single job.
              </p>
            </div>
          </div>
        </div>

        {/* Process steps */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-navy mb-8 text-center">
            How Our Bond Cleaning Process Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Get a Fixed Quote",
                desc: "Tell us your address, property size, and move-out date. We send you a fixed, all-inclusive price within 2 hours. No hourly rates. No surprises.",
              },
              {
                step: "2",
                title: "Confirm Your Booking",
                desc: "Choose your preferred date and time. We confirm by WhatsApp or phone. We send a reminder the day before so you are never left waiting.",
              },
              {
                step: "3",
                title: "We Clean Everything",
                desc: "Our trained team arrives on time with all equipment and products. We follow the REIA cleaning checklist from top to bottom of the property.",
              },
              {
                step: "4",
                title: "Bond Back Guaranteed",
                desc: "We give you a detailed invoice to show your agent. If anything is flagged, we come back within 24 hours and re-clean for free. No questions asked.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white border border-border rounded-xl p-6 shadow-card text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="font-display font-semibold text-navy text-base mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
