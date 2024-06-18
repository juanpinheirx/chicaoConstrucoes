import './Footer.css';
import whatsapp from '../../assets/wpp.svg';
import map from '../../assets/map.svg';
import fb from '../../assets/fb.svg'
import insta from '../../assets/insta.svg'
export const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='social-media'>
          <img src={whatsapp} />
          <img src={fb} />
          <img src={insta} alt="" />
        </div>
        <p>© 2021 My React App</p>
        <div className="map">
          <img src={map} />
        </div>
      </div>
    </>
  );
};
