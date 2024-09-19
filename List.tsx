import { useState } from "react";

interface Elem{
  fase: string,
  func: string;
}
interface VecE{
  data: Elem[];
  onSelect?: (func: string)=>void/*declaro la estructura de la funcion q puede ser definida o no*/
}
function MostrarFuncion({data,onSelect}: VecE){/*la funcion la psao como una prop */
  const [index,setIndex]=useState(-1)  
  /*useState me permite manejar el estado dentro de un componente.
  setIndex notifica que la variable cambio de estado
  [variableEst,funcionActEst]*/
  const printE=(i: number, func: string)=>{
        setIndex(i);/*retorna i? */
        onSelect?.(func)/*si esta funcion esta definida se va a ejecutar */
    }
    return(
      <ul
        className="list-group"
      >
        {data.map((elem,i)=>(
          <li
            key={i}
            onClick={()=>printE(i,elem.func)}
            className={`list-group-item ${index==i?"active":""}`}
            /*`` me permite incluir expresiones sin concatenar.
              $ me permite interpolar una variable o expresion. 
            {} evalua una expresion de javaScript.*/
          >
            {elem.fase}
          </li>
        )
        )}
      </ul>
    );
}
export default MostrarFuncion
