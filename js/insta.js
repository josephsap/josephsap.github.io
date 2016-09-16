(function () {
        var $hero = $('#hero');
        var $heroImg = $hero.find('img')
        var $heroCap = $hero.find('span')

        $.getJSON('https://api.instagram.com/v1/media/popular?callback=?', {client_id:"ac76795c883c43b88bc1b9dcb8f70246"}, function(data){

          data.data.forEach(function(instagram, i){
            var cap = instagram.caption || {text: ""};

            if (i == 0) {
              // first one, prefix hero
              setHeroProps(instagram.link, instagram.images.standard_resolution.url, cap.text)
            } else if (i < 5) {
              str = '<li>\
                <a class="thumb" href="'+instagram.link+'"\
                    data-large="'+instagram.images.standard_resolution.url+'"\
                    data-caption="'+cap.text+'">\
                  <img src="'+instagram.images.thumbnail.url+'"/>\
                </a>\
              </li>'

              $('.thumbnails').append(str);
            }
          });
        })

        $(document).delegate('a[data-large]', 'click', function(e){
          e.preventDefault();
          var $anchor = $(this);
          
          setHeroProps($anchor.attr('href'), $anchor.data('large'), $anchor.data('caption'));
        });

        function setHeroProps(link, img, capt){
          $hero.attr({href: link});
          $heroImg.attr({src: img, title: capt})
          $heroCap.html(capt)
        }

      }) ();