-- Description: Write a SQL query to get the second highest salary from the Employee table.
-- Author: Chris Cobos
-- Obtiene primero el salario maximo después busca un salario menos al maximo, si este es menor al maximo entonces obtiene segundo salario maximo

select max(salary) as SecondHighestSalary 
      from  Employee 
      where salary < (SELECT MAX(salary) FROM Employee);
