import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const experiences = [
    {
      title: 'Freelance',
      company: 'Fiverr',
      period: '2020 - Present',
      description: 'Creating Discord servers. Optimized project efficiency by creating and implementing effective task management strategies. Strengthened client relationships with consistent communication and timely project updates.'
    },
    {
      title: 'Internship',
      company: 'Arkan',
      period: '2018 - 2020',
      description: 'Worked on a mobile application for vendors to input thier products and manage and track thier sales'
    },
    {
      title: 'Junior Developer',
      company: 'Fivem Server',
      period: '2025 - Present',
      description: 'Fivem server building with testing and debug scripts, changing configuration.'
    }
  ]

  return React.createElement('section', {
    id: 'experience',
    className: 'py-20 bg-secondary/5'
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
          className: 'text-3xl font-bold mb-12 text-center'
        }, 'Experience'),
        React.createElement('div', {
          className: 'max-w-3xl mx-auto space-y-8'
        },
          experiences.map((exp, index) => 
            React.createElement(motion.div, {
              key: index,
              initial: { opacity: 0, x: -20 },
              animate: inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 },
              transition: { duration: 0.5, delay: index * 0.1 },
              className: 'bg-primary p-6 rounded-lg shadow-lg'
            },
              React.createElement('h3', {
                className: 'text-xl font-bold mb-2'
              }, exp.title),
              React.createElement('p', {
                className: 'text-secondary mb-2'
              }, exp.company),
              React.createElement('p', {
                className: 'text-tertiary mb-4'
              }, exp.period),
              React.createElement('p', {
                className: 'text-tertiary'
              }, exp.description)
            )
          )
        )
      )
    )
  )
}

export default Experience 