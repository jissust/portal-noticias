import { getLatestNews } from "@/services/news";
import { getCategories } from "@/services/categories";

import { NewsArchive } from "@/components/ui/NewsArchive/NewsArchive";

export default async function NewsPage() {
  const news = await getLatestNews();
  const categories = await getCategories();

  return <NewsArchive title="Noticias" news={news} categories={categories} />;
}
