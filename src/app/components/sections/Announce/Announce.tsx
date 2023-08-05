'use client'
import { Col, Container, Row } from "react-bootstrap"
import { AnnounceDrop } from "../../elems/AnnounceDrop/AnnounceDrop"
import './Announce.css'

export const Announce = () => {
  return (
    <section className="announce">
      <Container>
        <Row className="announceTitle__wrapper">
          <h2 className="announce__title">В свежем номере</h2>
        </Row>
        <Row className="d-flex">
          <Col className="announceDrop__wrapper px-lg-0" xs={12} lg={6} >
            <AnnounceDrop />
          </Col>
          <Col xs={12} lg={6} className="d-sm-none d-lg-block px-lg-0 getJournal__wrapper">
              <div className="getJournal">
                <h3 className="getJournal__title">Получите свежий номер бесплатно</h3>
                <form className="getJournal__form" action="">
                  <div className="getJournal__wrapperInput">
                    <input className="getJournal__input getJournal__input_name" type="text" name="name" placeholder="Имя"/>
                    <input className="getJournal__input getJournal__input_email" type="email" name="email" placeholder="Электронная почта"/>
                  </div>
                  <label htmlFor="agreement">
                    <input className="getJournal__input getJournal__input_email" type="checkbox" name="agreement" id="agreement"/>
                    <span className="checkmark"></span>
                    <span className="textForAgreement">Даю согласие на обработку персональных данных</span>
                  </label>
                  <input type="submit" className="getJournal__submit" value={"Ознакомиться бесплатно"}/>
                </form>
              </div>
            </Col>
        </Row>
      </Container>
      <div className="getJournal getJournal_sm d-none d-sm-block d-lg-none">
        <div className="container">
          <h3 className="getJournal__title">Получите свежий номер бесплатно</h3>
          <form className="getJournal__form getJournal__form_sm" action="">
            <div className="getJournal__wrapperInput">
              <input className="getJournal__input getJournal__input_name" type="text" name="name" placeholder="Имя"/>
              <input className="getJournal__input getJournal__input_email" type="email" name="email" placeholder="Электронная почта"/>
            </div>
            <label htmlFor="agreement">
              <input className="getJournal__input getJournal__input_checkbox" type="checkbox" name="agreement" id="agreement"/>
              <span className="checkmark"></span>
              <span className="textForAgreement">Даю согласие на обработку персональных данных</span>
            </label>
            <input type="submit" className="getJournal__submit" value={"Ознакомиться бесплатно"}/>
          </form>
          </div>
      </div>
    </section>
  )
}