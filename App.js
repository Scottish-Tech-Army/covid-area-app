import React, { useEffect } from 'react';
import Amplify, { Auth } from 'aws-amplify';
import Location from "aws-sdk/clients/location";
import awsconfig from './src/aws-exports';
import { StyleSheet, Text, View } from 'react-native';

Amplify.configure(awsconfig);

const createClient = async () => {
  const credentials = await Auth.currentCredentials();

  const client = new Location({
    credentials,
    region: awsconfig.aws_project_region
  });

  return client;
}
function App() {

  useEffect(() => {
    const send = async function () {

      const client = await createClient();
      client.listGeofenceCollections({}, function (err, data) {
        if (err) {
          console.log('list geo err', err)
        } else {
          console.log('list geo success', data)
        }
      })
    }
    send();
  },[])

  return (
    <View style={styles.container}>
      <Text>Expo + AWS Amplify</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;