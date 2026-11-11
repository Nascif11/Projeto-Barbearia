export default function Resposta({mensagem}) {
    if(!mensagem) return null;
    return  <p id="resposta">{mensagem}</p>


}