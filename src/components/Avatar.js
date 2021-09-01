import ProfilePic from "./ProfilePic"
import ProfileLink from "./ProfileLink"

const Avatar = props => (
    <div>
        <ProfilePic username={props.username} />
        <ProfileLink username={props.username} />
    </div>
)

export default Avatar