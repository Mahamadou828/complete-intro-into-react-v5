export default function updateLocation(location) {
  return {
    type: 'CHANGE_LOCATION',
    payload: location,
  };
}
