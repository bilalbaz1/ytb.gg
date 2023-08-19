


function getMobileOperatingSystem(): "windows" | "android" | "ios" {
    const userAgent = navigator.userAgent;

    if (/windows phone/i.test(userAgent)) {
        return "windows";
    } else if (/android/i.test(userAgent)) {
        return "android";
    } else if (/iPad|iPhone|iPod/.test(userAgent)) {
        return "ios";
    } else {
        return "windows";
    }
}

export default getMobileOperatingSystem;