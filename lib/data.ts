export const COLORS = {
  yellow:     "#D4AF37",
  yellowDim:  "#A8892A",
  red:        "#8B0000",
  redDark:    "#5C0000",
  black:      "#0A0A0A",
  dark:       "#111111",
  card:       "#181818",
  border:     "rgba(212,175,55,0.15)",
  borderHov:  "rgba(212,175,55,0.4)",
  borderRed:  "rgba(139,0,0,0.3)",
  text:       "#F0F0F0",
  muted:      "#888888",
  mutedLight: "#AAAAAA",
};

export const NAV_LINKS = [
  { href: "/",           label: "Home"       },
  { href: "/about",      label: "About"      },
  { href: "/facilities", label: "Facilities" },
  { href: "/membership", label: "Membership" },
  { href: "/trainers",   label: "Trainers"   },
  { href: "/reviews",    label: "Reviews"    },
  { href: "/contact",    label: "Contact"    },
];

export const FACILITIES = [
  { icon: "🏋️", title: "Powerlifting Platform", desc: "Calibrated plates, competition barbells, deadlift platforms built for serious lifting." },
  { icon: "🦾", title: "Strength Training",      desc: "Power racks, squat stands, specialty bars — everything a strength athlete needs." },
  { icon: "🚴", title: "Cardio Zone",            desc: "Assault bikes, rowers, ski ergs and treadmills for conditioning work." },
  { icon: "💪", title: "Functional Training",    desc: "Battle ropes, kettlebells, TRX and plyometric boxes." },
  { icon: "🥊", title: "Boxing Corner",          desc: "Heavy bags, speed bags and focus mitts for combat conditioning." },
  { icon: "👤", title: "Personal Training",      desc: "One-on-one coaching with certified strength & conditioning specialists." },
];

export const TRAINERS = [
  { name: "Head Coach",  role: "Strength & Conditioning",  exp: "8 Years", spec: "Powerlifting & Hypertrophy",   cert: "CSCS Certified",  icon: "🏋️" },
  { name: "Coach 2",     role: "Functional Fitness",       exp: "5 Years", spec: "Athletic Performance & Core",  cert: "NASM Certified",  icon: "⚡" },
  { name: "Coach 3",     role: "Nutrition & Programming",  exp: "6 Years", spec: "Body Recomposition & Diet",    cert: "ACE Certified",   icon: "🎯" },
];

export const PLANS = [
  {
    name: "Monthly", price: "₹2,500", period: "/month", popular: false,
    features: ["Unlimited gym access", "Locker facility", "Fitness assessment", "Basic nutrition guide"],
  },
  {
    name: "Quarterly", price: "₹6,500", period: "/3 months", popular: true,
    features: ["Everything in Monthly", "1 PT session / month", "Diet consultation", "Body composition tracking", "Priority rack access"],
  },
  {
    name: "Yearly", price: "₹18,000", period: "/year", popular: false,
    features: ["Everything in Quarterly", "4 PT sessions / month", "Custom program", "Nutrition coaching", "Progress tracking", "2× guest passes"],
  },
];

export const REVIEWS = [
  { name: "Arjun M",        avatar: "AM", stars: 5, text: "Best strength gym in Bangalore by far. The equipment quality is unmatched — calibrated plates, specialty bars, proper power racks. Serious lifting culture." },
  { name: "Priya S",        avatar: "PS", stars: 5, text: "I was intimidated at first but the coaches are so welcoming. My squat went up 30kg in 3 months. The programming here is on another level." },
  { name: "Rahul K",        avatar: "RK", stars: 5, text: "Finally a gym that takes strength training seriously. No cardio bunnies, just people who are here to get strong. The vibe is incredible." },
  { name: "Deepika R",      avatar: "DR", stars: 5, text: "The coaches know their stuff. Personalized programming, constant form checks, nutrition advice — this is what a real gym should be." },
  { name: "Vikram N",       avatar: "VN", stars: 5, text: "Clean, well-equipped, serious atmosphere. The community here pushes you to be better every single session. Worth every rupee." },
  { name: "Sneha T",        avatar: "ST", stars: 5, text: "Moved from a commercial gym and never looked back. The specialty equipment alone is worth it. Coaches are incredibly knowledgeable." },
];

export const STATS = [
  { value: 300,  suffix: "+",     label: "Active Members"    },
  { value: 3,    suffix: "",      label: "Expert Coaches"    },
  { value: 150,  suffix: "+",     label: "PRs Broken"        },
  { value: 5000, suffix: " sqft", label: "Training Space"    },
];