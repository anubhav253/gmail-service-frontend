import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

export const productsGenerator = quantity => {
  const items = [];
  for (let i = 0; i < quantity; i++) {
    items.push({ id: i, name: `Item name ${i}`, price: 2100 + i });
  }
  return items;
};


const columns = [
  {
    dataField: "id",
    text: "ID",
    sort: true
  },
  {
    dataField: "name",
    text: "Name",
    sort: true
  },
  {
    dataField: "messageListVisibility",
    text: "Message List Visibility"
  },
  {
    dataField: "labelListVisibility",
    text: "Label List Visibility"
  },
  {
    dataField: "type",
    text: "Type"
  }
];

export default function DefaultTable(props) {
  return (
    <div className="App">
      <BootstrapTable
        bootstrap4
        keyField="id"
        data={props.labelsData}
        columns={columns}
        pagination={paginationFactory({ sizePerPage: 5 })}
      />
    </div>
  );
}
