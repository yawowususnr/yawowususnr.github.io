import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import ContactUs from "./components/ContactUs";
import { Footer } from "./components/Footer";
import RequestServices from "./components/RequestServices";
import { Amenities } from "./components/Amenities";
import Slideshow from "./components/Slideshow";
import HeroVar from "./components/HeroVar";

export default function Home() {
  return (
    <main className="overflow-x-hidden antialiased text-neutral-800">
      <Navbar />
      {/* <Hero /> */}
      <HeroVar />
      {/* <Services /> */}
      <Amenities />
      <Reviews />
      <Slideshow />
      <ContactUs />
      <Footer />
    </main>
  );
}
