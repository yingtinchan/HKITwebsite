CREATE TABLE student (student_id VARCHAR(255),name VARCHAR(255),password VARCHAR(255),email VARCHAR(255),major_id VARCHAR(255),created_at TIMESTAMP,updated_at TIMESTAMP,token VARCHAR(1000),PRIMARY KEY (student_id));

CREATE TABLE teacher (teacher_id VARCHAR(255),name VARCHAR(255),password VARCHAR(255),email VARCHAR(255),created_at TIMESTAMP,updated_at TIMESTAMP,token VARCHAR(1000),PRIMARY KEY (teacher_id));

CREATE TABLE admin (admin_id VARCHAR(255),name VARCHAR(255),password VARCHAR(255),email VARCHAR(255),created_at TIMESTAMP,updated_at TIMESTAMP,token VARCHAR(1000),PRIMARY KEY (admin_id));