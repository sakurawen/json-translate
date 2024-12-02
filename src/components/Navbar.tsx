"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import LanguageSwitcher from '@/components/LanguageSwitcher'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
      scrolled ? 'bg-white/80 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo + 网站名称 */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-12 h-7">
              <Image
                src={scrolled ? "/logo-blue.png" : "/logo-white.png"}
                alt="JSON Translater Logo"
                width={512}
                height={316}
                className="object-contain"
                priority
              />
            </div>
            <span className={`font-semibold text-lg hidden sm:block ${
              scrolled ? 'text-gray-800' : 'text-white'
            }`}>
              JSON Translater
            </span>
          </Link>

          <div className="flex items-center gap-6">
            {mounted && <LanguageSwitcher />}
            
            {/* Twitter/X 链接 */}
            <a
              href="https://x.com/wenhouman"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${
                scrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-white/80'
              }`}
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* GitHub 链接 */}
            <a
              href="https://github.com/sakurawen/json-translate"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${
                scrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-white/80'
              }`}
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
} 
