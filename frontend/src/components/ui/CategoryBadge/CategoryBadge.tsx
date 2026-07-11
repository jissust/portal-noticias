import { categoryType } from "@/types/category";
type CategoryBadgeProps = {
  category: categoryType;
};

export const CategoryBadge = ({ category }: CategoryBadgeProps) => {
  return (
    <a href={`/noticias/${category.slug}`}>
      <span className="inline-block px-4 py-2 text-sm font-semibold bg-black text-white">
        {category.name}
      </span>
    </a>
  );
};
