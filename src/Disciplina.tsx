

type DisciplinaProps = {
    nome: string;
    codigo: string;
};
function Disciplina({codigo, nome}: DisciplinaProps) {
    return (

        <div className="disciplina">
            <div>{codigo}</div>
            <div>{nome}</div>

        </div>
);
}

export default Disciplina;