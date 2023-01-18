## PresentConnectionTask

Back-End:
  * .Net with two api endpoints:
    * CountriesGet - returns country list
    * TaxGet - get PVM value
  * Did not find how to get pvm values for all countries so created a method that return pvm of value 21, for a possibility to implement that functionality
  * Country and Tax logic is in Repository
  
Front-End:
  * ReactJS, Typescript
  * Used Semantic-UI framework for styling
  * Input Form
    * Client : Name, Country (Dropdown/Search), isPVM (Dropdown)
    * Supplier : Name, Country (Dropdown/Search), isPVM (Dropdown)
    * Service : Name, Price
 * Invoice page:
    * Present Input values and the PVM, with Total (PVM + Price)
    
Testing: 
  * XUnit
    * Tests for countries and tax logic

# Page Screenshots
