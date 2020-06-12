import React from 'react'
import ServerError from './ServerError'
import ExerciseNew from './ExerciseNew'

class ExerciseNewContainer extends React.Component {
    
    state = {
        form: {},
        loading: false,
        error: null
    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = async e => {
        //Controla el reload de la pagina
        e.preventDefault()

        this.setState({
            loading: true
        })

        try {
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(this.state.form)
            }
            await fetch('http://localhost:8000/api/exercises', config)
            this.setState({
                loading: false
            })
            this.props.history.push('/exercise')
        } catch (error) {
            this.setState({
                loading: false,
                error
            })
        }
    }

    render(){
        {console.log(this.state.form)}
        if(this.state.error)
            return <ServerError/>
        return (
            
            <ExerciseNew
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                form={this.state.form}
            />
        )
    }
}

export default ExerciseNewContainer