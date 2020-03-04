import React, { Fragment } from "react";
import { Table } from "semantic-ui-react";
import TutoTableHeader from "./TutoTableHeader";
import { TutoTableRow } from "./TutoTableRow";

export const TutoTable = (props) => {
  const tutoRows = props.tutoData.map((tuto, index) => (
    <TutoTableRow key={index} tuto={tuto} />
  ));

  return (
    <Fragment>
      <Table>
        <TutoTableHeader />
        <Table.Body>{tutoRows}</Table.Body>
      </Table>
    </Fragment>
  );
};
