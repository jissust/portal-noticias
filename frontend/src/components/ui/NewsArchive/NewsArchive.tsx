import { News } from "@/types/news";
import { categoryType } from "@/types/category";
import { NewsList } from "../NewsList/NewsList";
import { CategoryFilter } from "../CategoryFilter/CategoryFilter";
import { Breadcrumb } from "@/components/ui/Breadcrumb/Breadcrumb";
import { Pagination } from "@/components/ui/Pagination/Pagination";

type NewsArchiveProps = {
  title: string;
  news: News[];
  categories?: categoryType[];
  pagination?: {
    page: number;
    pageCount: number;
    total: number;
  };
};

export const NewsArchive = ({ title, news, categories, pagination }: NewsArchiveProps) => {
       
  return (
    <section className="w-full py-40">
      <div className="max-w-7xl mx-auto px-6">
        <Breadcrumb labels={{}} />
        <div className="grid grid-cols-1 md:grid-cols-2 items-center pb-10">
          <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>

          {categories && (
            <div className="flex justify-start md:justify-end">
              <CategoryFilter categories={categories} />
            </div>
          )}
        </div>

        <NewsList news={news} />

        {pagination && (
          <Pagination currentPage={pagination.page} totalPages={pagination.pageCount}
          />
        )}
      </div>
    </section>
  );
};
