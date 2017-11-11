var mykey = config.MY_KEY;;
//Get your api key from openweathermap.org
var getIP = 'http://ip-api.com/json/';
var openWeatherMap = 'http://api.openweathermap.org/data/2.5/weather'
$.getJSON(getIP).done(function(location) {
    $.getJSON(openWeatherMap, {
        lat: location.lat,
        lon: location.lon,
        units: "imperial",
        APPID: mykey
    }).done(function(data) {
        $('#town').html(data.name);
        $('#temp').html('<h2>' + Math.floor(data.main.temp) + '&#176; F' + '</h2>');
        $('#weatherType').html(data.weather[0].description).css('textTransform', 'capitalize');
        $('#weatherIconBox').html('<img id="weatherIcon" src="http://openweathermap.org/img/w/' + data.weather[0].icon + '.png"/>');
        $('#tempcel').html('<h2>' + Math.floor((data.main.temp - 32) / 1.8) + '&#176; C' + '</h2>').hide();
        $('#btn1').click(function(){
            $('#tog').find('span').toggle();
        });
        
        if (data.weather[0].id >= 200 && data.weather[0].id <= 232) {
            $('body').css('background-image', 'url("img/lightning.jpg")');
        }

        if (data.weather[0].id >= 300 && data.weather[0].id <= 321) {
            $('body').css('background-image', 'url("img/water.jpg")');
        }

        if (data.weather[0].id >= 500 && data.weather[0].id <= 531) {
            $('body').css('background-image', 'url("img/rain2.jpg")');
        }

         if (data.weather[0].id >= 600 && data.weather[0].id <= 622) {
            $('body').css('background-image', 'url("img/snow.jpg")');
        }

        if (data.weather[0].id >= 701 && data.weather[0].id <= 781) {
            $('body').css('background-image', 'url("img/tornado.jpg")');
        }

        if (data.weather[0].id == 800) {
            $('body').css('background-image', 'url("img/clear.jpg")');
        }

        if (data.weather[0].id > 800 && data.weather[0].id < 805) {
            $('body').css('background-image', 'url("img/field.jpg")');
        }
    });
});

