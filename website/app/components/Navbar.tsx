'use client';

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link';

const Navbar = () => {
    const path = usePathname()
  return (
    <div>
        <nav className=" border-gray-200 bg-gray-900 font-mono">
            <div className="max-w-screen-xl flex flex-col items-center justify-center mx-auto p-2">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse px-5">
                    <h1 className="text-4xl">ctrl-φ</h1>
                </a>
                <div className="w-full flex items-center justify-center py-2" id="navbar-default">
                    <ul className="font-medium flex flex-row justify-center">
                        <li>
                            <Link href="/" className={`md:text-xl sm:text-md ${path == "/" ? "text-blue-500" : "text-white"} px-2`} aria-current="page">Install</Link>
                        </li>
                        <li>
                            <Link href="/playground" className={`md:text-xl sm:text-md ${path == "/playground" ? "text-blue-500" : "text-white"} px-2`}>Playground</Link>
                        </li>
                        <li>
                            <Link href="/about" className={`md:text-xl sm:text-md ${path == "/about" ? "text-blue-500" : "text-white"} px-2`}>About</Link>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
    </div>
  )
}

export default Navbar