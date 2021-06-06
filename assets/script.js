$(document).ready(() => {
    // deskripsi
    $('#content').on('click', '.deskripsi', () => {
        $('.deskripsi').attr('class', 'deskripsi-close')
        $('.main-content-deskripsi').css('display', 'block');
    })
    $('#content').on('click', '.deskripsi-close', () => {
        // alert('asasa')
        $('.deskripsi-close').attr('class', 'deskripsi')
        $('.main-content-deskripsi').css('display', 'none');
    })
    // sejarah
    $('#content').on('click', '.sejarah', () => {
        $('.sejarah').attr('class', 'sejarah-close')
        $('.main-content-sejarah').css('display', 'block');
    })
    $('#content').on('click', '.sejarah-close', () => {
        // alert('asasa')
        $('.sejarah-close').attr('class', 'sejarah')
        $('.main-content-sejarah').css('display', 'none');
    })
    // geografi
    $('#content').on('click', '.geografi', () => {
        $('.geografi').attr('class', 'geografi-close')
        $('.main-content-geografi').css('display', 'block');
    })
    $('#content').on('click', '.geografi-close', () => {
        // alert('asasa')
        $('.geografi-close').attr('class', 'geografi')
        $('.main-content-geografi').css('display', 'none');
    })
    // wisata
    $('#content').on('click', '.wisata', () => {
        $('.wisata').attr('class', 'wisata-close')
        $('.main-content-wisata').css('display', 'block');
    })
    $('#content').on('click', '.wisata-close', () => {
        // alert('asasa')
        $('.wisata-close').attr('class', 'wisata')
        $('.main-content-wisata').css('display', 'none');
    })
    //sticky
    $(window).scroll(() => {
        $('nav').toggleClass('sticky', window.scrollY > 0);
    })
    //hamburger
    $('.kotak span').click((e) => {
        let namaKotak = e.target.outerText;
        if (namaKotak == 'menu') {
            $('.kotak span').html('close');
            // $('.kotak').siblings('ul').css({
            //     'display': 'block',
            //     'position': 'absolute',
            //     'right': 0,
            //     'top': 100,
            // });
            $('.kotak').siblings('ul').attr('class', 'hamburger');
        }
        else if (namaKotak == 'close') {
            $('.kotak span').html('menu')
            $('.kotak').siblings('ul').attr('class', '');
            // $('.kotak').siblings('ul').css({'display': 'none', 'position': 'absolute'});
        }
    })

});