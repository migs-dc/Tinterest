export const createPinBoard = pinBoard => (
  $.ajax({
    method: 'POST',
    url: `/api/pin_boards`,
    data: { pinBoard }
  })
)

export const deletePinBoard = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/pin_boards/${id}`
  })
)