var log = console.log;
var balert = function(parametre_1, parametre_2, parametre_3){
    var dialog_template = $('<div class="hzalert">' +
            '<div class="hzalert-dialog">' +
            '<div class="hzalert-icon"></div>' +
            '<div class="hzalert-title"><h3></h3></div>' +
            '<div class="hzalert-body"><p></p></div>' +
            '<div class="hzalert-buttons"></div>'),

        button = $('<button type="button" class=""></button>'),
        icons = {
            success : $('<div class="hza-icon success"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="61" height="52" viewBox="0 0 61 52" class="check-icon"><path d="M56.560,-0.010 C37.498,10.892 26.831,26.198 20.617,33.101 C20.617,33.101 5.398,23.373 5.398,23.373 C5.398,23.373 0.010,29.051 0.010,29.051 C0.010,29.051 24.973,51.981 24.973,51.981 C29.501,41.166 42.502,21.583 60.003,6.565 C60.003,6.565 56.560,-0.010 56.560,-0.010 Z" id="path-1" class="cls-2" fill-rule="evenodd"/></svg></div>'),
            warning : $('<div class="hza-icon success"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="61" height="52" viewBox="0 0 61 52" class="check-icon"><path d="M56.560,-0.010 C37.498,10.892 26.831,26.198 20.617,33.101 C20.617,33.101 5.398,23.373 5.398,23.373 C5.398,23.373 0.010,29.051 0.010,29.051 C0.010,29.051 24.973,51.981 24.973,51.981 C29.501,41.166 42.502,21.583 60.003,6.565 C60.003,6.565 56.560,-0.010 56.560,-0.010 Z" id="path-1" class="cls-2" fill-rule="evenodd"/></svg></div>'),
            error : $('<div class="hza-icon success"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="61" height="52" viewBox="0 0 61 52" class="check-icon"><path d="M56.560,-0.010 C37.498,10.892 26.831,26.198 20.617,33.101 C20.617,33.101 5.398,23.373 5.398,23.373 C5.398,23.373 0.010,29.051 0.010,29.051 C0.010,29.051 24.973,51.981 24.973,51.981 C29.501,41.166 42.502,21.583 60.003,6.565 C60.003,6.565 56.560,-0.010 56.560,-0.010 Z" id="path-1" class="cls-2" fill-rule="evenodd"/></svg></div>'),
            info :$('<div class="hza-icon success"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="61" height="52" viewBox="0 0 61 52" class="check-icon"><path d="M56.560,-0.010 C37.498,10.892 26.831,26.198 20.617,33.101 C20.617,33.101 5.398,23.373 5.398,23.373 C5.398,23.373 0.010,29.051 0.010,29.051 C0.010,29.051 24.973,51.981 24.973,51.981 C29.501,41.166 42.502,21.583 60.003,6.565 C60.003,6.565 56.560,-0.010 56.560,-0.010 Z" id="path-1" class="cls-2" fill-rule="evenodd"/></svg></div>'),
        },
        svg_success = $(''),
        types = [ 'info', 'success', 'warning', 'error'],
        btn_classes = ['success', 'danger', 'warning', 'default'],
        options = {
            title       : '',
            text        : '',
            icon        : 'success',
            type        : 'message',
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
        dialog.find('.hzalert-title h3').html(options.title);
        dialog.find('.hzalert-body p').html(options.text);
        dialog.find('.hzalert-icon').html(icons[options.icon || 'success'] || icons.icon);

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
                .addClass('danger')
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
        }

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

        dialog.appendTo('body');
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

balert.hide = function(){
    balert('hide');
};
balert.close = function(){
    balert('hide');
};