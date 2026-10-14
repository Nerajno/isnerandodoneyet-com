import { onMounted, onUnmounted, type Ref } from 'vue'

export function useReveal(root?: Ref<HTMLElement | null>) {
  let observer: IntersectionObserver | null = null

  function observe() {
    const container = root?.value ?? document
    const els = container.querySelectorAll<HTMLElement>('[data-reveal]')
    if (els.length === 0) return

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer?.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    els.forEach((el) => observer!.observe(el))
  }

  onMounted(observe)
  onUnmounted(() => observer?.disconnect())

  return { observe }
}
