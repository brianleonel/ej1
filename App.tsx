import MostrarFuncion from "./components/List"
function CompP(){
    let vec:{fase: string,func: string}[]=[
      {fase: "analisis", func: "se identifica el problema recopilando informacion."},
      {fase: "diseño",func: "se diseña una solucion mediante una planificacion, esta planificacion se hace en base al analisis previo"},
      {fase: "desarrollo", func: "se produce una resolucion al problema, se implementan tecnicas o metodos"},
      {fase: "pruebas", func: "se realizan pruebas para verificar que la solucion funcione correctamente, se trata de encontrar posibles errores en la solucion"},
      {fase: "implementacion",func: "se ejecuta la solucion en su entorno para ver la adaptacion"},
      {fase: "mantenimiento", func: "se ajusta o mejora la solucion"}
    ];
    const funcP=(funcion: string)=>{
      console.log(funcion)
    }
    return(<MostrarFuncion data={vec} onSelect={funcP}/>);/*onSelect ejecuta una funcion*/
}
export default CompP