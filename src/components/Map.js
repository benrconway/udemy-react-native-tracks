import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

const Map = () => {
  let points = [];

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 37.3323,
        longitude: -122.03121,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
    >
      <Polyline coordinates={points}/>
    </MapView>
  )
};

const styles = StyleSheet.create({
  map: {
    height: 300
  }
})

export default Map;