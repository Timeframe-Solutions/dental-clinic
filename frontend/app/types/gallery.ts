export interface BeforeAfter {
  before: string;
  after: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'braces' | 'whitening' | 'implants' | 'veneers' | 'all';
  images: BeforeAfter;
  description?: string;
}
