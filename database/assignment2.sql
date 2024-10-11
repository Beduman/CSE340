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

--gm hummer change
UPDATE "inventory"
SET inv_description = REPLACE(inv_description, 'the small interiors', 'a huge interior')
WHERE inv_model = 'Hummer';

--inner join
SELECT
inv_make,
inv_model,
classification_name
FROM
inventory as inv
INNER JOIN	
classification
ON
inv.classification_id = classification.classification_id
WHERE
inv.classification_id = 2;;

-- add vehicle file path
update inventory
update 
set inv_image =
REPLACE(inv_image, '/images', '/images/vehicles'), 
inv_thumbnail =
REPLACE(inv_thumbnail, '/images', '/images/vehicles');