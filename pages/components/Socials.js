import {SiFacebook} from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { IoLogoDiscord } from "react-icons/io5";
const Socials = () => {
    return (
        <div className="social">
            <div className="social_container flex flex-row">

                <div className="flex transition duration-300 relative p-2 mx-4 bg-steel-200 rounded-2xl shadow-md hover:bg-brand cursor-pointer ">
                    <SiFacebook className=" text-3x group-hover:text-grey-200 text-brand transition duration-300"/>
                    <div className=" opacity-0 absolute py-2 px-4 bg-grey-200 text-steel-200 text-base transition duration-300 whitespace-nowrap font-bold rounded-lg pointer-events-none after:empty-content after::absolute">15000 +</div>
                </div>

                <div className="flex transition duration-300 relative p-2 mx-4 bg-steel-200 rounded-2xl shadow-md hover:bg-brand cursor-pointer ">
                    <AiFillInstagram className=" text-3x group-hover:text-grey-200 text-brand transition duration-300"/>
                    <div className=" opacity-0 absolute py-2 px-4 bg-grey-200 text-steel-200 text-base transition duration-300 whitespace-nowrap font-bold rounded-lg pointer-events-none after:empty-content after::absolute">10000 +</div>
                </div>


                <div className="flex transition duration-300 relative p-2 mx-4 bg-steel-200 rounded-2xl shadow-md hover:bg-brand cursor-pointer ">
                    <AiOutlineTwitter className=" text-3x group-hover:text-grey-200 text-brand transition duration-300"/>
                    <div className=" opacity-0 absolute py-2 px-4 bg-grey-200 text-steel-200 text-base transition duration-300 whitespace-nowrap font-bold rounded-lg pointer-events-none after:empty-content after::absolute">1500 +</div>
                </div>


                <div className="flex transition duration-300 relative p-2 mx-4 bg-steel-200 rounded-2xl shadow-md hover:bg-brand cursor-pointer ">
                    <AiFillGithub className=" text-3x group-hover:text-grey-200 text-brand transition duration-300"/>
                    <div className=" opacity-0 absolute py-2 px-4 bg-grey-200 text-steel-200 text-base transition duration-300 whitespace-nowrap font-bold rounded-lg pointer-events-none after:empty-content after::absolute">1200 +</div>
                </div>


                <div className="flex transition duration-300 relative p-2 mx-4 bg-steel-200 rounded-2xl shadow-md hover:bg-brand cursor-pointer ">
                    <IoLogoDiscord className=" text-3x group-hover:text-grey-200 text-brand transition duration-300"/>
                    <div className=" opacity-0 absolute py-2 px-4 bg-grey-200 text-steel-200 text-base transition duration-300 whitespace-nowrap font-bold rounded-lg pointer-events-none after:empty-content after::absolute">800 +</div>
                </div>

            </div>
        </div>
    )
}

export default Socials;
