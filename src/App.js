import { useState } from 'react';

import CourseGoalInput from './components/CourseGoals/course-goal-input/course-goal-input.component';
import CourseGoalList from './components/CourseGoals/course-goal-list/course-goal-list.component';

import './App.css';

const COURSE_GOALS = [
  { id: 2, text: 'Finish Course' },
  { id: 1, text: 'Do All Assignments' }
];

const App = () => {
  const [courseGoals, setCourseGoals] = useState(COURSE_GOALS);

  const addGoalHandler = newGoal => {
    setCourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ id: updatedGoals.length+1, text: newGoal });
      return updatedGoals;
    });
  }

  const deleteGoalHandler = goalId => {
    setCourseGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  }

  return ( 
    <div>
      <div id='goal-form'>
        <CourseGoalInput onAddGoals={addGoalHandler} />
      </div>
      <div id='goals'>
        {
          courseGoals.length ? <CourseGoalList courseGoals={courseGoals} onDeleteGoal={deleteGoalHandler} />
          : <p style={{textAlign: 'center'}}>No Course Goals yet. Maybe Add a New One?</p>
        }
      </div>
    </div>
  );
}
 
export default App;