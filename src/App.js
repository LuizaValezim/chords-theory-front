import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { BrowserRouter, Route } from 'react-router-dom';
import { useEffect, useState } from "react";
import * as React from 'react';
import {accessToken, accessChords} from "./Access.js";

// import ChordC from './component/chords/ChordC/index.js'; // Importanto combinações com a nota C (Chord I)
import "./App.css";

function App() {
    const [chords, setChords] = useState([]);
    console.log(chords);

    useEffect(() => {
        accessToken().then((token) => {
                      accessChords(token)
                          .then((chr) => setChords(chr))
    })}, []);


    const ChordsButton = styled(Button) (({ theme }) => ({
      color: theme.palette.getContrastText("#F24150"),
      backgroundColor: "#F24150",
      borderRadius: 50,
      padding: 20,
      margin: 5,
      fontweight: "bold",
      '&:hover': {
        backgroundColor: "#F24150",
      },
    }));

    return (
      <div className="main">
        <div className="title">
            <h1> Chords </h1>
            <h1> Theory </h1>
        </div>

        <div className="content">
          <h2> Escolha um acorde para começar:</h2>
              {/* <BrowserRouter>
                <Route path="/component/chords/ChordC" component={ChordC} />
              </BrowserRouter> */}
        </div>
      </div>
  );
}

export default App;