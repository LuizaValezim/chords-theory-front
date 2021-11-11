import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import * as React from 'react';
import {accessToken, accessChords} from "./Access.js";

import ChordC from "./components/chords/ChordC/index.js"; // Importanto combinações com a nota C (Chord I)
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
      color: theme.palette.getContrastText("#6096BA"),
      backgroundColor: "#274C77",
      borderRadius: 50,
      padding: 20,
      margin: 5,
      fontweight: "bold",
      '&:hover': {
        backgroundColor: "#6096BA",
      },
    }));

    const ChordsButtonSelected = styled(Button) (({ theme }) => ({
      color: theme.palette.getContrastText("#68B077"),
      backgroundColor: "#68B077",
      borderRadius: 50,
      padding: 20,
      margin: 5,
      fontweight: "bold",
      '&:hover': {
        backgroundColor: "#68B077",
      },
    }));

    const YesButton = styled(Button) (({ theme }) => ({
      color: theme.palette.getContrastText("#68B077"),
      backgroundColor: "#68B077",
      borderRadius: 50,
      padding: 20,
      margin: 5,
      fontweight: "bold",
      '&:hover': {
        backgroundColor: "#68B077",
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
                <h2> Bem-vindo/a ao Chords Theory! </h2>
                <p> Está querendo compor uma música, mas não sabe por onde começar? 
                    Não se preocupe, vou te ajudar a escolher a melhor combinação de acordes usando teoria musical. Está pronto?</p>
                <Link to="/Main" style={{ textDecoration: 'none' }}> <YesButton variant="contained">Sim!</YesButton> </Link>
              </div>
            </Route>



            {/* Main Route */}
            <Route path="/Main">
              <div className="content">
                  <div className="chords"> 

                    <h3> Escolha um acorde para começar:</h3>

                    <div className="chordsButton1">
                        <Link to="/ChordC" style={{ textDecoration: 'none' }}> <ChordsButton variant="contained">C</ChordsButton> </Link>
                        <Link to="/ChordD" style={{ textDecoration: 'none' }}> <ChordsButton variant="contained" href="#text-buttons">D</ChordsButton> </Link>
                        <Link to="/ChordE" style={{ textDecoration: 'none' }}> <ChordsButton variant="contained" href="#text-buttons">E</ChordsButton> </Link>
                        <Link to="/ChordF" style={{ textDecoration: 'none' }}> <ChordsButton variant="contained" href="#text-buttons">F</ChordsButton> </Link>
                    </div>
                    <div className="chordsButton2">
                        <Link to="/ChordG" style={{ textDecoration: 'none' }}> <ChordsButton variant="contained" href="#text-buttons">G</ChordsButton> </Link>
                        <Link to="/ChordH" style={{ textDecoration: 'none' }}> <ChordsButton variant="contained" href="#text-buttons">A</ChordsButton> </Link>
                        <Link to="/ChordI" style={{ textDecoration: 'none' }}> <ChordsButton variant="contained" href="#text-buttons">B</ChordsButton> </Link>
                    </div>

                  </div> 
              </div>
            </Route>   



            {/* Chord C */}
            <Route path="/ChordC">
              <div className="content">
              <div className="chords"> 
                  <h3> Ótima escolha! Agora, selecione o segundo acorde </h3>
                  
                  <div className="chordsButton1">
                    <div className="groupByProbability">
                      <Link to="/ChordC" style={{ textDecoration: 'none' }}> <ChordsButton variant="contained">C</ChordsButton> </Link>
                      <h3> Probabilidade: </h3>
                    </div>
                    <div className="groupByProbability">
                      <Link to="/ChordC" style={{ textDecoration: 'none' }}> <ChordsButton variant="contained">D</ChordsButton> </Link>
                      <h3> Probabilidade: </h3>
                    </div>
                    <div className="groupByProbability">
                      <Link to="/ChordC" style={{ textDecoration: 'none' }}> <ChordsButton variant="contained">E</ChordsButton> </Link>
                      <h3> Probabilidade: </h3>
                    </div>
                    <div className="groupByProbability">
                      <Link to="/ChordC" style={{ textDecoration: 'none' }}> <ChordsButton variant="contained">F</ChordsButton> </Link>
                      <h3> Probabilidade: </h3>
                    </div>
                  </div>

                  <div className="chordsButton2">
                    <div className="groupByProbability">
                      <Link to="/ChordC" style={{ textDecoration: 'none' }}> <ChordsButtonSelected variant="contained">G</ChordsButtonSelected> </Link>
                      <h3> Probabilidade: </h3>
                    </div>
                    <div className="groupByProbability">
                      <Link to="/ChordC" style={{ textDecoration: 'none' }}> <ChordsButton variant="contained">A</ChordsButton> </Link>
                      <h3> Probabilidade: </h3>
                    </div>
                    <div className="groupByProbability">
                      <Link to="/ChordC" style={{ textDecoration: 'none' }}> <ChordsButton variant="contained">B</ChordsButton> </Link>
                      <h3> Probabilidade: </h3>
                    </div>
                  </div>

                </div> 
              </div>
            </Route>

          </BrowserRouter>
        </div>
  );
}

export default App;