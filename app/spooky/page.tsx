import MainScene from "@/components/MainScene";

export default function Page() {
  return (
    <div className="h-screen rounded text-text flex justify-center items-center sm:items-start sm:mt-10">
      <div className="h-2/5 w-4/5 sm:h-4/5 sm:w-2/3 flex ">
        <MainScene />
      </div>
    </div>
  );
}
