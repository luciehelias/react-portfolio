import { HERO_CONTENT } from "../constants";
import { MOTIVATION } from "../constants";

import profilePic from "../images/Lucie Hélias.jpg";

const Hero = () => {
  return (
    <div className="w-full lg:my-36">
      <div className="flex flex-wrap items-end mt-20">
        <div className=" w-full lg:w-1/2 lg:p-10">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-12 text-7xl font-light tracking-tight lg:mt-10 lg:text-6xl">
              Lucie Hélias
            </h1>
            <span className="bg-clip-text text-3xl font-extralight ">
              Développeuse full-stack (react)
            </span>
            <p className="my-2 max-w-xl py-6 font-extralight tracking-tighter whitespace-pre-line text-justify">
              {HERO_CONTENT}
            </p>
            <p className=" max-w-xl font-extralight tracking-tighter whitespace-pre-line text-justify">
              {MOTIVATION}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img
              src={profilePic}
              alt=" photo de profil"
              className="rounded-2xl h-80 my-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
