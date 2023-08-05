'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutUs.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MyCard } from '../../elems/MyCard/MyCard';
import { useMediaQuery } from 'react-responsive';

export const AboutUs = () => {

  const isSmScreen = useMediaQuery({ maxWidth: 767, minWidth: 576 });

  return (
    <section className="about ">
      <div className='container-xxl'>
        <Row>
          <Col xs={12} md={8} lg={6} className="leftContainer">
            <h2 className="about__title section__title">О нас</h2>
            <div className="mb-5 d-sm-flex d-md-block">
              <p className="about__text">«Инсула Медиа» — информационное агентство в области тепловой энергетики.</p>
              <div className="about__list">
                <p className="about__text">Мы делаем профессиональные обзоры для:</p>
                <ul>
                  <li>— Генерирующих компаний</li>
                  <li>— Энергомашиностроительных концернов</li>
                  <li>— Компаний энергоинжиниринга</li>
                  <li>— Сервисного и мелкосерийного производства</li>
                  <li>— Маркетинговых агентств</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4} lg={6} className="pt-5 about__cards">
            <ul className="cardsList">
              <li><MyCard number={'10'} text={'Лет на рынке'}/></li>
              <li><MyCard number={'200'} text={'Компаний отрасли на мониторинге'}/></li>
              <li><MyCard number={'> 370'} text={'Еженедельных обзоров издано'}/></li>
              <li><MyCard number={'48'} text={'Обзоров в год'}/></li>
            </ul>
          </Col>
        </Row>
      </div>
    </section>
  )
}