export const callApi = (endpoint: RequestInfo | URL, token: any) => {

    const headers = new Headers();
    const bearer = `Bearer ${token}`;

    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: headers
    };

    // logMessage('Calling web API...');

    fetch(endpoint, options)
        .then(response => response.json())
        .then(response => {

            if (response) {
                // logMessage('Web API responded: ' + response.name);
            }

            return response;
        }).catch(error => {
        console.error(error);
    });
}