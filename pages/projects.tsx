import Head from "next/head";
import { useState } from "react";
import useSound from "use-sound";
import projectsData from "./api/projectsDat";
import { NextPage } from "next";

const Projects: NextPage = () => {
  const [projIndex, setProjIndex] = useState<any>(projectsData[0]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  const snapSfx = "./sounds/snap.wav";
  const popSfx = "./sounds/pop.wav";
  const [playSnap, { stop: stopSnap }] = useSound(snapSfx, { volume: 0.5 });
  const [playPop] = useSound(popSfx, { volume: 0.5 });

  return (
    <>
      <Head>
        <title>White Paper | Tsuki Inu</title>
        <meta
          name="description"
          content="White Paper for Tsuki Inu"
        />
      </Head>
      <style>
        {`
          body {
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f7f7f7;
          }

          .container {
            width: 100%;
            padding: 50px;
            border-radius: 10px;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
            background-color: #fff;
            text-align: left;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          h1 {
            text-align: center;
            margin-bottom: 20px;
            font-size: 32px;
            color: #333;
          }

          h2 {
            font-size: 24px;
            color: #333;
            margin-top: 30px;
            margin-bottom: 15px;
            text-align: center;
          }

          p {
            font-size: 16px;
            line-height: 1.6;
            color: #555;
            text-align: center;
          }
        `}
      </style>
      <div className="container">
        <h1>White Paper | Tsuki Inu</h1>

        <h2>Introduction</h2>
        <p>
          Tsuki Inu is a decentralized community-driven project aiming to redefine the meme token landscape. The project leverages blockchain technology and community governance to build a secure, reliable, and innovative ecosystem that goes beyond traditional meme projects.
        </p>

        <h2>Vision and Objectives</h2>
        <p>
          At its core, Tsuki Inu strives to set new standards within the crypto sphere, redefining what it means to be a meme-based cryptocurrency. Our vision extends beyond the mere creation of a token; we aim to pioneer a movement that reshapes perceptions, promotes innovation, and fosters sustainable growth within the decentralized ecosystem.
        </p>
        {/* Additional content on Vision and Objectives... */}

        <h2>Reliability and Security</h2>
        <p>
          Tsuki Inu prioritizes reliability and security. The project has undergone rigorous security audits by leading blockchain security firms to ensure the robustness of the smart contracts. Furthermore, continuous monitoring and updates are implemented to fortify the ecosystem against potential vulnerabilities.
        </p>
        {/* Additional content on Reliability and Security... */}

        <h2>Community Involvement and Governance</h2>
        <p>
          The heart of Tsuki Inu beats with the collective strength of our community. We value the insights, contributions, and active participation of every member. Embracing a decentralized governance model, we empower our community to actively engage in decision-making processes, ensuring that everyone has a voice in shaping the trajectory of Tsuki Inu.
        </p>
        {/* Additional content on Community Involvement and Governance... */}

        <h2>Conclusion</h2>
        <p>
          Tsuki Inu&apos;s journey is propelled by an unwavering commitment to deliver a secure, reliable, and forward-thinking platform that transcends the limitations of traditional meme projects. With a steadfast focus on community involvement, innovation, and technological excellence, Tsuki Inu aspires to not just make a mark but to set a new paradigm within the decentralized blockchain ecosystem.
        </p>
        {/* Additional content on Conclusion... */}
      </div>
    </>
  );
};

export default Projects;
