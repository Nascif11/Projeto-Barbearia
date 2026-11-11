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
    } catch (error) {
      console.error('Erro ao salvar agendamento:', error);
      setMensagem('Erro ao salvar agendamento.');
    }
  }

}
