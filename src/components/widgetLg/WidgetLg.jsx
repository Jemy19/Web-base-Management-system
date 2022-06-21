import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://en.gundam.info/series/tekketsu/wp-content/uploads/sites/7/2016/02/01.png" alt="" className="widgetLgImg"/>
             <span className="widgetLgName">Archie Delapaz</span>
          </td>
          <td className="widgetLgDate">17 May 2022</td>
          <td className="widgetLgAmount">PHP 200</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://en.gundam.info/series/tekketsu/wp-content/uploads/sites/7/2016/02/01.png" alt="" className="widgetLgImg"/>
            <span className="widgetLgName">Archie Delapaz</span>
          </td>
          <td className="widgetLgDate">17 May 2022</td>
          <td className="widgetLgAmount">PHP 200</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://en.gundam.info/series/tekketsu/wp-content/uploads/sites/7/2016/02/01.png" alt=""className="widgetLgImg"/>
             <span className="widgetLgName">Archie Delapaz</span>
          </td>
          <td className="widgetLgDate">17 May 2022</td>
          <td className="widgetLgAmount">PHP 200</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://en.gundam.info/series/tekketsu/wp-content/uploads/sites/7/2016/02/01.png" alt="" className="widgetLgImg"/>
            <span className="widgetLgName">Archie Delapaz</span>
          </td>
          <td className="widgetLgDate">17 May 2022</td>
          <td className="widgetLgAmount">PHP 200</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}