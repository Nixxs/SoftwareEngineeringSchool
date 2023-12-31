CREATE TABLE IF NOT EXISTS USER (
  ID INT AUTO_INCREMENT PRIMARY KEY,
  First VARCHAR(255),
  Last VARCHAR(255),
  Email VARCHAR(255) UNIQUE,
  Password VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS POSTS (
  ID INT AUTO_INCREMENT PRIMARY KEY,
  Title VARCHAR(255),
  Description TEXT,
  User_ID INT,
  Date DATE,
  FOREIGN KEY (User_ID) REFERENCES USER(ID)
);

CREATE TABLE IF NOT EXISTS COMMENTS (
  ID INT AUTO_INCREMENT PRIMARY KEY,
  Content TEXT,
  Post_ID INT,
  User_ID INT,
  Date DATE,
  FOREIGN KEY (Post_ID) REFERENCES POSTS(ID),
  FOREIGN KEY (User_ID) REFERENCES USER(ID)
);

CREATE TABLE IF NOT EXISTS LIKES (
  ID INT AUTO_INCREMENT PRIMARY KEY,
  Post_ID INT,
  User_ID INT,
  FOREIGN KEY (Post_ID) REFERENCES POSTS(ID),
  FOREIGN KEY (User_ID) REFERENCES USER(ID)
);