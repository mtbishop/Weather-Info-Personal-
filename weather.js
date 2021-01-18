$(document).ready(function () {
  function getHeaderDate() {
    var currentHeaderDate = moment().format('dddd, MMMM Do');
    var currentTime = moment().format('hh:mm:ss a');
    $('#currentTime').text(currentTime);
    $('#currentDate').text(currentHeaderDate);
  }

  $('#submitWeather').click(function () {
    var city = $('#city').val();

    if (city != '') {
      $.ajax({
        url:
          'http://api.openweathermap.org/data/2.5/weather?q=' +
          city +
          '&units=imperial' +
          '&appid=ab1075a48d2c9a149a71c3395bf8f5d3',
        type: 'GET',
        dataType: 'jsonp',
        success: function (data) {
          console.log(data);

          var cityName = data.name;
          var weatherStatus = 'Forcast: ' + data.weather[0].description;
          var resultsTemp = data.main.temp + '°F';
          var resultsLowHighTemp =
            "L " +data.main.temp_min + '°F' + ' | ' + "H " + data.main.temp_max + '°F';
          var resultsFeelsLike = 'Feels like ' + data.main.feels_like + '°F';
          var resultsWindSpeed = 'Wind Speed: ' + data.wind.speed + ' MPH';
          var resultsHumidity = 'Humidity: ' + data.main.humidity + '°F';

          $('#cityName').text(cityName);
          $('#weatherStatus').text(weatherStatus);
          $('#resultsTemp').text(resultsTemp);
          $('#resultsLowHighTemp').text(resultsLowHighTemp);
          $('#resultsFeelsLike').text(resultsFeelsLike);
          $('#resultsWindSpeed').text(resultsWindSpeed);
          $('#resultsHumidity').text(resultsHumidity);
          $('#error').addClass('hide');
        },
      });
    } else {
      $('#error').html('ERROR: Field cannot be empty.');
    }
  });
  getHeaderDate();
});

//precipitation... unable to obtain unless from XML?
