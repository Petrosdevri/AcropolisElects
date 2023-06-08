import AcropolisElectsLogo from '../assets/images/AcropolisElects Logo.png';

export default function Header() {
    return (
        <header className='d-flex justify-content-start align-items-center'>
            <img src={AcropolisElectsLogo} alt="logo" width='220' height='25' />
        </header>
    )
}