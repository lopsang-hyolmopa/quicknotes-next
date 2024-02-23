interface LayoutProps {
    children: React.ReactNode
}

export default function Layout({children}: LayoutProps) {
  return <div className="container mx-auto p-4 lg:p-12">{children}</div>;
}
