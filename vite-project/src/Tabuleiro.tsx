import { useContext } from "react";
import { JogoDaGarrafaContext } from "./JogoDaGarrafaContext";
import Garrafa from "./Garrafa";

export default function Tabuleiro() {
    const { garrafas, selecionada, selecionarGarrafa, reiniciarJogo, ganhou } = useContext(JogoDaGarrafaContext);

    return (
        <div>
            <div>
                <button onClick={reiniciarJogo}>Reiniciar Jogo</button>
                {ganhou && <span style={{ marginLeft: '10px', color: 'green' }}>Parabéns, você venceu!</span>}
            </div>

            <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
                {garrafas.map((garrafa, index) => (
                    <Garrafa
                        key={index}
                        garrafa={garrafa}
                        selecionada={selecionada === index}
                        onClick={() => selecionarGarrafa(index)}
                    />
                ))}
            </div>
        </div>
    );
}