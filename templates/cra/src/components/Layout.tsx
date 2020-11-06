/** @jsx jsx */
import { jsx } from 'theme-ui'
import Navbar from 'components/navigation/Navbar'

const Layout: React.FC = ({ children }) => {
  return (
    <div
      sx={{
        display: 'flex',
        flexWrap: ['wrap', 'nowrap', 'nowrap', 'nowrap', 'nowrap'],
        flexDirection: ['column', 'row', 'row', 'row', 'row'],
      }}
    >
      <Navbar />
      <main
        sx={{
          flexGrow: 99999,
          flexBasis: 0,
          minWidth: 320,
        }}
      >
        {children}
      </main>
    </div>
  )
}

export default Layout
