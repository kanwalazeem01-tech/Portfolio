'use client'

import { useEffect, useState } from 'react'

const ROLES = [
  'Frontend Developer',
  'Laravel Developer',
  'CMS Developer',
  'WordPress Expert',
  'Shopify Developer',
]

export default function TypedRole() {
  const [text, setText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = ROLES[roleIndex]
    const delay = deleting ? 60 : 90

    const timer = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1)
        setText(next)
        if (next === current) {
          setTimeout(() => setDeleting(true), 1800)
        }
      } else {
        const next = current.slice(0, text.length - 1)
        setText(next)
        if (next === '') {
          setDeleting(false)
          setRoleIndex((i) => (i + 1) % ROLES.length)
        }
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [text, roleIndex, deleting])

  return <strong className="role-typed">{text}</strong>
}
