import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope as faSolidEnvelope } from "@fortawesome/free-solid-svg-icons"; // Import from the solid icons";
import { useEffect, useState } from "react";

const SocialLink = ({ item }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? (
    <a href={item.link} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon
        icon={item.icon}
        style={{ color: item.brandColor, cursor: "pointer" }}
      />
    </a>
  ) : (
    <span>{/* Placeholder when rendering on the server-side */}</span>
  );
};

const Socials = () => {
  const social = [
    {
      name: "GitHub",
      icon: faGithub,
      link: "https://github.com/david3239294", // Replace with the actual GitHub profile link
      brandColor: "#802bfc",
    },
    {
      name: "Telegram",
      icon: faTelegram,
      link: "https://t.me/TsukiInuOfficial",
      brandColor: "#0062ff",
    },
    {
      name: "Contact",
      icon: faSolidEnvelope,
      link: "mailto:David3239294@gmail.com", // Replace with the desired email address
      brandColor: "#00bbff",
    },
  ];

  return (
    <div className="flex flex-row justify-evenly content-center gap-2">
      {social.map((item, index) => (
        <SocialLink key={index} item={item} />
      ))}
    </div>
  );
};

export default Socials;
