import { TableContents } from "./TableContents";


export function Table({data , setData}) {

  
    return (<>


      {console.log("inside table .jsx data=")}
      {console.log(data)}

        
        {data.map(item => <TableContents item={item} ></TableContents>)}
        
      </>)
}