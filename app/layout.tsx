import '@/app/ui/global.css';

type ChildrenObj = {children: React.ReactNode}

export default function RootLayout({children}: ChildrenObj) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
