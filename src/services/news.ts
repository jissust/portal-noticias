import { newsMock } from "@/mock/news";
const USE_MOCKS = process.env.NEXT_PUBLIC_USE_MOCKS === "true";

export async function getNews({
  featured,
  page = 1,
  pageSize = 9,
}: {
  featured?: boolean;
  page?: number;
  pageSize?: number;
} = {}) {
  if (USE_MOCKS) {
    return {
      data: newsMock.data,
      pagination: newsMock.meta.pagination,
    };
  }

  let url =
    `${process.env.NEXT_PUBLIC_API_URL}/api/news` +
    `?populate=*` +
    `&sort=id:desc` +
    `&pagination[page]=${page}` +
    `&pagination[pageSize]=${pageSize}`;

  if (featured !== undefined) {
    url += `&filters[featured][$eq]=${featured}`;
  }

  try {
    const res = await fetch(url);

    if (!res.ok) {
      console.error("Error API noticias:", res.status);

      return {
        data: [],
        pagination: null,
      };
    }

    const response = await res.json();

    return {
      data: response.data,
      pagination: response.meta.pagination,
    };
  } catch (err) {
    console.error("Error fetching news:", err);

    return {
      data: [],
      pagination: null,
    };
  }
}

export async function getRelatedNewsByCategory(slug: string) {
  if (USE_MOCKS) {
    return newsMock.data.filter((news) =>
      news.categories?.some((c) => c.slug === slug),
    );
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/news?filters[categories][slug][$eq]=${slug}&populate=*&sort=id:desc`,
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
}

export async function getNewsDetail(slug: string) {
  if (USE_MOCKS) {
    return newsMock.data.find((n) => n.slug === slug) ?? null;
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/news?filters[slug][$eq]=${slug}&populate[author][populate]=*&populate[categories][populate]=*&populate[image][populate]=*`,
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

export async function getFeaturedNews() {
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
}