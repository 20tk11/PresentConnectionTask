import { makeAutoObservable } from "mobx";
import agent from "../api/agent";
import { Country } from "../models/country";
import InvoiceData from "../models/invoiceData";
import { TaxData } from "../models/taxData";

interface Options {
    text: string;
    value: string;
}

export default class CommonStore {
    countryRegistry = new Map<string, Country>();
    invoiceData: InvoiceData | undefined;
    taxData: TaxData | undefined;
    loadingInitial = false;
    countriesOptions = new Array<Options>();
    countriesLoaded = false;

    constructor() {
        makeAutoObservable(this)
    }
    get countries() {
        return Array.from(this.countryRegistry.values());
    }

    loadCountries = async () => {
        this.setLoadingInitial(true);
        try {
            if (this.countryRegistry.size > 0) {
                this.countryRegistry.clear();
            }
            if (this.countriesOptions.length === 0) {
                this.setCountriesLoaded(false);
            }
            const variables = await agent.Countries.get()
            variables.forEach(element => {
                this.setCountry(element.country, element);
                if (!this.countriesLoaded) {
                    this.setCountryOption(element);
                }
            })
            console.log(this.countriesOptions)
            this.setCountriesLoaded(true);
            this.setLoadingInitial(false);
        } catch (error) {
            console.log(error);
            this.setLoadingInitial(false);
        }
    }
    getInvoice = async (data: TaxData) => {
        this.setLoadingInitial(true);
        try {
            this.setTaxData(data);
            const variables = await agent.Tax.post(data)
            this.invoiceData = variables;
            this.setLoadingInitial(false);
        } catch (error) {
            console.log(error);
            this.setLoadingInitial(false);
        }
    }
    private setTaxData = (data: TaxData) => {
        this.taxData = data;
    }
    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }
    setCountriesLoaded = (state: boolean) => {
        this.countriesLoaded = state;
    }
    private setCountry = (name: string, variable: Country) => {
        this.countryRegistry.set(name, variable);
    }
    private setCountryOption = (element: Country) => {
        var temp = { "key": element.country, "text": element.country, "value": element.country };
        this.countriesOptions.push(temp);
    }
}