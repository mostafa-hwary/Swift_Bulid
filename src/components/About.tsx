import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Building2, Users, Award, Clock } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "./LanguageContext";
import "../index.css"

export function About() {
  const { t, isRTL } = useLanguage();

  const stats = [
    { icon: Building2, number: t('about.stat1'), label: t('about.stat1Label') },
    { icon: Users, number: t('about.stat2'), label: t('about.stat2Label') },
    { icon: Award, number: t('about.stat3'), label: t('about.stat3Label') },
    { icon: Clock, number: t('about.stat4'), label: t('about.stat4Label') },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container px-8 lg:px-16">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">{t('about.badge')}</Badge>
          <h2 className="text-4xl font-bold mb-6">
            {t('about.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        <div className={`grid lg:grid-cols-2 gap-12 items-center mb-20 ${isRTL ? 'lg:grid-flow-col-dense' : ''}`}>
          <div className={isRTL ? 'lg:col-start-2' : ''}>
            <h3 className={`text-3xl font-bold mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
              {t('about.heading')}
            </h3>
            <p className={`text-lg text-muted-foreground mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
              {t('about.description1')}
            </p>
            <p className={`text-lg text-muted-foreground mb-10 ${isRTL ? 'text-right' : 'text-left'}`}>
              {t('about.description2')}
            </p>
            
            <div className="space-y-4">
              <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className={`w-2 h-2 bg-[#2527A9] rounded-full ${isRTL ? 'ml-4' : 'mr-4'}`}></div>
                <span className={isRTL ? 'text-right' : 'text-left'}>{t('about.feature1')}</span>
              </div>
              <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className={`w-2 h-2 bg-[#2527A9] rounded-full ${isRTL ? 'ml-4' : 'mr-4'}`}></div>
                <span className={isRTL ? 'text-right' : 'text-left'}>{t('about.feature2')}</span>
              </div>
              <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className={`w-2 h-2 bg-[#2527A9] rounded-full ${isRTL ? 'ml-4' : 'mr-4'}`}></div>
                <span className={isRTL ? 'text-right' : 'text-left'}>{t('about.feature3')}</span>
              </div>
            </div>
          </div>
          
          <div className={`relative ${isRTL ? 'lg:col-start-1' : ''}`}>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1684497404598-6e844dff9cde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB0ZWFtJTIwd29ya2Vyc3xlbnwxfHx8fDE3NTc5MTM3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Construction team at work"
              className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <stat.icon className="h-12 w-12 text-[#2527A9] mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* ===== Company History Section (Enhanced) ===== */}
        <section className="relative py-20 mt-10 bg-white">
          {/* Decorative Accent */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="w-full h-full bg-gradient-to-b from-transparent via-[#2527A9]/5 to-transparent"></div>
          </div>

          <div className="relative container px-8 lg:px-16">
            <Card className="overflow-hidden shadow-xl border border-gray-100">
              {/* Top Accent */}
              <div className="h-1 bg-[#2527A9]" />

              <CardContent className="p-10 lg:p-14">
                <div
                  className={`mb-8 ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                >
                  <Badge variant="secondary" className="mb-4">
                    {t("about.badge")}
                  </Badge>

                  <h3 className="text-3xl lg:text-4xl font-bold text-[#2527A9]">
                    {t("about.history.heading")}
                  </h3>
                </div>

                <p
                  className={`text-lg leading-relaxed text-muted-foreground mb-12 ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                >
                  {t("about.history.summary")}
                </p>

                {/* Highlights */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-4 ${
                        isRTL ? "flex-row-reverse text-right" : ""
                      }`}
                    >
                      <div className="flex-shrink-0 w-3 h-3 mt-2 rounded-full bg-[#2527A9]" />
                      <span className="text-muted-foreground text-base">
                        {t(`about.history.highlight${i}`)}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ===== Vision & Mission Section ===== */}
        <section className="py-24 bg-gray-50">
          <div className="container px-8 lg:px-16">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4">
                {t("about.visionMission.badge")}
              </Badge>
              <h2 className="text-4xl font-bold">
                {t("about.visionMission.title")}
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Vision Card */}
              <Card className="shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <CardContent className="p-10">
                  <div
                    className={`flex items-center mb-6 ${
                      isRTL ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#2527A9]/10 text-[#2527A9] font-bold text-xl">
                      👁️
                    </div>
                    <h3
                      className={`text-2xl font-bold ${
                        isRTL ? "mr-4 text-right" : "ml-4 text-left"
                      }`}
                    >
                      {t("about.vision.title")}
                    </h3>
                  </div>

                  <p
                    className={`text-lg text-muted-foreground leading-relaxed ${
                      isRTL ? "text-right" : "text-left"
                    }`}
                  >
                    {t("about.vision.description")}
                  </p>
                </CardContent>
              </Card>

              {/* Mission Card */}
              <Card className="shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <CardContent className="p-10">
                  <div
                    className={`flex items-center mb-6 ${
                      isRTL ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#2527A9]/10 text-[#2527A9] font-bold text-xl">
                      🎯
                    </div>
                    <h3
                      className={`text-2xl font-bold ${
                        isRTL ? "mr-4 text-right" : "ml-4 text-left"
                      }`}
                    >
                      {t("about.mission.title")}
                    </h3>
                  </div>

                  <p
                    className={`text-lg text-muted-foreground leading-relaxed ${
                      isRTL ? "text-right" : "text-left"
                    }`}
                  >
                    {t("about.mission.description")}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* ===== Why Swift Build Section ===== */}
        <section className="py-24 bg-white">
          <div className="container px-8 lg:px-16">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4">
                {t("why.badge")}
              </Badge>
              <h2 className="text-4xl font-bold mb-6">
                {t("why.title")}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t("why.subtitle")}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1 */}
              <Card className="hover:shadow-xl transition-shadow border border-gray-100">
                <CardContent className="p-8 text-center">
                  <Building2 className="h-12 w-12 text-[#2527A9] mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-4">
                    {t("why.reason1.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("why.reason1.desc")}
                  </p>
                </CardContent>
              </Card>

              {/* Card 2 */}
              <Card className="hover:shadow-xl transition-shadow border border-gray-100">
                <CardContent className="p-8 text-center">
                  <Users className="h-12 w-12 text-[#2527A9] mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-4">
                    {t("why.reason2.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("why.reason2.desc")}
                  </p>
                </CardContent>
              </Card>

              {/* Card 3 */}
              <Card className="hover:shadow-xl transition-shadow border border-gray-100">
                <CardContent className="p-8 text-center">
                  <Award className="h-12 w-12 text-[#2527A9] mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-4">
                    {t("why.reason3.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("why.reason3.desc")}
                  </p>
                </CardContent>
              </Card>

              {/* Card 4 */}
              <Card className="hover:shadow-xl transition-shadow border border-gray-100">
                <CardContent className="p-8 text-center">
                  <Clock className="h-12 w-12 text-[#2527A9] mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-4">
                    {t("why.reason4.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("why.reason4.desc")}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>



      </div>
    </section>
  );
}