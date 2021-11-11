import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import * as React from 'react';
import {accessToken, accessChords} from "./Access.js";

// import ChordC from './component/chords/ChordC/index.js'; // Importanto combinações com a nota C (Chord I)
import "./App.css";

function GetInfo(sufix){
    const [chords, setChords] = useState([]);

    useEffect(() => {
        accessToken().then((token) => {
                      accessChords(token, sufix)
                          .then((chr) => setChords(chr))
        })}, []);

    console.log(chords);
    return chords;
}

// function InfoByChord(firstChord){
//     var sufix = "nodes?cp=" + fistChord; // The following request shows the chords that are most likely to come after I

//     var chords = GetInfo(sufix);
//     var secondChord = chords[0];
//     sufix = sufix + "," + secondChord;
// }

function App() {
    var sufix = "nodes?cp=1"; // The following request shows the chords that are most likely to come after I
    var chords = GetInfo(sufix);

    // console.log(chords[0]?.probability);

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

          <BrowserRouter>
            <Route path="/" exact>

              <div className="content">
                <div className="chords"> 
                  <h2> Escolha um acorde para começar:</h2>
                  <div className="chordsButton1">
                      <Link to="/about" style={{ textDecoration: 'none' }}> <ChordsButton variant="contained">C</ChordsButton> </Link>
                      <ChordsButton variant="contained" href="#text-buttons">D</ChordsButton>
                      <ChordsButton variant="contained" href="#text-buttons">E</ChordsButton>
                      <ChordsButton variant="contained" href="#text-buttons">F</ChordsButton>
                  </div>
                  <div className="chordsButton2">
                      <ChordsButton variant="contained" href="#text-buttons">G</ChordsButton>
                      <ChordsButton variant="contained" href="#text-buttons">A</ChordsButton>
                      <ChordsButton variant="contained" href="#text-buttons">B</ChordsButton>
                  </div>
                </div> 
              </div>

            </Route>

            <Route path="/about">
                <h1> Funcionou! </h1>
            </Route>

          </BrowserRouter>
        </div>
  );
}

export default App;