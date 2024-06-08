import Link from "next/link";

export default function PopupPage() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <Link href="/">
          <button className="mb-4 px-4 py-2 bg-red-500 text-white rounded">
            Close
          </button>
        </Link>
        <h2 className="text-xl mb-2">Popup Content</h2>
        <p>This is the popup content.</p>
      </div>
    </div>
  );
}
