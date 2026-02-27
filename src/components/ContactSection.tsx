import { useState } from 'react';
import { Send, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

interface ContactSectionProps {
  lang: 'cn' | 'en';
}

export function ContactSection({ lang }: ContactSectionProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const content = {
    cn: {
      title: '联系我',
      subtitle: '一起做能落地的 AI 产品',
      description: '无论是工作机会、项目合作还是技术交流，欢迎随时联系',
      name: '姓名',
      email: '邮箱',
      message: '留言',
      send: '发送消息',
      sending: '发送中...',
      success: '消息已发送！',
      error: '发送失败，请重试',
      social: '或通过社交媒体联系',
    },
    en: {
      title: 'Contact',
      subtitle: "Let's build shippable AI products together",
      description: 'Whether for job opportunities, project collaboration, or tech discussions, feel free to reach out',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent!',
      error: 'Failed to send, please try again',
      social: 'Or connect via social media',
    },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: content[lang].success,
      description: lang === 'cn' ? '我会尽快回复您' : "I'll get back to you soon",
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Mail, label: 'Email', href: 'mailto:liuxing@example.com' },
    { icon: MessageCircle, label: 'WeChat', href: '#' },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-card/30">
      <div className="absolute inset-0 ca-pattern opacity-10" />
      
      <div className="relative section-container">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{content[lang].title}</h2>
          <p className="text-xl text-primary font-medium mb-2">{content[lang].subtitle}</p>
          <p className="text-muted-foreground">{content[lang].description}</p>
        </div>

        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {content[lang].name}
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all outline-none text-foreground"
                  placeholder={lang === 'cn' ? '您的姓名' : 'Your name'}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {content[lang].email}
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all outline-none text-foreground"
                  placeholder={lang === 'cn' ? '您的邮箱' : 'Your email'}
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                {content[lang].message}
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-background border border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none text-foreground"
                placeholder={lang === 'cn' ? '想和我聊些什么？' : 'What would you like to discuss?'}
              />
            </div>
            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="w-full gap-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? content[lang].sending : content[lang].send}
              <Send className="w-4 h-4" />
            </Button>
          </form>

          {/* Social links */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">{content[lang].social}</p>
            <div className="flex justify-center gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="w-12 h-12 rounded-xl bg-secondary/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
