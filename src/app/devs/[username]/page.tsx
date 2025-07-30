import { Metadata } from "next";
import devs from "@/data/devs.json";
import DevProfileClient from "./DevProfileClient";

type Props = {
  params: { username: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateStaticParams() {
  return devs.map((dev) => ({
    username: dev.username,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const dev = devs.find((dev) => dev.username === resolvedParams.username);
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

export default async function DevProfile({ params }: { params: { username: string } }) {
  const resolvedParams = await params;
  return <DevProfileClient params={resolvedParams} />;
}