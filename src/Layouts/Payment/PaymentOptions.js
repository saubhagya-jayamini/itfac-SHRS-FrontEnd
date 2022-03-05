import { useEffect } from 'react'
import { toast } from 'react-toastify'

import Paypal from '../../Services/PaymentGateways/PayPal'
const PaymentOptions = (paymentMethod) => {
  // useEffect(() => {}, [paymentMethod])

  useEffect(() => {
    toast.configure()
  }, [])
  function notify(message) {
    toast.success(message)
    window.location.href = '/'
  }
  return (
    <div className='payment-gateway-interface'>
      <div>
        {paymentMethod.method === 'default' ? (
          <div>
            <button
              className='reserve-button final-payment-btn'
              onClick={() => {
                notify('Your booking is placed !')
              }}
            >
              Finish !
            </button>
          </div>
        ) : (
          <></>
        )}
        {paymentMethod.method === 'paypal' ? (
          <div className='paypal-btn'>
            <Paypal />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}
export default PaymentOptions