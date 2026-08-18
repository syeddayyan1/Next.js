import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 px-6">
      <div className="text-center">
        <h1 className="text-8xl font-extrabold tracking-tight text-blue-500">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold text-white">
          Page Not Found
        </h2>

        <p className="mt-3 text-gray-400">
          Sorry, the page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30"
        >
          ← Return Home
        </Link>
      </div>
    </div>
  )
}
