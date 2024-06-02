import Image from "next/image";
import Navabar from "@/app/components/Navbar";
import HomeContainer from "@/app/components/HomeContainer";
import Star from "@/app/assets/icons/star.png";
import FeaturesContainer from "./components/FeaturesContainer";
import AdvantagesContainer from "./components/AdvantagesContainer";
import CustomizableContainer from "./components/CustomizableContainer";
import TestimonialConatainer from "./components/TestimonialConatainer";
import Faq from "./components/Faq";
import AppDownloadContainer from "./components/AppDownloadContainer";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col  bg-slate-50 justify-center relative ">
      <Navabar />
      <Image
        className="absolute right-8 top-14 h-6 w-6"
        src={Star}
        alt="hero"
        width={500}
        height={500}
      ></Image>
      <Image
        className="absolute left-8 top-20 h-6 w-6"
        src={Star}
        alt="hero"
        width={500}
        height={500}
      ></Image>
      <HomeContainer />
      <FeaturesContainer/>
      <AdvantagesContainer/>
      <CustomizableContainer/>
      <TestimonialConatainer/>
      <Faq/>
      <AppDownloadContainer/>
      <Footer/>
    </div>
  );
}
