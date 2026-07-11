"use client";

import {
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

type Props = {
  title: string;
  url: string;
};

export const ShareNews = ({
  title,
  url,
}: Props) => {

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,

    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,

    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);

    alert("Enlace copiado");
  };

  return (
    <div className="flex items-center gap-4 flex-wrap">

      {/* <span className="font-semibold">
        Compartir:
      </span> */}

      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition cursor-pointer"
      >
        <FaFacebook size={20}/>
      </a>

      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition cursor-pointer"
      >
        <FaXTwitter size={20}/>
      </a>

      <a
        href={shareLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition cursor-pointer"
      >
        <FaWhatsapp size={20}/>
      </a>

      {/* Instagram */}
      {/* <button
        onClick={copyLink}
        className="hover:scale-110 transition cursor-pointer"
      >
        <FaInstagram size={20}/>
      </button> */}

      {/* TikTok */}
      {/* <button
        onClick={copyLink}
        className="hover:scale-110 transition cursor-pointer"
      >
        <SiTiktok size={20}/>
      </button> */}

    </div>
  );
};