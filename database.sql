-- Create the database
CREATE DATABASE police_management_system;

-- Use the database
USE police_management_system;

-- Create the Users table
CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    user_type ENUM('police_officer', 'dci_agent', 'civilian') NOT NULL
);

-- Create the Cases table
CREATE TABLE Cases (
    case_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    date_reported DATE NOT NULL,
    status ENUM('active', 'closed') NOT NULL,
    officer_id INT,
    FOREIGN KEY (officer_id) REFERENCES Users(user_id)
);

-- Create the Reports table
CREATE TABLE Reports (
    report_id INT AUTO_INCREMENT PRIMARY KEY,
    case_id INT,
    description TEXT,
    date_created DATE NOT NULL,
    author_id INT,
    FOREIGN KEY (case_id) REFERENCES Cases(case_id),
    FOREIGN KEY (author_id) REFERENCES Users(user_id)
);

-- Create the Officers table
CREATE TABLE Officers (
    officer_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    duty_status ENUM('on_duty', 'off_duty') NOT NULL
);
