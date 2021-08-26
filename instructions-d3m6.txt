Shopping Cart API 
 

You are in charge of building   APIs for the Shopping cart application in Sequelize

 

 

 

In this "step" the application should enable the creation, editing, deletion, listing of categories using Sequelize

 

 

Category
Cetegory should contain following information:

{
	    "id": 1,
	    "name": "ARTICLE CATEGORY",
      
}
 
 
Routes
GET /category => returns the list of categories with product
GET /category /123 => returns a single category with product
POST /category => create a new category
PUT /category /123 => edit the category with the given id
DELETE /category /123 => delete the category with the given id
 

 

 Product 
{
	    "id": 1,
	    "name": "name",
	    "categoryId": 1, //foreign key to Category
	    "image":"url(IMAGE LINK)",
	    "createdAt": "DATE",
	    "updatedAt": "DATE",   
}
 

Routes

GET /product => returns the list of product including the category
GET /product /123 => returns a single product  including the category
POST /product => create a new product
PUT /product /123 => edit the product 
DELETE /product /123 => delete the product with the given id
 

The persistence must be granted via Postgres