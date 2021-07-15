export const createPinBoard = pin_board => (
  $.ajax({
    method: 'POST',
    url: `/api/pin_boards`,
    data: { pin_board }
  })
)

export const deletePinBoard = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/pin_boards/${id}`
  })
)