import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'

function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return React.createElement('section', {
    id: 'contact',
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
        }, 'Get In Touch'),
        React.createElement('div', {
          className: 'max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12'
        },
          React.createElement('div', null,
            React.createElement('p', {
              className: 'text-tertiary mb-6'
            }, 'I\'m currently looking for new opportunities. Whether you have a question or just want to say hi, I\'ll try my best to get back to you!'),
            React.createElement('div', {
              className: 'flex space-x-6 mb-8'
            },
              React.createElement('a', {
                href: 'https://github.com/Raphael-11',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'text-tertiary hover:text-secondary transition-colors'
              }, React.createElement(FiGithub, { size: 24 })),
              React.createElement('a', {
                href: 'https://www.linkedin.com/in/raef-laffi-36a935272/',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'text-tertiary hover:text-secondary transition-colors'
              }, React.createElement(FiLinkedin, { size: 24 })),
              React.createElement('a', {
                href: 'https://twitter.com/Raphael_11_',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'text-tertiary hover:text-secondary transition-colors'
              }, React.createElement(FiTwitter, { size: 24 })),
              React.createElement('a', {
                href: 'mailto:raef.laffi@medtech.tn',
                className: 'text-tertiary hover:text-secondary transition-colors'
              }, React.createElement(FiMail, { size: 24 }))
            )
          ),
          React.createElement('form', {
            onSubmit: handleSubmit,
            className: 'space-y-6'
          },
            React.createElement('div', null,
              React.createElement('label', {
                htmlFor: 'name',
                className: 'block text-tertiary mb-2'
              }, 'Name'),
              React.createElement('input', {
                type: 'text',
                id: 'name',
                name: 'name',
                value: formData.name,
                onChange: handleChange,
                required: true,
                className: 'w-full px-4 py-2 bg-primary border border-secondary/20 rounded-md focus:outline-none focus:border-secondary'
              })
            ),
            React.createElement('div', null,
              React.createElement('label', {
                htmlFor: 'email',
                className: 'block text-tertiary mb-2'
              }, 'Email'),
              React.createElement('input', {
                type: 'email',
                id: 'email',
                name: 'email',
                value: formData.email,
                onChange: handleChange,
                required: true,
                className: 'w-full px-4 py-2 bg-primary border border-secondary/20 rounded-md focus:outline-none focus:border-secondary'
              })
            ),
            React.createElement('div', null,
              React.createElement('label', {
                htmlFor: 'message',
                className: 'block text-tertiary mb-2'
              }, 'Message'),
              React.createElement('textarea', {
                id: 'message',
                name: 'message',
                value: formData.message,
                onChange: handleChange,
                required: true,
                rows: 5,
                className: 'w-full px-4 py-2 bg-primary border border-secondary/20 rounded-md focus:outline-none focus:border-secondary'
              })
            ),
            React.createElement('button', {
              type: 'submit',
              className: 'px-6 py-3 bg-secondary text-primary font-semibold rounded-md hover:bg-opacity-80 transition-colors'
            }, 'Send Message')
          )
        )
      )
    )
  )
}

export default Contact 