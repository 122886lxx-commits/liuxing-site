import { ArrowUpRight, BookOpen, Github, MessageSquare, Newspaper } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectsSectionProps {
  lang: 'cn' | 'en';
}

interface ProjectCard {
  icon: React.ComponentType<{ className?: string }>;
  title: { cn: string; en: string };
  repo: string;
  repoLabel: string;
  summary: { cn: string; en: string };
  explanation: { cn: string; en: string };
  tags: string[];
  language: string;
  color: string;
}

export function ProjectsSection({ lang }: ProjectsSectionProps) {
  const content = {
    cn: {
      title: 'GitHub 项目',
      subtitle: '以下内容已根据我当前公开仓库同步更新，每个项目都可以直接跳转到对应仓库。',
      viewAll: '查看 GitHub 主页',
      repoLink: '查看仓库',
      explanationLabel: '项目说明',
    },
    en: {
      title: 'GitHub Projects',
      subtitle: 'These cards are synced to my current public repositories, and each one links directly to the repository.',
      viewAll: 'View GitHub Profile',
      repoLink: 'Open Repository',
      explanationLabel: 'Why it matters',
    },
  };

  const projects: ProjectCard[] = [
    {
      icon: MessageSquare,
      title: {
        cn: 'HeartLeaf',
        en: 'HeartLeaf',
      },
      repo: 'https://github.com/122886lxx-commits/HeartLeaf',
      repoLabel: '122886lxx-commits/HeartLeaf',
      summary: {
        cn: '微信小程序版 AI 聊天助手，支持通义千问、DeepSeek、GPT-4o 多模型切换。',
        en: 'A WeChat mini-program AI chat assistant with Qwen, DeepSeek, and GPT-4o model switching.',
      },
      explanation: {
        cn: '这个项目体现了我把多模型能力产品化的思路：从前端聊天体验、模型切换，到实际可运行的小程序交付，重点是让 AI 能力以更低门槛进入微信生态。',
        en: 'This project shows how I productize multi-model AI: from chat UX and model switching to a shippable mini-program experience inside the WeChat ecosystem.',
      },
      tags: ['WeChat Mini Program', 'TypeScript', 'Qwen', 'DeepSeek', 'GPT-4o'],
      language: 'TypeScript',
      color: 'from-primary/18 to-primary/5',
    },
    {
      icon: BookOpen,
      title: {
        cn: 'lunwen-read',
        en: 'lunwen-read',
      },
      repo: 'https://github.com/122886lxx-commits/lunwen-read',
      repoLabel: '122886lxx-commits/lunwen-read',
      summary: {
        cn: '面向 AI PM 的论文阅读智能体示例，支持摘要、PM 简报生成和交互问答。',
        en: 'A paper-reading agent for AI PMs with summary generation, PM briefings, and interactive Q&A.',
      },
      explanation: {
        cn: '这个项目不是简单做“读论文”，而是把论文内容转成产品经理可消费的信息结构，核心价值在于缩短“技术理解 -> 产品判断”的路径。',
        en: 'This is more than a paper reader: it restructures research into product-manager-friendly insights and shortens the path from technical reading to product judgment.',
      },
      tags: ['Python', 'LangChain', 'Agent', 'PDF', 'AI PM'],
      language: 'Python',
      color: 'from-accent/18 to-accent/6',
    },
    {
      icon: Newspaper,
      title: {
        cn: 'TrendRadar',
        en: 'TrendRadar',
      },
      repo: 'https://github.com/122886lxx-commits/trendradar',
      repoLabel: '122886lxx-commits/trendradar',
      summary: {
        cn: '热点新闻聚合与 AI 分析工具，支持 RSS、多渠道通知和自动化部署。',
        en: 'A trending-news aggregation and AI analysis tool with RSS, multi-channel delivery, and easy deployment.',
      },
      explanation: {
        cn: '这个项目体现了我对“信息获取 -> 自动分析 -> 主动推送”链路的理解。它不是单纯抓新闻，而是把热点筛选、结构化分析和通知触达串成一个完整产品流程。',
        en: 'This project reflects my understanding of the full pipeline from information collection to AI analysis and proactive delivery, not just raw news scraping.',
      },
      tags: ['Python', 'RSS', 'Automation', 'AI Analysis', 'Notifications'],
      language: 'Python',
      color: 'from-primary/14 to-accent/8',
    },
  ];

  return (
    <section id="projects" className="relative py-24 md:py-32 bg-card/30">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">{content[lang].title}</h2>
            <p className="text-muted-foreground leading-relaxed">{content[lang].subtitle}</p>
          </div>
          <Button variant="outline" className="gap-2 w-fit" asChild>
            <a href="https://github.com/122886lxx-commits" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
              {content[lang].viewAll}
            </a>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.repo}
              className="group relative h-full rounded-3xl border border-border/50 bg-card/80 overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 transition-opacity group-hover:opacity-100`} />

              <div className="relative h-full p-7 flex flex-col">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground rounded-full border border-border/50 px-2.5 py-1">
                    {project.language}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title[lang]}
                </h3>
                <p className="text-sm text-muted-foreground font-mono mb-4">{project.repoLabel}</p>
                <p className="text-sm text-foreground/90 leading-relaxed mb-5">
                  {project.summary[lang]}
                </p>

                <div className="mb-6">
                  <p className="text-xs font-mono uppercase tracking-wider text-primary mb-2">
                    {content[lang].explanationLabel}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.explanation[lang]}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-7">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-secondary/60 text-xs font-mono text-muted-foreground border border-border/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-2">
                  <Button variant="heroOutline" className="gap-2 w-full justify-center" asChild>
                    <a href={project.repo} target="_blank" rel="noopener noreferrer">
                      {content[lang].repoLink}
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
