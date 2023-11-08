package com.felipe.java_api.exercicios;

public class Ex2 {
    public Ex2() { }
    public void exercicio2()
    {
        int[] array = {1, 2, 3, 4};
		int soma = 0;

		for(int i=0; i < array.length; i++)
		{
			soma += array[i];
		}
		System.out.println(soma);
    }
}
