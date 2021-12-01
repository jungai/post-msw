import { useEffect, useState } from "react";
import axios from "axios";
import { Song } from "./mocks/songs";
import { stringify } from "querystring";

const App = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");

  const getSongs = async () => {
    setIsLoading(true);
    const response = await axios.get<Song[]>(`/songs?name=${searchText}`);
    setSongs(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    (async () => {
      await getSongs();
    })();
  }, []);

  return (
    <div style={{ display: "grid", placeContent: "center", height: "100vh" }}>
      <div>
        <input
          placeholder="ค้นหาเพลง ...."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button disabled={!!!searchText} onClick={getSongs}>
          🔍
        </button>
      </div>
      <hr />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {songs.map((song) => (
            <li key={song.id}>
              🎵 {song.name} 👩‍🎤 {song.artist}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
