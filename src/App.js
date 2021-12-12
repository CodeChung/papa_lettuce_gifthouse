import logo from './img/logo2.png';
import './App.css';
import backgroundVideo from './img/smokevid.mp4';
import cannaPhoneIcon from './img/icons/cannaphone.png';
import menuIcon from './img/icons/menu.png';
import newsIcon from './img/icons/newsbug.png';
import cartIcon from './img/icons/checkout.png';
import aboutIcon from './img/icons/about.png';

function App() {
  return (
    <div className="App">
      <video autoPlay loop muted id='video-background'>
        <source src={backgroundVideo} type='video/mp4' />
      </video>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        <div className="Menu-container">
          <div className="Menu-item">
            <div className='menu-title'><h4>Menu</h4></div>
            <div className='menu-subtitle'><h6>Check out our gifts & goodies</h6></div>
            <img className='menu-icon' src= {menuIcon} alt='you used to call me on my cell phone. now you must text' />
          </div>
          <div className="Menu-item" id="Menu-item-news">
            <div className='menu-title'><h4>News</h4></div>
            <div className='menu-subtitle'><h6>Extra, extra read all about it</h6></div>
            <img className='menu-icon' src= {newsIcon} alt='you used to call me on my cell phone. now you must text' />
          </div>
          <div className="Menu-item" id="Menu-item-about">
            <div className='menu-title'><h4>About</h4></div>
            <div className='menu-subtitle'><h6>Let me tell you about me, young blood</h6></div>
            <img className='menu-icon' src= {aboutIcon} alt='you used to call me on my cell phone. now you must text' />
          </div>
          <div className="Menu-item" id="Menu-item-contact">
            <div className='menu-title'><h4>Contact</h4></div>
            <div className='menu-subtitle'><h6>You used 2 call me on my cell phone</h6></div>
            <img className='menu-icon' src= {cannaPhoneIcon} alt='you used to call me on my cell phone. now you must text' />
          </div>
          <div className="Menu-item" id="Menu-item-cart">
            <div className='menu-title'><h4>Cart</h4></div>
            <div className='menu-subtitle'><h6>Check yorself b4 you wreck yoself</h6></div>
            <img className='menu-icon' src= {cartIcon} alt='you used to call me on my cell phone. now you must text' />
          </div>
        </div>
      </body>
      <footer>
        <div className="footer-container">
          Text/Call: (911) 911-9111 🤘
          <br />
          Follow Us For News/ & Updates @charlsseniordc
        </div>
      </footer>
    </div>
  );
}

export default App;
