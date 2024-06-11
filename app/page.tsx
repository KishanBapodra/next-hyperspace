import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full flex flex-grow flex-col justify-center items-center gap-10">
      <Image
        src="/vr.png"
        alt="A VR headset"
        width={200}
        height={200}
        className="rounded-full"
      />
      <div className="flex px-4 sm:px-0 w-full sm:w-4/5 gap-3 max-w-96 text-center text-text justify-between items-center text-lg font-semibold">
        <Link
          className="px-4 py-2 rounded bg-primary hover:bg-accent hover:animate-scale"
          href="/scene"
        >
          Scene
        </Link>
        <Link
          className="px-4 py-2 rounded text-nowrap bg-primary hover:bg-accent hover:animate-scale"
          href="/popup"
        >
          Popup page
        </Link>
        <Link
          className="px-4 py-2 rounded text-nowrap bg-primary hover:bg-accent hover:animate-scale"
          href="/spooky"
        >
          Spooky
        </Link>
      </div>
    </div>
  );
}
