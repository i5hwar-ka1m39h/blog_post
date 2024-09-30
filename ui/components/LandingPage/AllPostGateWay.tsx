import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const AllPostGateWay = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Explore All My Posts</h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Dive deeper into my thoughts, experiences, and insights across various topics.
                </p>
              </div>
              <Button asChild size="lg">
                <Link href="/blog">View All Blog Posts</Link>
              </Button>
            </div>
          </div>
        </section>
  )
}

export default AllPostGateWay