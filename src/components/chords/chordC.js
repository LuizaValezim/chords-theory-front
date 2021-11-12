// import React from 'react';
// import GetInfo from '../../../App.js';

// function ChordC(){
//     var sufix;
//     var chords;
//     var prob;
//     var finalProb;
//     var combinations;


//     combinations = {
//         fist: [],
//         second: [],
//         third: [],
//         forth: [],
//     }

//     // Fist combination using the first chord (C)
//     nums = '1,5,6,4';
//     sufix = sufix + nums;
//     chords = GetInfo(sufix);
//     finalProb = 1 * 0.252 * 0.342 * 0.646;
//     combinations.fist.push(nums, finalProb);

//     // Second combination using the first chord (C)
//     nums = '1';
//     sufix = sufix + nums;
//     chords = GetInfo(sufix);
//     finalProb = 1 * 0.252 * 0.342 * 0.646;
//     combinations.fist.push(nums, finalProb);

//     console.log(chords);

//     // console.log("Probabilidade C-G-Am-F");
//     // console.log("Probabilidade final: " + finalProb*100  + "%");

//     return (combinations);
// }

// export {ChordC};