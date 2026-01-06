import { apiRoom } from '@/api/apiConfig';

export async function getAllRooms() {
  try {
    const response = await apiRoom.get(
      '/entities/?type=Room&options=keyValues&attrs=name,description',
    );
    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error };
  }
}
