const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');

// User Model
const User = require('../../models/User');

/**
 * @api {post} /auth Authenticate user
 * @apiName auth
 * @apiGroup Auth
 *
 * @apiVersion 1.0.0
 *
 * @apiParam {String} Email A valid email address
 * @apiParam {String} Password A password
 *
 * @apiParamExample Example Body
 *
 * {
 *
 * }
 *
 * @apiSuccess {String} Token A JWT token
 *
 * @apiSuccessExample Successful Response
 *
 * HTTP/1.1 200 OK
 *
 * {
 *
 * }
 */
// @route   POST api/auth
// @desc    Authenticate user
// @access  Public
router.post('/', (req, res) => {
  const { email, password } = req.body;

  // Basic Validation
  if (!email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  // Check for existing user
  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(400).json({ msg: 'User does not exists' });
    }

    // Validate password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid credentials' });
      }

      jwt.sign(
        { id: user.id },
        config.get('jwtSecret'),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) {
            throw err;
          }
          res.json({
            token,
            user: {
              id: user.id,
              name: user.name,
              email: user.email
            }
          });
        }
      );
    });
  });
});

/**
 * @api {get} /auth/user Get user data
 * @apiName getUserData
 * @apiGroup Auth
 *
 * @apiVersion 1.0.0
 *
 * @apiParam {String} Token A JWT token
 *
 * @apiParamExample Example Body
 *
 * {
 *
 * }
 *
 * @apiSuccess {Object} User A User Object
 *
 * @apiSuccessExample Successful Response
 *
 * HTTP/1.1 200 OK
 *
 * {
 *
 * }
 */
// @route   GET api/auth/user
// @desc    Get user data
// @access  Private
router.get('/user', auth, (req, res) => {
  User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user));
});

/**
 * @api {post} /auth/add-shopping-list Add to shopping list
 * @apiName updateShoppingList
 * @apiGroup Auth
 *
 * @apiVersion 1.0.0
 *
 * @apiParam {String} Token A JWT token
 *
 * @apiParamExample Example Body
 *
 * {
 *
 * }
 *
 * @apiSuccess {N/A} N/A N/A
 *
 * @apiSuccessExample Successful Response
 *
 * HTTP/1.1 200 OK
 *
 * {
 *
 * }
 */
// @route   POST api/auth/add-shopping-list
// @desc    Add to shopping list
// @access  Private
router.post('/add-shopping-list', auth, (req, res) => {
  const { shopping_list } = req.body;

  User.findById(req.user.id)
    .select('shopping_list')
    .then(user => {
      items = shopping_list.filter(
        l_item => !user.shopping_list.find(m_item => l_item === m_item)
      );
      user.shopping_list.push(...items);
      user.save();
      res.json(user.shopping_list);
    });
});

/**
 * @api {post} /auth/remove-shopping-list Remove from shopping list
 * @apiName removeShoppingList
 * @apiGroup Auth
 *
 * @apiVersion 1.0.0
 *
 * @apiParam {String} Token A JWT token
 *
 * @apiParamExample Example Body
 *
 * {
 *
 * }
 *
 * @apiSuccess {N/A} N/A N/A
 *
 * @apiSuccessExample Successful Response
 *
 * HTTP/1.1 200 OK
 *
 * {
 *
 * }
 */
// @route   POST api/auth/remove-shopping-list
// @desc    Remove from shopping list
// @access  Private
router.post('/remove-shopping-list', auth, (req, res) => {
  const { shopping_list } = req.body;

  User.findById(req.user.id)
    .select('shopping_list')
    .then(user => {
      user.shopping_list.pull(...shopping_list);
      user.save();
      res.json(user.shopping_list);
    });
});

module.exports = router;
