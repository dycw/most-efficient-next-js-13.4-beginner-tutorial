import styles from "./Page.module.css";
import { Alert } from "@/components/bootstrap";
import { UnsplashImage } from "@/models/unsplash-image";
import { UnsplashUser } from "@/models/unsplash-user";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  params: {
    username: string;
  };
};

async function getUser(username: string): Promise<UnsplashUser> {
  const params = new URLSearchParams({
    client_id: process.env.UNSPLASH_ACCESS_KEY!,
  });
  const response = await fetch(
    `https://api.unsplash.com/users/${username}?${params}`
  );
  if (response.status === 404) notFound();
  return await response.json();
}

export async function generateMetadata({ params: { username } }: Props) {
  const user = await getUser(username);
  const name =
    [user.first_name, user.last_name].filter(Boolean).join(" ") ||
    user.username;
  return { title: `${name} - NextJS 13.4 Image Gallery` };
}

export default async function Page({ params: { username } }: Props) {
  const user = await getUser(username);
  return (
    <div>
      <Alert>
        This profile page uses <strong>generateMetadata</strong> to set the{" "}
        <strong>page title</strong> dynamically from the API response.
      </Alert>
      <h1>{user.username}</h1>
      <p>First name: {user.first_name}</p>
      <p>Last name: {user.last_name}</p>
      <a href={"https://unsplash.com/" + user.username}>Unsplash profile</a>
    </div>
  );
}
