package com.algaworks.cobranca.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import com.algaworks.cobranca.model.StatusTitulo;
import com.algaworks.cobranca.model.Titulo;
import com.algaworks.cobranca.repository.Titulos;

@Service
public class CadastroTituloService {

	@Autowired
	private Titulos titulos;
	
	public void salvar (Titulo titulo) {
		try {	
			titulos.save(titulo);
		} catch (DataIntegrityViolationException e) {
			throw new IllegalArgumentException("Formato de data inválido");
		}
	}

	public void excluir(Long codigo) {
		titulos.deleteById(codigo);
	}

	public String receber(Long codigo) {
	    Optional<Titulo> optionalTitulo = titulos.findById(codigo);
	    
	    if (optionalTitulo.isPresent()) {
	        Titulo titulo = optionalTitulo.get();
	        titulo.setStatus(StatusTitulo.RECEBIDO);
	        titulos.save(titulo);
	    } else {
	        
	    }
	    
	    return StatusTitulo.RECEBIDO.getDescricao();
	}
	
	
	
}
