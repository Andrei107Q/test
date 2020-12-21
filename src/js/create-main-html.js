const nameApplication = 'COVID-19 Dashboard';

export const createHTML = {

  createHeaderHtml() {
    const createHeader = () => {
      this.createElementHTML('header', 'wrapper', 'body');
    };

    const createLogo = () => {
      this.createElementHTML('div', 'logo', 'header');
      const logo = this.getHTMLElementByQuerySelector('.logo');
      logo.textContent = nameApplication;
    };

    createHeader();
    createLogo();
  },

  createMainHtml() {
    const createMain = () => {
      this.createElementHTML('main', 'wrapper', 'body', 'main');
    };

    const createListContent = () => {
      this.createElementHTML('div', 'list-content', 'main');
    };

    const createMapContent = () => {
      this.createElementHTML('div', 'map-content', 'main');
    };

    const createTableAndGraphContent = () => {
      this.createElementHTML('div', 'tableGrapg-content', 'main');
    };

    const createTableContent = () => {
      this.createElementHTML('div', 'table-content', '.tableGrapg-content');
    };

    const createGraphContent = () => {
      this.createElementHTML('div', 'graph-content', '.tableGrapg-content');
    };

    createMain();
    createListContent();
    createMapContent();
    createTableAndGraphContent();
    createTableContent();
    createGraphContent();
  },

  getHTMLElementByQuerySelector(name) {
    const element = document.querySelector(`${name}`);
    return element;
  },

  createElementHTML(nameElement, nameClass, parentName, id) {
    let parent = null;
    if (typeof (parentName) === 'object') {
      parent = parentName;
    } else if (typeof (parentName) === 'string') {
      parent = this.getHTMLElementByQuerySelector(parentName);
    }

    const element = document.createElement(nameElement);

    if (nameClass) {
      element.classList.add(nameClass);
    }
    if (id) {
      element.id = id;
    }
    parent.appendChild(element);
  },

};

export default function startCreteHTML() {
  createHTML.createHeaderHtml();
  createHTML.createMainHtml();
}
