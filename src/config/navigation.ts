import type { NavItem, FooterGroup } from "@/types";

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Interior Painting", href: "/services/interior-painting" },
      { label: "Exterior Painting", href: "/services/exterior-painting" },
      { label: "Cabinet Painting", href: "/services/cabinet-painting" },
      { label: "Power Washing", href: "/services/power-washing" },
      { label: "Drywall Repair", href: "/services/drywall-repair" },
      { label: "Floor Epoxy", href: "/services/floor-epoxy" },
      { label: "Aluminum Painting", href: "/services/aluminum-painting" },
      { label: "Masonry Painting", href: "/services/masonry-painting" },
      { label: "Wood Staining", href: "/services/wood-staining" },
      { label: "Vinyl Siding Painting", href: "/services/vinyl-siding-painting" },
      { label: "Deck Staining", href: "/services/deck-staining" },
      { label: "Fence Painting", href: "/services/fence-painting" },
      { label: "House Painting", href: "/services/house-painting" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Areas", href: "/areas" },
  {
    label: "Resources",
    href: "/blog",
    children: [
      { label: "Blog", href: "/blog" },
      { label: "Painting FAQ Columbus OH", href: "/painting-faq-columbus-oh" },
      { label: "Painting Cost Calculator", href: "/painting-cost-calculator" },
    ],
  },
  { label: "Contact", href: "/contact-us" },
];

export const footerGroups: FooterGroup[] = [
  {
    title: "Painting Services",
    links: [
      { label: "Interior Painting", href: "/services/interior-painting" },
      { label: "Exterior Painting", href: "/services/exterior-painting" },
      { label: "Cabinet Painting", href: "/services/cabinet-painting" },
      { label: "House Painting", href: "/services/house-painting" },
      { label: "Aluminum Painting", href: "/services/aluminum-painting" },
      { label: "Masonry Painting", href: "/services/masonry-painting" },
      { label: "Vinyl Siding Painting", href: "/services/vinyl-siding-painting" },
    ],
  },
  {
    title: "More Services",
    links: [
      { label: "Power Washing", href: "/services/power-washing" },
      { label: "Drywall Repair", href: "/services/drywall-repair" },
      { label: "Floor Epoxy", href: "/services/floor-epoxy" },
      { label: "Wood Staining", href: "/services/wood-staining" },
      { label: "Deck Staining", href: "/services/deck-staining" },
      { label: "Fence Painting", href: "/services/fence-painting" },
    ],
  },
  {
    title: "Service Areas",
    links: [
      { label: "Columbus OH", href: "/areas/columbus-oh" },
      { label: "Grove City OH", href: "/areas/grove-city-oh" },
      { label: "Pataskala OH", href: "/areas/pataskala-oh" },
      { label: "Newark OH", href: "/areas/newark-oh" },
      { label: "Lancaster OH", href: "/areas/lancaster-oh" },
      { label: "Franklin County OH", href: "/areas/franklin-county-oh" },
      { label: "Licking County OH", href: "/areas/licking-county-oh" },
      { label: "Fairfield County OH", href: "/areas/fairfield-county-oh" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Gallery", href: "/gallery" },
      { label: "Contact", href: "/contact-us" },
      { label: "FAQ", href: "/#faq" },
      { label: "Blog", href: "/blog" },
      { label: "Painting FAQ Columbus OH", href: "/painting-faq-columbus-oh" },
      { label: "Painting Cost Calculator", href: "/painting-cost-calculator" },
    ],
  },
];
