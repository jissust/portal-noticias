export const dynamic = 'force-dynamic';
import { getNews } from "@/services/news";
import { getCategories } from "@/services/categories";

import { NewsArchive } from "@/components/ui/NewsArchive/NewsArchive";

type Props = {
  searchParams: Promise<{
    page?: string;
  }>;
};

export default async function NewsPage({ searchParams }: Props) {
  const params = await searchParams;

  const page = Number(params.page) || 1;

  const [newsResponse, categories] = await Promise.all([
    getNews({page, pageSize: 9, featured: false}),
    getCategories(),
  ]);

  return (
    <NewsArchive title="Noticias" news={newsResponse.data} categories={categories} pagination={newsResponse.pagination}
    />
  );
}
