import Image from "next/image";
import FeedPrincipal from "@/components/MainFeed/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl text-black">GREAT PROFIT IDEAS</h1>
      <FeedPrincipal />
    </main>
  );
}
