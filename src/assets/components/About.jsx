import profilePic from "../images/Lucie Hélias.jpg";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <div className="pb-4">
      <h1 className="my-20 text-center text-4xl font-light">
        A Propos de <span className="text-neutral-400">Moi</span>
      </h1>
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={profilePic} alt="photo" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-4 max-w-xl py-6 font-extralight whitespace-pre-line text-justify">
              {ABOUT_TEXT}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
