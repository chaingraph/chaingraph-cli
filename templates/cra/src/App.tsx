/** @jsx jsx */
import { jsx } from 'theme-ui'
import AppProvider from './AppProvider'
import { Switch, Route } from 'react-router-dom'
import Layout from 'components/Layout'
import Home from 'views/Home'
import Wallet from 'views/Wallet'

const App: React.FC = () => {
  return (
    <AppProvider>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/wallet" component={Wallet} />
        </Switch>
      </Layout>
    </AppProvider>
  )
}

export default App
