import Header from "@/components/Layout/header";
import Footer from "@/components/Layout/footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className="flex-1 container mx-auto p-4 lg:p-12">{children}</main>
      <Footer />
    </>
  );
}
