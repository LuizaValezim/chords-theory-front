import Button from '@mui/material/Button';
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

// EU ESTAVA TENTANDO AUTOMATIZAR ESSE PROCESSO, MAS NÃO FUNCIONA @_@

// var listChords = {
//   "1": [],
//   "2": [],
//   "3": [],
//   "4": [],
//   "5": [],
//   "6": [],
//   "7": [],
// };

// var listC = [];
// var listD = [];
// var listE = [];
// var listF = [];
// var listG = [];
// var listA = [];
// var listB = [];


// function InfoByChord(firstChord){
//   var sufix = "nodes?cp="; // The following request shows the chords that are most likely to come after the fist chosen chord
//   var finalProb = 1;
//   var list;
//   sufix = sufix + firstChord;
  
//   for (var i in [0,1,2,3]){
//     var chords = GetInfo(sufix);
    
//     // Appending the second chord
//     var chord = chords[i]?.chord_ID;
//     var prob = chords[i]?.probability;
//     finalProb = finalProb * prob;
//     sufix = sufix + ',' + chord;
    
//     // Appending the third chord
//     chord = chords[0]?.chord_ID;
//     prob = chords[0]?.probability;
//     finalProb = finalProb * prob;
//     list.push(chord)
//     sufix = sufix + ',' + chord;
    
    
//     // Appending the forth chord
//     chord = chords[0]?.chord_ID;
//     prob = chords[0]?.probability;
//     finalProb = finalProb * prob;
//     list.push(chord)
//   }
  
//   if (firstChord === "1"){ listC = list; };
//   if (firstChord === "2"){ listD = list; };
//   if (firstChord === "3"){ listE = list; };
//   if (firstChord === "4"){ listF = list; };
//   if (firstChord === "5"){ listG = list; };
//   if (firstChord === "6"){ listA = list; };
//   if (firstChord === "7"){ listB = list; };
// }

var dictC = {
  first: ["C", "G", "Am", "F", "2,4%"], // 2,4% das músicas do banco de dados possuem essa combinação
  second: ["C", "G", "F", "C", "1,5%"], // 1,5% das músicas do banco de dados possuem essa combinação
  third: ["C", "F", "C", "F", "1,2%"], // 1,2% das músicas do banco de dados possuem essa combinação
};
var dictD = {
  first: ["D", "A", "Bm", "G", "2,4%"],
  second: ["D", "G", "A", "D", "1,2%"],
  third: ["D", "Em", "Bm", "G", "0.27%"],
};
var dictE = {
  first: ["Em", "F", "G", "Am", "0,74%"],
  second: ["Em", "Am", "G", "F", "0,31%"],
  third: ["E", "Am", "F", "C", "0.19%"],
};
var dictF = {
  first: ["F", "C", "G", "Am", "2,3%"],
  second: ["F", "G", "Am", "F", "1,5%"],
  third: ["F", "Am", "G", "F", "0,84%"],
};
var dictG = {
  first: ["G", "Am", "F", "C", "2,1%"],
  second: ["G", "F", "C", "G", "1,5%"],
  third: ["G", "C", "F", "G", "1,2%"],
};
var dictA = {
  first: ["Am", "F", "C", "G", "2,2%"],
  second: ["Am", "G", "F", "G", "1,4%"],
  third: ["Am", "C", "G", "F", "0,45%"],
};
var dictB = {
  first: ["B", "C", "B", "C", "0,012%"],
  second: ["B", "E", "Am", "G", "0,006%"],
  third: ["B", "Em", "C", "G", "0,006%"],
};


function App() {
  var nums;
  var sufix;
  var chords;
  var finalProb;
  
  sufix = "nodes?cp="; // The following request shows the chords that are most likely to come after the fist chosen chord
  nums = dictC.firstNum;
  sufix = sufix + nums;
  chords = GetInfo(sufix);
  finalProb = chords[0]?.probability;
  console.log(finalProb);
  console.log(chords);


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
                        <Link to="/ChordA" style={{ textDecoration: 'none' }}> <ChordsButton variant="contained" href="#text-buttons">A</ChordsButton> </Link>
                        <Link to="/ChordB" style={{ textDecoration: 'none' }}> <ChordsButton variant="contained" href="#text-buttons">B</ChordsButton> </Link>
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
                    <h4> A primeira combinação mais provável ({dictC.first[4]}), será: </h4>
                    <div className="groupByProbability">
                      <Link to="/songs-with-C-G-Am-F" style={{ textDecoration: 'none' }}> 
                      <ChordsButton variant="contained">{dictC.first[0]}</ChordsButton> 
                      <ChordsButton variant="contained">{dictC.first[1]}</ChordsButton>
                      <ChordsButton variant="contained">{dictC.first[2]}</ChordsButton>
                      <ChordsButton variant="contained">{dictC.first[3]}</ChordsButton>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="chordsButton3">
                    <h4> A segunda combinação mais provável ({dictC.second[4]}), será: </h4>
                    <div className="groupByProbability">
                      <Link to="/songs-with-C-G-F-C" style={{ textDecoration: 'none' }}> 
                      <ChordsButton variant="contained">{dictC.second[0]}</ChordsButton> 
                      <ChordsButton variant="contained">{dictC.second[1]}</ChordsButton>
                      <ChordsButton variant="contained">{dictC.second[2]}</ChordsButton>
                      <ChordsButton variant="contained">{dictC.second[3]}</ChordsButton>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="chordsButton3">
                    <h4> A terceira combinação mais provável ({dictC.third[4]}), será: </h4>
                    <div className="groupByProbability">
                      <Link to="/songs-with-C-F-C-F" style={{ textDecoration: 'none' }}> 
                      <ChordsButton variant="contained">{dictC.third[0]}</ChordsButton> 
                      <ChordsButton variant="contained">{dictC.third[1]}</ChordsButton>
                      <ChordsButton variant="contained">{dictC.third[2]}</ChordsButton>
                      <ChordsButton variant="contained">{dictC.third[3]}</ChordsButton>
                      </Link>
                    </div>
                  </div>
                  <h5> Clicando em alguma combinação, você poderá ver as músicas que também a utilizam. </h5>

                </div> 
              </div>
            </Route>

            {/* Chord D */}
            <Route path="/ChordD">
              <div className="content">
                <div className="chords"> 
                <h2> Ótima escolha! </h2>
                  <div className="textWithChord">
                    <h3> Essas são as combinações mais prováveis usando o acorde </h3>
                    <ChordsButtonSelected variant="contained">D</ChordsButtonSelected> 
                  </div>
                  
                  <div className="chordsButton3">
                    <h4> A primeira combinação mais provável ({dictD.first[4]}), será: </h4>
                    <div className="groupByProbability">
                      <Link to="/songs-with-D-A-Bm-G" style={{ textDecoration: 'none' }}> 
                      <ChordsButton variant="contained">{dictD.first[0]}</ChordsButton> 
                      <ChordsButton variant="contained">{dictD.first[1]}</ChordsButton>
                      <ChordsButton variant="contained">{dictD.first[2]}</ChordsButton>
                      <ChordsButton variant="contained">{dictD.first[3]}</ChordsButton>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="chordsButton3">
                    <h4> A segunda combinação mais provável ({dictD.second[4]}), será: </h4>
                    <div className="groupByProbability">
                      <Link to="/songs-with-D-G-A-D" style={{ textDecoration: 'none' }}> 
                      <ChordsButton variant="contained">{dictD.second[0]}</ChordsButton> 
                      <ChordsButton variant="contained">{dictD.second[1]}</ChordsButton>
                      <ChordsButton variant="contained">{dictD.second[2]}</ChordsButton>
                      <ChordsButton variant="contained">{dictD.second[3]}</ChordsButton>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="chordsButton3">
                    <h4> A terceira combinação mais provável ({dictD.third[4]}), será: </h4>
                    <div className="groupByProbability">
                      <Link to="/songs-with-D-Em-Bm-G" style={{ textDecoration: 'none' }}> 
                      <ChordsButton variant="contained">{dictD.third[0]}</ChordsButton> 
                      <ChordsButton variant="contained">{dictD.third[1]}</ChordsButton>
                      <ChordsButton variant="contained">{dictD.third[2]}</ChordsButton>
                      <ChordsButton variant="contained">{dictD.third[3]}</ChordsButton>
                      </Link>
                    </div>
                  </div>
                  <h5> Clicando em alguma combinação, você poderá ver as músicas que também a utilizam. </h5>

                </div> 
              </div>
            </Route>

            {/* Chord E */}
            <Route path="/ChordE">
              <div className="content">
                <div className="chords"> 
                <h2> Ótima escolha! </h2>
                  <div className="textWithChord">
                    <h3> Essas são as combinações mais prováveis usando o acorde </h3>
                    <ChordsButtonSelected variant="contained">E</ChordsButtonSelected> 
                  </div>
                  
                  <div className="chordsButton3">
                    <h4> A primeira combinação mais provável ({dictE.first[4]}), será: </h4>
                    <div className="groupByProbability">
                      <Link to="/songs-with-Em-F-G-Am" style={{ textDecoration: 'none' }}> 
                      <ChordsButton variant="contained">{dictE.first[0]}</ChordsButton> 
                      <ChordsButton variant="contained">{dictE.first[1]}</ChordsButton>
                      <ChordsButton variant="contained">{dictE.first[2]}</ChordsButton>
                      <ChordsButton variant="contained">{dictE.first[3]}</ChordsButton>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="chordsButton3">
                    <h4> A segunda combinação mais provável ({dictE.second[4]}), será: </h4>
                    <div className="groupByProbability">
                      <Link to="/songs-with-Em-Am-G-F" style={{ textDecoration: 'none' }}> 
                      <ChordsButton variant="contained">{dictE.second[0]}</ChordsButton> 
                      <ChordsButton variant="contained">{dictE.second[1]}</ChordsButton>
                      <ChordsButton variant="contained">{dictE.second[2]}</ChordsButton>
                      <ChordsButton variant="contained">{dictE.second[3]}</ChordsButton>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="chordsButton3">
                    <h4> A terceira combinação mais provável ({dictE.third[4]}), será: </h4>
                    <div className="groupByProbability">
                      <Link to="/songs-with-E-Am-F-C" style={{ textDecoration: 'none' }}> 
                      <ChordsButton variant="contained">{dictE.third[0]}</ChordsButton> 
                      <ChordsButton variant="contained">{dictE.third[1]}</ChordsButton>
                      <ChordsButton variant="contained">{dictE.third[2]}</ChordsButton>
                      <ChordsButton variant="contained">{dictE.third[3]}</ChordsButton>
                      </Link>
                    </div>
                  </div>
                  <h5> Clicando em alguma combinação, você poderá ver as músicas que também a utilizam. </h5>

                </div> 
              </div>
            </Route>

            {/* Chord F */}
            <Route path="/ChordF">
              <div className="content">
                <div className="chords"> 
                <h2> Ótima escolha! </h2>
                  <div className="textWithChord">
                    <h3> Essas são as combinações mais prováveis usando o acorde </h3>
                    <ChordsButtonSelected variant="contained">F</ChordsButtonSelected> 
                  </div>
                  
                  <div className="chordsButton3">
                    <h4> A primeira combinação mais provável ({dictF.first[4]}), será: </h4>
                    <div className="groupByProbability">
                      <Link to="/songs-with-F-C-G-Am" style={{ textDecoration: 'none' }}> 
                      <ChordsButton variant="contained">{dictF.first[0]}</ChordsButton> 
                      <ChordsButton variant="contained">{dictF.first[1]}</ChordsButton>
                      <ChordsButton variant="contained">{dictF.first[2]}</ChordsButton>
                      <ChordsButton variant="contained">{dictF.first[3]}</ChordsButton>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="chordsButton3">
                    <h4> A segunda combinação mais provável ({dictF.second[4]}), será: </h4>
                    <div className="groupByProbability">
                      <Link to="/songs-with-F-G-Am-F" style={{ textDecoration: 'none' }}> 
                      <ChordsButton variant="contained">{dictF.second[0]}</ChordsButton> 
                      <ChordsButton variant="contained">{dictF.second[1]}</ChordsButton>
                      <ChordsButton variant="contained">{dictF.second[2]}</ChordsButton>
                      <ChordsButton variant="contained">{dictF.second[3]}</ChordsButton>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="chordsButton3">
                    <h4> A terceira combinação mais provável ({dictF.third[4]}), será: </h4>
                    <div className="groupByProbability">
                      <Link to="/songs-with-F-Am-G-F" style={{ textDecoration: 'none' }}> 
                      <ChordsButton variant="contained">{dictF.third[0]}</ChordsButton> 
                      <ChordsButton variant="contained">{dictF.third[1]}</ChordsButton>
                      <ChordsButton variant="contained">{dictF.third[2]}</ChordsButton>
                      <ChordsButton variant="contained">{dictF.third[3]}</ChordsButton>
                      </Link>
                    </div>
                  </div>
                  <h5> Clicando em alguma combinação, você poderá ver as músicas que também a utilizam. </h5>

                </div> 
              </div>
            </Route>

             {/* Chord G */}
             <Route path="/ChordG">
              <div className="content">
                <div className="chords"> 
                <h2> Ótima escolha! </h2>
                  <div className="textWithChord">
                    <h3> Essas são as combinações mais prováveis usando o acorde </h3>
                    <ChordsButtonSelected variant="contained">G</ChordsButtonSelected> 
                  </div>
                  
                  <div className="chordsButton3">
                    <h4> A primeira combinação mais provável ({dictG.first[4]}), será: </h4>
                    <div className="groupByProbability">
                      <Link to="/songs-with-G-Am-F-C" style={{ textDecoration: 'none' }}> 
                      <ChordsButton variant="contained">{dictG.first[0]}</ChordsButton> 
                      <ChordsButton variant="contained">{dictG.first[1]}</ChordsButton>
                      <ChordsButton variant="contained">{dictG.first[2]}</ChordsButton>
                      <ChordsButton variant="contained">{dictG.first[3]}</ChordsButton>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="chordsButton3">
                    <h4> A segunda combinação mais provável ({dictG.second[4]}), será: </h4>
                    <div className="groupByProbability">
                      <Link to="/songs-with-G-F-C-G" style={{ textDecoration: 'none' }}> 
                      <ChordsButton variant="contained">{dictG.second[0]}</ChordsButton> 
                      <ChordsButton variant="contained">{dictG.second[1]}</ChordsButton>
                      <ChordsButton variant="contained">{dictG.second[2]}</ChordsButton>
                      <ChordsButton variant="contained">{dictG.second[3]}</ChordsButton>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="chordsButton3">
                    <h4> A terceira combinação mais provável ({dictG.third[4]}), será: </h4>
                    <div className="groupByProbability">
                      <Link to="/songs-with-G-C-F-G" style={{ textDecoration: 'none' }}> 
                      <ChordsButton variant="contained">{dictG.third[0]}</ChordsButton> 
                      <ChordsButton variant="contained">{dictG.third[1]}</ChordsButton>
                      <ChordsButton variant="contained">{dictG.third[2]}</ChordsButton>
                      <ChordsButton variant="contained">{dictG.third[3]}</ChordsButton>
                      </Link>
                    </div>
                  </div>
                  <h5> Clicando em alguma combinação, você poderá ver as músicas que também a utilizam. </h5>

                </div> 
              </div>
            </Route>

            {/* Chord A */}
            <Route path="/ChordA">
              <div className="content">
                <div className="chords"> 
                <h2> Ótima escolha! </h2>
                  <div className="textWithChord">
                    <h3> Essas são as combinações mais prováveis usando o acorde </h3>
                    <ChordsButtonSelected variant="contained">A</ChordsButtonSelected> 
                  </div>
                  
                  <div className="chordsButton3">
                    <h4> A primeira combinação mais provável ({dictA.first[4]}), será: </h4>
                    <div className="groupByProbability">
                      <Link to="/songs-with-Am-F-C-G" style={{ textDecoration: 'none' }}> 
                      <ChordsButton variant="contained">{dictA.first[0]}</ChordsButton> 
                      <ChordsButton variant="contained">{dictA.first[1]}</ChordsButton>
                      <ChordsButton variant="contained">{dictA.first[2]}</ChordsButton>
                      <ChordsButton variant="contained">{dictA.first[3]}</ChordsButton>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="chordsButton3">
                    <h4> A segunda combinação mais provável ({dictA.second[4]}), será: </h4>
                    <div className="groupByProbability">
                      <Link to="/songs-with-Am-G-F-G" style={{ textDecoration: 'none' }}> 
                      <ChordsButton variant="contained">{dictA.second[0]}</ChordsButton> 
                      <ChordsButton variant="contained">{dictA.second[1]}</ChordsButton>
                      <ChordsButton variant="contained">{dictA.second[2]}</ChordsButton>
                      <ChordsButton variant="contained">{dictA.second[3]}</ChordsButton>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="chordsButton3">
                    <h4> A terceira combinação mais provável ({dictA.third[4]}), será: </h4>
                    <div className="groupByProbability">
                      <Link to="/songs-with-Am-C-G-F" style={{ textDecoration: 'none' }}> 
                      <ChordsButton variant="contained">{dictA.third[0]}</ChordsButton> 
                      <ChordsButton variant="contained">{dictA.third[1]}</ChordsButton>
                      <ChordsButton variant="contained">{dictA.third[2]}</ChordsButton>
                      <ChordsButton variant="contained">{dictA.third[3]}</ChordsButton>
                      </Link>
                    </div>
                  </div>
                  <h5> Clicando em alguma combinação, você poderá ver as músicas que também a utilizam. </h5>

                </div> 
              </div>
            </Route>

            {/* Chord B */}
            <Route path="/ChordB">
              <div className="content">
                <div className="chords"> 
                <h2> Ótima escolha! </h2>
                  <div className="textWithChord">
                    <h3> Essas são as combinações mais prováveis usando o acorde </h3>
                    <ChordsButtonSelected variant="contained">B</ChordsButtonSelected> 
                  </div>
                  
                  <div className="chordsButton3">
                    <h4> A primeira combinação mais provável ({dictB.first[4]}), será: </h4>
                    <div className="groupByProbability">
                      <Link to="/songs-with-B-C-B-C" style={{ textDecoration: 'none' }}> 
                      <ChordsButton variant="contained">{dictB.first[0]}</ChordsButton> 
                      <ChordsButton variant="contained">{dictB.first[1]}</ChordsButton>
                      <ChordsButton variant="contained">{dictB.first[2]}</ChordsButton>
                      <ChordsButton variant="contained">{dictB.first[3]}</ChordsButton>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="chordsButton3">
                    <h4> A segunda combinação mais provável ({dictB.second[4]}), será: </h4>
                    <div className="groupByProbability">
                      <Link to="/songs-with-B-E-Am-G" style={{ textDecoration: 'none' }}> 
                      <ChordsButton variant="contained">{dictB.second[0]}</ChordsButton> 
                      <ChordsButton variant="contained">{dictB.second[1]}</ChordsButton>
                      <ChordsButton variant="contained">{dictB.second[2]}</ChordsButton>
                      <ChordsButton variant="contained">{dictB.second[3]}</ChordsButton>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="chordsButton3">
                    <h4> A terceira combinação mais provável ({dictB.third[4]}), será: </h4>
                    <div className="groupByProbability">
                      <Link to="/songs-with-B-Em-C-G" style={{ textDecoration: 'none' }}> 
                      <ChordsButton variant="contained">{dictB.third[0]}</ChordsButton> 
                      <ChordsButton variant="contained">{dictB.third[1]}</ChordsButton>
                      <ChordsButton variant="contained">{dictB.third[2]}</ChordsButton>
                      <ChordsButton variant="contained">{dictB.third[3]}</ChordsButton>
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