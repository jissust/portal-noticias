import { SocialNetworks } from "@/components/ui/SocialNetworks/SocialNetworks";

export const SocialNetworksHome = () => {
  return (
    <section id="redes" className="py-20 scroll-mt-26">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl md:text-7xl font-bold flex justify-center pb-10 text-black">
          Visitanos en nuestras redes:
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-4">
          <SocialNetworks size={100} iconClassName="text-black" itemClassName="flex justify-center" />
        </div>
      </div>
    </section>
  );
};