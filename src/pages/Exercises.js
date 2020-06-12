import React from 'react'
import Welcome from '../components/Welcome'
import ExerciseList from '../components/ExerciseList'
import AddExercise from '../components/AddExercise'

const Exercises = ({data}) => (
    <React.Fragment>
        <Welcome username="Mikkel"/>
        <ExerciseList exercises={data}/>
        <AddExercise/>
    </React.Fragment>
)

export default Exercises