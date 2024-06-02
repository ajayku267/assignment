import { NextPage } from "next";
import RightUpEllipse from "@/app/assets/images/rightUpEllipse.png";
import LeftDownEllipse from "@/app/assets/images/leftDownEllipse.png";
import IPhone3Pair from "@/app/assets/images/iPhone3Pair.png";
import Star from "@/app/assets/icons/star.png";
import ColorCombination from "@/app/assets/images/ColorCombination.png";
import AppleLogo from "@/app/assets/icons/AppleLogo.png";
import Image from "next/image";

interface Props {}

const AppDownloadContainer: NextPage<Props> = ({}) => {
  return (
    <div className="flex w-full justify-center items-center relative">
        <Image src={Star} alt="star" width={30} height={30} className="absolute -top-10 right-10 z-10" ></Image>
        <Image src={Star} alt="star" width={30} height={30} className="absolute top-32 left-5 z-10" ></Image>
        <Image src={ColorCombination} alt="color-combination" width={500} height={500} className="absolute rotate-180 -top-36 -left-32 z-0"></Image>
      <div className="flex justify-center items-center h-96 w-[90%] bg-black rounded-lg m-10 relative">
        <div className="flex flex-col justify-center float-start items-start h-[100%] w-[50%] -ml-80 relative">
          <h1 className="text-5xl font-bold text-white">
            Ready To Get Started?
          </h1>
          <h3 className="text-white mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            delectus.
          </h3>
          <button className="flex items-center mt-5 hover:bg-orange-600 bg-white text-black text-bold p-4 rounded-md">
            Download App{" "}
            <Image
              src={AppleLogo}
              alt="logo"
              width={20}
              height={20}
              className="ml-2"
            ></Image>
          </button>
        <Image src={Star} alt="star" width={30} height={30} className="absolute top-16 right-0 z-10" style={{filter:"invert(100%"}}></Image>
        <Image src={Star} alt="star" width={30} height={30} className="absolute bottom-20 right-40 z-10" style={{filter:"invert(100%"}}></Image>
        </div>
        
        <Image
          src={IPhone3Pair}
          alt="iphone"
          width={400}
          height={400}
          className="absolute right-0 z-20"
        ></Image>
        <Image src={ColorCombination} alt="color-combination" width={400} className="absolute bottom-0 -right-10 z-10"></Image>
        <Image
          src={RightUpEllipse}
          alt="ellipse"
          width={300}
          height={300}
          className="absolute top-0 right-0"
        ></Image>
        <Image
          src={LeftDownEllipse}
          alt="ellipse"
          width={300}
          height={300}
          className="absolute bottom-0 left-0"
        ></Image>
      </div>
    </div>
  );
};

export default AppDownloadContainer;
