export interface LugaresParaVisitarProps {
    nome: string;
    atividades: string[];
}

export interface Data {
    nome: string;
    destino: string;
    data_de_partida: string;
    data_de_retorno: string;
    objetivo: string;
    numero_de_pessoas: number;
    lugares_para_visitar: LugaresParaVisitarProps[];
}