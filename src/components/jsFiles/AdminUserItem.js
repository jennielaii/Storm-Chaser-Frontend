import '../cssFiles/AdminUserItem.css';

function AdminUserItem(props) {
    return (
        <div className='AdminUserItem'>
            <h4>{props.lastName}, {props.firstName}</h4>
            <h4>{props.email}</h4>
        </div>
    )
}

export default AdminUserItem;