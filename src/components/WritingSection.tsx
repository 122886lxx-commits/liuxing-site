import { ArrowUpRight, BookOpenText } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface WritingSectionProps {
  lang: 'cn' | 'en';
}

interface ArticleItem {
  title: { cn: string; en: string };
  summary: { cn: string; en: string };
  date: string;
  href: string;
  views?: string;
}

export function WritingSection({ lang }: WritingSectionProps) {
  const content = {
    cn: {
      title: '公众号文章',
      articleLink: '阅读原文',
    },
    en: {
      title: 'WeChat Articles',
      articleLink: 'Read Article',
    },
  };

  const articles: ArticleItem[] = [
    {
      title: {
        cn: '从“看了很多”到“真的有产出”：我改了一下自己的工作流',
        en: 'From “consuming a lot” to “actually shipping”: how I changed my workflow',
      },
      summary: {
        cn: '这篇文章聚焦个人工作流优化，核心不是“看更多”，而是把输入真正转化为结构化输出和可复用成果。',
        en: 'A reflection on workflow design: the point is not more input, but turning learning into structured output and reusable results.',
      },
      date: '2026-01-22',
      href: 'https://mp.weixin.qq.com/s/23fYUyyGT8ZepTk0JMINyg',
      views: '79',
    },
    {
      title: {
        cn: '我在 AI 巨变中，重构了自己的人生决策系统',
        en: 'How I rebuilt my life decision system amid the AI shift',
      },
      summary: {
        cn: '文章讨论 AI 大变局下的个人选择逻辑，重点在于如何重构长期判断框架，而不是只追逐短期热点。',
        en: 'This piece focuses on decision-making under AI disruption, emphasizing a long-term judgment framework rather than short-term trend chasing.',
      },
      date: '2025-12-31',
      href: 'https://mp.weixin.qq.com/s/r8aht7rnaSbgrXlHwgrMrw',
      views: '33',
    },
    {
      title: {
        cn: 'AI时代的生存挑战：巨头垄断下的创业公司如何找到“生态位”？',
        en: 'AI-era survival: how startups can find a niche under platform giants',
      },
      summary: {
        cn: '这篇文章从产业竞争视角切入，讨论在巨头主导格局下，创业公司应如何寻找差异化定位与生存空间。',
        en: 'A market-structure perspective on how startups can position themselves and survive when major platforms dominate the AI stack.',
      },
      date: '2025-12-12',
      href: 'https://mp.weixin.qq.com/s/jGrTSkrmuUyjg8NMTvgLRw',
      views: '37',
    },
    {
      title: {
        cn: '18、19 年的 AI 又回来了？具身智能可能是下一个 GPT 时刻吗',
        en: 'Is the 2018–2019 AI wave back? Could embodied AI be the next GPT moment?',
      },
      summary: {
        cn: '文章围绕具身智能展开判断，试图回答它究竟是短期炒作，还是可能成为新一轮 AI 范式变化的起点。',
        en: 'An essay on embodied AI that asks whether it is another hype cycle or the beginning of a new paradigm shift in AI.',
      },
      date: '2025-12-08',
      href: 'https://mp.weixin.qq.com/s/ES9FvgkWvr8wbiCE0fYbrg',
      views: '136',
    },
  ];

  return (
    <section id="writing" className="relative py-24 md:py-32">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">{content[lang].title}</h2>
        </div>

        <div className="grid gap-6 max-w-5xl mx-auto">
          {articles.map((article) => (
            <article
              key={article.href}
              className="group rounded-3xl border border-border/50 bg-card/70 p-6 md:p-7 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="shrink-0 w-full md:w-36">
                  <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/15 via-background to-accent/10 border border-border/40 flex items-center justify-center">
                    <BookOpenText className="w-10 h-10 text-primary/80" />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-sm font-mono text-primary">{article.date}</span>
                    {article.views && (
                      <span className="text-sm text-muted-foreground">{lang === 'cn' ? `阅读 ${article.views}` : `${article.views} views`}</span>
                    )}
                  </div>

                  <h3 className="text-xl md:text-2xl font-semibold leading-snug mb-3 group-hover:text-primary transition-colors">
                    <a href={article.href} target="_blank" rel="noopener noreferrer">
                      {article.title[lang]}
                    </a>
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-5">
                    {article.summary[lang]}
                  </p>

                  <Button variant="heroOutline" className="gap-2" asChild>
                    <a href={article.href} target="_blank" rel="noopener noreferrer">
                      {content[lang].articleLink}
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
