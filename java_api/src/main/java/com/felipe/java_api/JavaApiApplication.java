package com.felipe.java_api;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class JavaApiApplication {

	public static void main(String[] args) {
		ex1 aluno = new ex1((float) 10.0, (float) 7.5, (float) 4.0, (float) 2.0);
		float media = aluno.media();

		if(media > 7 && media < 9)
			System.out.println("Aprovado");
		else if(media >=9)
			System.out.println("Parabens");
		else if(media < 3)
			System.out.println("Reprovado");
		else
			System.out.println("Recuperacao");
		
		int[] array = {1, 2, 3, 4};
		int soma = 0;

		for(int i=0; i < array.length; i++)
		{
			soma += array[i];
		}
		System.out.println(soma);

		ArrayList lista = new ArrayList();
	}

}
