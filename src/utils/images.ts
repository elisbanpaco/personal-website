import type { ImageMetadata } from 'astro';

// Dynamically import all images from src/assets/projects
const projectImages = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/projects/*.{png,jpg,jpeg,webp,svg,avif}',
  { eager: true }
);

/**
 * Retrieves the optimized ImageMetadata for a given project slug or asset name.
 * Returns undefined if no matching image file is found.
 */
export function getProjectAsset(slug: string): ImageMetadata | undefined {
  for (const path in projectImages) {
    const filename = path.split('/').pop()?.split('.')[0];
    if (filename === slug) {
      return projectImages[path].default;
    }
  }
  return undefined;
}
