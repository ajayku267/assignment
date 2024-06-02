import { NextPage } from "next";
import Image from "next/image";
import Star from "@/app/assets/icons/star.png";
import ColorCombination from "@/app/assets/images/ColorCombination.png";
import GroupPhoto1 from "@/app/assets/images/GroupPhoto1.png";
import AllMen from "@/app/assets/images/AllMen.png";
interface Props {}
const TestimonialConatainer: NextPage<Props> = ({}) => {
  return (
    <div className="flex flex-col justify-center items-center mt-32 relative">
      <h3 className="text-black font-semibold">TESTMONIAL</h3>
      <h1 className="text-4xl font-bold text-black mt-2">What Our Users</h1>
      <h1 className="text-4xl font-bold text-black mt-2">Say About Us?</h1>
      <Image
        className="absolute bottom-10 left-40 "
        src={Star}
        alt="star"
        width={30}
        height={30}
      ></Image>
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
            src={GroupPhoto1}
            alt="grout[photo1]"
            width={450}
            height={450}
          ></Image>
        </div>
        <div className="flex flex-col justify-center items-start h-[100%] w-[40%] pt-10">
          <div className="flex flex-col bg-slate-50 mt-8">
            <h1 className="text-black font-bold text-xl">
              The Best Finantal Accounting App Ever!
            </h1>

            <p className="text-gray-500 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              dolore a debitis, possimus quibusdam aut repellat laudantium
              numquam, sapiente impedit nesciunt accusamus consectetur molestiae
              minus dolor. Inventore minima excepturi dignissimos error dolor
              consequuntur recusandae incidunt, sapiente quasi sequi
              voluptatibus ipsam, ipsa eius ab mollitia iste perspiciatis magnam
              debitis commodi cum ut nulla. Beatae non quo ea. Eveniet impedit
              debitis repudiandae, cupiditate, suscipit reiciendis beatae vitae
              ut quos vero alias corrupti quod ipsa provident! Porro sapiente
              omnis, dignissimos iste veniam error illum et consequuntur iure
              minus rerum, eum molestiae suscipit maiores dicta? Veritatis atque
              dolorem distinctio, accusantium rem a quo eveniet.
            </p>
              <div>
              <Image
              className="mt-3"
              src={AllMen}
              alt="AllMen"
              width={150}
              height={150}
            ></Image>
              </div>
            <h1 className="text-2xl font-bold text-black mt-2">Nick Jonas</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TestimonialConatainer;