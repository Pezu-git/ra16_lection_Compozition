import List from './List';
import ListItem from './ListItem';

function ListParent(props) {

    return (
        <List className='list'>
            <ListItem>Написать отчет</ListItem>
            <ListItem>Купить молоко</ListItem>
            <ListItem>Забрать машину из ремонта</ListItem>
        </List>
    )
}

export default ListParent