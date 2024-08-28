import iconHamburger from '../assets/images/icon-hamburger.svg';

export default function Header() {
  return (
    <header className="header">
      <h1>Blogr</h1>
      <button className="menu_btn">
        <img src={iconHamburger} alt='icon hamburger'/>
      </button>
    </header>
  )
}