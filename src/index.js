import React from 'react';
import ReactDOM from 'react-dom/client';
import spinaciImage from './pizzas/spinaci.jpg';
import funghiImage from './pizzas/funghi.jpg';
import margheritaImage from './pizzas/margherita.jpg';
import focaccciaImage from './pizzas/focaccia.jpg';
import salaminoImage from './pizzas/salamino.jpg';
import prosciuttoImage from './pizzas/prosciutto.jpg';



import './index.css';

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: focaccciaImage,
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: margheritaImage,
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: spinaciImage,
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: funghiImage,
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: salaminoImage,
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: prosciuttoImage,
    soldOut: false,
  },
];

function App() {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className='header'>
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {

  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      
      {numPizzas > 0 ? (
        <ul className='pizzas'>
          {pizzaData.map((pizza) => (
            <Pizza key={pizza.name} pizzaObj={pizza} />
          ))}
        </ul>
      ) : (
        <p>We are still working on our menu. Please come back later!</p>
      )}
      
    </main>
  )
}

function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt="Pizza Spinaci" />
      <div>
      <h3>{props.pizzaObj.name}</h3>
      <p>{props.pizzaObj.ingredients}</p>
      </div>
      <span>{props.pizzaObj.price}</span>
    </li>
  );
}

function Footer(){

  const hour = new Date().getHours();
  const openHour = 12;
  const closedHours = 22 - 1;
  const isOpen = hour >= closedHours && hour <= openHour;
  return (
    <footer className='footer'>
      {isOpen ? (
        <div className="order">
          <p> We're open unit {closedHours}:00. Come visit us order online. </p>
        </div>
      ) : <p>We're happy to welcome you between {openHour}:00 and {closedHours}:00. </p> }
    </footer>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode><App /></React.StrictMode>);

