package com.mestredahorta.ecomerce.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity 
@Table(name="tb_tipo_usuario")
public class TipoUsuario {
	
	@Column(name = "cd_tipo")
	@Id
	private long tipo;
	

	// Getters and Setters
	public long getTipo() {
		return tipo;
	}

	public void setTipo(long tipo) {
		this.tipo = tipo;
	}
	
	
}
