'use client'
import { CardWithImg } from "../../elems/CardWithImg/CardWithImg"
import './PowerIsland.css'


export const PowerIsland = () => {
  return (
    <section className="powerIsland container">
      <h2 className="powerIsland__title row">«Силовой остров» это</h2>
      <ul className="powerIsland__list d-flex flex-wrap justify-content-center">
      
          <CardWithImg 
            img={'/PowerIsland/icon1.svg'}
            h5="Новости и аналитика"
            text="Генерация, производители оборудования, энергоинжиниринг, генподряд, сервис, государственное регулирование."
          />
      
      
          <CardWithImg 
              img={'/PowerIsland/icon2.svg'}
              h5="Профессиональная аудитория "
              text="Подписчики обзора – более 500 специалистов и руководителей высшего звена – получают обзор напрямую в свои почтовые ящики."
          />
      
      
          <CardWithImg 
            img={'/PowerIsland/icon3.svg'}
            h5="Предмет мониторинга"
            text="Инвестпрограммы, ремонтные кампании, модернизации. Портфели заказов, текущие проекты, стратегии развития. НИОКР. Стратегическое планирование в отрасли. Кадровые назначения."
          />
      
      
          <CardWithImg 
            img={'/PowerIsland/icon1.svg'}
            h5="Достоверные источники"
            text="Только проверенная информация 
            из первоисточников, снабженная гиперссылками: материалы компаний, госорганов, деловых и корпоративных СМИ."
          />
      
      </ul>
    </section>
  )
}