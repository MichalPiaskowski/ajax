function ajax(ajaxOptions) {
    var options = {
        type: ajaxOptions.type || "POST",
        url: ajaxOptions.url || "",
        onComplete: ajaxOptions.onComplete || function () {},
        onError: ajaxOptions.onError || function () {},
        onSuccess: ajaxOptions.onSuccess || function () {},
        dataType: ajaxOptions.dataType || "text"
    };

    function httpSuccess(httpRequest) {
        try {
            return (httpRequest.status >= 200 && httpRequest.status < 300 ||
                httpRequest.status == 304 ||
                navigator.userAgent.indexOf("Safari") >= 0 && typeof httpRequest.status == "undefined");
        } catch (e) {
            return false;
        }
    }

    var httpReq = new XMLHttpRequest();

    httpReq.open(options.type, options.url, true);

    httpReq.onreadystatechange = function () {

        if (httpReq.readyState == 4) {

            if (httpSuccess(httpReq)) {

                var returnData = (options.dataType == "xml") ? httpReq.responseXML : httpReq.responseText;

                options.onSuccess(returnData);

                httpReq = null;

            } else {

                options.onError(httpReq.statusText);
            }

        }

    }

    httpReq.send();
}

let btn = document.querySelector('button');
/*


function pobierzDane() {
    ajax({
        type: 'GET',
        url: "https://jsonplaceholder.typicode.com/users",
        onError: function (msg) {
            console.log(msg);
        },
        onSuccess: function (response) {
            var jsonObj = JSON.parse(response);
            // console.log(jsonObj);
            // let drugiUser = jsonObj[1];
            // let par = document.createElement('p');
            // par.innerText = drugiUser.name;
            // btn.insertAdjacentElement("afterend", par);
            jsonObj.forEach(function (element, index) {
                let par = document.createElement('p');
                par.innerText = element.name;
                btn.insertAdjacentElement("afterend", par);
            })
        }
    })

}

btn.addEventListener('click', pobierzDane);

*/


// POBIERANIE ZA POMOCĄ FETCH
function pobierzDane() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            response.json()
        })
        .then(data => {
            //TU DZIAŁAMY NA DANYCH POBRANYCH Z SERWERA
            console.log(data)
        })
        .catch(error => console.log(error));
}

btn.addEventListener('click', pobierzDane);