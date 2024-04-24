package org.example;

import org.example.enums.Deparment;

public class Doctor extends  Person{
    private Deparment deparment;

    private boolean onDuty;

    private int gradeLevel;

    public int getGradeLevel() {
        return gradeLevel;
    }

    public void setGradeLevel(int gradeLevel) {
        this.gradeLevel = gradeLevel;
    }

    public Deparment getDeparment() {
        return deparment;
    }

    public void setDeparment(Deparment deparment) {
        this.deparment = deparment;
    }

    public boolean getOnDuty() {
        return onDuty;
    }

    public void setOnDuty(boolean onDuty) {
        this.onDuty = onDuty;
    }

    @Override
    public String toString() {
        return "Doctor{" +
                "deparment=" + deparment +
                ", onDuty=" + onDuty +
                ", gradeLevel=" + gradeLevel +
                ",name= " +getName()+
                '}';
    }
}
