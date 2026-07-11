"use client";

import Link from "next/link";
import { categoryType } from "@/types/category";
import { NewsCategoriesDropdown } from "@/components/ui/NewsCategoriesDropdown/NewsCategoriesDropdown";

type Props = {
  categories: categoryType[];
};

export const NavLinks = ({
  categories,
}: Props) => {
  return (
    <>
      <NewsCategoriesDropdown categories={categories} />
      
      <Link href="/#ultimas-noticias" className="font-semibold hover:text-gold text-white" >
        Últimas Noticias
      </Link>

      <Link href="/#ultimos-videos" className="font-semibold hover:text-gold text-white" >
        Últimos Videos
      </Link>

      <Link href="/#estadisticas" className="font-semibold hover:text-gold text-white" >
        Estadísticas
      </Link>

      <Link href="/#redes" className="font-semibold hover:text-gold text-white" >
        Redes
      </Link>
    </>
  );
};