import React from "react";

export default function Row({
  id,
  shippify,
  date,
  status,
  customer,
  email,
  country,
  shipping,
  source,
  ordertype,
}) {
  return (
    <tr>
      <td>
        <label class="checkbox">
          <input class="check" type="checkbox" />
        </label>
      </td>
      <td>
        <div>{id}</div>
      </td>
      <td>
        <div>{shippify}</div>
      </td>
      <td>
        <div>{date}</div>
      </td>
      <td>
        <div>{status}</div>
      </td>
      <td>
        <div>{customer}</div>
      </td>
      <td>
        <div>{email}</div>
      </td>
      <td>
        <div>{country}</div>
      </td>
      <td>
        <div>{shipping} </div>
      </td>
      <td>
        <div>{source}</div>
      </td>
      <td>
        <p>{ordertype}</p>
      </td>
      <td>
        <div class="text-icon">
          <img
            src="edit-icon-png.png"
            alt="edit icon"
            height="18px"
            className="edit-icon"
            onclick="editRow(this)"
          />
        </div>
      </td>
    </tr>
  );
}
