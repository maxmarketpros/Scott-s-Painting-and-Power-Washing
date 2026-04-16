import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center pt-20">
      <Container className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary-500">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold text-foreground md:text-5xl">
          Page Not Found
        </h1>
        <p className="mt-4 text-lg text-muted">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Button href="/" icon={<ArrowRight className="h-5 w-5" />}>
            Back to Home
          </Button>
          <Button href="/contact-us" variant="outline">
            Contact Us
          </Button>
        </div>
      </Container>
    </div>
  );
}
