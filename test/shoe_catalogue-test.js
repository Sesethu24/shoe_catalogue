describe('The Shoe_Catalogue', function(){
  it('should filter by brand', function(){
      var instance = shoeCatalogue();
      instance.searchForItems('Nike');  
 assert.deepEqual('Nike', instance.searchForItems());
    });
});
