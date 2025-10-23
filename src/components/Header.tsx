import { Button } from "./ui/button";
import logoImage from '../assets/WhatsApp_Image_2025-09-28_at_10.27.37_PM-removebg-preview.png'
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "./LanguageContext";
import "../index.css"

export function Header() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-28 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <img 
            src={logoImage} 
            alt="Swift Build Logo" 
            className="h-24 w-auto"
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="transition-colors hover:text-primary">
            {t('nav.home')}
          </a>
          <a href="#about" className="transition-colors hover:text-primary">
            {t('nav.about')}
          </a>
          <a href="#services" className="transition-colors hover:text-primary">
            {t('nav.services')}
          </a>
          <a href="#projects" className="transition-colors hover:text-primary">
            {t('nav.projects')}
          </a>
          <a href="#contact" className="transition-colors hover:text-primary">
            {t('nav.contact')}
          </a>
        </nav>

        <div className="flex items-center gap-6">
          <LanguageSwitcher />
          {/* <Button>{t('header.getQuote')}</Button> */}
          <div >
  <button 
    className="bg-[#2527A9] hover:bg-[#1e1f8a] text-white inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-9 px-4 py-2 has-[>svg]:px-3"
  >
    Get Quote
  </button>
</div>

        </div>
      </div>
    </header>
  );
  
}