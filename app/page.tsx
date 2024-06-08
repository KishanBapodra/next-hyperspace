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
      <div className="flex w-3/5 gap-3 sm:gap-0 max-w-60 text-text justify-between text-lg font-semibold">
        <Link
          className="px-4 py-2 rounded bg-primary hover:bg-accent"
          href="/popup"
        >
          Open Popup
        </Link>
        <Link
          className="px-4 py-2 rounded bg-primary hover:bg-accent"
          href="/scene"
        >
          Scene
        </Link>
      </div>
    </div>
  );
}
