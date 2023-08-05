import './MyCard.css'

interface CardData {
  number: string;
  text: string;
}

export const MyCard = (props: CardData) => {
  return (
    <div className="MyCard">
      <div className='divider'></div>
      <div className="MyCard__info">
        <p className="MyCard__number">{props.number}</p>
        <p className="MyCard__text">{props.text}</p>
      </div>
    </div>
  )
}