import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const Intro = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to My Personal Blog
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Exploring technology, travel, and personal growth through my experiences and insights.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="/allpost">Read My Blog</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Intro