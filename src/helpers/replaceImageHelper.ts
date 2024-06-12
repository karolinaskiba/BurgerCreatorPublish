import { computed } from 'vue';

export function replaceImage() {
  const textToRm = 'ingredient-';

  return computed(() => {
    return (imageUrl: string): string => {
      return typeof imageUrl === 'string' && imageUrl.includes(textToRm)
        ? imageUrl.replace(new RegExp(textToRm, 'g'), '')
        : imageUrl;
    };
  });
}
