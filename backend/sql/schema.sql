CREATE DATABASE IF NOT EXISTS complaint_db;
USE complaint_db;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role ENUM('USER','AGENT','ADMIN') DEFAULT 'USER',
  department VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  department VARCHAR(50) NOT NULL
);

INSERT INTO categories (name, department) VALUES
('IT', 'IT'),
('Sanitation', 'SANITATION'),
('HR', 'HR');

CREATE TABLE complaints (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  category_id INT NOT NULL,
  title VARCHAR(200) NOT NULL,
  description TEXT NOT NULL,
  priority ENUM('LOW','MEDIUM','HIGH') DEFAULT 'LOW',
  status ENUM('NEW','ASSIGNED','IN_PROGRESS','RESOLVED','CLOSED') DEFAULT 'NEW',
  attachment_path VARCHAR(255),
  assigned_to INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (category_id) REFERENCES categories(id),
  FOREIGN KEY (assigned_to) REFERENCES users(id)
);

CREATE TABLE comments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  complaint_id INT NOT NULL,
  user_id INT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (complaint_id) REFERENCES complaints(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);
