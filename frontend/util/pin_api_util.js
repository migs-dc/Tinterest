export const fetchPins = () => (
  $.ajax({
    method: 'GET',
    url: '/api/pins'
  })
)

export const fetchPin = id => (
  $.ajax({
    method: 'GET',
    url: `/api/pins/${id}`
  })
)

export const createPin = pin => (
  $.ajax({
    method: 'POST',
    url: `/api/pins/`,
    data: { pin }
  })
)

export const updatePin = pin => (
  $.ajax({
    url: `/api/pins/${pin.id}`,
    method: 'PATCH',
    data: { pin }
  })
)