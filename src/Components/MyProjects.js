import React from 'react';
import ShoppingCart from '../Images/ShoppingCart.gif';
import TriviaGame from '../Images/TriviaGame.gif';
import Trybewarts from '../Images/Trybewarts.gif';
import NetflixClone from '../Images/NetflixClone.gif';

function MyProjects() {
  return (
    <div className="projectsContainer">
      <h2 className="titleContainer">Some Projects...</h2>

      <div className="gifContainer">
        <div className='trybewarts'>
          <h3> Trybewarts</h3>
          <a href="https://github.com/ArthurBMessias/Projects/tree/main/HTML-CSS-JS/TrybeWartsForms"><img src={Trybewarts} alt="teste" width='400px'/></a>
        </div>
        <div className='shoppingcart'>
          <h3>ShoppingCart</h3>
          <a href="https://github.com/ArthurBMessias/Projects/tree/main/HTML-CSS-JS/Shopping-Cart"><img src={ShoppingCart} alt="teste" width='400px'></img></a>
        </div>
        <div className='netflixclone'>
          <h3>NetflixClone</h3>
          <a href="https://github.com/ArthurBMessias/Projects/tree/main/REACT/NetflixClone/clonenetflix"><img src={NetflixClone} alt="teste" width='400px'/></a>
        </div>
        <div className='trivia'>
          <h3>Trivia Game</h3>
          <a href="https://github.com/ArthurBMessias/Projects/tree/main/REACT/TriviaGame/triviagame"><img src={TriviaGame} alt="teste" width='400px'/></a>
        </div>
      </div>
    </div>
  );
}

export default MyProjects;
