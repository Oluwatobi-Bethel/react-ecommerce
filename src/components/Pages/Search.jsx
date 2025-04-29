import React, {useEffect, useState} from 'react'
import {useSearchParams, useNavigate } from 'react-router-dom'
import card_detail from '../../assets/product'
import Card from '../CardFiles/Card'

const Search = () => {
    const [searchParams]= useSearchParams()
    const navigate= useNavigate()
    const categoryQuery=searchParams.get('category')?.toLowerCase() || ''
    const [results, setResult]= useState([])
    useEffect(()=> {
        const filtered = card_detail.filter((item)=>
            item.category.toLowerCase()===categoryQuery
        )

        if (filtered.length===0){
            navigate('/')
        }
        else {
            setResult(filtered)
        }
    }, [categoryQuery, navigate])


  return (
    <div className='new_collections'>
      <h1>Search result for '{categoryQuery}'</h1>
      {results.map((card)=> {
        return<Card key={card.id} 
          id={card.id}
          name={card.name}
          img={card.img}
          new_price={card.new_price}
          old_price={card.old_price}
        />
      })}
    </div>
  )

}

export default Search