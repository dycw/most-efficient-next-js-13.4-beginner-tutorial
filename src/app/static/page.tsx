import { Alert } from "@/components/bootstrap";
import { UnsplashImage } from "@/models/unsplash-image";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Static Fetching - NextJS 13.4 Image Gallery",
};

export default async function Page() {
  const params = new URLSearchParams({
    client_id: process.env.UNSPLASH_ACCESS_KEY!,
  });
  const response = await fetch(
    `https://api.unsplash.com/photos/random?${params}`
  );
  const image: UnsplashImage = await response.json();
  const width = Math.min(image.width, 500);
  const height = (width * image.height) / image.width;
  return (
    <div className="d-flex flex-col align-items-center">
      <Alert>
        This page <strong>fetches and caches data at build time</strong>. Even
        though the Unsplash API always returns a new image, we see the same
        image after refreshing the page until we compile the project again.
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
