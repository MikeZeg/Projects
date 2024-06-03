import { useEffect, useState } from 'react';
import './App.css';
import { Auth } from './components/auth';
import { db, auth, storage } from './config/firebase';
import { 
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { update } from 'firebase/database';
import { ref, uploadBytes } from "firebase/storage";

function App() {
  const [movieList, setMovieList] = useState([]);

//New movie State
  const [newMovieTitle, setNewMovieTitle] = useState("");
  const [newReleaseData, setnewReleaseData] = useState(0);
  const [isNewMovieOscar, setIsNewMovieOscar] = useState(false);

//Update title
  const [updateTitle, setUpdatedTitle] = useState("");

//File upload state
const [fileUpload, setfileUpload] = useState(null)

  const moviesCollectionRef = collection(db, "movies");

  const getMovieList = async () => {
    try {
      const data = await getDocs(moviesCollectionRef);
      const filteredData = data.docs.map((doc)=>({
        ...doc.data(),
        id: doc.id,
      }));
      setMovieList(filteredData);
    } catch (err){
      console.error(err)
    }
  };

//delete movie
const deleteMovie = async (id) => {
  const movieDoc = doc(db, "movies", id );
  await deleteDoc(movieDoc)
  getMovieList();
};
//Update movie
const updateMovieTitle = async (id) => {
  const movieDoc = doc(db, "movies", id );
  await updateDoc(movieDoc, { title: updateTitle})
  getMovieList();
};

  useEffect(() => {
    getMovieList();
  }, []);

// Submit data from User
  const onSubmitMovie = async () => {
    try {
      await addDoc(moviesCollectionRef, {
        title:newMovieTitle, 
        releaseDate: newReleaseData,
        receivedAnOscar: isNewMovieOscar,
        userId: auth?.currentUser?.uid
      });
      getMovieList();
    } catch (err) {
      console.error(err);
    }
  }
  // Upload File
  const uploadFile = async () => {
    if(!fileUpload) return;
    const fileFolderRef = ref(storage, `projectFiles/${fileUpload.name}`);
    try {
      await uploadBytes(fileFolderRef, fileUpload);
    }catch(err){
      console.error(err)
    }
  }

  return ( 
    <div className='App'>
      <Auth/>

      <div>
        <input 
          placeholder='Movie title...'
          onChange={(e) => setNewMovieTitle(e.target.value)}
        />
        <input 
          placeholder='Release Date...'
          onChange={(e) => setnewReleaseData(Number(e.target.value))}
          type='number'
        />
        <input 
          type='checkbox'
          checked = {isNewMovieOscar}
          onChange={(e) => setIsNewMovieOscar(e.target.checked)}
        />
        <label>Received an Oscar</label>
        <button onClick={onSubmitMovie}>Submit Movie</button>
      </div>

      <div>
        {movieList.map((movie)=>(
          <div>
            <h1 style={{color: movie.receivedAnOscar ? 'green' : 'red'}}>{movie.title}</h1>
            <p> Date: {movie.releaseDate}</p>
            <button onClick={() => deleteMovie(movie.id)}>Delete Movie</button>

            <input placeholder='New title...' onChange={(e)=> setUpdatedTitle(e.target.value)}/>
            <button onClick={()=> updateMovieTitle(movie.id)} >Update title</button>
          </div>
        ))}
      </div>

      <input 
        type='file'
        onChange={(e)=> setfileUpload(e.target.files[0])}
      />
      <button onClick={uploadFile}>Upload File</button>
    </div>
)}

export default App;
