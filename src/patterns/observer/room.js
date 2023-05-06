class RoomEmitter {
  #callbacks = {};

  enter(callback, roomName = "global") {
    if (this.#callbacks[roomName]) this.#callbacks[roomName].push(callback);
    else this.#callbacks[roomName] = [callback];
  }

  leave(callback, roomName = "global") {
    this.#callbacks[roomName] = this.#callbacks[roomName]?.filter?.(
      (item) => item !== callback,
    );
  }

  notify(obj, roomName = "global") {
    this.#callbacks[roomName].forEach((cbk) => cbk(obj));
  }
}

const RoomListener = Object.freeze(new RoomEmitter());

export default RoomListener;

