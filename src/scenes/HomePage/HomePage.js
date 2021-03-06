import React, { Component } from 'react'
import './HomePage.css'
import { Link } from 'react-router-dom'
import Hero from '../../components/Hero/Hero'
import Form from '../../components/EmailForm/EmailForm'
import Footer from '../../components/Footer/Footer'
import * as imageData from '../../utilities/imageLoader'

class Homepage extends Component {
  render () {
    return (
      <div>
        <Hero />
        <section id='portfolio'>
          <div className='container-fluid'>
            <h2 className='text-center'>Welcome To The Travel Shelf</h2>
            <hr align='center' width='30%' />
            <p className='text-center header'>Browse Our Portfolio And Visit Your Local Independent Bookstores Today!</p>
            <div className='row no-gutters d-flex flex-wrap justify-content-center align-items-baseline'>

              <div className='portfolio-item m-2 ' style={{flexBasis: '50%', minWidth: '300px'}}>
                <Link className='portfolio-link' to='stores/Drawn%20and%20Quarterly'>
                  <div className='caption'>
                    <div className='caption-content'>
                      <h3>Drawn and Quaterly</h3>
                      <i className='fa fa-search-plus fa-2x' />
                    </div>
                  </div>
                  <img src={imageData.dq[4]} className='img-fluid' alt='Book store' />
                </Link>
              </div>

              <div className='portfolio-item m-2' style={{flexBasis: '40%', minWidth: '300px'}} >
                <Link className='portfolio-link' to='stores/The%20Word'>
                  <div className='caption'>
                    <div className='caption-content'>
                      <h3>The Word</h3>
                      <i className='fa fa-search-plus fa-2x' />
                    </div>
                  </div>
                  <img src={imageData.word[0]} className='img-fluid' alt='Book store' />
                </Link>
              </div>

              <div className='portfolio-item m-2' style={{flexBasis: '50%', minWidth: '300px'}}>
                <Link className='portfolio-link' to='stores/Librairie%20Le%20port%20de%20t%C3%AAte'>
                  <div className='caption'>
                    <div className='caption-content'>
                      <h3>Le port de tête</h3>
                      <i className='fa fa-search-plus fa-2x' />
                    </div>
                  </div>
                  <img src={imageData.pt[2]} className='img-fluid' alt='Book store' />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id='info' className='py-3'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 align-self-center info-map'>
                <h3>Want To Know More?</h3>
                <hr align='center' width='30%' />
                <p>Interested in adding a bookstore yourself?<br />
                    Want to join the team? <em>Get in touch: <a href='mailto:info@thetravelshelf.com' className='email'>info@thetravelshelf.com</a>.</em>
                </p>

                <h4 className='mailing'>Join Our Mailing List</h4>
                <p>Keep up-to-date with the latest news!</p>

                <Form />

              </div>

              <div className='col-md-6 map'>
                <img src='img/worldmap-blk.png' className='img-fluid' alt='Map' />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    )
  }
}

export default Homepage
