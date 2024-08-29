import { useState, useEffect } from 'react';
import MobileMenu from './MobileMenu';
import HeaderTop from './HeaderTop';
import '../styles/Header.css';
import { products, company, connect } from '../data';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    };
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const [productList, setProductList] = useState(products);
  const [companyList, setCompanyList] = useState(company);
  const [connectList, setConnectList] = useState(connect);
  const [menu, setMenu] = useState({
    productMenu: false, 
    companyMenu: false,
    connectMenu: false
  })

  function toggleMenu(menu) {
    setMenu(prevMenu => ({...prevMenu, [menu]: !prevMenu[menu]}))
  }

  return (
    <header className="header">
      <HeaderTop
       isMobile={isMobile}
       isMenuOpen={isMenuOpen}
       setIsMenuOpen={setIsMenuOpen}
       productList = {productList}
       companyList = {companyList}
       connectList = {connectList}
       menu = {menu}
       toggleMenu = {toggleMenu}
       />
      {isMenuOpen && <MobileMenu 
        productList = {productList}
        companyList = {companyList}
        connectList = {connectList}
        menu = {menu}
        toggleMenu = {toggleMenu}
      />}
      <div className="header_main">
        <h1>A modern publishing platform</h1>
        <p>Grow your audience and build your online brand</p>
        <div className="header_btns">
          <button>Start for Free</button>
          <button>Learn More</button>
        </div>
      </div>
    </header>
  )
}