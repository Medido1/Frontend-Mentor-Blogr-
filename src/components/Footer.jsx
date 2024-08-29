import logo from '../assets/images/logo.svg';
import '../styles/Footer.css';
import { products, company, connect } from '../data';

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt='logo' className='logo'/>
      <p className='footer_heading'>Product</p>
      <ul className='footer_links'>
        {products.map(item =>
          <li key={item.id}>{item.name}</li>
        )}
      </ul>
      <p className="footer_heading">Company</p>
      <ul className='footer_links'>
        {company.map(item =>
          <li key={item.id}>{item.name}</li>
        )}
      </ul>
      <p className="footer_heading">Connect</p>
      <ul className='footer_links'>
        {connect.map(item =>
          <li key={item.id}>{item.name}</li>
        )}
      </ul>
    </footer>
  )
}