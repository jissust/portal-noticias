import { notFound } from "next/navigation";
import Image from "next/image";
import { MarkdownRenderer } from "@/components/ui/markdownRenderer/MarkdownRenderer";
import { RelatedNewsColumn } from "@/components/ui/RelatedNewsColumn/RelatedNewsColumn";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

type Props = {
  params: {
    slug: string;
  };
};

async function getNews(slug: string) {
  console.log(API_URL);
  try {
    const res = await fetch(
      `${API_URL}/api/news?filters[slug][$eq]=${slug}&populate=*`,
      {
        cache: "no-store",
      },
    );

    if (!res.ok) {
      return null;
    }

    const data = await res.json();

    return data.data[0];
  } catch {
    return null;
  }
}

export default async function NewsDetail({ params }: Props) {
  const { slug } = await params;
  const news = await getNews(slug);
  const categories = news.categories;
  const categorySlug = categories[0].slug || "";
  
  if (!news) {
    notFound();
  }
  const image = news.image;
  const imageUrl = image.url.startsWith("http")
    ? image.url
    : `${API_URL}${image.url}`;

  return (
    <section className="w-full py-30">
      <div className="max-w-7xl mx-auto px-6 gap-8 grid grid-cols-1 lg:grid-cols-12">
        <div className="mx-auto lg:col-start-1 lg:col-end-10">
          <header>
            <span className="inline-block px-4 py-2 bg-gold rounded-full text-sm font-semibold mb-4 bg-black text-white">
              {news.categories[0]?.name}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold">
              {news.title}
            </h1>
          </header>
          <h2 className="mt-4 text-lg font-semibold">
            {news.descent}
          </h2>
          {image && (
            <figure className="mt-8 mb-4 relative w-full">
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
            <span className="font-bold">✍ {news.author.name}</span>

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
        </div>
        <div className="lg:col-start-10 lg:col-end-13">
            <RelatedNewsColumn categorySlug={categorySlug} />
        </div>
      </div>
    </section>
  );
}
