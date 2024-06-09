import Hero from "@/components/Hero";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/components/Scene"), {
  ssr: false,
});

export default function Page() {
  return (
    <div className="bg-slate-900 mt-10 h-screen sm:h-auto flex flex-col sm:flex-row mx-5 sm:justify-evenly items-center">
      <Hero />
      <Scene />
    </div>
  );
}
