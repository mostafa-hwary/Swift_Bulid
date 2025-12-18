import { useParams, useNavigate } from "react-router-dom";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { useLanguage } from "../LanguageContext";
import { motion } from "framer-motion";
import "../../index.css";

/**
 * ResponsiveImg
 * - لا يفرض object-fit
 * - التحكم الكامل من خلال imgClass
 */
function ResponsiveImg({
  src,
  alt,
  wrapperClass = "aspect-[4/3]",
  imgClass = "",
  fallback,
}: {
  src: string;
  alt: string;
  wrapperClass?: string;
  imgClass?: string;
  fallback?: string;
}) {
  const fallbackImg =
    fallback || "https://via.placeholder.com/1600x1200.png?text=No+Image";

  const makeSrc = (url: string, w: number) => {
    if (!url) return url;
    if (url.includes("?")) {
      if (/([\?&])w=\d+/.test(url)) {
        return url.replace(/([\?&]w=)\d+/, `$1${w}`);
      }
      return `${url}&w=${w}&auto=format&fit=crop&q=80`;
    }
    return `${url}?w=${w}&auto=format&fit=crop&q=80`;
  };

  const supportsAutoSizing =
    /imgix|unsplash|cloudinary|akamaized|imgur|pixabay/i.test(src);

  const widths = [480, 768, 1024, 1366, 1600];
  const srcSet = supportsAutoSizing
    ? widths.map((w) => `${makeSrc(src, w)} ${w}w`).join(", ")
    : undefined;

  const defaultSrc = supportsAutoSizing ? makeSrc(src, 1200) : src || fallbackImg;

  return (
    <div className={`${wrapperClass} overflow-hidden bg-gray-100`}>
      <img
        src={defaultSrc}
        srcSet={srcSet}
        sizes="(max-width: 640px) 480px, (max-width: 1024px) 768px, 1200px"
        alt={alt}
        loading="lazy"
        onError={(e) => {
          if (e.currentTarget.src !== fallbackImg) {
            e.currentTarget.src = fallbackImg;
          }
        }}
        className={`w-full h-full object-center ${imgClass}`}
      />
    </div>
  );
}

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  const isArabic = language === "ar";

  const projects = [
    {
      id: 1,
      title: t("projects.luxury.title"),
      category:  t("projects.categoryResidential"),
      image:
        "https://6931a2ad06de332fac041a47.imgix.net/1-villa_300_riyadh_paramo_arquitectos.jpg",
      status: t("projects.completed"),
      year: "2024",
      overview: t("projects.luxury.overview"),
      scope: [
        t("projects.luxury.scope.architecture"),
        t("projects.luxury.scope.smart"),
        t("projects.luxury.scope.interior"),
        t("projects.luxury.scope.landscape"),
      ],
      challenges: t("projects.luxury.challenges"),
      results: t("projects.luxury.results"),
    },
    {
      id: 2,
      title: t("projects.categoryCommercial"),
      category:  t("projects.corporate.desc"),
      image:
        "https://6931a2ad06de332fac041a47.imgix.net/Corporate%20Headquarters.webp",
      status: t("projects.completed"),
      year: "2024",
      overview: t("projects.corporate.overview"),
      scope: [
        t("projects.corporate.scope.architecture"),
        t("projects.corporate.scope.smart"),
        t("projects.corporate.scope.interior"),
        t("projects.corporate.scope.landscape"),
      ],
      challenges: t("projects.corporate.challenges"),
      results: t("projects.corporate.results"),
    },
    {
      id: 3,
      title: t("projects.manufacturing.title"),
      category:  t("projects.categoryIndustrial"),
      image:
        "https://images.unsplash.com/photo-1684497404598-6e844dff9cde",
      status: t("projects.completed"),
      year: "2023",
      overview: t("projects.manufacturing.overview"),
      scope: [
        t("projects.manufacturing.scope.architecture"),
        t("projects.manufacturing.scope.smart"),
        t("projects.manufacturing.scope.interior"),
        t("projects.manufacturing.scope.landscape"),
      ],
      challenges: t("projects.manufacturing.challenges"),
      results: t("projects.manufacturing.results"),
    },

    // New projects (4 - 8)
    {
      id: 4,
      title: t("projects.benzaghr.title"),
      category: t("projects.categoryElectromechanical"),
      image: "https://6931a2ad06de332fac041a47.imgix.net/benzaghr.jpg",
      status: t("projects.completed"),
      year: "2024",
      overview: t("projects.benzaghr.overview"),
      scope: [
        t("projects.benzaghr.scope.PowerDistribution"),
        t("projects.benzaghr.scope.LightingSystems"),
        t("projects.benzaghr.scope.SafetyControl"),
        t("projects.benzaghr.scope.AuxiliaryInstallations"),
      ],
      challenges: t("projects.benzaghr.challenges"),
      results: t("projects.benzaghr.results"),
    },
    {
      id: 5,
      title: t("projects.ababitin.title"),
      category: t("projects.categoryElectromechanical"),
      image: "https://6931a2ad06de332fac041a47.imgix.net/ababitin.jpg",
      status: t("projects.completed"),
      year: "2024",
      overview: t("projects.ababitin.overview"),
      scope: [
        t("projects.ababitin.scope.CivilWorks"),
        t("projects.ababitin.scope.HighInteriorFinishing"),
        t("projects.ababitin.scope.ElectricalWorks"),
        t("projects.ababitin.scope.PlumbingWorks"),
        t("projects.ababitin.scope.ExteriorWorks"),
        t("projects.ababitin.scope.Safety&Compliance")
      ],
      challenges: t("projects.ababitin.challenges"),
      results: t("projects.ababitin.results"),
    },
    {
      id: 6,
      title: t("projects.shiblan.title"),
      category: t("projects.categoryElectromechanical"),
      image: "https://6931a2ad06de332fac041a47.imgix.net/shiblan.jpg",
      status: t("projects.inProgress"),
      year: "2025",
      overview: t("projects.shiblan.overview"),
      scope: [
        t("projects.shiblan.scope.mep"),
        t("projects.shiblan.scope.fire"),
        t("projects.shiblan.scope.energy"),
        t("projects.shiblan.scope.infra"),
        t("projects.shiblan.scope.maintenance"),
      ],
      challenges: t("projects.shiblan.challenges"),
      results: t("projects.shiblan.results"),
    },
    {
      id: 7,
      title: t("projects.hayatFinishes.title"),
      category: t("projects.categoryFinishing"),
      image: "https://6931a2ad06de332fac041a47.imgix.net/hayat-finishes.jpg",
      status: t("projects.completed"),
      year: "2024",
      overview: t("projects.hayatFinishes.overview"),
      scope: [
        t("projects.hayatFinishes.scope.PlasterWorks"),
        t("projects.hayatFinishes.scope.ElectricalWorks"),
        t("projects.hayatFinishes.scope.PlumbingWorks"),
        t("projects.hayatFinishes.scope.Finishing&Compliance"),
      ],
      challenges: t("projects.hayatFinishes.challenges"),
      results: t("projects.hayatFinishes.results"),
    },
    {
      id: 8,
      title: t("projects.rakahUnits.title"),
      category: t("projects.categoryElectroFinish"),
      image: "https://6931a2ad06de332fac041a47.imgix.net/rakah-units.jpg",
      status: t("projects.completed"),
      year: "2024",
      overview: t("projects.rakahUnits.overview"),
      scope: [
        t("projects.rakahUnits.scope.CivilWorks"),
        t("projects.rakahUnits.scope.HighInteriorFinishing"),
        t("projects.rakahUnits.scope.ElectricalWorks"),
        t("projects.rakahUnits.scope.PlumbingWorks"),
        t("projects.rakahUnits.scope.ExteriorWorks"),
        t("projects.rakahUnits.scope.Safety&Compliance"),
      ],
      challenges: t("projects.rakahUnits.challenges"),
      results: t("projects.rakahUnits.results"),
    },
        {
      id: 9,
      title: t("projects.DhahranTechnoValley.title"),
      category: t("projects.categoryElectroFinish"),
      image: "https://images.squarespace-cdn.com/content/68b42a6652beeb56115c1967/1756637809063-3TK6P9SIR1Z4908ZN1ZL/Asset+1.png?content-type=image%2Fpng",
      status: t("projects.completed"),
      year: "2024",
      overview: t("projects.DhahranTechnoValley.overview"),
      scope: [
        t("projects.DhahranTechnoValley.scope.StairHandrails"),
        t("projects.DhahranTechnoValley.scope.ElectricalGratings"),
        t("projects.DhahranTechnoValley.scope.MonkeyLadder"),
        t("projects.DhahranTechnoValley.scope.Finishing&Compliance"),
      ],
      challenges: t("projects.DhahranTechnoValley.challenges"),
      results: t("projects.DhahranTechnoValley.results"),
    },
      {
      id: 10,
      title: t("projects.Halliburton.title"),
      category: t("projects.categoryElectroFinish"),
      image: "https://cdn.brandfolder.io/3I2CY2XL/as/vkc5w586w5gtr898396p3w/halliburton-logo.svg",
      status: t("projects.completed"),
      year: "2024",
      overview: t("projects.Halliburton.overview"),
      scope: [
        t("projects.Halliburton.scope.SlidingGates"),
        t("projects.Halliburton.scope.PerimeterFence"),
        t("projects.Halliburton.scope.AccessStructures"),
        t("projects.Halliburton.scope.Doors"),
      ],
      challenges: t("projects.Halliburton.challenges"),
      results: t("projects.Halliburton.results"),
    },
      {
      id: 11,
      title: t("projects.Pepsico.title"),
      category: t("projects.categoryElectroFinish"),
      image: "https://digitalassets.pepsico.com/transform/fe5c5aad-b8cd-4dd5-a1b2-d79302ff1f1c/PepsiCo-Logo-header?w=2048&q=75 1x, https://digitalassets.pepsico.com/transform/fe5c5aad-b8cd-4dd5-a1b2-d79302ff1f1c/PepsiCo-Logo-header?w=3840&q=75 2x",
      status: t("projects.completed"),
      year: "2024",
      overview: t("projects.Pepsico.overview"),
      scope: [
        t("projects.Pepsico.scope.Doors"),
        t("projects.Pepsico.scope.MonkeyLadders"),
        t("projects.Pepsico.scope.Gates"),
        t("projects.Pepsico.scope.Turnstiles"),
        t("projects.Pepsico.scope.Finishing&Compliance"),
      ],
      challenges: t("projects.Pepsico.challenges"),
      results: t("projects.Pepsico.results"),
    },
  
  ];

 const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="container text-center py-20">
        <h2 className="text-2xl font-bold text-gray-600">
          {isArabic ? "المشروع غير موجود" : "Project not found"}
        </h2>
      </div>
    );
  }

  return (
    <section
      className={`bg-gray-50 min-h-screen pb-24 ${
        isArabic ? "font-[Cairo] text-right" : "text-left"
      }`}
    >
      {/* ===== HERO ===== */}
      <motion.div
        initial={{ opacity: 0, scale: 1.03 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full overflow-hidden"
      >
        <ResponsiveImg
          src={project.image}
          alt={project.title}
          wrapperClass="w-full aspect-[4/3]"
          imgClass="object-contain p-10"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-10 md:p-20 text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-3 mt-6">
            <Badge className="bg-[#2527A9] text-white">
              {project.category}
            </Badge>
            <Badge variant="outline" className="bg-white text-black">
              {project.year}
            </Badge>
            <Badge className="bg-green-600 text-white">
              {project.status}
            </Badge>
          </div>
        </div>
      </motion.div>

      {/* ===== CONTENT ===== */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 mt-16 space-y-16">
        <Button
          onClick={() => navigate(-1)}
          className="bg-[#2527A9] text-white"
        >
          {isArabic ? "رجوع" : "Back"}
        </Button>

        {/* Overview */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-[#2527A9] mb-4">
              {t("projects.overview")}
            </h2>
            <p className="text-lg text-gray-700">{project.overview}</p>
          </div>

          <ResponsiveImg
            src={project.image}
            alt={project.title}
            wrapperClass="w-full aspect-[4/3] rounded-2xl"
            imgClass="object-contain p-8 rounded-2xl"
          />
        </div>

        {/* Scope */}
        <div className="bg-white p-10 rounded-2xl shadow-md">
          <h2 className="text-3xl font-semibold text-[#2527A9] mb-6">
            {t("projects.scopeOfWork")}
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700">
            {project.scope.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Challenges */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <ResponsiveImg
            src={project.image}
            alt={project.title}
            wrapperClass="w-full aspect-[4/3] rounded-2xl"
            imgClass="object-contain p-8 rounded-2xl"
          />

          <div>
            <h2 className="text-3xl font-semibold text-[#2527A9] mb-4">
              {t("projects.challenges")}
            </h2>
            <p className="text-lg text-gray-700">{project.challenges}</p>
          </div>
        </div>

        {/* Results */}
        <div className="text-center bg-[#2527A9] text-white rounded-2xl p-12">
          <h2 className="text-3xl font-semibold mb-6">
            {t("projects.results")}
          </h2>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            {project.results}
          </p>
        </div>
      </div>
    </section>
  );
}