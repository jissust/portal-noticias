import { CardNew } from "@/components/ui/CardNew/CardNew";
import { News } from "@/types/news";

export interface NewsProps {
  news: News[];
}

export const LatestNews = async({ news }: NewsProps) => {

  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl md:text-7xl font-bold flex justify-center pb-10 text-gold">
          Últimas Noticias
        </h1>
        <div className="flex flex-wrap justify-center gap-8">
          {news.map((item) => (
            <CardNew key={item.id} new={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
