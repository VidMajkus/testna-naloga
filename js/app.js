// Make a get request for testna naloga
axios.get('https://world.openfoodfacts.org/api/v0/product/737628064502.json')
  .then(function (response) {
  		//Save response to ingredients variable
    	var ingredients = response.data.product.ingredients;
    	//For each ingredients object
    	Object.keys(ingredients).forEach(function(ingredient) {
    		//Console log text field from each ingredient
  			console.log(ingredients[ingredient].text);

		});

  })
  .catch(function (error) {
    console.log(error);
  });

  

