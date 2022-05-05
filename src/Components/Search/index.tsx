import React from 'react';

interface SearchProps {
  onChange: any
}

export const Search:React.FC<SearchProps> = ({onChange}) => {  
  return (
    <form onChange={onChange}>
      <input 
      type='text'
      name='query'
      />
    </form> 
  );
};

