import type { ImageSlotConfig } from "@/types";

// ===== IMAGE MANIFEST =====
// Every image on the site has a named slot.
// focalPoint: { x: 0-1, y: 0-1 } controls object-position (default: center/center)
//
// Photo categories:
//   stock-*.jpg          — landscape 1920x1080 stock photos
//   *-collage*.jpg       — portrait 1920x3413 collages (avoid in hero/card slots)
//   other client photos  — portrait 1920x2560

export const imageManifest: Record<string, ImageSlotConfig> = {
  // ===== HOMEPAGE =====
  "hero-home": {
    src: "/images/stock-13.jpg",
    alt: "Modern home exterior at dusk — Scott's Painting and Power Washing",
    width: 1920,
    height: 1080,
    focalPoint: { x: 0.5, y: 0.4 },
  },
  "about-preview": {
    src: "/images/house-painting-twostory.jpg",
    alt: "Two-story home exterior painting in Central Ohio",
    width: 1920,
    height: 2560,
    focalPoint: { x: 0.5, y: 0.5 },
  },
  "standards-feature": {
    src: "/images/power-washing-action.jpg",
    alt: "Scott's Painting crew member power washing in branded shirt",
    width: 800,
    height: 1067,
    focalPoint: { x: 0.5, y: 0.4 },
  },

  // ===== SERVICE CARDS =====
  "service-1": {
    src: "/images/interior-painting-room-tealrug.jpg",
    alt: "Freshly painted interior room in Fairfield County home",
    width: 800,
    height: 1067,
  },
  "service-2": {
    src: "/images/exterior-painting-blue-porch.jpg",
    alt: "Exterior painting with blue accent on porch in Central Ohio",
    width: 800,
    height: 1067,
  },
  "service-3": {
    src: "/images/stock-3.jpg",
    alt: "Professional cabinet painting with green finish",
    width: 800,
    height: 600,
  },
  "service-4": {
    src: "/images/power-washing-action.jpg",
    alt: "Scott's Painting crew power washing vinyl siding",
    width: 800,
    height: 1067,
  },
  "service-5": {
    src: "/images/stock-5.jpg",
    alt: "Professional drywall repair and finishing",
    width: 800,
    height: 600,
  },
  "service-6": {
    src: "/images/stock-6.jpg",
    alt: "Durable epoxy floor coating in residential garage",
    width: 800,
    height: 600,
  },
  "service-7": {
    src: "/images/stock-7.jpg",
    alt: "Aluminum siding painting and restoration",
    width: 800,
    height: 600,
  },
  "service-8": {
    src: "/images/exterior-painting-brick-historic.jpg",
    alt: "Masonry painting on historic brick home in Central Ohio",
    width: 800,
    height: 1067,
  },
  "service-9": {
    src: "/images/wood-staining-garage.jpg",
    alt: "Wood staining on garage exterior in Fairfield County",
    width: 800,
    height: 1067,
  },
  "service-10": {
    src: "/images/stock-10.jpg",
    alt: "Vinyl siding painting on residential home",
    width: 800,
    height: 600,
  },
  "service-11": {
    src: "/images/stock-11.jpg",
    alt: "Stained deck with outdoor furniture",
    width: 800,
    height: 600,
  },
  "service-12": {
    src: "/images/fence-painting-gray.jpg",
    alt: "Painted fence and building exterior in Ohio",
    width: 800,
    height: 1067,
  },
  "service-13": {
    src: "/images/house-painting-twostory.jpg",
    alt: "Complete house painting on two-story home",
    width: 800,
    height: 1067,
  },

  // ===== SERVICE HERO IMAGES =====
  "service-1-hero": {
    src: "/images/stock-1.jpg",
    alt: "Interior painting services in Fairfield County, OH",
    width: 1920,
    height: 600,
    focalPoint: { x: 0.5, y: 0.4 },
  },
  "service-2-hero": {
    src: "/images/stock-2.jpg",
    alt: "Exterior painting services in Central Ohio",
    width: 1920,
    height: 600,
    focalPoint: { x: 0.5, y: 0.4 },
  },
  "service-3-hero": {
    src: "/images/interior-painting-vaultedceiling.jpg",
    alt: "Bright interior ready for new cabinet painting in Fairfield County",
    width: 1920,
    height: 600,
    focalPoint: { x: 0.5, y: 0.4 },
  },
  "service-4-hero": {
    src: "/images/stock-4.jpg",
    alt: "Power washing services in Central Ohio",
    width: 1920,
    height: 600,
    focalPoint: { x: 0.5, y: 0.4 },
  },
  "service-5-hero": {
    src: "/images/drywall-repair-collage.jpg",
    alt: "Drywall repair projects across Fairfield County, OH",
    width: 1920,
    height: 600,
    focalPoint: { x: 0.5, y: 0.4 },
  },
  "service-6-hero": {
    src: "/images/exterior-painting-black-garage.jpg",
    alt: "Garage exterior in Central Ohio — ready for floor epoxy install",
    width: 1920,
    height: 600,
    focalPoint: { x: 0.5, y: 0.4 },
  },
  "service-7-hero": {
    src: "/images/gallery-exterior-12.jpg",
    alt: "Home with aluminum trim painting in Central Ohio",
    width: 1920,
    height: 600,
    focalPoint: { x: 0.5, y: 0.4 },
  },
  "service-8-hero": {
    src: "/images/stock-8.jpg",
    alt: "Masonry painting services in Central Ohio",
    width: 1920,
    height: 600,
    focalPoint: { x: 0.5, y: 0.4 },
  },
  "service-9-hero": {
    src: "/images/stock-9.jpg",
    alt: "Wood staining services in Fairfield County",
    width: 1920,
    height: 600,
    focalPoint: { x: 0.5, y: 0.4 },
  },
  "service-10-hero": {
    src: "/images/house-painting-brick-landscaped.jpg",
    alt: "Vinyl-sided home with landscaping in Central Ohio",
    width: 1920,
    height: 600,
    focalPoint: { x: 0.5, y: 0.4 },
  },
  "service-11-hero": {
    src: "/images/gallery-exterior-5.jpg",
    alt: "Outdoor deck project in Central Ohio ready for staining",
    width: 1920,
    height: 600,
    focalPoint: { x: 0.5, y: 0.4 },
  },
  "service-12-hero": {
    src: "/images/stock-12.jpg",
    alt: "Fence painting services in Central Ohio",
    width: 1920,
    height: 600,
    focalPoint: { x: 0.5, y: 0.4 },
  },
  "service-13-hero": {
    src: "/images/stock-13.jpg",
    alt: "House painting services in Fairfield County",
    width: 1920,
    height: 600,
    focalPoint: { x: 0.5, y: 0.4 },
  },

  // ===== SERVICE DETAIL IMAGES =====
  // Service 1: Interior Painting
  "service-1-detail-1": {
    src: "/images/interior-painting-hallway.jpg",
    alt: "Interior hallway freshly painted in white",
    width: 800,
    height: 1067,
  },
  "service-1-detail-2": {
    src: "/images/interior-painting-bathroom.jpg",
    alt: "Bathroom with fresh blue-gray paint",
    width: 800,
    height: 1067,
  },
  // Service 2: Exterior Painting
  "service-2-detail-1": {
    src: "/images/exterior-painting-black-garage.jpg",
    alt: "Garage exterior painted black",
    width: 800,
    height: 1067,
  },
  "service-2-detail-2": {
    src: "/images/house-painting-ranch.jpg",
    alt: "Ranch-style home exterior painting",
    width: 800,
    height: 1067,
  },
  // Service 3: Cabinet Painting
  "service-3-detail-1": {
    src: "/images/interior-painting-collage-kitchen.jpg",
    alt: "Cabinet and kitchen painting before and after in Central Ohio",
    width: 800,
    height: 1067,
  },
  "service-3-detail-2": {
    src: "/images/stock-1.jpg",
    alt: "Kitchen interior after cabinet refinishing",
    width: 800,
    height: 600,
  },
  // Service 4: Power Washing
  "service-4-detail-1": {
    src: "/images/gallery-powerwash-1.jpg",
    alt: "Close-up of power washing equipment cleaning Ohio siding",
    width: 800,
    height: 1067,
  },
  "service-4-detail-2": {
    src: "/images/gallery-powerwash-2.jpg",
    alt: "Freshly power washed surface in Central Ohio",
    width: 800,
    height: 1067,
  },
  // Service 5: Drywall Repair
  "service-5-detail-1": {
    src: "/images/interior-painting-collage-fullhouse.jpg",
    alt: "Interior drywall and paint refresh across a Central Ohio home",
    width: 800,
    height: 1067,
  },
  "service-5-detail-2": {
    src: "/images/interior-painting-hallway.jpg",
    alt: "Smooth walls after drywall repair",
    width: 800,
    height: 1067,
  },
  // Service 6: Floor Epoxy
  "service-6-detail-1": {
    src: "/images/stock-7.jpg",
    alt: "Industrial-grade finish detail — built for garages",
    width: 800,
    height: 600,
  },
  "service-6-detail-2": {
    src: "/images/house-painting-ranch.jpg",
    alt: "Ranch-style home with epoxy-ready garage in Ohio",
    width: 800,
    height: 1067,
  },
  // Service 7: Aluminum Painting
  "service-7-detail-1": {
    src: "/images/house-painting-ranch.jpg",
    alt: "Ranch home with aluminum siding painted in Central Ohio",
    width: 800,
    height: 1067,
  },
  "service-7-detail-2": {
    src: "/images/exterior-painting-blue-porch.jpg",
    alt: "Painted aluminum trim on home exterior",
    width: 800,
    height: 1067,
  },
  // Service 8: Masonry Painting
  "service-8-detail-1": {
    src: "/images/gallery-exterior-1.jpg",
    alt: "Masonry painting project in Central Ohio neighborhood",
    width: 800,
    height: 1067,
  },
  "service-8-detail-2": {
    src: "/images/exterior-painting-collage-winter.jpg",
    alt: "Seasonal masonry exterior before and after in Ohio",
    width: 800,
    height: 1067,
  },
  // Service 9: Wood Staining
  "service-9-detail-1": {
    src: "/images/gallery-exterior-10.jpg",
    alt: "Stained wood exterior detail in Central Ohio",
    width: 800,
    height: 1067,
  },
  "service-9-detail-2": {
    src: "/images/fence-painting-gray.jpg",
    alt: "Outdoor wood structure stained in Ohio",
    width: 800,
    height: 1067,
  },
  // Service 10: Vinyl Siding Painting
  "service-10-detail-1": {
    src: "/images/gallery-exterior-2.jpg",
    alt: "Vinyl siding exterior in Fairfield County, OH",
    width: 800,
    height: 1067,
  },
  "service-10-detail-2": {
    src: "/images/house-painting-ranch.jpg",
    alt: "Home vinyl siding after painting",
    width: 800,
    height: 1067,
  },
  // Service 11: Deck Staining
  "service-11-detail-1": {
    src: "/images/gallery-exterior-6.jpg",
    alt: "Recently stained deck at a Fairfield County home",
    width: 800,
    height: 1067,
  },
  "service-11-detail-2": {
    src: "/images/stock-9.jpg",
    alt: "Deck staining application in progress",
    width: 800,
    height: 600,
  },
  // Service 12: Fence Painting
  "service-12-detail-1": {
    src: "/images/gallery-exterior-7.jpg",
    alt: "Fence along a Central Ohio property line",
    width: 800,
    height: 1067,
  },
  "service-12-detail-2": {
    src: "/images/gallery-exterior-8.jpg",
    alt: "Freshly painted wood fence in Fairfield County, OH",
    width: 800,
    height: 1067,
  },
  // Service 13: House Painting
  "service-13-detail-1": {
    src: "/images/gallery-exterior-11.jpg",
    alt: "Whole-house painting project in Central Ohio",
    width: 800,
    height: 1067,
  },
  "service-13-detail-2": {
    src: "/images/house-painting-brick-landscaped.jpg",
    alt: "Brick home with fresh trim painting",
    width: 800,
    height: 1067,
  },

  // ===== ABOUT PAGE =====
  "about-hero": {
    src: "/images/stock-2.jpg",
    alt: "Scott's Painting and Power Washing — serving Central Ohio",
    width: 1920,
    height: 600,
    focalPoint: { x: 0.5, y: 0.4 },
  },
  "about-story": {
    src: "/images/exterior-painting-brick-historic.jpg",
    alt: "Quality craftsmanship on historic brick home",
    width: 800,
    height: 1067,
    focalPoint: { x: 0.5, y: 0.3 },
  },
  "about-team": {
    src: "/images/power-washing-action.jpg",
    alt: "Scott Hysell at work power washing a home",
    width: 800,
    height: 600,
  },

  // ===== CONTACT PAGE =====
  "contact-hero": {
    src: "/images/stock-13.jpg",
    alt: "Contact Scott's Painting and Power Washing",
    width: 1920,
    height: 600,
    focalPoint: { x: 0.5, y: 0.4 },
  },

  // ===== TESTIMONIALS =====
  "testimonial-1": {
    src: "",
    alt: "Client portrait",
    width: 200,
    height: 200,
  },
  "testimonial-2": {
    src: "",
    alt: "Client portrait",
    width: 200,
    height: 200,
  },
  "testimonial-3": {
    src: "",
    alt: "Client portrait",
    width: 200,
    height: 200,
  },

  // ===== BRANDING =====
  logo: {
    src: "/images/logo.webp",
    alt: "Scott's Painting and Power Washing logo",
    width: 180,
    height: 180,
  },
  "logo-white": {
    src: "/images/logo.webp",
    alt: "Scott's Painting and Power Washing logo",
    width: 180,
    height: 180,
  },
};
