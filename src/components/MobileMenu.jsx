import iconDown from '../assets/images/icon-arrow-dark.svg';
import SubMenu from './SubMenu';
import LogIn from './LogIn';

export default function MobileMenu({productList, companyList, connectList , toggleMenu, menu}) {
  
  return (
    <div className="mobile_menu">
      <ul>
        <li onClick={() => toggleMenu("productMenu")}>
          <p>Product</p>
          <img src={iconDown} 
          className={`icon arrow ${menu.productMenu ? 'flipped': ''}`}
          />
        </li>
        {menu.productMenu && <SubMenu arr={productList}/>}
        <li onClick={() => toggleMenu("companyMenu")}>
          <p>Company</p>
          <img src={iconDown} 
          className={`icon arrow ${menu.companyMenu ? 'flipped': ''}`}
          />
        </li>
        {menu.companyMenu && <SubMenu arr={companyList}/>}
        <li onClick={() => toggleMenu("connectMenu")}>
          <p>Connect</p>
          <img src={iconDown} 
          className={`icon arrow ${menu.connectMenu ? 'flipped': ''}`}
          />
        </li>
        {menu.connectMenu && <SubMenu arr={connectList}/>}
      </ul>
      <LogIn />
    </div>
  )
}