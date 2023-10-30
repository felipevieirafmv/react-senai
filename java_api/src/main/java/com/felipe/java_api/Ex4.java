package com.felipe.java_api;

import java.util.ArrayList;

public class Ex4 {
    public ArrayList<Integer> listaEx4 = new ArrayList<Integer>();
    public Ex4() { }
    public void exercicio4()
    {
        for (int i = 1000; i < 2000; i++){
            if(i % 11 == 5)
                listaEx4.add(i);
        }
       
        for (int i : listaEx4){
            System.out.println(i);
        }
    }
}
