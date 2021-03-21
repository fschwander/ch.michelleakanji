
export class State {

  static setIndex(index) {
    console.log(index);
    State.index = index;
  }

  static getIndex() {
    console.log(this.index);
    return State.index;
  }
}

State.index = 0;