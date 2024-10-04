import fs from 'fs';
import path from 'path';



export const imageSender = async (post: any) => {
    try {
        // Validate picUrl and ensure it's a string
        if (!post.picUrl || typeof post.picUrl !== 'string') {
            console.error('Invalid picUrl:', post.picUrl);
            post = { ...post._doc, picData: null };
            return post;
        }

        // Construct the image path
        const imagePath = path.join(__dirname, "../../", post.picUrl);

        // Log the image path for debugging
        console.log('Image Path:', imagePath);

        // Check if the file exists
        if (fs.existsSync(imagePath)) {
            // Read the image file and convert it to base64
            const imageBuffer = await fs.promises.readFile(imagePath);
            const base64Image = `data:image/jpeg;base64,${imageBuffer.toString('base64')}`;

            // Add the base64 image to the post
            post = { ...post._doc, picData: base64Image };
        } else {
            console.warn('File not found:', imagePath);
            post = { ...post._doc, picData: null };
        }

        return post;
    } catch (error) {
        console.error('Error in imageSender:', error);
        throw new Error('Failed to send image');
    }
};
