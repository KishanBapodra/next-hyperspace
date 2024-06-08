import Popup from "@/components/Popup";
import Link from "next/link";

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

export default function Page({ searchParams }: SearchParamProps) {
  const show = searchParams?.show;

  return (
    <div className="h-[95vh] flex justify-center items-center">
      <Link
        className="px-4 py-2 rounded text-text bg-primary hover:bg-accent"
        href="/popup?show=true"
      >
        Open Popup
      </Link>
      {show && <Popup />}
    </div>
  );
}
