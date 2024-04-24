package org.example;

public class MaternityWard {

    private int noOfPatients;
    private int noOfMedicalPersonnel;
    private Doctor doctorInCharge;

    public MaternityWard(int noOfPatients, int noOfMedicalPersonnel, Doctor doctorInCharge) {
        this.noOfPatients = noOfPatients;
        this.noOfMedicalPersonnel = noOfMedicalPersonnel;
        this.doctorInCharge = doctorInCharge;
    }

    public MaternityWard() {
    }

    public int getNoOfPatients() {
        return noOfPatients;
    }

    public void setNoOfPatients(int noOfPatients) {
        this.noOfPatients = noOfPatients;
    }

    public int getNoOfMedicalPersonnel() {
        return noOfMedicalPersonnel;
    }

    public void setNoOfMedicalPersonnel(int noOfMedicalPersonnel) {
        this.noOfMedicalPersonnel = noOfMedicalPersonnel;
    }

    public Doctor getDoctorInCharge() {
        return doctorInCharge;
    }

    public void setDoctorInCharge(Doctor doctorInCharge) {
        this.doctorInCharge = doctorInCharge;
    }

    @Override
    public String toString() {
        return "MaternityWard{" +
                "noOfPatients=" + noOfPatients +
                ", noOfMedicalPersonnel=" + noOfMedicalPersonnel +
                ", doctorInCharge=" + doctorInCharge +
                '}';
    }
}
