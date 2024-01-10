import "./Banner.css";
import Imagem from '../../assets/banner.png'

function Banner() {
  // JSX
  return (
    <header className="banner">
      <img
        src={Imagem}
        alt="banner principal da pagina organo"
      />
    </header>
  );
}

export default Banner;
