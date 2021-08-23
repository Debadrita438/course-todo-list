import CourseGoalItem from '../course-goal-item/course-goal-item.component';

const CourseGoalList = ({ courseGoals, onDeleteGoal }) => {
    return ( 
        <ul>
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
        </ul>
    );
}
 
export default CourseGoalList;