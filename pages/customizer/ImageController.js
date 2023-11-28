import React from 'react';
import { Button } from 'flowbite-react';

const ImageController = ({ onMove }) => {
  return (
    <div className="mt-4 flex gap-2">
      <Button onClick={() => onMove('left')}>Move Left</Button>
      <Button onClick={() => onMove('right')}>Move Right</Button>
      <Button onClick={() => onMove('up')}>Move Up</Button>
      <Button onClick={() => onMove('down')}>Move Down</Button>
    </div>
  );
};

export default ImageController;
