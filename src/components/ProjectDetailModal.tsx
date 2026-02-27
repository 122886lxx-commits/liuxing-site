import { ArrowUpRight, Github, ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ProjectDetail {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  tags: string[];
  color: string;
  problem?: string;
  approach?: string;
  stack?: string[];
  evaluation?: string;
  whatsNext?: string;
  github?: string;
  demo?: string;
  screenshots?: string[];
}

interface ProjectDetailModalProps {
  project: ProjectDetail | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  lang: 'cn' | 'en';
}

export function ProjectDetailModal({ project, open, onOpenChange, lang }: ProjectDetailModalProps) {
  if (!project) return null;

  const labels = {
    cn: {
      problem: '问题背景',
      approach: '解决方案',
      techStack: '技术栈',
      evaluation: '效果评估',
      whatsNext: '未来计划',
      viewCode: '查看代码',
      liveDemo: '在线演示',
      screenshots: '项目截图',
      overview: '概览',
      details: '详情',
      gallery: '图库',
    },
    en: {
      problem: 'Problem',
      approach: 'Approach',
      techStack: 'Tech Stack',
      evaluation: 'Evaluation',
      whatsNext: "What's Next",
      viewCode: 'View Code',
      liveDemo: 'Live Demo',
      screenshots: 'Screenshots',
      overview: 'Overview',
      details: 'Details',
      gallery: 'Gallery',
    },
  };

  const t = labels[lang];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto bg-card border-border/50 p-0">
        {/* Header with gradient */}
        <div className={`relative p-8 pb-6 bg-gradient-to-br ${project.color}`}>
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-primary/20 backdrop-blur-sm flex items-center justify-center shrink-0">
              <project.icon className="w-7 h-7 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-foreground">{project.title}</DialogTitle>
                <DialogDescription className="text-muted-foreground mt-1">{project.description}</DialogDescription>
              </DialogHeader>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary" className="font-mono text-xs bg-secondary/80 backdrop-blur-sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 mt-6">
            {project.github && (
              <Button variant="outline" size="sm" className="gap-2" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                  {t.viewCode}
                </a>
              </Button>
            )}
            {project.demo && (
              <Button size="sm" className="gap-2" asChild>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  {t.liveDemo}
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Content tabs */}
        <div className="p-6 pt-2">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="w-full grid grid-cols-3 mb-6">
              <TabsTrigger value="overview">{t.overview}</TabsTrigger>
              <TabsTrigger value="details">{t.details}</TabsTrigger>
              <TabsTrigger value="gallery">{t.gallery}</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              {project.problem && (
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-2 font-mono uppercase tracking-wider">{t.problem}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.problem}</p>
                </div>
              )}
              {project.approach && (
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-2 font-mono uppercase tracking-wider">{t.approach}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.approach}</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="details" className="space-y-6">
              {project.stack && project.stack.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-3 font-mono uppercase tracking-wider">{t.techStack}</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-lg bg-secondary/50 border border-border/50 text-xs font-mono text-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {project.evaluation && (
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-2 font-mono uppercase tracking-wider">{t.evaluation}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.evaluation}</p>
                </div>
              )}
              {project.whatsNext && (
                <div>
                  <h4 className="text-sm font-semibold text-accent mb-2 font-mono uppercase tracking-wider">{t.whatsNext}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.whatsNext}</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="gallery">
              {project.screenshots && project.screenshots.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.screenshots.map((src, i) => (
                    <div key={i} className="rounded-xl overflow-hidden border border-border/50 bg-secondary/20">
                      <img src={src} alt={`${project.title} screenshot ${i + 1}`} className="w-full h-auto" loading="lazy" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-secondary/30 flex items-center justify-center">
                    <ArrowUpRight className="w-8 h-8 text-muted-foreground/50" />
                  </div>
                  <p className="text-sm">{lang === 'cn' ? '截图即将上传...' : 'Screenshots coming soon...'}</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
}
