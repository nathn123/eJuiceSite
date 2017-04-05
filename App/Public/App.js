document.onload(() => {
    $('.nav#conc').click(() => {
        $('.find_by_conc').show();
        $('.find_by_reci').hide();
        $('.find_by_flav').hide();
        $('.Calculator').hide();
    });
    $('.nav#flav').click(() => {
        $('.find_by_conc').hide();
        $('.find_by_reci').hide();
        $('.find_by_flav').show();
        $('.Calculator').hide();
    });
    $('.nav#reci').click(() => {
        $('.find_by_conc').hide();
        $('.find_by_reci').show();
        $('.find_by_flav').hide();
        $('.Calculator').hide();
    });
    $('.nav#calc').click(() => {
        $('.find_by_conc').hide();
        $('.find_by_reci').hide();
        $('.find_by_flav').hide();
        $('.Calculator').show();
    });
});