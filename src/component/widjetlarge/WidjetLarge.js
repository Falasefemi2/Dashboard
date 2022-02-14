import "./widjetlarge.css";

export default function WidjetLarge() {

  const Button = ({ type }) => {
    return <button className={"widjetlgButton " + type}>{type}</button>
  }
  return (
    <div className="widjetlg">
      <h3 className="widjetlgTitle">Latest Transition</h3>
      <table className="widjetTable">
        <tr className="widjetlgTr">
          <th className="widjetlgTh">Customer</th>
          <th className="widjetlgTh">Date</th>
          <th className="widjetlgTh">Amout</th>
          <th className="widjetlgTh">Status</th>
        </tr>

        <tr className="widjetlgTr">
          <td className="widjetlgUser">
            <img src="https://img.freepik.com/free-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg?size=626&ext=jpg" alt="" className="widjetlgImg" />
            <span className="widjetlgName">Falase Femi</span>
          </td>
          <td className="widjetlgDate">2 Jun 2022</td>
          <td className="widjetlgAmout">$4000.00</td>
          <td className="widjetlgStatus"><Button type="Approved" /></td>
        </tr>
        <tr className="widjetlgTr">
          <td className="widjetlgUser">
            <img src="https://img.freepik.com/free-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg?size=626&ext=jpg" alt="" className="widjetlgImg" />
            <span className="widjetlgName">Falase Femi</span>
          </td>
          <td className="widjetlgDate">2 Jun 2022</td>
          <td className="widjetlgAmout">$4000.00</td>
          <td className="widjetlgStatus"><Button type="Approved" /></td>
        </tr>
        <tr className="widjetlgTr">
          <td className="widjetlgUser">
            <img src="https://img.freepik.com/free-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg?size=626&ext=jpg" alt="" className="widjetlgImg" />
            <span className="widjetlgName">Falase Femi</span>
          </td>
          <td className="widjetlgDate">2 Jun 2022</td>
          <td className="widjetlgAmout">$4000.00</td>
          <td className="widjetlgStatus"><Button type="Pending" /></td>
        </tr>
        <tr className="widjetlgTr">
          <td className="widjetlgUser">
            <img src="https://img.freepik.com/free-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg?size=626&ext=jpg" alt="" className="widjetlgImg" />
            <span className="widjetlgName">Falase Femi</span>
          </td>
          <td className="widjetlgDate">2 Jun 2022</td>
          <td className="widjetlgAmout">$4000.00</td>
          <td className="widjetlgStatus"><Button type="Declined" /></td>
        </tr>
      </table>
    </div>
  )
}
