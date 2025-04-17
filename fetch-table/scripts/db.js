const apiUrl = 'https://nettuts.hu/jms/Waru779/';

export const getAll = (entity = 'product') => {
    return fetch(`${apiUrl}${entity}`)
        .then( response => response.json() );
};

export const remove = (id = 0, entity = 'product') => {
    return fetch(`${apiUrl}${entity}/${id}`, {
        method: 'DELETE',
    })
    .then( response => response.json() );
};

