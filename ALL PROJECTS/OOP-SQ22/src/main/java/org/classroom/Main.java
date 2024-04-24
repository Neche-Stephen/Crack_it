package org.classroom;

import org.classroom.enums.Deparment;
import org.example.enums.Gender;

public class Main {
    public static void main(String[] args) {

        Decadev decadev1 = new Decadev();
        decadev1.setAge(29);
        decadev1.setName("Marvin");
        decadev1.setOccupation("Student");
        decadev1.setPersonGender(Gender.MALE);
        decadev1.setHasCompletedAssessment(true);
        decadev1.setDeparment(Deparment.JAVA);
        decadev1.setInClass(true);


        StackAssociate stackAssociate = new StackAssociate();
        stackAssociate.setAge(39);
        stackAssociate.setName("Uzo");
        stackAssociate.setOccupation("Tutor");
        stackAssociate.setPersonGender(Gender.MALE);
        stackAssociate.setDeparment(Deparment.JAVA);
        stackAssociate.setInClass(true);

        StackLead stackLead = new StackLead();
        stackLead.setAge(49);
        stackLead.setName("Daro");
        stackLead.setOccupation("Tutor");
        stackLead.setPersonGender(Gender.MALE);
        stackLead.setDeparment(Deparment.JAVA);
        stackLead.setInClass(true);

        Classroom javaClassroom = new Classroom(4, 5, decadev1, stackLead, stackAssociate);
        System.out.println(javaClassroom);

    }
}
