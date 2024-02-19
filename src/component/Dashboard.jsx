import React, { useState } from "react";
import Row from "./Table/Row";
import { tableData } from "../api/data";

export default function Dashboard() {
  const [rowsData, setRowsData] = useState(tableData);
  const [searchVal, setSearchVal] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleOnChange = (event) => {
    setSearchVal(event.target.value);
  };

  const handleCategory = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleStatus = (event) => {
    setSelectedStatus(event.target.value);
  };

  const handleSUbmit = () => {
    const filteredData = rowsData.filter((obj) => {
      for (let key in obj) {
        if (
          obj[key].toString().toLowerCase().includes(searchVal.toLowerCase())
        ) {
          return true;
        }
      }
      return false;
    });

    setRowsData(filteredData);
  };

  return (
    <>
      <div className="dashboard">
        <div className="header">
          <b className="order">Orders</b>
          <button className="create-button">CREATE NEW</button>
        </div>
        <div className="container">
          <div className="col-one">
            <label className="texting" for="What are you looking for?">
              <b>What are you looking for?</b>
            </label>
            <br />
            <br />
            <form className="nosubmit">
              <input
                className="nosubmit"
                onChange={handleOnChange}
                value={searchVal}
                type="search"
                id="myInput"
                // onkeyup="myFunction()"
                placeholder="search for category, name, company,etc"
              />
            </form>
          </div>
          <div className="col-two">
            <label for="language">
              <b>Category</b>
            </label>
            <br />
            <br />
            <select
              className="categories"
              id="categories"
              onChange={handleCategory}
            >
              <option value="category one">category one</option>
              <option value="category two">category two</option>
              <option value="category three">category three</option>
              <option value="all" selected>
                ALL
              </option>
            </select>
          </div>
          <div className="col-three">
            <label for="status">
              <b>Status</b>
            </label>
            <br />
            <br />
            <select
              className="status"
              id="status"
              value={selectedStatus}
              onChange={handleStatus}
            >
              <option value="status one">Pending</option>
              <option value="status two">Completed</option>
              <option value="status three">Pending</option>
              <option value="all">ALL</option>
            </select>
          </div>
          <div className="col-four">
            <label for="status"></label>
            <br />
            <br />
            <button className="arrow-button">
              <img
                src="down-arrow.jpg"
                alt="down arrow"
                height="20px"
                className="down-arrow"
              />
            </button>
          </div>
          <div className="col-five">
            <label for="status"></label>
            <br />
            <br />
            <button
              className="searchbutton"
              type="submit"
              onClick={handleSUbmit}
            >
              SEARCH
            </button>
          </div>
        </div>
        <div className="table-content">
          <div className="table-header">
            <b>Product Summery</b>
            <p
              style={{
                marginLeft: "auto",
              }}
            >
              show
            </p>
            <div className="all-col">
              <label for="all-column"></label>
              <select
                name="col"
                id="col"
                className="column"
                value={selectedCategory}
                onChange={handleCategory}
              >
                <option value="col one">column one</option>
                <option value="col two">column two</option>
                <option value="col three">column three</option>
                <option value="all column" selected>
                  ALL COLUMN{" "}
                </option>
              </select>
            </div>
            <button className="dispatch">DISPATCH SELECTED</button>
            <div className="pagination">
              <a href="/">&lt;</a>
              <a href="/">1</a>
              <a href="/">2</a>
              <button className="page-button">
                <a href="/">3</a>
              </button>
              <a href="/">.</a>
              <a href="/">.</a>
              <a href="/">.</a>
              <a href="/">.</a>
              <a href="/">.</a>
              <a href="/">10</a>
              <a href="/">&gt;</a>
            </div>
          </div>
          <table id="myTable">
            <thead>
              <tr>
                <th>
                  <label className="checkbox">
                    <input className="check" type="checkbox" />
                  </label>
                </th>
                <th>
                  <span>ID</span>
                </th>
                <th>
                  <span>SHIPPIFY</span>
                </th>
                <th>
                  <span>DATE</span>
                </th>
                <th>
                  <span>STATUS</span>
                </th>
                <th>
                  <span>CUSTOMER</span>
                </th>
                <th>
                  <span>EMAIL</span>
                </th>
                <th>
                  <span>COUNTRY</span>
                </th>
                <th>
                  <span>SHIPPING</span>
                </th>
                <th>
                  <span>SOURCE</span>
                </th>
                <th>
                  <span>ORDER TYPE</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rowsData.map(
                (
                  {
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
                  },
                  index
                ) => {
                  return (
                    <Row
                      id={id}
                      shippify={shippify}
                      date={date}
                      status={status}
                      customer={customer}
                      email={email}
                      country={country}
                      shipping={shipping}
                      source={source}
                      ordertype={ordertype}
                      key={index}
                    />
                  );
                }
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
