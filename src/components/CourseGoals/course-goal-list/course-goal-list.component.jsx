import CourseGoalItem from '../course-goal-item/course-goal-item.component';
import styles from './course-goal-list.module.css';

const CourseGoalList = ({ courseGoals, onDeleteGoal }) => {
    return ( 
        <li className={styles['goal-list']}>
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
        </li>
    );
}
 
export default CourseGoalList;