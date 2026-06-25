import { getLatestNews } from "@/services/news";
import { CardNewMin } from "../CardNewMin/CardNewMin";

export const RelatedNewsColumn = async () => {
  const news = await getLatestNews();
  console.log(news);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Noticias Relacionadas</h1>
      {news.map((item) => (
        <CardNewMin key={item.id} new={item} />
      ))}
    </div>
  );
};
