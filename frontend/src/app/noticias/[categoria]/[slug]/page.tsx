export const dynamic = 'force-dynamic';
import { notFound } from "next/navigation";
import Image from "next/image";
import { MarkdownRenderer } from "@/components/ui/markdownRenderer/MarkdownRenderer";
import { RelatedNewsColumn } from "@/components/ui/RelatedNewsColumn/RelatedNewsColumn";
import { ShareNews } from "@/components/ui/ShareNews/ShareNews";
import { Author } from "@/components/ui/Author/Author";
import { CategoryBadge } from "@/components/ui/CategoryBadge/CategoryBadge";
import { Breadcrumb } from "@/components/ui/Breadcrumb/Breadcrumb";
import { getNewsDetail } from "@/services/news";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

type Props = {
  params: {
    slug: string;
  };
};

export default async function NewsDetail({ params }: Props) {
  const { slug } = await params;
  const news = await getNewsDetail(slug);
  const author = news.author;
  
  const categories = news.categories;
  const categorySlug = categories[0].slug || "";
  
  if (!news) {
    notFound();
  }

  const image = news.image ?? null;

  const imageUrl =
    image?.url
      ? image.url.startsWith("http")
        ? image.url
        : `${API_URL}${image.url}`
      : null;


  return (
    <section className="w-full py-30">
      <div className="max-w-7xl mx-auto px-6 gap-8 grid grid-cols-1 lg:grid-cols-12">
        <div className="mx-auto lg:col-start-1 lg:col-end-10">
          <Breadcrumb labels={{
            "noticias": "Noticias",
            [categorySlug]: categories[0].name,
            [news.slug]: news.title
          }} />
          <header>
    
            <CategoryBadge category={news.categories[0]} />
            
            <h1 className="text-4xl md:text-6xl font-bold">
              {news.title}
            </h1>
          </header>
          <h2 className="mt-4 text-lg font-semibold">
            {news.descent}
          </h2>
          <ShareNews title={news.title} url={API_URL+"/noticia/"+news.slug} />
          {imageUrl && (
            <figure className="my-4 relative w-full">
              <Image
                width={500}
                height={500}
                src={imageUrl}
                alt={news.title}
                unoptimized
                className="object-scale-down w-full"
              />
            </figure>
          )}
          <div className="grid grid-cols-2 pb-5">
            <span className="font-bold"></span>

            <span className="text-end font-bold">
              📅{" "}
              {new Date(news.publishedAt).toLocaleDateString("es-ES", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>

          <div className="text-black">
            <MarkdownRenderer content={news.text} />
          </div>
          <Author author={author} />

        </div>
        <div className="lg:col-start-10 lg:col-end-13">
            <RelatedNewsColumn categorySlug={categorySlug} />
        </div>
      </div>
    </section>
  );
}
