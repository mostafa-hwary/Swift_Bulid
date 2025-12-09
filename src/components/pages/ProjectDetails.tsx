import { useParams, useNavigate } from "react-router-dom";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { useLanguage } from "../LanguageContext";
import { motion } from "framer-motion";
import "../../index.css";

/**
 * ResponsiveImg
 * - يولّد srcSet إذا كان مصدر الصورة يدعم params (imgix / unsplash / cloudinary / imgix-like).
 * - يضع fallback image عند حدوث خطأ.
 * - wrapperClass يتحكم بنسبة العرض (aspect) مثل "aspect-video" أو "aspect-[4/3]".
 */
function ResponsiveImg({ src, alt, wrapperClass = "aspect-[4/3]", imgClass = "", fallback }: { src: string; alt: string; wrapperClass?: string; imgClass?: string; fallback?: string }) {
  // small safe fallback
  const fallbackImg = fallback || "https://via.placeholder.com/1600x1200.png?text=No+Image";

  // helper to build an URL with width param (works for imgix/unsplash/cloudinary-style)
  const makeSrc = (url: string, w: number) => {
    if (!url) return url;
    // if URL already has query params, append; otherwise add
    if (url.includes("?")) {
      // ensure w param exists or add it
      if (/([\?&])w=\d+/.test(url)) {
        return url.replace(/([\?&]w=)\d+/, `$1${w}`);
      } else {
        return `${url}&w=${w}&auto=format&fit=crop&q=80`;
      }
    } else {
      return `${url}?w=${w}&auto=format&fit=crop&q=80`;
    }
  };

  // detect if the host likely supports dynamic resizing
  const supportsAutoSizing = /imgix|unsplash|cloudinary|akamaized|imgur|pixabay/i.test(src);

  const widths = [480, 768, 1024, 1366, 1600];
  const srcSet = supportsAutoSizing
    ? widths.map((w) => `${makeSrc(src, w)} ${w}w`).join(", ")
    : undefined;

  // default src to a reasonable width
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
          if (e.currentTarget.src !== fallbackImg) e.currentTarget.src = fallbackImg;
        }}
        className={`w-full h-full object-cover object-center ${imgClass}`}
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
        t("projects.benzaghr.scope.design"),
        t("projects.benzaghr.scope.mep"),
        t("projects.benzaghr.scope.commissioning"),
        t("projects.benzaghr.scope.safety"),
        t("projects.benzaghr.scope.procurement"),
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
        t("projects.ababitin.scope.mep"),
        t("projects.ababitin.scope.interiors"),
        t("projects.ababitin.scope.installation"),
        t("projects.ababitin.scope.coordination"),
        t("projects.ababitin.scope.warranty"),
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
        t("projects.hayatFinishes.scope.finishings"),
        t("projects.hayatFinishes.scope.quality"),
        t("projects.hayatFinishes.scope.procurement"),
        t("projects.hayatFinishes.scope.inspection"),
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
        t("projects.rakahUnits.scope.mep"),
        t("projects.rakahUnits.scope.finishings"),
        t("projects.rakahUnits.scope.integration"),
        t("projects.rakahUnits.scope.testing"),
        t("projects.rakahUnits.scope.handsover"),
      ],
      challenges: t("projects.rakahUnits.challenges"),
      results: t("projects.rakahUnits.results"),
    },
  ];

  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="container text-center py-20">
        <h2 className="text-2xl font-bold text-gray-600">
          {t("projects.notFound") || (isArabic ? "المشروع غير موجود" : "Project not found")}
        </h2>
      </div>
    );
  }

  return (
    <section
      className={`bg-gray-50 min-h-screen pb-24 ${isArabic ? "font-[Cairo] text-right" : "text-left"}`}
    >
      {/* ===== HERO SECTION (16:9) ===== */}
      <motion.div
        initial={{ opacity: 0, scale: 1.03 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full overflow-hidden"
      >
        <ResponsiveImg
          src={project.image}
          alt={project.title}
          wrapperClass="w-full aspect-video"
          imgClass="transition-transform duration-700 hover:scale-105"
          fallback="https://via.placeholder.com/1600x900.png?text=No+Image"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-10 md:p-20 text-white">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg"
          >
            {project.title}
          </motion.h1>
          <div className="flex flex-wrap gap-3 mt-6">
            <Badge className="bg-[#2527A9] text-white">{project.category}</Badge>
            <Badge variant="outline" className="bg-white text-black font-medium">
              {project.year}
            </Badge>
            <Badge
              className={`text-white font-semibold ${
                project.status === t("projects.completed")
                  ? "bg-green-600"
                  : "bg-yellow-500"
              }`}
            >
              {project.status}
            </Badge>
          </div>
        </div>
      </motion.div>

      {/* ===== CONTENT SECTION ===== */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 mt-16 space-y-16">
        <Button
          onClick={() => navigate(-1)}
          className="bg-[#2527A9] text-white hover:bg-[#1e1f8a]"
        >
          {isArabic ? "← " + t("projects.back") : t("projects.back") + " →"}
        </Button>

        {/* Overview Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <h2 className="text-3xl font-semibold text-[#2527A9] mb-4">
              {t("projects.overview") || (isArabic ? "نظرة عامة" : "Overview")}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Secondary image (4:3) */}
          <ResponsiveImg
            src={project.image}
            alt={project.title}
            wrapperClass="w-full aspect-[4/3] rounded-2xl overflow-hidden"
            imgClass="rounded-2xl shadow-md"
            fallback="https://via.placeholder.com/1200x900.png?text=No+Image"
          />
        </motion.div>

        {/* Scope of Work Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white p-10 rounded-2xl shadow-md border border-gray-100"
        >
          <h2 className="text-3xl font-semibold text-[#2527A9] mb-6">
            {t("projects.scopeOfWork") || (isArabic ? "نطاق العمل" : "Scope of Work")}
          </h2>
          <ul className="list-disc pl-6 text-lg text-gray-700 space-y-3">
            {project.scope.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </motion.div>

        {/* Challenges Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <ResponsiveImg
            src={project.image}
            alt="Challenges"
            wrapperClass="w-full aspect-[4/3] rounded-2xl overflow-hidden"
            imgClass="rounded-2xl shadow-md"
            fallback="https://via.placeholder.com/1200x900.png?text=No+Image"
          />
          <div>
            <h2 className="text-3xl font-semibold text-[#2527A9] mb-4">
              {t("projects.challenges") || (isArabic ? "التحديات" : "Challenges")}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {project.challenges}
            </p>
          </div>
        </motion.div>

        {/* Results Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center bg-[#2527A9] text-white rounded-2xl p-12 shadow-lg"
        >
          <h2 className="text-3xl font-semibold mb-6">
            {t("projects.results") || (isArabic ? "النتائج" : "Results")}
          </h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto opacity-90">
            {project.results}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
