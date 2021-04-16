import { androidId } from 'expo-application'

async function getDeviceId() {
  return new Promise.resolve(androidId)
}

export default getDeviceId
