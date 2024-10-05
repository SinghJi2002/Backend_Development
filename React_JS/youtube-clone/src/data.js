export const API_KEY='AIzaSyAbT_w3XXuBV9mK5Cr-x_57yfxypehUCFE'

export const formatViewCount=(viewCount)=> {
    if (viewCount < 1000) {
        return viewCount.toString();
    } else if (viewCount >= 1000 && viewCount < 1000000) {
        return (viewCount / 1000).toFixed(1) + 'K';
    } else if (viewCount >= 1000000 && viewCount < 1000000000) {
        return (viewCount / 1000000).toFixed(1) + 'M';
    } else if (viewCount >= 1000000000) {
        return (viewCount / 1000000000).toFixed(1) + 'B';
    }
}


export const timeAgo=(dateString)=> {
    const now = new Date();
    const pastDate = new Date(dateString);
    const secondsAgo = Math.floor((now - pastDate) / 1000);

    const intervals = [
        { label: 'year', seconds: 31536000 },
        { label: 'month', seconds: 2592000 },
        { label: 'day', seconds: 86400 },
        { label: 'hour', seconds: 3600 },
        { label: 'minute', seconds: 60 }
    ];

    for (const interval of intervals) {
        const count = Math.floor(secondsAgo / interval.seconds);
        if (count >= 1) {
            return `${count} ${interval.label}${count !== 1 ? 's' : ''} ago`;
        }
    }

    return 'Just now';
}
