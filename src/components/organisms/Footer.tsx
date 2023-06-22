import { Link } from 'react-router-dom'
import Facebook from '../atoms/Facebook'
import Instagram from '../atoms/Instagram'

const Footer = () => {
  const cuurentYear = new Date().getFullYear()
  return (

    <footer className='Footer'>
      <div className="Footer__container">
        <ul className='Footer__links'>
          <li className='Footer__links-item'>
            <Link to='/terminosycondiciones'>Términos y Condiciones</Link>
          </li>
        </ul>
        <ul className="social-networks">
          <li className="social-networks__item">
            <a href="#"><Facebook/></a>
          </li>
          <li className="social-networks__item">
            <a href="#"><Instagram/></a>
          </li>
        </ul>
        <p>© {cuurentYear}, Tienda.com</p>
      </div>
    </footer>
  )
}

export default Footer
