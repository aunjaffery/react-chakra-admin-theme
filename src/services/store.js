import create from "zustand";

export const useStore = create((set, get) => ({
  msgs: [],
  setMsg: (incomingMsg) => {
    let list = get().msgs;
    console.log(list);
    let channel = list.find((m) => m.channelId === incomingMsg.channelId);
    console.log(channel);
    if (channel) {
      console.log("chanel fond");
      channel.msgs = [...channel.msgs, incomingMsg];
      set({ msgs: [...list] });
    } else {
      let newChannel = {
        channelId: incomingMsg.channelId,
        msgs: [incomingMsg],
      };
      set({ msgs: [...list, newChannel] });
    }
  },
}));
