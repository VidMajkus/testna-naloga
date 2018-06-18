
$('.first-slider').slick({
  arrows: false,
       autoplay: true,
         speed:300,
         arrows: false,
       infinite: true,
         draggable: true,
         dots: true,
         slidesToShow: 1,
         slidesToScroll: 1
})

$('.left').click(function(){
  $('.first-slider').slick('slickPrev');
})

$('.right').click(function(){
  $('.first-slider').slick('slickNext');
})

$(document).ready(function(){
      $('.second-slider').slick({
          autoplay: true,
          speed:300,
          infinite: true,
        slidesToShow: 1,
          slidesToScroll: 1,
      });
    });


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



