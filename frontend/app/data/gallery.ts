import type { GalleryItem } from "~/types/gallery";

export const gallery: GalleryItem[] = [
  {
    id: "braces-1",
    title: "Braces Transformation",
    category: "braces",
    images: {
      before: "/gallery/braces/braces-ba-1-before.webp",
      after: "/gallery/braces/braces-ba-1-after.webp",
    },
    description: "14-month orthodontic treatment for overcrowding.",
  },
  {
    id: "whitening-1",
    title: "Teeth Whitening Results",
    category: "whitening",
    images: {
      before: "/gallery/whitening/whitening-ba-1-before.webp",
      after: "/gallery/whitening/whitening-ba-1-after.webp",
    },
    description: "In-clinic LED whitening session.",
  },
  {
    id: "implants-1",
    title: "Dental Implant Restoration",
    category: "implants",
    images: {
      before: "/gallery/implants/implants-ba-1-before.webp",
      after: "/gallery/implants/implants-ba-1-after.webp",
    },
    description: "Single tooth implant replacement.",
  },
];
