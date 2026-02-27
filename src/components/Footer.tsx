import { Heart } from 'lucide-react';

interface FooterProps {
  lang: 'cn' | 'en';
}

export function Footer({ lang }: FooterProps) {
  const content = {
    cn: {
      copyright: '© 2024 刘星. 保留所有权利.',
      builtWith: '用',
      and: '和',
      built: '构建',
    },
    en: {
      copyright: '© 2024 Liu Xing. All rights reserved.',
      builtWith: 'Built with',
      and: 'and',
      built: '',
    },
  };

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>{content[lang].copyright}</p>
          <p className="flex items-center gap-1">
            {content[lang].builtWith}
            <Heart className="w-4 h-4 text-destructive fill-destructive" />
            {content[lang].and} React + Tailwind {content[lang].built}
          </p>
        </div>
      </div>
    </footer>
  );
}
