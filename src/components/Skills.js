import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const skills = {
    'Frontend': ['React', 'JReact native', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    'Backend': ['Node.js', 'Express', 'REST APIs'],
    'Database': ['MongoDB', 'MySQL'],
    'Tools': ['Git', 'Docker']
  }

  return React.createElement('section', {
    id: 'skills',
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
        }, 'Skills'),
        React.createElement('div', {
          className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'
        },
          Object.entries(skills).map(([category, items], index) => 
            React.createElement(motion.div, {
              key: category,
              initial: { opacity: 0, y: 20 },
              animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
              transition: { duration: 0.5, delay: index * 0.1 },
              className: 'bg-primary p-6 rounded-lg shadow-lg'
            },
              React.createElement('h3', {
                className: 'text-xl font-bold mb-4 text-secondary'
              }, category),
              React.createElement('ul', {
                className: 'space-y-2'
              },
                items.map((skill, skillIndex) => 
                  React.createElement('li', {
                    key: skillIndex,
                    className: 'text-tertiary flex items-center'
                  },
                    React.createElement('span', {
                      className: 'w-2 h-2 bg-secondary rounded-full mr-2'
                    }),
                    skill
                  )
                )
              )
            )
          )
        )
      )
    )
  )
}

export default Skills 