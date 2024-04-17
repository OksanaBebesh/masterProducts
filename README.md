# masterProducts
Internship task
Task: Product list.
 
### Background:
Users should get products provided by https://fakestoreapi.com provider.
After opening a page, there should be 10 preloaded products presented as a table and a button "Load more ...", by clicking on the button users get the next 5 products and so on till there are new products.
The table head should contains: Product title, price, description, photo
 
 
### Acceptance criteria: 


As a user I open a page in any browser and see 10 products presented in a table
And I see Product title, Price, Description, Photo as a head of the table (style doesn't metter). 	
And I see  "Load more ..." Button below the table
Then I click the button, the next 5 products appear in the table
And the button is below the table again
And I can upload as many products as I want till new products are there.
When there are no new products, the button should be disabled.
 
### Tech notes:
1. The project should be implemented using only Vue JS
2. There are two options to get products (the first one is preferable):
	a) requesting https://fakestoreapi.com/ API (there are documentation, routes and examples how to get limited amount of products)
	b) download products as a file and use it in the project as a mock
3. If the first option is chosen, only needed amount of products (10, 15, 20, 25 ...) should be uploaded by clicking the button.
4. Any styles, fonts, colours can be used.
5. Follow DRY and KISS principles.
 
 
https://www.youtube.com/watch?v=XzLuMtDelGk&list=WL
