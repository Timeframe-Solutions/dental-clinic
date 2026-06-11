import type { GalleryItem } from '~/types/gallery'

export const useGalleryLightbox = () => {
  const isOpen = useState<boolean>('gallery-lightbox-open', () => false)
  const activeItem = useState<GalleryItem | null>('gallery-active-item', () => null)

  const open = (item: GalleryItem) => {
    activeItem.value = item
    isOpen.value = true
  }

  const close = () => {
    isOpen.value = false
    activeItem.value = null
  }

  return {
    isOpen,
    activeItem,
    open,
    close
  }
}
