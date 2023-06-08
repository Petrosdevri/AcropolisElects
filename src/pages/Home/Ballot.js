import Party from './Party';

export default function PartyBallot({ nd, syriza, pasok, kke, el, niki, pe, mera25, epam, ed, op, ps, antarsya, ek, kkeml, eke, setND, setSYRIZA, setPASOK, setKKE, setEL, setNIKI, setPE, setMeRA25, setEPAM, setED, setOP, setPS, setANTARSYA, setEK, setKKEML, setEKE }) {
    return (
        <div className='ballot'>
            <h4>Επιλέξτε το ποσοστό των ψήφων που θα λάβει κάθε κόμμα.</h4>
            <div className='ballot-list'>
                <Party color='#1D6EC8' name='Νέα Δημοκρατία' votes={nd} setVotes={setND} />
                <Party color='#CC1C24' name='ΣΥΡΙΖΑ' votes={syriza} setVotes={setSYRIZA} />
                <Party color='#00793A' name='ΠΑΣΟΚ' votes={pasok} setVotes={setPASOK} />
                <Party color='#DF251C' name='ΚΚΕ' votes={kke} setVotes={setKKE} />
                <Party color='#8DBEE2' name='Ελληνική Λύση' votes={el} setVotes={setEL} />
                <Party color='#BD552C' name='Νίκη' votes={niki} setVotes={setNIKI} />
                <Party color='#972490' name='Πλεύση Ελευθερίας' votes={pe} setVotes={setPE} />
                <Party color='#EB4326' name='ΜέΡΑ25' votes={mera25} setVotes={setMeRA25} />
                <Party color='#16459A' name='ΕΠΑΜ' votes={epam} setVotes={setEPAM} />
                <Party color='#EB8C1E' name='Εθνική Δημιουργία' votes={ed} setVotes={setED} />
                <Party color='#509E2F' name='Οικολόγοι Πράσινοι' votes={op} setVotes={setOP} />
                <Party color='#1B395A' name='Πατριωτικός Συνασπισμός' votes={ps} setVotes={setPS} />
                <Party color='#D82F33' name='ΑΝΤΑΡΣΥΑ' votes={antarsya} setVotes={setANTARSYA} />
                <Party color='#F2D308' name='Ένωση Κεντρώων' votes={ek} setVotes={setEK} />
                <Party color='#D7062C' name='ΚΚΕ(μ-λ)' votes={kkeml} setVotes={setKKEML} />
                <Party color='#072C80' name='Εθνικό Κόμμα Έλληνες' votes={eke} setVotes={setEKE} />
            </div>
        </div>
    )
}