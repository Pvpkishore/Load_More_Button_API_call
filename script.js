const Productscontainer=document.querySelector('.products-container');
const loadMorebtn=document.querySelector('.load-more-btn');

let currentStep = 0;

async function fecthListofProducts(getcurrentStep) {
    try{
        const response = await fetch(
            `https://dummyjson.com/products?limit=10&skip=
            ${getcurrentStep === 0 ? 0 : getcurrentStep*10
            }`,
           { 
            method:"GET",
           } )
        const result = await response.json();
        console.log(result);
        if(result && result.products) displayProducts(result.products);
    }
    catch(e){
       console.log(e)
    }
}

function displayProducts(productList){
productList.forEach(productItem => {
    const productItemwrapper = document.createElement("div");
    const producttitle=document.createElement("p");
    // const productThumbnail=document.createElement("img");
    // const productDescription=document.createElement("p");
    const productprice=document.createElement("p");

     productItemwrapper.classList.add('product-item-wrapper');  
     productprice.classList.add('product-price');
     producttitle.classList.add('product-title')

    producttitle.textContent =productItem.title;
    // productDescription.textContent=productItem.description;
    // productThumbnail.src=productItem.thumbnail;
    productprice.textContent=productItem.price;

    // productItemwrapper.appendChild(productThumbnail);
    productItemwrapper.appendChild(producttitle);
    productItemwrapper.appendChild(productprice);
    // productItemwrapper.appendChild(productDescription);

    Productscontainer.appendChild( productItemwrapper);
});
}
fecthListofProducts(currentStep);

loadMorebtn.addEventListener("click",()=>{
    fecthListofProducts((currentStep+=1));
})