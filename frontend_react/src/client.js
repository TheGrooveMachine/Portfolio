import createClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: '53gaud31',
    dataset: 'production',
    apiVersion: '2023-05-03',
    useCdn: true,
    // token: 'sk0w4hFtoA9LWpo4h6iU3FjRfugFKvyjRLCZ0P0PURao8U4441Dz4in4fdhjxlPzcZSp8VQMWuT3jaqfZBsix3e3fQWIC305ya9GENBQBq92FlxBk7R7u2erPiiL8BrYLK9pL4cs4BD1zls3D5yRGsGCayAkXDPcLmGJCUkkhFUlahEKgevg',
})



const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);