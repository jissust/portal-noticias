import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
  FaTiktok,
} from "react-icons/fa6";

const socialLinks = [
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

export const SocialNetworksHome = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl md:text-7xl font-bold flex justify-center pb-10 text-black">
          Visitanos en nuestras redes:
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {socialLinks.map((social) => {
            const Icon = social.icon;

            return (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-4
                  w-full
                  min-h-[180px]
                  bg-white
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-xl
                "
              >
                <Icon size={100} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};