import { BookOpenIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <BookOpenIcon className="h-6 w-6 mr-2" />
          <span className="font-bold">John Doe's Blog</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#featured">
            Featured Posts
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/blog">
            All Posts
          </Link>
        </nav>
      </header>
  )
}

export default Navbar