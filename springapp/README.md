# **MyResume**

This application will display your resume in an HTML format from a series of hardcoded data which is stored in data.sql under the resources' folder. Then, you have to create a database myresumedb in your MySQL server and run it. You can successfully edit your personal details through the frontend itself and display it. 

You can set the spring.jpa.hibernate.ddl-auto in application.properties:
1. create-drop= By default it is this, since I am using a data.sql to populate the database at startup. It will automatically create the tables and insert the rows and also, drop all of them when the JVM stops.
2. update= We can set this option when we want to persist the data and modify an existing schema. If we want to use this, we have to comment out the contents of data.sql or remove the file, after running it for the first time, to prevent it from entering the rows with the same ID(Primary Key), which will generate an error everytime we run our application.

