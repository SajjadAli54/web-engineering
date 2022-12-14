async function loadNewJson(url) {
    let response = await fetch(url);
    if (response.status == 200)
        return response.json();
    else
        throw new Error(response.status);
}

try {
    let data = loadNewJson('no-such-user.json');
    console.log(data);
} catch (error) {
    console.log(error);
}