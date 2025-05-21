import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'

function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  return React.createElement('nav', {
    className: `fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 dark:bg-primary/90 backdrop-blur-lg shadow-lg' 
        : 'bg-transparent'
    }`
  },
    React.createElement('div', {
      className: 'container mx-auto px-4'
    },
      React.createElement('div', {
        className: 'flex justify-between items-center h-20'
      },
        React.createElement(motion.a, {
          href: '#home',
          className: 'text-2xl font-bold bg-gradient-to-r from-secondary to-secondary/70 bg-clip-text text-transparent',
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.95 }
        }, 'Portfolio'),

        // Desktop Navigation
        React.createElement('div', {
          className: 'hidden md:flex items-center space-x-8'
        },
          navItems.map((item) =>
            React.createElement(motion.a, {
              key: item.name,
              href: item.href,
              className: 'text-tertiary hover:text-secondary transition-colors relative group',
              whileHover: { y: -2 }
            },
              item.name,
              React.createElement('span', {
                className: 'absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full'
              })
            )
          ),
          React.createElement(motion.button, {
            onClick: () => setDarkMode(!darkMode),
            className: 'p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors',
            whileHover: { scale: 1.1 },
            whileTap: { scale: 0.9 }
          }, darkMode ? 
            React.createElement(FiSun, { className: 'text-secondary' }) : 
            React.createElement(FiMoon)
          )
        ),

        // Mobile Navigation Button
        React.createElement('div', {
          className: 'md:hidden flex items-center space-x-4'
        },
          React.createElement(motion.button, {
            onClick: () => setDarkMode(!darkMode),
            className: 'p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors',
            whileHover: { scale: 1.1 },
            whileTap: { scale: 0.9 }
          }, darkMode ? 
            React.createElement(FiSun, { className: 'text-secondary' }) : 
            React.createElement(FiMoon)
          ),
          React.createElement(motion.button, {
            onClick: () => setIsOpen(!isOpen),
            className: 'p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors',
            whileHover: { scale: 1.1 },
            whileTap: { scale: 0.9 }
          }, isOpen ? 
            React.createElement(FiX) : 
            React.createElement(FiMenu)
          )
        )
      ),

      // Mobile Navigation Menu
      React.createElement(AnimatePresence, null,
        isOpen && React.createElement(motion.div, {
          initial: { opacity: 0, height: 0 },
          animate: { opacity: 1, height: 'auto' },
          exit: { opacity: 0, height: 0 },
          transition: { duration: 0.3 },
          className: 'md:hidden overflow-hidden'
        },
          React.createElement('div', {
            className: 'px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-primary shadow-lg'
          },
            navItems.map((item) =>
              React.createElement(motion.a, {
                key: item.name,
                href: item.href,
                className: 'block px-3 py-2 text-tertiary hover:text-secondary transition-colors',
                onClick: () => setIsOpen(false),
                whileHover: { x: 10 }
              }, item.name)
            )
          )
        )
      )
    )
  )
}

export default Navbar 