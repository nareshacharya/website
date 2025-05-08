
import './About.css';

const aboutTiles = [
  {
    label: 'Wildlife Photographer',
    caption: 'Shot in Kabini, 2023',
    image: '/images/about/wildlife.jpg'
  },
  {
    label: 'Avid Cyclist',
    caption: '400km Ladakh cycling expedition',
    image: '/images/about/cycling.jpg'
  },
  {
    label: 'World Explorer',
    caption: 'From Kenya’s savannah to Bhutan’s peaks',
    image: '/images/about/travel.jpg'
  },
  {
    label: 'Bike Tourer',
    caption: 'Rode 1300km across South India',
    image: '/images/about/biketour.jpg'
  },
  {
    label: 'Cajon Drummer',
    caption: 'Jamming with local bands on weekends',
    image: '/images/about/cajon.jpg'
  },
  {
    label: 'Fitness Enthusiast',
    caption: 'Strength & discipline, daily',
    image: '/images/about/fitness.jpg'
  },
  {
    label: 'Nature Lover',
    caption: 'Camping, hiking, and forest walks',
    image: '/images/about/nature.jpg'
  },
  {
    label: 'Creative Soul',
    caption: 'Designing experiences that move people',
    image: '/images/about/creative.jpg'
  }
];

const About = () => {
  return (
    <section className="about-grid">
      <h1>Beyond Design</h1>
      <div className="grid">
        {aboutTiles.map((tile, i) => (
          <div className="tile" key={i}>
            <img src={tile.image} alt={tile.label} />
            <div className="overlay">
              <h3>{tile.label}</h3>
              <p>{tile.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
