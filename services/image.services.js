import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from './firebase';

const uploadImage = async (imageFile) => {
  try {
    // Create a storage reference
    const storageRef = ref(storage, 'images/' + imageFile.name);

    // Upload the file to the storage reference
    await uploadBytes(storageRef, imageFile);

    // Get the download URL for the uploaded file
    const downloadURL = await getDownloadURL(storageRef);

    return downloadURL;
  } catch (error) {
    console.error('Error uploading image to Firebase Storage:', error);
    throw error; // You might want to handle this error in a better way in your application
  }
};

export default uploadImage;
