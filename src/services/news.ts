export async function getLatestNews({
  featured,
}: {
  featured?: boolean;
} = {}) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}/api/news?populate=*&sort=id:desc`;
  if(featured !== undefined) {
    url += `&filters[featured][$eq]=${featured}`;
  }

  try {
    const res = await fetch(url);
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

export async function getRelatedNewsByCategory(slug: string) {
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
