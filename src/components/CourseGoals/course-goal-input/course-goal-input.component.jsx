import { useState } from 'react';

import Button from '../../UI/button/button.styles';

import { FormControl } from './course-goal-input.styles';

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
                <FormControl invalid={isValid}> 
                    <label>Course Goal</label>
                    <input
                        type="text" 
                        value={newGoal} 
                        onChange={newGoalHandler} 
                    />
                </FormControl>
            <Button type='submit'>Add Course</Button>
        </form>
    );
}
 
export default CourseGoalInput;