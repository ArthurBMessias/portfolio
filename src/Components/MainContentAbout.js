import React, { useState, useContext } from 'react';
import Context from '../Context/Context';
import StyleAbout from './StyleAbout.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

function MainContentAbout() {
  const { carouselImg } = useContext(Context);

  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    let x = scrollX + 300;
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const handleRightArrow = () => {
    let x = scrollX - 300;
    let listW = carouselImg.length * 400;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    setScrollX(x);
  };

  return (
    <div className={StyleAbout}>
            <h3 className="aboutTitle">About me...</h3>
      <div className="carouselRow">
        <div className="movieRow--left" onClick={handleLeftArrow}>
          <NavigateBeforeIcon style={{ fontSize: 50 }} />
        </div>
        <div className="movieRow--right" onClick={handleRightArrow}>
          <NavigateNextIcon style={{ fontSize: 50 }} />
        </div>
        <div className="imgRow--listarea">
          <div
            className="imgRow--list"
            style={{ marginLeft: scrollX, width: carouselImg.length * 400 }}
          >
            {carouselImg.map((item, key) => (
              <div key={key} className="imgRow--item">
                <img src={item} alt="about" />
              </div>
            ))}
          </div>
        </div>
      </div>
            <p className="aboutRun">
              When I'm out of screen I'm like to challenge myself while I'm
              running... I love traveling and meeting new cultures and
              languages.
            </p>
            <p className="aboutVoluntary">
              Making a difference in some people live, it's one of my passions
              be a voluntary!
            </p>
            <p className="aboutHobbys">
              Like a true nerd, loves to appreciate books, movies, series, and
              gaming.
            </p>
    </div>
  );
}

export default MainContentAbout;
