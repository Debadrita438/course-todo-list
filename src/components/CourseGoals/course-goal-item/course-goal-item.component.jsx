import styles from './course-goal-item.module.css';

const CourseGoalItem = ({ text, id, onDelete }) => {
    const deleteHandler = () => {
        onDelete(id);
    }

    return ( 
        <li className={styles['goal-item']} onClick={deleteHandler}>
            { text }
        </li>
    );
}
 
export default CourseGoalItem;