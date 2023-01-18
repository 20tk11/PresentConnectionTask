import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Container, Divider, Dropdown, Icon, Menu, Segment, Table } from "semantic-ui-react";
import { Client } from "../../app/models/client";
import { Supplier } from "../../app/models/supplier";
import { useStore } from "../../app/store/store";
interface Props {
    name: string | undefined;
    country: string | undefined;
    isPVM: boolean | undefined;
    individual: string | undefined;
}

export default function SupplierTable({ name, country, isPVM, individual }: Props) {
    return (



        <Table.Row>
            <Table.Cell>
                {individual === "Client" ? "Client" : "Supplier"}
            </Table.Cell>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell>{country}</Table.Cell>
            <Table.Cell>
                {isPVM === true ? <Icon color='green' name='checkmark' size='large' /> : <Icon color='red' name='x' size='large' />}
            </Table.Cell>
        </Table.Row>

    )
}