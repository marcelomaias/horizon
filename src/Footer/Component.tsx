import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import type { Footer } from '@/payload-types'
import { CMSLink } from '@/components/Link'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()
  const navItems = footerData?.navItems || []

  return (
    <footer className="bg-h-surface text-h-text border-t border-h-border pt-15 pb-9 mt-auto">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-[4fr_1fr_1fr] gap-9 md:gap-12 mb-12">
          {/* Brand col */}
          <div>
            <Link
              className="font-serif text-[1.15rem] text-h-text no-underline mb-3 inline-block"
              href="#home"
            >
              Horizon
            </Link>

            <p className="text-sm text-h-text-2 font-light leading-[1.65] max-w-65">
              A modern content platform for marketing teams who want speed, flexibility, and full
              control over their website.
            </p>
          </div>

          {/* Product col */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-h-text-muted mb-3.5">
              Product
            </p>

            <ul className="list-none flex flex-col gap-2">
              <li>
                <Link
                  className="text-sm text-h-text-2 no-underline transition-colors duration-150 hover:text-h-text dark:text-h-text-2 dark:hover:text-h-text"
                  href="#featuresGrid"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-h-text-2 no-underline transition-colors duration-150 hover:text-h-text dark:text-h-text-2 dark:hover:text-h-text"
                  href="#performance"
                >
                  Performance
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-h-text-2 no-underline transition-colors duration-150 hover:text-h-text dark:text-h-text-2 dark:hover:text-h-text"
                  href="/admin"
                >
                  Try it!
                </Link>
              </li>
            </ul>
          </div>

          {/* Company col */}
          {/* <div>
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-h-text-muted mb-3.5">
              Company
            </p>

            <ul className="list-none flex flex-col gap-2">
              <li>
                <Link
                  className="text-sm text-h-text-2 no-underline transition-colors duration-150 hover:text-h-text dark:text-h-text-2 dark:hover:text-h-text"
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-h-text-2 no-underline transition-colors duration-150 hover:text-h-text dark:text-h-text-2 dark:hover:text-h-text"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Developer col — driven by Payload Footer global */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-h-text-muted mb-3.5">
              Developer
            </p>

            <ul className="list-none flex flex-col gap-2">
              {navItems.map(({ link }, i) => (
                <li key={i}>
                  <CMSLink
                    {...link}
                    className="text-sm text-h-text-2 no-underline transition-colors duration-150 hover:text-h-text dark:text-h-text-2 dark:hover:text-h-text"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-center pt-7 border-t border-h-border/20 dark:border-h-border text-[0.78rem] text-h-text-2 dark:text-h-text-muted">
          <p>© {new Date().getFullYear()} Horizon · Built with Next.js + Payload CMS</p>
        </div>
      </div>
    </footer>
  )
}
