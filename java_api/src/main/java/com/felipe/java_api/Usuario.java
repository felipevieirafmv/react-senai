package com.felipe.java_api;

import lombok.Getter;
import lombok.Setter;

public class Usuario extends Pessoa {
    @Getter @Setter public int cadastro;
    public Usuario(String nome, String cpf, int cadastro)
    {
        super(nome, cpf);
        this.cadastro = cadastro;
    }
}
