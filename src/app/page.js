import { Header } from "./components/header/Header";
import { SectionPrimary } from "./components/sectionPrimary/SectionPrimary";
import { SectionSpecializedServices } from "./components/sectionSpecializedServices/SectionSpecializedServices";
import { SectionWhyChooseUs } from "./components/sectionWhyChooseUs/SectionWhyChooseUs";
import { SectionResultsGallery } from "./components/sectionResultsGallery/SectionResultsGallery";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <SectionPrimary />
      <SectionSpecializedServices />
      <SectionWhyChooseUs />
      <SectionResultsGallery />
      <Contact />
      <Footer />
    </>
  );
}
