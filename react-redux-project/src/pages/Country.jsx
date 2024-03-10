import React, { useEffect } from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import { getCountry } from '../features/country/countrySlice'

const Country = () => {

    const {country} = useSelector(state => state.country)
    
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(getCountry())
    }, [])
    
  return (
    <div>
      Hello
    </div>
  )
}

export default Country
