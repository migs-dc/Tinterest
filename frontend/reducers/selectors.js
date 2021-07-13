export const selectPin = ({ pins }, pinId) => {
  return pins[pinId];
};

export const selectBoard = ({boards}, boardId) => {
  return boards[boardId];
}

// export const selectPins = ()