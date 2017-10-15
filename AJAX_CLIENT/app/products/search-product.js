$(document).ready(function(){
    
       // when a 'search products' button was clicked
       $(document).on('submit', '#search-product-form', function()
       {
    
           // get search keywords
           var keywords = $(this).find(":input[name='keywords']").val();
    
           // get data from the api based on search keywords
           $.getJSON("http://localhost/MICHAL-PHP/SimpleRestApiPhp/SERVER_API/product/search.php?s=" + keywords, function(data)
           {
               // template in products.js
               readProductsTemplate(data, keywords);
    
               // change page title
               changePageTitle("Search products: " + keywords);
    
           });
    
           // prevent whole page reload
           return false;
       });
    
   });