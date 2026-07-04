import { getRelatedNewsByCategory } from "@/services/news";
import { getCategories } from "@/services/categories";

import { NewsArchive } from "@/components/ui/NewsArchive/NewsArchive";

type Props = {
  params: Promise<{
    categoria: string;
  }>;
};

export default async function CategoryPage({ params }: Props) {
  const { categoria } = await params;

  const categories = await getCategories();

  const news = await getRelatedNewsByCategory(categoria);

  return (
    <NewsArchive
      title={`Noticias: ${categoria}`}
      news={news}
      categories={categories}
    />
  );
}
