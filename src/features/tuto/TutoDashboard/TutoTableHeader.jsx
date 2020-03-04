import React from 'react'
import { Table } from 'semantic-ui-react'

export default function TutoTableHeader() {
    return (
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>
                    #
                </Table.HeaderCell>
                <Table.HeaderCell>
                    File Name
                </Table.HeaderCell>
                <Table.HeaderCell>
                    File Type
                </Table.HeaderCell>
                <Table.HeaderCell>
                    Date
                </Table.HeaderCell>
            </Table.Row>
        </Table.Header>
    )
}
