import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CALIL SOUSA MATTOS Website Portfolio',
  description: 'CALIL SOUSA MATTOS Website Portfolio',
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}
export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  return (
    <html lang={locale}>
      <body>
        <div>
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}