import { MapPin, Clock, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { businessConfig } from "@/config/business";

export function InfoBar() {
  return (
    <div className="bg-primary-600 text-white">
      <Container>
        <div className="flex flex-col items-center justify-between gap-3 py-3.5 text-sm md:flex-row md:gap-6">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary-200" />
            <span>{businessConfig.address.full}</span>
          </div>
          <div className="hidden h-4 w-px bg-white/20 md:block" />
          <div className="hidden items-center gap-2 md:flex">
            <Clock className="h-4 w-4 text-primary-200" />
            <span>{businessConfig.hours.display}</span>
          </div>
          <div className="hidden h-4 w-px bg-white/20 md:block" />
          <a
            href={`tel:${businessConfig.phoneRaw}`}
            className="flex items-center gap-2 transition-colors hover:text-primary-100"
          >
            <Phone className="h-4 w-4 text-primary-200" />
            <span>Call {businessConfig.phone}</span>
          </a>
        </div>
      </Container>
    </div>
  );
}
