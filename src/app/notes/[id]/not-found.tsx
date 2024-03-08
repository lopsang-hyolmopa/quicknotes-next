import Link from "next/link";

export default function notFoundPage() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center min-h-screen">
      <span className="text-2xl font-bold">QuickNotes</span>
      <h1 className="text-2xl lg:text-3xl font-bold">Opps! Note Not Found</h1>
      <h2>
        Go back to <Link href="/" className="text-blue-800">Homepage</Link>
      </h2>
    </div>
  );
}
