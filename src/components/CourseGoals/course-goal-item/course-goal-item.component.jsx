import { GoalItemStyles } from './course-goal-item.styles';

const CourseGoalItem = ({ text, id, onDelete }) => {
    const deleteHandler = () => {
        onDelete(id);
    }

    return ( 
        <GoalItemStyles onClick={deleteHandler}>
            { text }
        </GoalItemStyles>
    );
}
 
export default CourseGoalItem;