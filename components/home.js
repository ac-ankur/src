import React from 'react'
import About from './about'
import Services from './services'
import Work from './work'
import Footer from './footer'
import Money from './money'
import Remiheader from './header'


function Home() {
  return (
    <div>
        <Remiheader />
        <About />
        <Work  />
        <Services />
        <Money />
        <Footer />
    </div>
  )
}

export default Home