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
    'hero.subtitle': 'Founded in 2013, Swift Build specializes in construction, electrical, mechanical, and fire systems with qualified teams and modern techniques under unified management to ensure quality and speed.',
    'hero.startProject': 'Start Your Project',
    'hero.viewWork': 'View Our Work',
    'hero.experience': 'Specialized engineering and execution experience',
    'hero.projects': 'Integrated system solutions',
    'hero.satisfaction': 'Commitment to quality and timelines',
    
    // About
    'about.badge': 'About Swift Build',
    'about.title': 'Swift Build Contracting',
    'about.subtitle': 'Therefore, we ensured continuous development to upgrade our system,policies and strategic plans, which we contribute actively to enrich our society and earn the trust of our clients, through the consolidation principles: credibility, professionalism and commitment. Swift Build contracting is one of the leading companies in KSA, specializing in the field of construction and has gained vast experience and has made its name in the construction field.',
    'about.heading': 'We are the innovation corporate',
    'about.description1': 'The unique geographic location of the Kingdom of Saudi Arabia made it important for global trade and investment strategic center, help to attract investors and increase economic activity in the country in various fields. The contracting sector is one of the most important economic bases for most countries of the world. Saudi Arabia construction sector contributes directly to drive the growth of the country to move economic activity in many industries and activities associated with it. Also generate a lot of job opportunities according to a report issued by the Council of Saudi Chambers, indicates that the recovery of the construction sector ensures the growth of activity in the development sectors and industries. It means, that the construction sector is the engine of growth in the national economy.',
    'about.description2': 'Such work requires the highest level of professionalism and efficiency in execution. At Swift Build Contracting, we pride ourselves on our unwavering commitment to quality and meticulous attention to detail at every stage, which onsistently enables us to achieve outstanding results. ',
    'about.feature1': 'Strong internal coordination',
    'about.feature2': 'Specialized expertise',
    'about.feature3': 'Commitment to quality and timelines',

    'about.stat1': '25+',
    'about.stat1Label': 'Projects Completed',
    'about.stat2': '30+',
    'about.stat2Label': 'Expert Team Members',
    'about.stat3': '12+',
    'about.stat3Label': 'Years of Excellence',
    'about.stat4': '24/7',
    'about.stat4Label': 'Customer Support',

    'about.history.heading':'COMPANY HISTORY ',
    'about.history.summary':"Swift Build Contracting boasts a highly skilled team of management experts dedicated to meeting the growing demand for advisory services and urban market development by integrating global insights with local expertise. Our experienced team continuously evolves to serve our clients effectively, achieving notable distinction in the construction sector through sound concepts and practices. By successfully completing various construction projects, Swift Build has qualified to be among the leading contractors in the Kingdom. Our management and engineering staff possess a thorough understanding of market regulations and practical, academic, and field experience. Construction and infrastructure projects remain a top priority for Swift Build, supported by our commitment and capability to meet market needs and customer expectations regarding quality and standards. The mission of Swift Build's construction sector has been pivotal in driving urban renewal,contributing to the Kingdom's economic growth, and establishing a new era of modern urban development. We undertake large and medium-sized construction development projects across the Middle East and Saudi markets, providing integrated urban services with professionalism and adherence to international quality standards.",
    "about.history.highlight1": "Established in 2013 with a strong focus on construction and electromechanical works.",
    "about.history.highlight2": "Successfully delivered multiple projects across Saudi Arabia and the Middle East.",
    "about.history.highlight3": "Recognized as one of the leading contractors through quality-driven execution.",
   
    "about.visionMission.badge": "Our Direction",
    "about.visionMission.title": "Vision & Mission",
    "about.vision.title": "Our Vision",
    "about.vision.description": "To be one of the leading construction and electromechanical contractors in the region by delivering innovative, sustainable, and high-quality projects that contribute to modern urban development.",
    "about.mission.title": "Our Mission",
    "about.mission.description": "To deliver construction and infrastructure projects with professionalism, efficiency, and commitment to quality standards while meeting client expectations and supporting long-term development goals.",
    
    "why.badge": "Why Choose Us",
    "why.title": "Why Swift Build",
    "why.subtitle": "Trusted expertise, proven delivery, and a commitment to quality across every project.",
    "why.reason1.title": "Industry Experience",
    "why.reason1.desc": "Years of hands-on experience delivering construction and electromechanical projects across diverse sectors.",
    "why.reason2.title": "Qualified Team",
    "why.reason2.desc": "A highly skilled management and engineering team with deep market and regulatory knowledge.",
    "why.reason3.title": "Quality Commitment",
    "why.reason3.desc": "Strict adherence to international quality standards and best engineering practices.",
    "why.reason4.title": "On-Time Delivery",
    "why.reason4.desc": "Efficient project management ensuring timely delivery without compromising quality.",

    "cta.title": "Ready to Start Your Project?",
    "cta.subtitle": "Let our experienced team help you deliver your next construction or electromechanical project with confidence and quality.",
    "cta.primary": "Start Your Project",
    "cta.secondary": "View Our Projects",

  
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
    "services.back": 'Back to Services',
    
    //services.details

    'services.viewDetails':" View Details",

    'services.details.construction.title': 'Construction ',
    'services.details.construction.desc': "A core pillar since inception with cross-discipline integration between electrical and mechanical teams to reduce clashes, accelerate delivery, and assure quality.",
    'services.details.construction.feature1':"Cross-discipline integration between teams",
    'services.details.construction.feature2': "Clash reduction & coordination",
    'services.details.construction.feature3':"Accelerated project delivery",
    'services.details.construction.feature4':"Top-quality assurance",
    


    'services.details.electrical.title': 'Electrical Works ',
    'services.details.electrical.desc': "Main and sub cabling, underground/in-wall/ceiling installations, lighting and power systems, earthing, safety, and integration with mechanical systems.",
    'services.details.electrical.feature1':"Main & sub cabling systems",
    'services.details.electrical.feature2':"Lighting and power infrastructure",
    'services.details.electrical.feature3':"Safety & grounding systems",
    'services.details.electrical.feature4':"Integration with mechanical works",



    'services.details.plumbing.title': 'Plumbing Works ',
    'services.details.plumbing.desc': "Potable water and drainage networks, ventilation and rain discharge, sanitary fixtures, and close coordination with electrical and HVAC for system integrity.",
    'services.details.plumbing.feature1':"Water supply & drainage networks",
    'services.details.plumbing.feature2':"Ventilation and rain discharge",
    'services.details.plumbing.feature3':"Sanitary installations",
    'services.details.plumbing.feature4':"HVAC and electrical coordination",
    


    'services.details.fire.title': 'Fire & Early Warning Systems ',
    'services.details.fire.desc': "Integrated safety solutions including suppression and alarm systems applying NFPA and Saudi codes with Civil Defense integration.",
    'services.details.fire.feature1':"Fire suppression systems",
    'services.details.fire.feature2':"Alarm panels & detectors",
    'services.details.fire.feature3':"NFPA & Saudi standards",
    'services.details.fire.feature4':"Civil Defense integration",


    'services.details.finishes.title': 'Plastering & Finishes ',
    'services.details.finishes.desc': "From cement plastering to final finishing — paints, ceramics, gypsum, windows, insulation, and landscaping — done with precision and durability.",
    'services.details.finishes.feature1': "Cement plastering & alignment",
    'services.details.finishes.feature2':"Interior & exterior finishes",
    'services.details.finishes.feature3':"Paints, ceramics, gypsum works",
    'services.details.finishes.feature4':"Windows, insulation, landscaping",
    

    'services.details.maintenance.title': 'Support & Maintenance ',
    'services.details.maintenance.desc': "Technical support, preventive maintenance, and emergency repairs — ensuring continued functionality and client satisfaction.",
    'services.details.maintenance.feature1': "Preventive maintenance",
    'services.details.maintenance.feature2':"Emergency repair response",
    'services.details.maintenance.feature3':"Scheduled servicing",
    'services.details.maintenance.feature4':"Post-delivery technical support",


    // Projects
    "projects.badge": "Our Projects",
    "projects.title": "Showcasing Our Finest Work",
    "projects.subtitle": "Explore our portfolio of completed projects that demonstrate our commitment to quality, innovation, and client satisfaction.",

    "projects.luxury.title": "Luxury Residential Complex",
    "projects.luxury.desc": "A modern 50-unit residential complex featuring sustainable design and premium amenities.",
    "projects.luxury.overview": "This luxury residential project redefines modern living with elegant architecture and integrated smart systems. The design emphasizes open spaces, natural lighting, and seamless indoor-outdoor transitions.",
    "projects.luxury.challenges": "Maintaining a balance between luxury aesthetics and structural practicality while adhering to environmental and energy efficiency regulations.",
    "projects.luxury.results": "Delivered ahead of schedule with exceptional client satisfaction, setting new benchmarks for high-end residential standards.",
    
    "projects.luxury.scope.architecture": "Architectural design and 3D visualization",
    "projects.luxury.scope.smart": "Smart lighting and climate control systems",
    "projects.luxury.scope.interior": "Interior design and premium finishing",
    "projects.luxury.scope.landscape": "Landscaping and pool construction",

    "projects.corporate.title": "Corporate Headquarters",
    "projects.corporate.desc": "State-of-the-art office building with modern amenities and energy-efficient systems.",
    "projects.corporate.overview": "A cutting-edge corporate office designed to foster collaboration, productivity, and innovation. The project integrates energy-saving systems and modular office design.",
    "projects.corporate.challenges": "Tight deadlines and strict corporate compliance required an agile design and execution strategy.",
    "projects.corporate.results": "Currently under construction with all major milestones achieved ahead of schedule and within budget.",
    
    "projects.corporate.scope.architecture": "MEP design and integration",
    "projects.corporate.scope.smart": "Sustainable material selection",
    "projects.corporate.scope.interior": "Acoustic and ergonomic interior design",
    "projects.corporate.scope.landscape": "Acoustic and ergonomic interior design",

    "projects.manufacturing.title": "Manufacturing Facility",
    "projects.manufacturing.desc": "Large-scale manufacturing plant with advanced automation and safety features.",
    "projects.manufacturing.overview": "A large-scale manufacturing plant built for maximum efficiency and safety. Designed to accommodate advanced production lines with optimized energy and space usage.",
    "projects.manufacturing.challenges": "Coordinating multiple engineering teams while maintaining full compliance with industrial safety standards.",
    "projects.manufacturing.results": "Successfully delivered and operational, exceeding production targets with minimal energy consumption.",

    "projects.manufacturing.scope.architecture": "Full electrical & mechanical systems",
    "projects.manufacturing.scope.smart": "Fire & safety compliance to NFPA standards",
    "projects.manufacturing.scope.interior":  "Warehouse & logistics zone planning",
    "projects.manufacturing.scope.landscape": "Smart monitoring and maintenance systems",

    "projects.benzaghr.title": "Electromechanical Works for Bin Zagr Insulation Factory",
    "projects.benzaghr.desc": "Full electromechanical systems execution for Bin Zagr insulation factory in Jubail Second Industrial Area.",
    "projects.benzaghr.overview": "The project covers the design and installation of mechanical and electrical systems to ensure stable and efficient industrial operation.",
    "projects.benzaghr.challenges": "Maintaining high industrial safety standards while delivering reliable and precise installations.",
    "projects.benzaghr.results": "Successfully completed with improved operational efficiency and reduced downtime.",
    
    "projects.benzaghr.scope.PowerDistribution": "Power Distribution - Main panels and sub-panels. - Circuit breakers and disconnect switches. - Cable trays, conduits, and connection boxes. - Running and terminating different cables across the factory. ",
    "projects.benzaghr.scope.LightingSystems": " Lighting Systems - Flood lights for outdoor areas. - Streetlights for factory surroundings. - Emergency lights for evacuation routes. - Task and general lighting inside production areas. ",
    "projects.benzaghr.scope.SafetyControl": "Safety Control - Fire control panels and alarm systems. - Shatter-proof doors with electrical integration. - Sound speakers for announcements and emergency alerts. - Compliance with safety codes and standards. ",
    "projects.benzaghr.scope.AuxiliaryInstallations": "Auxiliary Installations - Plug boxes and outlets for equipment and staff use. - Integration of control systems with panels and breakers. - Testing and commissioning of all electrical installations.",

    "projects.ababitin.title": "Electromechanical Works for Ababitin Private Residential Complex",
    "projects.ababitin.desc": "Electromechanical works execution for the private residential compound in Ababitin, Rakah.",
    "projects.ababitin.overview": "Installation of integrated electrical and mechanical systems to provide a reliable and comfortable living environment.",
    "projects.ababitin.challenges": "Coordinating technical works with finishing stages while maintaining quality standards.",
    "projects.ababitin.results": "Delivered with high-quality infrastructure serving all residential units.",

    "projects.ababitin.scope.CivilWorks": " Civil Works- Masonry walls, plastering, and waterproofing. - Roofing and insulation work",
    "projects.ababitin.scope.HighInteriorFinishing": "High Interior Finishing  - Walls: Decorative plaster, paint, and luxury wall coverings. - Ceilings: False ceilings with gypsum board, recessed lighting, and decorative moldings. - Staircases: Steel or concrete base with premium handrails and balustrades.",
    "projects.ababitin.scope.ElectricalWorks": "Electrical Works - Complete wiring and cabling for lighting, power, and appliances. - Installation of switches, sockets, distribution boards, and circuit breakers. - Provision of luxury lighting fixtures, chandeliers, and smart control systems. - Testing and commissioning to ensure safety and",
    "projects.ababitin.scope.PlumbingWorks": " Plumbing Works - Installation of water supply lines, drainage systems, and sanitary fixtures. - Provision of hot and cold-water piping with proper insulation. - Installation of bathroom fittings, kitchen sinks, and water heaters. - Testing for leaks, pressure, and flow.",
    "projects.ababitin.scope.ExteriorWorks": "Exterior Works Exterior Works - Boundary walls and gates. - Landscaping, walkways, and outdoor lighting. - Parking areas and paving. ",
    "projects.ababitin.scope.Safety&Compliance": "Safety & Compliance   - Fire-rated doors and emergency systems. - Compliance with Saudi building codes and international standards.  ",

    "projects.shiblan.title": "Electromechanical Works for Al Shiblan Mall",
    "projects.shiblan.desc": "Execution of electromechanical works for Al Shiblan Mall in North Khobar.",
    "projects.shiblan.overview": "Includes installing large-scale electromechanical systems suitable for commercial center operations.",
    "projects.shiblan.challenges": "Designing systems capable of continuous operation while meeting energy, ventilation, and safety requirements.",
    "projects.shiblan.results": "Delivered a fully integrated infrastructure supporting efficient mall operation.",
    
    "projects.shiblan.scope.mep": "Design & execution of mall-scale electromechanical systems",
    "projects.shiblan.scope.fire": "Fire-fighting systems and early-warning alarm systems",
    "projects.shiblan.scope.energy": "Energy management and industrial ventilation solutions",
    "projects.shiblan.scope.infra": "Utility infrastructure and technical services setup",
    "projects.shiblan.scope.maintenance": "Operational maintenance plan post-handover",

    "projects.hayatFinishes.title": "Finishing Works for Hayat Residential Units",
    "projects.hayatFinishes.desc": "Full interior finishing for residential units in the Hayat project.",
    "projects.hayatFinishes.overview": "High-quality finishing executed with precision across all construction phases.",
    "projects.hayatFinishes.challenges": "Ensuring consistent finishing quality while meeting delivery timelines.",
    "projects.hayatFinishes.results": "Delivered premium units that meet client expectations and elevate the project's value.",
 
    "projects.hayatFinishes.scope.PlasterWorks": " Plaster Works - Internal and external wall plastering using highquality cement mortar. - Smooth finishing for painting and decorative applications. - Application of waterproof plaster in wet areas (bathrooms, kitchens). ",
    "projects.hayatFinishes.scope.ElectricalWorks": "Electrical Works - Complete wiring and cabling for lighting, power, and appliances. - - Installation of switches, sockets, distribution boards, and circuit breakers. Provision of lighting fixtures, emergency lights, and control panels. - Testing and commissioning to ensure safety and compliance with standards. ",
    "projects.hayatFinishes.scope.PlumbingWorks": "Plumbing Works - Installation of water supply lines, drainage systems, and sanitary fixtures. - - Provision of hot and cold-water piping with proper insulation. Installation of bathroom fittings, kitchen sinks, and water heaters. - Testing for leaks, pressure, and flow to ensure reliability. ",
    "projects.hayatFinishes.scope.Finishing&Compliance": "Finishing & Compliance  - Surface preparation, cleaning, and final touch-ups. - Compliance with Saudi building codes and international standards.",

    "projects.rakahUnits.title": "Electromechanical & Finishing Works for Rakah Residential Units",
    "projects.rakahUnits.desc": "Complete electromechanical and finishing works for residential units in Rakah.",
    "projects.rakahUnits.overview": "Combines MEP systems installation with high-standard finishing works for fully ready units.",
    "projects.rakahUnits.challenges": "Managing and synchronizing multi-scope work within a unified schedule.",
    "projects.rakahUnits.results": "Delivered high-quality units with complete infrastructure and system readiness.",

    "projects.rakahUnits.scope.CivilWorks": "Civil Works - Masonry walls, plastering, and waterproofing. - Roofing and insulation work",
    "projects.rakahUnits.scope.HighInteriorFinishing": "High Interior Finishing - Walls: Decorative plaster, paint, and luxury wall coverings. - Ceilings: False ceilings with gypsum board, recessed lighting, and decorative moldings. - Staircases: Steel or concrete base with premium handrails and balustrades.",
    "projects.rakahUnits.scope.ElectricalWorks": " Electrical Works- Complete wiring and cabling for lighting, power, and appliances. - Installation of switches, sockets, distribution boards, and circuit breakers. - Provision of luxury lighting fixtures, chandeliers, and smart control systems. - Testing and commissioning to ensure safety and compliance.",
    "projects.rakahUnits.scope.PlumbingWorks": "Plumbing Works  - Installation of water supply lines, drainage systems, and sanitary fixtures. - Provision of hot and cold-water piping with proper insulation. - Installation of bathroom fittings, kitchen sinks, and water heaters. - Testing for leaks, pressure, and flow. ",
    "projects.rakahUnits.scope.ExteriorWorks": "Exterior Works - Boundary walls and gates. - Landscaping, walkways, and outdoor lighting. - Parking areas and paving. ",
    "projects.rakahUnits.scope.Safety&Compliance": "Safety & Compliance - Fire-rated doors and emergency systems. - Compliance with Saudi building codes and international standards.  ",
    
    "projects.DhahranTechnoValley.title": "GENERAL ELECTRICAL | DHAHRAN TECHNO VALLEY.",
    "projects.DhahranTechnoValley.desc": "Complete electromechanical and finishing works for Dhahran Techno valley.",
    "projects.DhahranTechnoValley.overview": "Combines MEP systems installation with high-standard finishing works for fully ready units.",
    "projects.DhahranTechnoValley.challenges": "Managing and synchronizing multi-scope work within a unified schedule.",
    "projects.DhahranTechnoValley.results": "Delivered high-quality units with complete infrastructure and system readiness.",

    "projects.DhahranTechnoValley.scope.StairHandrails": "Stair Handrails  - Supply, fabrication, and installation of steel handrails for staircases. - Designed to meet safety codes with proper height, spacing, and durability. - Finishing with galvanizing or painting for corrosion resistance. ",
    "projects.DhahranTechnoValley.scope.ElectricalGratings": "Electrical Gratings - Fabrication and installation of steel gratings for electrical trenches, service platforms, and walkways. - Gratings to be load-bearing, anti-slip, and galvanized for long-term use. - Proper fixing and alignment to ensure safe access and maintenance.",
    "projects.DhahranTechnoValley.scope.MonkeyLadder": "Monkey Ladder  - Supply and installation of steel monkey ladder with safety cage. - Anchored securely to building structure for vertical access. - Designed in compliance with industrial safety standards. ",
    "projects.DhahranTechnoValley.scope.Finishing&Compliance": "Finishing & Compliance   - Surface preparation, priming, and painting of all fabricated steel components. - Compliance with local building codes and international standards. - Final inspection, testing, and submission of as built drawings and QA/QC documentation. ",

    "projects.Halliburton.title": "HALLIBURTON RESEARCHING CENTER | DHAHRAN TECHNO VALLEY",
    "projects.Halliburton.desc": "Complete finishing works for Halliburton Researching Center.",
    "projects.Halliburton.overview": "Combines MEP systems installation with high-standard finishing works for fully ready units.",
    "projects.Halliburton.challenges": "Managing and synchronizing multi-scope work within a unified schedule.",
    "projects.Halliburton.results": "Delivered high-quality units with complete infrastructure and system readiness.",

    "projects.Halliburton.scope.SlidingGates": "Sliding Gates   - Two car sliding gates fabricated from structural steel, complete with motorized operation systems. - One truck sliding gate designed for heavy-duty use, with motorized drive unit suitable for large vehicle access. - All gates to include guide rails, rollers, locking mechanisms, and safety sensors. ",
    "projects.Halliburton.scope.PerimeterFence": "Perimeter Fence  - Fabrication and installation of steel fencing around designated boundaries. - Fence to be galvanized and painted for durability against corrosion. - Integration with gates for seamless access control. ",
    "projects.Halliburton.scope.AccessStructures": " Access Structures  - Steel stairs fabricated with anti-slip treads, handrails, and guardrails. - Monkey ladder designed for vertical access, complete with safety cage and anchoring system.",
    "projects.Halliburton.scope.Doors": "Doors - Shatter-proof steel doors for secure entry points. - Fire-rated doors fabricated and installed in compliance with NFPA and local civil defense standards. - Stainless steel (SS) doors for specialized areas requiring hygiene and corrosion resistance.  ",

    "projects.Pepsico.title": "PEPSICO Factory | 2nd Industrial Dammam.",
    "projects.Pepsico.desc": "Complete finishing works for Pepsico Factory.",
    "projects.Pepsico.overview": "Combines MEP systems installation with high-standard finishing works for fully ready units.",
    "projects.Pepsico.challenges": "Managing and synchronizing multi-scope work within a unified schedule.",
    "projects.Pepsico.results": "Delivered high-quality units with complete infrastructure and system readiness.",

    "projects.Pepsico.scope.Doors": "Doors  Stainless Steel (SS) Doors: Supply and installation of durable, corrosion-resistant SS doors for specialized areas. - Fire-Rated Doors: Fabrication and installation in compliance with NFPA and Saudi Civil Defense standards, ensuring safety and protection.  ",
    "projects.Pepsico.scope.MonkeyLadders": "Monkey Ladders - Supply and installation of steel monkey ladders with safety cage. - Anchored securely to building structure for vertical access. - Designed to meet industrial safety codes.",
    "projects.Pepsico.scope.Gates": "Gates  - Floating Gate: Fabricated steel gate with smooth operation, designed for durability and aesthetics. - Sliding Gates with Motors:  four car sliding gates with motorized systems. - Gates to include guide rails, rollers, locking mechanisms, and safety sensors. ",
    "projects.Pepsico.scope.Turnstiles": "Turnstiles - Supply and installation of steel turnstiles for controlled pedestrian access. - Options for manual or motorized operation, integrated with access control systems. - Designed for security, durability, and smooth flow of personnel.  ",
    "projects.Pepsico.scope.Finishing&Compliance": "Finishing & Compliance  - Surface preparation, priming, and painting of all fabricated steel components. - Compliance with Saudi building codes and international standards. - Final inspection, testing, and submission of as-built drawings, material certificates, and QA/QC documentation.",


    "projects.moreProjects":"More Projects",
    "projects.Residential_Villa_Al_Ahsa.title":"Residential Villa — Al Ahsa",
    "projects.Residential_Villa_Al_Ahsa.subtitle":"Construction, electrical & mechanical works",

    "projects.Residential_Villa_Al_Dammam.title":"Residential Villa — Dammam",
    "projects.Residential_Villa_Al_Dammam.subtitle":"Construction, electrical & mechanical works",

    "projects.Bin_Sanem_Factory.title":"Electrical Works — Bin Sanem Factory",
    "projects.Bin_Sanem_Factory.subtitle":"Electrical installation & industrial systems",
    
    "projects.Residential_Villa_Al_Khobar.title":"Residential Villa — Al Khobar",
    "projects.Residential_Villa_Al_Khobar.subtitle":"Construction, electrical & mechanical works",
    
    "projects.Residential_Villa_Al_Jubail.title":"Residential Villa — Al Jubail",
    "projects.Residential_Villa_Al_Jubail.subtitle":"Construction, electrical & mechanical works",

    "projects.Residential_Villa_Qatif.title":"Residential Villa — Qatif",
    "projects.Residential_Villa_Qatif.subtitle":"Construction, electrical & mechanical works",

    "projects.completed": "Completed",
    "projects.inProgress": "In Progress",
    "projects.viewDetails": "View Details",
    "projects.viewAll": "View All Projects",

    "projects.overview": "Overview",
    "projects.scopeOfWork": "Scope of Work",
    "projects.challenges": "Challenges",
    "projects.results": "Results",
    "projects.back": "Back to Projects",
    "projects.notFound": "Project not found",

    'projects.categoryElectromechanical': "Electromechanical",
    'projects.categoryFinishing': "Finishing Works",
    'projects.categoryResidential': "Residential",
    'projects.categoryCommercial': "Commercial",
    'projects.categoryIndustrial': "Industrial",
    'projects.categoryElectroFinish': "Electromechanical & Finishing",
    



    
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
    "contact.form.sending": "Sending...",
    "contact.successMessage": "Your message has been sent successfully. We will get back to you shortly.",
    'contact.office': 'Office Location',
    'contact.address': 'Prince Mohammed Bin Fahd Road, Ash Shati Al Gharbi, Dammam 32413, Saudi Arabia',
    'contact.phone': 'Phone Number',
    'contact.email': 'Email Address',
    'contact.hours': 'Business Hours',
    'contact.hoursDetail': 'Sunday - Thursday: 8:00 AM - 6:00 PM\nFriday - Saturday: Closed\nEmergency: 24/7 Available',
    'contact.emergency': 'Need an Emergency Service?',
    'contact.emergencyDesc': 'We provide 24/7 emergency construction and repair services for urgent situations.',
    'contact.emergencyButton': 'Emergency Hotline: info@swiftbuild-sa.com',
    
    // Footer
    'footer.description': 'Swift Build has been delivering exceptional construction services across Saudi Arabia for over 15 years. We specialize in residential, commercial, and industrial construction projects.',
    'footer.licensed': 'Licensed & Insured Construction Company',
    'footer.quickLinks': 'Quick Links',
    'footer.ourServices': 'Our Services',
    'footer.rights': '© 2025 Swift Build. All rights reserved.',
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
    'hero.subtitle': 'تأسست سويفت بيلد عام 2013 متخصصة في الإنشاءات والأعمال الكهربائية والميكانيكية وأنظمة الحريق، مع فرق مؤهلة وتقنيات حديثة تحت إدارة موحدة لضمان الجودة وسرعة الإنجاز.',
    'hero.startProject': 'ابدأ مشروعك',
    'hero.viewWork': 'اطلع على أعمالنا',
    'hero.experience': 'أكثر من 15 سنة خبرة',
    'hero.projects': 'أكثر من 500 مشروع مكتمل',
    'hero.satisfaction': '100% رضا العملاء',
    
    // About
    'about.badge': 'حول سويفت بيلد',
    'about.title': 'سويفت بيلد للمقاولات العامة',
    'about.subtitle': 'تأسست شركة سويفت بيلد عام 2013 لتكون متخصصة في تنفيذ أعمال الإنشاءات والأعمال الكهربائية والميكانيكية للمباني السكنية وغير السكنية. تواكب الشركة رؤية المملكة 2030، وتعتمد على فرق فنية وهندسية مؤهلة وأحدث التقنيات والمنهجيات التنفيذية. توفر خدمات متكاملة تغطي الهيكل الخرساني، الميكانيكية، الكهربائية، وأنظمة الحريق والسلامة تحت إدارة موحدة تضمن الجودة وسرعة الإنجاز.',
    'about.heading': 'فريقنا وإدارتنا',
    'about.description1': 'إدارة تنفيذية تضع الاستراتيجيات وتشرف على الأداء العام؛ إدارة فنية تشمل الإنشاءات والكهرباء والميكانيكا وأنظمة الحريق؛ إدارة تشغيلية تشمل الموارد البشرية والمالية والمشتريات؛ إضافة إلى فرق هندسية وميدانية من مهندسين وفنيين متخصصين.',
    'about.description2': 'ما يميز الفريق: تنسيق داخلي عالي، خبرات متخصصة، التزام بالجودة والمواعيد. نؤمن أن التميز لا يأتي من الخدمة فقط بل من كيفية تقديمها عبر حلول مصممة حسب الحاجة وتقنيات حديثة ودعم فني مستمر واستدامة ومسؤولية وأسعار تنافسية.',
    'about.feature1': 'تنسيق داخلي عالي',
    'about.feature2': 'خبرات متخصصة',
    'about.feature3': 'التزام بالجودة والمواعيد',

    'about.stat1': '+25',
    'about.stat1Label': 'مشروع مكتمل',
    'about.stat2': '+30',
    'about.stat2Label': 'عضو فريق خبير',
    'about.stat3': '+12',
    'about.stat3Label': 'سنة من التميز',
    'about.stat4': '24/7',
    'about.stat4Label': 'دعم العملاء',
    
    "about.history.heading": "نبذة عن تاريخ الشركة",
    "about.history.summary": "تفخر شركة سويفت بيلد للمقاولات بامتلاك فريق إداري وهندسي عالي الكفاءة، يعمل على تلبية الطلب المتزايد على الخدمات الاستشارية وتطوير الأسواق العمرانية من خلال الدمج بين الخبرات العالمية والمعرفة المحلية. يواصل فريق العمل تطوير خبراته بشكل مستمر لخدمة عملائنا بكفاءة، مما مكّن الشركة من تحقيق مكانة متميزة في قطاع الإنشاءات عبر تطبيق مفاهيم وممارسات هندسية مدروسة. ومن خلال تنفيذ العديد من المشاريع الإنشائية بنجاح، استطاعت سويفت بيلد أن تكون ضمن نخبة شركات المقاولات في المملكة. يتمتع فريق الإدارة والهندسة بفهم عميق للأنظمة واللوائح، إضافة إلى خبرات عملية وأكاديمية وميدانية واسعة. وتُعد مشاريع الإنشاءات والبنية التحتية من أولويات الشركة، مدعومة بالقدرة والالتزام بتلبية متطلبات السوق وتوقعات العملاء من حيث الجودة والمعايير. وقد كان لدور قطاع الإنشاءات في سويفت بيلد أثر محوري في دعم التجديد العمراني، والمساهمة في النمو الاقتصادي للمملكة، وترسيخ مرحلة جديدة من التطوير الحضري الحديث. كما تنفذ الشركة مشاريع تطوير إنشائي متوسطة وكبيرة الحجم في أسواق المملكة والشرق الأوسط، مقدمة خدمات عمرانية متكاملة باحترافية ووفق أعلى معايير الجودة العالمية.",
    "about.history.highlight1": "تأسست الشركة عام 2013 مع تركيز قوي على أعمال الإنشاءات والإلكتروميكانيك.",
    "about.history.highlight2": "تنفيذ العديد من المشاريع الناجحة في المملكة العربية السعودية وأسواق الشرق الأوسط.",
    "about.history.highlight3": "اكتساب مكانة متقدمة ضمن شركات المقاولات الرائدة بفضل جودة التنفيذ.",
    
    "about.visionMission.badge": "اتجاهنا",
    "about.visionMission.title": "الرؤية والرسالة",
    "about.vision.title": "رؤيتنا",
    "about.vision.description": "أن نكون من الشركات الرائدة في مجال الإنشاءات والأعمال الإلكتروميكانيكية من خلال تقديم مشاريع مبتكرة ومستدامة وعالية الجودة تساهم في تطوير العمران الحديث.",
    "about.mission.title": "رسالتنا",
    "about.mission.description": "تنفيذ مشاريع الإنشاءات والبنية التحتية باحترافية وكفاءة عالية، مع الالتزام بأعلى معايير الجودة وتلبية تطلعات العملاء ودعم أهداف التنمية طويلة المدى.",
    
    "why.badge": "لماذا سويفت بيلد",
    "why.title": "لماذا تختار سويفت بيلد",
    "why.subtitle": "خبرة موثوقة، تنفيذ احترافي، والتزام بالجودة في جميع مراحل المشروع.",
    "why.reason1.title": "خبرة واسعة",
    "why.reason1.desc": "سنوات من الخبرة العملية في تنفيذ مشاريع الإنشاءات والأعمال الإلكتروميكانيكية بمختلف القطاعات.",
    "why.reason2.title": "فريق مؤهل",
    "why.reason2.desc": "فريق إداري وهندسي عالي الكفاءة يمتلك معرفة عميقة بالأنظمة ومتطلبات السوق.",
    "why.reason3.title": "التزام بالجودة",
    "why.reason3.desc": "تطبيق أعلى معايير الجودة العالمية وأفضل الممارسات الهندسية في جميع المشاريع.",
    "why.reason4.title": "الالتزام بالمواعيد",
    "why.reason4.desc": "إدارة فعالة للمشاريع تضمن التسليم في الوقت المحدد دون التأثير على جودة التنفيذ.",

    // "cta.title": "هل أنت مستعد لبدء مشروعك؟",
    // "cta.subtitle": "فريقنا المتخصص جاهز لدعمك في تنفيذ مشروعك الإنشائي أو الإلكتروميكانيكي بأعلى مستويات الجودة والاحترافية.",
    // "cta.primary": "ابدأ مشروعك",
    // "cta.secondary": "استعرض مشاريعنا",


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
    "services.back": 'العودة إلى الخدمات',
    
    //services.details
    'services.viewDetails':" عرض التفاصيل",
    'services.details.construction.title': 'إنشاءات',
    'services.details.construction.desc': "ركيزة أساسية منذ البداية مع التكامل متعدد التخصصات بين الفرق الكهربائية والميكانيكية لتقليل الاشتباكات وتسريع التسليم وضمان الجودة.",
    'services.details.construction.feature1':"التكامل متعدد التخصصات بين الفرق",
    'services.details.construction.feature2': "تقليل الصدام والتنسيق",
    'services.details.construction.feature3':"تسريع تسليم المشروع",
    'services.details.construction.feature4':"ضمان الجودة العالية",

    'services.details.electrical.title': 'الأعمال الكهربائية',
    'services.details.electrical.desc': "الكابلات الرئيسية والفرعية، والتركيبات تحت الأرض/داخل الحائط/السقف، وأنظمة الإضاءة والطاقة، والتأريض، والسلامة، والتكامل مع الأنظمة الميكانيكية.",
    'services.details.electrical.feature1':"أنظمة الكابلات الرئيسية والفرعية",
    'services.details.electrical.feature2':"البنية التحتية للإضاءة والطاقة",
    'services.details.electrical.feature3':"أنظمة الأمان والتأريض",
    'services.details.electrical.feature4':"التكامل مع الأعمال الميكانيكية",

    'services.details.plumbing.title': 'أعمال السباكة',
    'services.details.plumbing.desc': "شبكات مياه الشرب والصرف الصحي، والتهوية وتصريف الأمطار، والتجهيزات الصحية، والتنسيق الوثيق مع الكهرباء وأنظمة التدفئة والتهوية وتكييف الهواء لضمان سلامة النظام.",
    'services.details.plumbing.feature1':"شبكات إمدادات المياه والصرف الصحي",
    'services.details.plumbing.feature2':"التهوية وتصريف الأمطار",
    'services.details.plumbing.feature3':"تركيبات صحية",
    'services.details.plumbing.feature4':"تنسيق التدفئة والتهوية وتكييف الهواء والكهرباء",

    'services.details.fire.title': 'أنظمة الحرائق والإنذار المبكر',
    'services.details.fire.desc': "حلول السلامة المتكاملة بما في ذلك أنظمة القمع والإنذار التي تطبق معايير NFPA والكود السعودي مع تكامل الدفاع المدني.",
    'services.details.fire.feature1':"أنظمة إخماد الحرائق",
    'services.details.fire.feature2':"لوحات الإنذار وأجهزة الكشف",
    'services.details.fire.feature3':"NFPA والمعايير السعودية",
    'services.details.fire.feature4':"تكامل الدفاع المدني",

    'services.details.finishes.title': 'اللياسة والتشطيبات',
    'services.details.finishes.desc': "من التجصيص الأسمنتي إلى التشطيب النهائي - الدهانات والسيراميك والجبس والنوافذ والعزل وتنسيق الحدائق - يتم ذلك بدقة ومتانة.",
    'services.details.finishes.feature1': "اللياسة والمحاذاة الأسمنتية",
    'services.details.finishes.feature2':"تشطيبات داخلية وخارجية",
    'services.details.finishes.feature3':"دهانات، سيراميك، أعمال جبس",
    'services.details.finishes.feature4':"نوافذ، عزل، تنسيق حدائق",

    'services.details.maintenance.title': 'الدعم والصيانة',
    'services.details.maintenance.desc': "الدعم الفني والصيانة الوقائية والإصلاحات الطارئة - ضمان استمرار الأداء الوظيفي ورضا العملاء.",
    'services.details.maintenance.feature1': "الصيانة الوقائية",
    'services.details.maintenance.feature2':"الاستجابة للإصلاح في حالات الطوارئ",
    'services.details.maintenance.feature3':"الخدمة المجدولة",
    'services.details.maintenance.feature4':"الدعم الفني بعد التسليم",

    // Projects
    "projects.badge": "مشاريعنا",
    "projects.title": "عرض أفضل أعمالنا",
    "projects.subtitle": "استكشف محفظة المشاريع المكتملة التي تُظهر التزامنا بالجودة والابتكار ورضا العملاء.",

    "projects.luxury.title": "مجمع سكني فاخر",
    "projects.luxury.desc": "مجمع سكني حديث مكون من 50 وحدة يتميز بتصميم مستدام ووسائل راحة متميزة.",
    "projects.luxury.overview": "يُعيد هذا المشروع الفاخر تعريف أسلوب المعيشة الحديثة من خلال تصميم معماري أنيق وأنظمة ذكية متكاملة، مع التركيز على المساحات المفتوحة والإضاءة الطبيعية والانتقال السلس بين المساحات الداخلية والخارجية.",
    "projects.luxury.challenges": "الحفاظ على التوازن بين الفخامة العملية والامتثال لمعايير البيئة وكفاءة الطاقة.",
    "projects.luxury.results": "تم تسليمه قبل الموعد المحدد وبمستوى عالٍ من رضا العملاء، مما وضع معايير جديدة للفخامة السكنية في المنطقة.",

    "projects.luxury.scope.architecture": "التصميم المعماري والتصور ثلاثي الأبعاد",
    "projects.luxury.scope.smart": "أنظمة الإضاءة الذكية والتحكم في المناخ",
    "projects.luxury.scope.interior": "التصميم الداخلي والتشطيب المتميز",
    "projects.luxury.scope.landscape": "تنسيق المناظر الطبيعية وإنشاء حمامات السباحة",
    
    "projects.corporate.title": "المقر الرئيسي للشركة",
    "projects.corporate.desc": "مبنى مكاتب متطور مع وسائل راحة حديثة وأنظمة موفرة للطاقة.",
    "projects.corporate.overview": "مقر إداري متطور صُمم لتعزيز بيئة العمل التعاونية والإبداعية. يدمج أنظمة موفرة للطاقة وتصميمًا مرنًا للمكاتب.",
    "projects.corporate.challenges": "تطلبت الجداول الزمنية الضيقة ومتطلبات الامتثال الصارمة تنفيذ إستراتيجية تصميم وتنفيذ مرنة وسريعة.",
    "projects.corporate.results": "قيد التنفيذ حاليًا مع تحقيق جميع المراحل الأساسية في الوقت المحدد وضمن الميزانية.",
    
    "projects.corporate.scope.architecture": "تصميم وتكامل الهندسة الكهربائية والميكانيكية",
    "projects.corporate.scope.smart": "الاختيار المستدام للمواد",
    "projects.corporate.scope.interior": "تصميم داخلي صوتي ومريح",
    "projects.corporate.scope.landscape": "تصميم داخلي صوتي ومريح",
    
    "projects.manufacturing.title": "منشأة تصنيع",
    "projects.manufacturing.desc": "مصنع تصنيع واسع النطاق مع أتمتة متقدمة وميزات أمان عالية.",
    "projects.manufacturing.overview": "منشأة تصنيع ضخمة تم تصميمها لتحقيق أقصى كفاءة وأمان، مع مراعاة استخدام الطاقة والمساحات بشكل مثالي.",
    "projects.manufacturing.challenges": "تنسيق فرق هندسية متعددة مع الالتزام الكامل بمعايير السلامة الصناعية الصارمة.",
    "projects.manufacturing.results": "تم التسليم بنجاح والمصنع يعمل بكفاءة عالية متجاوزًا الأهداف الإنتاجية مع استهلاك منخفض للطاقة.",

    "projects.manufacturing.scope.architecture": "أنظمة كهربائية وميكانيكية كاملة",
    "projects.manufacturing.scope.smart": "الامتثال لمعايير السلامة ومكافحة الحرائق لمعايير NFPA",
    "projects.manufacturing.scope.interior": "تخطيط مناطق المستودعات والخدمات اللوجستية",
    "projects.manufacturing.scope.landscape": "أنظمة المراقبة والصيانة الذكية",

    "projects.scope.architecture": "التصميم المعماري والتصوير ثلاثي الأبعاد",
    "projects.scope.smart": "أنظمة الإضاءة الذكية والتحكم في المناخ",
    "projects.scope.interior": "التصميم الداخلي والتشطيبات الفاخرة",
    "projects.scope.landscape": "تنسيق الحدائق وبناء المسابح",

    "projects.benzaghr.title": "أعمال الإلكتروميكانيك لمصنع بن زقر للعوازل",
    "projects.benzaghr.desc": "تنفيذ أعمال الإلكتروميكانيك الكاملة لمصنع بن زقر للعوازل في الصناعية الثانية بالجبيل.",
    "projects.benzaghr.overview": "يشمل المشروع تصميم وتنفيذ الأنظمة الميكانيكية والكهربائية وفق معايير عالية لضمان تشغيل مستقر وكفاءة تشغيلية للمصنع.",
    "projects.benzaghr.challenges": "تحقيق أعلى مستويات السلامة الصناعية مع الالتزام بمتطلبات الجودة في بيئة تشغيلية معقدة.",
    "projects.benzaghr.results": "تم تنفيذ المشروع بنجاح مع تحسين الأداء التشغيلي وتقليل الأعطال ورفع كفاءة التشغيل.",
  
    "projects.benzaghr.scope.PowerDistribution": "توزيع الطاقة الكهربائية – اللوحات الرئيسية والفرعية. – القواطع الكهربائية ومفاتيح الفصل. – مجاري الكابلات والمواسير وصناديق التوصيل. – مدّ وتمديد وإنهاء مختلف أنواع الكابلات داخل المصنع.",
    "projects.benzaghr.scope.LightingSystems": "أنظمة الإضاءة – كشافات إضاءة للمناطق الخارجية. – أعمدة إنارة لمحيط المصنع. – إضاءة طوارئ لمسارات الإخلاء. – إضاءة تشغيلية وعامة داخل مناطق الإنتاج.",
    "projects.benzaghr.scope.SafetyControl": "أنظمة السلامة والتحكم – لوحات التحكم في الحريق وأنظمة الإنذار. – أبواب مقاومة للكسر مع تكامل كهربائي. – سماعات صوت للإعلانات والتنبيهات الطارئة. – الالتزام باشتراطات السلامة والمعايير المعتمدة.",
    "projects.benzaghr.scope.AuxiliaryInstallations": "الأعمال المساعدة – صناديق ومخارج الكهرباء لاستخدام المعدات والعاملين. – تكامل أنظمة التحكم مع اللوحات والقواطع. – اختبار وتشغيل جميع التركيبات الكهربائية.",

    "projects.ababitin.title": "أعمال الإلكتروميكانيك لمجمع سكني خاص أبابطين",
    "projects.ababitin.desc": "تنفيذ أعمال الإلكتروميكانيك للمجمع السكني الخاص في أبابطين بالراكة.",
    "projects.ababitin.overview": "تم تنفيذ الأنظمة الكهربائية والميكانيكية بشكل متكامل لتوفير بيئة معيشية عالية الاعتمادية والراحة.",
    "projects.ababitin.challenges": "التنسيق بين الأعمال السكنية والتشطيبات النهائية مع الالتزام بالمعايير الفنية.",
    "projects.ababitin.results": "تم التسليم بجودة عالية وضمان جاهزية البنية التحتية لجميع وحدات المشروع.",
    
    "projects.ababitin.scope.CivilWorks": "الأعمال المدنية – أعمال المباني بالطوب، المحارة، والعزل المائي. – أعمال الأسقف والعزل الحراري.",
    "projects.ababitin.scope.HighInteriorFinishing": "التشطيبات الداخلية الفاخرة – الحوائط: محارة ديكورية، دهانات، وكسوات حائط فاخرة. – الأسقف: أسقف مستعارة بالجبس بورد مع إضاءة مخفية وكرانيش زخرفية. – السلالم: هياكل معدنية أو خرسانية مع درابزينات عالية الجودة.",
    "projects.ababitin.scope.ElectricalWorks": "الأعمال الكهربائية – تمديدات كاملة للإضاءة والقوى والأجهزة. – تركيب المفاتيح، البرايز، لوحات التوزيع، والقواطع. – توريد وتركيب وحدات إضاءة فاخرة، نجف، وأنظمة تحكم ذكية. – الاختبار والتشغيل لضمان السلامة.",
    "projects.ababitin.scope.PlumbingWorks": "أعمال السباكة – تركيب شبكات تغذية المياه والصرف الصحي والأدوات الصحية. – تمديد مواسير المياه الساخنة والباردة مع العزل المناسب. – تركيب خلاطات الحمامات، أحواض المطابخ، وسخانات المياه. – اختبار التسريبات والضغط ومعدلات التدفق.",
    "projects.ababitin.scope.ExteriorWorks": "الأعمال الخارجية – أسوار وبوابات خارجية. – تنسيق الموقع العام والممرات والإضاءة الخارجية. – مناطق انتظار السيارات وأعمال الرصف.",
    "projects.ababitin.scope.Safety&Compliance": "السلامة والالتزام – أبواب مقاومة للحريق وأنظمة الطوارئ. – الالتزام بكود البناء السعودي والمعايير الدولية.",

    "projects.shiblan.title": "أعمال الإلكتروميكانيك لمول الشبلان",
    "projects.shiblan.desc": "تنفيذ أعمال الإلكتروميكانيك في مشروع مول الشبلان بالخبر الشمالية.",
    "projects.shiblan.overview": "يتضمن المشروع تركيب وتنفيذ الأنظمة الكهروميكانيكية بما يلائم طبيعة المراكز التجارية كبيرة الحجم.",
    "projects.shiblan.challenges": "تصميم أنظمة تتحمل التشغيل المستمر مع مراعاة معايير السلامة والتهوية والتحكم بالطاقة.",
    "projects.shiblan.results": "تطوير بنية متكاملة تدعم تشغيل المول بكفاءة عالية وموثوقية ممتازة.",

    "projects.shiblan.scope.mep": "تصميم وتنفيذ أنظمة إلكتروميكانيك لمراكز تجارية",
    "projects.shiblan.scope.fire": "أنظمة المكافحة والحريق وأنظمة إنذار مبكر",
    "projects.shiblan.scope.energy": "حلول إدارة الطاقة والتهوية الصناعية",
    "projects.shiblan.scope.infra": "بنية تحتية للمرافق والخدمات الفنية",
    "projects.shiblan.scope.maintenance": "خطة صيانة تشغيلية ما بعد التسليم",

    "projects.hayatFinishes.title": "أعمال التشطيبات لوحدات سكنية بمشروع حياة",
    "projects.hayatFinishes.desc": "تنفيذ تشطيبات كاملة للوحدات السكنية في مشروع حياة.",
    "projects.hayatFinishes.overview": "يشمل المشروع تنفيذ أعمال تشطيب احترافية تركز على الجودة والدقة في جميع المراحل.",
    "projects.hayatFinishes.challenges": "ضمان الاتساق في جودة التشطيبات مع الالتزام بالمواعيد المحددة.",
    "projects.hayatFinishes.results": "تسليم وحدات بتشطيبات فاخرة تلبي توقعات العملاء وتعزز قيمة المشروع.",

    "projects.hayatFinishes.scope.PlasterWorks": "أعمال المحارة – محارة داخلية وخارجية باستخدام مونة أسمنتية عالية الجودة. – تشطيب ناعم جاهز للدهانات والأعمال الديكورية. – استخدام محارة مقاومة للمياه في المناطق الرطبة (الحمامات والمطابخ).",
    "projects.hayatFinishes.scope.ElectricalWorks": "الأعمال الكهربائية – تمديدات كاملة للإضاءة والقوى. – تركيب المفاتيح، البرايز، لوحات التوزيع، والقواطع. – توريد وتركيب وحدات الإضاءة، إضاءة الطوارئ، ولوحات التحكم. – الاختبار والتشغيل طبقًا للمعايير.",
    "projects.hayatFinishes.scope.PlumbingWorks": "أعمال السباكة – تركيب شبكات المياه والصرف والأدوات الصحية. – تمديد مواسير المياه الساخنة والباردة مع العزل. – تركيب خلاطات الحمامات، الأحواض، وسخانات المياه. – اختبارات الضغط والتسريب لضمان الكفاءة.",
    "projects.hayatFinishes.scope.Finishing&Compliance": "التشطيب والالتزام – تجهيز الأسطح، التنظيف، والتشطيبات النهائية. – الالتزام بكود البناء السعودي والمعايير الدولية.",

    "projects.rakahUnits.title": "أعمال الإلكتروميكانيك والتشطيبات بوحدات سكنية بالراكة",
    "projects.rakahUnits.desc": "تنفيذ أعمال الإلكتروميكانيك والتشطيبات للوحدات السكنية في الراكة.",
    "projects.rakahUnits.overview": "يجمع المشروع بين الأعمال الميكانيكية والكهربائية والتشطيبات النهائية لتقديم وحدات متكاملة الجاهزية.",
    "projects.rakahUnits.challenges": "إدارة تعدد الأعمال وتنسيقها ضمن جدول زمني واحد لضمان جودة التنفيذ.",
    "projects.rakahUnits.results": "تسليم وحدات عالية الجودة مع جاهزية كاملة للبنية التحتية والخدمات.",
    
    "projects.rakahUnits.scope.CivilWorks": "الأعمال المدنية – أعمال المباني، المحارة، والعزل المائي. – أعمال الأسقف والعزل.",
    "projects.rakahUnits.scope.HighInteriorFinishing": "التشطيبات الداخلية الفاخرة – الحوائط، الأسقف المستعارة، والسلالم بتشطيبات عالية الجودة.",
    "projects.rakahUnits.scope.ElectricalWorks": "الأعمال الكهربائية – تمديدات الإضاءة والقوى. – تركيب لوحات التوزيع والقواطع. – توريد وحدات إضاءة فاخرة وأنظمة تحكم ذكية. – الاختبار والتشغيل.",
    "projects.rakahUnits.scope.PlumbingWorks": "أعمال السباكة – شبكات المياه والصرف والأدوات الصحية. – اختبار الضغط والتدفق.",
    "projects.rakahUnits.scope.ExteriorWorks": "الأعمال الخارجية – الأسوار والبوابات. – تنسيق الموقع والإضاءة الخارجية. – مواقف السيارات وأعمال الرصف.",
    "projects.rakahUnits.scope.Safety&Compliance": "السلامة والالتزام – أنظمة الطوارئ والأبواب المقاومة للحريق. – الالتزام بالكود السعودي والمعايير الدولية.",

    "projects.DhahranTechnoValley.title": "الأعمال الكهربائية العامة | وادي الظهران التقني",
    "projects.DhahranTechnoValley.desc": "تنفيذ الأعمال الكهروميكانيكية وأعمال التشطيبات بالكامل لمشروع وادي الظهران التقني.",
    "projects.DhahranTechnoValley.overview": "يجمع المشروع بين تنفيذ أنظمة الأعمال الكهروميكانيكية (MEP) وأعمال تشطيبات عالية المستوى لتسليم وحدات جاهزة بالكامل.",
    "projects.DhahranTechnoValley.challenges": "إدارة وتنسيق نطاقات عمل متعددة ضمن جدول زمني موحد دون التأثير على جودة التنفيذ.",
    "projects.DhahranTechnoValley.results": "تسليم وحدات عالية الجودة مكتملة البنية التحتية وجاهزة للتشغيل بكفاءة كاملة.",

    "projects.DhahranTechnoValley.scope.StairHandrails": "درابزين السلالم – توريد وتصنيع وتركيب درابزينات معدنية للسلالم. – مطابقة لاشتراطات السلامة من حيث الارتفاع والمسافات والمتانة. – تشطيب بالدهان أو الجلفنة لمقاومة التآكل.",
    "projects.DhahranTechnoValley.scope.ElectricalGratings": "الشبكات المعدنية الكهربائية – تصنيع وتركيب شبكات معدنية لمجاري الكابلات والمنصات والممرات. – مقاومة للانزلاق وقادرة على تحمل الأحمال. – تثبيت ومحاذاة دقيقة لضمان سهولة الصيانة.",
    "projects.DhahranTechnoValley.scope.MonkeyLadder": "سلالم الصعود الرأسية (Monkey Ladder) – توريد وتركيب سلالم معدنية مزودة بقفص أمان. – تثبيت آمن بالهيكل الإنشائي. – مطابقة لمعايير السلامة الصناعية.",
    "projects.DhahranTechnoValley.scope.Finishing&Compliance": "التشطيب والالتزام – تجهيز الأسطح ودهان جميع الأعمال المعدنية. – الالتزام بالمعايير المحلية والدولية. – الفحص النهائي والاختبارات وتسليم رسومات As-Built ومستندات الجودة.",
    
    "projects.Halliburton.title": "مركز أبحاث هاليبرتون | وادي الظهران التقني",
    "projects.Halliburton.desc": "تنفيذ أعمال التشطيبات بالكامل لمركز أبحاث هاليبرتون.",
    "projects.Halliburton.overview": "يجمع المشروع بين تنفيذ أنظمة الأعمال الكهروميكانيكية (MEP) وأعمال تشطيبات عالية المستوى لتسليم وحدات جاهزة بالكامل.",
    "projects.Halliburton.challenges": "إدارة وتنسيق نطاقات عمل متعددة ضمن جدول زمني موحد مع الحفاظ على أعلى معايير الجودة.",
    "projects.Halliburton.results": "تسليم وحدات عالية الجودة مكتملة البنية التحتية وجاهزة للتشغيل وفق المتطلبات الفنية.",

    "projects.Halliburton.scope.SlidingGates": "البوابات المنزلقة – بوابتان منزلقـتان للسيارات مصنعتان من الصلب مع أنظمة تشغيل آلية. – بوابة منزلقة للشاحنات مصممة للاستخدام الشاق. – مزودة بسكك توجيه، بكرات، أنظمة قفل، وحساسات أمان.",
    "projects.Halliburton.scope.PerimeterFence": "السياج المحيط – تصنيع وتركيب سياج معدني للمناطق المحددة. – معالجة بالجلفنة والدهان لمقاومة التآكل. – تكامل كامل مع البوابات.",
    "projects.Halliburton.scope.AccessStructures": "هياكل الوصول – سلالم معدنية مزودة بدرجات مانعة للانزلاق ودرابزينات. – سلالم رأسية (Monkey Ladder) مع قفص أمان ونظام تثبيت.",
    "projects.Halliburton.scope.Doors": "الأبواب – أبواب فولاذية مقاومة للكسر. – أبواب مقاومة للحريق طبقًا لمعايير الدفاع المدني وNFPA. – أبواب من الاستانلس ستيل للمناطق الخاصة.",

    "projects.Pepsico.title": "مصنع بيبسيكو | المدينة الصناعية الثانية بالدمام",
    "projects.Pepsico.desc": "تنفيذ أعمال التشطيبات بالكامل لمصنع بيبسيكو.",
    "projects.Pepsico.overview": "يجمع المشروع بين تنفيذ أنظمة الأعمال الكهروميكانيكية (MEP) وأعمال تشطيبات عالية المستوى لتسليم وحدات جاهزة بالكامل.",
    "projects.Pepsico.challenges": "إدارة وتنسيق نطاقات عمل متعددة ضمن جدول زمني موحد مع الالتزام بمعايير الجودة والسلامة.",
    "projects.Pepsico.results": "تسليم وحدات عالية الجودة مكتملة البنية التحتية وجاهزة للتشغيل بكفاءة.",

    "projects.Pepsico.scope.Doors": "الأبواب – أبواب استانلس ستيل مقاومة للتآكل للمناطق الخاصة. – أبواب مقاومة للحريق طبقًا لمعايير NFPA والدفاع المدني السعودي.",
    "projects.Pepsico.scope.MonkeyLadders": "سلالم الصعود الرأسية – توريد وتركيب سلالم معدنية مزودة بقفص أمان. – تثبيت آمن ومطابقة لاشتراطات السلامة الصناعية.",
    "projects.Pepsico.scope.Gates": "البوابات – بوابة عائمة مصنعة من الصلب بتشغيل سلس. – أربع بوابات منزلقة للسيارات مزودة بمحركات. – أنظمة توجيه، أقفال، وحساسات أمان.",
    "projects.Pepsico.scope.Turnstiles": "بوابات التحكم (Turnstiles) – توريد وتركيب بوابات معدنية للتحكم في دخول الأفراد. – تشغيل يدوي أو آلي مع أنظمة التحكم في الدخول. – تصميم آمن وعالي التحمل.",
    "projects.Pepsico.scope.Finishing&Compliance": "التشطيب والالتزام – تجهيز ودهان جميع الأعمال المعدنية. – الالتزام بكود البناء السعودي والمعايير الدولية. – الفحص النهائي وتسليم رسومات As-Built ومستندات الجودة.",
    "projects.moreProjects":"مشاريع اخرى",

    "projects.Residential_Villa_Al_Ahsa.title": "فيلا سكنية — الأحساء",
    "projects.Residential_Villa_Al_Ahsa.subtitle": "أعمال الإنشاءات والكهرباء والميكانيكا",

    "projects.Residential_Villa_Al_Dammam.title": "فيلا سكنية — الدمام",
    "projects.Residential_Villa_Al_Dammam.subtitle": "أعمال الإنشاءات والكهرباء والميكانيكا",

    "projects.Bin_Sanem_Factory.title": "الأعمال الكهربائية — مصنع بن سنيم",
    "projects.Bin_Sanem_Factory.subtitle": "تركيبات كهربائية وأنظمة صناعية",

    "projects.Residential_Villa_Al_Khobar.title": "فيلا سكنية — الخبر",
    "projects.Residential_Villa_Al_Khobar.subtitle": "أعمال الإنشاءات والكهرباء والميكانيكا",

    "projects.Residential_Villa_Al_Jubail.title": "فيلا سكنية — الجبيل",
    "projects.Residential_Villa_Al_Jubail.subtitle": "أعمال الإنشاءات والكهرباء والميكانيكا",

    "projects.Residential_Villa_Qatif.title": "فيلا سكنية — القطيف",
    "projects.Residential_Villa_Qatif.subtitle": "أعمال الإنشاءات والكهرباء والميكانيكا",

    "projects.completed": "مكتمل",
    "projects.inProgress": "قيد التنفيذ",
    "projects.viewDetails": "عرض التفاصيل",
    "projects.viewAll": "عرض جميع المشاريع",

    "projects.overview": "نظرة عامة",
    "projects.scopeOfWork": "نطاق العمل",
    "projects.challenges": "التحديات",
    "projects.results": "النتائج",
    "projects.back": "العودة إلى المشاريع",
    "projects.notFound": "المشروع غير موجود",

    'projects.categoryElectromechanical': "إلكتروميكانيك",
    'projects.categoryFinishing': "أعمال التشطيبات",
    'projects.categoryResidential': "سكني",
    'projects.categoryCommercial': "تجاري",
    'projects.categoryIndustrial': "صناعي",
    'projects.categoryElectroFinish': "إلكتروميكانيك وتشطيبات",
    
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
    "contact.form.sending": "جارٍ الإرسال...",
    "contact.successMessage": "تم إرسال رسالتك بنجاح. سنعود إليك قريبًا.",
    'contact.office': 'موقع المكتب',
    'contact.address': 'طريق الأمير محمد بن فهد، الشاطئ الغربي، الدمام 32413، المملكة العربية السعودية',
    'contact.phone': 'رقم الهاتف',
    'contact.email': 'عنوان البريد الإلكتروني',
    'contact.hours': 'ساعات العمل',
    'contact.hoursDetail': 'الأحد - الخميس: 8:00 ص - 6:00 م\nالجمعة - السبت: مغلق\nالطوارئ: متاح 24/7',
    'contact.emergency': 'تحتاج خدمة طوارئ؟',
    'contact.emergencyDesc': 'نوفر خدمات البناء والإصلاح الطارئة على مدار 24/7 للحالات العاجلة.',
    'contact.emergencyButton': 'خط الطوارئ: info@swiftbuild-sa.com',
    
    // Footer
    'footer.description': 'سويفت بيلد تقدم خدمات البناء الاستثنائية في جميع أنحاء المملكة العربية السعودية لأكثر من 15 عامًا. نحن متخصصون في المشاريع السكنية والتجارية والصناعية.',
    'footer.licensed': 'شركة بناء مرخصة ومؤمنة',
    'footer.quickLinks': 'روابط سريعة',
    'footer.ourServices': 'خدماتنا',
    'footer.rights': '© 2025 سويفت بيلد. جميع الحقوق محفوظة.',
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
    return (translations[language] as Record<string, string>)[key] || key;
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