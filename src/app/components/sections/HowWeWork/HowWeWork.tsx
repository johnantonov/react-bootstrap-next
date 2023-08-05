'use client'
import './HowWeWork.css'
import { CardWork } from '../../elems/CardWork/CardWork'

export const HowWeWork = () => {

  return (
    <section className="HowWeWork">
      <div className='HowWeWork__container container'>
        <h2 className="HowWeWork__title">Как мы работаем?</h2>
        <ul className="HowWeWork__list">
          <CardWork 
            num = '01'
            name = 'Сбор данных'
            text = 'Алгоритмы собирают информацию'
        
          />
          <CardWork 
            num = '02'
            name = 'Отбор материала'
            text = 'Отбираем материал из собранной информации'
          />
          <CardWork 
            num = '03'
            name = 'Редактура и вёрстка'
            text = 'Создаем макет и реализуем проект'
          />
          <CardWork 
            num = '04'
            name = 'Рассылка обзора'
            text = 'Отправляем обзор подписчикам'
          />
        </ul>
      </div>
    </section>
  )
}