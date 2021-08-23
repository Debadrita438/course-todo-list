import { useState } from 'react';

import Button from '../../UI/button/button.component';

import styles from './course-goal-input.module.css';

const CourseGoalInput = ({ onAddGoals }) => {
    const [newGoal, setNewGoal] = useState('');
    const [isValid, setIsValid] = useState(true);

    const newGoalHandler = event => {
        if(event.target.value.trim().length) {
            setIsValid(true);
        }
        setNewGoal(event.target.value);
    }

    const formSubmitHandler = event => {
        event.preventDefault();
        if(newGoal.trim().length === 0) {
            setIsValid(false);
            return;
        }
        onAddGoals(newGoal);
        setNewGoal('');
    }

    return ( 
        <form action="" onSubmit={formSubmitHandler}>
                <div className={`${styles['form-control'] } ${ !isValid && styles.invalid}`}> 
                    <label>Course Goal</label>
                    <input
                        type="text" 
                        value={newGoal} 
                        onChange={newGoalHandler} 
                    />
                </div>
            <Button type='submit'>Add Course</Button>
        </form>
    );
}
 
export default CourseGoalInput;