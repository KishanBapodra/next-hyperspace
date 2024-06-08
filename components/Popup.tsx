import Link from "next/link";
import { IoMdClose } from "react-icons/io";

export default function Popup() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
      <div className="bg-secondary p-6 rounded shadow-lg flex flex-col gap-5">
        <div className="flex justify-between">
          <h2 className="text-xl mb-2">Hello, Popup here</h2>
          <Link href="/">
            <button className="p-2 bg-primary text-text rounded hover:bg-accent">
              <IoMdClose />
            </button>
          </Link>
        </div>
        <p>Close me to return to homepage</p>
      </div>
    </div>
  );
}
