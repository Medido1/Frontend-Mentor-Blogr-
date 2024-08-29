import '../styles/main.css';
import illustMobile from '../assets/images/illustration-editor-mobile.svg';
import illusPhone from '../assets/images/illustration-phones.svg';
import laptopMobile from '../assets/images/illustration-laptop-mobile.svg';

export default function Main() {
  return (
    <main className="main">
      <div className="future_section">
        <h3>Designed for the future</h3>
        <img src={illustMobile} alt="illustration mobile"/>
      </div>
      <div className='editor_section'>
        <h3>Introducing an extensible editor</h3>
        <p>
          Blogr features an exceedingly intuitive interface which lets you focus on one thing: 
          creating content.The editor supports management of multiple blogs and allows easy 
          manipulation of embeds such as images,videos, and Markdown. Extensibility with plugins
          and themes provide easy ways to add functionality or change the looks of a blog.
        </p>
      </div>
      <div className="management_section">
        <h3>Robust content management</h3>
        <p>
          Flexible content management enables users to easily move through posts. Increase 
          the usability of your blog by adding customized categories, sections, format, or 
          flow. With this functionality, you’re in full control.
        </p>
      </div>
      <div className="container">
        <img src={illusPhone} alt='illustration phones' className='illus_phone'/>
        <h3>State of the Art Infrastructure</h3>
        <p>
          With reliability and speed in mind, worldwide data centers provide the backbone 
          for ultra-fast connectivity.This ensures your site will load instantly, no matter
          where your readers are, keeping your site competitive.
        </p>
      </div>
      <div className="free_section">
        <img src={laptopMobile} alt='illustration laptop'/>
        <h3>Free, open, simple</h3>
        <p>
          Blogr is a free and open source application backed by a large community of helpful 
          developers. It supports features such as code syntax highlighting, RSS feeds,
          social media integration, third-party commenting tools,and works seamlessly
          with Google Analytics. The architecture is clean and is relatively easy to learn.
        </p>
      </div>
      <div className="tooling_section">
        <h3>Powerful tooling</h3>
        <p>
          Batteries included. We built a simple and straightforward CLI tool that makes 
          customization and deployment a breeze, butcapable of producing even the most complicated sites
        </p>
      </div>
    </main>
  )
}