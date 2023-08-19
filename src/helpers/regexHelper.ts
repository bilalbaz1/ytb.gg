
function extractVideoId(videoUrl: string): string {
    // Video URL'sinin başında "https" veya "www" kontrolü
    if (videoUrl.startsWith('https://') || videoUrl.startsWith('http://') || videoUrl.startsWith('www.')) {
        // "videoId"yi bulmak için URL'yi parçala
        const urlParts = videoUrl.split('/');
        // URL'nin son kısmı "videoId" olacaktır
        const videoId = urlParts[urlParts.length - 1];
        const fVideoId = videoId.replaceAll('watch?v=', '');
        return fVideoId;
    } else {
        // Başında "https" veya "www" olmayan URL'ler için varsayılan davranış
        return videoUrl;
    }
}


export default {
    extractVideoId,
}