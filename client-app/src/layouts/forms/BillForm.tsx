import { Console } from "console";
import { observer } from "mobx-react-lite";
import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { Button, Container, Divider, Dropdown, DropdownProps, Form, Header, Icon, Label, Menu, Modal, Segment } from "semantic-ui-react";
import agent from "../../app/api/agent";
import { TaxData } from "../../app/models/taxData";
import { useStore } from "../../app/store/store";
const options = [
    { key: 0, text: 'No', value: false },
    { key: 1, text: 'Yes', value: true },
]

export default observer(function BillForm() {
    const [open, setOpen] = React.useState(false)

    const { commonStore } = useStore();
    const { getInvoice, countriesOptions, countryRegistry, countries, loadCountries } = commonStore;
    const navigate = useNavigate();
    useEffect(() => {
        if (countryRegistry.size <= 0) {
            loadCountries();

        }
    }, [loadCountries, countryRegistry.size, countriesOptions])


    const [taxData, setTaxData] = useState({
        suppliername: '',
        suppliercountry: '',
        supplierisPVM: false,
        clientname: '',
        clientcountry: '',
        clientisPVM: false,
        servicename: '',
        serviceprice: 0,
    });
    function HandleResult() {
        if (taxData.clientcountry !== '' && taxData.suppliercountry !== '') {
            getInvoice(getTaxData()).then(() => navigate(`/invoice`));

        }
        else {
            setOpen(true);
        }

    }
    function getTaxData() {
        var formData = {
            supplier: {
                name: taxData.suppliername,
                country: taxData.suppliercountry,
                isPVM: taxData.supplierisPVM,
            },
            client: {
                name: taxData.clientname,
                country: taxData.clientcountry,
                isPVM: taxData.clientisPVM,
            },
            service: {
                name: taxData.servicename,
                price: taxData.serviceprice
            }
        }
        return formData;
    }
    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setTaxData({ ...taxData, [name]: value });
    }
    function handleSelectChange(event: SyntheticEvent<HTMLElement, Event>, data: DropdownProps) {
        const { name, value } = data;
        setTaxData({ ...taxData, [name]: value })
    }
    return (
        <Container textAlign='center'>
            <Modal
                basic
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                size='small'
            >

                <Modal.Content  >
                    <p>
                        Dropdown selections cannot be empty
                    </p>
                </Modal.Content>
            </Modal>
            <Form onSubmit={HandleResult}>
                <Label.Detail align="left">Client</Label.Detail>

                <Form.Group widths='equal'>
                    <Form.Input required fluid label='Client Name' placeholder='Client Name' name="clientname" onChange={handleInputChange} />
                    <Form.Select required
                        placeholder='Country'
                        fluid
                        label='Country'
                        search
                        selection
                        options={countriesOptions}
                        name="clientcountry"
                        onChange={handleSelectChange}
                    />
                    <Form.Select
                        fluid
                        required
                        label='VAT payer'
                        options={options}
                        placeholder='VAT payer'
                        name="clientisPVM"
                        onChange={handleSelectChange}
                    />
                </Form.Group>
                <Divider section />
                <Label.Detail align="left">Supplier</Label.Detail>
                <Form.Group widths='equal'>
                    <Form.Input required fluid label='Supplier Name' placeholder='Supplier Name' name="suppliername" onChange={handleInputChange} />
                    <Form.Select required
                        placeholder='Country'
                        fluid
                        label='Country'
                        search
                        selection
                        options={countriesOptions}
                        name="suppliercountry"
                        onChange={handleSelectChange}
                    />
                    <Form.Select required
                        fluid
                        label='VAT payer'
                        options={options}
                        placeholder='VAT payer'
                        name="supplierisPVM"
                        onChange={handleSelectChange}
                    />
                </Form.Group>


                <Divider section />
                <Label.Detail align="left">Service</Label.Detail>
                <Form.Group widths='equal'>
                    <Form.Input required fluid label='Service Name' placeholder='Service Name' name="servicename" onChange={handleInputChange} />
                    <Form.Input required min={0} type="number" step="0.01" fluid label='Price' placeholder={0} name="serviceprice" onChange={handleInputChange} />


                </Form.Group>
                <Divider section />

                <Button positive type='submit'>Submit</Button>


            </Form>
        </Container>

    )
})

