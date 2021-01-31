//display course
var productContainer = JSON.parse(localStorage.getItem("coursedata"));

function display() {
    var temp = "";
    for (var i = 0; i < productContainer.length; i++) {


        temp += `
         <div class="gallery_product col-lg-4 col-md-6 filter center ${productContainer[i].category}">
         <div class="card">
             <div class="product-image">
                  <img src="${productContainer[i].image}" alt="">
             </div>
             <div class="product-text">
                 <div class="category">
                     <span>${productContainer[i].category}</span>
                 </div>
                 <div class="product-title">
                     <h3>${productContainer[i].name}</h3>
                 </div>
                 <div class="pro-desc">
                     <p>${productContainer[i].description}
                     </p>
                 </div>
                 <div class="footer-card row">

                     <div class="footer-left">
                         <span class="price">EG ${productContainer[i].price}</span>
                     </div>
                     <div class="footer-right">
                         <a href="#" class="buy-btn"><i class="fa fa-shopping-bag" aria-hidden="true"></i></a>
                     </div>

                 </div>
             </div>
         </div>
     </div>
         `;

        document.getElementById('all-courses').innerHTML = temp;

    }



}


window.onload = function() {
    display();

}




// search for course in all courses page
function searchcourses(term) {
    var temp = ``;
    for (var i = 0; i < productContainer.length; i++) {
        if (productContainer[i].name.toLowerCase().includes(term.toLowerCase())) {
            temp += `
            <div class="gallery_product col-lg-4 col-md-6 filter center ${productContainer[i].category}">
            <div class="card">
                <div class="product-image">
                     <img src="${productContainer[i].image}" alt="">
                </div>
                <div class="product-text">
                    <div class="category">
                        <span>${productContainer[i].category}</span>
                    </div>
                    <div class="product-title">
                        <h3>${productContainer[i].name}</h3>
                    </div>
                    <div class="pro-desc">
                        <p>${productContainer[i].description}
                        </p>
                    </div>
                    <div class="footer-card row">
   
                        <div class="footer-left">
                            <span class="price">EG ${productContainer[i].price}</span>
                        </div>
                        <div class="footer-right">
                            <a href="#" class="buy-btn"><i class="fa fa-shopping-bag" aria-hidden="true"></i></a>
                        </div>
   
                    </div>
                </div>
            </div>
        </div>
            `;
        }
    }
    document.getElementById('all-courses').innerHTML = temp;


}


// start scroll to top button
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 290) {
            $('#topBtn').fadeIn();
        } else {
            $('#topBtn').fadeOut();
        }
    });
    $('#topBtn').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
    });
});
// end scroll to top button