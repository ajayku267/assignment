import { NextPage } from "next";
import Image from "next/image";
import Star from "@/app/assets/icons/star.png";
import iPhone from "@/app/assets/images/iPhone.png";
import VISA from "@/app/assets/images/VISA.png";
import Ellipse from "@/app/assets/images/Ellipse.png";
import ColorCombination from "@/app/assets/images/ColorCombination.png";
import Bell from "@/app/assets/icons/bell.png";

interface Props {}

const CustomizableContainer: NextPage<Props> = ({}) => {
  return (
    <div className="flex flex-row justify-around h-[100%] w-full bg-slate-50 mt-10 mb-10">
      <div className="flex flex-col justify-center items-center w-[40%] relative">
        <Image
          className="absolute top-10 "
          src={ColorCombination}
          alt="color-combination"
          width={500}
        ></Image>
        <Image
          className="absolute top-0 left-5 "
          src={Ellipse}
          alt="ellipse"
          width={450}
          height={450}
        ></Image>
        <Image
          className="absolute top-10 "
          src={iPhone}
          alt="iphone"
          width={300}
          height={300}
        ></Image>
        <Image
          className="absolute top-32 left-52 "
          src={VISA}
          alt="visa"
          width={180}
          height={180}
        ></Image>
        <Image
          className="absolute top-10 right-0 "
          src={Star}
          alt="star"
          width={30}
          height={30}
        ></Image>
      </div>
      <div className="flex flex-col justify-center items-start h-[100%] w-[40%] pt-10">
        <div className="flex flex-col bg-slate-50 mt-8">
          <span className="text-black font-bold flex flex-row">
            <Image
              src={Bell}
              alt="star"
              width={20}
              height={10}
              style={{ color: "orange" }}
            ></Image>
            <h1 className="ml-2">Fully Customizable</h1>
          </span>
          <p className="text-gray-500 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolore
            a debitis, possimus quibusdam aut repellat laudantium numquam,
            sapiente impedit nesciunt accusamus consectetur molestiae minus
            dolor. Inventore minima excepturi dignissimos error dolor
            consequuntur recusandae incidunt, sapiente quasi sequi voluptatibus
            ipsam, ipsa eius ab mollitia iste perspiciatis magnam debitis
            commodi cum ut nulla. Beatae non quo ea. Eveniet impedit debitis
            repudiandae, cupiditate, suscipit reiciendis beatae vitae ut quos
            vero alias corrupti quod ipsa provident! Porro sapiente omnis,
            dignissimos iste veniam error illum et consequuntur iure minus
            rerum, eum molestiae suscipit maiores dicta? Veritatis atque dolorem
            distinctio, accusantium rem a quo eveniet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomizableContainer;
