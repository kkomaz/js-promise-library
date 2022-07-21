class MyPromise {
  constructor(cb) {
    try {
    cb(this.#onSuccess, this.#onFail);
    } catch(e) {
      this.#onFail(e);
    }
  }

  #onSuccess(value) {
    
  }

  #onFail(value) {

  }
}


const p = new Promise((resolve, reject) => {
  resolve(500);
});