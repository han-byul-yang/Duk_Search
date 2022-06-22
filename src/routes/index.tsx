import Chart from 'routes/Chart'
import NavBar from 'components/GNB'
import { Route, Routes } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

import Main from 'routes/Main'
import Search from 'routes/Search'

import styles from './routes.module.scss'

const App = () => {
  return (
    <div className={styles.page}>
      <RecoilRoot>
        <NavBar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='search/*' element={<Search />} />
          <Route path='chart' element={<Chart />} />
          <Route path='*' element={<div>404</div>} />
        </Routes>
      </RecoilRoot>
    </div>
  )
}

export default App
