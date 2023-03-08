export const Tabla = ({ chances, contenedorTotal }) => {
    console.log(contenedorTotal)
return (
    <div className="table-responsive">
        <table className="table table-secondary">
            <thead>
                <tr>
                    <th scope="col"> N° Chance</th> <br/>
                    <th scope="col"> Precio</th> <br/>
                    <th scope="col"> Total</th> <br/>
                </tr>
            </thead>
            <tbody>
            
                {chances.map((chance, i)=> {
                    return(
                        <tr key={i}>
                        <td scope="row">{chance.numero}</td> 
                        <td >{contenedorTotal[i].Total}</td>
                    </tr>
                    )
                })}
                
            </tbody>
        </table>
    </div>
)}
