package com.felipe.java_api;

import lombok.Getter;
import lombok.Setter;

public class Pessoa {
    @Getter @Setter public String nome;
    @Getter @Setter public String cpf;

    public Pessoa(String nome, String cpf)
    {
        this.nome = nome;
        this.cpf = cpf;
    }
}
