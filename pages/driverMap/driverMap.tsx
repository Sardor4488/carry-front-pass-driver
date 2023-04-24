import React from 'react'
import { YMaps, Map } from 'react-yandex-maps';

const DriverMap = () => {
  return (
    <YMaps
    query={{
      apikey: 'YOUR_API_KEY_HERE',
    }}
  >
    <Map  defaultState={{ center: [55.75, 37.57], zoom: 20 }} />
  </YMaps>  )
}

export default DriverMap