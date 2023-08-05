import './Navigation.css'

interface IContacts {
  [key: string]: { text: string; link: string; svg: string; };
}

const Navigation = (props: IContacts) => {

  return (
    <nav>
      <ul className='d-flex nav__list '>
        {Object.keys(props).map((key) => {
          const { text, link, svg } = props[key];
          
          return (
            <li key={key}>
              <a className='nav__link' href={link}>
                <svg
                  className='nav__img'
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  dangerouslySetInnerHTML={{ __html: svg }}
                />
                {text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  )
}

export default Navigation