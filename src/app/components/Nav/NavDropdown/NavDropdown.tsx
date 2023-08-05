import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavDropdown.css'

interface IContacts {
  [key: string]: { text: string; link: string; svg: string; };
}

function DropBtn(props: IContacts) {

  return (
    <nav>
    <Dropdown>
      <Dropdown.Toggle className='drop__btn' variant="success" id="dropdown-basic">
        Контакты
      </Dropdown.Toggle>

      <Dropdown.Menu>
      {Object.keys(props).map((key) => {
          const { text, link, svg } = props[key];
          
          return (
            <Dropdown.Item key={key}> 
              <svg
                className='dropBtnImg'
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                dangerouslySetInnerHTML={{ __html: svg }}
              />
              <a href={link}>{text}</a>
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
    </nav>
  );
}

export default DropBtn;