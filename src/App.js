import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "./store/actions/gamesAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  });
  return <div className="App">Hello Ignite</div>;
}

export default App;
