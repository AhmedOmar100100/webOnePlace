var productContainer;

if (localStorage.getItem("coursedata") == null) {
    productContainer = [];
} else {
    productContainer = JSON.parse(localStorage.getItem("coursedata"));
}

var prodImage = document.getElementById('prodImg');
var imgPreview = document.getElementById('imgPreview');
var product = {
    name: "",
    description: "",
    category: "",
    image: '',
    price: 0
};



function addProduct() {
    imagePreview();

    courseName = document.getElementById("courseNameInp").value;
    courseDesc = document.getElementById("courseDescriptionInp").value;
    courseCategory = document.getElementById("courseCategoryInp").value;
    coursePrice = document.getElementById("coursePriceInp").value;
    product.name = courseName;
    product.description = courseDesc;
    product.category = courseCategory;
    product.price = coursePrice;
    productContainer.push(product);
    localStorage.setItem("coursedata", JSON.stringify(productContainer));

}

function imagePreview() {

    if (prodImage.files && prodImage.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            imgPreview.setAttribute('src', e.target.result);
            product.image = e.target.result;
            console.log(e.target.result)
        }

        reader.readAsDataURL(prodImage.files[0]); // convert to base64 string
    }
}