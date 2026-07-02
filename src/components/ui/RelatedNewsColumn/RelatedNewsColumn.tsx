import { getRelatedNewsByCategory } from "@/services/news";
import { CardNewMin } from "../CardNewMin/CardNewMin";
import { News } from "@/types/news";

export const RelatedNewsColumn = async (categorySlug: any) => {
  const news = await getRelatedNewsByCategory(categorySlug.categorySlug);
  
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Noticias Relacionadas</h1>
      {news.map((item: News) => (
        <CardNewMin key={item.id} new={item} />
      ))}
    </div>
  );
};
