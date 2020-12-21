export default class List {
    constructor() {
        this.list = document.querySelector('.list-content');
        this.url = 'https://corona.lmao.ninja/v2/countries';
        this.data = null;
        this.dataToShow = null;
        this.controlPanel = null;
        this.dataPanel = null;
    }

    loadInfo() {
        fetch(this.url)
            .then((response) => response.json())
            .then((json) => this.saveInfo(json))
    }

    saveInfo(json) {
        this.data = json;
        this.dataToShow = this.data;
        this.sortInfo('cases');
        this.renderListPanel();
        this.showInfo();
    }

    sortInfo(param) {
        this.dataToShow = this.dataToShow.sort((a, b) => a[param] > b[param] ? 1 : -1).reverse();
    }

    searchInfo(request) {
        this.dataToShow = this.data.filter((country) => country
            .country.substr(0, request.length).toLowerCase() === request);
    }

    renderListPanel() {
        this.list.innerHTML = '';
        this.controlPanel = document.createElement('div');
        this.controlPanel.classList.add('control-panel');
        this.dataPanel = document.createElement('div');
        const searchField = document.createElement('input');
        searchField.type = 'text';
        searchField.placeholder = 'input country'
        this.controlPanel.appendChild(searchField);
        searchField.oninput = () => {
            this.searchInfo(searchField.value);
            this.sortInfo();
            this.showInfo();
        };

        this.list.append(this.controlPanel, this.dataPanel);
    }


    showInfo() {
        this.dataPanel.innerHTML = '';
        this.dataToShow.forEach(data => {
            const listItem = document.createElement('div');
            listItem.classList.add('list-item');

            const number = document.createElement('span');
            number.classList.add('number');
            number.innerText = data.cases;

            const country = document.createElement('span');
            country.classList.add('country');
            country.innerText = data.country;
            const imageWrapper = document.createElement('div');

            const image = document.createElement('img');

            imageWrapper.classList.add('country-flag');
            image.onload = () => imageWrapper.appendChild(image);
            image.src = data.countryInfo.flag;
            listItem.append(number, country, imageWrapper);
            this.dataPanel.appendChild(listItem);
        });

    }


}
