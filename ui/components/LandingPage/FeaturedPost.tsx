import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const FeaturedPost = () => {
  return (
    <section  className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Featured Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((post) => (
                <div key={post} className="flex flex-col items-start">
                  <img
                    src={`/feature${post}.jpg`}
                    alt={`Featured post ${post}`}
                    className="rounded-lg object-cover w-full h-48 mb-4"
                    height={200}
                    width={400}
                  />
                  <h3 className="text-xl font-bold mb-2">Featured Blog Post {post}</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    A brief preview of the blog post content. Click to read more about this interesting topic.
                  </p>
                  <Button variant="outline" asChild>
                    <Link href={`/blog/post-${post}`}>Read More</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
  )
}

export default FeaturedPost