import { RiReactjsLine } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

import { RiJavascriptLine } from "react-icons/ri";

const Technologies = () => {
  return (
    <div>
      <h1 className="my-20 text-center text-4xl font-light">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-8 ">
        <div className="border-2 border-neutral-400 rounded-2xl p-2">
          <RiJavascriptLine className="text-7xl text-yellow-400" />
        </div>
        {/* <div className="border-2 border-neutral-400 rounded-2xl p-2">
          <FaHtml5 className="text-7xl text-orange-500" />
        </div> */}
        {/* <div className="border-2 border-neutral-400 rounded-2xl p-2">
          <FaCss3Alt className="text-7xl text-sky-600" />
        </div> */}
        <div className="border-2 border-neutral-400 rounded-2xl p-2">
          <SiTypescript className="text-7xl text-sky-600" />
        </div>
        <div className="border-2 border-neutral-400 rounded-2xl p-2">
          <SiTailwindcss className="text-7xl text-blue-400" />
        </div>
        <div className="border-2 border-neutral-400 rounded-2xl p-2">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="border-2 border-neutral-400 rounded-2xl p-2">
          <TbBrandReactNative className="text-7xl text-cyan-400" />
        </div>
        <div className="border-2 border-neutral-400 rounded-2xl p-2">
          <SiMongodb className="text-7xl text-green-400" />
        </div>
        <div className="border-2 border-neutral-400 rounded-2xl p-2">
          <FaNodeJs className="text-7xl text-green-400" />
        </div>
        <div className="border-2 border-neutral-400 rounded-2xl p-2">
          <SiExpress className="text-7xl text-grey-400" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
