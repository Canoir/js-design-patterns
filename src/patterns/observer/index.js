import ChatroomListener from "./event.js";
import RoomListener from "./room.js";

function main() {
  const first = (msg) => {
    console.log("First", msg);
  };

  const second = (msg) => {
    console.log("Second", msg);
  };

  const third = (msg) => {
    console.log("Third", msg);
  };

  ChatroomListener.enter(first);
  ChatroomListener.enter(second);
  ChatroomListener.enter(third);

  ChatroomListener.notify({ status: 200 });

  ChatroomListener.leave(second);

  ChatroomListener.notify({ status: 201 });
}
// main();

function second_main() {
  const first = (msg) => {
    console.log("First", msg);
  };

  const second = (msg) => {
    console.log("Second", msg);
  };

  const third = (msg) => {
    console.log("Third", msg);
  };

  RoomListener.enter(first, "VIP");
  RoomListener.enter(second);
  RoomListener.enter(third);

  RoomListener.notify({ status: 200 });
  RoomListener.notify({ msg: "Hi There!" }, "VIP");

  RoomListener.leave(second);

  RoomListener.notify({ status: 201 });
  RoomListener.notify({ msg: "Hi There!" }, "VIP");
}
second_main();
