import styled from "styled-components";

const SectionHome = styled.section `
    min-height: calc(100vh - 57px);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const H2 = styled.h2 `
    text-align: center;
    margin-bottom: 3rem;
`;

function Home() {
    return (
        <SectionHome className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <H2 className="font-weight-bold">Form CRUD </H2>

                            <p className="card-text">
                                Estamos muito felizes em ter você por aqui. Nosso objetivo é proporcionar uma experiência única e inovadora. Navegue à vontade, explore nosso conteúdo e descubra como podemos ajudá-lo a alcançar seus objetivos.
                            </p>

                            <p>Seja parte dessa jornada e fique à vontade para nos enviar suas dúvidas ou sugestões!</p>
                        </div>
                    </div>
                </div>
            </div>
        </SectionHome>
    );
}

export default Home;