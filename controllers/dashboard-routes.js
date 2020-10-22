const router = require('express').Router();
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');
const { Post, User, Comment } = require('../models');


router.get('/', withAuth, (req, res) => {
    Post.findAll({
      where: {
        // use the ID from the session
        user_id: req.session.user_id
      },
      attributes: [
        'id',
        'text',
        'title',
        'created_at'
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbPostData => {
        // serialize data before passing to template
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('dashboard', { posts, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.get('/new-post',withAuth,(req,res) => {



    res.render('new-post', {
     loggedIn: true
    });


})


// In dashboard-routes.js, add a new GET route for /edit/:id that uses the withAuth() middleware. 
// This route should render the edit-post.handlebars template, passing in data from the same Post.findOne() 
// query that you used in the /post/:id home route. Remember to serialize the data first!

router.get('/edit/:id',withAuth,(req,res) => {

    Post.findOne({
        where: {
          id: req.params.id
        },
        attributes: ['id', 'text', 'title', 'created_at'],
        include: [
          {
            model: User,
            attributes: ['username']
          }
        ]
      })
    .then(dbPostData => {
    const post = dbPostData.get({ plain: true });

    res.render('edit-post', {
     post,
     loggedIn: true
    });
})

})

module.exports = router;