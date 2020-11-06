/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Grid, Flex, Image, Heading, Button } from '@theme-ui/components'
import { useTranslation } from 'react-i18next'
import { useSubscription } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { useTransit } from '@blockmatic/eosio-hooks'

import logo from 'assets/logo.svg'
const SUBSCRIPTION = gql`
  subscription balances {
    accounts {
      account_name
      balances {
        amount
        currency
        decimals
      }
    }
  }
`
// TODO: move translation button to settings area
export default function DemoComponent() {
  const { connectScatter, transitState } = useTransit()
  const { data } = useSubscription(SUBSCRIPTION)
  const { t } = useTranslation(['demo'])
  const { i18n } = useTranslation()

  const handleChangeLang = () => {
    i18n.changeLanguage(t('lang') === 'English' ? 'en' : 'es')
  }

  const handleLogin = () => connectScatter()

  return (
    <div>
      <Grid bg="primary" p={2} gap={1} columns={[2, 2, 2]}>
        <Heading as="h3" color="background">
          {t('started')}
        </Heading>
        <Flex
          sx={{
            justifyContent: 'flex-end',
          }}
        >
          <Button onClick={handleChangeLang} variant="secondary">
            {t('lang')}
          </Button>
          <Button onClick={handleLogin} variant="secondary">
            login
          </Button>
        </Flex>
      </Grid>
      <Grid gap={2} columns={[2, 2, 2]} px={0} py={0}>
        <div
          sx={{
            display: 'flex',
            minHeight: 256,
            justifyItems: 'center',
            alignItems: 'center',
          }}
        >
          <Image src={logo} variant="quarter" />
        </div>
        <div
          sx={{
            display: 'flex',
            minHeight: 256,
            bg: 'muted',
            justifyItems: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Heading as="h1" color="primary">
            {t('telos')}
          </Heading>
        </div>
      </Grid>
      <Styled.pre>{JSON.stringify(data, null, 2)}</Styled.pre>
      <h2>Scatter Data</h2>
      <Styled.pre>{JSON.stringify(transitState, null, 2)}</Styled.pre>
    </div>
  )
}
