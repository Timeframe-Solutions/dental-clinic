import type { Service } from '~/types/service'

export const services: Service[] = [
  {
    id: 'general',
    name: 'General Dentistry',
    description: 'Routine check-ups, cleanings, and fillings to keep your smile healthy every day.',
    icon: 'lucide:clipboard-check',
    slug: '/services',
    features: ['Dental Examination', 'Scale & Polish', 'Composite Fillings', 'Fluoride Treatment', 'Dental X-Rays', 'Tooth Extractions'],
    ctaLabel: 'Book a Check-Up'
  },
  {
    id: 'whitening',
    name: 'Teeth Whitening',
    description: 'Professional whitening treatments that brighten your smile by up to 8 shades.',
    icon: 'lucide:sparkles',
    slug: '/services#gallery',
    features: ['In-Clinic LED Whitening', 'Take-Home Whitening Kits', 'Combination Treatment'],
    ctaLabel: 'Book Whitening'
  },
  {
    id: 'implants',
    name: 'Dental Implants',
    description: 'Permanent, natural-looking replacements for missing teeth — built to last a lifetime.',
    icon: 'mdi:tooth-outline',
    slug: '/dental-implants',
    features: ['Single Tooth Implants', 'Full Arch Implants', 'Implant-Supported Dentures', 'Bone Grafting'],
    ctaLabel: 'Learn More'
  },
  {
    id: 'braces',
    name: 'Braces & Orthodontics',
    description: 'Metal braces, ceramic braces, and clear aligners to straighten your smile with precision.',
    icon: 'lucide:grid-3x3',
    slug: '/braces',
    features: ['Metal Braces', 'Ceramic Braces', 'Clear Aligners', 'Retainers', 'Bite Correction'],
    ctaLabel: 'Learn More'
  },
  {
    id: 'root-canal',
    name: 'Root Canal Treatment',
    description: 'Pain-free root canal therapy to save your natural tooth and eliminate infection.',
    icon: 'lucide:microscope',
    slug: '/services#root-canal',
    features: ['Single-Visit Root Canal', 'Multi-Visit Complex Cases', 'Post & Core Placement', 'Crown Restoration'],
    ctaLabel: 'Book Consultation'
  },
  {
    id: 'veneers',
    name: 'Dental Veneers',
    description: 'Thin porcelain shells that transform the shape, size, and colour of your teeth.',
    icon: 'lucide:layers',
    slug: '/services#veneers',
    features: ['Porcelain Veneers', 'Composite Veneers', 'Smile Makeover Planning'],
    ctaLabel: 'Book Consultation'
  },
  {
    id: 'children',
    name: "Children's Dentistry",
    description: "We love treating young patients! Our child-friendly environment and gentle approach make dental visits positive.",
    icon: 'lucide:baby',
    slug: '/services#children',
    features: ['Child Check-Ups', 'Fissure Sealants', 'Fluoride Varnish', 'Orthodontic Assessment'],
    ctaLabel: 'Book for Your Child'
  },
  {
    id: 'crowns',
    name: 'Dental Crowns',
    description: 'A tooth-shaped cap placed over a damaged tooth to restore strength, shape, and appearance.',
    icon: 'lucide:crown',
    slug: '/services#crowns',
    features: ['Porcelain Crowns', 'Zirconia Crowns', 'Temporary Crowns', 'Same-Day Crowns'],
    ctaLabel: 'Book Consultation'
  }
]
