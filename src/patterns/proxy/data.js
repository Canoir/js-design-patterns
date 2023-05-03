const _userObj = {
  id: 0,
  name: "",
  age: 10,
  nationalId: 0,
  checkId(obj) {
    return this.id === obj[id];
  },
};

const user = new Proxy(_userObj, {
  set: function (target, name, newValue) {
    if (name === "nationalId") {
      if (newValue && (newValue.length >= 10 || typeof newValue === "string")) {
        return Reflect.set(target, name, newValue);
      }

      throw "Wrong National Id!";
    } else if (name === "checkId") throw "Don't Touch it boy!";
    else Reflect.set(target, name, newValue);
  },

  get: function (target, name) {
    if (name === "age") {
      return `${Reflect.get(target, name)} years`;
    }

    return Reflect.get(target, name);
  },
});

export default user;
