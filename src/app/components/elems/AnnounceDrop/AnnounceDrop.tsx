'use client'
import { useEffect } from 'react';
import Choices from "choices.js";
import 'node_modules/choices.js/public/assets/styles/choices.min.css'
import './AnnounceDrop.css'



export const AnnounceDrop = () => {



  useEffect(() => {
    const loadChoices = async () => {
      const Choices = (await import('choices.js')).default;
      const element = document.querySelector('#announceDate');
      if (element !== null) {
        const choices = new Choices(element, {
          searchEnabled: false,
          itemSelectText: '',
          allowHTML: true,
        });
      }
    };

    if (typeof window !== 'undefined') {
      loadChoices();
    }
  }, []);

  return (

    <div className='AnnounceDrop'>
      <form className="choice">
       
        <select name="announceDate" id="announceDate" className="announceDate">
          <option value="N1"> №1 13 - 19 января 2020  </option>
          <option value="N2"> №2 20 - 26 января 2020 </option>
          <option value="N3"> №3 27 января - 2 февраля  2020 </option>
          <option value="N4"> №4 3 - 9 февраля 2020 </option>
          <option value="N5"> №5 10 - 16 февраля 2020 </option>
          <option value="N6"> №6 17 - 23 февраля 2020 </option>
          <option value="N7"> №7 24 февраля - 1 марта 2020 </option>
          <option value="N8"> №8 2 - 8 марта 2020 </option>
          <option value="N9"> №9 9 - 15 марта 2020 </option>
        </select>
      </form>
      <ul className='AnnounceDrop__list'>
        <li>— ДПМ-2: точка в отборе проектов не поставлена. Как всегда, есть недовольные.</li>
        <li>— Локализация производства газовых турбин. Как быстро надо спешить?</li>
        <li>— Купит ли «Газпром энергохолдинг» угольные ТЭЦ Иркутскэнерго вместе с углём?</li>
        <li>— Перегруппировка дальневосточных генерирующих активов. Обсуждение продолжается, рынок нервничает.</li>
        <li>— Энергетика Беларуси: мощности растут, кадры обновляются.</li>
        <li>— Экибастуз: крупное ЧП на небольшой ТЭЦ.</li>
        <li>— Учёные Казахстана работают над совершенствованием технологии сжигания экибастузского угля, зато в Германии угольным станциям осталось жить меньше двадцати лет.</li>
        <li>— Киргизия: ТЭЦ-2 в Бишкеке всё-таки может быть построена.</li>
        <li>— Энергетика Беларуси: мощности растут, кадры обновляются.</li>
        <li>— Перегруппировка дальневосточных генерирующих активов. Обсуждение продолжается, рынок нервничает.</li>
        <li>— Купит ли «Газпром энергохолдинг» угольные ТЭЦ Иркутскэнерго вместе с углём?</li>
        <li>— Киргизия: ТЭЦ-2 в Бишкеке всё-таки может быть построена.</li>
        <li>— Энергетика Беларуси: мощности растут, кадры обновляются.</li>
        <li>— Перегруппировка дальневосточных генерирующих активов. Обсуждение продолжается, рынок нервничает.</li>
        <li>— Купит ли «Газпром энергохолдинг» угольные ТЭЦ Иркутскэнерго вместе с углём?</li>
      </ul>
      <div className='choice'>
        <a className='AnnounceDropAll btn' href="/">Показать весь анонс
        <svg className='AnnounceDropAll__arrow' xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 18 10" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 1.39726L1.46179 0L9 7.20548L16.5382 0L18 1.39726L9 10L0 1.39726Z" fill="black"/>
        </svg>
        </a>
      </div>
    </div>
  )
}