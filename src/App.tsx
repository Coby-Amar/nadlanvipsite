import { propertiesService } from '@services/properties.service'
import Main from './main/Main'

import { Banner, Footer, Navigation } from '@components'

function App() {
  propertiesService.loadProperties()
  return (
    <>
      <Navigation />
      <Banner />
      <Main />
      <Footer />
    </>
  )
}

export default App
