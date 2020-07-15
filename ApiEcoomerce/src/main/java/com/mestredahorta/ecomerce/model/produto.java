package com.mestredahorta.ecomerce.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import com.sun.istack.NotNull;

@Entity 
@Table(name="tb_produtos")
public class produto {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	//@Column(name = "nm_produto", nullable = false, length = 80)
	@NotNull
	@Size(min=5, max=80)
	private String nome;
	
	//@Column(name = "nm_categoria", nullable = false, length = 30)
	//@NotNull
	//@Size(min=5, max=30)
	private String categoria;
	
	//@Column(name = "foto", nullable = false)
	@NotNull
	private String foto;
	
	//@Column(name = "nm_descricao", nullable = false, length = 255)
	@NotNull
	@Size(min=5, max=255)
	private String descricao;
	
	//@Column(name = "preco", nullable = false)
	@NotNull
	private float preco;
	
	//@Column(name = "qtdEstoque", nullable = false)
	@NotNull
	private int qtdEstoque;

	

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCategoria() {
		return categoria;
	}

	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}

	public String getFoto() {
		return foto;
	}

	public void setFoto(String foto) {
		this.foto = foto;
	}
	
	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public float getPreco() {
		return preco;
	}

	public void setPreco(float preco) {
		this.preco = preco;
	}

	public int getQtdEstoque() {
		return qtdEstoque;
	}

	public void setQtdEstoque(int qtdEstoque) {
		this.qtdEstoque = qtdEstoque;
	}
	
}

