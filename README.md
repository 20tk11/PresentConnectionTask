## PresentConnectionTask

To reach the form need to navigate through Bill button on navbar, from there by submitting Form invoice page will be submitted

Back-End:
  * .Net with two api endpoints:
    * CountriesGet - returns country list
    * TaxGet - get PVM value
  * Did not find how to get pvm values for all countries so created a method that return pvm of value 21, with a possibility to implement that functionality
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
 * Form, Invoice Pages and Footer are Reactive.
    
Testing: 
  * XUnit
    * Tests for countries and tax logic

# Page Screenshots

Form Page
![image](https://user-images.githubusercontent.com/85391870/213109724-739fa061-30cc-4875-be82-a70b205b2ddb.png)

Invoice Page
Case(Supplier is PVM, Client and Supplier in same country = PVM is x)
![image](https://user-images.githubusercontent.com/85391870/213110346-e5a9922e-6ddf-404b-b896-ab37261cee0e.png)

Case(Supplier is PVM, Client lives not in EU = PVM is 0)
![image](https://user-images.githubusercontent.com/85391870/213111100-0619d2cb-30aa-4758-be89-be79b8bd3080.png)

Case(Supplier is PVM, Client lives in EU and is PVM = PVM is 0)
![image](https://user-images.githubusercontent.com/85391870/213111979-b49fcf9f-fcc1-4339-acd5-318bc99ffe24.png)

Case(Supplier is PVM, Client lives in EU and is not PVM = PVM is x)
![image](https://user-images.githubusercontent.com/85391870/213112259-f17adb40-fc70-4962-b4a7-ef5f67c44762.png)

Case(Supplier is not PVM, PVM is 0)
![image](https://user-images.githubusercontent.com/85391870/213112471-cd157e88-eac4-415f-951a-9e66fbd73a4b.png)

