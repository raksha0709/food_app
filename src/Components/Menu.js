import React from 'react';

const Menu = () => {

  const menuItems = [
    { name: 'Spaghetti Carbonara', price: '$12.99', image: 'https://t4.ftcdn.net/jpg/02/40/99/19/360_F_240991913_c22j6WvLgpqiUvjaLiLc5rh14WO8jShB.jpg' },
    { name: 'Chicken Alfredo', price: '$14.99', image: 'https://www.foodnetwork.com/content/dam/images/food/fullset/2015/9/15/1/FNK_Chicken-Fettucine-Alfredo_s4x3.jpg' },
    { name: 'Margherita Pizza', price: '$10.99', image: 'https://media.istockphoto.com/id/1280329631/photo/italian-pizza-margherita-with-tomatoes-and-mozzarella-cheese-on-wooden-cutting-board-close-up.jpg?s=612x612&w=0&k=20&c=CFDDjavIC5l8Zska16UZRZDXDwd47fwmRsUNzY0Ym6o=' },
    { name: 'Caesar Salad', price: '$8.99', image: 'https://www.shutterstock.com/shutterstock/photos/1078415420/display_1500/stock-photo-a-delicious-chicken-caesar-salad-with-parmesan-cheese-dressing-and-croutons-1078415420.jpg' },
    { name: 'Chocolate Cake', price: '$6.99', image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?cs=srgb&dl=pexels-abhinav-goswami-291528.jpg&fm=jpg' },
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Our Menu</h1>
      <div className="row">
        <div className="col-md-8 mx-auto">
          <div className="list-group">
            {menuItems.map((item, index) => (
              <div key={index} className="list-group-item">
                <div className="row align-items-center">
                  <div className="col-md-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-thumbnail"
                    />
                  </div>
                  <div className="col-md-6">
                    <h4>{item.name}</h4>
                    <p>{item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;