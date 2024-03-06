const Stripe = require('stripe');

exports.Song = {
  id: '',
  user_id: '',
  author: '',
  title: '',
  song_path: '',
  image_path: '',
};

exports.Product = {
  id: '',
  active: false,
  name: '',
  description: '',
  image: '',
  metadata: {},
};

exports.Price = {
  id: '',
  product_id: '',
  active: false,
  description: '',
  unit_amount: 0,
  currency: '',
  type: '',
  interval: '',
  interval_count: 0,
  trial_period_days: null,
  metadata: {},
  products: {},
};

exports.Customer = {
  id: '',
  stripe_customer_id: '',
};

exports.UserDetails = {
  id: '',
  first_name: '',
  last_name: '',
  full_name: '',
  avatar_url: '',
  billing_address: {},
  payment_method: {},
};

exports.ProductWithPrice = {
  id: '',
  active: false,
  name: '',
  description: '',
  image: '',
  metadata: {},
  prices: [],
};

exports.Subscription = {
  id: '',
  user_id: '',
  status: '',
  metadata: {},
  price_id: '',
  quantity: 0,
  cancel_at_period_end: false,
  created: '',
  current_period_start: '',
  current_period_end: '',
  ended_at: '',
  cancel_at: '',
  canceled_at: '',
  trial_start: '',
  trial_end: '',
  prices: {},
};
