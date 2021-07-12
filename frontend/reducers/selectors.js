export const selectPin = ({ pins }, pinId) => {
  return pins[pinId];
};

export const selectBoard = ({board}, boardId) => {
  return boards[boardId];
}