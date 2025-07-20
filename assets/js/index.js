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

  const tabs = document.querySelectorAll('.menu-items li');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs
      tabs.forEach(t => t.classList.remove('active'));
      // Hide all content
      contents.forEach(c => c.style.display = 'none');

      // Activate clicked tab
      tab.classList.add('active');
      const tabId = tab.getAttribute('data-tab');
      document.getElementById(tabId).style.display = 'block';
    });
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

  if (document.getElementById('mainBody')) {
    document.getElementById('mainBody').style.display = 'none';
  }
  if (document.getElementById('not-found')) {
    document.getElementById('not-found').style.display = 'none';
  }
  

  let isSearching = false;
  async function handleSearch(search  = null) {
    if (isSearching) return; // prevent double calls
    isSearching = true;
    try {
      // your fetch or $.ajax code
      var asin = $('#asinInput').val().trim();
      if (!asin) {
        if(search !== null){
          asin = search;
        }else{
        alert('Please enter an ASIN');
        return;
        }
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
        if (xhr.status === 404) {
          $("#searchBox").animate({ 'padding-top': "15px" }, 600); 
          $(".container-animate").animate({ height: "20vh" }, 600);
          document.getElementById('not-found').style.display = 'block';
        } else
          $('#result').text('Error: ' + (xhr.responseText || err));
        }
      });
    } catch (error) {
      console.error("API failed", error);
    } finally {
      isSearching = false; // ✅ always reset
    }

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

  // Get query string from URL
  const params = new URLSearchParams(window.location.search);
  const searchValue = params.get('query');
  if (searchValue) {
    // Now you can use `searchValue` in your API call or display it
     handleSearch(searchValue);
  }


  function handleKeepaResponse(data) {
    // Clear old content
    document.getElementById("imageContainer").innerHTML = "";
    document.getElementById("variation-container").innerHTML = "";
    document.getElementById("cog").value = "";
    if (data.asin) {
      document.getElementById('mainBody').style.display = 'block';
      var title = data.title;
      var price = data.price;
      var profit = 0;

      var buybox = (price > 0) ? (price / 100).toFixed(2) : "Buy Box not available";

      var imageUrl = getProductImage(data.image, data.asin);
      const img = document.createElement('img');
      img.src = imageUrl;
      img.alt = title;
      img.style.width = '300px';

      $("#searchBox").animate({ 'padding-top': "15px" }, 600);
      $(".container-animate").animate({ height: "20vh" }, 600);

      document.getElementById('imageContainer').appendChild(img);
      document.getElementById("title").textContent = title;
      document.getElementById("brand").textContent = data.brand || "-";
      document.getElementById("pattern").textContent = data.pattern || "-";
      document.getElementById("eanList").textContent = data.eanList || "-";
      document.getElementById("category").textContent = data.category || "-";
      document.getElementById("m_sold").textContent = data.monthlySold || "0";
      document.getElementById("description").textContent = data.description || "-";
      document.getElementById("fba_fee").value = data.fba_fee || "";
      document.getElementById("profit").value = profit;
      document.getElementById("price").textContent = buybox;
      document.getElementById("height").textContent = data.height || "-";
      document.getElementById("width").textContent = data.width || "-";
      document.getElementById("length").textContent = data.length || "-";
      document.getElementById("weight").textContent = data.weight || "-";
      document.getElementById("material").textContent = data.material || "-";

      if (data.variation) {
        handlevariation(data.variation);
      }

      calculateProfit(); // recalculate with new data
    } else {
      $("#searchBox").animate({ 'padding-top': "15px" }, 600);
      $(".container-animate").animate({ height: "20vh" }, 600);
      document.getElementById('not-found').style.display = 'block';
    }
  }

  function getProductImage(image, asin) {
    if (image != null) {
      if (image.includes(",")) {
        var imageNames = image.split(',');
        // Get the first image name
        var firstImageName = imageNames[0];
      } else {
        var firstImageName = image;
      }
      // Build the image URL
      return `https://images-na.ssl-images-amazon.com/images/I/${firstImageName}.jpg`;
    } else {
      // Fallback to ASIN-based image URL
      return `https://images-na.ssl-images-amazon.com/images/P/${asin}.jpg`;
    }
  }


  function handlevariation(variations) {
    const gallery = document.getElementById("variation-container");

    variations.forEach(variant => {
      const style = variant.attributes[0].value;
      const asin = variant.asin;
      const img = getProductImage(variant.image, variant.asin);
      const item = document.createElement("div");
      item.className = "variation-item";
      item.innerHTML = `
    <img src="${img}" alt="${style}">
    <div>${style}</div>
  `;

      gallery.appendChild(item);
    });
  }


  function calculateProfit() {
    saleprice = document.getElementById("price").textContent;
    amazon_fee = document.getElementById("fba_fee").value;
    costog = document.getElementById("cog").value;
    var saleprice = parseFloat(saleprice) || 0;
    var costog = parseFloat(costog) || 0;
    var amazon_fee = parseFloat(amazon_fee) || 0;
    var profit = saleprice - amazon_fee - costog;
    document.getElementById("profit").value = profit.toFixed(2)
  }

  var inputv = document.getElementById("cog");
  if(inputv){
    inputv.addEventListener("input", calculateProfit);
  }
  
});
