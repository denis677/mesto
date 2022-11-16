

export default class Section {
  constructor({ items, renderer }, containerConfig) {
    this.items = items;
    this.renderer = renderer;
    this._container = document.querySelector(containerConfig.container); 
  }

  renderItem() {
    this.items.forEach(item => this.renderer(item));
  }

  addItem(element) {
    this._container.append(element);
  }

  addItemPrepend(element) {
    this._container.prepend(element);
  }
}