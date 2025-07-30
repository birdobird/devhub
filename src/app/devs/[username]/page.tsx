import { Metadata } from "next";
import devs from "@/data/devs.json";
import DevProfileClient from "./DevProfileClient";

type Props = {
  params: Promise<{ username: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateStaticParams() {
  return devs.map((dev) => ({
    username: dev.username,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { username } = await params;
  const dev = devs.find((dev) => dev.username === username);
  
  if (!dev) {
    return {
      title: "Developer Not Found",
    };
  }

  return {
    title: `${dev.name} | DevHub`,
    description: dev.bio,
    openGraph: {
      title: `${dev.name} | DevHub`,
      description: dev.bio,
      images: [dev.avatar],
    },
  };
}

export default async function Page({ params }: Props) {
  return <DevProfileClient params={params} />;
}