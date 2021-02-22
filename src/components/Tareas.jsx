import React from 'react'

const Tareas = (props) => {
return (
<>
    <li className="list-group-item">
        { props.item.Name }
        <button className="btn btn-danger btn-sm float-end" onClick={ ()=> props.eliminar(props.item.id) }>
            Eliminar
        </button>
        <button className="btn btn-sm float-end btn-warning me-2" onClick={ ()=> props.modoEditar(props.item) }
            >
            Editar
        </button>
    </li>
</>
)
}

export default Tareas