import { useState, useEffect } from "react";
import api from '../../services/api.js';
import styled from "styled-components";
import HeaderTitle from "../../components/HeaderTitle/headerTitle";

const Tr = styled.tr `
    width: 100%;

    & th {
        text-align: center;
    }

    & td {
        text-align: center;
    }
`;

const Button = styled.button `
    text-align: center;
`;

function Listar() {
    const [jogador, setJogador] = useState([]);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        api.get('/jogador')
        .then((response) => {
            setJogador(response.data);
            setLoad(false);
        })
        .catch((error) => {
            console.error(`Error: ${error}`);
            setLoad(false);
        });
    }, []);

    function renderTbodyLines() {
        let count = 1;

        if (load) {
            return (
                <Tr>
                    <td colSpan="7">Loading ...</td>
                </Tr>
            );
        }

        return (
            <>
                {jogador.map((jog) => (
                    <Tr key={jog.id}>
                        <td># {count++}</td>
                        <td>{jog.nome}</td>
                        <td>{jog.idade} anos</td>
                        <td>{jog.time}</td>
                        <td>{jog.contratacao}</td>
                        <td>{jog.demissao}</td>
                        <td>
                            <Button 
                                type="button" 
                                className="btn btn-default btn-sm"
                            >
                                <i className="fa fa-edit"></i>
                            </Button>

                            <Button 
                                type="button" 
                                className="btn btn-default btn-sm"
                            >
                                <i className="fa fa-trash"></i>
                            </Button>
                        </td>
                    </Tr>
                ))}
            </>
        );
    }

    return (
        <section>
            <HeaderTitle
                title="Listar"
                subTitle="Lista dos Jogadores"
            />

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <div className="card-tools">
                                    <div className="input-group input-group-sm" style={{ width: 150 }}>
                                        <input type="text" name="table_search" className="form-control float-right" placeholder="Search" />
                                        <div className="input-group-append">
                                            <button type="submit" className="btn btn-default"><i className="fas fa-search" /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card-body table-responsive p-0">
                                <table className="table table-hover">
                                    <thead>
                                        <Tr>
                                            <th>#</th>
                                            <th>NOME</th>
                                            <th>IDADE</th>
                                            <th>TIME</th>
                                            <th>DATA CONTRATAÇÃO</th>
                                            <th>DATA DEMISSÃO</th>
                                            <th>DETALHES</th>
                                        </Tr>
                                    </thead>
                                    <tbody>
                                        {renderTbodyLines()}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Listar;