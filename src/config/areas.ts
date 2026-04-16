export interface AreaFAQ {
  question: string;
  answer: string;
}

export interface AreaWhyChoose {
  title: string;
  description: string;
  icon: string;
}

export interface AreaConfig {
  slug: string;
  name: string;
  type: "city" | "county";
  state: "OH";
  zipCodes?: string[];
  population?: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroImageKey: string;
  intro: string[];
  neighborhoods?: string[];
  includedCities?: string[];
  landmarks: string[];
  climateNotes: string;
  whyChooseUs: AreaWhyChoose[];
  popularServices: string[];
  faqs: AreaFAQ[];
  description: string;
}

export const areas: AreaConfig[] = [
  {
    slug: "columbus-oh",
    name: "Columbus",
    type: "city",
    state: "OH",
    zipCodes: ["43085", "43201", "43202", "43204", "43206", "43214", "43215", "43220", "43221"],
    population: "~907,000",
    metaTitle: "Painting Columbus OH | Scott's Painting & Power Washing",
    metaDescription: "Trusted painting & power washing in Columbus, OH. 25+ years serving German Village, Short North, Clintonville & more. Free estimates. Call (614) 809-9730.",
    h1: "Painting & Power Washing in Columbus, OH",
    heroImageKey: "service-2-hero",
    intro: [
      "Scott's Painting and Power Washing has been a familiar name for painting Columbus, OH homeowners and commercial property managers trust for more than 25 years. From the brick-and-slate rowhouses tucked along German Village's cobblestone streets to the sleek condos rising above the Short North Arts District, our crews have brushed, rolled, sprayed, and stained nearly every kind of surface this capital city has to offer. We live and work right here in Central Ohio, which means we understand the quirks that come with Franklin County weather, historic district paperwork, and the constant churn of a growing metro.",
      "When a homeowner on Neil Avenue in Victorian Village calls us to refresh fading trim, or a cafe owner in the Brewery District needs their storefront awnings repainted before a festival weekend, we show up with the same crew of W-2 employees you'll see week after week — not a rotating cast of subcontractors. Our route takes us from Worthington Hills down through Clintonville's tree-lined side streets, across campus near Ohio State University, through Grandview Heights' tidy bungalows, and into Bexley's edge neighborhoods bordering Alum Creek.",
      "Columbus housing stock is remarkably varied: turn-of-the-century Italianates in Italian Village, 1920s American Foursquares in Olde Towne East, mid-century ranches across the Hilltop, and brand-new builds popping up daily across Franklinton and the Near East Side. That mix means interior painting in Columbus is never a cookie-cutter job. Our scope commonly includes cabinet painting for remodeled Linden bungalow kitchens, drywall repair on settled plaster walls, exterior siding refreshes, and full-house power washing in Columbus, OH before any exterior paintwork begins.",
      "We live in the same neighborhoods you do — we send our kids to the same schools, shop the North Market, cheer at Crew matches, and get caught in the same I-270 traffic. That community tie keeps us accountable. A job done poorly in Clintonville won't stay quiet, and we'd rather be known for bungalows that still look sharp ten summers later than for a cheap quote we couldn't stand behind.",
    ],
    neighborhoods: [
      "German Village",
      "Short North Arts District",
      "Clintonville",
      "Italian Village",
      "Victorian Village",
      "Grandview Heights",
      "Worthington Hills",
      "Olde Towne East",
      "Franklinton",
      "Brewery District",
      "Linden",
      "Hilltop",
    ],
    landmarks: [
      "Ohio State University",
      "German Village",
      "Short North Arts District",
      "North Market",
      "Scioto Mile",
    ],
    climateNotes:
      "Columbus presents a painter's puzzle: dense urban blocks where homes share walls and zero-lot-line setbacks limit scaffolding, plus sprawling HOA suburbs on the outer belt with strict color palettes. A huge share of Columbus houses pre-date 1978, which means lead-safe protocols are non-negotiable — our RRP-certified crews contain, test, and clean to EPA standards. Humidity swings between muggy August afternoons and dry January deep-freezes, and the repeated freeze-thaw cycle pries open hairline cracks in putty, caulk, and masonry joints. We time our exterior painting in Columbus, OH around these realities — priming on dry, mild days and holding off when overnight lows threaten to kill a fresh latex film.",
    whyChooseUs: [
      {
        title: "Lead-Safe Certified for Pre-1978 Homes",
        description:
          "A huge number of Columbus homes — especially in German Village, Clintonville, and Olde Towne East — were built long before 1978. Our EPA RRP-certified painters follow containment, testing, and cleanup procedures that protect your family and keep your renovation legal.",
        icon: "Shield",
      },
      {
        title: "Historic District Experience",
        description:
          "Victorian Village, German Village, and other Columbus historic commissions have specific paint-color and surface-prep requirements. We've walked through their review processes, matched heritage palettes, and delivered the photo documentation these boards like to see.",
        icon: "Award",
      },
      {
        title: "Flexible Scheduling Around Campus and Events",
        description:
          "We know move-in week near OSU, Crew match days, and Short North Gallery Hops turn streets into parking nightmares. Our Columbus crews start early, stage materials off-site when needed, and work around your block's realities rather than fighting them.",
        icon: "Clock",
      },
      {
        title: "Local Team Who Knows the Neighborhoods",
        description:
          "Our painters grew up in Hilltop, Bexley, and Grandview. They know which Clintonville side streets clear snow last, which HOAs want color samples on-site, and how to get a ladder into a narrow German Village courtyard without scratching brick.",
        icon: "Users",
      },
    ],
    popularServices: ["interior-painting", "exterior-painting", "cabinet-painting", "power-washing", "drywall-repair", "house-painting"],
    faqs: [
      {
        question: "How much does interior painting in Columbus, OH typically cost?",
        answer:
          "For a standard 2,000 sq ft Columbus home, interior painting usually runs between $4,500 and $8,500 depending on ceiling height, trim complexity, and whether plaster repair is needed. Older homes in Clintonville and German Village often require more prep because of settled plaster and heavy original moldings. We provide written, itemized estimates after an in-person walkthrough so you're never guessing.",
      },
      {
        question: "Do you handle lead paint in older Columbus houses?",
        answer:
          "Yes. Any home built before 1978 in Columbus is assumed to contain lead paint until a test says otherwise — and countless Victorian Village, Olde Towne East, and Hilltop homes were built well before that cutoff. Our painters are EPA Lead-Safe Renovator (RRP) certified, and we follow full containment and HEPA cleanup protocols on every pre-1978 project.",
      },
      {
        question: "Can you power wash my Columbus house without damaging brick or mortar?",
        answer:
          "Absolutely. Power washing in Columbus, OH requires calibrated pressure — too much force can blow out old lime mortar on German Village or Franklinton brickwork. We use soft-wash techniques with a specialized detergent blend for historic masonry, and higher pressure only where siding or concrete can handle it.",
      },
      {
        question: "Do you work in Columbus historic districts like German Village and Victorian Village?",
        answer:
          "We do regularly. These commissions require specific color approvals and surface treatments, and we've completed dozens of projects that passed review. We'll help gather color chips, take the required before-photos, and coordinate inspections so your timeline doesn't slip.",
      },
      {
        question: "How long does exterior painting in Columbus, OH take?",
        answer:
          "A typical Columbus exterior — say a 1,800 sq ft two-story in Worthington Hills or Grandview — runs five to eight working days including pressure washing, prep, primer, and two finish coats. Larger Victorian homes or those needing carpentry repairs can stretch to two or three weeks. We share a day-by-day schedule up front.",
      },
    ],
    description: "Expert painting and power washing in Columbus, OH — serving German Village, Short North, Clintonville & every neighborhood in between.",
  },
  {
    slug: "grove-city-oh",
    name: "Grove City",
    type: "city",
    state: "OH",
    zipCodes: ["43123"],
    population: "~42,000",
    metaTitle: "Painting Grove City OH | Scott's Painting & Power Washing",
    metaDescription: "Professional painting & power washing in Grove City, OH. HOA-friendly crews serving The Pinnacle, Highland Lakes & more. Free quotes: (614) 809-9730.",
    h1: "Painting & Power Washing in Grove City, OH",
    heroImageKey: "service-13-hero",
    intro: [
      "For more than two and a half decades, Scott's Painting and Power Washing has been the crew Grove City residents call when they want the job done once and done right. Painting Grove City, OH homes means understanding a community that has grown quickly but kept its Town Center charm — a place where neighbors still wave from porches on Broadway and the Beulah Park area remembers its harness-racing past. We've rolled paint and pressure-washed patios from the lively streets around the Grove City Library all the way out to the newest subdivisions pushing toward Jackson Township.",
      "Grove City is HOA country. Neighborhoods like The Pinnacle, Highland Lakes, Heritage Preserve, and Sweetbriar each have approved color palettes, application standards, and in some cases required contractor insurance minimums. Our office handles those paperwork requirements before we ever crack a paint can, which means your association approval won't stall your schedule. If you live in Stewart Pointe or Buckeye Woods, we've almost certainly worked a few doors down.",
      "The typical Grove City house is a one- or two-story build from the late 1980s through today, often wrapped in vinyl siding with brick accents, cedar shutters, and composite trim. That construction profile means quick, clean exterior projects — most full-house repaints wrap in four to six working days. Interior work skews toward open-concept great rooms, cabinet painting for 1990s oak kitchens getting a refresh, and deck staining on the rear walkouts that look onto community ponds in Heritage Preserve.",
      "Power washing in Grove City, OH carries its own rhythm. We see a steady stream of requests every April and May once pollen, winter grime, and spider webs build up under soffits, and another wave each October before the holiday hosting season. Our Grove City route is tight and efficient, which usually means a faster start date than you'll get from a crew commuting from the far north side.",
    ],
    neighborhoods: [
      "The Pinnacle",
      "Highland Lakes",
      "Beulah Park",
      "Heritage Preserve",
      "Sweetbriar",
      "Stewart Pointe",
      "Buckeye Woods",
      "Grove City Town Center",
    ],
    landmarks: ["Grove City Town Center", "Beulah Park", "Pinnacle Club", "Fryer Park", "Grove City Library"],
    climateNotes:
      "Grove City's building stock leans heavily on vinyl siding and engineered composite trim, which reacts differently to paint than the brick-and-wood homes of older Columbus neighborhoods. Vinyl cannot be coated with standard latex — thermal expansion warps the panels unless a vinyl-safe formulation is used, and we stock those lines specifically. HOA covenants around The Pinnacle and Highland Lakes restrict finishes to approved palettes, so we help homeowners pull color chips that are already cleared. Mid-Ohio storm exposure brings hail, whipping summer winds, and heavy rain that drives water sideways into soffit seams, which is why we back-brush key areas rather than relying on spray alone.",
    whyChooseUs: [
      {
        title: "HOA Approval Handled",
        description:
          "We routinely submit color samples, insurance certificates, and contractor packets to Grove City HOAs including The Pinnacle, Highland Lakes, and Heritage Preserve. Our office manages that paperwork so your project kicks off on schedule rather than stalling in review.",
        icon: "Shield",
      },
      {
        title: "Vinyl-Safe Paint Expertise",
        description:
          "Most Grove City homes wear vinyl siding, and standard paint will cup or buckle it in a single hot summer. We stock vinyl-safe coatings formulated to reflect heat and flex with the panels so your investment lasts, not peels.",
        icon: "Award",
      },
      {
        title: "Fast Turnaround on Typical Builds",
        description:
          "Because Grove City homes share similar floor plans and square footage, our crews have the rhythm down. A typical exterior repaint wraps in four to six working days, and a single-story interior refresh usually takes under a week.",
        icon: "Clock",
      },
      {
        title: "Neighborhood Referrals You Can Verify",
        description:
          "Ask around Sweetbriar or Stewart Pointe and you'll find our trucks parked more weekends than not. We'll share addresses of recent Grove City projects so you can drive past the work and judge it with your own eyes before signing anything.",
        icon: "Users",
      },
    ],
    popularServices: ["exterior-painting", "interior-painting", "power-washing", "deck-staining", "cabinet-painting", "house-painting"],
    faqs: [
      {
        question: "Will you work with my Grove City HOA's approved colors?",
        answer:
          "Yes — this is standard for us in Grove City. Communities like The Pinnacle and Highland Lakes publish an approved palette, and we'll pull physical samples so you can see them against your actual siding and trim. We also submit whatever contractor documentation the board requires before starting.",
      },
      {
        question: "Can vinyl siding actually be painted, or should I replace it?",
        answer:
          "Vinyl siding in Grove City can absolutely be painted, and it's usually thousands of dollars cheaper than replacement. The key is vinyl-safe paint that won't cause heat distortion. We've painted vinyl throughout Heritage Preserve and Sweetbriar with results that still look crisp five-plus years in.",
      },
      {
        question: "How much does power washing in Grove City, OH cost?",
        answer:
          "Most Grove City single-family homes run between $325 and $550 for a full exterior soft wash including siding, soffits, and one concrete surface. Larger Pinnacle-area properties with extended driveways and pool decks can run higher. We provide an exact quote after seeing the property.",
      },
      {
        question: "When is the best time to stain my Grove City deck?",
        answer:
          "Late spring through early fall works best — ideally when daytime temps sit between 55 and 85 degrees with two rain-free days on either side of application. In Grove City, we typically schedule deck staining in May, June, and September for the most stable weather window.",
      },
      {
        question: "Do you paint kitchen cabinets in Grove City?",
        answer:
          "We do, and cabinet painting is one of our most-requested Grove City services because so many homes here still have the original 1990s honey oak. We remove doors, spray them in our shop's controlled dust-free booth, and reinstall with new hinges if requested. Turnaround is usually five to seven days.",
      },
    ],
    description: "HOA-savvy painting and power washing in Grove City, OH — vinyl-safe coatings, fast turnaround, and crews that know every subdivision.",
  },
  {
    slug: "pataskala-oh",
    name: "Pataskala",
    type: "city",
    state: "OH",
    zipCodes: ["43062"],
    population: "~16,000",
    metaTitle: "Painting Pataskala OH | Scott's Painting & Power Washing",
    metaDescription: "Painting & power washing in Pataskala, OH for homes, barns & outbuildings. Large-lot experts. 25+ years. Call (614) 809-9730 for a free estimate.",
    h1: "Painting & Power Washing in Pataskala, OH",
    heroImageKey: "service-9-hero",
    intro: [
      "Painting Pataskala, OH properties calls for a different mindset than working in the tightly packed suburbs west of us. Pataskala stretches along the historic National Road corridor, blending a small downtown Columbus Street Historic District with five-acre horse properties and new residential pockets that keep expanding toward Summit Station. Scott's Painting and Power Washing has been covering this part of Licking County for over 25 years, and we've hauled ladders and sprayers down every gravel drive from Mink Street to Havens Corners Road.",
      "Our Pataskala work splits fairly evenly between town and country. In the Ethan Ridge, Heritage Crossing, and Patriots Commons subdivisions, we're repainting two-story vinyl homes, staining rear decks, and freshening trim. Drive a few minutes out and we're prepping 3,000 square foot pole barns, repainting metal siding on equipment sheds, refreshing 1940s farmhouses along Route 310, and staining board fencing that's lived through a decade of central Ohio sun.",
      "Exterior painting in Pataskala, OH often requires solutions urban painters rarely think about. Country properties mean agricultural dust coating siding, well-water systems that can leave iron staining after a power wash rinse, and long distances between the house and the closest water spigot. We bring our own bulk-water tanks for rural jobs and use filtration on the final rinse so your white trim doesn't come out tinted orange.",
      "The Columbus Street Historic District and the area near Pataskala Public Library and Freedom Park demand a lighter touch. We've handled century homes just off the downtown core where original clapboard needs scraping, priming, and hand-brushed finish coats to respect the building's age. Whether you're in a 1920s farmhouse or a brand-new colonial in Wagner Farms, we scope the work honestly up front.",
    ],
    neighborhoods: [
      "Pataskala downtown",
      "Ethan Ridge",
      "Heritage Crossing",
      "Patriots Commons",
      "Wagner Farms",
      "Summit Station area",
      "Mink Street corridor",
      "Havens Corners Road corridor",
    ],
    landmarks: [
      "National Road (Route 40)",
      "Columbus Street Historic District",
      "Pataskala Public Library",
      "Freedom Park",
      "Route 310 corridor",
    ],
    climateNotes:
      "Pataskala's rural-suburban blend creates painting considerations most crews overlook. Many properties pull water from private wells, and high iron or sulfur content can leave rust-tinted streaks when pressure-washing rinse water hits white vinyl — we bring filtered water tanks on country jobs to prevent that exact problem. Long, open sight-lines mean wind-driven dust and agricultural spray residue build up on siding faster than in town, so soft-wash prep before any repaint is essential. Outbuildings, pole barns, and metal roofs exposed to full sun expand and contract more than shaded town structures, which demands coatings engineered for metal substrates rather than off-the-shelf house paint.",
    whyChooseUs: [
      {
        title: "Rural Property Specialists",
        description:
          "Big lots, long driveways, barns, outbuildings, and fence-lines that stretch past the treeline — we've painted and stained every piece of them across Pataskala and eastern Licking County. We bring the equipment and water capacity country jobs actually require.",
        icon: "Shield",
      },
      {
        title: "Historic District Sensitivity",
        description:
          "The Columbus Street Historic District and older homes along Main Street deserve hand-finished clapboard, proper lead-safe prep, and period-correct colors. Our veteran painters have the patience and skill those century homes demand.",
        icon: "Award",
      },
      {
        title: "Flexible Multi-Day Scheduling",
        description:
          "A Pataskala farmstead with a house, detached garage, barn, and 400 feet of fence doesn't wrap in two days. We plan realistic multi-day schedules, stage crews to keep momentum, and give you a written day-by-day plan before we start.",
        icon: "Clock",
      },
      {
        title: "Licking County Locals",
        description:
          "We've worked in Pataskala since before Summit Station Road saw its current wave of new construction. Ask neighbors in Patriots Commons or drive past our fence-staining work on Havens Corners Road — the proof is parked right in your own zip code.",
        icon: "Users",
      },
    ],
    popularServices: ["exterior-painting", "wood-staining", "power-washing", "fence-painting", "deck-staining", "house-painting"],
    faqs: [
      {
        question: "Do you paint barns and outbuildings in Pataskala, OH?",
        answer:
          "We do a lot of them. Pole barns, horse barns, detached garages, equipment sheds — all in the regular Pataskala mix. We use metal-specific primers and coatings engineered for large substrate movement, so the paint doesn't crack when the building expands and contracts with seasons.",
      },
      {
        question: "Can you power wash my Pataskala house if I'm on a well?",
        answer:
          "Yes. Power washing in Pataskala, OH on well-water properties is something we handle every week. If your well water has iron or sulfur, we bring filtered water or a holding tank so the final rinse doesn't stain your siding. It's a small detail most crews ignore, and it makes a visible difference.",
      },
      {
        question: "How much does fence painting or staining cost in Pataskala?",
        answer:
          "Per linear foot, privacy fence staining in Pataskala typically runs $3 to $6 depending on height, condition, and stain type (transparent, semi-transparent, or solid). Board fencing for horse properties along Mink Street or Havens Corners Road often runs a little less because it's simpler to spray.",
      },
      {
        question: "Will exterior paint hold up on Pataskala homes exposed to open fields?",
        answer:
          "It will if the right prep and product are used. Homes out near Summit Station or along Route 310 catch more wind, sun, and dust than town homes do, so we specify premium exterior acrylics with higher UV packages and always back-brush the first coat into the substrate. Done right, you'll get eight to twelve years before a full repaint.",
      },
      {
        question: "Do you work in Pataskala historic districts?",
        answer:
          "Yes — the Columbus Street Historic District homes and the older properties near the Pataskala Public Library have received our careful prep work many times. We match heritage color palettes, hand-brush where appropriate, and keep documentation so your project meets local guidelines.",
      },
    ],
    description: "Painting and power washing in Pataskala, OH — rural property experts serving farmsteads, subdivisions, and historic homes across Licking County.",
  },
  {
    slug: "newark-oh",
    name: "Newark",
    type: "city",
    state: "OH",
    zipCodes: ["43055", "43056"],
    population: "~49,000",
    metaTitle: "Painting Newark OH | Scott's Painting & Power Washing",
    metaDescription: "Masonry, historic & interior painting in Newark, OH. Serving downtown, Granville Road & Cherry Valley since 1999. Free quote: (614) 809-9730.",
    h1: "Painting & Power Washing in Newark, OH",
    heroImageKey: "service-8-hero",
    intro: [
      "Newark sits at the heart of Licking County, and Scott's Painting and Power Washing has been covering its streets, century homes, and downtown storefronts for more than 25 years. Painting Newark, OH properties means taking seriously a city that carries real historic weight — the Newark Earthworks hold UNESCO World Heritage status, the Licking County Courthouse anchors the Square with nineteenth-century stonework, and the Canal Market District keeps drawing new residents into restored brick buildings along the old canal route.",
      "Our crews spend as much time on ladders downtown as they do in the neighborhoods wrapping it. We've repainted wooden porches on West Main Street's historic stretch, refreshed aluminum siding in the Idlewild Park area, restored masonry on century brick near Veterans Park, and handled full-interior repaints in the Cherry Valley and Granville Road corridors. The Hudson Avenue and Mount Vernon Avenue areas see plenty of our trucks, particularly when longtime homeowners finally decide that the oak trim needs to go.",
      "Newark housing stock spans an unusual range. You'll find Italianates and Queen Annes downtown, Sears kit homes in North Newark, 1950s brick ranches across the city's middle belt, and mid-2000s builds on the north side. That diversity is why masonry painting, drywall repair, and historic-district color consultation make up a larger share of our Newark workload than they do in newer communities.",
      "We're also aware of the Licking River flood history around low-lying blocks near the downtown core and The Works. When properties in those zones need exterior work, we plan around forecasted river levels and give the substrate extra time to dry before any primer goes on. That kind of local judgment is what 25-plus years in this market teaches you.",
    ],
    neighborhoods: [
      "Downtown Newark",
      "Granville Road corridor",
      "North Newark",
      "Cherry Valley",
      "Mount Vernon Avenue area",
      "Hudson Avenue",
      "Idlewild Park area",
      "West Main Street historic district",
    ],
    landmarks: [
      "Newark Earthworks (UNESCO site)",
      "Licking County Courthouse",
      "Canal Market District",
      "The Works",
      "Veterans Park",
    ],
    climateNotes:
      "Century brick and stone homes dominate much of Newark's inner core, and masonry painting here demands breathable mineral-based coatings rather than standard acrylics that trap moisture and cause spalling. The city maintains preservation-sensitive guidelines near the downtown square and along West Main Street, which means color approvals and documentation matter. Newark sees the same freeze-thaw cycles as the rest of central Ohio, but older soft-fired brick suffers more damage when moisture gets trapped under the wrong product. Proximity to the Licking River means elevated humidity and occasional flood exposure in low-lying blocks, so we test substrate moisture with a meter before committing to a paint schedule.",
    whyChooseUs: [
      {
        title: "Masonry Painting Done Properly",
        description:
          "Century brick homes near downtown Newark need mineral silicate or elastomeric coatings that breathe — not trapped-moisture acrylic that causes spalling. Our painters are trained on the right products for soft-fired brick and know when repointing needs to happen before paint.",
        icon: "Shield",
      },
      {
        title: "Historic Preservation Know-How",
        description:
          "We've handled homes in West Main Street's historic district and properties near the Licking County Courthouse. That includes heritage color research, hand-brushing period moldings, and coordinating with local preservation guidelines so your work meets standards.",
        icon: "Award",
      },
      {
        title: "Weather-Aware Scheduling",
        description:
          "Licking River humidity and flood-zone substrate moisture mean exterior paint can fail if scheduled wrong. We use moisture meters on masonry, track dew points, and time projects so primer cures fully before the first finish coat goes on.",
        icon: "Clock",
      },
      {
        title: "References Throughout Licking County",
        description:
          "From Granville Road colonials to Cherry Valley ranches to downtown Canal Market District storefronts, we can share Newark-area job addresses and references. Our name gets passed around this town because we stand behind every finished project.",
        icon: "Users",
      },
    ],
    popularServices: ["exterior-painting", "masonry-painting", "interior-painting", "cabinet-painting", "power-washing", "house-painting"],
    faqs: [
      {
        question: "Can you paint historic brick homes in Newark, OH?",
        answer:
          "Yes, and this is a specialty of ours in Newark. The century homes near the downtown square and along West Main Street are often soft-fired brick that requires a breathable, vapor-permeable coating — using the wrong paint traps moisture and causes the face to pop off. We specify the right product and repoint deteriorated mortar first.",
      },
      {
        question: "How much does exterior painting in Newark, OH cost for a historic home?",
        answer:
          "Full exterior painting on a Newark Victorian or Italianate typically runs $9,000 to $22,000 depending on size, number of colors, trim complexity, and whether carpentry or lead-safe prep is needed. We break down every line item so you see exactly where the budget goes.",
      },
      {
        question: "Do you handle the Newark historic district paperwork?",
        answer:
          "Yes. Properties in Newark's preservation-sensitive areas often require color submissions and sometimes a review. We photograph existing conditions, pull appropriate heritage color chips, and assemble whatever packet the local guidelines call for so your project moves forward cleanly.",
      },
      {
        question: "Can you power wash a brick home safely in Newark?",
        answer:
          "Absolutely. Power washing in Newark, OH on soft-fired brick demands low pressure and a masonry-safe biocide — high pressure will blow mortar joints and erode brick face. Our soft-wash approach removes biological growth and atmospheric soot without causing damage.",
      },
      {
        question: "Will cabinet painting hold up in a Newark kitchen?",
        answer:
          "Cabinet painting in Newark lasts a decade or more when it's done with proper degreasing, sanding, bonding primer, and a cabinet-rated enamel sprayed in a controlled environment. We remove doors and drawer fronts, spray them off-site in our booth, and reinstall with fresh hardware if you'd like.",
      },
    ],
    description: "Historic-home painting and power washing in Newark, OH — masonry experts, preservation-savvy, serving all of Licking County.",
  },
  {
    slug: "lancaster-oh",
    name: "Lancaster",
    type: "city",
    state: "OH",
    zipCodes: ["43130"],
    population: "~40,000",
    metaTitle: "Painting Lancaster OH | Scott's Painting & Power Washing",
    metaDescription: "Painting & power washing in Lancaster, OH. Historic home specialists serving Square 13, Rising Park & beyond. Call (614) 809-9730 for a free estimate.",
    h1: "Painting & Power Washing in Lancaster, OH",
    heroImageKey: "service-1-hero",
    intro: [
      "Lancaster wears its nineteenth-century identity proudly, and painting Lancaster, OH homes has been one of the most rewarding parts of our 25-plus years in business. The city earned its nickname as the Glass Capital from the Anchor Hocking legacy, and the architectural record that industry left behind — Italianates, Greek Revivals, Second Empires, and Queen Annes — now forms the backbone of Square 13 and the blocks radiating outward from the Fairfield County Courthouse. Scott's Painting and Power Washing has worked on homes throughout this district, as well as out toward Rising Park, up Memorial Drive, and across to the Logan Elm area on the east side.",
      "Our work in Lancaster ranges from full interior repaints in North Columbus Street homes to exterior restorations along Fair Avenue, cabinet projects on South Broad Street, and extensive staining work on wood porches and decks throughout the River Valley. Because the city sits at the doorstep of Hocking Hills, tree coverage in many Lancaster neighborhoods is genuinely dense — Ewing Street and the blocks near Rising Park stay shaded most of the day, which changes how algae and mildew build up on exterior surfaces.",
      "We take historically appropriate color work seriously here. A Greek Revival near the Sherman House Museum deserves paint chemistry and color choices that honor its origin — not a modern beige pulled from an HOA-approved palette. We consult historical color references, pull actual heritage chips, and talk through the decision with owners so the house looks right to a trained eye and to the neighbors who walk past it every day.",
      "Power washing in Lancaster, OH is particularly important because of that same heavy tree canopy. Organic staining, green algae on north-facing walls, and the gray cast that builds up under dripping eaves is relentless here. A soft wash every other year keeps paint investments lasting far longer and keeps historic substrates from staying wet under film.",
    ],
    neighborhoods: [
      "Square 13 historic district",
      "Fair Avenue",
      "Memorial Drive",
      "North Columbus Street",
      "Ewing Street",
      "South Broad Street",
      "River Valley",
      "Logan Elm area",
    ],
    landmarks: [
      "Square 13 (downtown historic core)",
      "Mt. Pleasant / Standing Stone",
      "Rising Park",
      "Sherman House Museum",
      "Anchor Hocking Glass Museum",
    ],
    climateNotes:
      "Lancaster's position at the edge of Hocking Hills shapes nearly every exterior project we estimate. Tree cover is significantly heavier than in flatter parts of central Ohio, which means algae and mildew colonize shaded siding, soffits, and north-facing walls quickly. Humid summers stress exterior wood trim, and nineteenth-century softwood porches and window casings need annual inspection. The city maintains historic preservation guidelines around Square 13 and portions of the original downtown grid, which influences acceptable colors and surface treatments. Nearby Italianate and Greek Revival homes were built with materials and construction techniques that require breathable coatings and patient, hand-applied prep rather than fast spray-and-go production work.",
    whyChooseUs: [
      {
        title: "Historic Color Expertise",
        description:
          "Italianates and Greek Revivals near Sherman House Museum deserve colors that match their era, not generic beige. We pull heritage palettes from Sherwin-Williams and Benjamin Moore's historical collections and consult with you on combinations that honor the architecture.",
        icon: "Shield",
      },
      {
        title: "Mildew-Resistant Exterior Systems",
        description:
          "Lancaster's heavy tree canopy means north-facing walls and shaded soffits host serious algae. We specify coatings with built-in mildewcides and always soft-wash and treat before priming, which dramatically extends the life of your exterior paint.",
        icon: "Award",
      },
      {
        title: "Careful, Unhurried Prep",
        description:
          "Nineteenth-century homes need hand-scraping, spot-priming, and wood-consolidation work that production-focused crews skip. Our team takes the time these century structures require — and it shows in paint that still looks sharp a decade later.",
        icon: "Clock",
      },
      {
        title: "Long-Standing Fairfield County Presence",
        description:
          "We've been driving our trucks into Lancaster for more than 25 years. Ask neighbors around Rising Park or Memorial Drive — odds are our ladders have leaned against a house within two blocks of yours, and the results are there to inspect.",
        icon: "Users",
      },
    ],
    popularServices: ["interior-painting", "exterior-painting", "wood-staining", "power-washing", "cabinet-painting", "house-painting"],
    faqs: [
      {
        question: "Do you understand historic color requirements in Lancaster, OH?",
        answer:
          "Yes. Painting Lancaster, OH historic homes — especially around Square 13 and the blocks near the Fairfield County Courthouse — requires historically appropriate color combinations and sometimes formal approval. We pull heritage color references, present physical chips on your siding, and coordinate with local preservation guidance where it applies.",
      },
      {
        question: "How often does a Lancaster home need power washing?",
        answer:
          "Because of Lancaster's tree cover and humidity, we recommend a soft wash every two to three years for most homes. Properties in densely shaded areas near Rising Park or along Ewing Street may benefit from yearly washing to control algae. Our power washing in Lancaster, OH uses biocides that treat the spores, not just rinse them.",
      },
      {
        question: "Can you stain wood porches and trim on historic Lancaster homes?",
        answer:
          "Absolutely — we do this regularly on North Columbus Street and South Broad Street properties. Nineteenth-century porches and wood detailing often need consolidation, careful sanding, and a penetrating stain or translucent finish that lets the grain show. We match existing finishes when owners want to preserve the current look.",
      },
      {
        question: "How much does interior painting cost for a Lancaster historic home?",
        answer:
          "A full-interior repaint on a 2,200 sq ft Lancaster home typically runs $6,500 to $12,000, and historic properties with ornate plaster, high ceilings, and intricate millwork push toward the upper end. We itemize prep, primer, and finish coats separately so you can see exactly what each space costs.",
      },
      {
        question: "Do you paint cabinets in Lancaster kitchens?",
        answer:
          "We do — cabinet painting is one of our most-requested Lancaster services, particularly for homeowners modernizing 1980s and 1990s kitchens in the Memorial Drive and Logan Elm areas. We remove doors, spray them in our shop, and reinstall with new hardware if requested. The result looks factory-finished, not brush-painted.",
      },
    ],
    description: "Historic-home painting and power washing in Lancaster, OH — heritage color experts serving Square 13, Rising Park, and all of Fairfield County.",
  },
  {
    slug: "franklin-county-oh",
    name: "Franklin County",
    type: "county",
    state: "OH",
    population: "~1.32 million",
    metaTitle: "Painting & Power Washing in Franklin County, OH",
    metaDescription: "Trusted painting and power washing across Franklin County, OH. We serve Columbus, Dublin, Westerville, Upper Arlington and more. 25+ years. Call (614) 809-9730.",
    h1: "Professional Painting & Power Washing Across Franklin County, OH",
    heroImageKey: "hero-home",
    intro: [
      "Franklin County is the beating heart of central Ohio, and for more than two and a half decades our team at Scott's Painting and Power Washing has been climbing ladders, rolling walls, and washing siding from one end of the county to the other. With a population hovering around 1.32 million residents, this is the largest county in the state by headcount, and the housing stock reflects that diversity. We work inside modest Cape Cods in Whitehall one morning and finish the day prepping a five-thousand-square-foot custom exterior in New Albany. No two streets in this county paint quite the same way, and we like it that way.",
      "Our crews cover the entire county footprint, including Columbus proper, Dublin, Westerville, Worthington, Gahanna, Reynoldsburg, Hilliard, Grove City, Canal Winchester, Upper Arlington, Bexley, Whitehall, Grandview Heights, and the Franklin County edges of Powell and Pickerington. Demographically, Franklin County is younger and more educated than the Ohio average, with a median household income that varies dramatically by ZIP code. That matters for us because a painting quote in Clintonville reads very differently than one in Muirfield Village, and we tailor every proposal to the home, the neighborhood, and the owner's priorities rather than running a cookie-cutter playbook.",
      "Housing in the county ranges from pre-war brick doubles near Ohio State University to 1950s ranches in the inner ring, mid-century moderns in Upper Arlington, and brand-new builds going up weekly in the Jerome Village and Polaris corridors. That mix means we handle plaster repair in historic Bexley bungalows, cabinet refinishing in renovated Clintonville kitchens, full exterior repaints on vinyl-sided Hilliard two-stories, and aluminum siding refresh work on Reynoldsburg splits. Power washing requests spike every spring as mildew and pollen coat north-facing walls, concrete driveways, and composite decks.",
      "We're a central Ohio company working in a central Ohio county, and we treat every Franklin County project as a chance to prove that the local option still beats the regional franchise. Our painters live in these suburbs, shop at Easton Town Center and Polaris Fashion Place, and know which HOA in New Albany requires approved color chips and which Dublin subdivision has strict exterior trim guidelines. When you call us, you get a crew that drives these roads every day.",
    ],
    includedCities: [
      "Columbus",
      "Dublin",
      "Westerville",
      "Worthington",
      "Gahanna",
      "Reynoldsburg",
      "Hilliard",
      "Grove City",
      "Canal Winchester",
      "New Albany",
      "Upper Arlington",
      "Bexley",
      "Whitehall",
      "Grandview Heights",
      "Powell",
      "Pickerington",
    ],
    landmarks: ["Ohio State University", "Scioto Mile", "Franklin Park Conservatory", "Easton Town Center", "Polaris Fashion Place"],
    climateNotes:
      "Franklin County sits squarely in the humid continental zone, and the urban heat island around downtown Columbus pushes summer surface temperatures on south-facing walls well past what paint manufacturers plan for. We schedule exterior coatings around that reality, favoring early-morning starts from June through August. Winter freeze-thaw cycles are brutal on exterior trim, window sills, and wooden garage door jambs, which is why we specify high-flex acrylic systems and insist on proper caulk replacement before any topcoat. Humidity swings from bone-dry February days to muggy July afternoons also dictate when we can safely spray, and our moisture meters stay in heavy rotation.",
    whyChooseUs: [
      {
        title: "Two-Plus Decades Across Every Suburb",
        description:
          "From Upper Arlington colonials to New Albany Georgians and Reynoldsburg tri-levels, we've painted in nearly every Franklin County ZIP code. That depth of local experience means we walk onto your property already knowing the common failure points for your specific housing style.",
        icon: "Shield",
      },
      {
        title: "HOA and Historic District Fluency",
        description:
          "Muirfield, New Albany Country Club, Tartan Fields, German Village, and Victorian Village all have their own rules. We handle color submissions, period-appropriate palette advice, and documentation so your project stays compliant from proposal to final walkthrough.",
        icon: "MapPin",
      },
      {
        title: "Premium Coatings for Urban Conditions",
        description:
          "Exhaust film from I-270 traffic, pollen from the Scioto greenways, and pressure from freeze-thaw expansion all age exterior paint faster than spec. We use Sherwin-Williams and Benjamin Moore product lines rated for demanding urban and suburban exposure, not the builder-grade stuff that fades in three years.",
        icon: "Star",
      },
      {
        title: "Crews That Show Up When They Say",
        description:
          "Our Franklin County project managers live here, dispatch here, and hold weekly scheduling reviews so your start date doesn't slide. You'll get one named lead on your job from estimate through punch list, and that person answers their phone.",
        icon: "Users",
      },
    ],
    popularServices: ["interior-painting", "exterior-painting", "cabinet-painting", "power-washing", "drywall-repair", "house-painting"],
    faqs: [
      {
        question: "Do you paint historic homes in German Village and Victorian Village?",
        answer:
          "Yes, we regularly work on brick rowhouses, Italianate frames, and late-1800s doubles in the historic core. We follow the German Village Society and Victorian Village Commission guidelines for color approval, coordinate with homeowners on period-appropriate palettes, and use breathable masonry coatings where traditional brick walls need to shed moisture.",
      },
      {
        question: "Can you handle large-scale exterior projects in suburbs like Dublin and New Albany?",
        answer:
          "Absolutely. Our larger crews regularly tackle full exterior repaints on four- and five-thousand-square-foot homes, including multi-story stucco, Hardie board siding, aluminum soffit, and cedar shake accents. We coordinate lifts, scaffolding, and HOA color submissions as part of our estimate process.",
      },
      {
        question: "How quickly can you schedule power washing in Franklin County?",
        answer:
          "During peak season from April through October, we generally book power washing within one to two weeks. Concrete driveway and sidewalk jobs in Hilliard, Gahanna, and Grove City often go faster because we can route them efficiently between larger projects.",
      },
      {
        question: "Do you offer cabinet painting for Columbus kitchen remodels?",
        answer:
          "Cabinet refinishing is one of our most requested services, especially in renovated Clintonville, Grandview Heights, and Upper Arlington kitchens. We remove doors and drawer fronts, spray them in our shop-grade setup for a factory-smooth finish, and reinstall with new hardware if you want a full refresh without the cost of replacement.",
      },
      {
        question: "Are your painters insured for work in gated communities?",
        answer:
          "Yes, we carry full general liability and workers' compensation coverage, and we can provide certificates of insurance naming your HOA or property management company as an additional insured. This is standard for access to Muirfield, New Albany Country Club, and similar gated neighborhoods in Franklin County.",
      },
    ],
    description: "Full-service painting and power washing across Franklin County, OH, including Columbus, Dublin, Westerville, and every suburb in between.",
  },
  {
    slug: "licking-county-oh",
    name: "Licking County",
    type: "county",
    state: "OH",
    population: "~180,000",
    metaTitle: "Painting & Power Washing in Licking County, OH",
    metaDescription: "Exterior painting, barn staining, and power washing throughout Licking County, OH. Serving Newark, Granville, Pataskala, Buckeye Lake. Call (614) 809-9730.",
    h1: "Painting, Staining & Power Washing Throughout Licking County, OH",
    heroImageKey: "service-4-hero",
    intro: [
      "Licking County covers nearly 690 square miles of rolling farmland, river valleys, and small historic towns east of Columbus, and working out here feels different from working in the urban core. Our team has been traveling State Route 16, US-40, and the back roads out to Utica and Alexandria for years, and we've developed a specialty in the kinds of projects that show up in a rural-suburban county: clapboard farmhouses, detached workshops, working pole barns, and century-old brick buildings that make up the historic heart of Newark.",
      "With a population of roughly 180,000 spread across a mix of county seat, lake communities, college town, and unincorporated agricultural land, Licking County homeowners tend to own more property and more outbuildings than their Franklin County neighbors. That changes what a typical quote looks like. A standard project here might include the main house plus a detached garage, a barn, a perimeter wood fence, and a power wash of a long concrete driveway or paver patio. We're set up for that kind of multi-structure work, and we price it as one coordinated visit rather than stacking separate trips.",
      "Our service area includes Newark, Pataskala, Heath, Granville, Hebron, Johnstown, Buckeye Lake, Utica, Kirkersville, and Alexandria. Granville's Federal and Greek Revival homes near Denison University need a different hand than a lakefront cottage on Buckeye Lake or a Victorian on Newark's Third Street. We stock the materials and the color-matching tools to move between those environments without cutting corners. Waterfront properties in particular come with their own prep list, including mildew remediation and UV-stable topcoats that hold up to open sun and reflected glare off the water.",
      "What draws our crews back to Licking County year after year is the quality of the properties and the directness of the conversations. Homeowners out here tend to know exactly what they want, appreciate straight talk on scope and price, and expect the work to last. We aim to earn repeat calls the old-fashioned way, by showing up on time, finishing clean, and standing behind the coatings we apply.",
    ],
    includedCities: [
      "Newark",
      "Pataskala",
      "Heath",
      "Granville",
      "Hebron",
      "Johnstown",
      "Buckeye Lake",
      "Utica",
      "Kirkersville",
      "Alexandria",
    ],
    landmarks: [
      "Newark Earthworks (UNESCO World Heritage Site)",
      "Denison University",
      "Buckeye Lake",
      "Blackhand Gorge State Nature Preserve",
      "The Works Museum",
    ],
    climateNotes:
      "Rural Licking County properties face weather that behaves differently than houses tucked behind other houses in a subdivision. Open fields mean wind-driven rain hits siding from angles that urban walls never see, and agricultural dust from spring planting and fall harvest settles onto every horizontal surface within a mile or two of a working field. Mature tree canopies over older Granville and Newark lots trap moisture against north-facing walls, producing heavy algae and mildew growth that requires soft-wash power washing before any paint goes on. Homes in the Licking River and South Fork floodplain also need careful attention to foundation masonry and lower siding courses where wicking moisture is common.",
    whyChooseUs: [
      {
        title: "Farmhouse and Barn Specialists",
        description:
          "We've stained, sealed, and painted more barns, outbuildings, and working pole structures than we can count. We understand oil-based versus latex trade-offs on rough-sawn cedar, how to prep weathered board-and-batten, and which red pigments actually hold color on a south-facing gable.",
        icon: "Shield",
      },
      {
        title: "Comfortable With Large Rural Lots",
        description:
          "Long driveways, detached shops, and property lines that disappear into treelines don't slow us down. We bring the right lift equipment, hose lengths, and portable water supply to handle jobs well outside city utility service.",
        icon: "MapPin",
      },
      {
        title: "Respect for Granville's Historic Fabric",
        description:
          "Granville's downtown and the lanes around Denison University include some of the most carefully maintained Federal and Greek Revival architecture in Ohio. We match period color palettes, preserve original trim profiles, and never sand-blast historic wood when a gentler approach will do.",
        icon: "Star",
      },
      {
        title: "Lakefront and Waterfront Experience",
        description:
          "Buckeye Lake cottages, boathouses, and docks need coatings engineered for constant UV exposure and reflected moisture. We specify marine-grade stains and mildew-resistant exterior paints that actually last through a central Ohio lake season.",
        icon: "Users",
      },
    ],
    popularServices: ["exterior-painting", "power-washing", "wood-staining", "masonry-painting", "fence-painting", "house-painting"],
    faqs: [
      {
        question: "Do you stain barns and agricultural outbuildings in Licking County?",
        answer:
          "Barn staining is one of the most common services we perform in Utica, Alexandria, and the rural stretches around Johnstown. We use semi-transparent and solid oil-based stains designed for rough-sawn and weathered wood, and we coordinate around livestock schedules and planting seasons when needed.",
      },
      {
        question: "Can you power wash and paint lake cottages at Buckeye Lake?",
        answer:
          "Yes. Buckeye Lake properties are a regular part of our route, and we handle everything from seasonal power washing of docks, decks, and composite siding to full exterior repaints on older lake cottages. Our crews bring pumps sized for shoreline access when needed.",
      },
      {
        question: "Are you familiar with Granville's historic district guidelines?",
        answer:
          "We've worked on multiple homes near Broadway and the Denison campus and are comfortable coordinating with the Granville Planning Commission where color approvals are required. We bring physical paint samples to the property so homeowners can see options in natural light before any application.",
      },
      {
        question: "Do you paint brick and masonry in Newark's historic core?",
        answer:
          "Absolutely. Newark's downtown and the streets around The Works and the Earthworks include plenty of nineteenth-century masonry that benefits from breathable mineral-silicate coatings rather than standard acrylics. We assess the brick condition first and specify a product that won't trap moisture behind the surface.",
      },
      {
        question: "How do you handle very large fence-painting projects on acreage?",
        answer:
          "Multi-hundred-foot board fences and paddock rails are routine for us. We bring airless sprayers with extended hose runs, mask adjacent landscaping, and can schedule the work across multiple days to minimize disruption to animals or property access.",
      },
    ],
    description: "Painting, staining, and power washing throughout Licking County, OH, from Newark and Granville to Buckeye Lake and rural acreage.",
  },
  {
    slug: "fairfield-county-oh",
    name: "Fairfield County",
    type: "county",
    state: "OH",
    population: "~160,000",
    metaTitle: "Painting & Power Washing in Fairfield County, OH",
    metaDescription: "Scott's Painting is based in Pickerington, OH. Trusted painting and power washing throughout Fairfield County. 25+ years local. Call (614) 809-9730.",
    h1: "Your Local Painting & Power Washing Team in Fairfield County, OH",
    heroImageKey: "service-13-hero",
    intro: [
      "Fairfield County is home for us. Scott's Painting and Power Washing has been based in Pickerington for more than twenty-five years, and almost every member of our crew has lived, raised kids, or built a house somewhere between Lancaster and Baltimore. When we write estimates here, we're writing them for neighbors. That changes how we talk about scope, how we price jobs, and how seriously we take the callback twelve months later when somebody needs a spot touched up on a trim board. If a county entry on this site should feel personal, this is the one.",
      "The county's population of roughly 160,000 is split across a genuinely mixed landscape. We've got the historic fabric of downtown Lancaster around Square 13 and the Sherman House neighborhoods, the fast-growing subdivisions north of Pickerington filling in along Refugee Road and Diley, and the rural acreage around Baltimore, Carroll, Lithopolis, Amanda, Millersport, Pleasantville, and Stoutsville where homes still sit on five or ten acres with hand-built barns in the back forty. Each of those sub-regions has its own expectations, its own weather exposure, and its own aesthetic preferences, and we tailor our work accordingly.",
      "Housing stock here runs the full spectrum. In Lancaster we paint cast-iron columned Greek Revivals, Queen Anne Victorians, and hand-laid brick Italianates where period color research actually matters. In Pickerington we repaint builder-grade exteriors in Autumn Hills, Central College, and Hickory Hills that are hitting the fifteen- to twenty-year mark and need real prep before the next coat goes on. Out in Carroll and Amanda we stain fences, seal decks, and refresh the siding on farmhouses that have been in the same family for generations. We do not use one playbook for Fairfield County. We use the right one for your house.",
      "Because Pickerington is our home base, our response time here is better than anywhere else we work. Our showroom, shop, and spray booth are all inside the county line. If you call on a Tuesday morning, there's a good chance we can have an estimator at your door by Wednesday. And because so many of our past clients live within ten minutes of us, we take a lot of pride in the fact that our name keeps coming up at neighborhood gatherings, church events, and the Pickerington Violet Festival. We built this business on word-of-mouth right here in Fairfield County, and we work hard to keep it that way.",
    ],
    includedCities: [
      "Lancaster",
      "Pickerington",
      "Canal Winchester",
      "Baltimore",
      "Carroll",
      "Lithopolis",
      "Amanda",
      "Millersport",
      "Pleasantville",
      "Stoutsville",
    ],
    landmarks: [
      "Square 13 Lancaster",
      "Standing Stone / Mt. Pleasant",
      "Rising Park",
      "Anchor Hocking Glass",
      "Sherman House Museum",
      "Pickerington Ponds Metro Park",
    ],
    climateNotes:
      "Fairfield County's southern edge sits close enough to Hocking Hills that humidity drifting up from the forested gorges measurably extends paint cure times compared to our Franklin County jobs just thirty minutes north. That matters when we're scheduling exterior work in late spring and early fall, and it's one of the reasons our estimators bring a hygrometer on walk-throughs. Forested lots around Lancaster and the southern townships also mean heavier algae and mildew growth on north and east walls, which we address with soft-wash power washing before any primer is applied. Historic Lancaster homes near Main Street often need period-appropriate palettes coordinated with the city's historic preservation guidance, and the newer Pickerington subdivisions like Meadows at Sycamore Creek and Bryn Mawr have HOAs with firm exterior color palettes that we work within on every job.",
    whyChooseUs: [
      {
        title: "We Live Here and It Shows",
        description:
          "Our shop is in Pickerington, our trucks park here overnight, and our estimators drive these roads on the weekend. That means faster response times, easier in-person consultations, and genuine accountability. If something isn't right, we're ten minutes away, not ninety.",
        icon: "Shield",
      },
      {
        title: "Deep Knowledge of Local HOAs and Historic Rules",
        description:
          "We know which Pickerington subdivisions require pre-approved color submissions, which Lancaster blocks fall under historic review, and which Canal Winchester neighborhoods have their own covenants. We handle the paperwork so you don't have to chase it down.",
        icon: "MapPin",
      },
      {
        title: "A Track Record Your Neighbors Can Vouch For",
        description:
          "We've painted so many homes in Autumn Hills, Central College, and the streets around Rising Park that most project references are literally within walking distance of your front door. Ask around. We've been here long enough that most people have a neighbor who can speak to our work.",
        icon: "Star",
      },
      {
        title: "Personal Service From Estimate to Punch List",
        description:
          "Scott himself still walks many of the Fairfield County jobs, especially the Lancaster historic work and the larger rural projects in Amanda and Baltimore. You're not getting a call center. You're getting the person whose name is on the truck.",
        icon: "Users",
      },
    ],
    popularServices: ["interior-painting", "exterior-painting", "cabinet-painting", "power-washing", "house-painting", "deck-staining"],
    faqs: [
      {
        question: "Where exactly is Scott's Painting located in Fairfield County?",
        answer:
          "Our base of operations is in Pickerington, and we've been headquartered here for more than twenty-five years. Our shop handles cabinet spraying and material staging, and our crews dispatch from Pickerington every morning to jobs throughout Fairfield County and the surrounding area.",
      },
      {
        question: "Do you paint historic homes in downtown Lancaster?",
        answer:
          "Yes, Lancaster historic work is one of our specialties. The stretch from Square 13 out through the Sherman House neighborhoods includes some of the most significant nineteenth-century architecture in central Ohio, and we approach those projects with careful prep, period-appropriate palette research, and products that respect the original materials.",
      },
      {
        question: "Can you work within Pickerington HOA color requirements?",
        answer:
          "Absolutely. We're familiar with the covenants across Autumn Hills, Central College Crossing, Hickory Hills, Meadows at Sycamore Creek, and most other Pickerington HOAs. We submit the required color chips, wait for written approval, and keep copies on file so there's no dispute at final inspection.",
      },
      {
        question: "Do you stain decks and fences out in rural Fairfield County?",
        answer:
          "Deck staining and fence painting in Baltimore, Carroll, Amanda, Lithopolis, and the rural townships are regular summer work for us. We use penetrating oil and hybrid stains that hold up to full-sun exposure on open-lot properties, and we can handle long board-fence runs without issue.",
      },
      {
        question: "How fast can you get an estimator to my house?",
        answer:
          "Because we're based in Pickerington, most Fairfield County estimates happen within two to three business days of your initial call, and often faster during the off-peak months from November through February. Just call (614) 809-9730 and we'll find a window that works for your schedule.",
      },
    ],
    description: "Scott's Painting is based in Pickerington, OH, and has served Fairfield County with painting and power washing for more than 25 years.",
  },
];
