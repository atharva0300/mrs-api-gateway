// creating the complete URL of microservice

const logsList = ['server' , 'booking',  'auth' , 'movie' , 'notification' , 'search' , 'user' , 'showtime' , 'comment' , 'theater' , 'offer' , 'general']
const apiTypePortMapping = {
    'auth' : process.env.AUTH_PORT,
    'movie' : process.env.MOVIE_PORT,
    'search' : process.env.SEARCH_PORT,
    'slots' : process.env.SHOWTIME_PORT,
    'booking' : process.env.BOOKING_PORT,
    'comment' : process.env.COMMENT_PORT,
    'offer' : process.env.OFFER_PORT,
    'theater' : process.env.THEATER_PORT,
    'user' : process.env.USER_PORT
}
const apiTypeHostMapping = {
    'auth' : 'mrs-auth',
    'movie' : 'mrs-movie',
    'search' : 'mrs-search',
    'slots' : 'mrs-slots',
    'booking' : 'mrs-booking',
    'comment' : 'mrs-comment',
    'offer' : 'mrs-offer',
    'theater' : 'mrs-theater',
    'user' : 'mrs-user'
}

const createPath = (originalUrl , apiType) => {
    let newUrl;
    let portNumber;
    console.log('apiType : ' , apiType)
    if(logsList.includes(apiType)){
        newUrl = `http://${apiTypeHostMapping[apiType]}:`
        portNumber = apiTypePortMapping[apiType]
    }else{
        throw new Error('Invalid API type');
    }
    newUrl += portNumber
    newUrl += originalUrl
    
    console.log('New path in createPath:', newUrl);
    return newUrl
};

module.exports = createPath
