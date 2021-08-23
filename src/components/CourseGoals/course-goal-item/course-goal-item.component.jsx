import './course-goal-item.styles.css';

const CourseGoalItem = ({ text, id, onDelete }) => {
    const deleteHandler = () => {
        onDelete(id);
    }

    return ( 
        <li className='goal-item' onClick={deleteHandler}>
            { text }
        </li>
    );
}
 
export default CourseGoalItem;