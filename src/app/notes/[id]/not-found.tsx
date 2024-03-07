import Link from "next/link";

export default function notFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-100vh">
      <h1 className="text-2xl font-bold">404 - Page Not Found</h1>
      <h2>
        Go back to <Link href="/" className="text-blue-800">Homepage</Link>
      </h2>
    </div>
  );
}
