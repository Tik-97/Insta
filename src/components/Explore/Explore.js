import { useSelector } from 'react-redux'
import ExploreItem from '../ExploreItem/ExploreItem'
import './Explore.css'
import { selectUsers } from '../../store/slices/users/usersSlice'

function Explore() {
	const {usersData} = useSelector(selectUsers)
  return (
	 <div className='container Explore'>
		<div className='gallery'>
			{
				usersData.map(el => <ExploreItem key={el.id} img={el.avatar} likes={el.likesCount} commentsCount={el.commentsCount} />)
			}
		</div>
	 </div>
  )
}

export default Explore
