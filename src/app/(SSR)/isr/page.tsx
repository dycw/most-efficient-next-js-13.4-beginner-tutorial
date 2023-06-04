import { Alert } from "@/components/bootstrap";
import { UnsplashImage } from "@/models/unsplash-image";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Incremental Static Regeneration - NextJS 13.4 Image Gallery",
};

export default async function Page() {
  const params = new URLSearchParams({
    client_id: process.env.UNSPLASH_ACCESS_KEY!,
  });
  const response = await fetch(
    `https://api.unsplash.com/photos/random?${params}`,
    { next: { revalidate: 15 } }
  );
  const image: UnsplashImage = await response.json();
  const width = Math.min(image.width, 500);
  const height = (width * image.height) / image.width;
  return (
    <div className="d-flex flex-col align-items-center">
      <Alert>
        This page uses <strong>incremental static regeneration</strong>. A new
        image is fetched every 15 seconds (after refreshing the page) and then
        served from the cache for that duration.
      </Alert>
      <Image
        src={image.urls.raw}
        alt={image.description}
        width={width}
        height={height}
        className="rounded shadow mw-100 h-100"
      />
      by{" "}
      <Link href={`/users/${image.user.username}`}>{image.user.username}</Link>
    </div>
  );
}
