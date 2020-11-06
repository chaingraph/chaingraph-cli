/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex, Container, Box, Text, Button } from '@theme-ui/components'
import { MdArrowUpward } from 'react-icons/md'
import Balance from 'components/Balance'
import { useSubscription } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const BALANCE = gql`
  subscription balances {
    balances(where: { account_name: { _eq: "gaboesquivel" } }) {
      account_name
      amount
      currency
      decimals
    }
  }
`

export default function Wallet() {
  const { data } = useSubscription(BALANCE)

  return (
    <Container variant="container.linearBG" py={5}>
      <Flex
        sx={{
          flexGrow: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Flex
          sx={{
            flexGrow: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            width: ['20em', '30em', '45em'],
            margin: '0 auto',
          }}
        >
          <Box>
            <Text
              sx={{
                fontSize: [3, 5, 6, 7],
                fontWeight: 'normal',
                color: 'background',
                fontFamily: 'numbers',
                textAlign: 'center',
              }}
            >
              {/* {TODO change this for data from oracles */} ${' '}
              {((data?.balances[0].amount + data?.balances[1].amount) * 0.04078936).toFixed(4)}
            </Text>
            <Text
              sx={{
                fontSize: ['6px', 0],
                fontWeight: 'body',
                color: 'background',
                fontFamily: 'subheads',
                textTransform: 'uppercase',
                textAlign: 'center',
              }}
            >
              Total Balance
            </Text>
          </Box>
          <Box
            sx={{
              marginLeft: '30%',
            }}
          >
            <Button
              sx={{
                float: 'right',
              }}
              variant="secondary"
            >
              <MdArrowUpward /> Transfer
            </Button>
          </Box>
        </Flex>
        <div
          sx={{
            my: 3,
            backgroundColor: 'background',
            borderRadius: '10px  10px 0 0',
            minWidth: ['20em', '20em', '30em', '30em', '46em'],
          }}
        >
          {data?.balances.map((item: any) => (
            <Balance item={item} key={`key_${item.currency}_${item.amount}`} />
          ))}
        </div>
      </Flex>
    </Container>
  )
}
