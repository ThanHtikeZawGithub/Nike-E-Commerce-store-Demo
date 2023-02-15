import React from 'react';
import { Hero, Sales, FlexContent, Stories, Footer, Navbar, Cart } from './components';
import { heroapi, popularsales, topratesales, highlight, sneaker, story, footerAPI} from './data/data.js';
const App = () => {
  return (
    <>
    <main className='flex flex-col gap-20 relative'>
    <Navbar/>
    <Cart/>
    <Hero heroapi={heroapi}/>
    <Sales endpoint={popularsales} ifPopularsales={true} />
    <FlexContent endpoint={highlight} ifHighlight={true}/>
    <Sales endpoint={topratesales} />
    <FlexContent endpoint={sneaker}/>
    <Stories story={story}/>
    <Footer footerAPI={footerAPI}/>
    </main>
    </>
  )
}

export default App