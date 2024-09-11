import Navbar from "@/components/default/Navbar";
import Footer from "@/components/default/Footer";

export default function HomeLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="sticky top-0 z-20">
        <Navbar />
      </div>
      <section className="relative">{children}</section>

      <Footer />
    </div>
  );
}
