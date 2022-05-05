import React from 'react'
import {buildImageUrl} from '../../helpers/imageURL'

interface CompaniesProps {
    companiesList: {id: number, logo_path: string, name: string, original_country: string}[] // щоб вказати, що це масив об*єктів
}

export const Companies: React.FC<CompaniesProps> = ({companiesList}) => {
  return (
    <>
      {companiesList.map(el => (
           <img src={buildImageUrl(el.logo_path)} alt={el.name} key={el.id}/>
      ))}
       
    </>
  )
}


