import './App.css';
import MovieList from './Components/MovieList'
import { useState } from 'react';
import Filter from './Components/Filter';
import AddMovie from './Components/Add';
import Trailer from './Components/Trailer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
 
function App() {
  const [movie,setMovie]=useState( [
    {
      'id':"gepfoerb5n8jq5",
    'title': "The Hunger Games",
    'description': "The nation of Panem is divided into 12 districts, ruled from the Capitol. As punishment for a failed revolt, each district is forced to select two tributes, one boy and one girl between the ages of 12 and 18, to fight to the death in the annual Hunger Games until there is only one survivor.",
    'posterUrl': "https://fr.web.img5.acsta.net/medias/nmedia/18/85/51/91/20018884.jpg",
    'trailerLink': "https://www.youtube.com/embed/mfmrPu43DF8",
    'rating': "5"
    },
    {
      'id':"hlskfith7a8kl1",
    'title': "Divergente",
    'description': "In the futuristic city of dystopian Chicago, society is divided into five factions: Abnegation (the selfless), Amity (the peaceful), Candor (the honest), Dauntless (the brave), and Erudite (the intellectual). The remaining population are the Factionless, who have no status or privilege in this society. When children reach the age of 16, they undergo a serum-induced psychological aptitude test which indicates their best-suited faction, but they are allowed to choose any faction as their permanent group at the subsequent Choosing Ceremony.",
    'posterUrl': "https://media.senscritique.com/media/000013387757/source_big/Divergente.jpg",
    'trailerLink': "https://www.youtube.com/embed/sutgWjz10sM",
    'rating': "3.4"
    },
    {
      'id':"azhkngds0v8gm9",
      'title': "The Kissing Booth 3",
      'description': "After going on a road trip post-graduation, Elle still hasn't made her mind up about whether to go to Berkeley or Harvard – although Noah is already planning to get an apartment off-campus for the two of them. When Noah and Lee's parents announce they're selling their beach house where they all spent their childhoods, Elle, Noah, Lee and Lee's girlfriend Rachel offer to spend the summer there to help out with the sale.",
      'posterUrl': "https://images-na.ssl-images-amazon.com/images/I/810TMYI7lbS.jpg",
      'trailerLink': "https://www.youtube.com/embed/5fKn0Dhj64w",
      'rating': "1.3"
      },
    ])
    const [searchMovie,setSearchMovie]= useState(movie)
    const handleSearch=(search)=>{
        setSearchMovie(movie.filter((item) => { return item.title.toLowerCase().includes(search.toLowerCase()); }))
        //setSearchMovie(movie.filter((item) => { return item.rating === search}));
      }
 
    const addMovie=(film)=>{
      setMovie([...movie, film]);
      }

  return (
    <>
    
      <Router>
      <div>
        <ul>
        <li>
            <Link to="/">Home</Link>
          </li>
          
        </ul>

        <hr />

        <Switch>
        <Route exact path="/">
        <br></br>
      <Filter movies={movie} FnSearch={handleSearch} ></Filter>
      <br></br>
      
      
      <MovieList movies={searchMovie}></MovieList>
      <br></br>
              <AddMovie addMovie={addMovie}></AddMovie>
              
            </Route>
            
            <Route path="/Trailer/:id">
        <Trailer  movies={movie}></Trailer>
        </Route>
          </Switch>
      </div>
      </Router>
      
          
        </>
    
  );
}
 
export default App;