var log = console.log;
var balert = function(parametre_1, parametre_2, parametre_3){
    var dialog_template = $('<div class="hzalert">' +
            '<div class="hzalert-dialog">' +
            '<div class="hzalert-icon"></div>' +
            '<div class="hzalert-title"><h3></h3></div>' +
            '<div class="hzalert-body"><p></p></div>' +
            '<div class="hzalert-buttons"></div>'),

        input = $('<div class="hza-input"><label for="hzalertinput"></label><input type="text" id="hzalertinput"></div>'),
        button = $('<button type="button" class=""></button>'),
        icons = {
            success : $('<div class="hza-icon success"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="61" height="52" viewBox="0 0 61 52" class="check-icon"><path d="M56.560,-0.010 C37.498,10.892 26.831,26.198 20.617,33.101 C20.617,33.101 5.398,23.373 5.398,23.373 C5.398,23.373 0.010,29.051 0.010,29.051 C0.010,29.051 24.973,51.981 24.973,51.981 C29.501,41.166 42.502,21.583 60.003,6.565 C60.003,6.565 56.560,-0.010 56.560,-0.010 Z" id="path-1" class="cls-2" fill-rule="evenodd"/></svg></div>'),
            warning : $('<div class="hza-icon warning"><svg baseProfile="tiny" height="24px" id="Layer_1" version="1.2" viewBox="0 0 24 24" width="24px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M12,5.511c0.561,0,1.119,0.354,1.544,1.062l5.912,9.854C20.307,17.842,19.65,19,18,19H6c-1.65,0-2.307-1.159-1.456-2.573   l5.912-9.854C10.881,5.865,11.439,5.511,12,5.511 M12,3.511c-1.296,0-2.482,0.74-3.259,2.031l-5.912,9.856   c-0.786,1.309-0.872,2.705-0.235,3.83S4.473,21,6,21h12c1.527,0,2.77-0.646,3.406-1.771s0.551-2.521-0.235-3.83l-5.912-9.854   C14.482,4.251,13.296,3.511,12,3.511z"/></g><g><circle cx="12" cy="16" r="1.3"/></g><g><path d="M13.5,10c0-0.83-0.671-1.5-1.5-1.5s-1.5,0.67-1.5,1.5c0,0.199,0.041,0.389,0.111,0.562C11.165,11.938,12,14,12,14   s0.835-2.062,1.391-3.438C13.459,10.389,13.5,10.199,13.5,10z"/></g></svg></div>'),
            error : $('<div class="hza-icon error"><svg height="24" version="1.1" width="24" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><g transform="translate(0 -1028.4)"><path d="m22 12c0 5.523-4.477 10-10 10-5.5228 0-10-4.477-10-10 0-5.5228 4.4772-10 10-10 5.523 0 10 4.4772 10 10z" fill="#c0392b" transform="translate(0 1029.4)"/><path d="m22 12c0 5.523-4.477 10-10 10-5.5228 0-10-4.477-10-10 0-5.5228 4.4772-10 10-10 5.523 0 10 4.4772 10 10z" fill="#e74c3c" transform="translate(0 1028.4)"/><path d="m7.0503 1037.8 3.5357 3.6-3.5357 3.5 1.4142 1.4 3.5355-3.5 3.536 3.5 1.414-1.4-3.536-3.5 3.536-3.6-1.414-1.4-3.536 3.5-3.5355-3.5-1.4142 1.4z" fill="#c0392b"/><path d="m7.0503 1036.8 3.5357 3.6-3.5357 3.5 1.4142 1.4 3.5355-3.5 3.536 3.5 1.414-1.4-3.536-3.5 3.536-3.6-1.414-1.4-3.536 3.5-3.5355-3.5-1.4142 1.4z" fill="#ecf0f1"/></g></svg></div>'),
            info :$('<div class="hza-icon info"><svg height="100px" id="Capa_1" style="enable-background:new 0 0 46 100;" version="1.1" viewBox="0 0 46 100" width="46px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M35.162,0c6.696,0,10.043,4.567,10.043,9.789c0,6.522-5.814,12.555-13.391,12.555c-6.344,0-10.045-3.752-9.869-9.947   C21.945,7.176,26.35,0,35.162,0z M14.543,100c-5.287,0-9.164-3.262-5.463-17.615l6.07-25.457c1.057-4.077,1.23-5.707,0-5.707   c-1.588,0-8.451,2.816-12.51,5.59L0,52.406C12.863,41.48,27.662,35.072,34.004,35.072c5.285,0,6.168,6.361,3.525,16.148   L30.58,77.98c-1.234,4.729-0.703,6.359,0.527,6.359c1.586,0,6.787-1.963,11.896-6.041L46,82.377C33.488,95.1,19.83,100,14.543,100z   "/></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg></div>'),
        },
        svg_success = $(''),
        types = [ 'info', 'success', 'warning', 'error'],
        btn_classes = ['success', 'danger', 'warning', 'default'],
        options = {
            title       : '',
            text        : '',
            icon        : 'success',
            type        : 'message',
            animation   : 'fade',
            autoClose   : true,
            buttons     : [],
            onConfirm   : function(value){},
            onCancel    : function(value){},
        },
        promise =  new Promise(function(resolve, reject){

        }),
        dialog
    ;


    if(parseParametres()){
        $('.hzalert').remove();
        initialize();
    }
    else return true;




    function parseParametres(){
        if(typeof parametre_1 === 'string' && typeof parametre_2 === 'undefined'){
            // called like alert('hide');
            log('commande');
            runCommande(parametre_1);
            return false;
        }else if(typeof parametre_1 === 'string' && typeof parametre_2 === 'string'){
            // called like alert('title', 'text bla bla', || 'success');
            log('text construct');
            options.title = parametre_1;
            options.text = parametre_2;
            options.icon = parametre_3 || 'success';
        }else{
            log('object construct');
            if (typeof parametre_1 === 'object'){
                log('object');
                options = $.extend({}, options, parametre_1);
            }
        }

        return true;
    }

    function initialize(){
        dialog = dialog_template.clone();
        var title = dialog.find('.hzalert-title h3').html(options.title);
        var body = dialog.find('.hzalert-body').find('p').html(options.text).end();
        var inner = dialog.find('.hzalert-dialog').addClass(options.animation);
        var icon = dialog.find('.hzalert-icon').html(icons[options.icon || 'success'] || icons.icon);

        if(options.type === 'message'){
            var btn = button.clone()
                .addClass('success')
                .html('OK')
                .data('value', true)
                .on('click', function(e){
                    options.onConfirm.call(btn, e);
                    if(options.autoClose) balert.close();
                })
                .appendTo(dialog.find('.hzalert-buttons'));
        }else if(options.type === 'confirm'){
            button.clone()
                .html('No')
                .data('value', false)
                .on('click', function(e){
                    options.onCancel.call(btn, e);
                    balert.close();
                })
                .appendTo(dialog.find('.hzalert-buttons'));
            button.clone()
                .addClass('success')
                .html('Yes')
                .data('value', true)
                .on('click', function(e){
                    var that = $(this);
                    options.onConfirm.call(this, e);
                    setTimeout(function(){
                        that.html('...');
                    }, 100);
                    if(options.autoClose) balert.close();
                })
                .appendTo(dialog.find('.hzalert-buttons'));
        }else if(options.type === 'prompt'){
            var inp = input.clone();
            inp
                .find('label').html(options.text).on('click', function(){}).end()
                .find('input').attr('placeholder', options.placeholder || '').val(options.defaultValue || '');
            body.html(inp);
            icon.remove();
            title.parent().remove();

            button.clone()
                .html('Cancel')
                .data('value', false)
                .on('click', function(e){
                    options.onCancel.call(btn, e);
                    balert.close();
                })
                .appendTo(dialog.find('.hzalert-buttons'));
            button.clone()
                .addClass('success')
                .html('Yes')
                .data('value', inp.find('input').val())
                .on('click', function(e){
                    var that = $(this);
                    that.data('value', inp.find('input').val());
                    options.onConfirm.call(this, e);
                    setTimeout(function(){
                        that.html('...');
                    }, 100);
                    if(options.autoClose) balert.close();
                })
                .appendTo(dialog.find('.hzalert-buttons'));
        }else{
            $.each(options.buttons, function(i, b){
                var btn = button.clone()
                    .addClass(b.type || 'success')
                    .html(b.text)
                    .data('value', b.value)
                    .on('click', function(e){
                        btn.prop('disabled', true);
                        (b.onClick || function(){}).call(b, b.value, e);
                        if(options.autoClose || b.closeDialog) balert('hide');
                        setTimeout(function(){
                            btn.html('...');
                        }, 100);
                    })
                    .appendTo(dialog.find('.hzalert-buttons'));
            });
        }




        if(options.type === 'prompt'){

        }

        dialog.addClass(options.type).appendTo('body');
    }



    return new Promise(function(resolve, ctch){
        dialog.find('button').on('click', function(){
            resolve($(this).data('value'), dialog);
        });
    });


    function runCommande(cmd){
        if(cmd === 'hide'){
            $('.hzalert')
                .find('.hzalert-dialog').css('transform', 'scale(0)').end()
                .fadeOut(100, function(){
                    $(this).remove();
                });

            return true;
        }
    }


};
var bprompt = function(parametre_1n, parametre_2, parametre_3){



};

balert.hide = function(){
    balert('hide');
};
balert.close = function(){
    balert('hide');
};
balert.TYPES = {
    MESSAGE : 'message',
    CUSTOM : 'custom',
    CONFIRM : 'confirm'
};
balert.ICONS = {
    SUCCESS : 'success',
    WARNING : 'warning',
    ERROR : 'error',
    INFO : 'info'
};
