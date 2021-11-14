import React from 'react'
import './RestaurantCard.scss'
const RestaurantCard = ({address,name,location,fetchMenu,id}) => {
  return (
    <>
      <div className="restaurantCard" onClick={()=>{
        fetchMenu({id,address,name,location});
      }}>
        <div className="restaurantCard__img">
          <img src="https://www.ticklingpalates.com/wp-content/uploads/2021/08/Instant-Pot-Pav-Bhaji-Recipe.jpg" alt="pav bhaji" />
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
