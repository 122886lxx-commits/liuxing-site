import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "刘星 | AI 产品经理 & 算法工程师 - Liu Xing",
  description:
    "AI 产品 × 算法底层 —— 用第一性原理做能落地的智能体与智能终端产品。BUPT 硕士，搜索/推荐算法经历，智能座舱语音智能体，二维元胞自动机伪随机数研究。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
