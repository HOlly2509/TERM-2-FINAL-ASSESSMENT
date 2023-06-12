// Bread options
const breadOptions = ['White Bread', 'Brown Bread', 'Gluten-free Bread'];

// Topping options
const toppingOptions = [
  'Lettuce', 'Tomato', 'Onion', 'Pickles', 'Cheese', 'Bacon', 'Ham',
  'Salami', 'Pepperoni', 'Cucumber', 'Olives', 'Jalapenos', 'Mushrooms',
  'Spinach', 'Avocado', 'Egg', 'Mayonnaise'
];

// Sauce options
const sauceOptions = ['Mustard', 'Ketchup', 'Mayonnaise', 'Barbecue Sauce', 'Ranch Dressing'];

// Array to store the user's subs
const subs = [];

// Function to create a sub
function createSub() {
  const sub = {
    name: prompt('Enter the name of your sub:'),
    bread: selectOption('Select the bread:', breadOptions),
    toppings: selectMultipleOptions('Select at least 3 toppings:', toppingOptions, 3),
    sauce: selectOption('Select the sauce:', sauceOptions),
    cost: 0
  };

  sub.cost += calculateOptionsCost(sub.bread);
  sub.cost += calculateOptionsCost(sub.toppings);
  sub.cost += calculateOptionsCost(sub.sauce);

  subs.push(sub);
}

// Function to select a single option from a list
function selectOption(message, options) {
  let selectedOption;
  do {
    selectedOption = prompt(`${message}\nOptions: ${options.join(', ')}`);
  } while (!options.includes(selectedOption));
  return selectedOption;
}

// Function to select multiple options from a list
function selectMultipleOptions(message, options, minSelections) {
  const selectedOptions = [];
  let remainingSelections = minSelections;

  do {
    const selectedOption = selectOption(`${message} (${remainingSelections} remaining)`, options);
    selectedOptions.push(selectedOption);
    remainingSelections--;
  } while (remainingSelections > 0);

  return selectedOptions;
}

// Function to calculate the cost of selected options
function calculateOptionsCost(selectedOptions) {
  const optionCosts = {
    'White Bread': 2.50,
    'Wheat Bread': 2.50,
    'Italian Bread': 3.00,
    'Lettuce': 0.50,
    'Tomato': 0.50,
    'Onion': 0.50,
    'Pickles': 0.50,
    'Cheese': 1.00,
    'Bacon': 1.50,
    'Ham': 1.50,
    'Turkey': 1.50,
    'Salami': 1.50,
    'Pepperoni': 1.50,
    'Cucumber': 0.50,
    'Bell Pepper': 0.50,
    'Olives': 0.50,
    'Jalapenos': 0.50,
    'Mushrooms': 0.50,
    'Spinach': 0.50,
    'Avocado': 1.00,
    'Sprouts': 0.50,
    'Egg': 1
  }}