import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { ServiceType } from "../backend.d";
import { useSubmitEnquiry } from "../hooks/useQueries";

const serviceOptions = [
  { label: "End of Lease Cleaning", value: ServiceType.residential },
  { label: "Carpet Cleaning", value: ServiceType.carpetCleaning },
  { label: "Oven & Kitchen Deep Clean", value: ServiceType.commercial },
  { label: "Window Cleaning", value: ServiceType.windowCleaning },
  { label: "Full Bond Clean (All Inclusive)", value: ServiceType.residential },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    serviceType: ServiceType.residential as ServiceType,
    moveDate: "",
    address: "",
    message: "",
  });

  const { mutate: submitEnquiry, isPending } = useSubmitEnquiry();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const fullMessage = `Service: ${form.service}\nMove-out Date: ${form.moveDate}\nAddress: ${form.address}\n\n${form.message}`;

    submitEnquiry(
      {
        name: form.name,
        phone: form.phone,
        email: form.email,
        serviceType: form.serviceType,
        message: fullMessage,
      },
      {
        onSuccess: () =>
          toast.success(
            "Enquiry sent! We will get back to you within 2 hours.",
          ),
        onError: () => {
          // Proceed with mailto regardless
        },
      },
    );

    const recipient = ["humptydumptybondcleaning", "gmail.com"].join("@");
    const subject = encodeURIComponent(
      `Bond Cleaning Enquiry - ${form.name} - ${form.address || "New Farm"}`,
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nService: ${form.service}\nMove-out Date: ${form.moveDate}\nAddress: ${form.address}\n\nMessage:\n${form.message}`,
    );
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  const set =
    (field: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
            Get Your Free Bond Cleaning Quote
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Fill in the form below and we will get back to you within 2 hours
            with a fixed price quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
            data-ocid="contact.form"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label
                  htmlFor="name"
                  className="text-sm font-medium mb-1.5 block"
                >
                  Full Name *
                </Label>
                <Input
                  id="name"
                  required
                  value={form.name}
                  onChange={set("name")}
                  placeholder="Sarah Johnson"
                  data-ocid="contact.name.input"
                />
              </div>
              <div>
                <Label
                  htmlFor="phone"
                  className="text-sm font-medium mb-1.5 block"
                >
                  Phone *
                </Label>
                <Input
                  id="phone"
                  required
                  type="tel"
                  value={form.phone}
                  onChange={set("phone")}
                  placeholder="04XX XXX XXX"
                  data-ocid="contact.phone.input"
                />
              </div>
            </div>

            <div>
              <Label
                htmlFor="email"
                className="text-sm font-medium mb-1.5 block"
              >
                Email Address *
              </Label>
              <Input
                id="email"
                required
                type="email"
                value={form.email}
                onChange={set("email")}
                placeholder="you@example.com"
                data-ocid="contact.email.input"
              />
            </div>

            <div>
              <Label className="text-sm font-medium mb-1.5 block">
                Service Type *
              </Label>
              <Select
                onValueChange={(v) => {
                  const opt = serviceOptions.find((o) => o.label === v);
                  setForm((prev) => ({
                    ...prev,
                    service: v,
                    serviceType: opt?.value ?? ServiceType.residential,
                  }));
                }}
              >
                <SelectTrigger data-ocid="contact.service.select">
                  <SelectValue placeholder="Select a service..." />
                </SelectTrigger>
                <SelectContent>
                  {serviceOptions.map((opt) => (
                    <SelectItem key={opt.label} value={opt.label}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label
                  htmlFor="moveDate"
                  className="text-sm font-medium mb-1.5 block"
                >
                  Move-out Date
                </Label>
                <Input
                  id="moveDate"
                  type="date"
                  value={form.moveDate}
                  onChange={set("moveDate")}
                  data-ocid="contact.date.input"
                />
              </div>
              <div>
                <Label
                  htmlFor="address"
                  className="text-sm font-medium mb-1.5 block"
                >
                  Property Address
                </Label>
                <Input
                  id="address"
                  value={form.address}
                  onChange={set("address")}
                  placeholder="123 Merthyr Rd, New Farm"
                  data-ocid="contact.address.input"
                />
              </div>
            </div>

            <div>
              <Label
                htmlFor="message"
                className="text-sm font-medium mb-1.5 block"
              >
                Message
              </Label>
              <Textarea
                id="message"
                rows={4}
                value={form.message}
                onChange={set("message")}
                placeholder="Tell us about your property: number of bedrooms, bathrooms, any specific concerns..."
                data-ocid="contact.message.textarea"
              />
            </div>

            <Button
              type="submit"
              disabled={isPending}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-base font-semibold"
              data-ocid="contact.submit.button"
            >
              {isPending ? "Sending..." : "Send My Enquiry"}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Clicking Send will open your email app. We respond within 2 hours
              during business hours.
            </p>
          </form>

          <div className="flex flex-col gap-6">
            <div className="bg-primary rounded-2xl p-8 text-white">
              <h3 className="font-display font-bold text-xl mb-4">
                Prefer to chat directly?
              </h3>
              <p className="text-white/80 mb-6 text-sm leading-relaxed">
                Send us a message on WhatsApp and we will give you a quote in
                minutes. Available 7 days a week, 7am to 7pm.
              </p>
              <Button
                asChild
                className="w-full bg-green-500 hover:bg-green-600 text-white py-6 text-base font-semibold"
                data-ocid="contact.whatsapp.button"
              >
                <a
                  href="https://wa.me/61488841883"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp: 0488 841 883
                </a>
              </Button>
            </div>

            <div className="border border-border rounded-xl p-6 space-y-4">
              <h3 className="font-semibold text-navy text-lg">
                Why book with us?
              </h3>
              {[
                "100% Bond Back Guarantee",
                "Fixed price, no hidden costs",
                "Same day service available",
                "Fully insured & police checked",
                "REIA checklist compliant",
                "Free re-clean if agent not satisfied",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4">
              <Clock className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800">
                <strong>Fast response:</strong> We respond to all enquiries
                within 2 hours during business hours (Mon to Sat, 7am to 7pm).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
