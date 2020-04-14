require("../config/db");
const faker = require("faker");
const Author = require("../models/author");

const seedPost = () => {
  const blogData = [
    {
      author: "Jason",
      posts: [
        {
          title: faker.lorem.word(),
          content: faker.lorem.paragraphs()
        },
        {
          title: faker.lorem.word(),
          content: faker.lorem.paragraphs()
        },
        {
          title: faker.lorem.word(),
          content: faker.lorem.paragraphs()
        }
      ]
    },
    {
      author: "Imran",
      posts: [
        {
          title: faker.lorem.word(),
          content: faker.lorem.paragraphs()
        },
        {
          title: faker.lorem.word(),
          content: faker.lorem.paragraphs()
        },
        {
          title: faker.lorem.word(),
          content: faker.lorem.paragraphs()
        }
      ]
    },
    {
      author: "Mike",
      posts: [
        {
          title: faker.lorem.word(),
          content: faker.lorem.paragraphs()
        },
        {
          title: faker.lorem.word(),
          content: faker.lorem.paragraphs()
        },
        {
          title: faker.lorem.word(),
          content: faker.lorem.paragraphs()
        }
      ]
    }
  ];
  console.log(blogData);
};

// seedPost();
