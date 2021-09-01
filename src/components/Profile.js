import ProfilePic from "./ProfilePic"
import ProfileLink from "./ProfileLink"

const Profile = props => (
    <div>
        <ProfilePic username={props.username} />
        <ProfileLink username={props.username} />
        <div>{props.age}</div>
        <div>{props.email}</div>
    </div>
)
    
export default Profile
    