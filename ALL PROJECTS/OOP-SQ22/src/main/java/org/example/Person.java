package org.example;

import org.example.enums.Gender;

public abstract class  Person {

    //SOLID PRINCIPLES DESIGN PATTERNS(Build, creation, operational, structural

    // SINGLE RESPONSIBILITY
    // OPEN-CLOSE PRINCIPLES
    // LISKOV PRINCIPLE
    // INTERFACE SEGREGATION
    // DEPENDENCY INVERSION

    private String name;
    private  int age;
    private String occupation;
    private Gender personGender;

    @Override
    public String toString() {
        return "Person{" +
                "name='" + name + '\'' +
                ", age=" + age +
                ", occupation='" + occupation + '\'' +
                ", personGender=" + personGender +
                '}';
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public Gender getPersonGender() {
        return personGender;
    }

    public void setPersonGender(Gender personGender) {
        this.personGender = personGender;
    }

    public String getOccupation() {
        return occupation;
    }

    public void setOccupation(String occupation) {
        this.occupation = occupation;
    }
}
