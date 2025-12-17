import { apiDevice } from '@/api/apiConfig';

export async function getAllDevices() {
  try {
    const response = await apiDevice.get('/devices');
  } catch (error) {}
}
