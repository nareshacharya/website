
import './About.css';
import { useState } from 'react';

const aboutTiles = [
  {
    label: 'Wildlife Photographer',
    caption: 'Shot in Masai Mara,Kenya, 2025',
    image: process.env.PUBLIC_URL + '/images/about/wildlife.jpg'
  },
  {
    label: 'Avid Cyclist',
    caption: '200km Heaven & Hell, Brevet',
    image: process.env.PUBLIC_URL + '/images/about/cycling.jpg'
  },
  {
    label: 'World Explorer',
    caption: 'Beauty of Zurich, Switzerland',
    image: process.env.PUBLIC_URL + '/images/about/travel.jpg'
  },
  {
    label: 'Bike Tourer',
    caption: 'Rode 1600km across Switzerland, Italy, Austria and Germany',
    image: process.env.PUBLIC_URL + '/images/about/biketour.jpg'
  },
  {
    label: 'Fitness Enthusiast',
    caption: 'Strength & discipline, daily',
    image: process.env.PUBLIC_URL + '/images/about/fitness.jpg'
  },
  {
    label: 'Nature Lover',
    caption: 'Camping, hiking, and forest walks',
    image: process.env.PUBLIC_URL + '/images/about/nature.jpg'
  },
];

const About = () => {
  const [activeTile, setActiveTile] = useState(null);

  return (
    <section className="about-grid">
      <h1>Things I do Beyond Design</h1>
      <div className="grid">
        {aboutTiles.map((tile, i) => (
          <div className="tile" key={i} onClick={() => setActiveTile(tile)}>
            <img src={tile.image} alt={tile.label} />
            <div className="overlay">
              <h3>{tile.label}</h3>
              <p>{tile.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {activeTile && (
        <div className="modal" onClick={() => setActiveTile(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close" onClick={() => setActiveTile(null)}>×</button>
            <img src={activeTile.image} alt={activeTile.label} />
            <h2>{activeTile.label}</h2>
            <p>{activeTile.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
