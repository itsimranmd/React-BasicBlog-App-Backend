require("../config/db");
const faker = require("faker");
const Author = require("../models/author");
const Post = require("../models/post");

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

  blogData.forEach(item => {
    const author = new Author({
      name: item.author
    });

    author
      .save()
      .then(response => {
        const authorID = response._id;
        if (authorID) {
          item.posts.forEach(post => {
            const newPost = new Post({
              title: post.title,
              content: post.content,
              author: authorID
            });
            newPost
              .save()
              .then(console.log)
              .catch(console.error);
          });
        }
      })
      .catch(console.lg);
  });
};

const clearDB = () => {
  Author.remove({})
    .then(console.log)
    .catch(console.error);

  Post.remove({})
    .then(console.log)
    .catch(console.error);
};

// clearDB();
seedPost();

module.exports = seedPost;
