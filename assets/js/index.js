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


    
   const sharedSecret = 'my_super_secret_shared_key'; // same secret as backend

  async function generateHMACSignature(secret, timestamp) {
    const encoder = new TextEncoder();
    const keyData = encoder.encode(secret);
    const message = encoder.encode(timestamp.toString());

    const key = await crypto.subtle.importKey(
      'raw',
      keyData,
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['sign']
    );

    const sigBuffer = await crypto.subtle.sign('HMAC', key, message);
    return Array.from(new Uint8Array(sigBuffer))
                .map(b => b.toString(16).padStart(2, '0'))
                .join('');
  }

  // 👇 wrap your event handler in async function
  $(document).ready(function () {
    $('#callApi').on('click', async function () {
      const asin = $('#asin').val().trim();
      if (!asin) {
        alert('Please enter an ASIN.');
        return;
      }

      const timestamp = Date.now();
      const signature = await generateHMACSignature(sharedSecret, timestamp);

      $.ajax({
        url: `https://liveprojects.online/asinradar/keepa.php?asin=${asin}`,
        method: 'GET',
        headers: {
          'X-TIMESTAMP': timestamp.toString(),
          'X-SIGNATURE': signature
        },
        success: function (data) {
          $('#result').text(JSON.stringify(data, null, 2));
        },
        error: function (xhr, status, err) {
          $('#result').text('Error: ' + (xhr.responseText || err));
        }
      });
    });
  });



 
   var displayResults = function(){


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

    
     $("footer").append("<p>----x--------x----</p>");
  };
  // searchButton.click(function(){

  //   keyword = searchBar.val();
  //   resultArea.empty();
  //   $("footer").empty();
  //   displayResults(); 
  //   $("#searchBox").animate({'padding-top':"0"}, 600);
  //   $(".container-animate").animate({height:"30vh"}, 600);
  // });
  
  // searchBar.keypress(function(e){
  //     if(e.keyCode==13)
  //     $(searchButton).click();
  // });

  });
