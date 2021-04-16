import { getIosIdForVendorAsync } from 'expo-application'

async function getDeviceId() {
  return await getIosIdForVendorAsync()
}

export default getDeviceId
