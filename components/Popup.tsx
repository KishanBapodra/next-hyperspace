import Link from "next/link";
import { IoMdClose } from "react-icons/io";

export default function Popup() {
  return (
    <dialog className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto h-full w-full ">
      <div className="bg-secondary p-6 rounded shadow-lg flex flex-col gap-5">
        <div className="flex justify-between gap-10">
          <h2 className="text-xl flex items-center">Hello, Popup here</h2>
          <Link href="/popup">
            <button className="p-2 bg-primary text-text rounded hover:bg-accent">
              <IoMdClose />
            </button>
          </Link>
        </div>
        <p className="text-center">Close me to return back</p>
      </div>
    </dialog>
  );
}
