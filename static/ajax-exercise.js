"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {
    
        evt.preventDefault();
    
        $.get('/fortune', (response) => {
            $('#fortune-text').html(response);$
        });
    };
    // TODO: get the fortune and show it in the #fortune-text div

// whenever i click this button, call the function showFortune
 $('#get-fortune-button').on('click', showFortune) 







// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};
 // TODO: request weather with that URL and show the forecast in #weather-info
    $.get('/weather.json', formData, (res)=> {
        //alert(`This is the forecast ${res.forecast}`)
        $('#weather-info').html(`${res.forecast}`);
    });


   

};

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    const formInputs = {
        'melon_type': $('#melon-type-field').val(),
        'qty': $('#qty-field').val()
    };
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
    $.post('/order-melons.json', formInputs, (resp) => {
        alert(`${resp.code}`);
        alert(`${resp.msg}`);
    });
    
};

$("#order-form").on('submit', orderMelons);


