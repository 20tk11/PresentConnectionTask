import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Container, Divider, Dropdown, Icon, Menu, Segment, Table } from "semantic-ui-react";
import { useStore } from "../../app/store/store";
import SupplierTable from "../components/SupplierTable";


export default function InvoicePage() {
    const { commonStore } = useStore();
    const { taxData, invoiceData } = commonStore;
    return (
        <Container textAlign="center">
            Invoice Client and Supplier
            <Divider />
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Type</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Country</Table.HeaderCell>
                        <Table.HeaderCell>Is Vat Payer</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Client</Table.Cell>
                        <Table.Cell>{taxData?.client.name}</Table.Cell>
                        <Table.Cell>{taxData?.client.country}</Table.Cell>
                        <Table.Cell>
                            {taxData?.client.isPVM === true ? <Icon color='green' name='checkmark' size='large' /> : <Icon color='red' name='x' size='large' />}
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Supplier</Table.Cell>
                        <Table.Cell>{taxData?.supplier.name}</Table.Cell>
                        <Table.Cell>{taxData?.supplier.country}</Table.Cell>
                        <Table.Cell>
                            {taxData?.supplier.isPVM === true ? <Icon color='green' name='checkmark' size='large' /> : <Icon color='red' name='x' size='large' />}


                        </Table.Cell>
                    </Table.Row>
                    {/* <SupplierTable />
                    <SupplierTable /> */}
                </Table.Body>
            </Table>
            <Divider />
            Service Invoice
            <Divider />
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Service</Table.HeaderCell>
                        <Table.HeaderCell>Price</Table.HeaderCell>
                        <Table.HeaderCell>PVM</Table.HeaderCell>
                        <Table.HeaderCell>Total</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>{taxData?.service.name}</Table.Cell>
                        <Table.Cell>{Number(taxData?.service.price).toFixed(2) + " "}$</Table.Cell>
                        <Table.Cell>{Number(invoiceData?.pvm).toFixed(2) + " "}$</Table.Cell>
                        <Table.Cell positive>{Number(Number(invoiceData?.pvm) + Number(taxData?.service.price)).toFixed(2) + " "}$</Table.Cell>
                    </Table.Row>
                </Table.Body>

            </Table>
            {invoiceData?.message}

            <Divider />
        </Container>
    )
}