import { useDispatch } from 'react-redux'

import * as actions from './redux/actions'
import Homepage from './pages/Homepage'
function App() {
  const dispatch = useDispatch()
  dispatch(actions.getPosts.getPostsRequest())
  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;
