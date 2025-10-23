import { useParams, useNavigate } from "react-router-dom";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { useLanguage } from "../LanguageContext";
import { motion } from "framer-motion";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  const isArabic = language === "ar";

  const projects = [
    {
      id: 1,
      title: t("projects.luxury.title"),
      category: t("projects.luxury.desc"),
      image:
        "https://images.unsplash.com/photo-1672331713329-65c270686b71?auto=format&fit=crop&w=1600&q=80",
      status: t("projects.completed"),
      year: "2024",
      overview: t("projects.luxury.overview") ,
      scope: [
        t("projects.luxury.scope.architecture") ,
        t("projects.luxury.scope.smart") ,
        t("projects.luxury.scope.interior") ,
        t("projects.luxury.scope.landscape") ,
      ],
      challenges: t("projects.luxury.challenges") ,
      results: t("projects.luxury.results") ,
    },
    {
      id: 2,
      title: t("projects.corporate.title"),
      category: t("projects.corporate.desc"),
      image:
        "https://images.unsplash.com/photo-1748771886624-0f0aa2729a37?auto=format&fit=crop&w=1600&q=80",
      status: t("projects.inProgress"),
      year: "2024",
      overview:
        t("projects.corporate.overview") ,
      scope: [
        t("projects.corporate.scope.architecture") ,
        t("projects.corporate.scope.smart") ,
        t("projects.corporate.scope.interior") ,
        t("projects.corporate.scope.landscape") ,
      ],
      challenges:t("projects.corporate.challenges") ,
      results: t("projects.corporate.results") ,
    },
    {
      id: 3,
      title: t("projects.manufacturing.title"),
      category: t("projects.manufacturing.desc"),
      image:
        "https://images.unsplash.com/photo-1684497404598-6e844dff9cde?auto=format&fit=crop&w=1600&q=80",
      status: t("projects.completed"),
      year: "2023",
      overview:t("projects.manufacturing.overview") ,
      scope: [
        t("projects.manufacturing.scope.architecture") ,
        t("projects.manufacturing.scope.smart") ,
        t("projects.manufacturing.scope.interior") ,
        t("projects.manufacturing.scope.landscape") ,      ],
      challenges: t("projects.manufacturing.challenges") ,
      results: t("projects.manufacturing.results") ,
    },
  ];

  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="container text-center py-20">
        <h2 className="text-2xl font-bold text-gray-600">
          {t("projects.notFound") || "Project not found"}
        </h2>
      </div>
    );
  }

  return (
    <section
      className={`bg-gray-50 min-h-screen pb-24 ${isArabic ? "font-[Cairo] text-right" : "text-left"}`}
    >
      {/* ===== HERO SECTION ===== */}
      <motion.div
        initial={{ opacity: 0, scale: 1.03 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[400px] md:h-[500px] overflow-hidden"
      >
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center"
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
              {t("projects.overview") || "Overview"}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {project.overview}
            </p>
          </div>
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="rounded-2xl shadow-md w-full h-[300px] object-cover"
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
            {t("projects.scopeOfWork") || "Scope of Work"}
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
          <ImageWithFallback
            src={project.image}
            alt="Challenges"
            className="rounded-2xl shadow-md w-full h-[300px] object-cover"
          />
          <div>
            <h2 className="text-3xl font-semibold text-[#2527A9] mb-4">
              {t("projects.challenges") || "Challenges"}
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
            {t("projects.results") || "Results"}
          </h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto opacity-90">
            {project.results}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
