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
      </Head>

      <div className="container">
        <h1>White Paper | Tsuki Inu</h1>

        <h2>Introduction</h2>
        <p>
          Tsuki Inu is a decentralized community-driven project aiming to redefine the meme token landscape. The project leverages blockchain technology and community governance to build a secure, reliable, and innovative ecosystem that goes beyond traditional meme projects.
        </p>

        <h2>Reliability and Security</h2>
        <p>
          Tsuki Inu prioritizes reliability and security. The project has undergone rigorous security audits by leading blockchain security firms to ensure the robustness of the smart contracts. Furthermore, continuous monitoring and updates are implemented to fortify the ecosystem against potential vulnerabilities.
        </p>

        {/* Additional paragraphs... */}

        <h2>Conclusion</h2>
        <p>
          Tsuki Inu is committed to delivering a secure, reliable, and forward-thinking platform that surpasses the limitations of traditional meme projects. With a strong emphasis on community involvement and innovation, Tsuki Inu aims to become a leading decentralized ecosystem in the blockchain space.
        </p>
      </div>
    </>
  );
};

export default Projects;
