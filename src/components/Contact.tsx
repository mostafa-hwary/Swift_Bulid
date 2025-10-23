import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import "../index.css";

export function Contact() {
  const { t, isRTL } = useLanguage();

  // ✅ form states
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectType: "",
    projectDetails: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // ✅ handle change
  const handleChange = (e: { target: { id: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // ✅ handle submit
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("https://api-swift.vercel.app/contacts/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage(t("contact.successMessage") || "✅ Form submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          projectType: "",
          projectDetails: "",
        });
      } else {
        setMessage(data.message || "❌ Something went wrong!");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("❌ Server error, please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container px-8 lg:px-16">
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-4">
            {t("contact.badge")}
          </Badge>
          <h2 className="text-4xl font-bold mb-8">{t("contact.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* ✅ Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className={isRTL ? "text-right" : "text-left"}>
                {t("contact.form.title")}
              </CardTitle>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className={`block mb-2 ${isRTL ? "text-right" : "text-left"}`}>
                      {t("contact.form.firstName")}
                    </label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      required
                      className={isRTL ? "text-right" : "text-left"}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className={`block mb-2 ${isRTL ? "text-right" : "text-left"}`}>
                      {t("contact.form.lastName")}
                    </label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      required
                      className={isRTL ? "text-right" : "text-left"}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className={`block mb-2 ${isRTL ? "text-right" : "text-left"}`}>
                    {t("contact.form.email")}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className={isRTL ? "text-right" : "text-left"}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className={`block mb-2 ${isRTL ? "text-right" : "text-left"}`}>
                    {t("contact.form.phone")}
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+966 50 123 4567"
                    required
                    className={isRTL ? "text-right" : "text-left"}
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className={`block mb-2 ${isRTL ? "text-right" : "text-left"}`}>
                    {t("contact.form.projectType")}
                  </label>
                  <Input
                    id="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    placeholder={t("contact.form.projectTypePlaceholder")}
                    required
                    className={isRTL ? "text-right" : "text-left"}
                  />
                </div>

                <div>
                  <label htmlFor="projectDetails" className={`block mb-2 ${isRTL ? "text-right" : "text-left"}`}>
                    {t("contact.form.message")}
                  </label>
                  <Textarea
                    id="projectDetails"
                    rows={4}
                    value={formData.projectDetails}
                    onChange={handleChange}
                    placeholder={t("contact.form.messagePlaceholder")}
                    required
                    className={isRTL ? "text-right" : "text-left"}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#2527A9] hover:bg-[#1e1f8a] text-white flex items-center justify-center"
                >
                  {loading ? t("contact.form.sending") || "Sending..." : t("contact.form.send")}
                  {!loading && <Send className={`h-4 w-4 ${isRTL ? "mr-2" : "ml-2"}`} />}
                </Button>

                {message && (
                  <p className="text-center mt-4 text-sm text-gray-600">{message}</p>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-10">
            <Card>
              <CardContent className="p-6">
                <div className={`flex items-start space-x-4 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <MapPin className="h-6 w-6 text-[#2527A9] mt-1" />
                  <div className={isRTL ? 'text-right' : 'text-left'}>
                    <h3 className="font-semibold mb-2">{t('contact.office')}</h3>
                    <p className="text-muted-foreground">
                      {t('contact.address')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className={`flex items-start space-x-4 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <Phone className="h-6 w-6 text-[#2527A9] mt-1" />
                  <div className={isRTL ? 'text-right' : 'text-left'}>
                    <h3 className="font-semibold mb-2">{t('contact.phone')}</h3>
                    <p className="text-muted-foreground">
                      +966 58 313 1848<br />
                      +966 54 444 8800<br />
                      +966 54 924 0909
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className={`flex items-start space-x-4 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <Mail className="h-6 w-6 text-[#2527A9] mt-1" />
                  <div className={isRTL ? 'text-right' : 'text-left'}>
                    <h3 className="font-semibold mb-2">{t('contact.email')}</h3>
                    <p className="text-muted-foreground">
                      info@swiftbuild.sa<br />
                      projects@swiftbuild.sa
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className={`flex items-start space-x-4 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <Clock className="h-6 w-6 text-[#2527A9] mt-1" />
                  <div className={isRTL ? 'text-right' : 'text-left'}>
                    <h3 className="font-semibold mb-2">{t('contact.hours')}</h3>
                    <p className="text-muted-foreground whitespace-pre-line">
                      {t('contact.hoursDetail')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="bg-[#2527A9]/10 rounded-lg p-10">
            <h3 className="text-2xl font-bold mb-6">{t('contact.emergency')}</h3>
            <p className="text-muted-foreground mb-8">
              {t('contact.emergencyDesc')}
            </p>
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              {t('contact.emergencyButton')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}