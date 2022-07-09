import React, { useState, useEffect } from 'react';
import './styles.css'
import { Card, CardProps } from '../../components/Card'

type ProfileResponse = {
  name:string;
  avatar_url:string;
}

type User = {
  name:string;
  avatar:string;
}

export function Home() {
  const [studentName, setSudentName] = useState('');
  const [students, setSudents] = useState<CardProps[]>([]);
  const [user, setUser] = useState<User>({} as User)
  
function handleAddStudent() {
  const newStudent ={
    name: studentName,
    time: new Date().toLocaleDateString("pt-br", {
      hour: '2-digit',
      minute: '2-digit',
    }),
  };
  setSudents (prevState => [...prevState, newStudent])
};

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.github.com/users/Mar0la')
      const data = await response.json() as ProfileResponse;
      
      setUser({
        name: data.name,
        avatar: data.avatar_url
      })
    }
    fetchData() 
  }, [])

  return (
   <div className="container">
      <header>
        <h1>Lista de Presença</h1>

      <div>
        <strong>{user.name}</strong>
        <img src={user.avatar} alt="Foto de Perfil" />
      </div>
      
      </header>
     <input 
     type="text" 
      placeholder="Digite um nome..." 
      onChange={e => setSudentName(e.target.value)}/>
      <button type="button" onClick={handleAddStudent}>Adicionar</button>
    
      {
        students.map(student => (
          <Card 
            key={student.time}
            name={student.name} 
            time={student.time}
          />
        ))
      }
   </div>
  )
}

