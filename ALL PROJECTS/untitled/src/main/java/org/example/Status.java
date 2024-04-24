package org.example;

abstract class Internship
{
    abstract void success();
}
public class Status extends Internship{
    public void success(){
        System.out.println("You Have Successfully Applied for the Internship!");
    }
    public static void main(String[] args){
        Internship obj = new Status();
        obj.success();
    }
}