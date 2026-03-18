import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Droplets,
  Eye,
  Paintbrush,
  Sparkles,
  Wind,
} from "lucide-react";

type ServiceItem = {
  id: string;
  icon: React.ElementType;
  title: string;
  image: string;
  imageAlt: string;
  price: string;
  description: string;
  points: string[];
};

const services: ServiceItem[] = [
  {
    id: "end-of-lease",
    icon: Sparkles,
    title: "End of Lease Cleaning New Farm",
    image: "/assets/generated/service-end-of-lease.dim_600x400.jpg",
    imageAlt:
      "Professional end of lease cleaning New Farm Brisbane — Tru End of Lease Cleaning",
    price: "from $299",
    description: `End of lease cleaning is a thorough, top-to-bottom clean of your entire rental property when you move out. It covers every room, every surface, and every corner — from the kitchen to the bathrooms, bedrooms, and living areas.

When you move out of a rental in Queensland, your landlord or real estate agent checks the property against an entry condition report. If the property isn't clean enough, they can take money from your bond to pay for cleaning. That's why a professional bond clean is so important.

Our end of lease cleaning in New Farm covers everything your agent expects to see:

• Kitchen: benchtops, cupboards inside and out, rangehood, stovetop, oven interior, sink, and splashback
• Bathrooms: tiles, grout, shower screen, bath, toilet, vanity, mirrors, and exhaust fan
• Bedrooms: vacuuming, mopping, built-in wardrobes inside and out, skirting boards, light switches
• Living areas: dusting, vacuuming, mopping, ceiling fans, blinds, and curtains
• Windows: cleaned inside, tracks and sills wiped down
• Door frames and light switches: wiped clean throughout
• Skirting boards: dusted and wiped all the way around

We follow the Real Estate Institute of Australia (REIA) cleaning checklist. This is the same list your agent uses to inspect the property. We cover everything they look for — so you get your full bond back.

Our New Farm team knows local properties well. Whether you live in a modern apartment on Merthyr Road, a classic Queenslander, or a townhouse near the New Farm Park, we clean it properly.

Pricing starts from $299 for a studio apartment. We give you a fixed price before we start — no surprises. Book online today or chat with us on WhatsApp for a fast quote.`,
    points: [
      "Kitchen deep clean",
      "Bathrooms & toilets",
      "All bedrooms",
      "Windows inside",
      "Skirting boards",
      "Door frames & switches",
    ],
  },
  {
    id: "carpet",
    icon: Wind,
    title: "Carpet Steam Cleaning New Farm",
    image: "/assets/generated/service-carpet.dim_600x400.jpg",
    imageAlt:
      "Professional carpet steam cleaning New Farm Brisbane — Tru End of Lease Cleaning",
    price: "from $89/room",
    description: `Most lease agreements in Queensland require carpets to be professionally steam cleaned at the end of your tenancy. Our carpet steam cleaning service in New Farm uses industrial-grade hot water extraction equipment to give your carpets a deep, thorough clean.

Steam cleaning is very different to a regular vacuum. Our machines push hot water deep into carpet fibres, loosen dirt, stains, and odours, and then extract everything out. The result is carpets that look and smell like new.

Here is what our carpet steam cleaning covers:

• Removes tough stains like red wine, coffee, pet accidents, and mud
• Eliminates allergens including dust mites, pet dander, and pollen
• Gets rid of unpleasant odours permanently
• Leaves carpets dry within 2 to 4 hours
• Covers all carpet types including wool, synthetic, and Berber

Our carpet cleaning is REIA approved, which means it meets the standard required by real estate agents in Queensland. Many agents specifically ask for a receipt to prove professional carpet cleaning was done — we provide a detailed invoice you can show your agent.

We use professional Prochem and Chemspec cleaning solutions that are tough on stains but safe for kids and pets. For heavily stained carpets, we apply a pre-treatment spray before steam cleaning to break down stubborn marks.

Pricing starts from $89 per room. We also offer discounts when you bundle carpet cleaning with our end of lease cleaning package. Most 3-bedroom homes cost between $180 and $280 for carpet cleaning.

Book online today or send us a message on WhatsApp with your address and number of rooms for a quick quote.`,
    points: [
      "Industrial steam extraction",
      "Stain & odour removal",
      "Allergen reduction",
      "REIA approved",
      "Receipt provided",
      "Pet-safe products",
    ],
  },
  {
    id: "kitchen",
    icon: Sparkles,
    title: "Oven & Kitchen Deep Cleaning",
    image: "/assets/generated/service-kitchen.dim_600x400.jpg",
    imageAlt:
      "Deep oven and kitchen cleaning New Farm Brisbane — Tru End of Lease Cleaning",
    price: "from $149",
    description: `The kitchen is the number one reason tenants lose their bond. Real estate agents inspect the kitchen closely — especially the oven, rangehood, and stovetop. Grease buildup, food residue, and grime are the most common issues flagged at inspection.

Our oven and kitchen deep cleaning service in New Farm tackles all of it. We use professional-grade degreasers and scrubbing tools to remove even the most stubborn baked-on grease.

Here is exactly what we clean in the kitchen:

• Oven: interior walls, racks, grill, and glass door — all stripped of grease and baked-on food
• Rangehood: filters removed and cleaned, hood exterior degreased
• Stovetop: burners, grates, and drip trays cleaned thoroughly
• Benchtops: wiped down and sanitised, including tile grout and splashbacks
• Cupboards and drawers: cleaned inside and out, including hinges and handles
• Sink and tap: descaled, polished, and sanitised
• Dishwasher: interior drum, door seals, and filter cleaned
• Fridge (if required): interior shelves and drawers cleaned, exterior wiped

We bring our own professional cleaning products to every job. Our degreasers cut through carbon buildup in ovens that regular oven cleaner cannot touch.

Real estate agents in Brisbane and New Farm know what a properly cleaned kitchen looks like. A dirty oven or greasy rangehood will fail inspection every single time. We make sure yours passes.

Kitchen deep cleaning starts from $149 as a standalone service. When you add it to our full bond clean package, we give you the best price. Chat with us on WhatsApp or book online to get your free quote today.`,
    points: [
      "Oven degreasing",
      "Rangehood filters",
      "Stovetop & grates",
      "Cupboards inside & out",
      "Sink & tap descale",
      "Dishwasher clean",
    ],
  },
  {
    id: "bathroom",
    icon: Droplets,
    title: "Bathroom & Toilet Cleaning",
    image: "/assets/generated/service-bathroom.dim_600x400.jpg",
    imageAlt:
      "Spotless bathroom bond cleaning New Farm Brisbane — Tru End of Lease Cleaning",
    price: "from $99",
    description: `Bathrooms are the second most inspected area when a real estate agent does a bond inspection. Soap scum on tiles, mould in grout, limescale on taps, and dirty toilet bowls are the most common reasons tenants fail their inspection.

Our bathroom and toilet cleaning service in New Farm makes your bathrooms shine. We clean and disinfect every surface from ceiling to floor, leaving your bathroom in better condition than when you moved in.

Here is what we clean in each bathroom:

• Shower: tiles scrubbed, grout cleaned, shower screen descaled and polished until streak-free
• Bath: cleaned and sanitised inside and out, taps and spout polished
• Toilet: bowl, seat, lid, cistern, base, and behind the toilet — all scrubbed and disinfected
• Vanity: sink cleaned, taps polished, vanity top and cabinet exterior wiped
• Mirrors: cleaned streak-free with a professional glass cleaner
• Tiles and grout: scrubbed and treated for mould and soap scum
• Exhaust fan: cover removed and cleaned, fan blades dusted
• Floor: mopped and sanitised

We use commercial-grade limescale removers, tile cleaners, and disinfectants that are far more effective than supermarket products. Our team pays close attention to grout lines, silicon seals, and shower tracks.

Bathroom cleaning starts from $99 per bathroom as a standalone service, or is included as part of our full bond clean package. Get your free quote today by booking online or messaging us on WhatsApp.`,
    points: [
      "Tiles & grout scrub",
      "Shower screen descale",
      "Toilet disinfected",
      "Mirrors streak-free",
      "Exhaust fan cleaned",
      "Mould treatment",
    ],
  },
  {
    id: "windows",
    icon: Eye,
    title: "Window Cleaning New Farm",
    image: "/assets/generated/service-windows.dim_600x400.jpg",
    imageAlt:
      "Crystal clear window cleaning service New Farm Brisbane — Tru End of Lease Cleaning",
    price: "from $79",
    description: `Clean windows make a huge difference to how a property looks during a bond inspection. Dirty glass, smudged fingerprints, and grimy window tracks are noticed immediately by real estate agents. Our window cleaning service in New Farm leaves every pane crystal clear.

We clean all internal windows as part of our bond cleaning service, which is what most lease agreements require. We also offer external window cleaning as an optional add-on.

Here is what our window cleaning covers:

• Glass panels: cleaned with professional window cleaning solution and squeegeed to a streak-free finish
• Window tracks: vacuumed, then wiped out with a damp cloth — removing all dirt, dead insects, and dust
• Window sills: wiped clean, including any mould or dust
• Fly screens: removed, cleaned, and replaced
• Sliding glass doors: tracks vacuumed and cleaned, glass panels cleaned inside and out
• French doors: individual glass panels cleaned on both sides

Our cleaners use professional-grade window cleaning tools including long-handle squeegees, microfibre cloths, and streak-free window cleaning solution.

Dirty window tracks are one of the most commonly missed areas in a bond clean. Our team specifically checks every track and sill because we know it is something agents look for.

Window cleaning is included in our full bond clean package at no extra cost for internal windows. Standalone window cleaning starts from $79. Book online or chat on WhatsApp today.`,
    points: [
      "Internal glass cleaned",
      "Window tracks vacuumed",
      "Sills wiped",
      "Fly screens cleaned",
      "Sliding door tracks",
      "Streak-free finish",
    ],
  },
  {
    id: "walls",
    icon: Paintbrush,
    title: "Wall Spot Cleaning",
    image: "/assets/generated/service-walls.dim_600x400.jpg",
    imageAlt:
      "Wall spot cleaning and scuff mark removal New Farm Brisbane — Tru End of Lease Cleaning",
    price: "from $69",
    description: `Walls take a lot of punishment during a tenancy. Scuff marks from furniture, fingerprints near light switches, crayon from young kids, and general grime can build up over time. At bond inspection, agents walk through every room and check the walls carefully.

Our wall spot cleaning service in New Farm removes the marks and blemishes that can cause you to lose your bond. We target the specific areas that agents check and bring them back to a clean, fresh appearance.

Here is what our wall spot cleaning covers:

• Scuff marks from furniture, shoes, and everyday use — carefully wiped away
• Fingerprints and handprints near door frames, light switches, and high-traffic areas
• Crayon and texta marks from children — treated with specialist removers
• Light grease or food splatter in kitchen and dining areas
• Dust and cobwebs along the top edge of walls and in corners
• Marks around door handles and architraves
• Light marks on feature walls and painted surfaces

We use specialist wall cleaning solutions and magic erasers that remove marks without damaging the paint. Different types of paint require different cleaning techniques. Our team knows which product to use for semi-gloss, flat, and enamel paint finishes to avoid leaving shiny patches or removing colour.

Wall spot cleaning starts from $69 as a standalone service and is included in our full bond clean packages for properties that need it. Get your free quote by booking online or messaging us on WhatsApp.`,
    points: [
      "Scuff mark removal",
      "Fingerprints & handprints",
      "Crayon & texta marks",
      "Door frames & architraves",
      "Light switches",
      "Cobwebs & dust",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 section-alt" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
            Our Bond Cleaning Services in New Farm
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to get your bond back — all under one roof.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {services.map((service, i) => (
            <div
              key={service.id}
              id={service.id}
              data-ocid={`service.item.${i + 1}`}
              className={`bg-white rounded-2xl shadow-card overflow-hidden flex flex-col ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="md:w-2/5 flex-shrink-0">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="w-full h-64 md:h-full object-cover"
                  loading="lazy"
                  width="600"
                  height="400"
                />
              </div>

              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-accent/10 text-sky text-sm font-semibold px-3 py-1 rounded-full">
                    {service.price}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-navy mb-4">
                  {service.title}
                </h2>
                <div className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line mb-6">
                  {service.description}
                </div>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {service.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                      {point}
                    </div>
                  ))}
                </div>
                <Button
                  asChild
                  className="w-fit bg-primary text-primary-foreground hover:bg-primary/90"
                  data-ocid={`service.quote.button.${i + 1}`}
                >
                  <a href="#contact">Get a Free Quote</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
