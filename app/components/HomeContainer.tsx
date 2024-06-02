import Image from "next/image";
import RightArrow from "@/app/assets/icons/right-arrow.png";
import PlayButton from "@/app/assets/icons/play-button.png";
import Home1 from "@/app/assets/images/Home1.png";
import Star from "@/app/assets/icons/star.png";
import iPhone from "@/app/assets/images/iPhone.png";
import iPhone2 from "@/app/assets/images/iPhone2.png";
import Ellipse from "@/app/assets/images/Ellipse.png";
import ColorCombination from "@/app/assets/images/ColorCombination.png";
import { NextPage } from 'next'
interface Props {}
const HomeContainer: NextPage<Props> = ({}) => {
  return (
    <div id="home" className="flex flex-1 ml-5 mr-5 justify-around items-center mt-10 mb-10">
      <div className="flex flex-col w-[40%] justify-center relative pl-20 pt-10">
        <Image
          src={ColorCombination}
          alt="color-combination"
          height={300}
          width={300}
          className="absolute top-10 z-0 rotate-180"
        ></Image>
        <h1 className="text-5xl font-bold text-black z-10">Make The Best</h1>
        <h1 className="text-5xl font-bold text-black z-10">
          Financial Decisions
        </h1>
        <h3 className="text-sm text-gray-500 font-semibold mt-5 z-10">
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </h3>
        <div className="flex flex-row items-center mt-5 ">
          <button className="flex bg-black text-white hover:text-orange-600 px-4 py-2 rounded-md items-center z-10">
            Get Started{" "}
            <Image
              src={RightArrow}
              alt="right-arrow"
              height={20}
              width={20}
              style={{ filter: "invert(100%)", marginLeft: "5px" }}
            ></Image>
          </button>
          <button className="flex text-black hover:text-orange-600 font-bold px-4 py-2 rounded-md ml-5 items-center z-10">
            <Image
              src={PlayButton}
              alt="play-button"
              height={20}
              width={20}
              color="white"
              className="mr-2"
            ></Image>
            Watch Video
          </button>
        </div>
        <Image
          className="absolute left-20 bottom-100 h-6 w-6"
          src={Star}
          alt="hero"
          width={300}
          height={300}
        ></Image>
        <Image
          className="mt-5"
          src={Home1}
          alt="Home1"
          width={300}
          height={300}
        ></Image>
      </div>
      <div className="flex w-[40%] h-[100%] justify-center items-center">
       <div className="flex relative ">
        <Image
          src={ColorCombination}
          alt="color-combination"
          height={500}
          width={500}
          className="absolute -left-22 -bottom-16 z-0"
        ></Image>
        <Image src={iPhone} alt="iphone1" height={300} width={300} className="absolute -rotate-12 top-0 left-12 z-20"></Image>
        <Image src={iPhone2} alt="iphone2" height={300} width={300} className="absolute -rotate-12 top-8 left-24 z-10"></Image>
        <Image src={iPhone} alt="iphone3" height={300} width={300} className="absolute -rotate-12 top-16 left-36 z-0"></Image>
       <Image src={Ellipse} alt="ellipse" height={400} width={400} className=""></Image>
       <Image
          className="absolute left-36 bottom-28 h-6 w-6"
          src={Star}
          alt="hero"
          width={500}
          height={500}
        ></Image>
       </div>
      </div>
    </div>
  );
}
export default HomeContainer