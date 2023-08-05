'use client'
import Image from 'next/image';
import person1 from '../../../../../public/testimonials/person1.jpg'
import company1 from '../../../../../public/testimonials/logo.svg'
import './Testimonials.css'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef, useState } from 'react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export const Testimonials = () => {
  return (
    <section className='testimonials container'>
      <h2 className='testimonials__title section__title'>Отзывы наших подписчиков </h2>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="testimonials__slide"
      >
        <SwiperSlide className=''>
          <div className='slide__header'>
            <Image className='testimonials__avatar'
              src={person1}
              alt='Шурыгин Константин Анатольевич'
            />
            <div className='testimonials__person'>
              <h5 className='testimonials__name d-sm-none'>Шурыгин К. А.</h5>
              <h5 className='testimonials__name d-none d-sm-block'>Шурыгин Константин Анатольевич</h5>
              <p>Заместитель генерального директора по сбыту в компании «Ротек»</p>
            </div>
          </div>
          <div className='slide__body'>
            <p className='testimonials__text'>«Взаимодействие корпорации и клиента, отбрасывая подробности, поразительно. Емкость рынка, отбрасывая подробности, развивает стратегический процесс стратегического планирования, отвоевывая свою долю рынка. Социальный статус, конечно, деятельно стабилизирует фирменный рейтинг. Торговая марка решительно оправдывает повседневный медиамикс.»</p>
          </div>
          <div className='slide__footer'>
            <Image 
             className='testimonials__company'
             alt='Логотип "Ротек"'
             src={company1}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className=''>
          <div className='slide__header'>
            <Image className='testimonials__avatar'
              src={person1}
              alt='Шурыгин Константин Анатольевич'
            />
            <div className='testimonials__person'>
              <h5 className='testimonials__name d-sm-none'>Шурыгин К. А.</h5>
              <h5 className='testimonials__name d-none d-sm-block'>Шурыгин Константин Анатольевич</h5>
              <p>Заместитель генерального директора по сбыту в компании «Ротек»</p>
            </div>
          </div>
          <div className='slide__body'>
            <p className='testimonials__text'>«Взаимодействие корпорации и клиента, отбрасывая подробности, поразительно. Емкость рынка, отбрасывая подробности, развивает стратегический процесс стратегического планирования, отвоевывая свою долю рынка. Социальный статус, конечно, деятельно стабилизирует фирменный рейтинг. Торговая марка решительно оправдывает повседневный медиамикс.»</p>
          </div>
          <div className='slide__footer'>
            <Image 
             className='testimonials__company'
             alt='Логотип "Ротек"'
             src={company1}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className=''>
          <div className='slide__header'>
            <Image className='testimonials__avatar'
              src={person1}
              alt='Шурыгин Константин Анатольевич'
            />
            <div className='testimonials__person'>
              <h5 className='testimonials__name d-sm-none'>Шурыгин К. А.</h5>
              <h5 className='testimonials__name d-none d-sm-block'>Шурыгин Константин Анатольевич</h5>
              <p>Заместитель генерального директора по сбыту в компании «Ротек»</p>
            </div>
          </div>
          <div className='slide__body'>
            <p className='testimonials__text'>«Взаимодействие корпорации и клиента, отбрасывая подробности, поразительно. Емкость рынка, отбрасывая подробности, развивает стратегический процесс стратегического планирования, отвоевывая свою долю рынка. Социальный статус, конечно, деятельно стабилизирует фирменный рейтинг. Торговая марка решительно оправдывает повседневный медиамикс.»</p>
          </div>
          <div className='slide__footer'>
            <Image 
             className='testimonials__company'
             alt='Логотип "Ротек"'
             src={company1}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className=''>
          <div className='slide__header'>
            <Image className='testimonials__avatar'
              src={person1}
              alt='Шурыгин Константин Анатольевич'
            />
            <div className='testimonials__person'>
              <h5 className='testimonials__name d-sm-none'>Шурыгин К. А.</h5>
              <h5 className='testimonials__name d-none d-sm-block'>Шурыгин Константин Анатольевич</h5>
              <p>Заместитель генерального директора по сбыту в компании «Ротек»</p>
            </div>
          </div>
          <div className='slide__body'>
            <p className='testimonials__text'>«Взаимодействие корпорации и клиента, отбрасывая подробности, поразительно. Емкость рынка, отбрасывая подробности, развивает стратегический процесс стратегического планирования, отвоевывая свою долю рынка. Социальный статус, конечно, деятельно стабилизирует фирменный рейтинг. Торговая марка решительно оправдывает повседневный медиамикс.»</p>
          </div>
          <div className='slide__footer'>
            <Image 
             className='testimonials__company'
             alt='Логотип "Ротек"'
             src={company1}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className=''>
          <div className='slide__header'>
            <Image className='testimonials__avatar'
              src={person1}
              alt='Шурыгин Константин Анатольевич'
            />
            <div className='testimonials__person'>
              <h5 className='testimonials__name d-sm-none'>Шурыгин К. А.</h5>
              <h5 className='testimonials__name d-none d-sm-block'>Шурыгин Константин Анатольевич</h5>
              <p>Заместитель генерального директора по сбыту в компании «Ротек»</p>
            </div>
          </div>
          <div className='slide__body'>
            <p className='testimonials__text'>«Взаимодействие корпорации и клиента, отбрасывая подробности, поразительно. Емкость рынка, отбрасывая подробности, развивает стратегический процесс стратегического планирования, отвоевывая свою долю рынка. Социальный статус, конечно, деятельно стабилизирует фирменный рейтинг. Торговая марка решительно оправдывает повседневный медиамикс.»</p>
          </div>
          <div className='slide__footer'>
            <Image 
             className='testimonials__company'
             alt='Логотип "Ротек"'
             src={company1}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className=''>
          <div className='slide__header'>
            <Image className='testimonials__avatar'
              src={person1}
              alt='Шурыгин Константин Анатольевич'
            />
            <div className='testimonials__person'>
              <h5 className='testimonials__name d-sm-none'>Шурыгин К. А.</h5>
              <h5 className='testimonials__name d-none d-sm-block'>Шурыгин Константин Анатольевич</h5>
              <p>Заместитель генерального директора по сбыту в компании «Ротек»</p>
            </div>
          </div>
          <div className='slide__body'>
            <p className='testimonials__text'>«Взаимодействие корпорации и клиента, отбрасывая подробности, поразительно. Емкость рынка, отбрасывая подробности, развивает стратегический процесс стратегического планирования, отвоевывая свою долю рынка. Социальный статус, конечно, деятельно стабилизирует фирменный рейтинг. Торговая марка решительно оправдывает повседневный медиамикс.»</p>
          </div>
          <div className='slide__footer'>
            <Image 
             className='testimonials__company'
             alt='Логотип "Ротек"'
             src={company1}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className=''>
          <div className='slide__header'>
            <Image className='testimonials__avatar'
              src={person1}
              alt='Шурыгин Константин Анатольевич'
            />
            <div className='testimonials__person'>
              <h5 className='testimonials__name d-sm-none'>Шурыгин К. А.</h5>
              <h5 className='testimonials__name d-none d-sm-block'>Шурыгин Константин Анатольевич</h5>
              <p>Заместитель генерального директора по сбыту в компании «Ротек»</p>
            </div>
          </div>
          <div className='slide__body'>
            <p className='testimonials__text'>«Взаимодействие корпорации и клиента, отбрасывая подробности, поразительно. Емкость рынка, отбрасывая подробности, развивает стратегический процесс стратегического планирования, отвоевывая свою долю рынка. Социальный статус, конечно, деятельно стабилизирует фирменный рейтинг. Торговая марка решительно оправдывает повседневный медиамикс.»</p>
          </div>
          <div className='slide__footer'>
            <Image 
             className='testimonials__company'
             alt='Логотип "Ротек"'
             src={company1}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className=''>
          <div className='slide__header'>
            <Image className='testimonials__avatar'
              src={person1}
              alt='Шурыгин Константин Анатольевич'
            />
            <div className='testimonials__person'>
              <h5 className='testimonials__name d-sm-none'>Шурыгин К. А.</h5>
              <h5 className='testimonials__name d-none d-sm-block'>Шурыгин Константин Анатольевич</h5>
              <p>Заместитель генерального директора по сбыту в компании «Ротек»</p>
            </div>
          </div>
          <div className='slide__body'>
            <p className='testimonials__text'>«Взаимодействие корпорации и клиента, отбрасывая подробности, поразительно. Емкость рынка, отбрасывая подробности, развивает стратегический процесс стратегического планирования, отвоевывая свою долю рынка. Социальный статус, конечно, деятельно стабилизирует фирменный рейтинг. Торговая марка решительно оправдывает повседневный медиамикс.»</p>
          </div>
          <div className='slide__footer'>
            <Image 
             className='testimonials__company'
             alt='Логотип "Ротек"'
             src={company1}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className=''>
          <div className='slide__header'>
            <Image className='testimonials__avatar'
              src={person1}
              alt='Шурыгин Константин Анатольевич'
            />
            <div className='testimonials__person'>
              <h5 className='testimonials__name d-sm-none'>Шурыгин К. А.</h5>
              <h5 className='testimonials__name d-none d-sm-block'>Шурыгин Константин Анатольевич</h5>
              <p>Заместитель генерального директора по сбыту в компании «Ротек»</p>
            </div>
          </div>
          <div className='slide__body'>
            <p className='testimonials__text'>«Взаимодействие корпорации и клиента, отбрасывая подробности, поразительно. Емкость рынка, отбрасывая подробности, развивает стратегический процесс стратегического планирования, отвоевывая свою долю рынка. Социальный статус, конечно, деятельно стабилизирует фирменный рейтинг. Торговая марка решительно оправдывает повседневный медиамикс.»</p>
          </div>
          <div className='slide__footer'>
            <Image 
             className='testimonials__company'
             alt='Логотип "Ротек"'
             src={company1}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

