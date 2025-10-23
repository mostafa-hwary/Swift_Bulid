import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  Home, Building, Warehouse, Wrench, PaintBucket, Hammer, ArrowRight 
} from "lucide-react";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { Link } from "react-router-dom";

import "../index.css";

export function Services() {
const { t, language, isRTL } = useLanguage();

  const services = [
    { id:1,icon: Home, title: t("services.residential.title"), description: t("services.residential.desc") },
    { id:2,icon: Building, title: t("services.commercial.title"), description: t("services.commercial.desc") },
    { id:3,icon: Warehouse, title: t("services.industrial.title"), description: t("services.industrial.desc") },
    { id:4,icon: Wrench, title: t("services.contracting.title"), description: t("services.contracting.desc") },
    { id:5,icon: PaintBucket, title: t("services.interior.title"), description: t("services.interior.desc") },
    { id:6,icon: Hammer, title: t("services.maintenance.title"), description: t("services.maintenance.desc") },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-16">
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-3">{t("services.badge")}</Badge>
          <h2 className="text-4xl font-bold mb-4">{t("services.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="h-full flex flex-col justify-between hover:shadow-xl transition-all duration-300 border border-gray-200 rounded-2xl p-6"
            >
              <CardHeader className={`p-0 mb-5 ${isRTL ? "text-right" : "text-left"}`}>
                <service.icon className={`h-12 w-12 text-[#2527A9] mb-5 ${isRTL ? "ml-auto" : ""}`} />
                <CardTitle className="text-2xl font-semibold">{service.title}</CardTitle>
              </CardHeader>

              <CardContent className="p-0 flex flex-col flex-grow">
                <p className={`text-muted-foreground mb-6 leading-relaxed ${isRTL ? "text-right" : "text-left"}`}>
                  {service.description}
                </p>

                <Link to={`/${language}/services/${service.id}`}>
                  <Button variant="outline" className="w-full font-medium">
                    {t("services.viewDetails")}
                    <ExternalLink
                      className={`h-4 w-4 ${isRTL ? "mr-2" : "ml-2"} inline-block`}
                    />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        
      </div>
    </section>
  );
}
