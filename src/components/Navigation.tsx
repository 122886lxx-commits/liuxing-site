import { useState, useEffect } from 'react';
import { Menu, X, Download, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { id: 'about', label: { cn: '关于', en: 'About' } },
  { id: 'work', label: { cn: '工作', en: 'Work' } },
  { id: 'research', label: { cn: '研究', en: 'Research' } },
  { id: 'projects', label: { cn: '项目', en: 'Projects' } },
  { id: 'writing', label: { cn: '文章', en: 'Writing' } },
  { id: 'contact', label: { cn: '联系', en: 'Contact' } },
];

interface NavigationProps {
  lang: 'cn' | 'en';
  onLangChange: (lang: 'cn' | 'en') => void;
}

export function Navigation({ lang, onLangChange }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg border-b border-border/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span className="text-primary">Liu</span>Xing
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="nav"
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className="px-3"
              >
                {item.label[lang]}
              </Button>
            ))}
          </div>

          {/* Right side actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onLangChange(lang === 'cn' ? 'en' : 'cn')}
              className="gap-1.5 text-muted-foreground hover:text-foreground"
            >
              <Globe className="w-4 h-4" />
              {lang === 'cn' ? 'EN' : '中文'}
            </Button>
            <Button variant="hero" size="sm" className="gap-2">
              <Download className="w-4 h-4" />
              {lang === 'cn' ? '下载简历' : 'Resume'}
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border">
          <div className="px-6 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label[lang]}
              </button>
            ))}
            <div className="pt-4 border-t border-border flex flex-col gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onLangChange(lang === 'cn' ? 'en' : 'cn')}
                className="justify-start gap-2"
              >
                <Globe className="w-4 h-4" />
                {lang === 'cn' ? 'Switch to English' : '切换到中文'}
              </Button>
              <Button variant="hero" size="sm" className="gap-2">
                <Download className="w-4 h-4" />
                {lang === 'cn' ? '下载简历' : 'Resume'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
