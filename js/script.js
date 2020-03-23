$.getJSON("./config.json", function( config ) {
    document.title = config.pageTitle;

    var source = config.pdf;
    var options = {
        "soundEnable": false,
        "enableDownload": false,
        "hideControls": "share,more",
        "stiffness": 5,
        "height": '100%'

    };
    var flipBook = $(".book").flipBook(source, options);
});