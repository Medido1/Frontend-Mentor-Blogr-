import iconHamburger from '../assets/images/icon-hamburger.svg';
import iconClose from '../assets/images/icon-close.svg';
import logo from '../assets/images/logo.svg';
import '../styles/Header.css';
import iconDown from '../assets/images/icon-arrow-dark.svg';
import SubMenu from './SubMenu';
import LogIn from './LogIn';

export default function HeaderTop(
  {isMobile, isMenuOpen, setIsMenuOpen,
    menu, toggleMenu, productList, companyList, connectList
  }
) {
  function toggleMainMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <>
    {isMobile && 
      <div className="header_top">
        <img  src={logo} className='logo' alt='Blogr logo'/>
        <button className="menu_btn" onClick={toggleMainMenu} aria-label="toggle menu button">
          <img src={isMenuOpen ? iconClose : iconHamburger} 
          alt='icon hamburger' 
          className='icon hamburger'
        />
        </button>
      </div>
    }
    {!isMobile && 
      <div className="header_top">
        <div className="header_top_left">
          <img  src={logo} className='logo' alt='Blogr logo'/>
          <div className="nav_links">
            <ul>
              <li onMouseEnter={() => toggleMenu("productMenu")}
                  onMouseLeave={() => toggleMenu("productMenu")}
              >
                <div>
                  <p>Product</p>
                  <img src={iconDown} alt='arrow icon'
                    className={`icon arrow ${menu.productMenu ? 'flipped': ''}`}
                  />
                </div>
                {menu.productMenu && <SubMenu arr={productList}/>}
              </li>
              <li onMouseEnter={() => toggleMenu("companyMenu")}
                  onMouseLeave={() => toggleMenu("companyMenu")}
              >
                <div>
                  <p>Company</p>
                  <img src={iconDown}  alt='arrow icon'
                    className={`icon arrow ${menu.companyMenu ? 'flipped': ''}`}
                  />
                </div>
                {menu.companyMenu && <SubMenu arr={companyList}/>}
              </li>
              <li onMouseEnter={() => toggleMenu("connectMenu")}
                  onMouseLeave={() => toggleMenu("connectMenu")}
              >
                <div>
                  <p>Connect</p>
                  <img src={iconDown} alt='arrow icon'
                    className={`icon arrow ${menu.connectMenu ? 'flipped': ''}`}
                  />
                </div>
                {menu.connectMenu && <SubMenu arr={connectList}/>}
              </li>
            </ul>
          </div>
        </div>
        <div className="header_top_right">
          <LogIn />
        </div>
      </div>
    }
    </>
  )
}