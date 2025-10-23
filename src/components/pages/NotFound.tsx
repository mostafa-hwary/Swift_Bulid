import { Button } from "../ui/button";
import { useLanguage } from "../LanguageContext";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function NotFound() {
  const { t, isRTL } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
      <h1 className="text-6xl font-bold text-[#2527A9] mb-6">404</h1>
      <h2 className="text-2xl font-semibold mb-4">{t("notFound.title") || "Page Not Found"}</h2>
      <p className="text-gray-500 mb-8 text-center max-w-md">
        {t("notFound.desc") || "Sorry, the page you are looking for doesn’t exist or is under construction."}
      </p>
      <Button
        onClick={() => navigate("/")}
        className="flex items-center bg-[#2527A9] hover:bg-[#1e1f8a] text-white px-6 py-3 rounded-full"
      >
        <ArrowLeft className={`h-4 w-4 ${isRTL ? "ml-2 rotate-180" : "mr-2"}`} />
        {t("notFound.back") || "Go Back Home"}
      </Button>
    </div>
  );
}
