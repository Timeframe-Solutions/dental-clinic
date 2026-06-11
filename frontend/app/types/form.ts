export interface AppointmentFormData {
  fullName: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: 'morning' | 'afternoon' | 'saturday';
  service: string;
  message?: string;
}
