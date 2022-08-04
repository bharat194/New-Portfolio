import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/exp/Experience'
import Services from './components/services/Services'
import Footer from './components/footer/Footer'
import Portfolio from './components/portf/Portfolio'
const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Services/>
            <Portfolio/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default App
