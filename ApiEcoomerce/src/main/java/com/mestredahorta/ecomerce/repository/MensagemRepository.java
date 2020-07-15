package com.mestredahorta.ecomerce.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mestredahorta.ecomerce.model.Mensagens;

@Repository
public interface MensagemRepository extends JpaRepository<Mensagens, Long> {
	 public List<Mensagens> findAllByNomeContainingIgnoreCase (String nome);
}
