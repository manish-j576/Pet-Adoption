
import { Header } from "./Header";
import { Form2} from "./Form2";

export function Home({data , setData}){
  
  return <>
  <Header></Header>
    <Form2 data={data} setData={setData}></Form2>
  
  </>
}