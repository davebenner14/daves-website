import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function SocialLinks() {
  const links = [
    { Icon: FaGithub, url: "https://github.com/yourname", color: "#000000" },
    { Icon: FaLinkedin, url: "https://linkedin.com/in/yourname" },
    { Icon: FaTwitter, url: "https://twitter.com/yourname" }
  ];

  return (
    <div className="flex gap-6">
      {links.map(({ Icon, url, color }, i) => (
        <a
          key={i}
          href={url}
          target="_blank"
          rel="noopener"
          className="text-white text-2xl hover:text-neon-pink transition-colors"
        >
          {/* Pass `color` to override currentColor; others will inherit text-white */}
          <Icon color={color} />
        </a>
      ))}
    </div>
  );
}
