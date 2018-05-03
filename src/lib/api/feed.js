import axios from 'axios';

//export const getFeeds = 

export const createFeed = ({tocken, 
                            title,
                            content,
                            upload,
}) => axios.post('api/v0.1/Feed', {tocken, title, content, upload});
