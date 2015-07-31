
function load_puzzle_images(parent, items) {

    var src_attr = 'src';
    var alt_attr = 'data-alt-src';

    items.forEach(function (ith) {
        var ninja = 'img/ninja' + ith + '.png';
        var cat = 'img/cat' + ith + '.png';
        var img = $('<img>')
                .addClass('puzzle_image')
                .attr(src_attr, ninja)
                .attr(alt_attr, cat)
                .on('click', function(){
                    var definitely_shuffle = 1;
                    shuffle_puzzle_images($(this), definitely_shuffle);
                });
        parent.append(img);
    });
}

function shuffle_puzzle_images(elements, toggle)
{
        console.log(elements);
        elements.each(function() {
            var img = $(this);
            var src_attr = 'src';
            var alt_attr = 'data-alt-src';
            var src = img.attr(src_attr);
            var alt = img.attr(alt_attr);
            var shuffle = (toggle || Math.round(Math.random()));
            if (shuffle === 1) {
                img.attr(src_attr, alt);
                img.attr(alt_attr, src);
            }
        });
}

$(document).ready(function(){
    var items =[0, 1, 2, 3, 4];
    var definitely_shuffle = 0;

    load_puzzle_images($("#puzzle"), items);
    shuffle_puzzle_images($('img.puzzle_image'), definitely_shuffle);
});
