package com.felipe.java_api;

import java.util.Scanner;

public class Ex9 {
    public Ex9() { }

    public void exercicio9()
    {
        Scanner scan = new Scanner (System.in);
        String linha = scan.nextLine();
        
        String[] lista = linha.split(" ");

        if(lista.length % 2 == 0)
        {
            System.out.println(lista[(lista.length / 2) - 1]);
            System.out.println(lista[lista.length / 2]);
        }
        else
        {
            System.out.println(lista[lista.length / 2]);
        }

        scan.close();
    }
}
