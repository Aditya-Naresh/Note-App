import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-3xl w-full text-center px-6 py-16">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Welcome to Notes App
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Your personal space for capturing thoughts, ideas, and memories.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/signin">
            <button className="w-full sm:w-auto px-6 py-3 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition">
              Sign In
            </button>
          </Link>
          <Link href="/signup">
            <button className="w-full sm:w-auto px-6 py-3 text-lg font-semibold text-blue-600 border border-blue-600 hover:bg-blue-100 dark:hover:bg-gray-700 rounded-lg transition">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

