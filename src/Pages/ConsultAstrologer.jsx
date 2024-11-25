// import React from 'react'
// import ConsultAstroHero from '../components/ConsultAstroHero'
// import AstroCard from '../components/AstroCard'
// const ConsultAstrologer = () => {
//   return (
//     <>
//       <ConsultAstroHero />
//       <AstroCard />
//     </>
//   )
// }

// export default ConsultAstrologer
import React from "react";
import AstroCard from "../components/AstroCard";
import { manoj, pramukh, rudrakh } from "../assets"; // Replace with actual paths

const astrologers = [
  {
    avatar: manoj,
    name: "Sri. Manoj Sastri",
    expertise: "Vedic, Numerology",
    languages: "Beng., Eng., Hindi",
    experience: "8 Years",
    rate: "₹ 21/min",
    description:
      "Sri. Manoj Sastri is a renowned astrologer with 8 years of expertise in Vedic astrology and numerology.",
    rating: 5,
    chatLink: "https://t.ly/cMnKn",
    phone: "+91 8240060110",
  },
  {
    avatar: pramukh,
    name: "Pramukh Sastri",
    expertise: "Vastu, Vedic",
    languages: "Beng., Eng., Hindi",
    experience: "7 Years",
    rate: "₹ 31/min",
    description:
      "Pramukh Sastri is an expert in Vastu Shastra and Vedic astrology with over 7 years of experience.",
    rating: 4.5,
    chatLink: "https://wa.me/qr/L4VRGA5WDFCZC1",
    phone: "+91 7001492922",
  },
  {
    avatar: rudrakh,
    name: "Sri. Rudraksh Sastri",
    expertise: "Life Coach, Numerology",
    languages: "Beng., Eng., Hindi",
    experience: "6 Years",
    rate: "₹ 17/min",
    description:
      "Sri. Rudraksh Sastri is a life coach and numerology expert helping individuals achieve clarity in life.",
    rating: 4,
    chatLink: "https://example-chat-url.com/rudrakh",
    phone: "+1122334455",
  },
];

const ConsultAstrologer = () => {
  return (
  <AstroCard astrologers={astrologers} />);
};

export default ConsultAstrologer;
