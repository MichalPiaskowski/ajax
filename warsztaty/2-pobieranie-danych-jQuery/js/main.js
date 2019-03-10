$(function () {
    let btn = $('button');

    // function getJSON() {
    //     $.ajax({
    //         url: "https://jsonplaceholder.typicode.com/users",
    //         dataType: 'json',
    //         success: function (resultJSON) {
    //             console.log(resultJSON);
    //         },
    //         onerror: function (msg) {
    //             console.log(msg);
    //         }
    //     });
    // }

    // btn.click(function () {
    //     console.log('dziala');
    // });

    $('button').click(function () {
        ($.getJSON("https://jsonplaceholder.typicode.com/users", function (data) {
            console.log(data);
        }))

    });

});