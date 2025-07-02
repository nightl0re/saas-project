"use client"
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';


export const Header = () => {
const pathname = usePathname();
const pages = [
                    { href: '/', label: 'Home' },
                    { href: '/companions', label: 'Companions' },
                    { href: '/profile', label: 'My Journey' }
                ];
  return (
    <div className='navbar'>
        <Link href="/" >
        <Image
        src="/images/logo.svg"
        alt='Logo'
        width={48}
        height={46}
        />
        </Link>
        <ul className="flex items-center gap-4">
                {pages.map(page => (
                    <li key={page.href}>
                        <Link 
                        href={page.href}
                        className={cn(pathname === page.href && "text-primary font-semibold")}
                        >{page.label}</Link>
                    </li>
                ))}
        </ul>
        <div className='flex items-center'>
             <p className='ml-4'> <Link href="sign-in"> Sign-In</Link></p>
        </div>
    </div>
  )
}

