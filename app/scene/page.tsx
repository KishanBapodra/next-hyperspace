import Hero from "@/components/Hero";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/components/Scene"), {
  ssr: false,
});
const SimpleScene = dynamic(() => import("@/components/SimpleScene"), {
  ssr: false,
});

export default function Page() {
  return (
    <div className="bg-slate-900 sm:h-auto my-10 flex flex-col mx-5 sm:justify-evenly items-center">
      <section className="flex flex-grow  flex-col-reverse sm:flex-row mx-5 sm:justify-evenly items-center">
        <Hero />
        <Scene />
      </section>
      <section
        className="flex justify-center items-center h-screen w-screen m-4
      "
      >
        <SimpleScene />
      </section>
    </div>
  );
}
