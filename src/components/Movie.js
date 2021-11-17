import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ key, medium_cover_image, title, summary, genres }){
  return (
    <div key={key}>
      <img src={medium_cover_image} alt={title} />
      <h2><Link to="/movie">{title}</Link></h2>
      <p>{summary}</p>
      <ul>  
        {genres.map((genre, i)=><li key={i}>{genre}</li>)}
      </ul>
    </div>
  );
}


Movie.propTypes = {
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}


export default Movie;