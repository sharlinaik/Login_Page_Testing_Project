# Field Validation Test Cases

| **Test Case ID** | **Description**                           | **Steps**                                               | **Expected Result**                |
|------------------|-------------------------------------------|---------------------------------------------------------|------------------------------------|
| TC04             | Empty username and password               | Leave both fields empty, click "Login".                  | Displays "Invalid credentials"     |
| TC05             | Valid username, empty password            | Enter "testuser", leave password empty, click "Login".   | Displays "Invalid credentials"     |
| TC06             | Empty username, valid password            | Leave username empty, enter "password123", click "Login".| Displays "Invalid credentials"     |
