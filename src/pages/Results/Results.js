import './Results.css';
import { useLocation } from 'react-router-dom';
import ResultsCharts from './ResultsCharts';

export default function Results({nd, syriza, pasok, kke, spartiates, el, niki, pe, mera25, epam, ed, op, ps, antarsya, ek, kkeml}) {
    const location = useLocation();
    const seatDistribution = location.state.seatDistribution;
    const partyColors = ['#1D6EC8', '#CC1C24', '#00793A', '#DF251C', '#E4B365', '#8DBEE2', '#BD552C', '#972490', '#EB4326', '#16459A', '#EB8C1E', '#509E2F', '#1B395A', '#D82F33', '#F2D308', '#D7062C'];

    const barData = [{party: 'ΝΔ', percentage: nd, fill: partyColors[0]},
    {party: 'ΣΥΡΙΖΑ', percentage: syriza, fill: partyColors[1]},
    {party: 'ΠΑΣΟΚ', percentage: pasok, fill: partyColors[2]},
    {party: 'ΚΚΕ', percentage: kke, fill: partyColors[3]},
    {party: 'ΣΠ', percentage: spartiates, fill: partyColors[4]},
    {party: 'ΕΛ', percentage: el, fill: partyColors[5]},    
    {party: 'ΝΙΚΗ', percentage: niki, fill: partyColors[6]},
    {party: 'ΠΕ', percentage: pe, fill: partyColors[7]},
    {party: 'ΜΕΡΑ25', percentage: mera25, fill: partyColors[8]},
    {party: 'ΕΠΑΜ', percentage: epam, fill: partyColors[9]},
    {party: 'ΕΔ', percentage: ed, fill: partyColors[10]},
    {party: 'ΟΠ', percentage: op, fill: partyColors[11]},
    {party: 'ΠΣ', percentage: ps, fill: partyColors[12]},
    {party: 'ΑΝΤΑΡΣΥΑ', percentage: antarsya, fill: partyColors[13]},
    {party: 'ΕΚ', percentage: ek, fill: partyColors[14]},
    {party: 'ΚΚΕ Μ-Λ', percentage: kkeml, fill: partyColors[15]}];

    const maxPercentage = Math.max(...barData.map(entry => entry.percentage));
    const upperHeight = Math.ceil(maxPercentage / 5) * 5;

    const pieData = [{party: 'ΝΔ', seats: seatDistribution[0], fill: partyColors[0]},
    {party: 'ΣΥΡΙΖΑ', seats: seatDistribution[1], fill: partyColors[1]},
    {party: 'ΠΑΣΟΚ', seats: seatDistribution[2], fill: partyColors[2]},
    {party: 'ΚΚΕ', seats: seatDistribution[3], fill: partyColors[3]}, 
    {party: 'ΣΠ', seats: seatDistribution[4], fill: partyColors[4]},
    {party: 'ΕΛ', seats: seatDistribution[5], fill: partyColors[5]},
    {party: 'ΝΙΚΗ', seats: seatDistribution[6], fill: partyColors[6]},
    {party: 'ΠΕ', seats: seatDistribution[7], fill: partyColors[7]},
    {party: 'ΜΕΡΑ25', seats: seatDistribution[8], fill: partyColors[8]},
    {party: 'ΕΠΑΜ', seats: seatDistribution[9], fill: partyColors[9]},
    {party: 'ΕΔ', seats: seatDistribution[10], fill: partyColors[10]},
    {party: 'ΟΠ', seats: seatDistribution[11], fill: partyColors[11]},
    {party: 'ΠΣ', seats: seatDistribution[12], fill: partyColors[12]},
    {party: 'ΑΝΤΑΡΣΥΑ', seats: seatDistribution[13], fill: partyColors[13]},
    {party: 'ΕΚ', seats: seatDistribution[14], fill: partyColors[14]},
    {party: 'ΚΚΕ Μ-Λ', seats: seatDistribution[15], fill: partyColors[15]}];

    return (
        <div className='results'>
            <header className='header'></header>
            <h1>Τα αποτελέσματα των επιλογών σας</h1>
            <ResultsCharts barData={barData} pieData={pieData} upperHeight={upperHeight} />
        </div>
    )
}