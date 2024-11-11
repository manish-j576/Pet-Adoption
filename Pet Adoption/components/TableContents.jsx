export function TableContents({ item }) {
  return (
    <>
      <table>
        <tr>
          <td style={{ border: "2px solid black" }}>{item.PetName}</td>
          <td style={{ border: "2px solid black" }}>{item.PetType}</td>
          <td style={{ border: "2px solid black" }}>{item.Breed}</td>
          <td style={{ border: "2px solid black" }}>{item.YourName}</td>
          <td style={{ border: "2px solid black" }}>{item.Email}</td>
          <td style={{ border: "2px solid black" }}>{item.Phone}</td>
        </tr>
      </table>
    </>
  );
}
