/*
  Single source of truth for all company content.
  Everything here is taken from the Apparel Fastener Group company profile.
*/

// encodeURI leaves "+" alone, but the static file server reads it as a space.
const asset = (path) => encodeURI(path).replace(/\+/g, "%2B");

export const siteUrl = "https://apparelfastener.com";

/* =========================================================
   COMPANY
   ========================================================= */

export const company = {
  name: "Apparel Fastener Group",
  shortName: "AF Group",
  tagline:
    "We pioneer excellence in maintaining quality, sustainability, and expert knowledge.",
  experienceYears: 15,
  email: "info@afgroup.com.hk",
  website: "www.afgroup.com.hk",
  messaging: {
    label: "WhatsApp / WeChat",
    display: "+852 9850 9479",
    tel: "+85298509479",
    whatsapp: "https://wa.me/85298509479",
  },
  groupName: "AF Group of Companies",
  companies: [
    "Apparel Fastener HK Limited",
    "Shire Limited",
    "Crest Alliance Enterprises (Pvt) Limited",
  ],
  regions: ["Hong Kong", "China", "Pakistan"],
  markets: ["Europe", "USA"],
};

export const offices = [
  {
    id: "hong-kong",
    city: "Hong Kong",
    country: "Hong Kong",
    label: "Hong Kong Office",
    address: [
      "Rm 701–702, Fu Fai Commercial Centre",
      "27 Hillier Street",
      "Sheung Wan, Hong Kong",
    ],
    phone: "+852 3521 2888",
    tel: "+85235212888",
  },
  {
    id: "china",
    city: "Guangzhou",
    country: "China",
    label: "China Office",
    address: [
      "Rm C214–C215, Poly International Plaza, West Building",
      "686 Yuejiang Middle Road, Haizhu District",
      "Guangzhou, China",
    ],
    phone: "+86 20 8963 7634",
    tel: "+862089637634",
  },
  {
    id: "pakistan",
    city: "Lahore",
    country: "Pakistan",
    label: "Pakistan Office",
    address: ["58-CCA, DHA Phase V", "Lahore, Pakistan"],
    phone: "+92 423 455 0205",
    tel: "+924234550205",
  },
];

export const navigation = [
  { label: "About", href: "/about" },
  { label: "Garments", href: "/garments" },
  { label: "Fabrics", href: "/fabrics" },
  { label: "Accessories", href: "/garment-accessories" },
  { label: "Quality", href: "/quality" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Contact", href: "/contact" },
];

/* =========================================================
   STORY
   ========================================================= */

export const whoWeAre =
  "Offering brilliance in quality, AF Group is one of the leading manufacturers of fabrics, garment accessories, and garments in China. We strive to execute the highest standards with each passing year and provide value to our business relationships. By offering fabrics, garment accessories, and garments, our team anticipates seamless integration and globalization. In order to achieve success in our work towards a sustainable environment, we strive for excellence in everything we do.";

export const aboutUs = [
  "The Group is a privately owned family business based in China. With a wealth of prime quality, we have set the bar high. It is a masterly unification of three mainstream companies in Asia — Hong Kong, China, and Pakistan. Showcasing passion and commitment is what allows us to achieve sustainability, exceptional quality, and in-depth knowledge for our clients.",
  "We bring the comfort of expertise and reliability to your business with more than 15 years of experience in the textile and apparel industry, selling on a global level. Our group is an integrated masterpiece renowned for its outstanding workmanship in fabrics, garment accessories, and garments.",
  "The will to be committed to the growth of our manufacturing partnerships and linkages has enabled us to represent excellence in our operations. Through the quality of our products and resources, the group is determined to create unmatched value for our global clientele.",
];

export const vision =
  "Since the foundation of our company, we have aimed to focus all of our knowledge on better quality — competing with the best of industry standards. We aim to maintain high standards for our customers by using our innovative and service-oriented capacity, pliable enough to manufacture a vast range of products.";

export const mission =
  "We invest time and resources not only in providing excellent fabrics, garment accessories, and garments, but also in improving processes, people, and products. This is why we are consistently improving our relationships in regions such as Europe and the USA — relationships that will surely last a lifetime.";

/* =========================================================
   DIVISIONS — "Our Core Classifications"
   ========================================================= */

export const divisions = [
  {
    id: "garments",
    title: "Garments",
    share: 40,
    href: "/garments",
    summary:
      "Jackets and sweaters, co-created with the best in the industry — from laying out and dyeing through stitching, checking, and packaging.",
    image: asset("/home/10 finished garments.webp"),
    imageAlt: "Racks of finished jackets in a garment facility",
  },
  {
    id: "fabrics",
    title: "Fabrics",
    share: 30,
    href: "/fabrics",
    summary:
      "Sustainable, woven, knitted, and denim fabrics for a wide range of applications, from clothing to technical purposes.",
    image: asset("/home/04 — Fabric Rolls.webp"),
    imageAlt: "Shelves stocked with rolls of fabric",
  },
  {
    id: "garment-accessories",
    title: "Garment Accessories",
    share: 30,
    href: "/garment-accessories",
    summary:
      "Your one-stop shop for zippers, buttons, tapes, trims, tags, and packaging — with you from production until distribution.",
    image: asset("/home/11 — Apparel Accessories.webp"),
    imageAlt: "Zippers, buckles, buttons and trims laid out on a workbench",
  },
];

/* =========================================================
   CORE VALUES
   ========================================================= */

export const valuesIntro =
  "The actions and primary functions at AF Group are based on the following values.";

export const values = [
  {
    icon: "knowledge",
    title: "Knowledge",
    text: "Bringing forward the best of standards with the willpower to encourage continuous learning and growth. We bring forward a reservoir of knowledge through years of competence and the drive to consistently evolve within our niche.",
  },
  {
    icon: "intelligence",
    title: "Intelligence",
    text: "In today's competitive market, business intelligence continues to be an area of investment and interest. The ability to turn raw materials into meaningful and useful fabrics, garments, and garment accessories can impact business performance — a powerful value proposition.",
  },
  {
    icon: "integrity",
    title: "Integrity",
    text: "Operating from a place of integrity, we hold ourselves accountable to honest, excellent work — always. We earn the repute of an honest enterprise that promises to work ethically and legally.",
  },
  {
    icon: "ethics",
    title: "Business Ethics",
    text: "We represent the best business policies and practices regarding corporate social responsibility and linkages. Everybody is equally respected and valued. We promote respect, responsiveness, and equity for every individual.",
  },
  {
    icon: "networking",
    title: "Networking",
    text: "We exchange and respect information on challenges, experiences, and goals to gain constantly evolving perspectives and insights.",
  },
  {
    icon: "responsibility",
    title: "Responsibility",
    text: "We believe in exercising the highest levels of professionalism in our work and are committed to continuous improvement in our pursuit of excellence.",
  },
];

/* =========================================================
   TEAM — "Meet the team in action"
   ========================================================= */

export const departmentsIntro =
  "Our departments are formed based on the responsibilities each team must accomplish, which is crucial for seamless operations.";

export const departments = [
  {
    title: "Research, Design & Development",
    text: "Research, Design, and Development are responsible for product development. Our dynamic team focuses on designing, developing, and implementing new products and designs. The department stays up to date with the latest trends on a seasonal basis as part of our Client Engagement strategy — and as a result of their proactive efforts, showcases excellent creative and innovative designs.",
    image: asset("/home/21 — Design Studio.webp"),
    imageAlt: "Design team reviewing garments and fabric swatches in a studio",
  },
  {
    title: "Merchandising",
    text: "The merchandising department consists of experienced senior and junior merchants, each assigned accounts of our international and local clientele. Merchandising activities such as production planning and execution are a direct focus of the department. Our specialized team bridges the gap between industry and our organization, which leads to greater profitability.",
    image: asset("/home/20 — Material Research2.webp"),
    imageAlt: "Merchandisers reviewing materials and samples at a work table",
  },
  {
    title: "Quality Assurance",
    text: "As a combination of art and technology, design and manufacturing place a high value on quality. Reliability in manufacturing encompasses both process and product. Our team utilizes an extensive quality management system called ENSURE200, with a primary focus on defining and optimizing procedures to reduce waste. Enhanced sustainability and consistent results are key to a viable future.",
    image: asset("/home/15 — Quality Control.webp"),
    imageAlt: "Quality assurance team inspecting a garment",
  },
];

/* =========================================================
   STRENGTHS
   ========================================================= */

export const strengthsIntro =
  "The efficiency of the process from development to manufacturing depends on the precision of technology and technique.";

export const strengths = [
  {
    title: "Manufacturing in China",
    text: "China is the largest fabric and garment manufacturer in the world. Holding that position for two decades, manufacturing in China relies on effective supply chain management, modern infrastructure, and the availability of raw materials. Workforce productivity is high, resulting in a higher output of production.",
  },
  {
    title: "Organized Supply Chain Operations",
    text: "We have achieved trouble-free performance by increasing productivity, improving coordination between departments, reducing lead times, and increasing profits. Improving supply chain operations is our top priority — and through supply chain diversification, our team understands clientele expectations and navigates any challenge.",
  },
  {
    title: "We Bring Value",
    text: "Paramount to success is being a game-changer. We bring value by manufacturing prized products in terms of quality and durability. In an increasingly sustainable and socially responsible era, environmentally friendly materials and processes are an important part of our mission — and our team gives utmost importance to customer service.",
  },
  {
    title: "One-stop Solution",
    text: "Our expertise spans three divisions, each with high production rates and dedicated quality control. Our specialized experts are proficient in manufacturing fabrics, garment accessories, and garments. A single enterprise with multiple manufacturing hubs provides everything you need — eliminating the hassle of dealing with multiple companies.",
  },
  {
    title: "Highly Accountable",
    text: "We represent adherence to process and procedure, which is critical for driving improvements in safety, quality, and efficiency.",
  },
  {
    title: "Power Efficiency",
    text: "By performing periodic maintenance and concluding preventative measures, power consumption can be substantially reduced. We also strive to reduce water consumption as well as toxic emissions.",
  },
];

/* =========================================================
   PRODUCTION CYCLE
   ========================================================= */

export const productionCycle = [
  {
    title: "Design",
    text: "Offering interesting products, backed by accurate manufacturing facilities.",
    image: asset("/home/21 — Design Studio.webp"),
    imageAlt: "Designers working with garments and patterns in a studio",
  },
  {
    title: "Production",
    text: "For a successful production process, we keep track of every milestone — from fabric production to manipulation and garment implementation — so all activities commence in a timely manner, in a controlled environment, with quality assurance.",
    image: asset("/home/07 — Garment Assembly.webp"),
    imageAlt: "Garment assembly line with operators at sewing machines",
  },
  {
    title: "Manufacturing Process",
    text: "The most optimal manufacturing technology is found at our facilities, which range in size and specialty. Our manufacturing units are fully integrated, resulting in outstanding finished products and a diverse client base across the globe. From procurement to grading and beyond, every stage is highly supervised.",
    image: asset("/home/25 — Machinery.webp"),
    imageAlt: "Industrial machinery on a manufacturing floor",
  },
  {
    title: "Quality Control",
    text: "To ensure every product is superior to industry standards in terms of quality, a series of predefined principles are followed and implemented — making sure the product meets the specifications demanded by our clientele.",
    image: asset("/home/16 — Measurement.webp"),
    imageAlt: "Inspector measuring a tailored jacket on a dress form",
  },
];

/* =========================================================
   GARMENTS
   ========================================================= */

export const garmentsIntro = [
  "We co-create with the best in the industry to fabricate jackets and sweaters. Raw materials are converted into finished products through a sequence of carefully controlled processes.",
  "Whether you are looking for a timeless style or a trending color with artisan details, our design team curates according to your needs. We are committed to executing nothing but sheer brilliance.",
];

export const garmentProcess = [
  "Laying out",
  "Dyeing",
  "Marking",
  "Cutting",
  "Stitching",
  "Checking",
  "Packaging",
];

export const garmentCategories = [
  {
    id: "jackets",
    title: "Jackets",
    items: [
      { name: "Bomber Jackets", image: asset("/garments/bomber jacket.webp") },
      { name: "Woolen Jackets", image: asset("/garments/woolen-jacket.webp") },
      { name: "Trench Jackets", image: asset("/garments/trench jacket 2.webp") },
      { name: "Puffy Jackets", image: asset("/garments/puffy jacket.webp") },
      { name: "Pull Over Jackets", image: asset("/garments/EXP54LWP-CNRD.webp") },
      { name: "Hooded Jackets", image: asset("/garments/hooded jacket .webp") },
    ],
  },
  {
    id: "sweaters",
    title: "Sweaters",
    items: [
      { name: "Fisherman's Sweater", image: asset("/garments/fisher man sweater.webp") },
      { name: "Cardigans", image: asset("/garments/cardigan.webp") },
      { name: "Cashmere Sweater", image: asset("/garments/cash mere sweaters.webp") },
      { name: "Chunky Sweater", image: asset("/garments/chunky sweaters.webp") },
      { name: "Crew Neck Sweater", image: asset("/garments/Crew Neck Sweater.webp") },
      { name: "Funnel Neck Sweater", image: asset("/garments/Funnel Neck Sweater.webp") },
    ],
  },
];

/* =========================================================
   FABRICS
   ========================================================= */

export const fabricsIntro =
  "Raw material, machinery, and the process used in each of these methods can be used to manufacture a great number of fabric structures. These fabrics are used for a wide range of applications, from clothing to technical purposes.";

export const fabricCollections = [
  {
    id: "sustainable",
    title: "Sustainable Fabrics",
    text: "Sustainable fabrics are manufactured from eco-friendly resources like natural fibers and recycled materials.",
    image: asset("/home/24 — Hands + Fabric.webp"),
    imageAlt: "Hands feeling the texture of a woven wool fabric",
    items: [
      "Organic Cotton",
      "Recycled Cotton",
      "Organic Hemp",
      "Organic Linen",
      "Organic Bamboo (Bamboo Linen)",
      "Lyocell",
      "Modal",
      "Ramie",
      "Bamboo Lyocell",
      "EcoVero",
      "ECONYL",
      "Recycled Polyester",
      "Organic Wool",
      "Merino Wool",
      "Cashmere",
      "Organic Jute",
      "Tencel",
      "Organic Silk",
      "Recyclable PET Fabric",
      "Polylactic Acid Fabric (PLA)",
    ],
  },
  {
    id: "woven",
    title: "Woven Fabrics",
    text: "From fine cambric and chiffon to canvas, corduroy, and gabardine — we manufacture a broad range of woven constructions.",
    image: asset("/home/08 — Technical Fabric Macro.webp"),
    imageAlt: "Macro view of a tightly woven fabric",
    items: [
      "Cambric",
      "Chiffon",
      "Crepe",
      "Denim",
      "Flannel",
      "Sateen",
      "Lawn",
      "Muslin",
      "Organdy",
      "Jacquard",
      "Khadi",
      "Georgette",
      "Taffeta",
      "Velvet",
      "Mesh",
      "Drill",
      "Cashmere",
      "Clip Jacquard",
      "Canvas",
      "Chenille",
      "Damask",
      "Cotton",
      "Lace",
      "Gingham",
      "Leather",
      "Linen",
      "Organza",
      "Toile",
      "Twill",
      "Corduroy",
      "Casement",
      "Cheese",
      "Chintz",
      "Gabardine",
      "Poplin",
      "Sheeting",
      "Tissue",
      "Silk",
    ],
  },
  {
    id: "knitted",
    title: "Knitted Fabrics",
    text: "Jersey, rib, interlock, fleece, and technical knits — structures developed for comfort, stretch, and warmth.",
    image: asset("/garments/Funnel Neck Sweater.webp"),
    imageAlt: "Close view of a ribbed knitted sweater",
    items: [
      "Single Jersey",
      "Double Jersey",
      "Burnout Jersey",
      "Rib",
      "Interlock",
      "Pique",
      "Lacoste",
      "Fleece",
      "Spandex",
      "Merino Wool",
      "Velvet",
      "Scuba Knit",
      "Ruffle Knit",
      "Tricot",
      "Thermal",
    ],
  },
  {
    id: "denim",
    title: "Denim",
    text: "Raw, selvedge, washed, and stretch — denim in a full range of weights, colors, and finishes.",
    image: asset("/garments/denim-jacket.webp"),
    imageAlt: "Indigo denim jacket",
    items: [
      "Raw Denim",
      "Sanforized Denim",
      "Colored Denim",
      "Selvedge Denim",
      "Lightweight Denim",
      "Crushed Denim",
      "Waxed Reverse Denim",
      "Polycore Denim",
      "Washed Denim",
      "Poly Denim",
      "Ecru Denim",
      "Double Dyed Denim",
      "Thermo Denim",
      "Slub Denim",
      "Stretch Denim",
    ],
  },
];

/* =========================================================
   GARMENT ACCESSORIES
   ========================================================= */

export const accessoriesIntro = [
  "We are your one-stop shop for garment accessories. A garment accessory serves various functions for the garment itself — and apart from the decorative gains, garment accessories are a vital part of the production of the garment.",
  "We walk with our clients through the journey of production until distribution.",
];

export const accessoryFunctions = [
  "Versatility",
  "Durability",
  "Flexibility",
  "Wearability",
];

export const accessoryGroups = [
  {
    title: "Closures & Fastenings",
    items: ["Zipper", "Buttons", "Velcro", "Toggles", "Rivet"],
    image: asset("/home/12 — Zipper Macro.webp"),
    imageAlt: "Macro view of a metal zipper slider on dark fabric",
  },
  {
    title: "Tapes, Cords & Elastics",
    items: [
      "Elastic",
      "Elastic Tape",
      "Cord",
      "Ribbons",
      "Buttonhole Tape",
      "Welted Tape",
    ],
    image: asset("/home/14 — Trims.webp"),
    imageAlt: "Rolls of elastic, webbing and ribbon trims",
  },
  {
    title: "Interlining & Embellishment",
    items: ["Interlining", "Motif", "Fringes", "Tassels"],
    image: asset("/home/14 — Trims2.webp"),
    imageAlt: "Assorted trims, buckles and woven tapes",
  },
  {
    title: "Branding & Packaging",
    items: ["Hang Tag", "Polybag"],
    image: asset("/home/27  Finished Production.webp"),
    imageAlt: "Packed cartons and finished garments ready for dispatch",
  },
];

/* =========================================================
   SUSTAINABILITY
   ========================================================= */

export const sustainabilityIntro =
  "As a complex global enterprise, we work to continually develop our environmental sustainability efforts. To mitigate our effect on our surroundings, we focus our efforts on three areas.";

export const sustainabilityFocus = [
  {
    title: "Climate & Energy",
    text: "Incorporating renewable and sustainable energy, and reducing power consumption through periodic maintenance and preventative measures.",
  },
  {
    title: "Waste Control Management",
    text: "Eliminating waste where feasible, and maximizing the reuse and recycling of materials across our manufacturing units and workplaces.",
  },
  {
    title: "Reliable Management of Core Processes",
    text: "Controlling chemical substances and reducing water consumption and toxic emissions throughout production.",
  },
];

export const sustainabilityAims = [
  "Incorporate renewable and sustainable energy in our operations.",
  "Produce and promote sustainable fabrics, garment accessories, and garments.",
  "Eliminate waste where feasible, and maximize the reuse and recycling of materials utilized in our manufacturing units and corporate places of work.",
  "As we manufacture product packaging, discover greater opportunities to procure materials with sustainable attributes.",
  "Make chemical substance control a key element of our responsible global initiative.",
  "Use environmentally friendly measures that minimize our carbon footprint and contribute to less pollution, water, and energy waste.",
];

/* =========================================================
   CERTIFICATIONS & STANDARDS
   ========================================================= */

export const certifications = [
  { name: "ISO", detail: "International standards" },
  { name: "SGS", detail: "System certification" },
  { name: "TÜV SÜD", detail: "Testing & certification" },
  { name: "OEKO-TEX®", detail: "Standard 100 — tested for harmful substances" },
  { name: "GOTS", detail: "Global Organic Textile Standard" },
  { name: "GRS", detail: "Global Recycled Standard" },
  { name: "Intertek", detail: "Assurance, testing & inspection" },
  { name: "BSCI", detail: "Business Social Compliance Initiative" },
];

/* =========================================================
   CLIENTS
   ========================================================= */

const clientNames = [
  "Outfitters",
  "Kayseria",
  "Leisure Club",
  "Lulusar",
  "Uniworth",
  "Ideas",
  "Pull&Bear",
  "Olympia",
  "Primark",
  "Shima",
  "Merlin Entertainments",
  "Bershka",
  "Rusty Pistons",
  "Zara",
  "Trilobite",
  "The All-in-One Company",
  "Xi Eleven",
  "Choke Shirt Co.",
  "DMP",
  "KiK",
  "Mango",
  "BOSS",
  "H&M",
];

// Logos drawn in white need a dark tile to stay visible.
const lightLogos = new Set(["Merlin Entertainments"]);

export const clients = clientNames.map((name, index) => ({
  name,
  logo: asset(`/our clients/1.-${String(index + 1).padStart(2, "0")}.svg`),
  onDark: lightLogos.has(name),
}));

/* =========================================================
   IMAGES SHARED ACROSS PAGES
   ========================================================= */

export const images = {
  homeHero: asset("/home/01 — Hero Factory.webp"),
  productionFloor: asset("/home/02 — Garment Production Floor.webp"),
  aboutHero: asset("/home/22 — Factory Architecture.webp"),
  garmentsHero: asset("/garments/collection.webp"),
  garmentsCatalogue: asset("/garments/catalogue.webp"),
  fabricsHero: asset("/home/19 — Fabric Texture Wall.webp"),
  accessoriesHero: asset("/home/13 — Slider Macro.webp"),
  qualityHero: asset("/home/15 — Quality Control.webp"),
  sustainabilityHero: asset("/home/24 — Hands + Fabric.webp"),
  contactHero: asset("/home/26 — Global Apparel.webp"),
  cutting: asset("/home/06 — Cutting.webp"),
  sewing: asset("/garments/sewing.webp"),
  fabricInspection: asset("/home/05 — Fabric Inspection.webp"),
  materialResearch: asset("/home/20 — Material Research.webp"),
  finishedProduction: asset("/home/27 —  Finished Production2.webp"),
  globalNetwork: asset("/home/26 — Global Apparel2.webp"),
  workerPortrait: asset("/home/23 — Worker Portrait.webp"),
  closingFactory: asset("/home/28 — Closing Hero Factory.webp"),
};
