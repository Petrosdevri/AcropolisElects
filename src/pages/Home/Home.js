import { useNavigate } from 'react-router-dom';
import './Home.css';
import { apliAnalogiki, enisximeniAnalogiki } from '@poliverse/greek-electoral-systems';
import { Button, Stack } from 'react-bootstrap';
import Ballot from './Ballot';

export default function Home({nd, syriza, pasok, kke, spartiates, el, niki, pe, mera25, epam, ed, op, ps, antarsya, ek, kkeml, electoralSystem, electoralThreshold, seatDistribution, showResults, setND, setSYRIZA, setPASOK, setKKE, setSpartiates, setEL, setNIKI, setPE, setMeRA25, setEPAM, setED, setOP, setPS, setANTARSYA, setEK, setKKEML, setElectoralSystem, setElectoralThreshold, setSeatDistribution, setShowResults}) {
    const navigate = useNavigate();

    function isMobileDevice() {
        return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    }

    function handleResults() {
        const ndPercentage = parseFloat(nd);
        const syrizaPercentage = parseFloat(syriza);
        const pasokPercentage = parseFloat(pasok);
        const kkePercentage = parseFloat(kke);
        const spartiatesPercentage = parseFloat(spartiates);
        const elPercentage = parseFloat(el);
        const nikiPercentage = parseFloat(niki);
        const pePercentage = parseFloat(pe);
        const mera25Percentage = parseFloat(mera25);
        const epamPercentage = parseFloat(epam);
        const edPercentage = parseFloat(ed);
        const opPercentage = parseFloat(op);
        const psPercentage = parseFloat(ps);
        const antarsyaPercentage = parseFloat(antarsya);
        const ekPercentage = parseFloat(ek);
        const kkemlPercentage = parseFloat(kkeml);

        if(isNaN(ndPercentage) || isNaN(syrizaPercentage) || isNaN(pasokPercentage) || isNaN(kkePercentage) || isNaN(spartiatesPercentage) || isNaN(elPercentage) || isNaN(nikiPercentage) || isNaN(pePercentage) || isNaN(mera25Percentage) || isNaN(epamPercentage) || isNaN(edPercentage) || isNaN(opPercentage) || isNaN(psPercentage) || isNaN(antarsyaPercentage) || isNaN(ekPercentage) || isNaN(kkemlPercentage)) {
            alert('Παρακαλώ εισάγετε έγκυρα ποσοστά ψήφων για κάθε κόμμα.');
            return;
        }

        const percentages = [ndPercentage, syrizaPercentage, pasokPercentage, kkePercentage, spartiatesPercentage, elPercentage, nikiPercentage, pePercentage, mera25Percentage, epamPercentage, edPercentage, opPercentage, psPercentage, antarsyaPercentage, ekPercentage, kkemlPercentage];
        const totalPercentages = percentages.reduce((a, b) => a + b, 0);
        if (totalPercentages > 100) {
            alert('Το άθροισμα των ποσοστών που εισηγάγατε δεν πρέπει να ξεπερνά το 100%!');
            return;
        }
        let newSeatDistribution;
        if (electoralSystem === "apliAnalogiki") {
          newSeatDistribution = apliAnalogiki(percentages, electoralThreshold);
        } else if (electoralSystem === "enisximeniAnalogiki") {
          newSeatDistribution = enisximeniAnalogiki(percentages, electoralThreshold);
        }
        setSeatDistribution(newSeatDistribution);
        console.log(seatDistribution);
        navigate("/results", { state: { seatDistribution: newSeatDistribution } });
    }

    return (
        <Stack className='home' gap={5}>
            <div>
                <header className='header'></header>
                <div className='electoral-requirements'>
                    <Stack className='electoral-system' gap={3}>
                        <h4>Επιλέξτε εκλογικό σύστημα</h4>
                        <select className='electoral-requirement' value={electoralSystem} onChange={(e) => setElectoralSystem(e.target.value)}>
                            <option value='apliAnalogiki'>Απλή Αναλογική</option>
                            <option value='enisximeniAnalogiki'>Ενισχυμένη Αναλογική</option>
                        </select>
                    </Stack>
                    <Stack className='electoral-threshold' gap={3}>
                        <h4>Επιλέξτε εκλογικό όριο</h4>
                        <input className='electoral-requirement' type='number' min='0' max='100' value={electoralThreshold} onChange={(e) => setElectoralThreshold(e.target.value)} />
                    </Stack>
                </div>
            </div>
            <p>Η σειρά των κομμάτων βασίζεται στα αποτελέσματά τους στις προηγούμενες εκλογές.</p>
            <Ballot nd={nd} syriza={syriza} pasok={pasok} kke={kke} spartiates={spartiates} el={el} niki={niki} pe={pe} mera25={mera25} epam={epam} ed={ed} op={op} ps={ps} antarsya={antarsya} ek={ek} kkeml={kkeml} showResults={showResults} setND={setND} setSYRIZA={setSYRIZA} setPASOK={setPASOK} setKKE={setKKE} setSpartiates={setSpartiates} setEL={setEL} setNIKI={setNIKI} setPE={setPE} setMeRA25={setMeRA25} setEPAM={setEPAM} setED={setED} setOP={setOP} setPS={setPS} setANTARSYA={setANTARSYA} setEK={setEK} setKKEML={setKKEML} setShowResults={setShowResults} />
            {isMobileDevice() ? <Button className='submit-btn' onClick={() => { setShowResults(true); handleResults(); }}>Υποβολή</Button> :
            <Button className='submit-btn' onClick={() => { setShowResults(true); handleResults(); }}>Υποβολή</Button> }
        </Stack>
    )
}