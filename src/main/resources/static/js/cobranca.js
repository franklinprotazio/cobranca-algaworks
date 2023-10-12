$('#confirmacaoExclusaoModal').on('show.bs.modal', function(_event) {
	
	var button = $(_event.relatedTarget);
	
	
	var codigoTitulo = button.data('codigo');
	var descricaoTitulo = button.data('descricao');
	
	var modal = $(this);
	var form = modal.find('form');
	var action = form.attr('action');
	if (!action.endsWith('/')) {
		action += '/';
	}
	
	form.attr('action', action + codigoTitulo);
	
	modal.find('.modal-body span').html('Tem certeza que deseja excluir o título <strong> ' + descricaoTitulo + '</string>?')
	

});


$(document).ready(function() {
    $("#confirmarExclusao").on("click", function() {
        var codigo = $(this).data("codigo");
        $("#codigo").val(codigo);
        
        // Envie a solicitação DELETE usando JavaScript
        $.ajax({
            url: "/titulos/" + codigo,
            type: "DELETE",
            success: function(_response) {
                // Lidere com a resposta após a exclusão
                window.location.reload(); // Recarregue a página ou faça o que for necessário
            },
            error: function(_error) {
                // Lidere com erros, se necessário
            }
        });
    });
});