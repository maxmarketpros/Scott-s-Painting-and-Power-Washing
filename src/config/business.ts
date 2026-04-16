export const businessConfig = {
  phone: "(614) 809-9730",
  phoneRaw: "+16148099730",
  email: "scotthysell7@gmail.com",
  address: {
    street: "552 Hill Rd S",
    city: "Pickerington",
    state: "OH",
    zip: "43147",
    full: "552 Hill Rd S, Pickerington, OH 43147",
  },
  displayArea: "Fairfield County, OH",
  hours: {
    display: "Mon-Fri: 7 AM - 9 PM | Sat: 7:30 AM - 8 PM | Sun: 8 AM - 7 PM",
    structured: [
      { days: "Mo-Fr", opens: "07:00", closes: "21:00" },
      { days: "Sa", opens: "07:30", closes: "20:00" },
      { days: "Su", opens: "08:00", closes: "19:00" },
    ],
  },

  // ===== SERVICE AREAS =====
  // Primary list used in footer, structured data, etc.
  serviceAreas: [
    "Pickerington",
    "Columbus",
    "Grove City",
    "Pataskala",
    "Newark",
    "Lancaster",
  ],

  // Expanded city list for the Service Areas section on the homepage.
  // Each city can optionally link to a dedicated area page in the future.
  serviceAreaCities: [
    { name: "Columbus", href: "/areas/columbus-oh" },
    { name: "Pickerington", href: "/areas/fairfield-county-oh" },
    { name: "Grove City", href: "/areas/grove-city-oh" },
    { name: "Pataskala", href: "/areas/pataskala-oh" },
    { name: "Newark", href: "/areas/newark-oh" },
    { name: "Lancaster", href: "/areas/lancaster-oh" },
    { name: "Canal Winchester", href: "" },
    { name: "Reynoldsburg", href: "" },
    { name: "Gahanna", href: "" },
    { name: "Westerville", href: "" },
    { name: "Granville", href: "" },
    { name: "Heath", href: "" },
  ],

  // Service areas section content
  serviceAreasHeading: "Serving Fairfield County & Central Ohio",
  serviceAreasSubtitle:
    "and surrounding areas including Columbus, Grove City, Pataskala, Newark, Lancaster, and the greater Central Ohio region.",

  // ===== MAP EMBED =====
  // If you have a Google Business Profile, paste the full embed src URL here.
  // To get it: Google Maps → search your business → Share → Embed a map → copy the src="" value
  // If left empty, falls back to a generic map centered on the business address city.
  googleBusinessMapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3062.0772546989133!2d-82.75930249999999!3d39.872507399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88387b50d6b15659%3A0x9f1c7b97ab3c904a!2sScott%27s%20Painting%20and%20Power%20Washing!5e0!3m2!1sen!2sus!4v1776362504669!5m2!1sen!2sus",

  // ===== FORM EMBED =====
  // Paste your iframe embed URL here (e.g. from Jobber, HouseCall Pro, GoHighLevel, Jotform, etc.)
  // This is used on the contact page and the "Get a Quote" section across all pages.
  // Leave empty to show a styled placeholder.
  formEmbedUrl: "https://api.leadconnectorhq.com/widget/form/lBAXgL3vJttooNd0oNaY",
  formEmbedHeight: "683px",

  coordinates: { lat: 39.872507, lng: -82.759302 },
  yearEstablished: 2001,
  yearsExperience: "25+",
  projectsCompleted: "17,000+",
  ownerName: "Scott Hysell",
} as const;

// Helper: returns the map embed URL — Google Business embed if set, otherwise a generic city map
export function getMapEmbedUrl(): string {
  if (businessConfig.googleBusinessMapEmbed) {
    return businessConfig.googleBusinessMapEmbed;
  }
  // Fallback: generic Google Maps embed centered on the business city
  const { city, state } = businessConfig.address;
  return `https://www.google.com/maps/embed/v1/place?key=&q=${encodeURIComponent(`${city}, ${state}`)}`;
}
