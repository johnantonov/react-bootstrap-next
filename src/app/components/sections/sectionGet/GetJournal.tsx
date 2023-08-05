import './GetJournal.css'

export const GetJournal = () => {
    return (
      <section className="sectionGet">
        <div className='container sectionGet__container'>
          <h3 className="sectionGet__title section__title">Получите свежий номер бесплатно</h3>
          <form className="sectionGet__form" action="">
            <div className="sectionGet__wrapperInput">
              <input className="sectionGet__input sectionGet__input_name" type="text" name="name" placeholder="Имя"/>
              <input className="sectionGet__input sectionGet__input_email" type="email" name="email" placeholder="Электронная почта"/>
              <input type="submit" className="d-none d-md-block usualBtn sectionGet__submit" value={"Читать бесплатно"}/>
            </div>
            <label className='sectionGet__agreement' htmlFor="footer__agreement">
              <input className="sectionGet__input sectionGet__input_check" type="checkbox" name="footer__agreement" id="footer__agreement"/>
              <span className="sectionGet__checkmark"></span>
              <span className="sectionGet__textForAgreement">Даю согласие на обработку персональных данных</span>
            </label>
            <input type="submit" className="d-md-none usualBtn sectionGet__submit" value={"Читать бесплатно"}/>
          </form>
        </div>
      </section>
  )
}