import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  Home, Building, Warehouse, Wrench, PaintBucket, Hammer, ArrowRight 
} from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { useNavigate } from "react-router-dom";
import "../index.css";

export function Services() {
  const { t, isRTL } = useLanguage();
  const navigate = useNavigate();

  const services = [
    { icon: Home, title: t("services.residential.title"), description: t("services.residential.desc") },
    { icon: Building, title: t("services.commercial.title"), description: t("services.commercial.desc") },
    { icon: Warehouse, title: t("services.industrial.title"), description: t("services.industrial.desc") },
    { icon: Wrench, title: t("services.contracting.title"), description: t("services.contracting.desc") },
    { icon: PaintBucket, title: t("services.interior.title"), description: t("services.interior.desc") },
    { icon: Hammer, title: t("services.maintenance.title"), description: t("services.maintenance.desc") },
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

                <Button
                  variant="outline"
                  className="w-full mt-auto py-2 border-[#2527A9] text-[#2527A9] hover:bg-[#2527A9] hover:text-white transition-all"
                  onClick={() => navigate(`/services/${index + 1}`)}
                >
                  {t("services.learnMore")}
                  <ArrowRight className={`h-4 w-4 ${isRTL ? "mr-2 rotate-180" : "ml-2"}`} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-24">
          <Button size="lg" className="bg-[#2527A9] hover:bg-[#1e1f8a] text-white px-10 py-6 text-lg rounded-full shadow-md">
            {t("services.getQuote")}
          </Button>
        </div>
      </div>
    </section>
  );
}
