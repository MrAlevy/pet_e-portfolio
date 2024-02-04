# Assessment on SQL

```sql

mysql;
USE COMPANY1;


/*
1. List all Employees whose salary is between 1,000 AND 2,000. Show the Employee Name, Department and Salary
*/
SELECT ENAME, DEPTNO, SAL FROM EMP
WHERE SAL BETWEEN 1000 AND 2000;


/* Multiple conditions could also be used;
however, the current approach is more concise and clear. */


/*
2. Count the number of people in department 30 who receive a salary and the number of people who receive a commission
*/
SELECT
count(CASE WHEN SAL > 0 THEN 1 END) sal_count,
count(CASE WHEN COMM > 0 THEN 1 END) comm_count
FROM EMP
WHERE DEPTNO = 30;


/* Conditional count function is used to get values within a single selection. */


/*
3. Find the name and salary of employees in Dallas
*/
SELECT ENAME, SAL FROM EMP
JOIN DEPT USING (DEPTNO)
WHERE LOC = 'DALLAS';


/* Inner join is used. */


/*
4. List all departments that do not have any employees
*/
WITH deps_in_use AS (SELECT DISTINCT DEPTNO FROM EMP)


SELECT DEPTNO FROM DEPT
EXCEPT
SELECT DEPTNO FROM deps_in_use;


/* The most effective and concise approach wit CTE without using joins. */


/*
5. List the department number and average salary of each department
*/
SELECT DEPTNO, COALESCE(ROUND(AVG(SAL), 1), 0) avg_sal FROM DEPT
LEFT JOIN EMP USING (DEPTNO)
GROUP BY DEPTNO;


/* Left join is used to get even the empty departments;
coalesce is used to show nullish values within the common format. */
```
