import './App.css';
import Navbar from './components/shared/NavBar';
import { Routes, Route, useParams} from 'react-router-dom';
import Home from './components/shared/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import NoMatch from './components/shared/NoMatch';
import FetchUser from './components/shared/FetchUser';
import ProtectedRoute from './components/shared/ProtectedRoute';
import Profile from './components/auth/Profile';
import SearchResults from './components/pages/SearchResults';
import EditProfile from './components/auth/EditProfile';
import Genres from './components/pages/Genres';
import MovieDetail from './components/pages/MovieDetail';
import Footer from './components/pages/Footer';
import Review from './components/pages/Review';
import PopularPotatoes from './components/pages/PopularPotatoes';
import PopularFries from './components/pages/PopularFries';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
//import About from './components/pages/About';
import GenreShow from './components/pages/GenreShow';
import MovieForm from './components/forms/MovieForm';
import SearchBar from './components/shared/SearchBar';
import About from './components/pages/About';
import ContactForm from './components/pages/ContactForm';
import LandingPage from './components/shared/LandingPage';
//import RateForm from './components/pages/RateForm';
//Fetch User: going to see if the user is logged in(valid user?)
//before we render our routes, it's going to check for user.
//prevents routes from getting rendered until check is done
//if fetchUser is in progress of checking App returns null;
//it doesn't care whether we have a user or not, it's just checking
//after done checking it will proceed with render
function App() {
  return (
    <div id='page-container'>
      <div id='content-wrap' >
      <Navbar />
      {/* When our app first mounts FetchUser Runs */}
      <FetchUser>
        <>
          <Routes>
            {/* Unprotected */}
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/privacy_policy' element={<PrivacyPolicy />}/>
            <Route path='/contact_us' element={<ContactForm />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/' element={<LandingPage />} />
            {/* <Route path='/home' element={<LandingPage />} /> */}
                {/* protected in routes inside of here you need to logged in*/}
                {/* else you go to login page*/}
            <Route element={<ProtectedRoute />}>
              <Route path='/home' element={<Home/>}/>
              <Route path='/SearchResults' element={<SearchResults yo={'Search'} />}/>
              <Route path='/Search' element={<SearchBar />}/>
              <Route path='/profile' element={<Profile />}/>
              <Route path='/edit_profile' element={<EditProfile />}/>
              <Route path='/genres' element={<Genres />}/>
              <Route path='/popular_potatoes' element={<PopularPotatoes/>}/>
              <Route path='/popular_fries' element={<PopularFries />}/>
              <Route path='/movies/:id' element={<MovieDetail />}/>
              <Route path='/review' element={<Review />} />
              <Route path='/genres/:name' element={<GenreShow />}/>
              <Route path='/movies/:id/edit' element={<MovieForm/>}/>
              <Route path='/movies/new' element={<MovieForm />} />
            </Route>
            <Route path='*' element={<NoMatch />}/>
          </Routes>
        </>
        </FetchUser>
        </div>
      <div id='footer'>
      <Footer />
</div>
    </div>
  );
}
export default App;