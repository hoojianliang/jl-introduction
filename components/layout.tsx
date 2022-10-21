import Navbar from "./navbar";
import Footer from "./footer";

type ComponentProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: ComponentProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-auto container mx-auto">{children}</main>
      <Footer />
    </div>
  );
}
