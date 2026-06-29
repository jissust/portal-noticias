import { getRelatedNewsByCategory } from "@/services/news";
import { NewsList } from "@/components/ui/NewsList/NewsList";

type Props = {
  params: Promise<{
    categoria: string;
  }>;
};

export default async function CategoryPage({ params }: Props) {
  const { categoria } = await params;

  const news = await getRelatedNewsByCategory(categoria);

  return (
    <section className="w-full py-40">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold pb-10">Noticias: {categoria}</h1>
        <NewsList news={news} />
      </div>
    </section>
  );
}
