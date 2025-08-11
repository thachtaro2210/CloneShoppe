import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-lg font-semibold text-[#ee4d2d]">404</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Page not found
        </h1>
        <p className="mt-4 text-base text-gray-500 sm:text-lg">
          Sorry, we couldn’t find the page you’re looking for.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            to="/"
            className="rounded-sm bg-[#ee4d2d] px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-[#d73211] transition-colors"
          >
            Go back home
          </Link>
          <a
            href="#"
            className="text-sm font-medium text-[#ee4d2d] hover:underline"
          >
            Contact support →
          </a>
        </div>
      </div>
    </main>
  )
}
