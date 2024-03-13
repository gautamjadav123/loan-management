import React, { useState } from 'react';
import { Box, Flex, IconButton } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const images = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
    // Add more image URLs as needed
  ];
  const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <Flex align="center" justify="center" w="100%" h="100%" position="relative">
      <IconButton
        icon={<ChevronLeftIcon />}
        aria-label="Previous"
        position="absolute"
        left="0"
        onClick={prevSlide}
      />
      <Box w="100%" h="100%" overflow="hidden">
        <Box
          h="100%"
          display="flex"
          transition="transform 0.5s ease"
          transform={`translateX(-${currentIndex * 100}%)`}
        >
          {images.map((image, index) => (
            <Box key={index} w="100%" flexShrink={0}>
              <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%' }} />
            </Box>
          ))}
        </Box>
      </Box>
      <IconButton
        icon={<ChevronRightIcon />}
        aria-label="Next"
        position="absolute"
        right="0"
        onClick={nextSlide}
      />
    </Flex>
  );
};

export default Carousel;
