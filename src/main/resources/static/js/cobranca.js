$('#confirmacaoExclusaoModal').on('show.bs.modal', function(_event) {
	
	var button = $(_event.relatedTarget);
		
	var codigoTitulo = button.data('codigo');
	var descricaoTitulo = button.data('descricao');
	
	var modal = $(this);
	var form = modal.find('form');
	var action = form.data('url-base');
	if (!action.endsWith('/')) {
		action += '/';
	}
	
	form.attr('action', action + codigoTitulo);
	
	modal.find('.modal-body span').html('Tem certeza que deseja excluir o título <strong> ' + descricaoTitulo + '</string>?')
});

$(function() {
	$('[rel="tooltip"]').tooltip();
	$('.js-currency').maskMoney({decimal: ',', thousands: '.', allowZero: true});
	
	$('.js-atualizar-status').on('click', function (_event) {
		_event.preventDefault();
		
		botaoReceber = $(_event.currentTarget);
		urlReceber = botaoReceber.attr('href');
		
		response = $.ajax({
			url: urlReceber,
			type: 'PUT' 	
		});
		
		response.done(function(_e) {
			codigoTitulo = botaoReceber.data('codigo');
			$('[data-role=' + codigoTitulo + ' ]').html('<span class="label label-success">' + _e + '</span>');
			botaoReceber.hide();
		});
		
		response.fail(function(_e){
			console.log(_e);
			alert('Erro recebendo cobrança');
		});
	});
});

	