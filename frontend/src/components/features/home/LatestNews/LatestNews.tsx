import { CardNew } from "@/components/ui/CardNew/CardNew";
import { ButtonLink } from "@/components/ui/buttonLink/ButtonLink";
import { News } from "@/types/news";

export interface NewsProps {
  news: News[];
}

export const LatestNews = async ({ news }: NewsProps) => {
  return (
    <section id="ultimas-noticias" className="w-full py-20 scroll-mt-26">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl md:text-7xl font-bold flex justify-center pb-10">
          Últimas Noticias
        </h1>
        <div className="flex flex-wrap justify-center gap-8">
          {news.map((item) => (
            <CardNew key={item.id} new={item} />
          ))}
        </div>
        <div className="flex justify-center mt-5">
          <ButtonLink
            href="/noticias"
            bgColor="bg-black"
            hoverBgColor="hover:bg-white"
            textColor="text-white"
            hoverTextColor="hover:text-black"
            borderColor="border border-[#000000] border-2"
            hoverBorderColor="hover:border-[#000000] hover:border-2"
            target="_self"
            eventData={{
              event: "contact_click",
              method: "letter_open",
              location: "home",
            }}
          >
            Ver más →
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};
