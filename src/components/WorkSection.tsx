import { useState } from 'react';
import { Briefcase, CheckCircle, Lightbulb, Target } from 'lucide-react';

interface WorkSectionProps {
  lang: 'cn' | 'en';
}

type TabType = 'owned' | 'shipped' | 'learned';

interface Experience {
  company: { cn: string; en: string };
  role: { cn: string; en: string };
  period: string;
  owned: { cn: string[]; en: string[] };
  shipped: { cn: string[]; en: string[] };
  learned: { cn: string[]; en: string[] };
}

export function WorkSection({ lang }: WorkSectionProps) {
  const [activeTab, setActiveTab] = useState<TabType>('owned');

  const content = {
    cn: { title: '工作经历' },
    en: { title: 'Work Experience' },
  };

  const tabs = [
    { id: 'owned' as TabType, label: lang === 'cn' ? '负责内容' : 'What I Owned', icon: Target },
    { id: 'shipped' as TabType, label: lang === 'cn' ? '交付成果' : 'What I Shipped', icon: CheckCircle },
    { id: 'learned' as TabType, label: lang === 'cn' ? '收获成长' : 'What I Learned', icon: Lightbulb },
  ];

  const experiences: Experience[] = [
    {
      company: { cn: '恒聚愿景', en: 'Hengjuyuanjing' },
      role: { cn: 'AI 产品实习生', en: 'AI Product Intern' },
      period: '2024',
      owned: {
        cn: ['智能座舱语音点餐/订票/行程查询产品设计', '20+ 场景 TaskFlow 与 Schema 设计', '口语化 Query 数据构造与标注'],
        en: ['Intelligent cockpit voice ordering/booking product design', '20+ scenario TaskFlow & Schema design', 'Spoken query data construction & annotation'],
      },
      shipped: {
        cn: ['语音点咖啡/订票 Agent Demo', '10,000+ 口语 Query 数据集', 'Prompt 优化达到 30s 内闭环目标'],
        en: ['Voice coffee ordering/booking Agent Demo', '10,000+ spoken query dataset', 'Prompt optimization achieving 30s closed-loop target'],
      },
      learned: {
        cn: ['端到端 Agent 产品设计方法论', '数据驱动的产品迭代', '跨团队协作与沟通'],
        en: ['End-to-end Agent product design methodology', 'Data-driven product iteration', 'Cross-team collaboration & communication'],
      },
    },
    {
      company: { cn: '美团', en: 'Meituan' },
      role: { cn: '搜索/推荐算法实习生', en: 'Search/Ranking Algorithm Intern' },
      period: '2023 - 2024',
      owned: {
        cn: ['"X-省钱"低价心智平台算法模块', '商品属性抽取与同品识别', '价格分桶与重排策略设计'],
        en: ['"X-Save" low-price platform algorithm module', 'Product attribute extraction & same-product identification', 'Price bucketing & re-ranking strategy design'],
      },
      shipped: {
        cn: ['大模型微调 Pipeline 上线', 'SOP 标准化流程文档', '属性抽取准确率提升 15%'],
        en: ['LLM fine-tuning pipeline deployed', 'Standardized SOP documentation', '15% improvement in attribute extraction accuracy'],
      },
      learned: {
        cn: ['工业级 ML 系统设计', '大规模数据处理', 'A/B 测试与实验设计'],
        en: ['Industrial ML system design', 'Large-scale data processing', 'A/B testing & experiment design'],
      },
    },
    {
      company: { cn: '百度', en: 'Baidu' },
      role: { cn: '搜索/推荐算法实习生', en: 'Search/Ranking Algorithm Intern' },
      period: '2022 - 2023',
      owned: {
        cn: ['搜索结果排序算法优化', '用户意图理解模块', '特征工程与模型迭代'],
        en: ['Search result ranking optimization', 'User intent understanding module', 'Feature engineering & model iteration'],
      },
      shipped: {
        cn: ['搜索相关性指标提升', '新特征上线验证', '技术文档与知识沉淀'],
        en: ['Search relevance metrics improvement', 'New feature deployment & validation', 'Technical documentation & knowledge sharing'],
      },
      learned: {
        cn: ['搜索引擎核心原理', '大规模分布式系统', '算法工程化实践'],
        en: ['Search engine core principles', 'Large-scale distributed systems', 'Algorithm engineering practices'],
      },
    },
  ];

  return (
    <section id="work" className="relative py-24 md:py-32 bg-card/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">{content[lang].title}</h2>
        </div>

        {/* Tab navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-xl bg-secondary/50 border border-border/50">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-primary border-4 border-background" />

              {/* Content */}
              <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="p-6 rounded-2xl bg-card border border-border/50 card-hover">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{exp.company[lang]}</h3>
                      <p className="text-sm text-muted-foreground">{exp.role[lang]}</p>
                    </div>
                    <span className="ml-auto text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp[activeTab][lang].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
