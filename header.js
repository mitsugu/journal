// 使い方
//includeHTMLSecure('header-placeholder', 'parts/header.html');
function includeHTMLSecure(placeholderId, filePath) {
    const placeholder = document.getElementById(placeholderId);
    if (!placeholder) {
		console.error("Not Found place holder ID!!");
		return;
	}

    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            return response.text();
        })
        .then(htmlText => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlText, 'text/html');

            const content = doc.body.querySelector('.caution');

            if (content) {
                placeholder.replaceWith(content);
            }
        })
        .catch(error => {
            console.error('HTML include error:', error);
        });
}
