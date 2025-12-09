import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "./LanguageContext";
import { Link } from "react-router-dom";
import "../index.css";
import "../assets/projects/benzaghr.jpg"


export function Projects() {
  const { t, language, isRTL } = useLanguage();

  const projects = [
    // Original projects
    {
      id: 1,
      title: t("projects.luxury.title"),
      category: "Residential",
      description: t("projects.luxury.desc"),
      image:
        "https://6931a2ad06de332fac041a47.imgix.net/1-villa_300_riyadh_paramo_arquitectos.jpg?auto=format&fit=crop&w=1080&q=80",
      status: t("projects.completed"),
      year: "2025",
    },
    {
      id: 2,
      title: t("projects.corporate.title"),
      category: "Commercial",
      description: t("projects.corporate.desc"),
      image:
        "https://6931a2ad06de332fac041a47.imgix.net/Corporate%20Headquarters.webp?auto=format&fit=crop&w=1080&q=80",
      status: t("projects.completed"),
      year: "2024",
    },
    {
      id: 3,
      title: t("projects.manufacturing.title"),
      category: "Industrial",
      description: t("projects.manufacturing.desc"),
      image:
        "https://images.unsplash.com/photo-1684497404598-6e844dff9cde?auto=format&fit=crop&w=1080&q=80",
      status: t("projects.completed"),
      year: "2023",
    },

    // 🔵 New Projects (Translations Applied)
    {
      id: 4,
      title: t("projects.benzaghr.title"),
      category: 'Electromechanical',
      description: t("projects.benzaghr.desc"),
      image: "https://6931a2ad06de332fac041a47.imgix.net/benzaghr.jpg", // ضع رابط الصورة الصحيح
      status: t("projects.completed"),
      year: "2022",
    },
    {
      id: 5,
      title: t("projects.ababitin.title"),
      category: 'Electromechanical',
      description: t("projects.ababitin.desc"),
      image: "https://6931a2ad06de332fac041a47.imgix.net/ababitin.jpg",
      status: t("projects.completed"),
      year: "2019",
    },
    {
      id: 6,
      title: t("projects.shiblan.title"),
      category: 'Electromechanical',
      description: t("projects.shiblan.desc"),
      image: "https://6931a2ad06de332fac041a47.imgix.net/shiblan.jpg",
      status: t("projects.completed"),
      year: "2021",
    },
    {
      id: 7,
      title: t("projects.hayatFinishes.title"),
      category: 'Finishing Works',
      description: t("projects.hayatFinishes.desc"),
      image: "https://6931a2ad06de332fac041a47.imgix.net/hayat-finishes.jpg",
      status: t("projects.completed"),
      year: "2017",
    },
    {
      id: 8,
      title: t("projects.rakahUnits.title"),
      category: 'Electromechanical',
      description: t("projects.rakahUnits.desc"),
      image: "https://6931a2ad06de332fac041a47.imgix.net/rakah-units.jpg",
      status: t("projects.completed"),
      year: "2020",
    },
  ];
    const compactProjects = [
    {
      id: "a",
      title: t("projects.Residential_Villa_Al_Ahsa.title"),
      subtitle: t("projects.Residential_Villa_Al_Ahsa.subtitle"),
      img: "https://6931a2ad06de332fac041a47.imgix.net/thumb1.jpg",
    },
    {
      id: "b",
      title: t("projects.Residential_Villa_Al_Dammam.title"),
      subtitle: t("projects.Residential_Villa_Al_Dammam.subtitle"),
      img: "https://6931a2ad06de332fac041a47.imgix.net/thumb2.jpg",
    },
    {
      id: "c",
      title: t("projects.Bin_Sanem_Factory.title"),
      subtitle: t("projects.Bin_Sanem_Factory.subtitle"),
      img: "https://6931a2ad06de332fac041a47.imgix.net/thumb3.webp",
    },
    {
      id: "d",
      title: t("projects.Residential_Villa_Al_Khobar.title"),
      subtitle: t("projects.Residential_Villa_Al_Khobar.subtitle"),
      img: "https://6931a2ad06de332fac041a47.imgix.net/thumb4.webp",
    },
    {
      id: "e",
      title: t("projects.Residential_Villa_Al_Jubail.title"),
      subtitle: t("projects.Residential_Villa_Al_Jubail.subtitle"),
      img: "https://6931a2ad06de332fac041a47.imgix.net/thumb5.jpg",
    },
    {
      id: "f",
      title: t("projects.Residential_Villa_Qatif.title"),
      subtitle: t("projects.Residential_Villa_Qatif.subtitle"),
      img: "https://6931a2ad06de332fac041a47.imgix.net/thumb6.jpg",
    },
  ];


  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container px-6 lg:px-20">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            {t("projects.badge")}
          </Badge>

          <h2 className="text-4xl font-bold mb-6">
            {t("projects.title")}
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl"
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />

                {/* Status Badge */}
                <div className={`absolute top-4 ${isRTL ? "right-4" : "left-4"}`}>
                  <Badge
                    variant={
                      project.status === t("projects.completed")
                        ? "default"
                        : "secondary"
                    }
                    className={
                      project.status === t("projects.completed")
                        ? "bg-green-600"
                        : "bg-yellow-500"
                    }
                  >
                    {project.status}
                  </Badge>
                </div>

                {/* Year */}
                {project.year && (
                  <div
                    className={`absolute top-4 ${
                      isRTL ? "left-4" : "right-4"
                    }`}
                  >
                    <Badge variant="outline" className="bg-white">
                      {project.year}
                    </Badge>
                  </div>
                )}
              </div>

              {/* Content */}
              <CardContent className="p-6">
                <Badge variant="secondary" className="text-xs mb-3">
                  {project.category}
                </Badge>

                <h3
                  className={`text-xl font-semibold mb-3 ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                >
                  {project.title}
                </h3>

                <p
                  className={`text-gray-600 mb-6 leading-relaxed ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                >
                  {project.description}
                </p>

                <Link to={`/${language}/projects/${project.id}`}>
                  <Button variant="outline" className="w-full font-medium">
                    {t("projects.viewDetails")}
                    <ExternalLink
                      className={`h-4 w-4 ${
                        isRTL ? "mr-2" : "ml-2"
                      } inline-block`}
                    />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* ===== Compact Projects Section ===== */}
      <section className="mt-20">
        <h3 className={`text-2xl font-bold mb-8 ${isRTL ? "text-right" : "text-left"}`}>
          {t("projects.moreProjects") || "More Projects"}
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {compactProjects.map((p) => (
            <article
              key={p.id}
              className="flex items-start gap-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-4 border border-gray-100"
            >
              <div
                className={`w-28 h-20 rounded-lg overflow-hidden border border-gray-200 shrink-0 ${
                  isRTL ? "ml-4" : "mr-4"
                }`}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) =>
                    (e.currentTarget.src =
                      "https://via.placeholder.com/320x240?text=Image+Unavailable")
                  }
                />
              </div>

              <div className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
                <h4 className="text-lg font-semibold text-gray-800 hover:text-[#2527A9] transition-colors">
                  {p.title}
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  {p.subtitle}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>


        {/* <div className="text-center mt-16">
          <Button size="lg" variant="outline">
            {t("projects.viewAll")}
          </Button>
        </div> */}
      </div>
    </section>
  );
}
