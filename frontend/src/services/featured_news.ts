import { newsMock } from "@/mock/news";
const USE_MOCKS = process.env.NEXT_PUBLIC_USE_MOCKS === "true";
const API_URL = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;

/*export async function getFeaturedNews() {
  if (USE_MOCKS) {
    return newsMock.data.filter((n) => n.featured);
  }
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/news?filters[featured][$eq]=true&sort=id:desc&populate=*`,
    );
    if (!res.ok) {
      console.error("Error API noticias:", res.status);
      return [];
    }
    const data = await res.json();
    return data.data;
  } catch (err) {
    console.error("Error fetching news:", err);
    return [];
  }
}*/
