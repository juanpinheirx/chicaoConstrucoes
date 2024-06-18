import './Main.css';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import maquina from '../../assets/maquina.jpg';
import builder from '../../assets/builder.jpg';

export const Main = () => {
  return (
    <div className='carousel'>
      <Carousel>
        <Carousel.Item>
          <img src={maquina} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={builder} />
        </Carousel.Item>
      </Carousel>
      <p>Bem vindo(a) a loja online Chicão Materiais.</p>
    </div>
  );
};
