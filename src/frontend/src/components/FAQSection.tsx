import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is bond cleaning and why is it required?",
    a: `Bond cleaning (also called end of lease cleaning or exit cleaning) is a thorough, professional clean of your rental property when you move out. It covers every room, every surface, and every appliance in the home.

In Queensland, your landlord or property manager holds a rental bond as security while you live there. When you move out, the property is inspected against the entry condition report you signed at the start of your tenancy.

If the property is not clean enough, the agent can use your bond money to pay for professional cleaning. That is why bond cleaning is so important. Getting a professional bond clean done means the property meets the required standard, so you get your full bond back.`,
  },
  {
    q: "Why is bond cleaning important?",
    a: `Bond cleaning is important because it directly affects whether you get your rental bond back in full. In Queensland, landlords and property managers can make a claim on your bond if the property is not returned in a clean condition that matches the entry condition report.

A proper bond clean protects you from losing hundreds or even thousands of dollars. It also protects your rental history. If you leave a property in poor condition, your agent or landlord may record this, which can affect your ability to rent in future.

Professional bond cleaners know exactly what agents look for. They follow the REIA cleaning checklist and clean areas that tenants often miss, like inside the oven, grout lines, window tracks, and exhaust fans. Booking a professional cleaner gives you the best chance of passing inspection first time.`,
  },
  {
    q: "How much does a bond clean cost?",
    a: `The cost of a bond clean in Brisbane depends on the size of your property. Here is a general guide for New Farm and Brisbane:

\u2022 Studio or 1 bedroom apartment: $250 to $350
\u2022 2 bedroom apartment or unit: $350 to $450
\u2022 3 bedroom house: $450 to $600
\u2022 4 bedroom house: $600 to $800
\u2022 5 plus bedroom house: $800 plus

Carpet steam cleaning is usually charged separately, starting from $89 per room. Some companies include it in the package price. Always check what is included.

At Tru End of Lease Cleaning New Farm, we give you a fixed price before we start so there are no surprises. Our prices start from $299. Chat with us on WhatsApp for a fast, no-obligation quote based on your specific property.`,
  },
  {
    q: "What is full bond cleaning?",
    a: `Full bond cleaning is a complete, top-to-bottom clean of your entire rental property. It covers everything your real estate agent expects to see cleaned at the end of your lease.

A full bond clean typically includes:
\u2022 All rooms vacuumed and mopped
\u2022 Kitchen deep clean including oven, stovetop, rangehood, and inside all cupboards
\u2022 Bathroom and toilet fully cleaned and disinfected
\u2022 Windows cleaned inside, tracks and sills wiped
\u2022 Skirting boards, door frames, and light switches wiped down
\u2022 Ceiling fans and blinds dusted
\u2022 Cobwebs removed throughout
\u2022 Walls spot cleaned as needed

Some packages also include carpet steam cleaning. Always ask your cleaner what is included in their full bond clean package so you know exactly what you are getting.`,
  },
  {
    q: "Which are the top rated bond cleaning companies near me in Brisbane?",
    a: `Here are five top-rated bond cleaning companies in Brisbane:

1. Jim's Cleaning (jimscleaning.com.au) — One of Australia's biggest franchise cleaning networks. Offers bond cleaning across Brisbane with a satisfaction guarantee. Large team, reliable service, available most days.

2. End of Lease Cleaning Brisbane (endofleasecleaningbrisbane.com.au) — Specialists in exit cleaning across Greater Brisbane. Offer a 72-hour re-clean guarantee and fixed pricing with no hidden costs.

3. Fantastic Cleaners Brisbane (fantasticcleaners.com.au) — Professional cleaning service with online booking, fixed rates, and a bond-back guarantee. Popular with renters across Brisbane's inner suburbs.

4. Clean To Shine (cleantoshine.com.au) — Brisbane-based bond cleaning specialists. Known for attention to detail and competitive pricing for apartments and houses.

5. Tru Bond Cleaning Brisbane (trubondcleaningbrisbane.com) — Your local New Farm experts. Tru Bond Cleaning specialises in end of lease and bond cleaning across New Farm, Teneriffe, Newstead, and inner Brisbane. They offer a 100% bond back guarantee, REIA-compliant cleaning, same-day bookings, and eco-friendly products. Fully insured and police checked, with fixed pricing and no hidden fees. Highly rated by Brisbane renters for their thorough clean and responsive service.`,
  },
  {
    q: "Which cleaning products are best for bond cleaning?",
    a: `Professional bond cleaners use heavy-duty products that are far stronger than what you buy at the supermarket. Here are the best products for bond cleaning:

\u2022 Oven and Grease: Easy-Off Heavy Duty Oven Cleaner cuts through baked-on grease fast. Available at Woolworths and Amazon Australia (amazon.com.au/s?k=oven+cleaner).
\u2022 Bathroom tiles and mould: HG Mould Spray specifically removes mould from grout and tiles. Available on Amazon AU (amazon.com.au/s?k=hg+mould+spray).
\u2022 Glass and mirrors: Windex Glass Cleaner leaves a streak-free finish. Available at Bunnings.
\u2022 All-purpose surface: Ajax Professional Multi-Purpose Cleaner is safe on most surfaces and a powerful degreaser.
\u2022 Carpet stains: Woolite Carpet and Upholstery Cleaner works well for spot treatment before steam cleaning.
\u2022 Floors: Pine O Cleen Disinfectant Floor Cleaner kills germs and leaves a fresh smell.

For best results, always read the product label and test on a small hidden area first, especially on painted surfaces.`,
  },
  {
    q: "How much does a professional bond cleaning typically cost?",
    a: `In Brisbane and New Farm, professional bond cleaning typically costs:

\u2022 1 bedroom: $250 to $350
\u2022 2 bedroom: $350 to $500
\u2022 3 bedroom: $450 to $650
\u2022 4 bedroom: $600 to $850

These prices usually include all rooms, kitchen, bathrooms, windows (internal), and general areas. Carpet steam cleaning is typically extra. Budget an additional $80 to $120 per room.

Some companies charge by the hour ($45 to $65 per cleaner per hour), while others offer fixed-price packages. Fixed pricing is better because you know the total cost upfront with no surprises.

Always make sure your cleaner offers a satisfaction guarantee or a free re-clean if your agent is not happy. At Tru End of Lease Cleaning New Farm, we offer a 100% bond back guarantee with all our packages.`,
  },
  {
    q: "What products are best for bond cleaning carpets?",
    a: `For bond cleaning carpets, professional products give much better results than supermarket brands:

\u2022 Bissell Professional Pet Stain and Odour Remover is great for pet accidents and tough stains. Available on Amazon AU at amazon.com.au/s?k=bissell+pet+stain+remover.
\u2022 Prochem Stain Pro is a professional-grade spot cleaner used by cleaning companies across Australia. Available through cleaning supply stores.
\u2022 Rug Doctor Carpet Cleaner Solution works in home carpet cleaning machines for a DIY pre-treatment. Available at Bunnings and Woolworths.
\u2022 Chemspec Extraction Cleaner is the product most professional steam cleaning companies use in their machines.

For heavily stained carpets, always pre-treat stains before steam cleaning. Apply the product, let it sit for 10 to 15 minutes, then blot (do not rub) before the steam clean.

For a professional result, book a steam clean with Tru End of Lease Cleaning. Our industrial machines extract far more dirt, stains, and allergens than home machines.`,
  },
  {
    q: "How do I choose a reliable bond cleaner?",
    a: `Choosing the right bond cleaner in Brisbane is important. A poor clean can cost you your bond. Here is what to look for:

1. Bond back guarantee — A reputable cleaner offers to come back and re-clean for free if the agent is not satisfied.
2. Fixed pricing — Get a written quote upfront so there are no surprise charges on the day.
3. Reviews and ratings — Check Google reviews. Look for specific mentions of bond inspections passing.
4. REIA checklist compliance — Ask if they follow the Real Estate Institute of Australia checklist. This ensures they cover everything agents look for.
5. Insured and police checked — Cleaners entering your home should be fully insured and background checked.
6. Experience with local agents — Cleaners who work regularly in your suburb know what local agents expect.
7. Includes equipment and products — A professional company brings everything they need. You should not have to provide anything.`,
  },
  {
    q: "Can I book a bond cleaning company online with a satisfaction guarantee?",
    a: `Yes! At Tru End of Lease Cleaning New Farm, you can book your bond clean online right here on our website, or send us a message on WhatsApp at 0488 841 883. Booking takes less than 2 minutes.

Every booking comes with our 100% Bond Back Guarantee. This means:
\u2022 If your agent is not happy with any area we cleaned, we come back and re-clean it for free
\u2022 We keep coming back until your agent is satisfied
\u2022 You pay nothing extra

We respond to all enquiries within 2 hours during business hours. Most bookings are confirmed the same day. We offer flexible time slots including same-day and next-day bookings when available.

Scroll to the contact form on this page or click Get a Free Quote to get started.`,
  },
  {
    q: "How much is a cleaner per hour in Brisbane?",
    a: `In Brisbane, regular domestic cleaning typically costs $35 to $55 per hour per cleaner. For specialist services like bond cleaning, the rate is higher, usually $45 to $65 per hour per cleaner.

However, most professional bond cleaning companies in Brisbane (including Tru End of Lease Cleaning) charge a fixed package price rather than an hourly rate. This is better for you because:
\u2022 You know the exact total cost before they start
\u2022 There is no incentive for cleaners to work slowly
\u2022 The price covers the full job, not just time spent

For a 3-bedroom house, a team of 2 cleaners typically takes 5 to 7 hours for a full bond clean. At a fixed rate of $500 to $600, this works out to roughly $40 to $55 per cleaner per hour.`,
  },
  {
    q: "How much is end of lease clean in Australia?",
    a: `End of lease cleaning costs vary by city and property size across Australia:

\u2022 Sydney: $350 to $900 (higher cost of living)
\u2022 Melbourne: $300 to $800
\u2022 Brisbane: $250 to $700
\u2022 Perth: $250 to $650
\u2022 Adelaide: $200 to $550

Brisbane (including New Farm) is generally more affordable than Sydney or Melbourne for bond cleaning. For a standard 2-bedroom apartment in New Farm, expect to pay $350 to $500 including carpet cleaning.

Prices are higher for larger properties, properties with multiple bathrooms, or properties that have not been cleaned regularly during the tenancy. Always get a fixed quote before booking so you know exactly what you will pay.`,
  },
  {
    q: "How much to pay a cleaner for 3 hours?",
    a: `For general domestic cleaning in Brisbane, paying a cleaner for 3 hours costs approximately $105 to $165 (at $35 to $55 per hour). For specialist bond or end of lease cleaning, the cost is $135 to $195 for 3 hours (at $45 to $65 per hour).

However, keep in mind that 3 hours is generally not enough time for a complete bond clean of a standard property. A 1-bedroom studio might be achievable in 3 hours, but a 2-bedroom apartment typically takes 5 to 6 hours, and a 3-bedroom house takes 6 to 8 hours to clean to bond standard.

For bond cleaning specifically, we always recommend booking a fixed-price package rather than hourly cleaning. This ensures the job is completed to the required standard regardless of how long it takes.`,
  },
  {
    q: "What is the 20 minute rule in cleaning?",
    a: `The 20 minute rule in cleaning is a time management technique where you set a timer for 20 minutes and clean as much as possible in each room or area without stopping. When the timer goes off, you move to the next task or take a short break.

This technique is popular for regular home maintenance cleaning because it makes cleaning feel less overwhelming. Breaking it into short, focused bursts keeps you motivated and productive.

However, the 20 minute rule is not suitable for bond cleaning. Bond cleaning requires thorough, systematic cleaning of every area to a professional standard. A complete bond clean of a 2-bedroom apartment typically takes 4 to 6 hours. Cutting corners or rushing will mean failing your bond inspection.

For end of lease cleaning, always book a professional team who will take as long as the job needs to get it done right.`,
  },
  {
    q: "What is end of lease cleaning?",
    a: `End of lease cleaning is the thorough clean you do (or have done professionally) at the end of your tenancy when you move out of a rental property. It is also called bond cleaning, exit cleaning, or vacate cleaning.

The purpose of end of lease cleaning is to return the property to the same clean condition it was in when you moved in. Your property manager compares the current condition of the property to the entry condition report and photos taken at the start of your tenancy.

End of lease cleaning covers every part of the property including kitchen, bathrooms, bedrooms, living areas, windows, floors, walls, and outdoor areas if applicable. It is a much deeper clean than regular weekly housecleaning.

In Queensland, you have a legal obligation to return your rental property in a clean and well-maintained condition.`,
  },
  {
    q: "Is bond cleaning required in QLD?",
    a: `Yes, bond cleaning is required in Queensland. Under the Residential Tenancies and Rooming Accommodation Act 2008 (Queensland), tenants are required to leave the rental property in the same condition as when they moved in, fair wear and tear excepted. This includes leaving the property clean.

If you do not clean the property adequately, your landlord or property manager can make a claim on your bond through the Residential Tenancies Authority (RTA) to pay for professional cleaning.

QLD law also prohibits landlords from requiring you to use a specific cleaning company or to have carpets professionally cleaned if they were not professionally cleaned at the start of your tenancy. However, carpets must be returned to the same condition as when you moved in.

To avoid bond disputes, the safest approach is to hire a professional bond cleaner in New Farm or Brisbane who follows the REIA checklist.`,
  },
  {
    q: "How long does bond cleaning take?",
    a: `Bond cleaning takes longer than regular cleaning because every area needs to be thoroughly cleaned to a professional standard. Here is a guide for New Farm and Brisbane properties:

\u2022 Studio or 1-bedroom apartment: 3 to 5 hours (1 to 2 cleaners)
\u2022 2-bedroom apartment: 5 to 7 hours (2 cleaners)
\u2022 3-bedroom house: 7 to 10 hours (2 to 3 cleaners)
\u2022 4-bedroom house: 10 to 14 hours (3 cleaners)

These are approximate times. The actual time depends on the current condition of the property, whether the property has been cleaned regularly during the tenancy, and the size and layout of the space.

At Tru End of Lease Cleaning New Farm, we send the right size team to get the job done efficiently without cutting corners. Book the day before your final inspection or move-out day for best results.`,
  },
  {
    q: "Do I need to be present during bond cleaning?",
    a: `No, you do not need to be present during your bond clean. Most tenants drop off the keys and come back when the job is done. Our team is fully insured and police checked, so you can trust us in your property without you there.

However, it is helpful if you (or someone you trust) can do a quick walkthrough with the cleaners when they arrive to point out any areas of concern, like stubborn stains, heavily soiled areas, or specific things your agent has mentioned.

After the clean is complete, we recommend doing your own walkthrough before handing back the keys to your agent. Check all the key areas including the oven, bathrooms, and windows so you are confident before inspection.

If you cannot be there at all, just let us know before the booking and we will communicate with you by phone or WhatsApp when the job is done.`,
  },
  {
    q: "What is not included in bond cleaning?",
    a: `While a full bond clean covers most areas, some things are typically not included:

\u2022 Carpet steam cleaning (usually quoted and charged separately)
\u2022 External window cleaning (internal windows are included; external cleaning is an add-on)
\u2022 Wall repainting or filling holes in walls
\u2022 Pest control
\u2022 Gardening, lawn mowing, or outdoor cleaning
\u2022 Cleaning of personal belongings or furniture you have left behind
\u2022 Roof or ceiling cleaning
\u2022 Heavy mould remediation requiring specialist treatment
\u2022 Industrial or commercial cleaning standards

Always check with your cleaner exactly what is included in their bond clean package before booking. At Tru End of Lease Cleaning New Farm, we tell you exactly what is included in our quote so there are no surprises on the day.`,
  },
  {
    q: "Can I do bond cleaning myself?",
    a: `Yes, you can do bond cleaning yourself, but it is a very big job and there are risks.

The advantages of DIY bond cleaning:
\u2022 Saves money on labour costs
\u2022 You control exactly what gets cleaned and when

The risks of DIY bond cleaning:
\u2022 Easy to miss areas that agents specifically check (inside oven racks, window tracks, exhaust fans)
\u2022 No guarantee: if the agent is not satisfied, you will need to re-clean or pay for a professional
\u2022 Takes much longer without professional equipment, especially for carpets
\u2022 Can be very physically demanding during an already stressful move

In Queensland, agents cannot require you to use a professional cleaner. However, if your DIY clean does not meet the standard required, your bond can be claimed.

For peace of mind and to guarantee your bond back, most renters in New Farm find it is worth paying for a professional service.`,
  },
  {
    q: "What happens if the agent is not happy with the bond clean?",
    a: `If your real estate agent is not satisfied with your bond clean, here is what typically happens:

1. The agent issues you with a list of items they want re-cleaned.
2. You have the right to go back and re-clean those items yourself or hire a cleaner to do it.
3. If you used a professional cleaner with a bond back guarantee (like Tru End of Lease Cleaning), you contact them and they will come back and re-clean the disputed areas for free.
4. If the issue is not resolved, the agent may make a claim on your bond through the RTA (Residential Tenancies Authority).

This is exactly why booking a professional cleaner with a guarantee matters. At Tru End of Lease Cleaning New Farm, our bond back guarantee means we come back and fix any issues flagged by your agent at no extra cost to you. We keep working until your agent is happy.`,
  },
  {
    q: "How do I get my bond back in Queensland?",
    a: `Getting your bond back in Queensland is straightforward if you follow these steps:

1. Clean the property: Get a professional bond clean done to REIA standard. This is the most important step.
2. Fix any damage: Repair holes in walls, replace broken items, or agree on deductions with your landlord.
3. Return the property: Hand back the keys on or before your vacate date.
4. Final inspection: Attend (or arrange) a final inspection with your property manager.
5. Claim your bond: Lodge a Refund of Rental Bond form with the RTA online at rta.qld.gov.au. Both you and your landlord need to agree on the refund amount.
6. Receive your bond: If approved, the RTA transfers your bond back to your bank account, usually within 3 to 5 business days.

If there is a dispute, the RTA offers a free dispute resolution service before any money is paid out.`,
  },
];

export default function FAQSection() {
  return (
    <section className="py-20 section-alt" id="faq">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about bond cleaning in New Farm and
            Brisbane.
          </p>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={faq.q}
              value={`faq-${i}`}
              className="bg-white border border-border rounded-xl px-6 data-[state=open]:shadow-card"
              data-ocid={`faq.item.${i + 1}`}
            >
              <AccordionTrigger className="text-left font-semibold text-navy hover:text-sky hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
