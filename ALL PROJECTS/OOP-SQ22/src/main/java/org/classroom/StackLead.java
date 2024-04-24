package org.classroom;

import org.classroom.enums.Deparment;

public class StackLead extends Person{
    private Deparment deparment;
    private boolean  inClass;


    public StackLead(boolean inClass, Deparment deparment) {
        this.inClass = inClass;
        this.deparment = deparment;
    }

    public StackLead() {
    }


    public Deparment getDeparment() {
        return deparment;
    }

    public void setDeparment(Deparment deparment) {
        this.deparment = deparment;
    }

    public boolean isInClass() {
        return inClass;
    }

    public void setInClass(boolean inClass) {
        this.inClass = inClass;
    }




}
