INSERT INTO account (account_firstname,account_lastname,account_email,account_password)
values ('Tony','Stark','tony@starkent.com','Iam1ronM@n')

--to view the user id--
SELECT * FROM account;

UPDATE "account"
SET account_type = 'Admin'
WHERE account_id = 1;

DELETE FROM "account"
WHERE account_firstname = 'Tony'

--to see if it was deleted
SELECT * FROM account;

--gm hummer change--
UPDATE "inventory"
SET inv_description = REPLACE(inv_description, 'the small interiors', 'a huge interior')
WHERE inv_id = 70;