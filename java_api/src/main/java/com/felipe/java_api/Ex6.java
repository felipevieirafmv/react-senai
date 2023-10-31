package com.felipe.java_api;

public class Ex6 {
    public Ex6() { }

    public void exercicio6()
    {
        Funcionario func1 = new Funcionario("Tavares", "12345678901", 0);
        Funcionario func2 = new Funcionario("Felipe", "98765432109", 1);

        Usuario user1 = new Usuario("Vinicius", "11111111111", 0);
        Usuario user2 = new Usuario("Lander", "22222222222", 1);

        System.out.println(func1.nome + ", " + func1.cpf + ", " + func1.edv);
        System.out.println(func2.nome + ", " + func2.cpf + ", " + func2.edv);
        System.out.println(user1.nome + ", " + user1.cpf + ", " + user1.cadastro);
        System.out.println(user2.nome + ", " + user2.cpf + ", " + user2.cadastro);
    }

    public void exercicio7()
    {
        
    }
}
