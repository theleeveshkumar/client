//Saved.js
import React, {
     useState,
     useEffect
 } from 'react';
 import axios from 'axios';
 
 const Saved = () => {
     const [savedPodcasts, setSavedPodcasts] = useState([]);
 
     useEffect(() => {
         axios.get('http://localhost:5000/podcasts')
             .then(response => {
                 // Filter the podcasts that are saved
                 const savedPodcasts = response.data.filter(
                     podcast => podcast.saved);
                 setSavedPodcasts(savedPodcasts);
             })
             .catch(error => console.error(
                 'Error fetching saved podcasts:', error));
     }, []);
 
     const handleRemove = (id) => {
         axios.put(`http://localhost:5000/podcasts/${id}`,
             { saved: false })
             .then(response => {
                 console.log(`Successfully removed podcast with ID: ${id}`);
                 // Update the saved state locally
                 setSavedPodcasts(prevSavedPodcasts => {
                     return prevSavedPodcasts.filter(
                         podcast => podcast._id !== id);
                 });
             })
             .catch(error => console.error(
                 `Error removing podcast with ID ${id}:`, error));
     };
 
     return (
         <div className="saved">
             <h1>Saved Podcasts</h1>
             <div className='home'>
                 {savedPodcasts.map(podcast => (
                     <div key={podcast._id} className="podcast">
                         <h2>{podcast.title}</h2>
                         <p>{podcast.description}</p>
                         <audio controls>
                             <source src={podcast.audioFile} type="audio/mp3" />
                             Your browser does not support the audio element.
                         </audio>
                         <button id="remove_btn"
                             onClick={() => handleRemove(podcast._id)}>
                             Remove
                         </button>
                     </div>
 
                 ))}</div>
         </div>
     );
 };
 
 export default Saved;
 