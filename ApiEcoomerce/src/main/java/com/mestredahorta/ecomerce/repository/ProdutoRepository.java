package com.mestredahorta.ecomerce.repository;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mestredahorta.ecomerce.model.produto;





@Repository
public interface ProdutoRepository  extends JpaRepository<produto, Long> {
	
	 public Page<produto> findAllByNomeContainingIgnoreCase (String nome, Pageable pageable);
	
	//public Page<produto> findBynomeContainingIgnoreCase(String nome, Pageable paginacao);
}
