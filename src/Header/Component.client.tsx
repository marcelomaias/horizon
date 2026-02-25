'use client'

import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { ThemeSelector } from '@/providers/Theme/ThemeSelector'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()
  const navItems = data?.navItems || []

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    <header className="site-header">
      {/* Logo */}
      <Link className="site-header__logo" href="/">
        Horizon
      </Link>

      {/* Nav links — managed via Payload Header global */}
      {navItems.length > 0 && (
        <nav className="flex items-center gap-7" aria-label="Main navigation">
          {navItems.map(({ link }, i) => (
            <CMSLink key={i} className="site-header__nav-link" {...link} appearance="link" />
          ))}
        </nav>
      )}

      {/* Right rail */}
      <div className="flex items-center gap-3">
        <ThemeSelector />
        {/* <div className="hidden md:flex items-center gap-3">
          <Link className="btn-ghost" href="/demo">
            Demo
          </Link>
          <Link className="btn-primary" href="/contact">
            Get started
          </Link>
        </div> */}
      </div>
    </header>
  )
}
