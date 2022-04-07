import React, { Component } from 'react';
import Slider from './components/NetflixSlider'
import './App.scss'
import { RelatedProducts } from '@algolia/recommend-react';
import recommend from '@algolia/recommend';
import cx from 'classnames';
import SliderContext from './components/NetflixSlider/context'
import ShowDetailsButton from './components/NetflixSlider/ShowDetailsButton'
import Mark from './components/NetflixSlider/Mark'
import './components/NetflixSlider/Item.js'

const movies = [
  {
    id: 1,
    image: '/images/slide1.jpg',
    imageBg: '/images/slide1b.webp',
    title: '1983'
  },
  {
    id: 2,
    image: '/images/slide2.jpg',
    imageBg: '/images/slide2b.webp',
    title: 'Russian doll'
  },
  {
    id: 3,
    image: '/images/slide3.jpg',
    imageBg: '/images/slide3b.webp',
    title: 'The rain',
  },
  {
    id: 4,
    image: '/images/slide4.jpg',
    imageBg: '/images/slide4b.webp',
    title: 'Sex education'
  },
  {
    id: 5,
    image: '/images/slide5.jpg',
    imageBg: '/images/slide5b.webp',
    title: 'Elite'
  },
  {
    id: 6,
    image: '/images/slide6.jpg',
    imageBg: '/images/slide6b.webp',
    title: 'Black mirror'
  }
];

const recommendClient = recommend('V114ZXTEXO', '9283cd1937ce7dd887fb7dabf4a8b5b6');
const indexName = 'movies_tv_prod3';


function RelatedItem({ item }) {
  return (
    <div>
      <img src={item.image_url} />
    </div>
  );
}

/* const RelatedItem2 = ({ item }) => (
  <SliderContext.Consumer>
    {({ onSelectSlide, currentSlide, elementRef }) => {
      const isActive = currentSlide && currentSlide.id === item;

      return (
        <div
          ref={elementRef}
          className={cx('item', {
            'item--open': isActive,
          })}
        >
          <img src={item.image_url} alt="" />
          <ShowDetailsButton onClick={() => onSelectSlide(item)} />
          {isActive && <Mark />}
        </div>
      );
    }}
  </SliderContext.Consumer>
); */


class App extends Component {
  render() {
    return (
      <div className="app">
        <Slider>
          {movies.map(movie => (
            <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
          ))}
        </Slider>
        <RelatedProducts
          recommendClient={recommendClient}
          indexName={indexName}
          objectIDs= {["937013s1134"]}
          itemComponent={RelatedItem}
          />
      </div>
      
    );
  }
}

export default App;

/* function App({ currentObjectID }) {
  // ...

  return (
    <RelatedProducts
      recommendClient={recommendClient}
      indexName={indexName}
      objectIDs= {["937013s1134"]}
      itemComponent={RelatedItem}
      view={HorizontalSlider}
    />
  );
} */

/* <div>{item.title}</div>
<div>{item.description}</div> */

/* const RelatedItem2 = ({ item }) => (
  <SliderContext.Consumer>
    {({ onSelectSlide, currentSlide, elementRef }) => {
      const isActive = currentSlide && currentSlide.id === item;

      return (
        <div
          ref={elementRef}
          className={cx('item', {
            'item--open': isActive,
          })}
        >
          <img src={item.image_url} alt="" />
          <ShowDetailsButton onClick={() => onSelectSlide(item)} />
          {isActive && <Mark />}
        </div>
      );
    }}
  </SliderContext.Consumer>
); */

/* class App extends Component {
  render() {
    return (
      <div>
        <RelatedProducts
          recommendClient={recommendClient}
          indexName={indexName}
          objectIDs= {["937013s1134"]}
          itemComponent={RelatedItem2}
          />
      </div>
    );

  }

} */