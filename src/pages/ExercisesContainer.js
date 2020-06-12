import React from 'react'
import Loading from '../components/Loading'
import ServerError from './ServerError'
import Exercises from './Exercises'
import useFetch from '../hooks/useFetch'

const ExercisesContainer = () => {
    const{ data, loading, error } = useFetch('http://localhost:8000/api/exercises')
    if(loading)
        return <Loading/>
    if(error)
        return <ServerError/>
    return (
        <Exercises data={data}/>
    )
}
    
export default ExercisesContainer

