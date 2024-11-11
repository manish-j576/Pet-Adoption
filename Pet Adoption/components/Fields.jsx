
export function Field({ label, type }) {
  return (
    <>
      <h4 style={{ marginBottom: "5px" }}>{label}</h4>
      <input style={{ width: "80%", height: "25px" }} type={type}></input>
    </>
  );
}