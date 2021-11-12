import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { styled } from '@mui/material/styles';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import * as React from 'react';
import {accessToken, accessChords} from "./Access.js";

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

// EU ESTAVA TENTANDO AUTOMATIZAR ESSE PROCESSO, MAS NÃO SEI O QUÃO MELHOR SERIA

// var numByChord = {
//   C: "1",
//   D: "2",
//   E: "3",
//   F: "4",
//   G: "5",
//   A: "6",
//   B: "7"
// };

// var listChords = {
//   first: [],
//   second: [],
//   third: [],
//   fourth: [],
// };

// function InfoByChord(firstChord){
//   numChord = numByChord[firstChord]
//   sufix = sufix + numChord;
//   finalProb = 1;
//   listChords.first.push(numChord);

//   for (i in range(0,3)){
//     chords = GetInfo(sufix);
    
//     // Appending the second chord
//     chord = chords[i].chordID;
//     prob = chords[i].probability;
//     finalProb = finalProb * prob;
//     listChords[i].push(chord)
//     sufix = sufix + ',' + chord;

//     // Appending the third chord
//     chord = chords[0].chordID;
//     prob = chords[0].probability;
//     finalProb = finalProb * prob;
//     listChords[i].push(chord)
//   }
// }

function App() {
    var nums;
    var sufix;
    var chords;
    var finalProb;

    sufix = "nodes?cp="; // The following request shows the chords that are most likely to come after the fist chosen chord
    nums = '1,5,6';
    sufix = sufix + nums;
    chords = GetInfo(sufix);
    finalProb = 1 * 0.252 * 0.342 * 0.646;
    console.log(chords);
    console.log(chords[0]?.probability);

    const ChordsButton = styled(Button) (({ theme }) => ({
      color: theme.palette.getContrastText("#6096BA"),
      backgroundColor: "#274C77",
      borderRadius: 50,
      padding: 20,
      margin: 5,
      fontFamily: [
        'Poppins',
        '-apple-system',
        'BlinkMacSystemFont',
        'Rubik',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      fontweight: "bold",
      '&:hover': {
        backgroundColor: "#6096BA",
      },
    }));

    const ChordsButtonSelected = styled(Button) (({ theme }) => ({
      color: theme.palette.getContrastText("#F24150"),
      backgroundColor: "#F24150",
      borderRadius: 50,
      padding: 20,
      margin: 5,
      fontFamily: [
        'Poppins',
        '-apple-system',
        'BlinkMacSystemFont',
        'Rubik',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      fontweight: "bold",
      '&:hover': {
        backgroundColor: "#FF8C96",
      },
    }));

    const YesButton = styled(Button) (({ theme }) => ({
      color: theme.palette.getContrastText("#F24150"),
      backgroundColor: "#F24150",
      borderRadius: 10,
      padding: 15,
      margin: 12,
      fontFamily: [
        'Poppins',
        '-apple-system',
        'BlinkMacSystemFont',
        'Rubik',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      fontweight: "bold",
      '&:hover': {
        backgroundColor: "#FF8C96",
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
                    Não se preocupe, vou te ajudar a escolher a melhor combinação de acordes usando teoria musical.</p>
                <Link to="/Main" style={{ textDecoration: 'none' }}> <YesButton variant="contained">Começar</YesButton> </Link>
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
                <h2> Ótima escolha! </h2>
                  <div className="textWithChord">
                    <h3> Essas são as combinações mais prováveis usando o acorde </h3>
                    <ChordsButtonSelected variant="contained">C</ChordsButtonSelected> 
                  </div>
                  
                  
                  <div className="chordsButton3">
                    <h4> A primeira combinação mais provável, será: </h4>
                    <div className="groupByProbability">
                      <Link to="/songs-with-G-F-Am-Em" style={{ textDecoration: 'none' }}> 
                      <ChordsButton variant="contained">G</ChordsButton> 
                      <ChordsButton variant="contained">F</ChordsButton>
                      <ChordsButton variant="contained">Am</ChordsButton>
                      <ChordsButton variant="contained">Em</ChordsButton>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="chordsButton3">
                    <h4> A segunda combinação mais provável, será: </h4>
                    <div className="groupByProbability">
                      <Link to="/songs-with-G-F-Am-Em" style={{ textDecoration: 'none' }}> 
                      <ChordsButton variant="contained">G</ChordsButton> 
                      <ChordsButton variant="contained">F</ChordsButton>
                      <ChordsButton variant="contained">Am</ChordsButton>
                      <ChordsButton variant="contained">Em</ChordsButton>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="chordsButton3">
                    <h4> A terceira combinação mais provável, será: </h4>
                    <div className="groupByProbability">
                      <Link to="/songs-with-G-F-Am-Em" style={{ textDecoration: 'none' }}> 
                      <ChordsButton variant="contained">G</ChordsButton> 
                      <ChordsButton variant="contained">F</ChordsButton>
                      <ChordsButton variant="contained">Am</ChordsButton>
                      <ChordsButton variant="contained">Em</ChordsButton>
                      </Link>
                    </div>
                  </div>
                  <h5> Clicando em alguma combinação, você poderá ver as músicas que também a utilizam. </h5>

                </div> 
              </div>
            </Route>

          </BrowserRouter>
        </div>
  );
}

export default App;