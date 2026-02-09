
export type Category = 'All' | 'Wedding' | 'Candid' | 'Birthday' | 'Ceremony';

export interface Photo {
  id: number;
  url: string;
  category: Category;
  title: string;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  eventType: Category;
  eventDate: string;
  message: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}
