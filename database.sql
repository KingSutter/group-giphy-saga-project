-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('funny'), ('vega'), ('cartoon'), ('nsfw'), ('meme');

-- Favorites table
CREATE TABLE "favorites" (
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR (280) NOT NULL,
    "url" VARCHAR (2083) NOT NULL,
    "category_id" INT REFERENCES "category"
);

-- Default favorites. You may change them :)
INSERT INTO "favorites" ("title","url","category_id")
VALUES ('mr. meseeks','https://media.giphy.com/media/lpxqmxzQHL7hUejepu/giphy.gif','3'), ('nyan cat','http://giphygifs.s3.amazonaws.com/media/sIIhZliB2McAo/giphy.gif','5'), ('mac ISAIP','https://media.giphy.com/media/MEpGhvzZjtaVf1V0v8/giphy.gif','1');