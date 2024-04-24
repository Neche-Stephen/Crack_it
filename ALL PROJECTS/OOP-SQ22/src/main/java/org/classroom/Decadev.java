package org.classroom;

import org.classroom.enums.Deparment;

public class Decadev extends Person{
    private Deparment deparment;
    private boolean  inClass;
    private boolean  hasCompletedAssessment;

    // Constructor
    public Decadev(boolean inClass, Deparment deparment, boolean hasCompletedAssessment ) {
        this.inClass = inClass;
        this.deparment = deparment;
        this.hasCompletedAssessment = hasCompletedAssessment;

    }
    // Constructor
    public Decadev() {
    }


    public Deparment getDeparment() {
        return deparment;
    }

    public void setDeparment(Deparment deparment) {
        this.deparment = deparment;
    }

    public boolean getInClass() {
        return inClass;
    }

    public void setInClass(boolean inClass) {
        this.inClass = inClass;
    }

    public boolean getHasCompletedAssessment() {
        return hasCompletedAssessment;
    }

    public void setHasCompletedAssessment(boolean hasCompletedAssessment) {
        this.hasCompletedAssessment = hasCompletedAssessment;
    }
}
