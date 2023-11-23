import { RANDOMIZED } from './settings.js';
import { imageCollection } from './data.js';

export const getImages = (type) => {
    const imagePairs = imageCollection[type].map((item) => ({
        ...item, id: `${item.id}-1`,
    }));

    const mergedImages = [...imageCollection[type], ...imagePairs];

    return RANDOMIZED ? mergedImages.sort(() => 0.5 - Math.random()) : mergedImages;
};
