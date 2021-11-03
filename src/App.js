import React, {useState} from 'react'
import "./app.css"
import DeleteIcon from '@material-ui/icons/DeleteForeverOutlined';
import EditIcon from '@material-ui/icons/EditOutlined';
import Add from '@material-ui/icons/Add';
function App() {
    const [list, setList] = useState("");
    const [err, setErr] =useState(false)
    const [items, setItems]= useState([]);
    const [edit, setEdit]= useState(false);
    const [id, setId]= useState("");
    let selection;
    const itemHandle = (event) =>{
            setList(event.target.value)

    }
    const handleSubmit= (event) =>{
        event.preventDefault()
        if(list!=="") {
            setItems((prevValue)=> [...prevValue, {text:list, isCompleted: false, id: new Date().valueOf(), isEditing:false}])
            setErr(false)
            setList("")
        }
        else {
            setErr(true)
        }
    }
    const deleteItem= (id) =>{
            setItems((prevValue)=> {
                return prevValue.filter((each)=> each.id !== id )
            });
 
    }
    const handleCheckBox= (id)=>{
        setItems((prevValue)=> {
            return prevValue.map((each)=> {
                if( each.id===id) {
                    each.isCompleted=true;
                    return each;
                }
                else {
                    return each;
                }
          
                
            })
        })
    }   
    const handleEdit= (id)=>{
        setEdit(true)
        setId(id)
        setItems((prevValue)=> {
            return prevValue.map((each)=>{
                if(each.id===id){
                    each.isEditing=true;
                   return each;
                }
                else return each;
            } )
        });
        
    }
    const editSubmit=(event)=>{
        event.preventDefault()
        console.log(event.target)
            setErr(false)
            editing(id, list)
    }
    const editing= (id, text)=>{
        setEdit(false)
        items.map((each)=>{
        if(each.id===id) {
            each.text= text;
            each.isEditing=false;
            setList("")
            return each
            
        }
        else {
            return each
        } 
    })
    }

    return (
        <div className="main">
            <div className="card">
               <h1> {edit ?  "Editing"  : "ToDoList" }</h1>
               <div className="top-section">
                   {err && <small> 	😠 Error empty input </small>}
               {items.map((each)=> {

                      each.isEditing ?
                         selection = {
                            border:'1px solid red',
                            animation: "animate 1s linear forwards"
                         } :
                            selection = {
                                border:'none'
                              }

                       return  <div className= {each.isCompleted ? "boxCompleted": "box"} style={selection} key={each.id}> <div className="content" ><p> {each.text} </p>   </div> 
                       <div className="action">
                       <input type="checkbox" checked={each.isCompleted} onChange={()=> handleCheckBox(each.id)} />
                       {
                           !each.isCompleted && <button onClick={()=> handleEdit(each.id)} className="btn3"><EditIcon />  </button>
                       }
                       
                             <button onClick={()=> deleteItem(each.id)} className="btn2"><DeleteIcon />  </button>
                       </div>

                       
                        </div>
                    })}
               </div>
                <form className="form">
                <input type="text" name="listItem" autoComplete="off" value={list} onChange={itemHandle} placeholder="add items" />
                {edit ? <button  type="submit" className="button-1" onClick={(e)=>editSubmit(e)} ><EditIcon /></button>
                    :
                <button  type="submit" className="button-1" onClick={handleSubmit} ><Add /></button>
                    }
                </form>
               
            </div>


        </div>
    )
}

export default App
