import { v4 as uuidv4 } from 'uuid';

export const data = [
  {
    id: uuidv4(),
    title: "Default Card",
    taskItems: [{id: uuidv4(), text: "Land this job!"}, {id: uuidv4(), text: "eat sushi"}]
  },
  {
    id: uuidv4(),
    title: "Today's Workout",
    taskItems: [{id: uuidv4(), text: "Bench Press 3x5"}, {id: uuidv4(), text: "Overhead Lift 5x5"}, {id: uuidv4(), text: "Squats 5x10"}]
  },
  {
    id: uuidv4(),
    title: "Grocery List",
    taskItems: [{id: uuidv4(), text: "Bananas"}, {id: uuidv4(), text: "Broccoli"}, {id: uuidv4(), text: "Chicken"}, {id: uuidv4(), text: "Bread"}, {id: uuidv4(), text: "Milk"}]
  },
  {
    id: uuidv4(),
    title: "Weekend to-dos",
    taskItems: [{id: uuidv4(), text: "Mow Lawn"}, {id: uuidv4(), text: "Fix Sink"}]
  },
  {
    id: uuidv4(),
    title: "Next Week",
    taskItems: [{id: uuidv4(), text: "Apply to Broadnet"}]
  },
  {
    id: uuidv4(),
    title: "Dev Tasks",
    taskItems: [{id: uuidv4(), text: "Bug fixes"}, {id: uuidv4(), text: "New features"}]
  },
]
