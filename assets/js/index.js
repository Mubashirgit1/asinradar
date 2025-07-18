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


  const sharedSecret = 'a9f1c2e741f1cd9e27f839a98fcb82715e4f30c961b879a69f2e13e3a4a6d84b'; // same secret as backend
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

  let isSearching = false;

  async function handleSearch() {
    if (isSearching) return; // prevent double calls
    isSearching = true;

    const asin = $('#asinInput').val().trim();
    if (!asin) {
      alert('Please enter an ASIN');
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
        handleKeepaResponse(data);

      },
      error: function (xhr, status, err) {
        $('#result').text('Error: ' + (xhr.responseText || err));
      }
    });
  }
  // Click on search button
  $('#searchButton').on('click', function () {
    handleSearch();
  });

  // Press Enter in input field
  $('#asinInput').on('keypress', function (e) {
    if (e.which === 13) {
      handleSearch();
    }
  });

  function handleKeepaResponse(data) {
    if (data.asin) {
      const COG = document.getElementById("cog");

      var title = data.title;
      var price = data.price;
      var profit = 0;

      if (price <= 0) {
        buybox = "Buy Box not available";
      } else {
        buybox = (price / 100).toFixed(2);
      }
      var imageUrl = getProductImage(data);
      const img = document.createElement('img');
      img.src = imageUrl;
      img.alt = title;
      img.style.width = '300px'; // Optional: set image size
      // Append image to container div
      $("#searchBox").animate({ 'padding-top': "0" }, 600);
      $(".container-animate").animate({ height: "30vh" }, 600);
      document.getElementById('imageContainer').appendChild(img);
      // Append Title to container div
      document.getElementById("title").textContent = title;
      document.getElementById("brand").textContent = data.brand;
      document.getElementById("pattern").textContent = data.pattern;
      document.getElementById("eanList").textContent = data.eanList;
      document.getElementById("category").textContent = data.category;
      document.getElementById("m_sold").textContent = data.monthlySold;
      document.getElementById("description").textContent = data.description;
      document.getElementById("fba_fee").value = data.fba_fee;
      document.getElementById("profit").value = profit;
      document.getElementById("price").textContent = buybox;

    } else {
      console.log('No product data found.');
    }
  }
  function getProductImage(data) {
    if (data.image) {
      return data.image;
    } else {
      // Fallback to ASIN-based image URL
      return `https://images-na.ssl-images-amazon.com/images/P/${data.asin}.jpg`;
    }
  }



  function calculateProfit() {
    saleprice = document.getElementById("price").textContent;
    amazon_fee = document.getElementById("fba_fee").value;
    costog = document.getElementById("cog").value;

    var price = parseFloat(price) || 0;
    var costog = parseInt(cog) || 0;
    var fba_fee = parseInt(fba_fee) || 0;
    var profit = saleprice - amazon_fee - costog;
    document.getElementById("profit").value = profit.toFixed(2)
  }

  var inputv = document.getElementById("cog");

  inputv.addEventListener("input", calculateProfit);



});
