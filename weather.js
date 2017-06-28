var mykey = config.MY_KEY;
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
            $('#bigShow').css('background-image', 'url("https://saucyfreds.com/wp-content/uploads/2017/06/flash-1455285_1920.jpg")');
        }

        if (data.weather[0].id >= 300 && data.weather[0].id <= 321) {
            $('#bigShow').css('background-image', 'url("https://saucyfreds.com/wp-content/uploads/2017/06/rain-874041_1920.jpg")');
        }

        if (data.weather[0].id >= 500 && data.weather[0].id <= 531) {
            $('#bigShow').css('background-image', 'url("https://saucyfreds.com/wp-content/uploads/2017/06/rain-874041_1920.jpg")');
        }

         if (data.weather[0].id >= 600 && data.weather[0].id <= 622) {
            $('#bigShow').css('background-image', 'url("https://saucyfreds.com/wp-content/uploads/2017/06/alm-549333_1920.jpg")');
        }

        if (data.weather[0].id >= 701 && data.weather[0].id <= 781) {
            $('#bigShow').css('background-image', 'url("https://saucyfreds.com/wp-content/uploads/2017/06/cyclone-2102397_1920.jpg")');
        }

        if (data.weather[0].id == 800) {
            $('#bigShow').css('background-image', 'url("https://saucyfreds.com/wp-content/uploads/2017/06/sky-183869_1920.jpg")');
        }

        if (data.weather[0].id > 800 && data.weather[0].id < 805) {
            $('body').css('background-image', 'url("https://saucyfreds.com/wp-content/uploads/2017/06/field-533541_1920.jpg")');
        }
    });
});

