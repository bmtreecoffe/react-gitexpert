import { useEffect, useState } from "react";

import { getGisf } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImg = await getGisf(category);
        setImages(newImg);
        setIsLoading(false);
    };

    useEffect(() => {
        getImages();
    }, []);

    return {
        images,
        isLoading
    }
}
