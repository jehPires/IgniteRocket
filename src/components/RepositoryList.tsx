import {RepositoryItem} from "./RepositoryItem";
import '../styles/repositories.scss';
import { useEffect, useState } from "react";

//https://api.github.com/orgs/rocketseat/repos


export function RepositoryList(){
    const [repositories, setRepositories] = useState([]); //legal iniciar o estado com o tipo da variável que vou armazenar
    
    useEffect(()=> {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response=>response.json())
        .then(data=>setRepositories(data))
    }, []); //cuidar para nunca deixar sem o segundo parametro-loop
    
    return(
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                {repositories.map(repository =>{ //chaves para incluir codifo JS no Html;
                //usei o map para percorrer cada repositorio ao inves do forEach pois preciso do retorno
                    return <RepositoryItem key={repository.name} repository={repository} />}
                    )}
            </ul>
        </section>
    );
}