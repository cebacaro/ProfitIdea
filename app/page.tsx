import Image from "next/image";
import FeedPrincipal from "@/components/MainFeed/page";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center p-24">
      <h1 className="text-4xl text-black p-8">GREAT PROFIT IDEAS</h1>
      <FeedPrincipal />
    </main>
  );
}
