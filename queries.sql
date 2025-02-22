-- Database Queries

-- Find all customers with postal code 1010
SELECT * FROM Customers where postalcode = 1010;
-- Find the phone number for the supplier with the id 11
SELECT phone FROM Suppliers where supplierid = 11;
-- List first 10 orders placed, sorted descending by the order date
SELECT * FROM Orders order by orderdate desc limit 10;
-- Find all customers that live in London, Madrid, or Brazil
SELECT * FROM Customers where city = 'London'or'Madrid'or'Brazil';
-- Add a customer record for "The Shire", the contact name is "Bilbo Baggins" the address is -"1 Hobbit-Hole" in "Bag End", postal code "111" and the country is "Middle Earth"
INSERT INTO Customers (contactname, address, city, postalcode, country, customername) values ('Bilbo Baggins','1 Hobbit-Hole','Bag End',111,'Middle Earth','The Shire')
-- Update Bilbo Baggins record so that the postal code changes to "11122"
Update customers set postalcode =11122 where contactname = 'Biblo Baggins';
-- (Stretch) Find a query to discover how many different cities are stored in the Customers table. Repeats should not be double counted
SELECT COUNT (DISTINCT City) from Customers;
-- (Stretch) Find all suppliers who have names longer than 20 characters. You can use `length(SupplierName)` to get the length of the name
SELECT * FROM Suppliers where length(SupplierName) >20;