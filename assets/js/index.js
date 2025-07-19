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
      var title = data.title;
      var price = data.price;
      var profit = 0;
      if (price <= 0) {
        buybox = "Buy Box not available";
      } else {
        buybox = (price / 100).toFixed(2);
      }
      var imageUrl = getProductImage(data.image);
      const img = document.createElement('img');
      img.src = imageUrl;
      img.alt = title;
      img.style.width = '300px'; // Optional: set image size
      // Append image to container div
      $("#searchBox").animate({ 'padding-top': "15px" }, 600);
      $(".container-animate").animate({ height: "20vh" }, 600);
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
      document.getElementById("height").textContent = data.height;
      document.getElementById("width").textContent = data.width;
      document.getElementById("length").textContent = data.length;
      document.getElementById("weight").textContent = data.weight;
      document.getElementById("material").textContent = data.material;
      if(data.variation){
        handlevariation(data.variation);
      }


    } else {
      console.log('No product data found.');
    }
  }

  function getProductImage(image) {
    if (image) {

        if(image.includes(",")){
              var imageNames = image.imagesCSV.split(',');
              // Get the first image name
              var firstImageName = imageNames[0];
        }else{
              var firstImageName = image;
        }
        // Build the image URL
        return `https://images-na.ssl-images-amazon.com/images/I/${firstImageName}.jpg`;
    } else {
      // Fallback to ASIN-based image URL
      return `https://images-na.ssl-images-amazon.com/images/P/${data.asin}.jpg`;
    }
  }

function handlevariation(variations){
  const gallery = document.getElementById("variation-container");

variations.forEach(variant => {
  const style = variant.attributes[0].value;
  const asin = variant.asin;
  const img = variant.image || getProductImage(variant);;

  const item = document.createElement("div");
  item.className = "variation-item";
  item.innerHTML = `
    <img src="${img}" alt="${style}">
    <div>${style}</div>
  `;

  gallery.appendChild(item);
});
}
// variations.forEach(variant => {

//   const style = variant.attributes[0].value;
//   const asin = variant.asin;
//   const img = variant.image || getProductImage(variant);;


//   const variationCard = document.createElement("div");
//   variationCard.style.border = "1px solid #ccc";
//   variationCard.style.padding = "10px";
//   variationCard.style.marginBottom = "10px";
//   variationCard.style.display = "flex";
//   variationCard.style.alignItems = "center";
//   variationCard.style.gap = "10px";

//   variationCard.innerHTML = `
//     <img src="${img}" alt="${style}" style="width: 80px; height: 80px; object-fit: cover;">
//     <div>
//       <strong>Style:</strong> ${style} <br>
//       <strong>ASIN:</strong> ${asin}
//     </div>
//   `;

//   container.appendChild(variationCard);
  
// });
// }

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
  inputv.addEventListener("input", calculateProfit);

});
