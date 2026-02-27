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
      period: '2025.09 - 2025.12',
      owned: {
        cn: ['定义座舱语音点餐、订票、行程查询等高频场景的核心评估指标，建立标准化评测用例与失败归因体系', '建模并划分 20+ 真实场景的意图、槽位与 TaskFlow，明确预定义流程与 LLM 推理边界', '设计结构化 Prompt 与 Agent Action Schema，补齐异常分支与兜底策略'],
        en: ['Defined evaluation metrics for high-frequency in-cockpit voice scenarios such as ordering, ticketing, and itinerary search, and built standardized test cases with failure attribution.', 'Modeled intent, slots, and TaskFlows for 20+ real scenarios, clarifying the boundary between predefined flows and LLM reasoning.', 'Designed structured prompts and agent action schemas, and completed exception branches with fallback strategies.'],
      },
      shipped: {
        cn: ['构建 10,000+ 条口语化中文 Query 数据集，覆盖啰嗦表达、错别字、重复信息等，用于鲁棒性训练与离线评估', '支撑点咖啡、电影票、机酒查询等任务型 Agent Demo 联调落地', '在“点饿了么”场景中基于 100 条用例将 Demo 成功率做到 85%，并沉淀流程模板、评测集与失败归因 Top5'],
        en: ['Built a dataset of 10,000+ spoken Chinese queries covering verbose phrasing, typos, and duplicated information for robustness training and offline evaluation.', 'Enabled end-to-end demo delivery for task agents including coffee ordering, movie tickets, and travel search.', 'Improved the Ele.me ordering demo to 85% success rate on a 100-case set and documented reusable flow templates, evaluation sets, and top failure causes.'],
      },
      learned: {
        cn: ['形成了从指标定义、数据构造、Prompt/Schema 设计到 Demo 评测优化的端到端 Agent 产品方法', '掌握了基于时延结构拆解与失败归因的迭代方式', '通过对理想 UIAgent、智己汽车、荣耀 YOYO 的竞品拆解沉淀了交互策略与技术路线判断能力'],
        en: ['Built an end-to-end agent product workflow spanning metrics, data construction, prompt/schema design, and demo evaluation.', 'Learned to iterate through latency decomposition and root-cause analysis.', 'Strengthened product judgment by dissecting competitors such as Li Auto UIAgent, IM Motors, and Honor YOYO.'],
      },
    },
    {
      company: { cn: '美团', en: 'Meituan' },
      role: { cn: '策略算法实习生（策略产品协作）', en: 'Strategy Algorithm Intern (Strategy-Product Collaboration)' },
      period: '2024.12 - 2025.09',
      owned: {
        cn: ['围绕“低价心智”设计同品识别、价格分桶、价格力特征与生成式重排奖励链路', '定义同品聚合准确率、访购率等核心指标，并建立可比属性口径与标注评测流程', '针对搜索排序中过度依赖即时点击的问题，引入长短序列兴趣融合策略'],
        en: ['Designed a full chain for low-price perception, including same-item identification, price bucketing, price-power features, and generative reranking rewards.', 'Defined core metrics such as same-item aggregation accuracy and visit-to-purchase rate, and set up comparable-attribute annotation and evaluation workflows.', 'Introduced long-short interest modeling to reduce over-reliance on short-term click behavior in search ranking.'],
      },
      shipped: {
        cn: ['基于地理位置聚合可比候选并结合 CoT Prompt 判别同品，同品识别离线准确率约 90%', '在生成式重排中引入价格奖励机制，10% 流量 A/B 下搜索访购率和搜索 QV 显著正向，后续推全', '长短序列兴趣建模方案在核心指标无负向前提下提升了搜索链路整体分发效率'],
        en: ['Used geo-based candidate aggregation with CoT prompting for same-item judgment, reaching about 90% offline accuracy.', 'Introduced price rewards into generative reranking and achieved significant gains in visit-to-purchase rate and search QV in a 10% traffic A/B test.', 'Improved overall search distribution efficiency with long-short interest modeling while keeping core metrics neutral or positive.'],
      },
      learned: {
        cn: ['形成了从业务目标、指标口径、排序策略到 A/B 验证的完整搜索策略产品思路', '理解了如何把可解释的价格信号稳定注入排序模型', '提升了对长期兴趣建模、实验显著性和流量放量策略的把握'],
        en: ['Built a full search strategy workflow from business goals and metrics to ranking strategy and A/B validation.', 'Learned how to inject interpretable price signals into ranking models in a stable way.', 'Improved judgment on long-term interest modeling, experiment significance, and traffic ramp-up strategy.'],
      },
    },
    {
      company: { cn: '百度', en: 'Baidu' },
      role: { cn: '策略算法实习生（策略产品协作）', en: 'Strategy Algorithm Intern (Strategy-Product Collaboration)' },
      period: '2024.07 - 2024.11',
      owned: {
        cn: ['围绕百家号 AI 创作中心卡片排序，拆解“触达-点击-发文转化”漏斗并定义首页点击率、推荐卡点击率、全场景发文转化率等指标', '基于用户画像与历史偏好，推动创作工具卡从通用展示转向场景化精准推荐', '针对 TTV 生成视频低质素材占比高的问题，定义图文一致性为核心质量准入标准'],
        en: ['For the Baijiahao AI creation center, decomposed the funnel from exposure to click to posting conversion and defined key metrics such as home CTR and all-scene posting conversion.', 'Redesigned tool-card ranking based on user profiles and historical preferences, shifting from generic exposure to scenario-based recommendation.', 'Defined text-image consistency as the core quality gate for TTV-generated videos with too many low-quality assets.'],
      },
      shipped: {
        cn: ['AI 创作中心卡片排序策略上线后，首页点击率提升 0.6pp，全场景发文转化率提升 0.26pp', '推动建立基于多模态对齐的自动过滤策略，作为 TTV 内容治理第一道防线', '在置信验证集下将过滤准确率做到 90.9%，兼顾生成质量提升与人工复审成本下降'],
        en: ['After the AI creation-center ranking strategy launched, home CTR improved by 0.6pp and all-scene posting conversion improved by 0.26pp.', 'Built an automated multimodal filtering strategy as the first line of defense for TTV content governance.', 'Reached 90.9% filtering accuracy on a confidence validation set, improving quality while reducing manual review cost.'],
      },
      learned: {
        cn: ['强化了从内容生态目标反推推荐策略与转化漏斗的产品意识', '建立了质量标准量化、自动过滤和审核成本平衡的治理思路', '进一步提升了策略表达、指标拆解和跨团队协作能力'],
        en: ['Strengthened product thinking by deriving recommendation strategy from ecosystem goals and conversion funnels.', 'Built a governance mindset around measurable quality standards, automated filtering, and review-cost tradeoffs.', 'Further improved strategy communication, metric decomposition, and cross-functional collaboration.'],
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
