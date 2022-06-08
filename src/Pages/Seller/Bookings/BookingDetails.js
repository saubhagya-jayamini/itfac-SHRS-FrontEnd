import React from 'react'
import Navbar from '../../../Components/Navbar/Navbar.js'
import BookingInfo from '../../../Layouts/BookingDetails/BookingInfo.js'
import Footer from '../../../Layouts/Footer/Footer'
const BookingDetails = () => {
  return (
    <div>
      <Navbar />
      <BookingInfo />
      {/* <div className='footer-div'>
        <Footer />
      </div> */}
    </div>
  )
}

export default BookingDetails
