import { useState } from 'react'
import './CardWork.css'

interface Props {
  num: string;
  name: string;
  text: string;
}


export const CardWork = (props: Props) => {
  const [showContent, setShowContent] = useState(false)
 
  const handleButtonClick = () => {
   setShowContent(!showContent)
  }


  return (
    <li className="CardWork">
      <h5 className="CardWork__title">
        <span className="CardWork__num">{props.num}</span>
        <p className="CardWork__name">{props.name}</p>
      </h5>
      <div className="CardWork__wrapper">
        <button className={`CardWork__open CardWork__btn CardWork__fadeInOut ${!showContent ? 'show' : ''}`} onClick={handleButtonClick}>Подробнее <svg className='CardWork__arrow' xmlns="http://www.w3.org/2000/svg" width="9" height="5" viewBox="0 0 9 5" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M0 0.698631L0.730893 0L4.5 3.60274L8.26911 0L9 0.698631L4.5 5L0 0.698631Z" fill="white"/></svg></button>
          <div className={`CardWork__content CardWork__fadeInOut ${showContent ? 'show' : ''}`}>
            <p className='CardWork__text'>{props.text}</p>
            <button className='CardWork__close CardWork__btn' onClick={handleButtonClick}>Скрыть <svg className='CardWork__arrow' xmlns="http://www.w3.org/2000/svg" width="9" height="5" viewBox="0 0 9 5" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M0 4.30137L0.730893 5L4.5 1.39726L8.26911 5L9 4.30137L4.5 0L0 4.30137Z" fill="white"/></svg></button>
          </div>
      </div>
    </li>

  )
}