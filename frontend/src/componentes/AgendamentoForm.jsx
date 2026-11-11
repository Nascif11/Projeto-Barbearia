import {useState} from "react";

export default function AgendamentoForm({onSubmit}) {

    const[nome,setNome] = useState('');
    const[procedimento,setProcedimento] = useState('');
    const[dia,setDia] = useState('');
    const[horario,setHorario] = useState('');
    
    const handleSubmit = async () => {  
      e.preventDefault();

      setMensagem('Aguarde..');


      const dadosAgendamento = {
        nome,
        procedimento,
        dia,
        horario
      }; 
      try{ response = await fetch('http://localhost:3000/salvar-agendamento', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dadosAgendamento)
      });
    const result = await response.json();

      if (response.ok) {
        setMensagem(result.message);
      } else {
        setMensagem("Erro ao agendar: " + result.message);
      }
    } catch (error) {
      console.error("Erro na requisição: ", error);
      setMensagem("Erro de conexão com o servidor");
    }
  };

  return (
    <form id="agendamento-form" onSubmit={handleSubmit}>
      <h1>Barbearia JS</h1>

      <p>
        Informe o nome:
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
      </p>

      <p>
        Informe o procedimento:
        <input
          type="text"
          value={procedimento}
          onChange={(e) => setProcedimento(e.target.value)}
        />
      </p>

      <p>
        Data do agendamento:
        <input type="date" value={dia} onChange={(e) => setDia(e.target.value)} />
      </p>

      <p>
        Hora do agendamento:
        <input type="time" value={horario} onChange={(e) => setHora(e.target.value)} />
      </p>

      <input type="submit" value="CONFIRMAR" />
    </form>
  );
}
