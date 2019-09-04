describe('The Shoe_Catalogue', function(){
  it('display the selected shoe to the cart', function(){
      var instance = shoeCatalogue();
      instance.getCatalogue({
        color: 'blue', brand: "Nike", price: 350, size: 4, in_stock: 5
    });  
 assert.deepEqual([{
  color: 'blue', brand: "Nike", price: 350, size: 4, in_stock: 5
}], instance.getCatalogue());
    });
});
