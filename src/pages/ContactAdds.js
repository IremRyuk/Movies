import React, { useEffect } from 'react'
import '../styles/Adds Style/adds.css'

export default function ContactAdds() {
  return (
    <>
    <center>
    <div className='adds'>
        <p className='adds-p'><i className="fa-solid fa-phone" />Phone Number : <a href='tel:+995593703703' className='adds-a'><b>593703703</b></a></p>
        <p className='adds-p'><i className="fa-sharp fa-solid fa-map-location" />Address : <b className='adds-b'>Georgia,Savannah,2605 Skidaway Rd</b></p>
        <p className='adds-p'>Our Office Located</p>
        <div className='add-map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d422.74917254850646!2d-81.06346639983529!3d32.04237060599902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fb9df79ab932c1%3A0x3d67472ac425ae50!2s2605%20Skidaway%20Rd%2C%20Savannah%2C%20GA%2031404%2C%20USA!5e0!3m2!1sen!2sge!4v1663375201483!5m2!1sen!2sge" className='add-inside-map' allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
    </div>
    </center>
    </>
  )
}
