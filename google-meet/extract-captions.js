// Extract the captions generated from STT on the Google Meet meeting page.

// Function to extract caption texts
function extractCaptions() {
    // Get all the div elements with the class 'nMcdL bj4p3b'
    const captionDivs = document.querySelectorAll('div.nMcdL.bj4p3b');
    const captions = [];

    // Iterate through each caption div
    captionDivs.forEach(captionDiv => {
        // Get the name from the span with class 'NWpY1d'
        const nameElement = captionDiv.querySelector('span.NWpY1d');
        const name = nameElement ? nameElement.textContent : '';

        // Get the caption text from the div with class 'bh44bd VbkSUe'
        const textElement = captionDiv.querySelector('div.bh44bd.VbkSUe');
        const text = textElement ? textElement.textContent : '';

        // Combine name and text if text is present
        if (text) {
            captions.push(`${name}: ${text}`);
        }
    });

    // Return the extracted captions
    return captions;
}
