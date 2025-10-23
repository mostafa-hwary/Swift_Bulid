import { useParams, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Home, Building, Warehouse, Wrench, PaintBucket, Hammer } from "lucide-react";
import { useLanguage } from "../LanguageContext"; // ✅ نضيف دي
import { useEffect } from "react"; // ✅ علشان scroll to top



// الصور
import constructionImg from "./images/Construction.jpg";
import electricalImg from "./images/Electrical Works.jpg";
import plumbingImg from "./images/Plumbing Works.jpg";
import fireImg from "./images/Fire & Early Warning Systems.jpg";
import plasteringImg from "./images/Plastering & Finishes.jpg";
import maintenanceImg from "./images/Support & Maintenance.jpg";

export default function ServicesDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  const isArabic = language === "ar";

  const details = [
    {
      id:1,
      title: t("services.details.construction.title"),
      desc: t("services.details.construction.desc"),
      features: [
        t('services.details.construction.feature1'),
        t('services.details.construction.feature2'),
        t('services.details.construction.feature3'),
        t('services.details.construction.feature4'),
      ],
      icon: Home,
      image: constructionImg,
    },
    {
      id:2,
      title: t("services.details.electrical.title"),
      desc: t("services.details.electrical.desc"),
      features: [
        t('services.details.electrical.feature1'),
        t('services.details.electrical.feature2'),
        t('services.details.electrical.feature3'),
        t('services.details.electrical.feature4'),
      ],
      icon: Building,
      image: electricalImg,
    },
    {
      id:3,
      title: t("services.details.plumbing.title"),
      desc: t("services.details.plumbing.desc"),
      features: [
        t('services.details.plumbing.feature1'),
        t('services.details.plumbing.feature2'),
        t('services.details.plumbing.feature3'),
        t('services.details.plumbing.feature4'),
      ],
      icon: Warehouse,
      image: plumbingImg,
    },
    {
      id:4,
      title: t("services.details.fire.title"),
      desc: t("services.details.fire.desc"),
      features: [
        t('services.details.fire.feature1'),
        t('services.details.fire.feature2'),
        t('services.details.fire.feature3'),
        t('services.details.fire.feature4'),
      ],
      icon: Wrench,
      image: fireImg,
    },
    {
      id:5,
      title: t("services.details.finishes.title"),
      desc: t("services.details.finishes.desc"),
      features: [
        t('services.details.finishes.feature1'),
        t('services.details.finishes.feature2'),
        t('services.details.finishes.feature3'),
        t('services.details.finishes.feature4'),
      ],
      icon: PaintBucket,
      image: plasteringImg,
    },
    {
      id:6,
      title: t("services.details.maintenance.title"),
      desc: t("services.details.maintenance.desc"),
      features: [
        t('services.details.maintenance.feature1'),
        t('services.details.maintenance.feature2'),
        t('services.details.maintenance.feature3'),
        t('services.details.maintenance.feature4'),
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
        <Button
          variant="outline"
          className="bg-[#2527A9] text-white mb-12 hover:bg-[#1e1f8a] mb-10"
          onClick={() => navigate(-1)}
        >

          ← {t("services.back")}
        </Button>

        <div className="flex flex-col lg:flex-row items-center gap-20 bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="lg:w-1/2 w-full">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-[450px] object-cover object-center rounded-l-3xl"
            />
          </div>

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

          </div>
        </div>
      </div>
    </section>
  );
}
