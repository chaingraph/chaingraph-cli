/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useBreakpointIndex } from '@theme-ui/match-media'
import { MenuButton, Close } from '@theme-ui/components'
import Navlinks from 'components/navigation/Navlinks'

const sideVariants = {
  open: { width: 280 },
  closed: { width: 40 },
}
const topVariants = {
  open: { height: '50vh' },
  closed: { height: 40 },
}

const linksVariants = {
  open: { display: 'flex' },
  closed: { display: 'none' },
}
const transition = {
  x: { type: 'spring', stiffness: 400 },
  opacity: { ease: 'easeIn' },
}

export default function Navbar() {
  const [isOpen, setOpen] = useState(false)
  const containerRef = useRef(null)
  const breakPointIndex = useBreakpointIndex()

  return (
    <motion.aside
      ref={containerRef}
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      transition={transition}
      variants={breakPointIndex !== 0 ? sideVariants : topVariants}
      sx={{
        flexGrow: 1,
        flexBasis: 'sidebar',
        bg: 'dark',
        minHeight: ['auto', '100vh'],
        minWidth: ['100vw', 'auto', 'auto', 'auto', 'auto'],
      }}
    >
      {!isOpen ? (
        <MenuButton
          onClick={() => setOpen(!isOpen)}
          sx={{
            float: 'right',
          }}
          aria-label="Toggle Menu"
        />
      ) : (
        <Close
          onClick={() => setOpen(!isOpen)}
          sx={{
            float: 'right',
          }}
          aria-label="Toggle Menu"
        />
      )}

      <motion.div
        variants={linksVariants}
        sx={{
          display: 'none',
        }}
      >
        <Navlinks />
      </motion.div>
    </motion.aside>
  )
}
