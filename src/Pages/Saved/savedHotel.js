import React, { Component, useEffect, useState } from 'react'
import {
  getSavedhotelByCustomerId,
  deleteSaveHotelById,
} from '../../Services/Api/Utilities'
import Navbar from '../../Components/Navbar/navbar'
import Footer from '../../Layouts/Footer/footer'
import HotelCard from '../../Components/HotelCard/HotelCard'
import SavedHotelCard from '../../Components/SavedHotel/savedHotelCard'
import HashLoader from 'react-spinners/HashLoader'

const SavedHotel = () => {
  const [hotels, setHotels] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getAllSavedHotels()
  }, [])

  const getAllSavedHotels = async () => {
    const dataModel = {
      id: 1, //user id
    }
    await getSavedhotelByCustomerId(dataModel)
      .then((res) => {
        console.log(res)
        if (res.status == 200) {
          setHotels(res.data)
          setLoading(false)
          console.log(hotels)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const removeSaveHotel = async (hotelId) => {
    const dataModel = [hotelId, 1] //user id
    await deleteSaveHotelById(dataModel)
      .then((res) => {
        console.log(res)
        setLoading(true)
        getAllSavedHotels()
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div>
      <Navbar />
      <div className='container ' style={{ marginTop: '8rem' }}>
        <h2 className='mb-3'>Saved Hotels</h2>
        <div className='row '>
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
          ) : hotels.length != 0 ? (
            hotels.map((hotel, index) => {
              return (
                <div class='col-6 col-lg-3  '>
                  <SavedHotelCard
                    hotel={hotel}
                    removeSaveHotel={removeSaveHotel}
                  />
                </div>
              )
            })
          ) : (
            <div style={{ minHeight: '50vh' }}>
              <div class='alert alert-primary' role='alert'>
                Nothing to display.
              </div>
            </div>
          )}
        </div>
      </div>
      {loading ? (
        <></>
      ) : (
        <>
          <Footer />
        </>
      )}
    </div>
  )
}

export default SavedHotel
