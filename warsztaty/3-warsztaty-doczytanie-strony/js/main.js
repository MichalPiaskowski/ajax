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

function pobierzDane() {
    ajax({
        type: 'GET',
        url: "https://jsonplaceholder.typicode.com/users",
        onError: function (msg) {
            console.log(msg);
        },
        onSuccess: function (response) {
            var jsonObj = JSON.parse(response);
            console.log(jsonObj);
            jsonObj.forEach(function (element, index) {
                let container = document.createElement('p');
                container.innerHTML = `${element.id} ${element.name} ${element.email}`;
                document.body.appendChild(container);

            })
        }
    })
}

btn.addEventListener('click', pobierzDane);
window.addEventListener('scroll', function () {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        pobierzDane()
        console.log('bottom');
    }
});

// document.body.offsetHeight / (window.innerHeight + window.scrollY) > 1.02