import { GetJournal } from "../sectionGet/GetJournal"
import './Footer.css'


export const Footer = () => {
   return (
    <footer className="footer ">
      <div className="container">
        <div className="footer__logo">
          <a href="/">
          </a>
        </div>
        <div className="footer__info">
          <div>
          <span className="footer__text">Электронная почта</span><a className="footer__link" href="mailto:Info@ins-media.ru">Info@ins-media.ru</a>
          </div>
          <div>
          <span className="footer__text">Facebook</span><a className="footer__link" href="https://web.facebook.com/public/:@power.island">@power.island</a>
          </div>
          <div>
          <span className="footer__text">Телефон</span><a className="footer__link" href="tel:89222095611">8 922 209 56 11</a>
          </div>
        </div>
      </div>
    </footer>
   )
}