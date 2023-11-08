package com.felipe.java_api.exercicios;

import lombok.Getter;
import lombok.Setter;

public class Funcionario extends Pessoa {
    @Getter @Setter public int edv;
    public Funcionario(String nome, String cpf, int edv)
    {
        super(nome, cpf);
        this.edv = edv;
    }
}

