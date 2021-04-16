function updateDevicePosition({
  locationService,
  deviceId,
  position,
  timeStamp,
}) {
  locationService.batchEvaluateGeofences(
    {
      CollectionName: 'simplelads',
      DevicePositionUpdates: [
        {
          DeviceId: deviceId,
          Position: position,
          SampleTime: timeStamp,
        },
      ],
    },
    function (err, data) {
      if (err) {
        console.error('ERROR: AWS Location BatchEvaluateGeoFences ', err)
      } else {
        console.log('SUCCESS: AWS Location BatchEvaluateGeoFences ', {
          data,
        })
      }
    }
  )
  // unauthenticated update - does not trigger Geofences
  // locationService.batchUpdateDevicePosition(
  //   {
  //     TrackerName: 'AREA_ALERT',
  //     Updates: [
  //       {
  //         DeviceId: deviceId,
  //         Position: position,
  //         SampleTime: timeStamp,
  //       },
  //     ],
  //   },
  //   function (err, data) {
  //     if (err) {
  //       console.error('ERROR: AWS Location Service', err)
  //     } else {
  //       console.log('SUCCESS: AWS Location Service', { data })
  //     }
  //   }
  // )
}

export default updateDevicePosition
