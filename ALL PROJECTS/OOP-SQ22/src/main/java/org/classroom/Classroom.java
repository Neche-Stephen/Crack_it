package org.classroom;

public class Classroom {

    private int noOfTables;
    private int noOfChairs;
    private Decadev decadev;
    private StackAssociate stackAssociate;
    private StackLead stackLead;

    public Classroom(int noOfTables, int noOfChairs, Decadev decadev, StackLead stackLead, StackAssociate stackAssociate) {
        this.noOfTables = noOfTables;
        this.noOfChairs = noOfChairs;
        this.decadev = decadev;
        this.stackLead = stackLead;
        this.stackAssociate = stackAssociate;
    }

    @Override
    public String toString() {
        return "Classroom{" +
                "noOfTables=" + noOfTables +
                ", noOfChairs=" + noOfChairs +
                ", decadev=" + decadev +
                ", stackAssociate=" + stackAssociate +
                ", stackLead=" + stackLead +
                '}';
    }

    public Classroom() {
    }




}
