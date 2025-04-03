import axios from 'axios';

const API_URL = process.env.API_URL || 'http://localhost:8000';

export interface WaitlistEntry {
  email: string;
  plan: string;
  feedback?: string;
}

export interface WaitlistResponse {
  id: number;
  email: string;
  plan: string;
  created_at: string;
}

export const api = {
  async createWaitlistEntry(data: WaitlistEntry): Promise<WaitlistResponse> {
    const response = await axios.post(`${API_URL}/api/waitlist`, data);
    
    if (response.status === 409) {
      throw new Error('이미 등록된 이메일입니다.');
    }
    
    return response.data;
  },

  async getWaitlistEntries(): Promise<WaitlistResponse[]> {
    const response = await axios.get(`${API_URL}/api/waitlist`);
    return response.data;
  }
}; 