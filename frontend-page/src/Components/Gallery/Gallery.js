import React from 'react'
import '../styles/Gallery.css'
import gallery1 from '../../Resources/gallery1.jpg'
import gallery2 from '../../Resources/gallery2.jpg'
import gallery3 from '../../Resources/gallery3.jpg'
import gallery4 from '../../Resources/gallery4.jpg'
import gallery5 from '../../Resources/gallery5.jpg'
import gallery6 from '../../Resources/allery6.jpg'
import gallery7 from '../../Resources/gallery7.jpg'
import gallery8 from '../../Resources/gallery9.jpg'
import gallery9 from '../../Resources/gallery8.jpg' //extra :]


function GalleryWasAlreadyDeclared() {
  return (
    <div className='gallery'>
      <img src={gallery1} alt="img1" className="img" />
      <img src={gallery2} alt="img2" className="img" />
      <img src={gallery3} alt="img3" className="img" />
      <img src={gallery4} alt="img4" className="img" />
      <img src={gallery5} alt="img5" className="img" />
      <img src={gallery6} alt="img6" className="img" />
      <img src={gallery7} alt="img7" className="img" />
      <img src={gallery8} alt="img8" className="img" />
    </div>
  )
}

export default GalleryWasAlreadyDeclared
