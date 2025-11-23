function downloadFile(filename) {
    const link = document.createElement("a");
    link.href = filename;
    link.download = filename;

    // Required for Firefox
    document.body.appendChild(link);

    link.click();

    // Cleanup
    document.body.removeChild(link);
}
