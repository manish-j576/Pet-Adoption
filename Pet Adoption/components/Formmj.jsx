import {Field} from "./Fields"
export function Formmj({ fields }) {
  return (
    <div
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
          width: "40%",
          padding: 20,
          opacity: 0.5,
        }}
      >
        <form>
          {fields.map((item) => (
            <Field label={item.label} type={item.type}></Field>
          ))}
          <br></br>
          <button
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
  );
}