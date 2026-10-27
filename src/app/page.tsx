import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";
// ...import the other sections

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* ...other sections */}
      </main>
      <Footer />
    </>
  );
}