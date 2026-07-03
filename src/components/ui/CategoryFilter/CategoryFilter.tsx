"use client";
import { useRouter, usePathname } from "next/navigation";
import { CustomSelect } from "../CustomSelect/CustomSelect";

type Category = {
  id: number;
  slug: string;
  name: string;
};

type Props = {
  categories: Category[];
};

export const CategoryFilter = ({ categories }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const categorySlug = pathname.split("/")[2] || "";

  return (
    <>
      <CustomSelect
        options={categories}
        value={categorySlug}
        placeholder="Seleccionar opción"
        onChange={(selected) => {
          console.log(selected);
          if (!selected) {
            router.push("/noticias");
            return;
          }

          router.push(`/noticias/${selected.slug}`);
        }}
      />
    </>
  );
};
