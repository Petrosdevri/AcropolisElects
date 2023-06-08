import './Results.css';
import { Stack } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';

export default function Results({nd, syriza, pasok, kke, el, niki, pe, mera25, epam, ed, op, ps, antarsya, ek, kkeml, eke}) {
    const location = useLocation();
    const seatDistribution = location.state.seatDistribution;
    const partyColors = ['#1D6EC8', '#CC1C24', '#00793A', '#DF251C', '#8DBEE2', '#BD552C', '#972490', '#EB4326', '#16459A', '#EB8C1E', '#509E2F', '#1B395A', '#D82F33', '#F2D308', '#D7062C', '#072C80'];

    const barData = [{party: 'ΝΔ', percentage: nd, fill: partyColors[0]},
    {party: 'ΣΥΡΙΖΑ', percentage: syriza, fill: partyColors[1]},
    {party: 'ΠΑΣΟΚ', percentage: pasok, fill: partyColors[2]},
    {party: 'ΚΚΕ', percentage: kke, fill: partyColors[3]},
    {party: 'ΕΛ', percentage: el, fill: partyColors[4]},
    {party: 'ΝΙΚΗ', percentage: niki, fill: partyColors[5]},
    {party: 'ΠΕ', percentage: pe, fill: partyColors[6]},
    {party: 'ΜΕΡΑ25', percentage: mera25, fill: partyColors[7]},
    {party: 'ΕΠΑΜ', percentage: epam, fill: partyColors[8]},
    {party: 'ΕΔ', percentage: ed, fill: partyColors[9]},
    {party: 'ΟΠ', percentage: op, fill: partyColors[10]},
    {party: 'ΠΣ', percentage: ps, fill: partyColors[11]},
    {party: 'ΑΝΤΑΡΣΥΑ', percentage: antarsya, fill: partyColors[12]},
    {party: 'ΕΚ', percentage: ek, fill: partyColors[13]},
    {party: 'ΚΚΕ Μ-Λ', percentage: kkeml, fill: partyColors[14]},
    {party: 'ΕΚΕ', percentage: eke, fill: partyColors[15]}];

    const pieData = [{party: 'ΝΔ', seats: seatDistribution[0], fill: partyColors[0]},
    {party: 'ΣΥΡΙΖΑ', seats: seatDistribution[1], fill: partyColors[1]},
    {party: 'ΠΑΣΟΚ', seats: seatDistribution[2], fill: partyColors[2]},
    {party: 'ΚΚΕ', seats: seatDistribution[3], fill: partyColors[3]},
    {party: 'ΕΛ', seats: seatDistribution[4], fill: partyColors[4]},
    {party: 'ΝΙΚΗ', seats: seatDistribution[5], fill: partyColors[5]},
    {party: 'ΠΕ', seats: seatDistribution[6], fill: partyColors[6]},
    {party: 'ΜΕΡΑ25', seats: seatDistribution[7], fill: partyColors[7]},
    {party: 'ΕΠΑΜ', seats: seatDistribution[8], fill: partyColors[8]},
    {party: 'ΕΔ', seats: seatDistribution[9], fill: partyColors[9]},
    {party: 'ΟΠ', seats: seatDistribution[10], fill: partyColors[10]},
    {party: 'ΠΣ', seats: seatDistribution[11], fill: partyColors[11]},
    {party: 'ΑΝΤΑΡΣΥΑ', seats: seatDistribution[12], fill: partyColors[12]},
    {party: 'ΕΚ', seats: seatDistribution[13], fill: partyColors[13]},
    {party: 'ΚΚΕ Μ-Λ', seats: seatDistribution[14], fill: partyColors[14]},
    {party: 'ΕΚΕ', seats: seatDistribution[15], fill: partyColors[15]}];

    return (
        <div className='results'>
            <header className='header'></header>
            <h1>Τα αποτελέσματα των επιλογών σας</h1>
            <Stack className='results-charts' gap={5}>
                <div className='results-chart'>
                    <h2>Ποσοστό ψήφων</h2>
                    <BarChart className='bar-chart' data={barData} width={1025} height={325} label='Ποσοστό'>
                        <XAxis dataKey='party' />
                        <YAxis />
                        <Tooltip />
                        <Legend content='Ποσοστό' />
                        <Bar dataKey='percentage' fill={entry => entry.fill} />
                    </BarChart>
                </div>
                <div className='results-chart'>
                    <h2>Κατανομή εδρών</h2>
                    <PieChart className='pie-chart' width={425} height={450}>
                        <Pie data={pieData} dataKey='seats' nameKey='party' cx='50%' cy='50%' outerRadius={100} label>
                            {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.fill} />
                            ))};
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </div>
            </Stack>
        </div>
    )
}