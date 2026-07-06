import { getCategories } from "@/services/categories";
import { NavbarClient } from "@/components/ui/NavbarClient/NavbarClient";

export async function Navbar() {
  const categories = await getCategories();

  return (
    <NavbarClient categories={categories}
    />
  );
}