$(function() {
 
    //Set up instafeed
    var feed = new Instafeed({
        get: 'user',
        userId: '2010844114',
        clientId: 'e9a5812bcb164d4f8549c5e8080b4d4a',
        accessToken: '2010844114.1677ed0.9c7dd4b91bac42d39b4fc31e90f8e770',
        links: true,
        limit: 8,
        sortBy: 'most-recent',
        resolution: 'low_resolution',
        template: '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="photo-box"><div class="image-wrap"><a href="{{link}}"><img src="{{image}}"></a></div></div></div>'
    });
    feed.run();
 
});