import React, { useState } from "react";
import Formulario from "./components/Formulario";
import Tareas from "./components/Tareas";
import { firebase } from "./firebase";


function App() {

  const [tareas, setTareas] = useState([])
  const [tarea, setTarea] = useState('')
  const [modoEdicion, setModoEdicion] = useState(false)
  const [id, setId] = useState('')

  React.useEffect(() =>{
    const obtenerDatos = async () => {
      const db = firebase.firestore()
      try {
        const data = await db.collecti1on('Tareas').get()
        const arrayData = data.docs.map(doc =>({ id: doc.id, ...doc.data() }))
        setTareas(arrayData)
        console.log('arrayData', arrayData)
      } catch (error) {
        
      }
  
    }
    
    obtenerDatos()
  },[] )

  const agregarTarea = async (e) => {
    e.preventDefault()  
    if (!tarea.trim()) {
      return
    }
    try {
      const db = firebase.firestore()
      const nuevaTarea = {
        Name: tarea,
        fecha: Date.now()
      }
      const data = await db.collection('Tareas').add(nuevaTarea)
      setTareas([...tareas,{...nuevaTarea, id: data.id}])
      console.log('tarea', tareas)
      setTarea('')
    } catch (error) {
      console.log('error', error)
    }
  }

  const eliminar = async (id) => {
    try {
      const db = firebase.firestore()
      await db.collection('Tareas').doc(id).delete()
      const tareasLeft = tareas.filter(item => item.id !== id)
      setTareas(tareasLeft)
    } catch (error) {
      console.log('error', error)  
    }
  }

  const modoEditar = (item) => {
    setModoEdicion(true)
    setTarea(item.Name)
    setId(item.id)
 
  }
  
  const editar = async (e) => {
    e.preventDefault()
    if (!tarea.trim()) {
      return
    }
    try {
      const db = firebase.firestore()
      await db.collection('Tareas').doc(id).update({Name:tarea})
      const arrayModificado = tareas.map(it => it.id === id ? {...it, Name:tarea} : it)
      setTareas(arrayModificado)
      setTarea('')
      setModoEdicion(false)
      setId('')
    } catch (error) {
      console.log('error', error)
    }
  }
  

  return (
    <div className = 'container mt-3'>
      <div className="row">
        <div className="col-md-6">
          <h3>Tareas</h3>
          <ul className="list-group">
            {
              tareas.map(item => (
                <Tareas
                  key={ item.id }
                  item = { item }
                  eliminar = { eliminar }
                  modoEditar = { modoEditar }
                />
              ))
            }
          </ul>
        </div>
        <div className="col-md-6">
          <h3>{ modoEdicion ? `Editar tarea`:`Formulario` }</h3>
          <Formulario
            tarea = { tarea }
            setTarea = { setTarea }
            agregarTarea = { agregarTarea }
            modoEdicion = { modoEdicion }
            editar = { editar }
          />
        </div>
      </div>
    </div>
  );
}

export default App;
