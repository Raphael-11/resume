import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return React.createElement('section', {
    id: 'about',
    className: 'py-20'
  },
    React.createElement('div', {
      className: 'container mx-auto px-4'
    },
      React.createElement(motion.div, {
        ref,
        initial: { opacity: 0, y: 20 },
        animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        transition: { duration: 0.5 }
      },
        React.createElement('h2', {
          className: 'text-3xl font-bold mb-8 text-center'
        }, 'About Me'),
        React.createElement('div', {
          className: 'max-w-3xl mx-auto'
        },
          React.createElement('p', {
            className: 'text-tertiary mb-6'
          }, 'I am a passionate software student with a strong foundation in web development. My journey in technology began with a curiosity about how things work on the internet, which led me to dive deep into programming and software development.'),
          React.createElement('p', {
            className: 'text-tertiary mb-6'
          }, 'Im passionate about building modern web applications using React and other cutting-edge technologies. My approach combines technical expertise with a keen eye for user experience, ensuring that the applications I build are not only functional but also intuitive and engaging.'),
          React.createElement('p', {
            className: 'text-tertiary'
          }, 'When I\'m not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical writing and mentoring.')
        )
      )
    )
  )
}

export default About 