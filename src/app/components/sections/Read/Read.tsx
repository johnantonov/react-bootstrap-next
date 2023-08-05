'use client'
import Image from "next/image"
import img2 from '../../../../../public/Read/COMP2.svg'
import img3 from '../../../../../public/Read/COMP3.svg'
import img4 from '../../../../../public/Read/COMP4.svg'
import './Read.css'
import { Button } from "react-bootstrap"
import { useState } from "react"




export const Read = () => {

  
  
  const [allItems, setAllItems] = useState(false);
  const buttonShowMore = () => {
    setAllItems(!allItems);
    let list: HTMLElement = document.querySelector('.Read__list') as HTMLElement
    list.classList.toggle('Read__list_hidden')
  };
  
  
  return (
    <section className="Read">
      <div className="container Read__container">
        <h2 className="Read__title section__title">Нас читают</h2>
        <ul className="Read__list Read__list_hidden">
          <li className="Read__item">
              <Image
                quality={100} 
                className="" 
                src={img2}
                alt='Бренд "Такой то"' 
              />
            </li>
          <li className="Read__item">
              <Image
                quality={100} 
                className="" 
                src={img3}
                alt='Бренд "Такой то"' 
              />
            </li>
            <li className="Read__item">
              <Image
                quality={100} 
                className="" 
                src={img4}
                alt='Бренд "Такой то"' 
              />
            </li>
            <li className="Read__item">
              <Image
                quality={100} 
                className="" 
                src={img2}
                alt='Бренд "Такой то"' 
                />
            </li>
          <li className="Read__item">
              <Image
                quality={100} 
                className="" 
                src={img4}
                alt='Бренд "Такой то"' 
                />
            </li>
            <li className="Read__item">
              <Image
                quality={100} 
                className="" 
                src={img3}
                alt='Бренд "Такой то"' 
                />
            </li>
            <li className="Read__item">
              <Image
                quality={100} 
                className="" 
                src={img3}
                alt='Бренд "Такой то"' 
                />
            </li>
          <li className="Read__item">
              <Image
                quality={100} 
                className="" 
                src={img3}
                alt='Бренд "Такой то"' 
              />
            </li>
            <li className="Read__item">
              <Image
                quality={100} 
                className="" 
                src={img4}
                alt='Бренд "Такой то"' 
                />
            </li>
        </ul> 
          {!allItems ? (
            <Button variant="light" onClick={buttonShowMore} className="ReadMoreBtn hero__btn_more">
              Показать еще<span className="ReadMoreBtn__arrow" ></span>
            </Button>
            ) 
          : null}
          {allItems ? (
            <Button variant="light" onClick={buttonShowMore} className="ReadMoreBtn hero__btn_more">
              Скрыть<span className="ReadMoreBtn__arrow_up" ></span>
            </Button>
            ) 
            : null}
      </div>
    </section>
  )
}
