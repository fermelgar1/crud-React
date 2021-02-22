import React from 'react'

const Formulario = (props) => {
    const { modoEdicion } = props
    return (
        <>
        <form onSubmit={ modoEdicion ? props.editar : props.agregarTarea }>
            <input 
                type="text" 
                placeholder="ingrese tarea" 
                className="form-control mb-2"
                value={ props.tarea }
                onChange={ (e) => props.setTarea(e.target.value) }
            />
            {modoEdicion ? 
                <button className="btn btn-warning w-100">Editar</button>
                :
                <button className="btn-dark w-100 btn" type='submit'> Agregar</button>
            }
    
        </form>
        </>
    )
}

export default Formulario
