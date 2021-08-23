import CourseGoalItem from '../course-goal-item/course-goal-item.component';
import { GoalList } from './course-goal-list.styles';

const CourseGoalList = ({ courseGoals, onDeleteGoal }) => {
    return ( 
        <GoalList>
            {
                courseGoals.map(goal => 
                    <CourseGoalItem
                        key={goal.id}
                        text={goal.text}
                        id={goal.id}
                        onDelete={onDeleteGoal}
                    />
                )
            }
        </GoalList>
    );
}
 
export default CourseGoalList;