const btnAdd = document.querySelector('button.add');
const btnRemove = document.querySelector('button.remove');
let mainContainer = document.querySelector('main');


const getAd = function () {
    fetch("http://leguralnie.pl/json/ogloszenia-json.json")
        .then(response => response.json())
        .then(data => {
            console.log(data);


            data.forEach((element) => {
                let adContainer = document.createElement('div');
                let adFigure = document.createElement('figure');
                let adFoto = document.createElement('img');
                let adContent = document.createElement('div');
                mainContainer.appendChild(adContainer);
                adContainer.appendChild(adFigure);
                adFoto.setAttribute('src', element.image);
                console.log(element.image);
                adFigure.appendChild(adFoto);
                adContent.innerText = `${element.title}

                ${element.description}

                ${element.price} PLN

                TEL: ${element.contact}`
                adContainer.style.marginBottom = '50px';
                console.log(element.title, element.description, element.price, element.contact);
                adContainer.appendChild(adContent);

            })

            console.log(adFoto);


        })
        .catch(error => console.log(error));

}



btnAdd.addEventListener('click', getAd)
btnRemove.addEventListener('click', () => {
    mainContainer.innerHTML = '';
})