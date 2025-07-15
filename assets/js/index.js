$(document).ready(function () {
    $('#slider-animation').on('slid.bs.carousel', function (e) {
      var items = $('#slider-animation .carousel-item');
      var activeIndex = items.index($(e.relatedTarget));
      var navbar = document.getElementById('mainNavbar');
    if (activeIndex === 2) {
      navbar.classList.add('navbar-dark-mode');
    } else {
      navbar.classList.remove('navbar-dark-mode');
    }
    });

  var keyword = "";
  var resultArea = $("#results");
  var searchBar = $("#searchBar");
  var searchButton = $(".fa-search");
    const inputElement = document.getElementById("myInput");
  // Get its value
  const inputValue = inputElement.value;
  // var searchUrl = "https://api.keepa.com/product?key=&domain=3&asin=B07N4M94WP";
   var displayResults = function(){
   $.ajax({
  url: "https://api.keepa.com/product",
  data: {
    key: "92r6c69co431sf1nkhov5hcoook0qsda622e93dn5rcau3n8b1ahbg22jus6bv33",
    domain: 3,               // e.g., 1 for Amazon.com
    asin: "B0002GTTRC"
  },
  method: "GET",
  success: function (response) {
    console.log(response);
    handleKeepaResponse(response);
    
  },
  error: function (xhr, status, error) {
    console.error("Error:", status, error);
  }
});

function handleKeepaResponse(data) {
  if (data.products && data.products.length > 0) {
    const product = data.products[0];
    const asin = product.asin;
    const title = product.title;
    var imageUrl  = getProductImage(product);
    console.log(imageUrl);
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = product.title;
    img.style.width = '300px'; // Optional: set image size

    // Append image to container div
    document.getElementById('imageContainer').appendChild(img);

    console.log(`ASIN: ${asin}`);
    console.log(`Title: ${title}`);
    console.log(`Current Price: $${currentPrice}`);
  } else {
    console.log('No product data found.');
  }
}
function getProductImage(product) {
  if (product.imagesCSV) {
    const imageNames = product.imagesCSV.split(',');
    // Get the first image name
    const firstImageName = imageNames[0];
    // Build the image URL
    return `https://images-na.ssl-images-amazon.com/images/I/${firstImageName}.jpg`;
  } else {
    // Fallback to ASIN-based image URL
    return `https://images-na.ssl-images-amazon.com/images/P/${product.asin}.jpg`;
  }
}

    // $.ajax({
    //   url: searchUrl,
    //   dataType: 'jsonp',
    //   data: {
    //     action: 'query',
    //     format: 'json',
    //     generator: 'search',
    //       gsrsearch: keyword,
    //       gsrnamespace: 0,
    //       gsrlimit: 10,
    //     prop:'extracts|pageimages',
    //       exchars: 200,
    //       exlimit: 'max',
    //       explaintext: true,
    //       exintro: true,
    //       piprop: 'thumbnail',
    //       pilimit: 'max',
    //       pithumbsize: 200
    //   },
    //   success: function(json){
    //     console.log(json);
    //     var results = json.query.pages;
    //     $.map(results, function(result){
    //       var link = "http://en.wikipedia.org/?curid="+result.pageid;
    //       var elem1 = $('<a>');
    //       elem1.attr("href",link);
    //       elem1.attr("target","_blank");
    //       var elem2 = $('<li>');
    //       elem2.append($('<h3>').text(result.title));
    //       //if(result.thumbnail) elem.append($('<img>').attr('width',150).attr('src',result.thumbnail.source));
    //       elem2.append($('<p>').text(result.extract));
    //       elem1.append(elem2);
    //       resultArea.append(elem1);
    //     });
       
    //   }
    // });   
     $("footer").append("<p>----x--------x----</p>");
  };
  searchButton.click(function(){

    keyword = searchBar.val();
    resultArea.empty();
    $("footer").empty();
    displayResults(); 
    $("#searchBox").animate({'padding-top':"0"}, 600);
    $(".container-animate").animate({height:"30vh"}, 600);
  });
  
  searchBar.keypress(function(e){
      if(e.keyCode==13)
      $(searchButton).click();
  });

  });
