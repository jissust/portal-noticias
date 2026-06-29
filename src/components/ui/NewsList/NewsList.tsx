import { News } from "@/types/news"
import { CardNew } from "../CardNew/CardNew";

type NewsListProps = {
  news: News[];
};

export const NewsList = ({ news }: NewsListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {news.map((item) => (
        <CardNew
          key={item.id}
          new={item}
        />
      ))}
    </div>
  );
};