import { Link } from '@tanstack/react-router'

import { useState } from 'react'
import {
  Menu,
  Mail,
  X,
} from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-6 py-4 flex items-center justify-between bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/STORECRAFT_EMBLEM_BLACK.svg"
            alt="Storecraft"
            className="h-8 md:h-10"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="mailto:douglas@storecraftconsulting.com"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
          >
            Contact Us
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden p-2 hover:bg-accent rounded-lg transition-colors"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </header>

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-card text-card-foreground shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <img
            src="/STORECRAFT_EMBLEM_BLACK.svg"
            alt="Storecraft"
            className="h-8"
          />
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-accent rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto">
          <a
            href="mailto:douglas@storecraftconsulting.com"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <Mail size={20} />
            <span className="font-medium">Contact Us</span>
          </a>
        </nav>
      </aside>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
