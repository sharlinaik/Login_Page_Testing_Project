# Login Test Cases

| **Test Case ID** | **Description**                               | **Steps**                                                                                   | **Expected Result**                  |
|------------------|-----------------------------------------------|---------------------------------------------------------------------------------------------|--------------------------------------|
| TC01             | Successful login with valid credentials       | Enter "testuser" as username, "password123" as password, click "Login".                    | Displays "Login successful!"         |
| TC02             | Invalid login with incorrect username         | Enter "wronguser" as username, "password123" as password, click "Login".                    | Displays "Invalid credentials"       |
| TC03             | Invalid login with incorrect password         | Enter "testuser" as username, "wrongpass" as password, click "Login".                       | Displays "Invalid credentials"       |
