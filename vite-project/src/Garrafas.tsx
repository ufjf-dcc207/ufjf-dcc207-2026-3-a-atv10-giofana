import type { Garrafa } from "./JogoDaGarrafaContext";

interface JogoDaGarrafaProps{
  Garrafas: Garrafa[];
  selecionada: number | null;
  onclickGarrafa: => void;
}

export default function Garrafas({Garrafas, selecionada, onclickGarrafa}: JogoDaGarrafaProps) {
  return (
    <div className="garrafas">
      {Garrafas.map((garrafa, index) => (
        <div key={index} className={`garrafa ${selecionada === index ? 'selecionada' : ''}`} onClick={() => onclickGarrafa(index)}>
          {garrafa.map((cor, i) => (
            <div key={i} className={`cor ${cor}`}></div>
          ))}
        </div>
      ))}
    </div>
  )
}