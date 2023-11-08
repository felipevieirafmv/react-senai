package com.felipe.java_api.exercicios;

import java.util.ArrayList;


public class Ex7 {
    public ArrayList<Funcionario> listaFuncionarios = new ArrayList<Funcionario>();
    public Funcionario[] arrayFuncionarios;
    
    public Ex7() { }

    public void exercicio7()
    {
        Funcionario func1 = new Funcionario("Tavares", "12345678901", 0);
        Funcionario func2 = new Funcionario("Felipe", "98765432109", 1);

        arrayFuncionarios[0] = func1;
        arrayFuncionarios[1] = func2;

        listaFuncionarios.add(func1);
        listaFuncionarios.add(func2);

        for(int i = 0; i < arrayFuncionarios.length; i++)
        {
            System.out.println(arrayFuncionarios[i].nome);
            System.out.println(arrayFuncionarios[i].cpf);
            System.out.println(arrayFuncionarios[i].edv);
        }

        for (Funcionario func : listaFuncionarios)
        {
            System.out.println(func.nome);
            System.out.println(func.cpf);
            System.out.println(func.edv);
        }
    }
}
