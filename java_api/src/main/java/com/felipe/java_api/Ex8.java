package com.felipe.java_api;

import java.util.Arrays;
import java.util.Scanner;

public class Ex8 {
    public Ex8() { }

    public void exercicio8()
    {
        Scanner scan = new Scanner (System.in);
        int inputUser = scan.nextInt();
        int[] vetor = new int[inputUser];

        for(int i = 0; i < inputUser; i++)
        {
            vetor[i] = scan.nextInt();
        }

        Arrays.sort(vetor);
        System.out.println(inputUser);
        System.out.println(vetor[inputUser - 1]);

        scan.close();
    }
}
