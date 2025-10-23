import { useParams, useNavigate } from "react-router-dom";
import { Card, CardHeader, CardContent, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { useLanguage } from "../LanguageContext";
import { Home, Building, Warehouse, Wrench, PaintBucket, Hammer } from "lucide-react";

import constructionImg from "./images/Construction.jpg";
import electricalImg from "./images/Electrical Works.jpg";
import plumbingImg from "./images/Plumbing Works.jpg";
import fireImg from "./images/Fire & Early Warning Systems.jpg";
import plasteringImg from "./images/Plastering & Finishes.jpg";
import maintenanceImg from "./images/Support & Maintenance.jpg";



export default function ServicesDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const details = [
    {
      title: "Construction",
      desc: "A core pillar since inception with cross-discipline integration between electrical and mechanical teams to reduce clashes, accelerate delivery, and assure quality.",
      features: [
        "Cross-discipline integration between teams",
        "Clash reduction & coordination",
        "Accelerated project delivery",
        "Top-quality assurance",
      ],
      icon: Home,
      image: constructionImg,
    },
    {
      title: "Electrical Works",
      desc: "Main and sub cabling, underground/in-wall/ceiling installations, lighting and power systems, earthing, safety, and integration with mechanical systems.",
      features: [
        "Main & sub cabling systems",
        "Lighting and power infrastructure",
        "Safety & grounding systems",
        "Integration with mechanical works",
      ],
      icon: Building,
      image: electricalImg,
    },
    {
      title: "Plumbing Works",
      desc: "Potable water and drainage networks, ventilation and rain discharge, sanitary fixtures, and close coordination with electrical and HVAC for system integrity.",
      features: [
        "Water supply & drainage networks",
        "Ventilation and rain discharge",
        "Sanitary installations",
        "HVAC and electrical coordination",
      ],
      icon: Warehouse,
      image: plumbingImg,
    },
    {
      title: "Fire & Early Warning Systems",
      desc: "Integrated safety solutions including suppression and alarm systems applying NFPA and Saudi codes with Civil Defense integration.",
      features: [
        "Fire suppression systems",
        "Alarm panels & detectors",
        "NFPA & Saudi standards",
        "Civil Defense integration",
      ],
      icon: Wrench,
      image: fireImg,
    },
    {
      title: "Plastering & Finishes",
      desc: "From cement plastering to final finishing — paints, ceramics, gypsum, windows, insulation, and landscaping — done with precision and durability.",
      features: [
        "Cement plastering & alignment",
        "Interior & exterior finishes",
        "Paints, ceramics, gypsum works",
        "Windows, insulation, landscaping",
      ],
      icon: PaintBucket,
      image: plasteringImg,
    },
    {
      title: "Support & Maintenance",
      desc: "Technical support, preventive maintenance, and emergency repairs — ensuring continued functionality and client satisfaction.",
      features: [
        "Preventive maintenance",
        "Emergency repair response",
        "Scheduled servicing",
        "Post-delivery technical support",
      ],
      icon: Hammer,
      image: maintenanceImg,
    },
  ];

  const service = details[Number(id) - 1];
  if (!service)
    return <div className="text-center py-20 text-gray-500">Service not found.</div>;

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-8 sm:px-12 lg:px-20 xl:px-28">
        <p
          className="text-sm text-gray-500 mb-10 cursor-pointer hover:underline"
          onClick={() => navigate(-1)}
        >
          ← Back to Services
        </p>

        {/* ⚙️ الصورة والنص جنب بعض */}
        <div className="flex flex-col lg:flex-row items-center gap-20 bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* 🖼️ الصورة */}
          <div className="lg:w-1/2 w-full">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-[450px] object-cover object-center rounded-l-3xl"
            />
          </div>

          {/* 💬 النص */}
          <div className="lg:w-1/2 w-full px-12 py-12">
            <div className="flex items-center gap-5 mb-8">
              <service.icon className="h-12 w-12 text-[#2527A9]" />
              <h2 className="text-4xl font-bold">{service.title}</h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {service.desc}
            </p>

            <ul className="list-disc list-inside space-y-3 text-gray-700 mb-10 text-base">
              {service.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>

            <Button
              onClick={() => alert(`Request quote for ${service.title}`)}
              className="bg-[#2527A9] hover:bg-[#1e1f8a] text-white px-10 py-5 text-lg rounded-full shadow-md"
            >
              Request a Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}