package org.example;
// Address class representing the other end of the association
class Address {
    private String city;
    private String street;

    public Address(String city, String street) {
        this.city = city;
        this.street = street;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }
}

// Student class representing one end of the association
class Student {
    private String name;
    private Address address;

    public Student(String name, Address address) {
        this.name = name;
        this.address = address;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }
}

// Usage
public class Main {
    public static void main(String[] args) {
        Address address = new Address("New York", "123 Main St");
        Student student = new Student("John", address);

        // Accessing student's details
        System.out.println("Student Name: " + student.getName());
        System.out.println("Student Address: " + student.getAddress().getStreet() + ", " + student.getAddress().getCity());
    }
}

