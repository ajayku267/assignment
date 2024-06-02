import { NextPage } from "next";
import Logo from "@/app/assets/icons/logo.png";
import MailLogo from "@/app/assets/icons/MailLogo.png";
import PhoneLogo from "@/app/assets/icons/PhoneLogo.png";
import Image from "next/image";
interface Props {}
const Footer: NextPage<Props> = ({}) => {
  return (
    <footer className="flex flex-col items-center justify-center w-[100%] h-[100%] mt-5 mb-20">
      <div className="flex  h-[200px] w-[80%]">
        <div className="flex flex-col items-start justify-start h-[200px] w-[90%]  mt-5 ">
          <span className="flex items-center m-1">
            <Image src={Logo} alt="logo" width={22} height={22} />
            <h1 className="text-black font-bold text-base ml-2">Uifry</h1>
          </span>
          <span className="flex items-center m-1">
            <Image src={MailLogo} alt="logo" width={22} height={22} />
            <h1 className="text-black font-bold text-base ml-2">
              Help@Frybix.Com
            </h1>
          </span>
          <span className="flex items-center m-1">
            <Image src={PhoneLogo} alt="logo" width={22} height={22} />
            <h1 className="text-black font-bold text-base ml-2">
              +1234 4560 678 89
            </h1>
          </span>
        </div>
        <div className="flex flex-col items-start justify-start h-[200px] w-[80%] mt-5 text-black">
          <h1 className="text-black font-semibold text-2xl m-1">Links</h1>
          <a className="m-1 font-medium text-sm hover:text-orange-600" href="#">
            Home
          </a>
          <a className="m-1 font-medium text-sm hover:text-orange-600" href="#">
            About Us
          </a>
          <a className="m-1 font-medium text-sm hover:text-orange-600" href="#">
            Bookings
          </a>
          <a className="m-1 font-medium text-sm hover:text-orange-600" href="#">
            Blog
          </a>
        </div>
        <div className="flex flex-col items-start justify-start h-[200px] w-[80%] mt-5 text-black">
          <h1 className="text-black font-semibold text-2xl m-1">Legal</h1>
          <a className="m-1 font-medium text-sm hover:text-orange-600" href="#">
            Terms Of Use
          </a>
          <a className="m-1 font-medium text-sm hover:text-orange-600" href="#">
            Privacy Policy
          </a>
          <a className="m-1 font-medium text-sm hover:text-orange-600" href="#">
            Cookie Policy
          </a>
        </div>
        <div className="flex flex-col items-start justify-start h-[200px] w-[80%] mt-5 text-black">
          <h1 className="text-black font-semibold text-2xl m-1">Product</h1>
          <a className="m-1 font-medium text-sm hover:text-orange-600" href="#">
            Take Tour
          </a>
          <a className="m-1 font-medium text-sm hover:text-orange-600" href="#">
            Live Chat
          </a>
          <a className="m-1 font-medium text-sm hover:text-orange-600" href="#">
            Reviews
          </a>
        </div>
        <div className="flex flex-col justify-start h-[200px]  w-[80%]  text-black mt-5">
          <h1 className="text-black font-semibold text-2xl m-1">Newsletter</h1>
          <a className="m-1 font-medium text-sm hover:text-orange-600" href="#">
            Stay Up to Date
          </a>
          <a
            className="m-1 font-medium text-slate-500 text-sm hover:text-orange-600"
            href="mailto:radheykedar28@gmail"
          >
            radheykedar28@gmail.com
          </a>
        </div>
        <div className="flex flex-col items-start justify-end w-[80%] h-[100px] mt-5 text-black">
          <button className="bg-black hover:text-orange-600 text-white px-4 py-2 rounded-md">
            Subscribe
          </button>
        </div>
      </div>
      <div className="border-t-2 w-[60%] border-slate-300 text-center  pt-6">
        <h1 className="text-slate-600 font-semibold text-sm">Copyright © 2022 Uifry.Com All Rights Reserved.</h1>
        </div>  
    </footer>
  );
};
export default Footer;