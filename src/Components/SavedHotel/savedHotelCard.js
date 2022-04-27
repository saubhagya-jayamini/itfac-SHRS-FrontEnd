import React, { Component, useEffect, useState } from 'react'
import '../../Assets/styles/css/Components/savedHotelCard.css'
import { getHotelById } from '../../Services/Api/Utilities'
import HashLoader from 'react-spinners/HashLoader'
const SavedHotelCard = ({ hotel, removeSaveHotel }) => {
  const [hotelDetails, setHotelDetails] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getHotelDetails()
  }, [])

  const getHotelDetails = async () => {
    const dataModel = {
      id: hotel.hotelId,
    }
    await getHotelById(dataModel)
      .then((res) => {
        if (res.status == 200) {
          setHotelDetails(res.data[0])
          setLoading(false)
        }
      })
      .catch((err) => {
        setLoading.log(err)
      })
  }
  const calculateTime = (createdAt) => {
    const timeElapsed = new Date(createdAt)
    const today = new Date()
    var difference = Math.abs(today - timeElapsed)
    const days = difference / (1000 * 3600 * 24)
    if (days / 365 > 1) {
      return Math.floor(days / 365) + ' years ago'
    } else if (days / 365 < 1 && days >= 31) {
      return Math.floor(days / 12) + ' months ago'
    } else if (days / 365 < 1 && days <= 31 && days > 1) {
      return Math.floor(days) + ' days ago'
    } else if (
      days / 365 < 1 &&
      days <= 31 &&
      days < 1 &&
      difference / 1000 >= 3600
    ) {
      const milliSec = Math.abs(today - timeElapsed)
      return Math.floor(milliSec / (1000 * 3600)) + ' hours ago'
    } else if (
      days / 365 < 1 &&
      days <= 31 &&
      days < 1 &&
      difference / 1000 < 3600 &&
      difference / 1000 >= 60
    ) {
      const milliSec = Math.abs(today - timeElapsed)
      return Math.floor(milliSec / (1000 * 60)) + ' minutes ago'
    } else {
      const milliSec = Math.abs(today - timeElapsed)
      return Math.floor(milliSec / 1000) + ' seconds ago'
    }
  }

  return (
    <div class='card recommonded-hotels'>
      {loading ? (
        <>
          <div className='booking-history-loader'>
            <HashLoader
              loading={loading}
              size={25}
              margin={2}
              color='#00AD5F'
            />
          </div>
        </>
      ) : (
        <>
          <img src={hotelDetails.image} class='card-img-top' alt='...' />
          <div class='card-body'>
            <h4 class='card-title'>{hotelDetails.name}</h4>
            <p class='card-text text-justify'>{hotelDetails.description}</p>
            <div className='savedAt'>
              <small>{calculateTime(hotel.createdAt)} </small>
            </div>
            <div className='saveHotelBtm'>
              <button className='go-to-hotel mt-2 item'>
                Go to hotel {'>'}
              </button>
              <i
                class='fa fa-trash item'
                aria-hidden='true'
                onClick={() => {
                  removeSaveHotel(hotelDetails.hotelId)
                }}
              ></i>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default SavedHotelCard
