package com.felipe.java_api.exercicios;

import lombok.Getter;
import lombok.Setter;

public class ex1{
    public float n1;
    @Getter @Setter public float n2;
    @Getter @Setter public float n3;
    @Getter @Setter public float n4;

    public ex1(float n1, float n2, float n3, float n4)
    {
        this.n1 = n1;
        this.n2 = n2;
        this.n3 = n3;
        this.n4 = n4;
    }

    public float getN1()
    {
        return this.n1;
    }
    public void setN1(float n1)
    {
        this.n1 = n1;
    }

    public float media()
    {
        return (this.n1 + this.n2 + this.n3 + this.n4) / 4;
    }
}
