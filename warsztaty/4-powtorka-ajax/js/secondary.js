let btn = document.querySelector('button.add');
let output = document.querySelector('main');

function getOfferAsync() {
    //pokaż loader
    let httpReq = new XMLHttpRequest();
    let html = '';

    httpReq.open('GET', 'http://leguralnie.pl/json/ogloszenia-json.json');

    httpReq.addEventListener('readystatechange', function () {
        if (this.readyState == 4 && this.status == 200) {
            let content = this.responseText;
            content = JSON.parse(content);
            console.log(content);
            content.forEach((element) => {
                html += `<div class='offer'>
                <figure>
                    <img src='${element.image}'>
                </figure>
                </div>
                <div class="offer_description">
                    <small>ID:${element.id}</small>
                </div>
                </div>`
            })
            if (html != '') {
                output.innerHTML = html;
            }
        }

    })

    httpReq.send()

}

btn.addEventListener('click', getOfferAsync);