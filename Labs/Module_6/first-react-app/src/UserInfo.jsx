import Avatar from "./Avatar";

function UserInfo(props){
    return (
        <div>
            <p>
                <b>Name: </b>{props.user.name}<br/>
                <Avatar url={props.user.avatarUrl} />
            </p>
        </div>
    );
}
export default UserInfo