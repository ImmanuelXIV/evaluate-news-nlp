// Make async POSt request to server
const postData = async function(url='', data={}) {
    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        return await res.json();
    }
    catch(error) {
        console.log(`An error occured during function call postData: ${error}`);
    }
};

export {postData}