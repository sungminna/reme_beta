import axios from 'axios';
import type { WaitlistEntry, WaitlistFormData, WaitlistError } from '~/types/waitlist';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function joinWaitlist(data: WaitlistFormData): Promise<WaitlistEntry> {
  try {
    const response = await api.post<WaitlistEntry>('/waitlist', data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError<WaitlistError>(error) && error.response) {
      throw new Error(error.response.data.error);
    }
    throw new Error('Failed to join waitlist');
  }
}

export async function getWaitlist(): Promise<WaitlistEntry[]> {
  try {
    const response = await api.get<WaitlistEntry[]>('/waitlist');
    return response.data;
  } catch (error) {
    if (axios.isAxiosError<WaitlistError>(error) && error.response) {
      throw new Error(error.response.data.error);
    }
    throw new Error('Failed to fetch waitlist');
  }
} 