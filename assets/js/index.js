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
  var searchUrl = "https://en.wikipedia.org/w/api.php";
   var displayResults = function(){
    $.ajax({
      url: searchUrl,
      dataType: 'jsonp',
      data: {
        action: 'query',
        format: 'json',
        generator: 'search',
          gsrsearch: keyword,
          gsrnamespace: 0,
          gsrlimit: 10,
        prop:'extracts|pageimages',
          exchars: 200,
          exlimit: 'max',
          explaintext: true,
          exintro: true,
          piprop: 'thumbnail',
          pilimit: 'max',
          pithumbsize: 200
      },
      success: function(json){
        console.log(json);
        var results = json.query.pages;
        $.map(results, function(result){
          var link = "http://en.wikipedia.org/?curid="+result.pageid;
          var elem1 = $('<a>');
          elem1.attr("href",link);
          elem1.attr("target","_blank");
          var elem2 = $('<li>');
          elem2.append($('<h3>').text(result.title));
          //if(result.thumbnail) elem.append($('<img>').attr('width',150).attr('src',result.thumbnail.source));
          elem2.append($('<p>').text(result.extract));
          elem1.append(elem2);
          resultArea.append(elem1);
        });
       
      }
    });   
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
