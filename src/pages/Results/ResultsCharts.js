import { Stack } from 'react-bootstrap';
import BarGraph from './BarGraph';
import PieGraph from './PieGraph';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

export default function ResultsCharts({ barData, pieData, upperHeight }) {
    return (
        <Stack className='results-charts' gap={5}>
            <BarGraph barData={barData} upperHeight={upperHeight} />
            <PieGraph pieData={pieData} />
        </Stack>
    )
}