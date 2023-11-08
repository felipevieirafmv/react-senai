package com.felipe.java_api.exercicios;

public class Ex5 {
    public int quantImpar = 0;
    public Ex5() { }
    public void exercicio5()
    {
        for (int i = 0; i < 1001; i++){
            if (i % 2 == 0)
                System.out.println(i);
            else
                quantImpar++;
        }
    }
}
