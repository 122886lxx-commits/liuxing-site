import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  lang: 'cn' | 'en';
}

const PAPER_URL = 'https://pdf.hanspub.org/orf20260100000_70845074.pdf';

export function HeroSection({ lang }: HeroSectionProps) {
  const content = {
    cn: {
      headline: 'AI 产品 × 算法底层',
      subheadline: '用第一性原理做能落地的智能体与智能终端产品',
      description: 'BUPT 硕士｜搜索/推荐算法经历｜智能座舱语音智能体｜二维元胞自动机伪随机数研究',
      cta1: '查看项目',
      cta2: '联系我',
    },
    en: {
      headline: 'AI Product × Algorithm Foundation',
      subheadline: 'Building shippable agents & smart terminals with first-principles thinking',
      description: 'BUPT Master\'s | Search/Ranking @ Baidu & Meituan | Intelligent Cockpit Voice Agent | 2D CA PRNG Research',
      cta1: 'View Projects',
      cta2: 'Contact Me',
    },
  };

  const metrics = [
    { value: '20+', label: lang === 'cn' ? '场景 TaskFlow 设计' : 'TaskFlow Scenarios' },
    { value: '10K+', label: lang === 'cn' ? '口语 Query 数据构造' : 'Spoken Query Data' },
    { value: '30s', label: lang === 'cn' ? '闭环目标延迟' : 'Target Latency' },
    { value: '2D CA', label: lang === 'cn' ? 'PRPG / BIST 研究' : 'PRPG / BIST Research' },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-30 animate-grid-scroll" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div className="relative section-container">
        <div className="grid lg:grid-cols-[1.02fr_0.98fr] gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="stagger-children max-w-[42rem]">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-10">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground font-mono">
                {lang === 'cn' ? '开放求职中' : 'Open to opportunities'}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-bold leading-[0.95] tracking-tight mb-6">
              <span className="text-gradient">{content[lang].headline}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground font-semibold mb-6">
              {content[lang].subheadline}
            </p>
            
            <p className="text-muted-foreground text-lg md:text-[1.05rem] mb-12 max-w-2xl leading-relaxed">
              {content[lang].description}
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <Button variant="hero" size="lg" className="gap-2" asChild>
                <a href="#projects">
                  {content[lang].cta1}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" className="gap-2" asChild>
                <a href="#contact">
                  {content[lang].cta2}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[44rem]">
              {metrics.map((metric, index) => (
                index === 3 ? (
                  <a
                    key={index}
                    href={PAPER_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="min-h-[144px] p-5 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/50 transition-colors"
                  >
                    <div className="text-2xl md:text-[2.2rem] font-bold text-primary font-mono mb-2">{metric.value}</div>
                    <div className="text-sm text-muted-foreground leading-relaxed">{metric.label}</div>
                  </a>
                ) : (
                  <div
                    key={index}
                    className="min-h-[144px] p-5 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm"
                  >
                    <div className="text-2xl md:text-[2.2rem] font-bold text-primary font-mono mb-2">{metric.value}</div>
                    <div className="text-sm text-muted-foreground leading-relaxed">{metric.label}</div>
                  </div>
                )
              ))}
            </div>
          </div>

          {/* Right illustration */}
          <div className="relative hidden lg:block">
            <div className="relative animate-float max-w-[46rem] ml-auto">
              <img
                src="/hero-illustration.png"
                alt="AI Robot companion with cellular automata grid"
                className="w-full drop-shadow-2xl"
              />
              {/* Decorative elements */}
              <div className="absolute right-[-3rem] top-[18%] w-32 h-32 border border-primary/30 rounded-[1.8rem] rotate-12" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground font-mono">
          {lang === 'cn' ? '向下滚动' : 'Scroll'}
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}
