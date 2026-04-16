import Script from "next/script";
import { FileText } from "lucide-react";
import { businessConfig } from "@/config/business";
import { cn } from "@/lib/utils";

interface FormEmbedProps {
  className?: string;
  height?: string;
}

// Reusable form embed component.
// Renders the client's iframe form if configured in business.ts,
// otherwise shows a styled placeholder indicating where the form will go.
//
// The iframe is `loading="lazy"` so its third-party payload (Facebook Pixel,
// reCAPTCHA, libphonenumber) is deferred until the user scrolls near the form.
// The form_embed.js script is only injected on pages that actually render this
// component, instead of on every page.

export function FormEmbed({ className, height }: FormEmbedProps) {
  const embedUrl = businessConfig.formEmbedUrl;
  const embedHeight = height || businessConfig.formEmbedHeight;

  if (embedUrl) {
    return (
      <>
        <iframe
          src={embedUrl}
          title="Request a quote"
          loading="lazy"
          className={cn("w-full border-0 rounded-xl", className)}
          style={{ height: embedHeight }}
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-activation-type="alwaysActivated"
          data-deactivation-type="neverDeactivate"
          data-form-name="WebSite Form Template"
        />
        <Script
          id="ghl-form-embed"
          src="https://link.msgsndr.com/js/form_embed.js"
          strategy="lazyOnload"
        />
      </>
    );
  }

  // Placeholder when no form embed URL is configured
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed border-border bg-surface",
        className
      )}
      style={{ height: embedHeight }}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-50">
        <FileText className="h-8 w-8 text-primary-400" />
      </div>
      <div className="text-center">
        <p className="text-sm font-semibold text-foreground">
          Form Embed Placeholder
        </p>
        <p className="mt-1 max-w-xs text-xs text-muted">
          Set <code className="rounded bg-surface-dark px-1 py-0.5 text-xs">formEmbedUrl</code> in{" "}
          <code className="rounded bg-surface-dark px-1 py-0.5 text-xs">business.ts</code> to
          display your booking or quote form here.
        </p>
      </div>
    </div>
  );
}
