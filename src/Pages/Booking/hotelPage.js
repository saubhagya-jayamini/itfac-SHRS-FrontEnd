import React, { Component } from 'react'
import HotelHeader from '../../Layouts/HotelHeader/hotelHeader.js'
import HotelDescription from '../../Layouts/HotelDescription/hotelDescription.js'
import '../../Assets/styles/css/pages/hotelPage.css'
import Souvenir from '../../Components/Carousel/souvenir'
import HotelPageTabs from '../../Components/HotelPageTabs/hotelPageTabs.js'
import RoomTypeSelector from '../../Components/RoomTypeSelector/roomTypeSelector.js'
import Facilities from '../../Layouts/Facilities/facilities.js'
import Review from '../../Layouts/Reviews/review.js'
import HotelLocation from '../../Layouts/Location/hotelLocation.js'
import Footer from '../../Layouts/Footer/footer.js'

class hotelPage extends Component {
  render() {
    return (
      <div>
        <HotelHeader />
        <div className='container hotel-room-seletor-container'>
          <Souvenir />
          <HotelPageTabs />
          <HotelDescription />
          <RoomTypeSelector />
          <Facilities />
          <Review />
          <HotelLocation />

          {/*
          //table //facilities 
          //reveiws
          //Location
           //footer */}
        </div>
        <Footer />
      </div>
    )
  }
}

export default hotelPage