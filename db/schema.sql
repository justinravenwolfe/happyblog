-- Start with a fresh database every time <- delete the old one
DROP happy_data;
-- Check that it was deleted property if so, create a new one
CREATE DATABASE IF NOT EXISTS Happy_data;
-- Switch to this database and use it for all operations
USE Happy_data; 
 