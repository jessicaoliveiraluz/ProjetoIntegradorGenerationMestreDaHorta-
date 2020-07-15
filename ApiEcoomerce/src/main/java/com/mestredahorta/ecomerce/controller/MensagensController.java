package com.mestredahorta.ecomerce.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mestredahorta.ecomerce.model.Mensagens;
import com.mestredahorta.ecomerce.model.Usuario;
import com.mestredahorta.ecomerce.repository.MensagemRepository;


@RestController
@RequestMapping("/contato")
@CrossOrigin("*")
public class MensagensController {
	@Autowired
	private MensagemRepository repository ;
	

	@GetMapping
	public ResponseEntity<List<Mensagens>> Getall(){
		return ResponseEntity.ok(repository.findAll());
	}
	
	@DeleteMapping("/{id}")
	public void Delete(@PathVariable long id) {
		repository.deleteById(id);
	}
	@PostMapping
	public ResponseEntity<Mensagens> Post(@RequestBody Mensagens mensagem){
		return ResponseEntity.ok(repository.save(mensagem));
	}
	@GetMapping("/{id}")
	public ResponseEntity<Mensagens> getById (@PathVariable Long id) {
		 Optional<Mensagens> mensagem = repository.findById(id);
		 if(mensagem.isPresent()) {
			 return ResponseEntity.ok(mensagem.get());
		 }
		 return ResponseEntity.notFound().build();
	}
}
