import Navbar from "@/components/default/Navbar";
import Ecoplants from "@/app/assets/logo/ecoplants.webp";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Footer from "@/components/default/Footer";

export default function HomeLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />

      <section className="relative">{children}</section>

      <Footer />
    </div>
  );
}
