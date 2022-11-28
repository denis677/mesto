

export default class Section {
  constructor({ renderer }, containerConfig) {
    this.renderer = renderer;
    this._container = document.querySelector(containerConfig.container); 
  }

  renderItem(items) {
    items.forEach(item => this.renderer(item));
  }

  addItem(element) {
    this._container.append(element);
  }

  addItemPrepend(element) {
    this._container.prepend(element);
  }
}