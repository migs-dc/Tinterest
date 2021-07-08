export const fetchPins = () => (
  $.ajax({
    url: '/api/pins'
  })
)