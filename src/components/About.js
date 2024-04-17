import React from 'react'
import { Link } from 'react-router-dom'
import gitLogo from '../images/github-mark-white.png'
import linkLogo from '../images/linkedin.png'
import phone from '../images/phone.png'
import mail from '../images/mail.png'

export const About = () => {
  return (
    <>
        <article className='about'>
          <div className='aboutContent'>
            <h2>A propos</h2>
            <p>Plus de 10 ans passés dans l’administration des ventes m’ont permis de développer mon esprit d’équipe 
            et ma capacité d’écoute, pour lesquels j’ai été reconnu.<br/>
            Ma longue éxperience a l’étranger m’a permis de devenir bilingue en anglais.<br/>
            D’un naturel curieux, persévérant, autodidacte, j'ai décidé de me reconvertir en tant que développeur et 
            de suivre la formation certifiante de développeur Front-end (ReactJs) chez OpenClassrooms.</p>
          </div>
          <aside className='details'>
            <h2>Coordonnées</h2>
            <div className='phone'>
              <img src={phone} alt='numero de telephone'></img>
              <p>06.24.23.27.10</p>
            </div>
            <div>
              <img src={mail} alt='e-mail'></img>
              <Link to='mailto:christian.fezard@gmail.com' target='blank'>christian.fezard@gmail.com</Link>
            </div>
            <div>
              <img src={gitLogo} alt='lien github'></img>
              <Link to='https://github.com/ChristianFezard' target='blank'>Github</Link>
            </div>
            <div>
              <img src={linkLogo} alt='lien Linkedin'></img>
              <Link to='https://www.linkedin.com/in/christian-fezard-développeur-front-end-react'>LinkedIn</Link>
            </div>
          </aside>
        </article>
    </>
  )
}

export default About