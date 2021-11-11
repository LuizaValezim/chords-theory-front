export default function Appbar() {
    return (
        <div className="chords"> 
            <div className="ChordsButton1">
                <ChordsButton variant="contained" href="https://mui.com/pt/components/buttons/#contained-buttons">C</ChordsButton>
                <ChordsButton onClick={() => { return Chord_I }} variant="contained" href="#text-buttons">D</ChordsButton>
                <ChordsButton variant="contained" href="#text-buttons">E</ChordsButton>
                <ChordsButton variant="contained" href="#text-buttons">F</ChordsButton>
            </div>
            <div className="ChordsButton2">
                <ChordsButton variant="contained" href="#text-buttons">G</ChordsButton>
                <ChordsButton variant="contained" href="#text-buttons">A</ChordsButton>
                <ChordsButton variant="contained" href="#text-buttons">B</ChordsButton>
            </div>
        </div> 
    )}