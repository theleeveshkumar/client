//Home.js
import React, {
     useState,
     useEffect
 } from 'react';
 import axios from 'axios';
 
 const Home = () => {
     const [podcasts, setPodcasts] = useState([]);
 
     useEffect(() => {
         axios.get('http://localhost:5000/podcasts')
             .then(response => setPodcasts(response.data))
             .catch(error => console.error(
                 'Error fetching podcasts:', error));
     }, []);
 
     const handleSave = (id) => {
         // Call PUT function to save the podcast
         axios.put(`http://localhost:5000/podcasts/${id}`,
             { saved: true })
             .then(response => {
                 console.log(`Successfully saved podcast with ID: ${id}`);
                 // Update the saved state locally
                 setPodcasts(prevPodcasts => {
                     return prevPodcasts.map(podcast => {
                         if (podcast._id === id) {
                             return { ...podcast, saved: true };
                         }
                         return podcast;
                     });
                 });
             })
             .catch(error => console.error(
                 `Error saving podcast with ID ${id}:`, error));
     };
 
     return (
         <div className="home">
             {podcasts.map(podcast => (
                 <div key={podcast._id} className="podcast">
                     <h2>{podcast.title}</h2>
                     <p>{podcast.description}</p>
                     <audio controls>
                         <source src={podcast.audioFile} type="audio/mp3" />
                         Your browser does not support the audio element.
                     </audio>
                     <button
                         onClick={() => handleSave(podcast._id)}
                         disabled={podcast.saved}>
                         {podcast.saved ? 'Saved' : 'Save'}
                     </button>
                 </div>
             ))}
         </div>
     );
 };
 
 export default Home;
 