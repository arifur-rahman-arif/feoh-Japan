if (typeof window !== 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://www.juicer.io/embed/' + document.getElementById('juicer-feed')?.getAttribute('data-feed-id') + '/embed-code.js';
    script.async = true;
    script.defer = true;
    script.onload = function () {
        // Ensure Juicer initializes after script loads
        if (window.juicer) {
            window.juicer.initialize('juicer-feed'); 
        }
    };
    document.body.appendChild(script);
}
