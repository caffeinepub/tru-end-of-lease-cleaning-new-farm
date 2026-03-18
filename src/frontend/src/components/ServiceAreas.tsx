import { MapPin } from "lucide-react";

const areas = [
  "New Farm",
  "Teneriffe",
  "Newstead",
  "Fortitude Valley",
  "Bowen Hills",
  "Kangaroo Point",
  "Spring Hill",
  "Brisbane CBD",
  "Windsor",
  "Ascot",
  "Bulimba",
  "Hawthorne",
  "Woolloongabba",
  "South Brisbane",
];

export default function ServiceAreas() {
  return (
    <section className="py-20 bg-navy" id="areas">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Bond Cleaning Across Brisbane
          </h2>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">
            We service New Farm and all surrounding suburbs. Can&apos;t see your
            suburb? Give us a call — we probably cover it.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {areas.map((area, i) => (
            <div
              key={area}
              data-ocid={`areas.item.${i + 1}`}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg px-4 py-3 text-white text-sm font-medium"
            >
              <MapPin className="h-4 w-4 text-sky-300 flex-shrink-0" />
              {area}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
