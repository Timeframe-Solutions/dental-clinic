import type { FAQGroup } from '~/types/faq'

export const faqs: { general: FAQGroup; implants: FAQGroup; braces: FAQGroup } = {
  general: {
    id: 'general',
    title: 'Common Questions',
    items: [
      {
        id: '1',
        question: 'How quickly do you respond to appointment requests?',
        answer: 'We aim to confirm all appointment requests within 2 business hours during opening hours. Requests received after 17:00 are processed the following morning.'
      },
      {
        id: '2',
        question: 'Do you offer emergency dental appointments?',
        answer: 'Yes. If you are experiencing severe toothache, a broken tooth, or dental trauma, call +254 700 000 000 directly and we will prioritise you.'
      },
      {
        id: '3',
        question: 'Do you accept insurance?',
        answer: 'We accept most major Kenyan medical insurance plans. Please contact us with your insurance provider details and we will confirm coverage before your appointment.'
      },
      {
        id: '4',
        question: 'Is there parking at the clinic?',
        answer: 'Yes, free parking is available at Suite 4B, Plaza Chambers, Westlands, Nairobi. We are also accessible by matatu and boda boda.'
      },

      {
        id: '5',
        question: 'Can I pay in instalments?',
        answer: 'For larger treatments such as implants or full orthodontic treatment, we offer flexible payment plans. Ask our team during your consultation.'
      }
    ]
  },
  implants: {
    id: 'implants',
    title: 'Frequently Asked Questions',
    items: [
      {
        id: 'i1',
        question: 'Are dental implants painful?',
        answer: 'The placement procedure is performed under local anaesthesia and most patients report less discomfort than they expected. Mild soreness for 2–3 days afterwards is normal.'
      },
      {
        id: 'i2',
        question: 'How long do dental implants last?',
        answer: 'With proper care and regular dental visits, implants can last 20–30 years or more. The crown on top may need replacing after 10–15 years.'
      },
      {
        id: 'i3',
        question: 'Am I a suitable candidate for implants?',
        answer: 'Most adults with good general health are suitable. You need sufficient jawbone density and healthy gums. We assess this during your consultation.'
      }
    ]
  },
  braces: {
    id: 'braces',
    title: 'Frequently Asked Questions',
    items: [
      {
        id: 'b1',
        question: 'At what age can someone get braces?',
        answer: 'We treat patients from age 7 for early assessment. Active treatment typically begins at 10–14 for children, and there is no upper age limit for adults.'
      },
      {
        id: 'b2',
        question: 'How long will I wear braces?',
        answer: 'Treatment time varies from 12 to 36 months depending on the complexity of your case and the type of braces chosen.'
      },
      {
        id: 'b3',
        question: 'Do braces hurt?',
        answer: 'There is usually some tenderness for 2–3 days after fitting and each adjustment. This is normal and managed with mild pain relief.'
      }
    ]
  }
}
