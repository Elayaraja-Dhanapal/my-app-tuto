import React from "react";
import { Table } from "semantic-ui-react";

export const TutoTableRow = props => (
  <Table.Row>
    <Table.Cell>{props.tuto.id}</Table.Cell>
    <Table.Cell>{props.tuto.fileName}</Table.Cell>
    <Table.Cell>{props.tuto.fileType}</Table.Cell>
    <Table.Cell>{props.tuto.date}</Table.Cell>
  </Table.Row>
);
