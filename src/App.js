import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  return React.createElement('div', { 
    className: `${darkMode ? 'dark' : ''}`
  },
    React.createElement('div', {
      className: 'bg-white dark:bg-primary min-h-screen text-gray-900 dark:text-light'
    },
      React.createElement(Navbar, { darkMode, setDarkMode }),
      React.createElement('main', {
        className: 'container mx-auto px-4 py-8'
      },
        React.createElement(motion.div, {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.5 }
        },
          React.createElement(Hero),
          React.createElement(About),
          React.createElement(Experience),
          React.createElement(Projects),
          React.createElement(Skills),
          React.createElement(Contact)
        )
      )
    )
  )
}

export default App 