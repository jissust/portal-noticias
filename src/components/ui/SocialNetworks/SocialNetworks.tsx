import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
  FaTiktok,
} from "react-icons/fa6";
import { IconType } from "react-icons";

type SocialNetwork = {
  name: string;
  href: string;
  icon: IconType;
};

const socialLinks: SocialNetwork[] = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: FaFacebookF,
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: FaInstagram,
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: FaYoutube,
  },
  {
    name: "X",
    href: "https://x.com",
    icon: FaXTwitter,
  },
  {
    name: "TikTok",
    href: "https://tiktok.com",
    icon: FaTiktok,
  },
];

type SocialNetworksProps = {
  size?: number;
  iconClassName?: string;
  itemClassName?: string;
};

export const SocialNetworks = ({
  size = 40,
  iconClassName = "",
  itemClassName = "",
}: SocialNetworksProps) => {
  return (
    <>
      {socialLinks.map((social) => {
        const Icon = social.icon;

        return (
          <Link
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className={itemClassName}
          >
            <Icon
              size={size}
              className={iconClassName}
            />
          </Link>
        );
      })}
    </>
  );
};