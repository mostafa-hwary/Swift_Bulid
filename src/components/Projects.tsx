import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "./LanguageContext";
import { Link } from "react-router-dom";
import "../index.css";

export function Projects() {
const { t, language, isRTL } = useLanguage();

  const projects = [
    {
      id: 1,
      title: t("projects.luxury.title"),
      category: "Residential",
      description: t("projects.luxury.desc"),
      image:
        "https://images.unsplash.com/photo-1672331713329-65c270686b71?auto=format&fit=crop&w=1080&q=80",
      status: t("projects.completed"),
      year: "2024",
    },
    {
      id: 2,
      title: t("projects.corporate.title"),
      category: "Commercial",
      description: t("projects.corporate.desc"),
      image:
        "https://images.unsplash.com/photo-1748771886624-0f0aa2729a37?auto=format&fit=crop&w=1080&q=80",
      status: t("projects.inProgress"),
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
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container px-6 lg:px-20">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            {t("projects.badge")}
          </Badge>
          <h2 className="text-4xl font-bold mb-6">{t("projects.title")}</h2>
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
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
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
                <div className={`absolute top-4 ${isRTL ? "left-4" : "right-4"}`}>
                  <Badge variant="outline" className="bg-white">
                    {project.year}
                  </Badge>
                </div>
              </div>

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
                      className={`h-4 w-4 ${isRTL ? "mr-2" : "ml-2"} inline-block`}
                    />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" variant="outline">
            {t("projects.viewAll")}
          </Button>
        </div>
      </div>
    </section>
  );
}
