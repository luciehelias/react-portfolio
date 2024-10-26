import { HERO_CONTENT } from "../constants";

import profilePic from "../images/Lucie Hélias.jpg";

const Hero = () => {
  return (
    <div
    //  className="border-b border-neutral-900 pb-4 lg:mb-35"
    >
      <div className="flex flex-wrap items-center">
        <div className=" w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-12 text-6xl font-extralight tracking-tight lg:mt-10 lg:text-6xl">
              Lucie Hélias
            </h1>
            <span className="bg-clip-text text-3xl font-extralight ">
              Développeuse full-stack (react)
            </span>
            <p className="my-2 max-w-xl py-6 font-extralight tracking-tighter whitespace-pre-line text-justify">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img
              src={profilePic}
              alt=" photo de profil"
              className="rounded-2xl mt-32 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
