import Head from "next/head";
import { useState } from "react";
import ChronoCard from "@components/ChronoCard";
import { workData } from "./api/workData";
import { NextPage } from "next";
import SplineObj from "@components/SplineObject";
import { spaceBoards } from "@font";

const Work: NextPage = () => {
  return (
    <>
      <Head>
        <title>RoadMap | Tsuki Inu</title>
        <meta
          name="description"
          content="RoadMap | Tsuki Inu"
        />
      </Head>
      
      <div className="h-screen w-full flex flex-col items-center p-5 sm:p-0 overflow-auto">
        <div
          className={`ml-8 sm:ml-0 text-3xl md:text-4xl xl:text-5xl animated-heading bold my-2 md:my-10 ${spaceBoards.className}`}
        >
          Tsuki Inu RoadMap Version 1
        </div>
        <div className="w-full h-full flex flex-col md:grid grid-cols-12 text-gray-50 z-0">
          {workData.map((curElem) => {
            return <ChronoCard key={curElem.duration} curElem={curElem} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Work;
