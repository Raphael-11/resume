import React from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiArrowDown } from 'react-icons/fi'

function Hero() {
  return React.createElement('section', {
    id: 'home',
    className: 'min-h-screen flex items-center relative overflow-hidden'
  },
    // Background gradient
    React.createElement('div', {
      className: 'absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-secondary/5 -z-10'
    }),
    
    // Animated circles
    React.createElement(motion.div, {
      className: 'absolute top-1/4 left-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl',
      animate: {
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3]
      },
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }),
    React.createElement(motion.div, {
      className: 'absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl',
      animate: {
        scale: [1.2, 1, 1.2],
        opacity: [0.5, 0.3, 0.5]
      },
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }),

    React.createElement('div', {
      className: 'max-w-4xl mx-auto px-4'
    },
      React.createElement(motion.div, {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
      },
        React.createElement('motion.p', {
          className: 'text-secondary mb-4 font-mono',
          initial: { opacity: 0, x: -20 },
          animate: { opacity: 1, x: 0 },
          transition: { delay: 0.2 }
        }, 'Hi, my name is'),
        React.createElement('motion.h1', {
          className: 'text-5xl sm:text-6xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-secondary/70',
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.3 }
        }, 'Raef Laffi.'),
        React.createElement('motion.h2', {
          className: 'text-4xl sm:text-5xl md:text-6xl font-bold text-tertiary mb-6',
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.4 }
        }, 'I build things for the web.'),
        React.createElement('motion.p', {
          className: 'text-tertiary max-w-2xl mb-8 text-lg',
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.5 }
        }, 'I\'m a software student passionate about building exceptional digital experiences. Currently, I\'m focused on building accessible, human-centered products.'),
        
        React.createElement('motion.div', {
          className: 'flex space-x-4',
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.6 }
        },
          React.createElement('a', {
            href: '#contact',
            className: 'px-8 py-4 bg-secondary text-primary font-semibold rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl'
          }, 'Get In Touch'),
          React.createElement('a', {
            href: '#projects',
            className: 'px-8 py-4 border-2 border-secondary text-secondary font-semibold rounded-full hover:bg-secondary/10 transition-all transform hover:scale-105'
          }, 'View My Work')
        ),

        React.createElement('motion.div', {
          className: 'flex space-x-6 mt-12',
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.7 }
        },
          React.createElement('a', {
            href: 'https://github.com/Raphael-11',
            target: '_blank',
            rel: 'noopener noreferrer',
            className: 'text-tertiary hover:text-secondary transition-all transform hover:scale-110'
          }, React.createElement(FiGithub, { size: 28 })),
          React.createElement('a', {
            href: 'https://www.linkedin.com/in/raef-laffi-36a935272/',
            target: '_blank',
            rel: 'noopener noreferrer',
            className: 'text-tertiary hover:text-secondary transition-all transform hover:scale-110'
          }, React.createElement(FiLinkedin, { size: 28 })),
          React.createElement('a', {
            href: 'https://twitter.com/yourusername',
            target: '_blank',
            rel: 'noopener noreferrer',
            className: 'text-tertiary hover:text-secondary transition-all transform hover:scale-110'
          }, React.createElement(FiTwitter, { size: 28 }))
        ),

        // Scroll indicator
        React.createElement(motion.div, {
          className: 'absolute bottom-8 left-1/2 transform -translate-x-1/2',
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 1 }
        },
          React.createElement(motion.div, {
            animate: { y: [0, 10, 0] },
            transition: { duration: 1.5, repeat: Infinity }
          },
            React.createElement(FiArrowDown, {
              className: 'text-tertiary',
              size: 24
            })
          )
        )
      )
    )
  )
}

export default Hero 