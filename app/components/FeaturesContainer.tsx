import { NextPage } from "next";
import Image from "next/image";
import Star from "@/app/assets/icons/star.png";
import iPhone from "@/app/assets/images/iPhone.png";
import Ellipse from "@/app/assets/images/Ellipse.png";
import ColorCombination from "@/app/assets/images/ColorCombination.png";
import FeaturIcon1 from "@/app/assets/icons/featureicon1.png";
import FeaturIcon2 from "@/app/assets/icons/featureicon2.png";
import FeaturIcon3 from "@/app/assets/icons/featureicon3.png";
interface Props {}
const FeaturesContainer: NextPage<Props> = ({}) => {
  return (
    <div id="features" className="flex flex-row justify-around h-[100%] w-full bg-slate-50 mt-10 mb-10">
      <div className="flex flex-col justify-center items-center w-[40%] relative">
        <Image className="absolute top-10 " src={ColorCombination} alt="color-combination" width={500}></Image>
        <Image className="absolute top-0 left-5" src={Ellipse} alt="ellipse" width={450} height={450}></Image>
        <Image className="absolute top-10 " src={iPhone} alt="iphone" width={300} height={300}></Image>
        <Image className="absolute top-10 left-0 " src={Star} alt="star" width={30} height={30}></Image>
      </div>
      <div className="flex flex-col justify-center items-start h-[100%] w-[40%] pb-10">
        <h3 className="text-orange-600 font-semibold">FEATURES</h3>
        <h1 className="text-5xl font-bold text-black mt-2">Uifry Premium</h1>
        <div className="flex flex-col bg-slate-50 mt-8">
          <span className="text-black font-bold flex flex-row">
            <Image
              src={FeaturIcon1}
              alt="star"
              width={20}
              height={10}
              style={{ color: "orange" }}
            ></Image>
            <h1 className="ml-2">Budjet Intervals</h1>
          </span>
          <p className="text-gray-500 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
            corporis alias eligendi. Maxime rem voluptatibus, odio deleniti
            omnis corporis ad?
          </p>
        </div>
        <div className="flex flex-col bg-slate-50 mt-8">
          <span className="text-black font-bold flex flex-row">
            <Image
              src={FeaturIcon2}
              alt="star"
              width={20}
              height={10}
              style={{ color: "orange" }}
            ></Image>
            <h1 className="ml-2">Budjet Intervals</h1>
          </span>
          <p className="text-gray-500 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
            corporis alias eligendi. Maxime rem voluptatibus, odio deleniti
            omnis corporis ad?
          </p>
        </div>
        <div className="flex flex-col bg-slate-50 mt-8">
          <span className="text-black font-bold flex flex-row">
            <Image
              src={FeaturIcon3}
              alt="star"
              width={20}
              height={10}
              style={{ color: "orange" }}
            ></Image>
            <h1 className="ml-2">Budjet Intervals</h1>
          </span>
          <p className="text-gray-500 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
            corporis alias eligendi. Maxime rem voluptatibus, odio deleniti
            omnis corporis ad?
          </p>
        </div>
        
      </div>
    </div>
  );
};
export default FeaturesContainer;