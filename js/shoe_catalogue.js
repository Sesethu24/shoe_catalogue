function shoeCatalogue() {

    let catalogue = [];
    var shoes = [
        {
            color: 'blue', brand: "Nike", price: 350, size: 4, in_stock: 5, img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY5Y8gE-RkbjN2ZUYn1aMf4Y21dMcsH3QJv-6XRqsDH5Ivm63GzQ"
        },
        {
            color: 'orange', brand: "Adidas", price: 400, size: 5, in_stock: 3, img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY5Y8gE-RkbjN2ZUYn1aMf4Y21dMcsH3QJv-6XRqsDH5Ivm63GzQ"
        },
        {
            color: 'yellow', brand: "Soviet", price: 500, size: 1, in_stock: 2, img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY5Y8gE-RkbjN2ZUYn1aMf4Y21dMcsH3QJv-6XRqsDH5Ivm63GzQ"
        },
        {
            color: 'orange', brand: "Nike", price: 650, size: 2, in_stock: 1, img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY5Y8gE-RkbjN2ZUYn1aMf4Y21dMcsH3QJv-6XRqsDH5Ivm63GzQ"
        },
        {
            color: 'white', brand: "All-Star", price: 400, size: 3, in_stock: 5, img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY5Y8gE-RkbjN2ZUYn1aMf4Y21dMcsH3QJv-6XRqsDH5Ivm63GzQ"
        },
        {
            color: 'pink', brand: "Soviet", price: 300, size: 6, in_stock: 2, img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY5Y8gE-RkbjN2ZUYn1aMf4Y21dMcsH3QJv-6XRqsDH5Ivm63GzQ"
        },
        {
            color: 'orange', brand: "Vans", price: 450, size: 9, in_stock: 4,img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY5Y8gE-RkbjN2ZUYn1aMf4Y21dMcsH3QJv-6XRqsDH5Ivm63GzQ"
        },
        {
            color: 'yellow', brand: "Vans", price: 450, size: 8, in_stock: 5,img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY5Y8gE-RkbjN2ZUYn1aMf4Y21dMcsH3QJv-6XRqsDH5Ivm63GzQ"
        },
        {
            color: 'blue', brand: "Vans", price: 400, size: 7, in_stock: 2,img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY5Y8gE-RkbjN2ZUYn1aMf4Y21dMcsH3QJv-6XRqsDH5Ivm63GzQ"
        },
        {
            color: 'maroon', brand: "Adidas", price: 800, size: 9, in_stock: 4,img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY5Y8gE-RkbjN2ZUYn1aMf4Y21dMcsH3QJv-6XRqsDH5Ivm63GzQ"
        },
        {
            color: 'black', brand: "Nike", price: 1000, size: 8, in_stock: 3,img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY5Y8gE-RkbjN2ZUYn1aMf4Y21dMcsH3QJv-6XRqsDH5Ivm63GzQ"
        },
        {
            color: 'grey', brand: "Adidas", price: 750, size: 7, in_stock: 2,img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY5Y8gE-RkbjN2ZUYn1aMf4Y21dMcsH3QJv-6XRqsDH5Ivm63GzQ"
        },
        {
            color: 'orange', brand: "Vans", price: 350, size: 6, in_stock: 2,img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY5Y8gE-RkbjN2ZUYn1aMf4Y21dMcsH3QJv-6XRqsDH5Ivm63GzQ"
        },
        {
            color: 'black', brand: "Adidas", price: 900, size: 5, in_stock: 4,img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY5Y8gE-RkbjN2ZUYn1aMf4Y21dMcsH3QJv-6XRqsDH5Ivm63GzQ"
        },
        {
            color: 'turqoise', brand: "Adidas", price: 780, size: 4, in_stock: 5,img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY5Y8gE-RkbjN2ZUYn1aMf4Y21dMcsH3QJv-6XRqsDH5Ivm63GzQ"
        },
        {
            color: 'amber', brand: "Nike", price: 950, size: 3, in_stock: 4,img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY5Y8gE-RkbjN2ZUYn1aMf4Y21dMcsH3QJv-6XRqsDH5Ivm63GzQ"
        },
        {
            color: 'indigo', brand: "Soviet", price: 450, size: 2, in_stock: 3,img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY5Y8gE-RkbjN2ZUYn1aMf4Y21dMcsH3QJv-6XRqsDH5Ivm63GzQ"
        },
        {
            color: 'turqoise', brand: "Palladium", price: 1000, size: 1, in_stock: 3,img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY5Y8gE-RkbjN2ZUYn1aMf4Y21dMcsH3QJv-6XRqsDH5Ivm63GzQ"
        },
        {
            color: 'yellow', brand: "Vans", price: 800, size: 7, in_stock: 4,img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY5Y8gE-RkbjN2ZUYn1aMf4Y21dMcsH3QJv-6XRqsDH5Ivm63GzQ"
        },
        {
            color: 'white', brand: "Palladium", price: 950, size: 4, in_stock: 1,img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY5Y8gE-RkbjN2ZUYn1aMf4Y21dMcsH3QJv-6XRqsDH5Ivm63GzQ"
        }
    ];


    // function addShoe(params) {
        
    // }

    function getShoes() {

        return shoes;
    };

    function searchForItems(params) {
        console.log(params);

        if(params.brand == "0" && params.color == "0" && params.size == "0"){
            return getShoes
        }
     

        let list = [];
        for (let i = 0; i < shoes.length; i++) {
            var shoe = shoes[i];

            if (shoe.brand.toLowerCase() == params.brand.toLowerCase()) {
               list.push(shoe) 
            }
            
        }
        console.log(list);
        
        return list;
       
    }

    return {
        getShoes,
        searchForItems
    }
}