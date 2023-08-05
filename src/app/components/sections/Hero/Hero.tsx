'use client'
import Image from "next/image"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Hero.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Img from '../../../../../public/hero/island.jpg'


const Hero = () => {
  return (
    <section className="hero container-fluid">
      <Container>
        <Row>
          <Col xs={12} sm={8} md={8} lg={6} xl={7} xxl={7} className="hero">
              <h1 className="hero__title">
                  Ведёте бизнес в области энергетики? Мы поможем сэкономить время, деньги и ресурсы!
              </h1>
              <Image 
                quality={100} 
                className="hero__img hero__img_mob" 
                src={Img} 
                alt='Обложка журнала "Силовой Остров"' 
                width={176} 
                height={250}
                priority
              />
              <p className="hero__description">
                «Силовой остров» — еженедельный инфориационный обзор по отраслям теплоэнергетики и энергомашиностроения.
              </p>
              <div className="hero__btnWrapper">
                  <Button variant="danger" className="usualBtn hero__btn_read">Читать бесплатно</Button>{' '}
                  <Button variant="light" className="usualBtn hero__btn_more"> Подробнее</Button>{' '}
              </div>
          </Col>
          <Col sm={4} md={4} lg={6} xl={5} xxl={5}>
          <Image 
                quality={100} 
                className="hero__img hero__img_big" 
                src={Img} 
                alt='Обложка журнала "Силовой Остров"' 
                width={176} 
                height={250}
                priority
              />
          </Col>
        </Row>
      </Container>
    </section>
    );
  }
  
  export default Hero;