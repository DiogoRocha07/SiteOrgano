import "./Rodape.css";
import logo from '../../assets/logo.png'
import fb from '../../assets/fb.png'
import ig from '../../assets/ig.png'
import tw from '../../assets/tw.png'


const Rodape = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href="facebook.com" target="_blank">
              <img src={fb} alt="" />
            </a>
          </li>
          <li>
            <a href="twitter.com" target="_blank">
              <img src={tw} alt="" />
            </a>
          </li>
          <li>
            <a href="instagram.com" target="_blank">
              <img src={ig} alt="" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src={logo} alt="" />
      </section>
      <section>
        <p>Estudo Diogo - Alura.</p>
      </section>
    </footer>
  );
};

export default Rodape;
