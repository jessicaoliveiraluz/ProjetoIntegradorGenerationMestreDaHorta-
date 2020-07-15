package com.mestredahorta.ecomerce.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.Size;

import com.sun.istack.NotNull;

@Entity
@Table(name="tb_usuario")
public class Usuario {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "nm_nome", nullable = false, length = 80)
	@NotNull
	@Size(min=5, max=80)
	private String nome;
	
	@Column(name = "nm_usuario", length = 40)
//	@NotNull
	@Size(min=3, max=40)
	private String usuario;
	
	@Column(name = "nm_email", nullable = false, length = 120)
	@NotNull
	@Email
	private String email;
	
	@Column(name = "nm_senha", nullable = false)
	@NotNull
	private String senha;
	
	private String perfil = "user";
	
//	@ManyToOne
//	@JoinColumn(name = "cd_tipo")
//	private long tipo;
	
	

	// Getters and Setters
	
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
	public String getUsuario() {
		return usuario;
	}
	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getSenha() {
		return senha;
	}
	public void setSenha(String senha) {
		this.senha = senha;
	}
	
	public String getPerfil() {
		return perfil;
	}
	public void setPerfil(String perfil) {
		this.perfil = perfil;
	}
	
}
