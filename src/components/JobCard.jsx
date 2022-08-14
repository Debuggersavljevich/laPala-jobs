import { useEffect, useState } from 'react'
import Image from './Image'
import Details from './Details'


const JobCard = ({jobs} ) => {

    const rules = `bg-white ${jobs.modalidad ? 'featured item' : ''} max-w-4xl p-4 mb-10 shadow-lg flex justify-center items-center rounded-lg`


    

    
  return (
    <div className={rules}>
        <Image desc={jobs.empresa} />
        <Details 
            empresa={jobs.empresa}
            // recent={jobs.new}
            // featured={jobs.featured}
            puesto={jobs.puesto}
            // postedAt={jobs.postedAt}
            modalidad={jobs.modalidad}
            descripcion={jobs.descripcion}
            email={jobs.email}
            location={jobs.location}
            // tools={jobs.tools}
            // filter_f={filtering}
        />
       
    </div>
  )
}

export default JobCard