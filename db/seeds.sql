INSERT INTO department (name)
VALUES 
('Finance'),
('Legal'),
('Engineering'),
('Sales');

INSERT INTO roles (title, salary, department_id)
VALUES
('Sales Lead', '50000', 1),
('Salesperson', '45000', 2),
('Lawyer', '80000', 3),
('Legal Aide', '40000', 4),
('Lead Engineer', '75000', 1),
('Software Engineer', '60000', 2),
('Accountant', '50000', 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Ryan', 'Tannehill', 1, NULL),
('Derrick', 'Henry', 5, 1),
('AJ', 'Brown', 2, 1),
('Taylor', 'Lewan', 4, 2),
('Kevin', 'Byard', 3, 1);
