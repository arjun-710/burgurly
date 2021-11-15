import React from 'react'
import './RestaurantCard.scss'
const RestaurantCard = ({address,name,location,fetchMenu,id,image}) => {
  return (
    <>
      <div className="restaurantCard" onClick={()=>{
        fetchMenu({id,address,name,location});
      }}>
        <div className="restaurantCard__img">
          <img src={`${image ? image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmvvKWVv3_BaHjewNJr8OPxvg_7rPSPkf4NydGvtSGYmt_th5ImlFzWeTwcZrGfgTvcOE&usqp=CAU"}`} alt={name} />
        </div>
        <div className="restaurantCard__details">
          <div className="restaurantCard__details-name">{name}</div>
          <div className="restaurantCard__details-Info">
            <div className="restaurantCard__details-Info--location">{address}</div>
            <div className="restaurantCard__details-Info--bill"><span>min bill</span>100</div>
          </div>

        </div>
      </div>
    </>
  )
}

export default RestaurantCard
