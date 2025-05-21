import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const projects = [
    {
      title: 'Sun tracking solar pannel for renewable energy',
      description: 'A solar panel that tracks the sun and adjusts its position to maximize energy production.',
      technologies: ['Rasberrypie', 'Python'],
      
    },
    {
      title: 'Movie recommendations software',
      description: 'A software that recommends movies to users based on their preferences.',
      technologies: ['C language'],
    },
    {
      title: 'VroomView',
      description: 'VroomView is a web application that allows users to view and manage car conditions.',
      technologies: ['vuetify', 'HTML', 'css' , 'JavaScript'],
    },
    {
      title: 'Banking management system project',
      description: 'A banking management system project that allows users to view and manage their bank accounts.',
      technologies: ['java', 'MySQL' , 'SceneBuilder'],
    },
    {
      title: 'Fiesta',
      description: 'Mobile application for explorering parties and events with booking tickets Organisers side with creating, managing and tracking events. Admin dashboard for tracking activities ',
      technologies: ['React native', 'MongoDB', 'Nodejs', 'Express'],
    },
    {
      title: 'Alone',
      description: '2D game development using Unity',
      technologies: ['C language', 'SDL2'],
  
    }
  ]

  return React.createElement('section', {
    id: 'projects',
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
          className: 'text-3xl font-bold mb-12 text-center'
        }, 'Projects'),
        React.createElement('div', {
          className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        },
          projects.map((project, index) => 
            React.createElement(motion.div, {
              key: index,
              initial: { opacity: 0, y: 20 },
              animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
              transition: { duration: 0.5, delay: index * 0.1 },
              className: 'bg-primary rounded-lg overflow-hidden shadow-lg'
            },
              React.createElement('div', {
                className: 'p-6'
              },
                React.createElement('h3', {
                  className: 'text-xl font-bold mb-2'
                }, project.title),
                React.createElement('p', {
                  className: 'text-tertiary mb-4'
                }, project.description),
                React.createElement('div', {
                  className: 'flex flex-wrap gap-2 mb-4'
                },
                  project.technologies.map((tech, techIndex) => 
                    React.createElement('span', {
                      key: techIndex,
                      className: 'px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm'
                    }, tech)
                  )
                ),
                React.createElement('div', {
                  className: 'flex space-x-4'
                },
                  React.createElement('a', {
                    href: project.github,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    className: 'text-tertiary hover:text-secondary transition-colors'
                  }, React.createElement(FiGithub, { size: 20 })),
                  React.createElement('a', {
                    href: project.live,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    className: 'text-tertiary hover:text-secondary transition-colors'
                  }, React.createElement(FiExternalLink, { size: 20 }))
                )
              )
            )
          )
        )
      )
    )
  )
}

export default Projects 