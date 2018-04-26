import axios from 'axios';

export const createComment = ({tocken, comment}) => axios.post('api/v0.1/commment', {tocken, comment});

export const deleteComment = ({tocken, id}) => axios.delete('api/v0.1/commment', {params: {'id': id}});

