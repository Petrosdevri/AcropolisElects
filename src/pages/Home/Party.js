import { Stack } from "react-bootstrap"

export default function Party(props) {
    return (
        <Stack className='party' direction='horizontal' gap={5}>
            <div className='party-color' style={{background: `${props.color}`}}></div>
            <h5 className='party-name'>{props.name}</h5>
            <input className='party-input' type='number' min='0' max='100' value={props.votes} onChange={e => props.setVotes(e.target.value)} />
        </Stack>
    )
}