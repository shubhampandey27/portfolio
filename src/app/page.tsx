import Design from "@/components/Design";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import Hero from "@/components/Hero";
import MyWorks from "@/components/MyWorks";
import Navbar from "@/components/Navbar";
import OtherLiveProducts from "@/components/OtherLiveProducts";
import Reference from "@/components/Reference";

export default function Home() {
  return (
    <main>
      <Hero />
      <Design />
      <MyWorks />
      <OtherLiveProducts />
      <Reference />
      <GetInTouch />
    </main>
  );
}
