import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { businessConfig } from "@/config/business";
import { footerGroups } from "@/config/navigation";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white">
      <Container>
        <div className="grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.webp"
                alt={siteConfig.name}
                width={180}
                height={180}
                className="h-20 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              {siteConfig.description}
            </p>

            {/* Contact info under brand */}
            <ul className="mt-6 space-y-3">
              <li>
                <a
                  href={`tel:${businessConfig.phoneRaw}`}
                  className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 text-primary-400" />
                  {businessConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${businessConfig.email}`}
                  className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 text-primary-400" />
                  {businessConfig.email}
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-sm text-white/70">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />
                  {businessConfig.address.full}
                </span>
              </li>
              <li>
                <span className="flex items-start gap-2 text-sm text-white/70">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />
                  <span>{businessConfig.hours.display}</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Nav Groups */}
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <p className="text-center text-xs text-white/40">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
