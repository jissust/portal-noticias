export interface YoutubeVideo {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  thumbnail: string;
}

export async function getLatestVideos(
  channelId: string,
  maxResults = 3,
): Promise<YoutubeVideo[]> {
  const apiKey = process.env.YOUTUBE_API_KEY;

  const url =
    `https://www.googleapis.com/youtube/v3/search` +
    `?key=${apiKey}` +
    `&channelId=${channelId}` +
    `&part=snippet,id` +
    `&order=date` +
    `&maxResults=${maxResults}`;

  const response = await fetch(url);

  const data = await response.json();

  return data.items
    .filter((item: any) => item.id.videoId)
    .map((item: any) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      publishedAt: item.snippet.publishedAt,
      thumbnail: item.snippet.thumbnails.high.url,
    }));
}
