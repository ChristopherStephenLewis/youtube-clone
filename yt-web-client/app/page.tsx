import Image from "next/image";
import Link from "next/link";
import { getVideos } from "./firebase/functions";

export default async function Home() {
  const videos = await getVideos();

  return (
    <main>
      <section className="flex">
        {videos.map((video) => (
          <Link key={video.id} href={`/watch?v=${video.filename}`}>
            <Image
              src={"/thumbnail.png"}
              alt="video"
              width={120}
              height={80}
              className="m-3"
            />
          </Link>
        ))}
      </section>
    </main>
  );
}
