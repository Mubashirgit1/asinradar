$(document).ready(function () {
  var sharedSecret =
    "a9f1c2e741f1cd9e27f839a98fcb82715e4f30c961b879a69f2e13e3a4a6d84b";

  var navbar = document.getElementById("mainNavbar");
  var mainBody = document.getElementById("mainBody");
  var notFound = document.getElementById("not-found");
  var variationContainer = document.getElementById("variation-container");
  if (mainBody) mainBody.style.display = "none";
  if (notFound) notFound.style.display = "none";
  let isSearching = false;

  $("#slider-animation").on("slid.bs.carousel", function (e) {
    var items = $("#slider-animation .carousel-item");
    var activeIndex = items.index($(e.relatedTarget));
    navbar.classList.toggle("navbar-dark-mode", activeIndex === 2);
  });

  document.querySelectorAll(".menu-items li").forEach((tab) => {
    tab.addEventListener("click", () => {
      document
        .querySelectorAll(".menu-items li")
        .forEach((t) => t.classList.remove("active"));
      document
        .querySelectorAll(".tab-content")
        .forEach((c) => (c.style.display = "none"));

      tab.classList.add("active");
      document.getElementById(tab.dataset.tab).style.display = "block";
    });
  });

  async function generateHMACSignature(secret, timestamp) {
    var encoder = new TextEncoder();
    var key = await crypto.subtle.importKey(
      "raw",
      encoder.encode(secret),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign"]
    );
    var signature = await crypto.subtle.sign(
      "HMAC",
      key,
      encoder.encode(timestamp.toString())
    );
    return Array.from(new Uint8Array(signature))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  }

  function getProductImage(image, asin) {
    var firstImage = image?.includes(",") ? image.split(",")[0] : image;
    return firstImage
      ? `https://images-na.ssl-images-amazon.com/images/I/${firstImage}.jpg`
      : `https://images-na.ssl-images-amazon.com/images/P/${asin}.jpg`;
  }

  function clearUI() {
    if (mainBody) mainBody.style.display = "none";
    if (notFound) notFound.style.display = "none";
    document.getElementById("imageContainer").innerHTML = "";
    variationContainer.innerHTML = "";
    document.getElementById("cog").value = "";
  }

  async function handleSearch(query = null) {
    if (isSearching) return;
    isSearching = true;
    clearUI();

    try {
      let asin = $("#asinInput").val().trim();
      if (!asin && query !== null) asin = query;
      if (!asin) return alert("Please enter an ASIN");

      var timestamp = Date.now();
      var signature = await generateHMACSignature(sharedSecret, timestamp);

      $.ajax({
        url: `https://liveprojects.online/asinradar/keepa.php?asin=${asin}`,
        method: "GET",
        headers: {
          "X-TIMESTAMP": timestamp.toString(),
          "X-SIGNATURE": signature,
        },
        success: function (data) {
          $("#result").text(JSON.stringify(data, null, 2));
          renderProduct(data);
        },
        error: function (xhr, status, err) {
          if (xhr.status === 404) {
            animateUI();
            notFound.style.display = "block";
          } else {
            $("#result").text("Error: " + (xhr.responseText || err));
          }
        },
        complete: () => {
          isSearching = false;
        },
      });
    } catch (error) {
      console.error("API failed", error);
      isSearching = false;
    }
  }

  function renderProduct(data) {
    if (!data.asin) {
      animateUI();
      notFound.style.display = "block";
      return;
    }

    mainBody.style.display = "block";
    animateUI();

    document.getElementById("imageContainer").appendChild(
      Object.assign(document.createElement("img"), {
        src: getProductImage(data.image, data.asin),
        alt: data.title,
        style: "width:300px",
      })
    );

    var setText = (id, value = "-") =>
      (document.getElementById(id).textContent = value);
    setText("title", data.title);
    setText("brand", data.brand);
    setText("pattern", data.pattern);
    setText("eanList", data.eanList);
    setText("category", data.category);
    setText("m_sold", data.monthlySold || "0");
    setText("description", data.description);
    setText(
      "price",
      data.price > 0 ? (data.price / 100).toFixed(2) : "Buy Box not available"
    );
    setText("height", data.height);
    setText("width", data.width);
    setText("length", data.length);
    setText("weight", data.weight);
    setText("material", data.material);

    document.getElementById("fba_fee").value = data.fba_fee || "";
    document.getElementById("profit").value = "0.00";

    if (data.variation) renderVariations(data.variation);
    calculateProfit();
  }

  function renderVariations(variations) {
    variations.forEach((variant) => {
      var style = variant.attributes[0].value;
      var imgUrl = getProductImage(variant.image, variant.asin);
      var item = document.createElement("div");
      item.className = "variation-item";
      item.innerHTML = `<img src="${imgUrl}" alt="${style}"><div>${style}</div>`;
      variationContainer.appendChild(item);
    });
  }

  function calculateProfit() {
    var salePrice =
      parseFloat(document.getElementById("price").textContent) || 0;
    var cost = parseFloat(document.getElementById("cog").value) || 0;
    var fee = parseFloat(document.getElementById("fba_fee").value) || 0;
    var profit = salePrice - fee - cost;
    document.getElementById("profit").value = profit.toFixed(2);
  }

  function animateUI() {
    $("#searchBox").animate({ "padding-top": "15px" }, 600);
    $(".container-animate").animate({ height: "20vh" }, 600);
  }

  // Event Listeners
  $("#searchButton").on("click", () => handleSearch());
  $("#asinInput").on("keypress", (e) => {
    if (e.which === 13) handleSearch();
  });
  document.getElementById("cog")?.addEventListener("input", calculateProfit);

  // On page load, check URL params
  var queryParam = new URLSearchParams(window.location.search).get("query");
  if (queryParam) handleSearch(queryParam);
});
