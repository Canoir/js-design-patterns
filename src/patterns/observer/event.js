class ChatRoom {
  #callbacks = [];

  enter(callback) {
    this.#callbacks.push(callback);
  }

  leave(callback) {
    this.#callbacks = this.#callbacks.filter((item) => item !== callback);
  }

  notify(...obj) {
    this.#callbacks.forEach((cbk) => cbk(...obj));
  }
}

const ChatroomListener = Object.freeze(new ChatRoom());

export default ChatroomListener;
