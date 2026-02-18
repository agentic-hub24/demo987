import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h2>Sorry. We could not find the page you&apos;re looking for.</h2>
        <Link href="/">🏠 Home</Link>
      </div>
    </div>
  );
}
