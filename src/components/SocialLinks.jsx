import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function SocialLinks() {
  const links = [
    { icon: <FaGithub />, url: "https://github.com/yourname" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/yourname" },
    { icon: <FaTwitter />, url: "https://twitter.com/yourname" }
  ];

  return (
    <div className="flex gap-6">
      {links.map(({ icon, url }, i) => (
        <a
          key={i}
          href={url}
          target="_blank"
          rel="noopener"
          className="text-white text-2xl hover:text-neon-pink transition-colors"
        >
          {icon}
        </a>
      ))}
    </div>
  );
}
