import { useRef } from "react";

export function Form2({data , setData}){
  
  const PetNameRef = useRef("");
  const PetTypeRef = useRef("");
  const BreedRef = useRef("");
  const YourNameRef = useRef("");
  const EmailRef = useRef("");
  const PhoneRef = useRef(0);

  function submitData(event){
    event.preventDefault();
    const PetName = PetNameRef.current.value;
    const PetType = PetTypeRef.current.value;
    const Breed = BreedRef.current.value;
    const YourName = YourNameRef.current.value;
    const Email = EmailRef.current.value;
    const Phone = PhoneRef.current.value;
    const formData = {
      PetName,
      PetType,
      Breed,
      YourName,
      Email,
      Phone
    }
    setData (prevData => [...prevData,formData])
    console.log("inside form element ddaya = ")
    console.log(data)

    PetNameRef.current.value="";
    PetTypeRef.current.value="";
    BreedRef.current.value="";
    YourNameRef.current.value="";
    EmailRef.current.value="";
    PhoneRef.current.value="";
  }
  
  return <div
      style={{
        color: "green",
        height: "100vh",
        width: "100%",
        marginTop: 30,
        display: "flex",
        justifyContent: "center",
      }}
    >
    <div
      style={{
        background: "#ad8c1c",
        width: "42%",
        padding: 20,
        opacity: 0.5,
      }}
    >
      <form>
        

        <h4 style={{ marginBottom: "5px" }}>PetName</h4>
        <input ref={PetNameRef}></input>
        <h4 style={{ marginBottom: "5px" }}>PetType</h4>
        <input ref={PetTypeRef}></input>
        <h4 style={{ marginBottom: "5px" }}>Breed</h4>
        <input ref={BreedRef}></input>

        
        <h4 style={{ marginBottom: "5px" }}>Your Name</h4>
        <input ref={YourNameRef}></input>
        <h4 style={{ marginBottom: "5px" }}>Email</h4>
        <input ref={EmailRef}></input>
        <h4 style={{ marginBottom: "5px" }}>Phone</h4>
        <input ref={PhoneRef}></input>
        <br></br>
        <button onClick={submitData}
          style={{
            background: "green",
            marginTop: 12,
            width: "82%",
            height: "25px",
            opacity: 1,
          }}
        >
          Submit
        </button>
      
      
      </form>

    </div>

  </div>
}