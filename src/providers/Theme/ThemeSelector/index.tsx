'use client'

import { Monitor, Moon, Sun } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'

import { useTheme } from '..'
import { themeLocalStorageKey } from '../shared'
import type { Theme } from '../types'

type Option = {
  icon: React.ReactNode
  label: string
  value: Theme | 'auto'
}

const options: Option[] = [
  { icon: <Sun size={14} />, label: 'Light', value: 'light' },
  { icon: <Moon size={14} />, label: 'Dark', value: 'dark' },
  { icon: <Monitor size={14} />, label: 'System', value: 'auto' },
]

const triggerIcons: Record<Theme | 'auto', React.ReactNode> = {
  light: <Sun />,
  dark: <Moon />,
  auto: <Monitor />,
}

export const ThemeSelector: React.FC = () => {
  const { setTheme } = useTheme()
  const [selected, setSelected] = useState<Theme | 'auto'>('auto')
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Sync with stored preference on mount
  useEffect(() => {
    const stored = window.localStorage.getItem(themeLocalStorageKey)
    if (stored === 'light' || stored === 'dark') {
      setSelected(stored)
    } else {
      setSelected('auto')
    }
  }, [])

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleSelect = (value: Theme | 'auto') => {
    setSelected(value)
    setOpen(false)
    setTheme(value === 'auto' ? null : value)
  }

  return (
    <div className="theme-selector" ref={ref}>
      <button
        aria-label="Select theme"
        className="theme-selector__trigger"
        onClick={() => setOpen((o) => !o)}
      >
        {triggerIcons[selected]}
      </button>

      {open && (
        <div className="theme-selector__dropdown">
          {options.map((opt) => (
            <button
              className={`theme-selector__option${selected === opt.value ? ' active' : ''}`}
              key={opt.value}
              onClick={() => handleSelect(opt.value)}
            >
              {opt.icon}
              <span>{opt.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
