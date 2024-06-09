import Hero from "@/components/Hero";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/components/Scene"), {
  ssr: false,
});

export default function Page() {
  return (
    <div className="bg-slate-900 min-h-screen flex mx-5 justify-evenly items-center">
      <Hero />
      <Scene />
    </div>
  );
}
