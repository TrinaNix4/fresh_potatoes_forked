import axios from "axios";
import { useEffect, useState } from "react";
import "../CssFIles/card.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Genres = () => {
  const [genres, setGenres] = useState([]);
  const { i18n, t } = useTranslation(["common"]);

  return (
    <div className="App1">
      <div className="searchall">
        <div className="sline"></div>
        <h1 className="searchall2"> {t("common:genres")}</h1>
        <div className="bline"></div>
      </div>
      <div className="rowdata">
        <div className="wrapper">
          {/* ADDED IN IN-LINE STYLING TO FIX, NOT SURE WHERE THIS GOES IN THE CSS FILE */}
          <div
            className="cards "
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              width: "100%",
              height: "100%",
            }}
          >
            <Link to={`/genres/28`}>
              <figure
                className="card "
                style={{
                  width: "300px",
                  height: "175px",
                  borderRadius: "25px",
                }}
              >
                <div className="centered">Action</div>
                <img
                  alt="action"
                  className="back"
                  src="https://image.tmdb.org/t/p/w500/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg"
                ></img>
              </figure>
            </Link>
            <Link to={`/genres/12`}>
              <figure
                className="card "
                style={{
                  width: "300px",
                  height: "175px",
                  borderRadius: "25px",
                }}
              >
                <div className="centered">Adventure</div>
                <img
                  alt="adventure"
                  className="back"
                  src="https://image.tmdb.org/t/p/w500/aEGiJJP91HsKVTEPy1HhmN0wRLm.jpg"
                ></img>
              </figure>
            </Link>
            <Link to={`/genres/16`}>
              <figure
                className="card "
                style={{
                  width: "300px",
                  height: "175px",
                  borderRadius: "25px",
                }}
              >
                <div className="centered">Animation</div>
                <img
                  alt="animation"
                  className="back"
                  src="https://image.tmdb.org/t/p/w500/fOy2Jurz9k6RnJnMUMRDAgBwru2.jpg"
                ></img>
              </figure>
            </Link>
            <Link to={`/genres/35`}>
              <figure
                className="card "
                style={{
                  width: "300px",
                  height: "175px",
                  borderRadius: "25px",
                }}
              >
                <div className="centered">Comedy</div>
                <img
                  alt="comedy"
                  className="back"
                  src="https://image.tmdb.org/t/p/w500/gc3QFVNWeTCk2J7XuDIPPoGUWNx.jpg"
                ></img>
              </figure>
            </Link>
            <Link to={`/genres/80`}>
              <figure
                className="card "
                style={{
                  width: "300px",
                  height: "175px",
                  borderRadius: "25px",
                }}
              >
                <div className="centered">Crime</div>
                <img
                  alt="crime"
                  className="back"
                  src="https://image.tmdb.org/t/p/w500/2n95p9isIi1LYTscTcGytlI4zYd.jpg"
                ></img>
              </figure>
            </Link>
            <Link to={`/genres/99`}>
              <figure
                className="card "
                style={{
                  width: "300px",
                  height: "175px",
                  borderRadius: "25px",
                }}
              >
                <div className="centered">Documentary</div>
                <img
                  alt="documentary"
                  className="back"
                  src="https://image.tmdb.org/t/p/w500/x8i57R0I8e4URRJ4MzK0YWSV48W.jpg"
                ></img>
              </figure>
            </Link>
            <Link to={`/genres/18`}>
              <figure
                className="card "
                style={{
                  width: "300px",
                  height: "175px",
                  borderRadius: "25px",
                }}
              >
                <div className="centered">Drama</div>
                <img
                  alt="drama"
                  className="back"
                  src="https://image.tmdb.org/t/p/w500/i9rEpTqC6aIQOWOc4PDEEAE3hFe.jpg"
                ></img>
              </figure>
            </Link>
            <Link to={`/genres/10751`}>
              <figure
                className="card "
                style={{
                  width: "300px",
                  height: "175px",
                  borderRadius: "25px",
                }}
              >
                <div className="centered">Family</div>
                <img
                  alt="family"
                  className="back"
                  src="https://image.tmdb.org/t/p/w500/3G1Q5xF40HkUBJXxt2DQgQzKTp5.jpg"
                ></img>
              </figure>
            </Link>
            <Link to={`/genres/14`}>
              <figure
                className="card "
                style={{
                  width: "300px",
                  height: "175px",
                  borderRadius: "25px",
                }}
              >
                <div className="centered">Fantasy</div>
                <img
                  alt="fantasy"
                  className="back"
                  src="https://image.tmdb.org/t/p/w500/wdjdHBDwmynWUrJcNzS24uegvK5.jpg"
                ></img>
              </figure>
            </Link>
            <Link to={`/genres/36`}>
              <figure
                className="card "
                style={{
                  width: "300px",
                  height: "175px",
                  borderRadius: "25px",
                }}
              >
                <div className="centered">History</div>
                <img
                  alt="history"
                  className="back"
                  src="https://image.tmdb.org/t/p/w500/xGrTm3J0FTafmuQ85vF7ZCw94x6.jpg"
                ></img>
              </figure>
            </Link>
            <Link to={`/genres/27`}>
              <figure
                className="card "
                style={{
                  width: "300px",
                  height: "175px",
                  borderRadius: "25px",
                }}
              >
                <div className="centered">Horror</div>
                <img
                  alt="horror"
                  className="back"
                  src="https://image.tmdb.org/t/p/w500/33wnBK5NxvuKQv0Cxo3wMv0eR7F.jpg"
                ></img>
              </figure>
            </Link>
            <Link to={`/genres/10402`}>
              <figure
                className="card "
                style={{
                  width: "300px",
                  height: "175px",
                  borderRadius: "25px",
                }}
              >
                <div className="centered">Music</div>
                <img
                  alt="music"
                  className="back"
                  src="https://image.tmdb.org/t/p/w500/6mJrgL7Mi13XjJeGYJFlD6UEVQw.jpg"
                ></img>
              </figure>
            </Link>
            <Link to={`/genres/9648`}>
              <figure
                className="card "
                style={{
                  width: "300px",
                  height: "175px",
                  borderRadius: "25px",
                }}
              >
                <div className="centered">Mystery</div>
                <img
                  alt="mystery"
                  className="back"
                  src="https://image.tmdb.org/t/p/w500/xicKILMzPn6XZYCOpWwaxlUzg6S.jpg"
                ></img>
              </figure>
            </Link>
            <Link to={`/genres/10749`}>
              <figure
                className="card "
                style={{
                  width: "300px",
                  height: "175px",
                  borderRadius: "25px",
                }}
              >
                <div className="centered">Romance</div>
                <img
                  alt="romance"
                  className="back"
                  src="https://image.tmdb.org/t/p/w500/4rsomWxlqnHt3muGYK06auhOib6.jpg"
                ></img>
              </figure>
            </Link>
            <Link to={`/genres/878`}>
              <figure
                className="card "
                style={{
                  width: "300px",
                  height: "175px",
                  borderRadius: "25px",
                }}
              >
                <div className="centered">Science Fiction</div>
                <img
                  alt="science fiction"
                  className="back"
                  src="https://image.tmdb.org/t/p/w500/x747ZvF0CcYYTTpPRCoUrxA2cYy.jpg"
                ></img>
              </figure>
            </Link>
            <Link to={`/genres/10770`}>
              <figure
                className="card "
                style={{
                  width: "300px",
                  height: "175px",
                  borderRadius: "25px",
                }}
              >
                <div className="centered">TV Movie</div>
                <img
                  alt="tv movie"
                  className="back"
                  src="https://image.tmdb.org/t/p/w500/fXFQnOSbybaU9h2kJ3jtRUU4OpA.jpg"
                ></img>
              </figure>
            </Link>
            <Link to={`/genres/53`}>
              <figure
                className="card "
                style={{
                  width: "300px",
                  height: "175px",
                  borderRadius: "25px",
                }}
              >
                <div className="centered">Thriller</div>
                <img
                  alt="thriller"
                  className="back"
                  src="https://image.tmdb.org/t/p/w500/5P8SmMzSNYikXpxil6BYzJ16611.jpg"
                ></img>
              </figure>
            </Link>
            <Link to={`/genres/10752`}>
              <figure
                className="card "
                style={{
                  width: "300px",
                  height: "175px",
                  borderRadius: "25px",
                }}
              >
                <div className="centered">War</div>
                <img
                  alt="war"
                  className="back"
                  src="https://image.tmdb.org/t/p/w500/kdbLf3aTQsEXqYlH9vA4fzmnSFz.jpg"
                ></img>
              </figure>
            </Link>
            <Link to={`/genres/37`}>
              <figure
                className="card "
                style={{
                  width: "300px",
                  height: "175px",
                  borderRadius: "25px",
                }}
              >
                <div className="centered">Western</div>
                <img
                  alt="western"
                  className="back"
                  src="https://image.tmdb.org/t/p/w500/i5dUmY2xRzgkmjHJYKNj8kPX1Xx.jpg"
                ></img>
              </figure>
            </Link>
          </div>
        </div>
      </div>
      {/* {JSON.stringify(genres)} */}
    </div>
  );
};
export default Genres;
