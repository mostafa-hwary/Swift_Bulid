import React, { createContext, useContext, useState, useEffect } from 'react';
import "../index.css"

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'header.getQuote': 'Get Quote',
    
    // Hero
    'hero.title': 'Swift Build Contracting,',
    'hero.titleHighlight': 'Integrated Quality Delivery',
    'hero.subtitle': 'Founded in 2017, Swift Build specializes in construction, electrical, mechanical, and fire systems with qualified teams and modern techniques under unified management to ensure quality and speed.',
    'hero.startProject': 'Start Your Project',
    'hero.viewWork': 'View Our Work',
    'hero.experience': 'Specialized engineering and execution experience',
    'hero.projects': 'Integrated system solutions',
    'hero.satisfaction': 'Commitment to quality and timelines',
    
    // About
    'about.badge': 'About Swift Build',
    'about.title': 'Swift Build Contracting',
    'about.subtitle': 'Founded in 2017, Swift Build specializes in construction, electrical, and mechanical works for residential and non-residential buildings. In line with Saudi Vision 2030, we rely on qualified engineering teams and modern execution methodologies under unified management covering structural, MEP, fire and safety systems to ensure quality and speed.',
    'about.heading': 'Our Teams and Management',
    'about.description1': 'Executive management sets strategies and oversees performance; the technical management covers construction, electrical, mechanical, and fire systems; operations include HR, finance, and procurement; supported by specialized engineering and field teams.',
    'about.description2': 'What sets us apart: strong internal coordination, specialized expertise, and commitment to quality and schedules. Excellence is not only in what we deliver but how we deliver it—tailored solutions, modern technologies, continuous support, sustainability, and competitive pricing.',
    'about.feature1': 'Strong internal coordination',
    'about.feature2': 'Specialized expertise',
    'about.feature3': 'Commitment to quality and timelines',
    'about.stat1': '500+',
    'about.stat1Label': 'Projects Completed',
    'about.stat2': '50+',
    'about.stat2Label': 'Expert Team Members',
    'about.stat3': '15+',
    'about.stat3Label': 'Years of Excellence',
    'about.stat4': '24/7',
    'about.stat4Label': 'Customer Support',
    
    // Services
    'services.badge': 'Our Services',
    'services.title': 'Core Services',
    'services.subtitle': 'Construction, mechanical, electrical, and fire safety delivered as integrated solutions that ensure smooth execution and system harmony.',
    'services.residential.title': 'Construction',
    'services.residential.desc': 'A core pillar since inception with cross-discipline integration between electrical and mechanical teams to reduce clashes, accelerate delivery, and assure quality.',
    'services.commercial.title': 'Electrical Works',
    'services.commercial.desc': 'Main and sub cabling, underground/in-wall/ceiling installations, lighting and power systems, earthing, safety, and integration with mechanical systems.',
    'services.industrial.title': 'Plumbing Works',
    'services.industrial.desc': 'Potable water and drainage networks, ventilation and rain discharge, sanitary fixtures, and close coordination with electrical and HVAC for system integrity.',
    'services.contracting.title': 'Fire & Early Warning Systems',
    'services.contracting.desc': 'Integrated safety solutions including suppression (sprinklers, gas, manual, pumps and tanks) and alarm (panels, detectors, sounders) applying NFPA and Saudi codes with Civil Defense integration.',
    'services.interior.title': 'Plastering & Finishes',
    'services.interior.desc': 'Start with scratch coat, cement plaster to spec, precise corners and alignment, and complete interior/exterior finishes: paints, ceramics, gypsum, windows, insulation, landscaping.',
    'services.maintenance.title': 'Support & Maintenance',
    'services.maintenance.desc': 'Post-delivery technical support including preventive maintenance, emergency repairs, and precise commissioning—with firm commitment to schedules.',
    'services.learnMore': 'Learn More',
    'services.getQuote': 'Get a Custom Quote',
    'services.residential.feature1': 'We think like owners',
    'services.residential.feature2': 'Cross-discipline integration',
    'services.residential.feature3': 'Attention to detail end-to-end',
    'services.residential.feature4': 'Safety is part of the work',
    'services.commercial.feature1': 'Quality behind the walls',
    'services.commercial.feature2': 'No-conflict integration',
    'services.commercial.feature3': 'Precise commissioning tests',
    'services.commercial.feature4': 'Firm commitment to quality and time',
    'services.industrial.feature1': 'Water and drainage networks',
    'services.industrial.feature2': 'Integrated sanitary installations',
    'services.industrial.feature3': 'Coordination with electrical & HVAC',
    'services.industrial.feature4': 'On-schedule, high-quality delivery',
    'services.contracting.feature1': 'Single-source integrated delivery',
    'services.contracting.feature2': 'Apply NFPA and Saudi codes',
    'services.contracting.feature3': 'Integration with Civil Defense',
    'services.contracting.feature4': 'On-time handover',
    'services.interior.feature1': 'Scratch coat first',
    'services.interior.feature2': 'Cement plaster to spec',
    'services.interior.feature3': 'Precise corners and alignment',
    'services.interior.feature4': 'Interior and exterior finishes',
    'services.maintenance.feature1': 'Preventive maintenance',
    'services.maintenance.feature2': 'Emergency repairs',
    'services.maintenance.feature3': 'Commissioning tests',
    'services.maintenance.feature4': 'On-time commitment',
    
    // Projects
    'projects.badge': 'Our Projects',
    'projects.title': 'Showcasing Our Finest Work',
    'projects.subtitle': 'Explore our portfolio of completed projects that demonstrate our commitment to quality, innovation, and client satisfaction.',
    'projects.luxury.title': 'Luxury Residential Complex',
    'projects.luxury.desc': 'A modern 50-unit residential complex featuring sustainable design and premium amenities.',
    'projects.corporate.title': 'Corporate Headquarters',
    'projects.corporate.desc': 'State-of-the-art office building with modern amenities and energy-efficient systems.',
    'projects.manufacturing.title': 'Manufacturing Facility',
    'projects.manufacturing.desc': 'Large-scale manufacturing plant with advanced automation and safety features.',
    'projects.completed': 'Completed',
    'projects.inProgress': 'In Progress',
    'projects.viewDetails': 'View Details',
    'projects.viewAll': 'View All Projects',
    
    // Contact
    'contact.badge': 'Contact Us',
    'contact.title': 'Ready to Start Your Project?',
    'contact.subtitle': 'Get in touch with our team today for a free consultation and detailed quote for your construction project.',
    'contact.form.title': 'Send Us a Message',
    'contact.form.firstName': 'First Name',
    'contact.form.lastName': 'Last Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone Number',
    'contact.form.projectType': 'Project Type',
    'contact.form.projectTypePlaceholder': 'Residential, Commercial, Industrial...',
    'contact.form.message': 'Project Details',
    'contact.form.messagePlaceholder': 'Tell us about your project requirements, timeline, and budget...',
    'contact.form.send': 'Send Message',
    'contact.office': 'Office Location',
    'contact.address': 'Prince Mohammed Bin Fahd Road, Ash Shati Al Gharbi, Dammam 32413, Saudi Arabia',
    'contact.phone': 'Phone Number',
    'contact.email': 'Email Address',
    'contact.hours': 'Business Hours',
    'contact.hoursDetail': 'Sunday - Thursday: 8:00 AM - 6:00 PM\nFriday - Saturday: Closed\nEmergency: 24/7 Available',
    'contact.emergency': 'Need an Emergency Service?',
    'contact.emergencyDesc': 'We provide 24/7 emergency construction and repair services for urgent situations.',
    'contact.emergencyButton': 'Emergency Hotline: +966 54 444 8800',
    
    // Footer
    'footer.description': 'Swift Build has been delivering exceptional construction services across Saudi Arabia for over 15 years. We specialize in residential, commercial, and industrial construction projects.',
    'footer.licensed': 'Licensed & Insured Construction Company',
    'footer.quickLinks': 'Quick Links',
    'footer.ourServices': 'Our Services',
    'footer.rights': '© 2024 Swift Build. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.cookies': 'Cookie Policy'
  },
  ar: {
    // Header
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.services': 'خدماتنا',
    'nav.projects': 'مشاريعنا',
    'nav.contact': 'اتصل بنا',
    'header.getQuote': 'احصل على عرض سعر',
    
    // Hero
    'hero.title': 'سويفت بيلد للمقاولات،',
    'hero.titleHighlight': 'جودة بتنفيذ متكامل',
    'hero.subtitle': 'تأسست سويفت بيلد عام 2017 متخصصة في الإنشاءات والأعمال الكهربائية والميكانيكية وأنظمة الحريق، مع فرق مؤهلة وتقنيات حديثة تحت إدارة موحدة لضمان الجودة وسرعة الإنجاز.',
    'hero.startProject': 'ابدأ مشروعك',
    'hero.viewWork': 'اطلع على أعمالنا',
    'hero.experience': 'أكثر من 15 سنة خبرة',
    'hero.projects': 'أكثر من 500 مشروع مكتمل',
    'hero.satisfaction': '100% رضا العملاء',
    
    // About
    'about.badge': 'حول سويفت بيلد',
    'about.title': 'سويفت بيلد للمقاولات العامة',
    'about.subtitle': 'تأسست شركة سويفت بيلد عام 2017 لتكون متخصصة في تنفيذ أعمال الإنشاءات والأعمال الكهربائية والميكانيكية للمباني السكنية وغير السكنية. تواكب الشركة رؤية المملكة 2030، وتعتمد على فرق فنية وهندسية مؤهلة وأحدث التقنيات والمنهجيات التنفيذية. توفر خدمات متكاملة تغطي الهيكل الخرساني، الميكانيكية، الكهربائية، وأنظمة الحريق والسلامة تحت إدارة موحدة تضمن الجودة وسرعة الإنجاز.',
    'about.heading': 'فريقنا وإدارتنا',
    'about.description1': 'إدارة تنفيذية تضع الاستراتيجيات وتشرف على الأداء العام؛ إدارة فنية تشمل الإنشاءات والكهرباء والميكانيكا وأنظمة الحريق؛ إدارة تشغيلية تشمل الموارد البشرية والمالية والمشتريات؛ إضافة إلى فرق هندسية وميدانية من مهندسين وفنيين متخصصين.',
    'about.description2': 'ما يميز الفريق: تنسيق داخلي عالي، خبرات متخصصة، التزام بالجودة والمواعيد. نؤمن أن التميز لا يأتي من الخدمة فقط بل من كيفية تقديمها عبر حلول مصممة حسب الحاجة وتقنيات حديثة ودعم فني مستمر واستدامة ومسؤولية وأسعار تنافسية.',
    'about.feature1': 'تنسيق داخلي عالي',
    'about.feature2': 'خبرات متخصصة',
    'about.feature3': 'التزام بالجودة والمواعيد',
    'about.stat1': '+500',
    'about.stat1Label': 'مشروع مكتمل',
    'about.stat2': '+50',
    'about.stat2Label': 'عضو فريق خبير',
    'about.stat3': '+15',
    'about.stat3Label': 'سنة من التميز',
    'about.stat4': '24/7',
    'about.stat4Label': 'دعم العملاء',
    
    // Services
    'services.badge': 'خدماتنا',
    'services.title': 'خدماتنا الأساسية',
    'services.subtitle': 'الأعمال الإنشائية والميكانيكية والكهربائية وأنظمة الحريق والسلامة ضمن حلول متكاملة تراعي تكامل الأنظمة وسلاسة التنفيذ.',
    'services.residential.title': 'الإنشاءات',
    'services.residential.desc': 'أحد الأعمدة الأساسية منذ التأسيس مع تكامل هندسي بين الفرق الكهربائية والميكانيكية لتقليل التعارضات وتسريع الإنجاز وضمان الجودة.',
    'services.commercial.title': 'الأعمال الكهربائية',
    'services.commercial.desc': 'تمديدات رئيسية وفرعية، تمديدات أرضية وجدارية وسقفية، أنظمة الإنارة والطاقة، التأريض، الأمن والسلامة، والربط مع الأنظمة الميكانيكية.',
    'services.industrial.title': 'أعمال السباكة',
    'services.industrial.desc': 'شبكات تغذية المياه والصرف الصحي، أنظمة التهوية والتصريف، التركيبات الصحية، والتنسيق مع الكهرباء والتكييف لضمان تكامل الأنظمة.',
    'services.contracting.title': 'أنظمة الحريق والإنذار المبكر',
    'services.contracting.desc': 'حلول سلامة متكاملة تشمل أنظمة الإطفاء (رش آلي، غاز، يدوي، مضخات وخزانات) وأنظمة الإنذار (لوحات، حساسات، أجراس) مع تطبيق كود NFPA والسعودي والربط بالدفاع المدني.',
    'services.interior.title': 'اللياسة والتشطيبات',
    'services.interior.desc': 'طرطشة مسمارية أولًا، لياسة إسمنتية وفق الأصول، دقة الزوايا والاستقامة، وتشطيبات داخلية وخارجية مثل الدهانات والسيراميك والجبس والنوافذ والعزل وتنسيق الحدائق.',
    'services.maintenance.title': 'الدعم والصيانة',
    'services.maintenance.desc': 'دعم فني مستمر بعد التنفيذ يشمل صيانة وقائية وإصلاحات طارئة واختبارات تشغيل دقيقة مع التزام ثابت بالمواعيد.',
    'services.learnMore': 'اعرف المزيد',
    'services.getQuote': 'احصل على عرض سعر مخصص',
    'services.residential.feature1': 'نفكر كأننا المالكون',
    'services.residential.feature2': 'تكامل هندسي بين الفرق',
    'services.residential.feature3': 'الاهتمام بالتفاصيل حتى التسليم',
    'services.residential.feature4': 'السلامة جزء من العمل',
    'services.commercial.feature1': 'جودة ما خلف الجدران',
    'services.commercial.feature2': 'تكامل التخصصات',
    'services.commercial.feature3': 'اختبارات تشغيل دقيقة',
    'services.commercial.feature4': 'التزام بالجودة والوقت',
    'services.industrial.feature1': 'شبكات تغذية وصرف',
    'services.industrial.feature2': 'تركيبات صحية متكاملة',
    'services.industrial.feature3': 'تنسيق مع الكهرباء والتكييف',
    'services.industrial.feature4': 'التزام بالمواعيد والجودة',
    'services.contracting.feature1': 'تنفيذ متكامل من مصدر واحد',
    'services.contracting.feature2': 'تطبيق كود NFPA والسعودي',
    'services.contracting.feature3': 'ربط مع الدفاع المدني',
    'services.contracting.feature4': 'تسليم دون تأخير',
    'services.interior.feature1': 'طرطشة مسمارية',
    'services.interior.feature2': 'لياسة إسمنتية',
    'services.interior.feature3': 'دقة الزوايا والاستقامة',
    'services.interior.feature4': 'تشطيبات داخلية وخارجية',
    'services.maintenance.feature1': 'صيانة وقائية',
    'services.maintenance.feature2': 'إصلاحات طارئة',
    'services.maintenance.feature3': 'اختبارات تشغيل',
    'services.maintenance.feature4': 'التزام بالمواعيد',
    
    // Projects
    'projects.badge': 'مشاريعنا',
    'projects.title': 'عرض أفضل أعمالنا',
    'projects.subtitle': 'استكشف محفظة المشاريع المكتملة التي تُظهر التزامنا بالجودة والابتكار ورضا العملاء.',
    'projects.luxury.title': 'مجمع سكني فاخر',
    'projects.luxury.desc': 'مجمع سكني حديث مكون من 50 وحدة يتميز بتصميم مستدام ووسائل راحة متميزة.',
    'projects.corporate.title': 'المقر الرئيسي للشركة',
    'projects.corporate.desc': 'مبنى مكاتب متطور مع وسائل راحة حديثة وأنظمة موفرة للطاقة.',
    'projects.manufacturing.title': 'منشأة تصنيع',
    'projects.manufacturing.desc': 'مصنع تصنيع واسع النطاق مع أتمتة متقدمة وميزات أمان.',
    'projects.completed': 'مكتمل',
    'projects.inProgress': 'قيد التنفيذ',
    'projects.viewDetails': 'عرض التفاصيل',
    'projects.viewAll': 'عرض جميع المشاريع',
    
    // Contact
    'contact.badge': 'اتصل بنا',
    'contact.title': 'جاهز لبدء مشروعك؟',
    'contact.subtitle': 'تواصل مع فريقنا اليوم للحصول على استشارة مجانية وعرض سعر مفصل لمشروع البناء الخاص بك.',
    'contact.form.title': 'أرسل لنا رسالة',
    'contact.form.firstName': 'الاسم الأول',
    'contact.form.lastName': 'الاسم الأخير',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.phone': 'رقم الهاتف',
    'contact.form.projectType': 'نوع المشروع',
    'contact.form.projectTypePlaceholder': 'سكني، تجاري، صناعي...',
    'contact.form.message': 'تفاصيل المشروع',
    'contact.form.messagePlaceholder': 'أخبرنا عن متطلبات مشروعك والجدول الزمني والميزانية...',
    'contact.form.send': 'إرسال الرسالة',
    'contact.office': 'موقع المكتب',
    'contact.address': 'طريق الأمير محمد بن فهد، الشاطئ الغربي، الدمام 32413، المملكة العربية السعودية',
    'contact.phone': 'رقم الهاتف',
    'contact.email': 'عنوان البريد الإلكتروني',
    'contact.hours': 'ساعات العمل',
    'contact.hoursDetail': 'الأحد - الخميس: 8:00 ص - 6:00 م\nالجمعة - السبت: مغلق\nالطوارئ: متاح 24/7',
    'contact.emergency': 'تحتاج خدمة طوارئ؟',
    'contact.emergencyDesc': 'نوفر خدمات البناء والإصلاح الطارئة على مدار 24/7 للحالات العاجلة.',
    'contact.emergencyButton': 'خط الطوارئ: +966 54 444 8800',
    
    // Footer
    'footer.description': 'سويفت بيلد تقدم خدمات البناء الاستثنائية في جميع أنحاء المملكة العربية السعودية لأكثر من 15 عامًا. نحن متخصصون في المشاريع السكنية والتجارية والصناعية.',
    'footer.licensed': 'شركة بناء مرخصة ومؤمنة',
    'footer.quickLinks': 'روابط سريعة',
    'footer.ourServices': 'خدماتنا',
    'footer.rights': '© 2024 سويفت بيلد. جميع الحقوق محفوظة.',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الخدمة',
    'footer.cookies': 'سياسة الكوكيز'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const value = {
    language,
    setLanguage,
    t,
    isRTL: language === 'ar'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}