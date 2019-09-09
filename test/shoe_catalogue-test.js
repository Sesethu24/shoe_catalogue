describe('The Shoe_Catalogue', function(){
  it('should push the selected shoe', function(){
      var instance = shoeCatalogue();
      instance.searchForItems('Nike');  
 assert.deepEqual('Nike', instance.searchForItems());
    });
});
