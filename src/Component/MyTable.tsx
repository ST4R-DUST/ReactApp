import * as React from 'react';
import { Table } from 'semantic-ui-react';

export interface IMyTableProps{
    si:number;
    no:number;
}

export function MyTable(props: IMyTableProps){
    return(
        <Table celled padded>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell singleLine>
                        DELETE THIS
                    </Table.HeaderCell>
                    <Table.HeaderCell>Si</Table.HeaderCell>
                    <Table.HeaderCell>No</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                <Table.Row>
                    <Table.Cell>

                    </Table.Cell>
                    <Table.Cell>{props.si}</Table.Cell>
                    <Table.Cell>{props.no}</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    );
}
