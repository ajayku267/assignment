import { NextPage } from "next";
import Image from "next/image";
import Star from "@/app/assets/icons/star.png";
interface Props {}
const Faq: NextPage<Props> = ({}) => {
  return (
    <div className="flex flex-col justify-around items-center h-[100%] w-full bg-slate-50 mt-10 mb-10">
      <div className="flex flex-col justify-center items-start h-[100%] w-[90%] relative">
        <h3 className="text-orange-600 font-semibold">FAQ</h3>
        <h1 className="text-5xl font-bold text-black mt-2">
          Frequently Asked Questions
        </h1>
        <Image src={Star} alt="star" width={30} height={30} className="absolute right-96 top-24"></Image>
      </div>
      <div className="flex flex-row justify-around h-[100%] w-full bg-slate-50 mt-10 mb-10">
        <div className="flex flex-col justify-center items-start h-[100%] w-[40%] pb-10">
          <div className="flex flex-col bg-[#FF5555] mt-6 p-2 rounded-lg">
            <h1 className="text-white font-bold">
              The Best Finaning And Accounting App Ever!
            </h1>
            <p className="text-slate-300 mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
              reprehenderit impedit est ducimus, natus ullam tempore ratione
              inventore animi voluptatum.
            </p>
          </div>
          <div className="flex flex-col bg-slate-50 mt-8">
            <h1 className="text-black font-bold">
              The Best Finaning And Accounting App Ever!
            </h1>
            <p className="text-gray-500 mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
              reprehenderit impedit est ducimus, natus ullam tempore ratione
              inventore animi voluptatum.
            </p>
          </div>
          <div className="flex flex-col bg-[#FF5555] mt-6 p-2 rounded-lg">
            <h1 className="text-white font-bold">
              The Best Finaning And Accounting App Ever!
            </h1>
            <p className="text-slate-300 mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
              reprehenderit impedit est ducimus, natus ullam tempore ratione
              inventore animi voluptatum.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start h-[100%] w-[40%] pb-10">
          <div className="flex flex-col bg-slate-50 mt-8">
            <h1 className="text-black font-bold">
              The Best Finaning And Accounting App Ever!
            </h1>
            <p className="text-gray-500 mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
              reprehenderit impedit est ducimus, natus ullam tempore ratione
              inventore animi voluptatum.
            </p>
          </div>
          <div className="flex flex-col bg-[#FF5555] mt-6 p-2 rounded-lg">
            <h1 className="text-white font-bold">
              The Best Finaning And Accounting App Ever!
            </h1>

            <p className="text-slate-300 mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
              reprehenderit impedit est ducimus, natus ullam tempore ratione
              inventore animi voluptatum.
            </p>
          </div>
          <div className="flex flex-col bg-slate-50 mt-8">
            <h1 className="text-black font-bold">
              The Best Finaning And Accounting App Ever!
            </h1>

            <p className="text-gray-500 mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
              reprehenderit impedit est ducimus, natus ullam tempore ratione
              inventore animi voluptatum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Faq;