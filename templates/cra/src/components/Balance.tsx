/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex, Text } from '@theme-ui/components'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import logo from 'assets/mini.svg'

type BalanceProps = {
  item: {
    currency: string
    amount: string
  }
}

export default function Balance({ item }: BalanceProps) {
  const { currency, amount } = item
  return (
    <Flex
      sx={{
        my: 3,
        justifyContent: 'space-around',
      }}
    >
      <div
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          bg: 'primary',
          width: 48,
          height: 48,
          borderRadius: 100,
        }}
      >
        <img
          sx={{
            display: 'block',
            border: 0,
          }}
          src={logo}
          alt="logo"
        />
      </div>

      <Flex
        sx={{
          flexDirection: 'column',
        }}
      >
        <Text
          sx={{
            color: 'text',
            fontFamily: 'body',
            fontSize: [0, 1, 2],
            textTransform: 'uppercase',
          }}
        >
          {currency}
        </Text>
        <Text
          sx={{
            color: 'text',
            fontFamily: 'numbers',
            fontSize: [0, 1, 2],
            fontWeight: 300,
          }}
        >
          {amount} {currency}
        </Text>
      </Flex>
      <Flex
        sx={{
          justifyItems: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          sx={{
            color: 'text',
            fontFamily: 'numbers',
            fontSize: [0, 1, 2],
            fontWeight: 300,
          }}
        >
          <Link
            sx={{
              color: 'text',
              textDecoration: 'none',
            }}
            to="/wallet/details"
          >
            {amount} <MdKeyboardArrowRight />
          </Link>
        </Text>
      </Flex>
    </Flex>
  )
}
