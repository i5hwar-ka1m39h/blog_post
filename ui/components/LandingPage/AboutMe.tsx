import { Github, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const AboutMe = () => {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">About Me</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img 
                src="/placeholder.svg?height=300&width=300" 
                alt="John Doe" 
                className="rounded-full w-48 h-48 object-cover"
              />
              <div className="max-w-2xl">
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  Hi, I'm John Doe, a software developer and avid traveler. Through this blog, I share my experiences in tech, my adventures around the world, and my journey of personal growth. Join me as we explore the intersections of technology, travel, and life.
                </p>
                <div className="flex space-x-4">
                  <Link href="https://twitter.com" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                    <Twitter className="h-6 w-6" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link href="https://github.com" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                    <Github className="h-6 w-6" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default AboutMe