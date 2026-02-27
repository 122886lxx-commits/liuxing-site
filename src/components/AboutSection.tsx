import { Brain, Target, BarChart3, Rocket, Bot, Cpu, Lightbulb } from 'lucide-react';

interface AboutSectionProps {
  lang: 'cn' | 'en';
}

export function AboutSection({ lang }: AboutSectionProps) {
  const content = {
    cn: {
      title: '关于我',
      bio: '我是刘星，一名专注于 AI 产品与算法落地的研究生。在百度和美团的搜索/推荐算法实习中，我深刻理解了工业级系统的复杂性；在智能座舱语音智能体的产品实践中，我学会了如何将技术转化为用户价值。我的研究方向是二维元胞自动机生成高质量伪随机数，用于芯片测试。',
      valuesTitle: '核心理念',
      buildingTitle: '正在构建',
    },
    en: {
      title: 'About Me',
      bio: 'I\'m Liu Xing, a graduate student focused on AI products and algorithm implementation. Through search/ranking internships at Baidu and Meituan, I deeply understand industrial-scale system complexity. Through intelligent cockpit voice agent product practice, I learned to translate technology into user value. My research focuses on 2D cellular automata for high-quality PRNG in chip testing.',
      valuesTitle: 'Core Values',
      buildingTitle: 'Building Now',
    },
  };

  const values = [
    { icon: Brain, label: lang === 'cn' ? '第一性原理' : 'First Principles' },
    { icon: Target, label: lang === 'cn' ? '系统思维' : 'Systems Thinking' },
    { icon: BarChart3, label: lang === 'cn' ? '数据驱动' : 'Data & Evaluation' },
    { icon: Rocket, label: lang === 'cn' ? '交付导向' : 'Shipping' },
  ];

  const building = [
    {
      icon: Bot,
      title: lang === 'cn' ? 'Agent 工作流' : 'Agent Workflows',
      desc: lang === 'cn' ? 'Plan/Critic/Grounding 架构' : 'Plan/Critic/Grounding architecture',
    },
    {
      icon: Cpu,
      title: lang === 'cn' ? 'AI + 硬件 Demo' : 'AI + Hardware Demos',
      desc: lang === 'cn' ? '智能座舱、AI 眼镜/手机' : 'Smart cockpit, AI glasses/phones',
    },
    {
      icon: Lightbulb,
      title: lang === 'cn' ? '个人 IP' : 'Personal IP',
      desc: lang === 'cn' ? '技术写作与项目分享' : 'Technical writing & project sharing',
    },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="absolute inset-0 ca-pattern opacity-20" />
      
      <div className="relative section-container">
        <div className="max-w-3xl mx-auto text-center mb-16 stagger-children">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {content[lang].title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {content[lang].bio}
          </p>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="text-sm font-mono text-primary uppercase tracking-wider mb-6 text-center">
            {content[lang].valuesTitle}
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 hover:border-primary/50 transition-colors"
              >
                <value.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">{value.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Building */}
        <div>
          <h3 className="text-sm font-mono text-primary uppercase tracking-wider mb-6 text-center">
            {content[lang].buildingTitle}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {building.map((item, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
