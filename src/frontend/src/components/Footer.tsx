export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <img
              src="/assets/generated/logo-tru-cleaning.dim_400x150.png"
              alt="Tru End of Lease Cleaning New Farm Logo"
              className="h-12 w-auto mb-4 brightness-200"
            />
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              New Farm&apos;s most trusted bond cleaning specialists. We
              guarantee your full bond back — or we re-clean for free.
            </p>
            <p className="text-white/50 text-xs mt-4">
              ABN: Available upon request
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/60 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "#home" },
                { label: "Services", href: "#services" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    data-ocid={`footer.${link.label.toLowerCase()}.link`}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/60 mb-4">
              Service Areas
            </h4>
            <ul className="space-y-1 text-sm text-white/70">
              {[
                "New Farm",
                "Teneriffe",
                "Newstead",
                "Fortitude Valley",
                "Bowen Hills",
                "Kangaroo Point",
                "Spring Hill",
                "Brisbane CBD",
              ].map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            &copy; {year} Tru End of Lease Cleaning New Farm. All rights
            reserved.
          </p>
          <p className="text-white/40 text-xs">
            Serving New Farm, Brisbane and surrounding suburbs.
          </p>
        </div>
      </div>
    </footer>
  );
}
