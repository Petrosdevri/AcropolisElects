import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

export default function BarGraph({ barData, upperHeight }) {
    return (
        <div className='results-chart'>
            <h2>Ποσοστό ψήφων</h2>
            <BarChart className='bar-chart' data={barData} width={1025} height={525} label='Ποσοστό'>
                <XAxis dataKey='party' />
                <YAxis domain={[0, upperHeight]}/>
                <Tooltip />
                <Legend content='Ποσοστό' />
                <Bar dataKey='percentage' fill={entry => entry.fill} />
            </BarChart>
        </div>
    )
}