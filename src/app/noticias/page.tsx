import { getLatestNews } from "@/services/news";
import { NewsList } from "@/components/ui/NewsList/NewsList";

export default async function NewsPage() {
  const news = await getLatestNews();
  console.log(news);
  return (
    <section className="w-full py-40">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold pb-10">Noticias</h1>
        <NewsList news={news} />
      </div>
    </section>
  );
}
