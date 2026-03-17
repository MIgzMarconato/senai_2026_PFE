import {useState} from 'react';

export default function aluno ({titulo}){
    const [nome,setNome] = useState('Isabella');
    const [idade,setIdade] = useState(17);
    const [ra, setRa] = useState (490909);
    const [nota, setNota]= useState(10);

    return(
        <>
        <h1>{titulo}</h1>
        <h2>{nome}</h2>
        <h3>{idade}</h3>
        <h4>{ra}</h4>
        <h5>{nota}</h5>
        </>
    )
}