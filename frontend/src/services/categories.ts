import { categoriesMock } from "@/mock/categories";
const USE_MOCKS = process.env.NEXT_PUBLIC_USE_MOCKS === "true";

export async function getCategories() {
  if (USE_MOCKS) {
    return categoriesMock.data;
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/categories?sort=name:desc`,
    );
    if (!res.ok) {
      console.error("Error API categorías:", res.status);
      return [];
    }
    const data = await res.json();
    return data.data;
  } catch (err) {
    console.error("Error fetching categories:", err);
    return [];
  }
}
