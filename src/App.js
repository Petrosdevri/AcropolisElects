import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home/Home';
import Results from './pages/Results/Results';
import Footer from './components/Footer';

function App() {
  const [ND, setND] = useState(0);
  const [SYRIZA, setSYRIZA] = useState(0);
  const [PASOK, setPASOK] = useState(0);
  const [KKE, setKKE] = useState(0);
  const [EL, setEL] = useState(0);
  const [NIKI, setNIKI] = useState(0);
  const [PE, setPE] = useState(0);
  const [MeRA25, setMeRA25] = useState(0);
  const [EPAM, setEPAM] = useState(0);
  const [ED, setED] = useState(0);
  const [OP, setOP] = useState(0);
  const [PS, setPS] = useState(0);
  const [ANTARSYA, setANTARSYA] = useState(0);
  const [EK, setEK] = useState(0);
  const [KKEML, setKKEML] = useState(0);
  const [Spartiates, setSpartiates] = useState(0);
  const [electoralSystem, setElectoralSystem] = useState('apliAnalogiki');
  const [electoralThreshold, setElectoralThreshold] = useState(3);
  const [seatDistribution, setSeatDistribution] = useState();
  const [showResults, setShowResults] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home nd={ND} syriza={SYRIZA} pasok={PASOK} kke={KKE} el={EL} niki={NIKI} pe={PE} mera25={MeRA25} epam={EPAM} ed={ED} op={OP} ps={PS} antarsya={ANTARSYA} ek={EK} kkeml={KKEML} spartiates={Spartiates} electoralSystem={electoralSystem} electoralThreshold={electoralThreshold} seatDistribution={seatDistribution} showResults={showResults} setND={setND} setSYRIZA={setSYRIZA} setPASOK={setPASOK} setKKE={setKKE} setEL={setEL} setNIKI={setNIKI} setPE={setPE} setMeRA25={setMeRA25} setEPAM={setEPAM} setED={setED} setOP={setOP} setPS={setPS} setANTARSYA={setANTARSYA} setEK={setEK} setKKEML={setKKEML} setSpartiates={setSpartiates} setElectoralSystem={setElectoralSystem} setElectoralThreshold={setElectoralThreshold} setSeatDistribution={setSeatDistribution} setShowResults={setShowResults} />} />
          <Route path='/results' element={<Results nd={ND} syriza={SYRIZA} pasok={PASOK} kke={KKE} el={EL} niki={NIKI} pe={PE} mera25={MeRA25} epam={EPAM} ed={ED} op={OP} ps={PS} antarsya={ANTARSYA} ek={EK} kkeml={KKEML} spartiates={Spartiates} electoralSystem={electoralSystem} electoralThreshold={electoralThreshold} seatDistribution={seatDistribution} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
