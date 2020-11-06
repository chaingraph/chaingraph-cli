/** @jsx jsx */
import { jsx } from 'theme-ui'
import { NavLink, Flex } from '@theme-ui/components'
import { Link } from 'react-router-dom'
import { MdHome, MdAccountBalanceWallet } from 'react-icons/md'
import { useTranslation } from 'react-i18next'

const Navlinks = () => {
  const { t } = useTranslation(['navbar'])
  return (
    <Flex
      as="nav"
      sx={{
        flexDirection: 'column',
        py: 4,
      }}
    >
      <NavLink as={Link} to="/" px={4}>
        <MdHome />
        {t('home')}
      </NavLink>

      <NavLink as={Link} to="/wallet" px={4}>
        <MdAccountBalanceWallet /> {t('wallet')}
      </NavLink>
    </Flex>
  )
}

export default Navlinks
