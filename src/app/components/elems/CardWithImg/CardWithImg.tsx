import Image from 'next/image';
import './CardWithImg.css'

interface CardData {
  img: string; // path
  h5: string;
  text: string;
}


export const CardWithImg = (props: CardData) => {

  return (
    <li className='CardWithImg'>
      <div>
        <div className='CWI__header'>
          <div className="CWI__wrapperImg">
          <Image 
                  className="CWI__img" 
                  src={props.img} 
                  alt='Обложка журнала "Силовой Остров"' 
                  width={32} 
                  height={32}
                />
          </div>
          <div className='CWI__wraperTitle'>
            <h5 className='CWI__title'>{props.h5}</h5>
          </div>
        </div>
        <div className='CWI__main'>
          <p className='CWI__text'>{props.text}</p>
        </div>
      </div>
        <div className='CWI__divider'></div>
    </li>
    )
  }