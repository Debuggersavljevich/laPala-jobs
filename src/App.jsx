import { useState, useEffect } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Header from './components/Header'
// import ListingsData from './assets/data.json'
import JobCard from './components/JobCard'


function App() {

  const [jobs, setJobs] = useState([])

  useEffect(() => {
    const getDetailsAPI = async () => {
        try {
            const url = 'http://localhost:4000/jobs'
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()

            setJobs(resultado)
        } catch (error) {
            console.log(error);
        }
    }
    getDetailsAPI()
}, []);
  

  return (
    
    <>
        <Navbar />
        <Header />
        
        <div className='grid p-16 justify-center items-center text-gray-900 font-dosis font-bold'>
          {jobs.map(jobs => <JobCard jobs={jobs} key={jobs.id} />)}
        </div>
        
    </>
  )
}

export default App
