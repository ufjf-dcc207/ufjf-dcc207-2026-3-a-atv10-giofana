import React, { type ReactNode } from "react";

type Garrafa = string[];
const capacidadeMaxima = 4;

interface JogoDaGarrafaProps{
  Garrafas: Garrafa[];
  selecionarGarrafa: (index: number) => void;
  selecionada: number | null;
  reiniciarJogo: () => void;
  ganhou: boolean;
  children: ReactNode;
}

const EstadoInicial: Garrafa[] = [
  ['🔴','🟢','🟡','🟢'],
  ['🟡','🟡','🟢','🔴'],
  ['🔴','🟡','🟢','🔴'],
  []
];

export const JogoDaGarrafaContext = React.createContext<JogoDaGarrafaProps>({} as JogoDaGarrafaProps);

export function JogoDaGarrafa({children}: {JogoDaGarrafaProps}) {
    const [garrafas, setGarrafas] = React.useState<Garrafa[]>(EstadoInicial);
    const [selecionada, setSelecionada] = React.useState<number | null>(null);
    
    function selecionarGarrafa(index: number) {
        if (selecionada === null) {
          if(garrafas[index].length === 0) setSelecionada(index);
        } elseif (selecionada === index) {
          setSelecionada(null);
        } else{
          despejar(selecionada, index);
          setSelecionada(null);
        }
    return (
        <div>
        </div>
    )

}