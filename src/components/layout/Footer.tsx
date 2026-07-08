import { NavLinks } from "@/components/ui/Navigation/NavLinks";
import { SocialNetworks } from "@/components/ui/SocialNetworks/SocialNetworks";
import { LogoFooter } from "../ui/LogoFooter/LogoFooter";
import { getCategories } from "@/services/categories";

export const Footer = async() => {
  const categories = await getCategories();

  return (
    <footer className="w-full bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        <div className="flex justify-start h-full">
          <h2 className="text-2xl font-bold">
            <LogoFooter />
          </h2>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <NavLinks categories={categories} />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center border-t pt-8">

          <div className="text-sm text-center md:text-left font-semibold">
            © {new Date().getFullYear()} EMPRESA
          </div>

          <div className="flex justify-center md:justify-end gap-10">
            <SocialNetworks size={20} />
          </div>
        </div>
      </div>
    </footer>
  );
};
