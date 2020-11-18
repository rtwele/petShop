var shop =[
    {
        title: "Puppy One",
        image: "./imgs/dog.jpg",
        price: 499.99,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
        title: "Bird One",
        image: "./imgs/bird.jpg",
        price: 139.99,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
        title: "Hamster One",
        pet: "Hamster",
        category: "Pet",
        image:"./imgs/hamster1.jpg",
        price: 19.99,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
        title:"Kitten One",
        image:"./imgs/kitten.png",
        price:289.99,
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
        title:"Kitten Two",
        image:"./imgs/kitten2.jpg",
        price: 299.99,
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
        title:"Cat Playground",
        image:"./imgs/catplayground.jpg",
        price:74.99,
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
        title:"Bird Two",
        image:"./imgs/bird2.jpg",
        price:89.99,
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
     {
        title:"Hamster Two",
        image:"./imgs/hamster2.jpg",
        price: 29.99,
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
        title:"Bird Three",
        image:"./imgs/bird3.png",
        price: 499.99,
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
   
    {
        title:"Puppy Two",
        image:"./imgs/puppy2.jpg",
        price: 389.99,
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
      {
        title:"Dog Food",
        image:"./imgs/dogfood.jpg",
        price: 38.99,
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
        title:"Cat Toy",
        image:"./imgs/catToy.jpg",
        price: 10.99,
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
        title:"Dry Cat Food",
        image:"./imgs/drycatfood.png",
        price: 7.49,
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
        {
        title:"Kitty Litter",
        image:"./imgs/kittylitter.jpg",
        price: 14.48,
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    }, 
    {
        title:"Wet Cat Food",
        image:"./imgs/wetcatfood.jpg",
        price: 12.95,
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
  
    {
        title:"Bird Cage",
        image:"./imgs/birdcage.jpg",
        price: 189.99,
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
  
    {
        title:"Hamster Bedding",
        image:"./imgs/hamsterbedding.jpg",
        price: 12.99,
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
        title:"Hamster Food",
        image:"./imgs/hamsterfood.jpg",
        price: 7.99,
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    }
]
var postHTML = " "
for (var i=0; i < shop.length; i++){
    var heading = "<div class='product'><span><h4>" + shop[i].title + "</h4>"
    var image = '<img src="' + shop[i].image + '"/'
    var price = "<p> $" + shop[i].price + "</p></span>"
    var description = '<div class="hoverProduct"><p>'+ shop[i].description + '</p><button>Add to Cart</button></div></div>'
    var concatThis = heading + image + price + description
    postHTML = postHTML + concatThis
}
document.getElementById("shop").innerHTML = postHTML