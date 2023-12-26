import Head from "next/head";
import { useEffect } from "react";
import { SkillSphere } from "@components/SkillSphere";
import { NextPage } from "next";
import SplineObj from "@components/SplineObject";
import { raleway, montserrat, spaceBoards, tasaOrbiter } from "@font";

const Skills: NextPage = () => {
  // Skill Sphere Script
  useEffect(() => {
    SkillSphere();
  }, []);

  return (
    <div className="flex flex-row justify-start w-11/12 h-full mx-10">
      <Head>
        <title>Audit | Tsuki Inu</title>
        <meta
          name="description"
          content="Skills | Official Portfolio Website | Suvraneel Bhuin"
        />
      </Head>
      <div className="z-0 h-screen">
        <SplineObj
          // scene={"https://prod.spline.design/WmbvQs0Ze0BaJKW2/scene.splinecode"}
          scene={"./spline/sceneCOLORSTREAM.splinecode"}
        />
      </div>
      <div
        id="Skills"
        className="z-10 flex flex-col items-start w-11/12 gap-2 my-4 ml-2 text-white rounded-lg shadow-xl h-fit justify-evenly md:w-2/3 sm:gap-4 md:ml-12 md:my-10 md:px-10 md:py-5 shadow-purple-500/20 bg-black/20 backdrop-blur-sm font-secondary"
      >
        <div
          className={`ml-10 sm:ml-0 text-3xl md:text-4xl xl:text-5xl animated-heading bold mb-5 md:mb-10 mt-2 sm:mt-0 ${spaceBoards.className}`}
        >
          SmartContract audit & KYC
        </div>
        <>
          <p className={tasaOrbiter.className}>
           
        
          </p>
        </>
      </div>
      
    </div>
  );
};

export default Skills;
