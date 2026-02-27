import { ArrowRight, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ResearchSectionProps {
  lang: 'cn' | 'en';
}

export function ResearchSection({ lang }: ResearchSectionProps) {
  const content = {
    cn: {
      title: '研究方向',
      thesisTitle: '二维元胞自动机生成高质量伪随机数研究',
      thesisSubtitle: '四方邻域 CA 用于芯片测试 PRPG',
      description: '研究二维元胞自动机（2D CA）在伪随机数生成（PRNG）中的应用，特别是用于芯片内建自测试（BIST）中的伪随机模式生成器（PRPG）。通过优化 CA 规则和初始配置，生成满足 NIST SP 800-22 和 TestU01 测试套件的高质量随机数序列。',
      diagramTitle: '研究流程',
      publicationsTitle: '论文 & 报告',
      skillsTitle: '相关技能',
    },
    en: {
      title: 'Research',
      thesisTitle: 'High-Quality PRNG Using 2D Cellular Automata',
      thesisSubtitle: 'Four-neighbor CA for Chip Test PRPG',
      description: 'Researching the application of 2D Cellular Automata (2D CA) in Pseudo-Random Number Generation (PRNG), specifically for Pseudo-Random Pattern Generators (PRPG) in chip Built-In Self-Test (BIST). By optimizing CA rules and initial configurations, we generate high-quality random sequences that pass NIST SP 800-22 and TestU01 test suites.',
      diagramTitle: 'Research Pipeline',
      publicationsTitle: 'Publications & Reports',
      skillsTitle: 'Related Skills',
    },
  };

  const diagramSteps = [
    { label: lang === 'cn' ? '2D CA 网格' : '2D CA Grid', color: 'bg-primary' },
    { label: lang === 'cn' ? '路径映射' : 'Path Mapping', color: 'bg-primary/80' },
    { label: lang === 'cn' ? '比特流' : 'Bitstream', color: 'bg-primary/60' },
    { label: lang === 'cn' ? 'NIST 测试' : 'NIST Tests', color: 'bg-accent' },
  ];

  const publications = [
    {
      title: lang === 'cn' ? '基于二维元胞自动机的高质量伪随机数生成器设计' : 'Design of High-Quality PRNG Based on 2D Cellular Automata',
      venue: lang === 'cn' ? '硕士学位论文（进行中）' : 'Master\'s Thesis (In Progress)',
      year: '2025',
    },
    {
      title: lang === 'cn' ? '四方邻域 CA 规则优化研究报告' : 'Four-neighbor CA Rule Optimization Research Report',
      venue: lang === 'cn' ? '课题组内部报告' : 'Internal Research Report',
      year: '2024',
    },
  ];

  const skills = [
    'CA 90/150', 'Cattell-Muzio', 'NIST SP 800-22', 'TestU01', 'BIST/STUMPS', 'Python', 'Verilog',
  ];

  const caCells = Array.from({ length: 64 }, (_, i) => (i * 7 + 3) % 11 < 5);

  return (
    <section id="research" className="relative py-24 md:py-32">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{content[lang].title}</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Thesis card */}
          <div className="p-8 rounded-3xl bg-card border border-border/50 mb-12">
            <h3 className="text-2xl font-bold mb-2">{content[lang].thesisTitle}</h3>
            <p className="text-primary font-mono text-sm mb-4">{content[lang].thesisSubtitle}</p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {content[lang].description}
            </p>

            {/* Visual diagram */}
            <div className="mb-8">
              <h4 className="text-sm font-mono text-primary uppercase tracking-wider mb-4">
                {content[lang].diagramTitle}
              </h4>
              <div className="flex flex-wrap items-center gap-2 md:gap-4">
                {diagramSteps.map((step, index) => (
                  <div key={index} className="flex items-center gap-2 md:gap-4">
                    <div className={`px-4 py-2 rounded-lg ${step.color} text-primary-foreground font-medium text-sm`}>
                      {step.label}
                    </div>
                    {index < diagramSteps.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-muted-foreground hidden md:block" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CA Grid visualization */}
            <div className="grid grid-cols-8 gap-1 w-fit mx-auto mb-8 p-4 rounded-xl bg-background/50">
              {caCells.map((isActive, i) => (
                <div
                  key={i}
                  className={`w-6 h-6 rounded-sm transition-colors ${
                    isActive ? 'bg-primary' : 'bg-border'
                  }`}
                  style={{ animationDelay: `${i * 50}ms` }}
                />
              ))}
            </div>
          </div>

          {/* Publications */}
          <div className="mb-12">
            <h4 className="text-sm font-mono text-primary uppercase tracking-wider mb-6">
              {content[lang].publicationsTitle}
            </h4>
            <div className="space-y-4">
              {publications.map((pub, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-xl bg-secondary/30 border border-border/50 hover:border-primary/30 transition-colors group"
                >
                  <div>
                    <h5 className="font-medium mb-1">{pub.title}</h5>
                    <p className="text-sm text-muted-foreground">
                      {pub.venue} • {pub.year}
                    </p>
                  </div>
                  <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h4 className="text-sm font-mono text-primary uppercase tracking-wider mb-6">
              {content[lang].skillsTitle}
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 rounded-lg bg-secondary/50 border border-border/50 text-sm font-mono text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
