$(function () {

    let $header = $('#header');
    let $span = $('span').css('cursor', 'pointer');
    let $list = $('ul');

    $header.on('click', function(e) {
        e.preventDefault();
        $span.remove();

        let $premierMessage = $('<li>1 an de plus</li>');
        $premierMessage.css('background-color', 'yellow').css('cursor', 'pointer');
       
        $premierMessage.appendTo($list);

        $premierMessage.on('click', function() {
            let $deuxiemeMessage = $('<li>Tu gagnes en maturité</li>');
            $deuxiemeMessage.css('background-color', '#FF00FF').css('cursor', 'pointer');

            $deuxiemeMessage.appendTo($list);

            $deuxiemeMessage.on('click', function() {
                let $troisiemeMessage = $('<li>ON FAIT LA FÊTE !</li>');
                $troisiemeMessage.css('background-color', '#00FF00').css('cursor', 'pointer');

                let $musique = new Audio('../musique/audio.mp3');

                $troisiemeMessage.appendTo($list);

                $troisiemeMessage.on('click', function() {
                    $musique.play();
                    let $bodyElt = $('body');
                    $bodyElt.css('background-image', 'url("https://media.giphy.com/media/IQF90tVlBIByw/giphy.gif")');
                    $bodyElt.css('background-size', 'cover');
                });
            });
        });
    });
});