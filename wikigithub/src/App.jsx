import './App.css'

import { useState } from 'react'

import logoGit from "../src/assets/logoGit.png"

import Input from './components/Input/Input'
import ItemRepo from './components/ItemRepo/ItemRepo'
import Button from './components/Button/Button'

import { api } from '../src/services/api'


function App() {
 
  const [currentRepo, setCurrentRepo] = useState('')
  const [repos, setRepos] = useState([])

  const handleSearchRepo = async () => {

    const {data} = await api.get(`repos/${currentRepo}`)

    if(data.id){
      const isExist = repos.find(repo => repo.id === data.id)     
        if(!isExist){
          setRepos(prev => [...prev, data])
          return
        }
        setCurrentRepo('')
    } else {
      alert('Repositório não encontrado')
    }
    
  }

  const handleRemoveRepo = (id) => {
    setRepos(prevRepos => prevRepos.filter(repo => repo.id !== id))
    console.log(id)
  }

  return (
    <div className="div_logo">
      <img src={logoGit} alt="Logo da aplicação" width={72} height={72} />
      <Input  value={currentRepo}  onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo} />)}
    </div>
      
    
  )
}

export default App
