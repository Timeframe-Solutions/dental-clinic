export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface FAQGroup {
  id: string;
  title: string;
  items: FAQ[];
}
